import services from "../../data/services"
import ServiceCard from "../../components/ui/ServiceCard/serviceCard"

const Services = () => {

    return (
        <section>
            <div>
                <h3>What we do</h3>
                <h2>Specialized Services for Complex Visionaries</h2>
            </div>

            <div>
                {services.map((service) => (<ServiceCard
                    key={service.id}
                    titile={service.titile}
                    discription={service.description}
                />))}
            </div>

        </section>
    )

}


export default Services