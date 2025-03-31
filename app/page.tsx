import Image from "next/image";
import { stripe } from "@/lib/stripe";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Carousel } from "@/components/carousel";
import HeroImage from "@/product-assets/hero_image_2.png";

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5,
  });

  return (
    <div>
      <section className="rounded bg-gradient-to-br from-red-100 via-slate-100 to-slate-50 py-8 sm:py-12">
        <div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2">
          <div className="max-w-md space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl text-slate-700">
              Quick<span className="text-red-500">Cart...</span> Where Shopping
              Gets Exciting!
            </h2>
            <h4 className="text-xl font-semibold md:text-2xl text-slate-500 mt-[1.2rem]">
              Fresh Finds, Hot Deals, Zero Hassle!
            </h4>
            <p className="text-neutral-700 font-sans my-[2rem]">
              From must-have <span className="text-red-500">gadgets</span> to{" "}
              <span className="text-red-500">trendy fashion</span>, grab what
              you love at unbeatable prices—fast, fun, and frustration-free! 🏆
            </p>
            <Button
              asChild
              variant="default"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-red-500 text-neutral-50 hover:bg-transparent hover:text-red-500 hover:border-[1.2px] hover:border-red-500"
            >
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-xl px-8 py-6 text-[1rem]"
              >
                Browse All Products
              </Link>
            </Button>
          </div>
          <Image
            alt="Hero Image"
            // src={products.data[0].images[0]}
            src={HeroImage}
            className="rounded"
            width={450}
            height={450}
          />
        </div>
      </section>
      <section className="py-[6rem] ">
        <h1 className="text-center text-xl text-slate-600">
          Why scroll endlessly when the best deals are
        </h1>
        <h3 className="text-center md:text-4xl text-red-500 font-bold mt-[1rem] mb-[2rem]">
          Right Here... !
        </h3>
        <Carousel products={products.data} />
      </section>
    </div>
  );
}
