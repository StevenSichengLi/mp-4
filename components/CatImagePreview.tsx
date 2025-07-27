import { CatImageProps } from "@/types";
import Image from "next/image";

export default function CatImagePreview({ image }: CatImageProps) {
    return (
        <div className="bg-white rounded-xl p-4 m-2 w-72 h-80 shadow-lg flex flex-col items-center justify-start">
            { /* gives an area for the image to load */ }
            <div className="relative w-64 h-64">
                <Image
                    src={image.url}
                    alt={`Cat ${image.id}`}
                    // fills the image inside the div
                    fill
                    // keeps original aspect ratio
                    className="object-contain rounded-lg"
                    sizes="256px"
                />
            </div>

            {image.breeds && image.breeds.length > 0 && (
                <p className="text-xl text-gray-700">
                    Breed: {image.breeds[0].name}
                </p>
            )}
            <p className="text-gray-500 text-xs mt-2">ID: {image.id}</p>


        </div>
    );
}
