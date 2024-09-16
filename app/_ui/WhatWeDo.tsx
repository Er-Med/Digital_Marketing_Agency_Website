import Button from "./Button";
import Title from "./Title";
import { fetchData } from "../_lib/data";
import * as motion from "framer-motion/client";
import TitleAnimation from "./animations/TitleAnimation";

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

export default async function WhatWeDo() {
  const data = await fetchData(
    "/homepage?populate[0]=whatWeDoSection&populate[1]=whatWeDoSection.button&populate[2]=whatWeDoSection.title"
  );
  const sectionData = data?.data.attributes.whatWeDoSection;

  const paragraphs = sectionData?.desc.split("\n");

  return (
    <div className='flex flex-col gap-8 items-center md:flex-row md:items-start md:justify-between mt-[100px] overflow-hidden pb-4'>
      <TitleAnimation>
        <div className='title'>
          <Title
            text={sectionData.title.title}
            highlited={sectionData.title.highlighted_title}
          />
        </div>
      </TitleAnimation>
      <motion.div
        initial={{ opacity: 0, y: 30, x: 30 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className='des items-center md:items-start md:w-[40%] flex flex-col gap-8'>
        <div className='flex flex-col gap-8'>
          {paragraphs?.map((paragraph: any, index: any) => (
            <p
              key={index}
              className='text-lg md:text-2xl text-center md:text-start '>
              {paragraph}
            </p>
          ))}
        </div>
        <Button
          text={sectionData.button.text}
          type={sectionData.button.type}
          href='/about'
        />
      </motion.div>
    </div>
  );
}
