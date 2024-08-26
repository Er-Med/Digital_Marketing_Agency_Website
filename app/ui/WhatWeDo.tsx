import Button from "./Button";
import Title from "./Title";
export default function WhatWeDo() {
    return (
        <div className="flex flex-col gap-8 items-center md:flex-row md:items-start md:justify-between mt-[100px]">
            <div className="title">
                <Title text="What" highlited="we do" />
            </div>
            <div className="des items-center md:items-start md:w-[40%] flex flex-col gap-8">
                <div className="flex flex-col gap-8">
                    <p className="text-xl md:text-2xl text-center md:text-start ">
                        High-end digital experiences.Created at the heart of Manhattan,we are a should human team.
                    </p>
                    <p className="text-xl md:text-2xl text-center md:text-start ">
                        The driving force of all speeches, we believe that creation should be the point around which any strategy revolves.
                    </p>
                </div>
                <Button type="second" text="Contact" href="#" />
            </div>
        </div>
    );
}