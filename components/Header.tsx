import Link from "next/link";
export default function Header() {
    return (
        <header className="flex flex-col justify-center items-center h-20 px-4 bg-black pt-10">
            <h1 className="text-4xl font-semibold text-white">Cats!</h1>
            <h2 className="text-6xl font-semibold text-white">(Refresh to See New Cats)</h2>
        </header>
    );
}