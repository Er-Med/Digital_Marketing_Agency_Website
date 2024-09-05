import { MdAccessibilityNew } from "react-icons/md";
import Title from "./Title";

export default function Features({ data }) {
 return (
  <section className=" py-32">
   <div className="container px-4  md:px-14 mx-auto">
    <div className="mx-auto md:w-[70%] text-center mb-24">
     <Title text={data.title.title} highlited={data.title.highlighted_title} textColor="var(--black_color)" />
    </div>

    <div className=" grid grid-cols-1 gap-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">

     {
      data.advantages.map((item) => (
       <div key={item.id} className="flex flex-col gap-5 mb-10 items-center ">
        <div className="text-[5rem]">
         {item.icon === "MdAccessibilityNew" ? <MdAccessibilityNew /> : <MdAccessibilityNew />}
        </div>
        <h3 className="text-2xl font-medium capitalize">{item.title}</h3>
        <p className="text-center">{item.description}</p>
       </div>

      ))
     }

    </div>
   </div>
  </section>
 );
}