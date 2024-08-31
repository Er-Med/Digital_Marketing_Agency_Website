import Footer from "../_ui/Footer";
import "@/app/styles.scss"
import { Header } from "../_ui/Header";
import LatestNews from "../_ui/LatestNews";
import NewsBanner from "../_ui/BlogsBanner";
import Team from "../_ui/Team";
import Hero from "../_ui/Hero";

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
