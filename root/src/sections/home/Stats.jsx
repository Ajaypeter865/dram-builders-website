import StatCard from "../../components/ui/StatCard/StatCard"
import statsData from "../../data/stats"

const Stats = () => {

    return (
        <section>
            <div>
                {statsData.map((data, index) => (
                    <StatCard key={index}
                        value={data.value}
                        label={data.label} />
                ))}

            </div>

        </section>
    )
}


export default Stats


