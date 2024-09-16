import TitleAnimation from "./animations/TitleAnimation";

export default function Title({
  text,
  highlited,
  textColor = "--black_color",
}: {
  text: string;
  highlited?: string;
  textColor?: string;
}) {
  return (
    <TitleAnimation>
      <h2
        className={`title text-[${textColor}] text-[2.7rem] md:text-[3.5rem]  font-bold  !leading-normal`}>
        <span className='border-b-4 border-[--primary_color] rounded-s-md'>
          {text}
        </span>
        <span className=' text-[--primary_color] px-2 font-bold md:font-extrabold border-b-4 border-black rounded-e-md'>
          {highlited}
        </span>
      </h2>
    </TitleAnimation>
  );
}
