import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { fetchData } from "../_lib/data";
import Title from "./Title";

export default async function FAQ() {
  const data = await fetchData(
    "/about-page?populate[faq][populate]=title,question"
  );

  const faq = data.data.attributes.faq;

  const sectionTitile = faq.title;
  const questions = faq.question.map((question: any) => {
    return {
      question: question.question,
      answer: question.answer,
      icon: question.icon,
    };
  });

  const faqData = {
    title: sectionTitile,
    questions: questions,
  };

  return (
    <section className='lg:w-[80%] mx-auto py-32'>
      <div className='container px-4  md:px-14 mx-auto'>
        <div className='mb-14 md:mb-20 text-center w-full'>
          <Title
            text={""}
            highlited={faqData.title.highlighted_title}
          />
        </div>

        <div className='  mx-auto mt-8 md:w-4/6 divide-y'>
          {faqData.questions.map(
            (q: { id: number; question: string; answer: string }) => (
              <Accordion
                key={q.id}
                type='single'
                collapsible>
                <AccordionItem value='item-1'>
                  <AccordionTrigger className='text-2xl hover:no-underline'>
                    {q.question}
                  </AccordionTrigger>
                  <AccordionContent className='text-base'>
                    {q.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            )
          )}
        </div>
      </div>
    </section>
  );
}
