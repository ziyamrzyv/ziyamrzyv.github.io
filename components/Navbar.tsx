import Link from "next/link";


export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-lg font-semibold">
          ziyamrzyv
        </Link>
        <div className="space-x-4">
            <button>Menu</button>
        </div>
      </div>
    </nav>
  );
}
