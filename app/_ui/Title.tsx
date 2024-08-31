export default function Title({ text, highlited, textColor = "--black_color" }: { text: string, highlited?: string, textColor?: string }) {
    return (
        <div>
            <h2 className={`title text-[${textColor}] text-[2.2rem] md:text-[3rem]  font-bold !leading-normal`}>{text} <span className="bg-[--primary_color] text-[--white_color] px-2 rounded-sm font-semibold">{highlited}</span></h2>
        </div>
    );
}