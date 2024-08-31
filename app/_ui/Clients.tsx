"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { getClientsSectionData } from "../_lib/data";


interface Clients {
    data: [
        {
            id: number;
            attributes: {
                image: {
                    data: {
                        attributes: {
                            url: string;
                        }
                    }
                }
            }
        }
    ]
}

interface ClientsSection {
    id: number;
    title: string;
    clients: Clients
}


export default function Clients() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [sectionData, setSectionData] = useState<ClientsSection | null>(null)

    useEffect(() => {
        async function fetchHeaderData() {
            try {
                const data = await getClientsSectionData()
                setSectionData(data.data.attributes.ClientsSection)
            } catch (err) {
                setError("Failed to fetch data");
            } finally {
                setLoading(false)
            }
        }

        fetchHeaderData()
    }, [])

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!sectionData) return <div>error</div>;

    return (
        <div className="clients flex flex-col gap-16 ">
            <h3 className="text-3xl tracking-[0.2em] md:tracking-[0.3em] text-center text-[--second_color] font-semibold">{sectionData.title}</h3>
            <div className="grid grid-cols-2 md:grid-cols-5  gap-5 md:gap-10 justify-center ">
                {
                    sectionData.clients.data.map((client) => (
                        <div key={client.id} className="flex justify-center after:absolute duration-300 grayscale-[1.4] hover:grayscale-0 border-2 p-6 h-[200px]">
                            <Image src={"http://localhost:1337" + client.attributes.image.data.attributes.url} className="col-span-1 self-center w-full " alt="parttner logo" layout="fill" />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}