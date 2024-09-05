// impo
"use client"

import { useEffect, useState } from "react";
import { getStatisticsData } from "../_lib/data";


interface StatisticAttributes {
    symbol: string;
    number: number;
    title: string;
}

interface Statistic {
    id: number;
    attributes: StatisticAttributes;
}

export default function Statistics() {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [statistics, setStatistics] = useState<Statistic[]>()

    useEffect(() => {
        async function fetchStatisticsData() {
            try {
                const data = await getStatisticsData();
                const statisticsData = data.data;
                setStatistics(statisticsData);
            } catch (err) {
                setError("Failed to fetch data");
            } finally {
                setLoading(false)
            }
        }
        fetchStatisticsData()
    }, [])

    // console.log(statistics);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: slug {error}</div>;
    if (!statistics?.length) return <div>error</div>;

    return (
        <div className="statistics">
            <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {
                    statistics.map((statistic) => (
                        <div key={statistic.id} className="p-6 flex flex-col items-center">
                            <h3 className="head text-[5rem] font-semibold mb-2"><span className="text-4xl">{statistic.attributes.symbol}</span>{statistic.attributes.number}</h3>
                            <h4 className="text-2xl text-center font-semibold">{statistic.attributes.title}</h4>
                        </div>
                    ))
                }

                {/* <div className="p-6 flex flex-col items-center">
                    <h3 className="head text-[5rem] font-semibold mb-2"><span className="text-4xl">+</span>13</h3>
                    <h4 className="text-2xl text-center font-semibold">Years in Market</h4>
                </div>
                <div className="p-6 flex flex-col items-center">
                    <h3 className="head text-[5rem] font-semibold mb-2">110</h3>
                    <h4 className="text-2xl text-center font-semibold">Project done</h4>
                </div>
                <div className="p-6 flex flex-col items-center">
                    <h3 className="head text-[5rem] font-semibold mb-2">99<span className="text-4xl">%</span></h3>
                    <h4 className="text-2xl text-center font-semibold">Top feedback</h4>
                </div>
                <div className="p-6 flex flex-col items-center">
                    <h3 className="head text-[5rem] font-semibold mb-2"><span className="text-4xl">+</span>100</h3>
                    <h4 className="text-2xl text-center font-semibold">Cup of Coffee</h4>
                </div> */}
            </div>
        </div>
    );
}