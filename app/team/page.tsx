import Footer from "../ui/Footer";
import "@/app/styles.scss"
import { Header } from "../ui/Header";
import LatestNews from "../ui/LatestNews";
import NewsBanner from "../ui/BlogsBanner";
import Team from "../ui/Team";
import Hero from "../ui/Hero";

export default function page() {
    return (
        <div>
            <div className="container px-4 md:px-14 mx-auto">
                <div className="lg:w-[80%] mx-auto">
                    <Hero title="Degital team" desc="notre identité est façonnée par notre passion pour l'innovation et notre engagement envers l'excellence"
                        btnHref="/contact"
                        btnText="Join our Team"
                        btnType="primary"
                        titileSize="100px"
                    />
                </div>

                <div className="mb-32 ">
                    <Team />
                </div>
            </div>
            <NewsBanner />

        </div>)
}
