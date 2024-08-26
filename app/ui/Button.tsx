import Link from "next/link";
import { PiArrowRightFill } from "react-icons/pi";

// type ButtonProps = {
//     isSecond?: boolean;
// };
export default function Button({ type = "primary", href, text = "Say Hello" }: { type: string, text: string, href: string }) {
    // const buttonType = isSecond ? 'second_button' : '';

    let buttonType;
    switch (type) {
        case "second":
            buttonType = 'second_button'
            break;
        case "third":
            buttonType = 'third_button'
            break;
        default: buttonType = 'primary'
            break;
    }

    return (
        <Link href={href}>
            <div className={`main-btn ${buttonType} bg-[#310083] text-white text-lg font-bold px-6 py-3 rounded-full flex items-center gap-3 duration-300 relative scale-90 md:scale-95 hover:scale-90 shadow-md`}>
                {text}
                <div id="star-8" className="">
                    <div id="star-9">
                        <PiArrowRightFill className="arrow" />
                    </div>
                </div>
            </div>
        </Link>
    );
}