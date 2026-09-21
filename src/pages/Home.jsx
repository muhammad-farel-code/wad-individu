import Hero from "../components/Hero";
import CardGrid from "../components/CardGrid";

function Home({features}) {
    return (
        <div>
            <Hero features={features} />
            <section className="max-w-6xl mx-auto px-6 py-12">
                <CardGrid featuresData={features} />
            </section>
        </div>
    );
}

export default Home;