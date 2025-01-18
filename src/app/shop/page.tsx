import Shophead from "@/components/Shophead";
import Image from "next/image";
import React from "react";
import Delivery from "@/components/Delivery";
import Navbar from "@/components/Navbar";
import Link from "next/link";


const page = () => {
  const productImage = [
    "/modularsofa.png",
    "/dinningtable.png",
    "/outdortable.png",
    "/teakmirror.png",
    "/shop-pro-1.png",
    "/shop-pro-2.png",
    "/shop-pro-0.png",
    "/shop-pro-3.png",
    "/shop-pro-5.png",
    "/shop-pro-6.png",
    "/shop-pro-7.png",
    "/shop-pro-4.png",
    "/shop-pro-8.png",
    "/shop-pro-9.png",
    "/shop-pro-10.png",
    "/shop-pro-11.png",
  ];

  return (
<main>
  
  <Navbar bgColor="bg-white"/>
  <Shophead headText="Shop" linkChange="shop"/>
    <div className="relative text-center p-10">
      <section
        id="products"
        className="w-full mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {Array.from({ length: 16 }).map((_, index) => (
          <div
            key={index}
            className="w-80 bg-white  rounded-xl duration-500 hover:scale-105 relative "
          >
            <Link href={"#"}>
              <Image
                className="h-40 w-22 object-cover rounded-t-xl"
                src={productImage[index]}
                width={300}
                height={200}
                alt={`product ${index + 1}`}
              />

              <div className="px-4 py-3 w-72">
                <p className="text-lg  text-black ">
                  Trend Modular Sofa {index + 1}
                </p>

                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black my-3 cursor-auto">
                    RS:25000.00
                  </p>
                  <div className="ml-auto">
                    {/* <FaShoppingCart className="w-5 h-5 text-blue-800" /> */}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </section>
    </div>
    <Delivery/>
</main>    
  );
};

export default page;