import type { CatImage } from "@/types";
import Link from "next/link";
import CatImagePreview from "@/components/CatImagePreview";


export default async function Home() {
    //error handling
    try {
        const res = await fetch("https://api.thecatapi.com/v1/images/search?limit=12&has_breeds=1", {
            headers: {
                "x-api-key": process.env.CAT_API_KEY as string,
            },
            // always fetch fresh images
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("API error");
        }

        const images: CatImage[] = await res.json();
        return (
            <>
                <header className="flex flex-col justify-center items-center h-24 px-4 bg-black mb-4">
                    <Link href="/about" className="text-white font-semibold text-lg px-6 py-3 rounded-lg shadow-md hover:underline">
                        About
                    </Link>
                </header>

                <div className="flex justify-center">
                    { /* defines how many divs per row for each screen size */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-2">
                        {images.map((img) => (
                            <CatImagePreview key={img.id} image={img}/>
                        ))}
                    </div>
                </div>
            </>
        );
    } catch (error) {
        return (
            <div className="text-center text-red-600 p-8">
                <h1 className="text-2xl font-bold">Failed to load cat data 😿</h1>
                <p>Try refreshing the page or come back later.</p>
            </div>
        );
    }
}