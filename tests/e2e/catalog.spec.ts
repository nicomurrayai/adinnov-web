import { expect, test, type Page } from "@playwright/test";

test.describe.configure({ mode: "serial" });

async function openMobileFilters(
  page: Page,
  isMobile: boolean,
) {
  if (!isMobile) return;
  const trigger = page.locator('button[aria-controls="catalog-filter-panel"]');
  await expect(trigger).toHaveAccessibleName(/Filtrar catálogo/);
  await trigger.click();
  await expect(trigger).toHaveAttribute("aria-expanded", "true");
}

test.describe("catálogo interactivo", () => {
  test("filtra por familia, sincroniza la URL y restaura historial", async ({
    page,
    isMobile,
  }) => {
    await page.goto("/productos");
    await expect(page.getByText(/^47 resultados$/)).toBeVisible();
    await openMobileFilters(page, isMobile);

    const family = page.getByRole("group", { name: "Familia" });
    await family.getByRole("button", { name: /LED/ }).click();
    await expect(page).toHaveURL(/familia=led/);
    await expect(page.getByText(/^10 resultados$/)).toBeVisible();

    await family.getByRole("button", { name: /Tótems/ }).click();
    await expect(page).toHaveURL(/familia=totems-terminales/);
    await expect(page).not.toHaveURL(/familia=led/);

    await page.goBack();
    await expect(page).toHaveURL(/familia=led/);
    await expect(family.getByRole("button", { name: /LED/ })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    await expect(page.getByText(/^10 resultados$/)).toBeVisible();

    await page.goBack();
    await expect(page).not.toHaveURL(/familia=/);
    await expect(page.getByText(/^47 resultados$/)).toBeVisible();
  });

  test("una URL compartible conserva filtros al volver desde una ficha", async ({
    page,
    isMobile,
  }) => {
    const filteredUrl = "/productos?familia=led";
    await page.goto(filteredUrl);
    await openMobileFilters(page, isMobile);

    await expect(page.getByText(/^10 resultados$/)).toBeVisible();
    await expect(
      page.getByRole("group", { name: "Familia" }).getByRole("button", {
        name: /LED/,
      }),
    ).toHaveAttribute("aria-pressed", "true");

    await page.getByRole("link", { name: /^Ver / }).first().click();
    await expect(page).toHaveURL(/\/productos\//);
    await page.goBack();

    await expect(page).toHaveURL(
      (url) => `${url.pathname}${url.search}` === filteredUrl,
    );
    await expect(page.getByText(/^10 resultados$/)).toBeVisible();
  });

  test("muestra estado vacío y permite limpiar la búsqueda", async ({
    page,
    isMobile,
  }) => {
    await page.goto("/productos");
    await openMobileFilters(page, isMobile);
    const search = page.getByRole("searchbox", { name: "Buscar producto" });

    await search.fill("producto-que-no-existe-9f3b7a");
    await expect(page).toHaveURL(/q=producto-que-no-existe-9f3b7a/);
    await expect(page.getByText(/^0 resultados$/)).toBeVisible();
    await expect(
      page.getByRole("heading", {
        level: 3,
        name: "Probemos una combinación más amplia.",
      }),
    ).toBeVisible();

    await page.getByRole("button", { name: "Ver todo el catálogo" }).click();
    await expect(page).toHaveURL(/\/productos$/);
    await openMobileFilters(page, isMobile);
    await expect(search).toHaveValue("");
    await expect(page.getByText(/^47 resultados$/)).toBeVisible();
  });
});
