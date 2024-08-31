"use client"

import { useEffect, useState } from "react";
import Button from "./Button";
import Title from "./Title";
import { getWhatWeDoSectionData } from "../_lib/data";

interface WhatWeDoSection {
    id: number;
    desc: string;
    title: Title;
    button: Button;
}

interface Title {
    id: number;
    title: string;
    highlighted_title: string;
}

interface Button {
    id: number;
    text: string;
    type: string;
}

export default function WhatWeDo() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [sectionData, setSectionData] = useState<WhatWeDoSection | null>(null)

    useEffect(() => {
        async function fetchHeaderData() {
            try {
                const data = await getWhatWeDoSectionData()
                setSectionData(data.data.attributes.whatWeDoSection)
            } catch (err) {
                setError("Failed to fetch data");
            } finally {
                setLoading(false)
            }
        }

        fetchHeaderData()
    }, [])

    const paragraphs = sectionData?.desc.split('\n')

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!sectionData) return <div>error</div>;

    return (
        <div className="flex flex-col gap-8 items-center md:flex-row md:items-start md:justify-between mt-[100px]">
            <div className="title">
                <Title text={sectionData.title.title} highlited={sectionData.title.highlighted_title} />
            </div>
            <div className="des items-center md:items-start md:w-[40%] flex flex-col gap-8">
                <div className="flex flex-col gap-8">

                    {
                        paragraphs?.map((paragraph, index) => (
                            <p key={index} className="text-lg md:text-2xl text-center md:text-start ">
                                {paragraph}
                            </p>
                        ))
                    }

                </div>
                <Button text={sectionData.button.text} type={sectionData.button.type} href="/about" />
            </div>
        </div>
    );
}