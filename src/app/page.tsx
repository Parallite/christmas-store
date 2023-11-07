import { GreetingBox } from "@/components/GreetingBox";
import { hennyPennyFont } from "../../public/fonts/fonts";
import { Ribbon } from "@/components/Ribbon";
import { MarketingCard } from "@/components/MarketingCard";

import offerDecoration from '../../public/images/decorations/decoration.jpg'
import offerTree from '../../public/images/trees/tree.jpg'
import offerLights from '../../public/images/lights/lights.jpg'
import offerToys from '../../public/images/toys/toys.jpg'

import deliverMan from '../../public/images/delivery/delivery.jpg'

export default function Home() {
  
  return (
    <>
      <section>
        <GreetingBox />
      </section>
      <Ribbon />
      <div className="container mx-auto">
        <section className="text-primary-white">
          <div className={hennyPennyFont.className}>
            <h1 className="font-extrabold text-8xl my-20">
              <span className="text-dark-green">Home</span>
            </h1>
          </div>
          <div className="flex justify-center flex-col align-middle my-20">
            <div className="text-center">
              <h2 className="lg:text-lg 2xl:text-3xl font-extrabold text-dark-green p-4 mb-10 uppercase">What we <span className="text-primary-pink">offer</span></h2>
              <div className="flex justify-between align-middle flex-col mb-10">
                <div className="flex gap-x-8 mb-10">
                  <MarketingCard img={offerDecoration} title={"decorations"} description={"decorations"} width={750} height={750} />
                  <MarketingCard img={offerTree} title={"tree"} description={"tree"} width={750} height={750} />
                </div>
                <div className="flex gap-x-8 mb-10">
                  <MarketingCard img={offerLights} title={"lights"} description={"lights"} width={750} height={750} />
                  <MarketingCard img={offerToys} title={"toys"} description={"toys"} width={750} height={750} />
                </div>
              </div>
            </div>
            <div className="text-center">
              <h2 className="lg:text-lg 2xl:text-3xl font-extrabold text-dark-green p-4 mb-10 uppercase">Hot <span className="text-primary-pink">Deals</span></h2>
              <div className="flex justify-between align-middle gap-x-8 mb-10">
                <MarketingCard img={offerLights} title={"lights"} description={""} width={750} height={750} />
                <MarketingCard img={offerToys} title={"toys"} description={""} width={750} height={750} />
              </div>
            </div>
            <div className="text-center">
              <h2 className="lg:text-lg 2xl:text-3xl font-extrabold text-dark-green p-4 mb-10 uppercase">Fast <span className="text-primary-pink">Delivery</span></h2>
              <div className="align-middle gap-x-8 mb-10">
                <MarketingCard img={deliverMan} title={"delivery"} description={"delivery"} width={0} height={0} />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Ribbon />
    </>
  )
}
