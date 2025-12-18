import { Link } from "react-router";

export default function Navbar() {
  return (
    <header className="bg-blue-600 text-white shadow-md sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <nav aria-label="Navigasi utama" className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-200 transition duration-300">
            Home
          </Link>
          <Link to="/projects" className="hover:text-blue-200 transition duration-300">
            Projects
          </Link>
          <Link to="/contact" className="hover:text-blue-200 transition duration-300">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
