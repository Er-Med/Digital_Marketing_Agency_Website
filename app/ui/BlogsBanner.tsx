import Button from "./Button";
import Title from "./Title";

export default function BlogsBanner() {
    return (
        <div className="bg-[--second_color]">
            <div className="container px-4  md:px-14 mx-auto py-32">
                <div className=" lg:w-[70%] mx-auto flex flex-col items-center gap-y-6">
                    <Title text="Never Miss Single" highlited="Blogs" textColor="--white_color" />
                    <p className="text-[--white_color] text-center text-lg">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et uis nostrud exercitation ullamco laboris nisi.</p>
                    <div className="w-full">
                        <form className="flex flex-col items-center lg:flex-row lg:justify-center gap-4 mt-6 w-full">
                            <input type="text" placeholder="Enter Your Email .." className="rounded-full  border px-3 py-4 w-full md:w-96" />
                            <Button type="primary" text="Subscribe" href="#" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}