import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-semibold text-white">QuickCart</h2>
          <p className="mt-2 text-sm">
            Seamless shopping experience with secure payments and real-time cart
            updates.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-medium text-white">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-white">
                Products
              </Link>
            </li>
            <li>
              <Link href="/cart" className="hover:text-white">
                Cart
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-medium text-white">Contact</h3>
          <p className="mt-2 text-sm">Email: support@quickcart.com</p>
          <p className="text-sm">Phone: +1 234 567 890</p>
          <div className="mt-4 flex space-x-4">
            <Link href="#" className="hover:text-white">
              Twitter
            </Link>
            <Link href="#" className="hover:text-white">
              Instagram
            </Link>
            <Link href="#" className="hover:text-white">
              Facebook
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} QuickCart. All rights reserved.
      </div>
    </footer>
  );
}
