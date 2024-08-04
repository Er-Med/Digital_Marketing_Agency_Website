import Footer from "@/app/ui/Footer";
import { Header } from "@/app/ui/Header";
import NewsBanner from "@/app/ui/BlogsBanner";
import { useRouter } from "next/router";
import "@/app/styles.scss"
import Hero from "@/app/ui/Hero";
import Button from "@/app/ui/Button";
import Img from "@/public/images/projImg.png"
import Image from "next/image";
import { FaCircleCheck } from "react-icons/fa6";
import Services from "@/app/ui/Services";
import Title from "@/app/ui/Title";

export default function servicePage() {

    const sousServices = [
        {
            image: "https://www.freepik.com/images",
            title: "Website Design",
            desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit sed diam ",
            category: "web design"
        },
        {
            image: "https://www.freepik.com/images",
            title: "Website Design",
            desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit sed diam ",
            category: "web design"
        },
        {
            image: "https://www.freepik.com/images",
            title: "Website Design",
            desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit sed diam ",
            category: "web design"
        }
    ]


    return (
        <div>
            <div className="container px-4  md:px-14 mx-auto">
                <section className="bg-white dark:bg-gray-900 my-24 md:my-32">
                    <div className="grid lg:grid-cols-2 gap-24 xl:gap-44 justify-between content-start">

                        <div className="col-span-1">
                            <div className="flex flex-col gap-6 justify-center">
                                <h1 className=" text-4xl lg:text-5xl xl:text-6xl font-bold">Développement Web</h1>
                                <p className="text-[--dark_gray_color] text-lg xl:text-xl">
                                    Créez une présence en ligne efficace avec des sites web sur mesure. Nous développons des sites web modernes, fonctionnels et optimisés pour offrir une expérience utilisateur exceptionnelle
                                </p>
                                <ul className="flex flex-col gap-4 mb-8">
                                    <li className="text-[--dark_gray_color] text-lg xl:text-xl font-semibold flex items-center gap-2"> <FaCircleCheck className="fill-orange-600 text-lg xl:text-xl" /> Création de sites e-commerce</li>
                                    <li className="text-[--dark_gray_color] text-lg xl:text-xl font-semibold flex items-center gap-2"> <FaCircleCheck className="fill-orange-600 text-lg xl:text-xl" /> Développement de sites multilingues</li>
                                    <li className="text-[--dark_gray_color] text-lg xl:text-xl font-semibold flex items-center gap-2"> <FaCircleCheck className="fill-orange-600 text-lg xl:text-xl" /> Intégration de widgets et de contenu</li>
                                    <li className="text-[--dark_gray_color] text-lg xl:text-xl font-semibold flex items-center gap-2"> <FaCircleCheck className="fill-orange-600 text-lg xl:text-xl" /> Optimisation du site pour les moteurs de recherche</li>
                                    <li className="text-[--dark_gray_color] text-lg xl:text-xl font-semibold flex items-center gap-2"> <FaCircleCheck className="fill-orange-600 text-lg xl:text-xl" /> Développement de sites mobile et tablettes</li>
                                    <li className="text-[--dark_gray_color] text-lg xl:text-xl font-semibold flex items-center gap-2"> <FaCircleCheck className="fill-orange-600 text-lg xl:text-xl" /> Développement de sites pour les réseaux sociaux</li>
                                </ul>
                                <div className="mx-auto md:mx-0">
                                    <Button text="Commencer" href="/contact" type="primary" />
                                </div>
                            </div>
                        </div>

                        <div className=" col-span-1 w-full h-full flex md:justify-end xl:justify-center">
                            <Image src={Img} alt="hero image" className="w-full object-cover aspect-video rounded-lg px-4" />
                        </div>

                    </div>
                </section>

            </div>

            {
                sousServices && (
                    <section>
                        <div className="bg-orange-50 py-32">
                            <div className="md:w-[90%] xl:w-[70%] 2xl:w-[50%] text-center pb-5 mx-auto mb-14 md:mb-20 rounded-lg ">
                                <Title text="Sous" highlited="Services" textColor="--black_color" />
                            </div>
                            <Services services={sousServices} />
                        </div>
                    </section>
                )
            }

            {/* <div>
                <NewsBanner />
            </div> */}

        </div>
    );
}