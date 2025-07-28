import Link from "next/link";

export default function Page() {
    return (
        <main className="flex flex-col items-center justify-center h-screen text-center px-4">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6">
                This is a project using The Cat API with Next.js.
            </p>
            <Link
                href="/"
                className="text-white font-semibold text-base sm:text-lg md:text-xl px-6 py-3 rounded-lg shadow-md hover:underline"
            >
                IWantToSeeCats!
            </Link>
        </main>
    );
}