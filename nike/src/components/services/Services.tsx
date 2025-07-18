import { services } from "@/src/constant";
import ServiceCard from "./ServiceCard";

export default function Services() {
    return (
        <>
            <section className="max-container flex justify-center flex-wrap gap-9">
                {services.map((service) => (
                    <ServiceCard key={service.label} {...service} />
                ))}
            </section>
        </>
    );
};