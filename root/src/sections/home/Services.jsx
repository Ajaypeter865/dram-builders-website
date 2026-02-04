import services from "../../data/services";
import ServiceCard from "../../components/ui/ServiceCard/ServiceCard";

const Services = () => {
    return (
        <section className="services-section">

            <div className="services-header">
                <h2 className="section-title">What We Do</h2>
                <p className="section-subtitle">
                    Specialized Services for Complex Visionaries
                </p>
            </div>

            <div className="services-grid">
                {services.map((service) => (
                    <ServiceCard
                        key={service.id}
                        title={service.title}
                        description={service.description}
                    />
                ))}
            </div>

        </section>
    );
};

export default Services;
