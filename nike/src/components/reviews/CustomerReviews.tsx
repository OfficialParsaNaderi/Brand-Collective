import ReviewCard from "./ReviewCard";

import { reviews } from "@/src/mock/MockData";

export default function CustomerReviews() {
    return (
        <>
            <section className="container-fluid">
                <h3 className="font-palanquin text-center text-4xl font-bold">
                    What Our
                    <span className="text-red-400"> Customers </span>
                    Say?
                </h3>
                <p className="info-text m-auto mt-4 max-w-lg text-center">Hear Genuine stories from our satisfied customers about their exceptional experiences with us.</p>

                <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
                    {
                        reviews.map((review) => (
                            <ReviewCard
                                key={review.customerName}
                                imgURL={review.imgURL}
                                customerName={review.customerName}
                                rating={review.rating}
                                feedback={review.feedback}
                            />
                        ))
                    }
                </div>
            </section>
        </>
    );
};