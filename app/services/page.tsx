// "use client"
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getServicesSectionData } from "../_lib/data";

export default function Page() {
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState<string | null>(null);

    // const [servicesData, setServicesData] = useState(null)
    // const path = usePathname()
    // // console.log(path);

    // useEffect(() => {
    //     async function fetchHeaderData() {
    //         try {
    //             const data = await getServicesSectionData();
    //             // console.log(data.data.attributes.ServicesSection);
    //             setServicesData(data.data.attributes.ServicesSection)
    //         } catch (err) {
    //             setError("Failed to fetch data");
    //         } finally {
    //             setLoading(false)
    //         }
    //     }

    //     fetchHeaderData()
    // }, [])

    // console.log(servicesData);

    // if (loading) return <div>Loading...</div>;
    // if (error) return <div>Error: {error}</div>;
    // if (!servicesData) return <div>error</div>;

    return (
        <div>
            Enter
        </div>
    );
}