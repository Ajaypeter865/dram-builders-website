import StatCard from "../../components/ui/StatCard/StatCard";
import statsData from "../../data/stats";


const Stats = () => {
    return (
        <section className="stats-section">
            <div className="stats-container">
                <div className="stats-grid">
                    {statsData.map((stat, index) => (
                        <StatCard
                            key={index}
                            icon={stat.icon}
                            value={stat.value}
                            label={stat.label}
                            highlight={stat.highlight}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;