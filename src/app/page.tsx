import { GreetingBox } from "@/components/GreetingBox";
import { hennyPennyFont } from "@/fonts/fonts";
import { Ribbon } from "@/components/Ribbon";
import { MarketingCard } from "@/components/MarketingCard";

import decoration from '@/images/decorations/decoration.jpg'
import tree from '@/images/trees/tree.jpg'
import lights from '@/images/lights/lights.jpg'
import toys from '@/images/toys/toys.jpg'

import deliverMan from '@/images/delivery/delivery.jpg'

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
                  <MarketingCard img={decoration} title={"decorations"} description={"decorations"} width={750} height={750} />
                  <MarketingCard img={tree} title={"tree"} description={"tree"} width={750} height={750} />
                </div>
                <div className="flex gap-x-8 mb-10">
                  <MarketingCard img={lights} title={"lights"} description={"lights"} width={750} height={750} />
                  <MarketingCard img={toys} title={"toys"} description={"toys"} width={750} height={750} />
                </div>
              </div>
            </div>
            <div className="text-center">
              <h2 className="lg:text-lg 2xl:text-3xl font-extrabold text-dark-green p-4 mb-10 uppercase">Hot <span className="text-primary-pink">Deals</span></h2>
              <div className="flex justify-between align-middle gap-x-8 mb-10">
                <MarketingCard img={lights} title={"lights"} description={""} width={750} height={750} />
                <MarketingCard img={toys} title={"toys"} description={""} width={750} height={750} />
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
