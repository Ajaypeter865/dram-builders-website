import StatCard from "../../components/ui/StatCard/StatCard";
import statsData from "../../data/stats";

const Stats = () => {
    return (
        <section className="stats-section">
            <div className="stats-container">
                <div className="stats-grid">
                    {statsData.map((stat, index) => (
                        <StatCard
                            key={stat.index}
                            value={stat.value}
                            label={stat.label}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
