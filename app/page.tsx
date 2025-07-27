
import CatImagePreview from "@/components/CatImagePreview";


export default async function Home() {
    const res = await fetch("https://api.thecatapi.com/v1/images/search?limit=12&has_breeds=1", {
        headers: {
            "x-api-key": process.env.CAT_API_KEY as string,
        },
        // always fetch fresh images
        cache: "no-store",
    });

    const images: CatImage[] = await res.json();

    return (
        <div className="flex justify-center">
            { /* defines how many divs per row for each screen size */ }
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-2">
                {images.map((img) => (
                    <CatImagePreview key={img.id} image={img} />
                ))}
            </div>
        </div>
    );
}