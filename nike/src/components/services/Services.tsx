import { services } from "@/src/mock/MockData";
import ServiceCard from "./ServiceCard";

export default function Services() {
    return (
        <>
            <section className="flex justify-center flex-wrap gap-9">
                {services.map((service) => (
                    <ServiceCard key={service.label} {...service} />
                ))}
            </section>
        </>
    );
};