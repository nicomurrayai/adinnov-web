export type ProductCategoryId =
  | "totems"
  | "pizarras"
  | "terminales"
  | "kioscos"
  | "led"
  | "pantallas"
  | "software"
  | "otros";

export type ProductSection =
  | {
      heading: string;
      type: "list";
      items: string[];
    }
  | {
      heading: string;
      type: "table";
      rows: string[][];
    };

export type Product = {
  slug: string;
  title: string;
  description: string;
  category: ProductCategoryId | string;
  images: string[];
  features: string[];
  sections: ProductSection[];
  shortLabel?: string;
};

export type Category = {
  id: ProductCategoryId;
  name: string;
  description: string;
  href: string;
};

export type RentalItem = {
  slug: string;
  title: string;
  description: string;
  image?: string;
};

export type Vertical = {
  id: string;
  title: string;
  description: string;
};

export type ClientLogo = {
  name: string;
  image: string;
};

export type WorkItem = {
  title: string;
  description: string;
  image?: string;
};
