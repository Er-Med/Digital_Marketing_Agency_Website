import Image from "next/image";
import partner1 from "@/public/images/brands/Alingua.jpg"
import partner2 from "@/public/images/brands/Dr Manal Fares.jpeg"
import partner3 from "@/public/images/brands/Jean Jaurès.jpg"
import partner4 from "@/public/images/brands/Kids Planet.jpg"
import partner5 from "@/public/images/brands/La Fourmilière.jpg"
export default function Clients() {
    const parteners = [partner1, partner2, partner3, partner4, partner5]
    return (
        <div className="clients flex flex-col gap-16">
            <h3 className="text-3xl tracking-[0.2em] md:tracking-[0.3em] text-center text-[--second_color] font-semibold">WE PARTNER WITH FORWARD</h3>
            <div className="grid grid-cols-2 md:grid-cols-5  gap-5 md:gap-10 justify-center ">
                {
                    parteners.map((partner, index) => (
                        <div key={index} className="flex justify-center after:absolute duration-300 grayscale-[1.4] hover:grayscale-0 border-2 p-6">
                            <Image src={partner} className="col-span-1 self-center w-full" alt="parttner logo" />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}