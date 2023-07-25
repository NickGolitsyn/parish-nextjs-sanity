import Image from "next/image";
import { urlForImage } from "@/lib/sanity/image";

export default function ImageComp({ settings }) {
  return (
    <div className="relative z-0 mx-auto w-fit max-w-screen-lg overflow-hidden lg:rounded-lg">
        {settings && (
          <Image
            {...urlForImage(settings)}
            // src={'https://cdn.sanity.io/images/que4q559/production/2062b204d0c41b6c00fa8f57b9182e25178c6890-1015x635.jpg'}
            alt={"Thumbnail"}
            loading="eager"
            // fill
            sizes="100vw"
            className="object-cover"
            width={200}
            height={200}
            priority={true}
          />
        )}
      </div>
  )
}
