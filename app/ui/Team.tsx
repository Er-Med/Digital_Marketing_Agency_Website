'use client'
import Image from "next/image";
import blogimg from "@/public/images/men.png"
import Link from "next/link";
import { PiArrowRightFill } from "react-icons/pi";
import Button from "./Button";
// import teamApi from "@/app/lib/TeamApis"

import { usePathname } from 'next/navigation'
import { log } from "console";
import { useEffect, useState } from "react";

type ImageAttributes = {
    name: string;
    url: string;
    width: number;
    height: number;
    alternativeText: string | null;
}

type ProfileImage = {
    data: {
        id: number;
        attributes: ImageAttributes;
    }[];
}

type MemberAttributes = {
    name: string;
    job: string;
    profile_image: ProfileImage;
}

type Member = {
    attributes: MemberAttributes;
}
export default function Team() {
    const [teamMembers, setTeamMembers] = useState([])

    // const getTeamMembers_ = () => {
    //     TeamApis.getTeamMembers().then(res => {
    //         setTeamMembers(res.data.data)

    //     })
    // }

    // useEffect(() => {
    //     getTeamMembers_();
    // }, [])

    // // Log the teamMembers state whenever it changes
    // useEffect(() => {
    //     // console.log("Updated team members:", teamMembers);
    // }, [teamMembers]); // Runs whenever teamMembers changes

    const team = [{
        image: blogimg,
        name: "David Jamaes",
        role: "Web App"
    },
    {
        image: blogimg,
        name: "David Jamaes",
        role: "Web App"
    },
    {
        image: blogimg,
        name: "David Jamaes",
        role: "Web App"
    },
    {
        image: blogimg,
        name: "David Jamaes",
        role: "Web App"
    },
    {
        image: blogimg,
        name: "David Jamaes",
        role: "Web App"
    },
    {
        image: blogimg,
        name: "David Jamaes",
        role: "Web App"
    },
    {
        image: blogimg,
        name: "David Jamaes",
        role: "Web App"
    },
    {
        image: blogimg,
        name: "David Jamaes",
        role: "Web App"
    },
    {
        image: blogimg,
        name: "David Jamaes",
        role: "Web App"
    },]


    const pathname = usePathname()
    let homeTeam = team.slice(0, 6)
    return (
        <div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-y-9 gap-8 md:w-[70%] mx-auto">
                {
                    team.map((member, index) => (
                        <div key={index} className=" flex flex-col items-center [box-shadow:rgba(17,_17,_26,_0.1)_0px_8px_24px,_rgba(17,_17,_26,_0.1)_0px_16px_56px,_rgba(17,_17,_26,_0.1)_0px_24px_80px] filter duration-300 grayscale-[1.4] hover:grayscale-0 rounded-lg">
                            <div className="member w-full  rounded-md overflow-hidden" >
                                <Image className="object-covers w-full  duration-200 aspect-square " src={member.image} alt="member image" width={500} height={500} />
                            </div>
                            <div className="desc flex flex-col items-center mt-3 pb-4">
                                <h3 className="text-xl font-semibold mb-1 text-[--black_color]">{member.name}</h3>
                                <p className="text-[--primary_color] text-lg">{member.role}</p>
                            </div>
                        </div>
                    ))
                }

            </div>

            {
                pathname == "/" ? (
                    <div className="w-fit mx-auto mt-16 ">
                        <Button text="All team" href="/team" type="third" />
                    </div>
                ) : ""
            }

        </div>
    );
}