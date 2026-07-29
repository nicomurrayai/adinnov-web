"use client";

import { getImageProps } from "next/image";
import ReactDOM from "react-dom";

export const catalogImageSizes =
  "(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw";

export function CatalogPreload({ src, alt }: { src: string; alt: string }) {
  const { props } = getImageProps({
    src,
    alt,
    fill: true,
    sizes: catalogImageSizes,
  });

  ReactDOM.preload(props.src, {
    as: "image",
    fetchPriority: "high",
    imageSrcSet: props.srcSet,
    imageSizes: props.sizes,
  });

  return null;
}
