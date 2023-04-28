import Image from "next/image";
import { urlForImage } from "@/lib/sanity/image";

export default function CoverImage({ settings }) {
  return (
    <div className="relative z-0 mx-auto aspect-[16/10] max-w-screen-lg overflow-hidden lg:rounded-lg">
        {settings.about && (
          <Image
            {...urlForImage(settings.openGraphImage)}
            // src={settings.openGraphImage._ref}
            // alt={settings.openGraphImage?.alt || "Thumbnail"}
            loading="eager"
            fill
            sizes="100vw"
            className="object-cover"
            width={null}
            height={null}
            priority={true}
          />
        )}
      </div>
  )
}
