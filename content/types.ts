export type ProductCategoryId =
  | "totems"
  | "pizarras"
  | "terminales"
  | "kioscos"
  | "led"
  | "pantallas"
  | "software"
  | "otros";

export type ProductFamilyId =
  | "totems-terminales"
  | "pantallas-profesionales"
  | "led"
  | "pizarras-interaccion"
  | "kioscos-autogestion"
  | "software-servicios";

export type ProductEnvironment = "indoor" | "outdoor";

export type ProductInteraction = "touch" | "non-touch" | "mixed";

export type ProductAvailability = {
  sale: boolean;
  rental: boolean;
};

type ProductMediaBase = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ProductImageMedia = ProductMediaBase & {
  type: "image";
};

export type ProductVideoMedia = ProductMediaBase & {
  type: "video";
  poster: string;
};

export type ProductMedia = ProductImageMedia | ProductVideoMedia;

export type ProductHighlight = {
  title: string;
  description: string;
};

export type ProductSpec = {
  label: string;
  value: string;
};

export type ProductVariant = {
  name: string;
  description?: string;
  specs?: ProductSpec[];
};

export type ProductSpecGroup = {
  title: string;
  specs: ProductSpec[];
};

export type ProductFAQ = {
  question: string;
  answer: string;
};

export type ProductSeo = {
  title?: string;
  description?: string;
};

export type ProductEnrichment = {
  availability: ProductAvailability;
  media: ProductMedia[];
  highlights: ProductHighlight[];
  variants: ProductVariant[];
  specGroups: ProductSpecGroup[];
  useCases: string[];
  includedServices: string[];
  faqs: ProductFAQ[];
  relatedSlugs: string[];
  seo: ProductSeo;
  family: ProductFamilyId;
  environments: ProductEnvironment[];
  interaction: ProductInteraction;
};

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
} & Partial<ProductEnrichment>;

export type EnrichedProduct = Omit<Product, keyof ProductEnrichment> &
  ProductEnrichment;

export type CatalogProductSummary = Pick<
  EnrichedProduct,
  | "slug"
  | "title"
  | "description"
  | "family"
  | "environments"
  | "interaction"
  | "availability"
  | "media"
> & {
  searchText: string;
};

export type Category = {
  id: ProductFamilyId;
  name: string;
  shortName: string;
  description: string;
  href: string;
  sourceCategories: ProductCategoryId[];
};

export type RentalItem = {
  slug: string;
  title: string;
  description: string;
  image?: string;
};

export type ClientLogo = {
  name: string;
  image: string;
};

export type WorkItem = {
  title: string;
  description: string;
  image?: string;
  images: string[];
};
