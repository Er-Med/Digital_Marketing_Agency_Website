"use client"

import { AwaitedReactNode, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react";
import { getFAQData } from "../_lib/data";
import Title from "./Title";

export default function FAQ() {

 const [loading, setLoading] = useState(true);
 const [error, setError] = useState<string | null>(null);
 const [faqData, setFaqData] = useState<any>()

 useEffect(() => {
  async function fetchFAQData() {
   try {
    const data = await getFAQData();
    const faq = data.data.attributes.faq

    const sectionTitile = faq.title
    const questions = faq.question.map((question: any) => {
     return {
      question: question.question,
      answer: question.answer,
      icon: question.icon
     }
    })

    const sectionData = {
     title: sectionTitile,
     questions: questions
    }

    setFaqData(sectionData)

   } catch (err) {
    setError("Failed to fetch data");
   } finally {
    setLoading(false)
   }
  }
  fetchFAQData()
 }, [])

 if (loading) return <div>Loading...</div>;
 if (error) return <div>Error: slug {error}</div>;
 if (!faqData) return <div>error</div>;

 return (
  <section className="lg:w-[80%] mx-auto py-32">
   <div className="container px-4  md:px-14 mx-auto">
    <div className="mb-14 md:mb-20 text-center w-full">
     <Title text={""} highlited={faqData.title.highlighted_title} />
    </div>

    <div className="  mx-auto mt-8 md:w-4/6 divide-y">
     {
      faqData.questions.map((q: { id: Key; question: string; answer: string }) => (
       <div className="py-8" key={q.id}>
        <details className=" group" >
         <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
          <h3 className="text-2xl  font-semibold"> {q.question}</h3>
          <span className="transition group-open:rotate-180">
           <svg fill="none" height="24" shape-rendering="geometricPrecision"
            stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
            stroke-width="1.5" viewBox="0 0 24 24" width="24">
            <path d="M6 9l6 6 6-6"></path>
           </svg>
          </span>
         </summary>
         <p className="group-open:animate-fadeIn mt-3 text-lg leading-relaxed text-gray-700">{q.answer}
         </p>
        </details>
       </div>
      ))}
    </div>

   </div>


  </section >
 );
}