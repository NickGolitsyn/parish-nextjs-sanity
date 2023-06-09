import Image from "next/image";
import { urlForImage } from "@/lib/sanity/image";

export default function CoverImage({ settings }) {
  return (
    <div className="relative z-0 mx-auto aspect-[16/10] max-w-screen-lg overflow-hidden lg:rounded-lg">
        {settings.openGraphImage && (
          <Image
            {...urlForImage(settings.openGraphImage)}
            // src={'https://cdn.sanity.io/images/que4q559/production/2062b204d0c41b6c00fa8f57b9182e25178c6890-1015x635.jpg'}
            alt={"Thumbnail"}
            loading="eager"
            fill
            sizes="100vw"
            className="object-cover"
            width={0}
            height={0}
            priority={true}
          />
        )}
      </div>
  )
}
