import Link from "next/link";
// import { useEffect, useState } from "react";

export default function Footer() {
  // const DynamicDate = () => {
  //   const [date, setDate] = useState("");

  //   useEffect(() => {
  //     setDate(new Date().toLocaleString());
  //   }, []);

  //   return <p>{date}</p>;
  // };

  return (
    <footer className="bg-slate-700 text-slate-300 py-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-semibold text-neutral-50">QuickCart</h2>
          <p className="mt-2 text-sm">
            Seamless shopping experience with secure payments and real-time cart
            updates.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-medium text-neutral-50">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <Link href="/" className="hover:text-neutral-50">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-neutral-50">
                Products
              </Link>
            </li>
            <li>
              <Link href="/cart" className="hover:text-neutral-50">
                Cart
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-neutral-50">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-medium text-neutral-50">Contact</h3>
          <p className="mt-2 text-sm">Email: support@quickcart.com</p>
          <p className="text-sm">Phone: +1 234 567 890</p>
          <div className="mt-4 flex space-x-4">
            <Link href="#" className="hover:text-neutral-50">
              Twitter
            </Link>
            <Link href="#" className="hover:text-neutral-50">
              Instagram
            </Link>
            <Link href="#" className="hover:text-neutral-50">
              Facebook
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="border-t border-slate-700 mt-8 pt-4 text-center text-sm"> */}
      {/* &copy; {} QuickCart. All rights reserved. */}
      {/* </div> */}
    </footer>
  );
}
