import Navbar from "@/src/components/Common/Navbar";
import { CustomerReviews, Hero, PopularProducts, Services, SpecialOffers, Subscribe, SuperQuality, } from "@/public/assets/ts/script";
import Footer from "@/src/components/Common/Footer";

export default function Main() {
    return (
        <>

            <section className="padding-x pl-15 py-8 absolute z-10 w-full">
                <Navbar />
            </section>

            <main className="Main relative">

                <section className="xl:padding-l wide:padding-r padding-b">
                    <Hero />
                </section>

                <section className="padding-x pl-15 py-25 pt-50">
                    <PopularProducts />
                </section>

                <section className="padding-x pl-15 py-20">
                    <SuperQuality />
                </section>

                <section className="padding-x pl-15 py-20">
                    <Services />
                </section>

                <section className="padding-x pl-15 py-20">
                    <SpecialOffers />
                </section>

                <section className="padding-x pl-15 py-20">
                    <CustomerReviews />
                </section>

                <section className="padding-x sm:py-32 pl-15 py-16 w-full">
                    <Subscribe />
                </section>

            </main>

            <section className="bg-black padding-x padding-t pb-16 max-container">
                <Footer />
            </section>

        </>
    )
}