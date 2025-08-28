import Image, { ImageProps } from "next/image";
import { urlFor, SanityImage } from "@/sanity/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

interface SanityImageProps extends Omit<ImageProps, "src" | "alt"> {
  asset: SanityImage | SanityImageSource;
  alt?: string;
  fill?: boolean;
}

export default function SanityImageComp({
  asset,
  alt,
  ...props
}: SanityImageProps) {
  if (!asset) return null;

  const imageUrl = urlFor(asset).url();

  return <Image src={imageUrl} alt={alt || ""} {...props} />;
}
