import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-gray-800">
            Logo
          </Link>
          <div className="space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-800">
              Home
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-gray-800">
              Services
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-800">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-800">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}