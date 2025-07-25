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

                <section className="xl:padding-l wide:padding-r padding-b container max-w-[1600px] mx-auto">
                    <Hero />
                </section>

                <section className="padding-x pl-15 py-25 pt-50 container max-w-[1600px] mx-auto">
                    <PopularProducts />
                </section>

                <section className="padding-x pl-15 py-20 container max-w-[1600px] mx-auto">
                    <SuperQuality />
                </section>

                <section className="padding-x pl-15 py-20 container max-w-[1600px] mx-auto">
                    <Services />
                </section>

                <section className="padding-x pl-15 py-20 container max-w-[1600px] mx-auto">
                    <SpecialOffers />
                </section>

                <section className="padding-x lg:pl-15 py-20 container max-w-[1600px] mx-auto">
                    <CustomerReviews />
                </section>

                <section className="padding-x sm:py-32 lg:pl-15 py-16 w-full container max-w-[1600px] mx-auto">
                    <Subscribe />
                </section>

            </main>

            <section className="bg-black padding-x padding-t pb-16 container max-w-[1600px] mx-auto">
                <Footer />
            </section>

        </>
    );
};