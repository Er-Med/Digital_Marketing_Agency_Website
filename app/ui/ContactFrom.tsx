'use client'
import { useState } from "react";

export default function ContactFrom() {
    const [open, setOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];

    const toggleOption = (option: string) => {
        if (selectedOptions.includes(option)) {
            setSelectedOptions(selectedOptions.filter(item => item !== option));
        } else {
            setSelectedOptions([...selectedOptions, option]);
        }
    };

    return (
        <div>
            <form>
                <div className=" ms-auto space-y-3 flex flex-col gap-3 *:[input]:focus:border-4">
                    <div className="flex flex-wrap gap-4 ">
                        <div className="flex flex-col flex-1">
                            <label htmlFor=""><h3 className="text-lg font-semibold text-[--second_color]">Full Name *</h3></label>
                            <input type='text' placeholder='Name'
                                className=" rounded-md border-2 border-gray-200 py-4 px-5 outline-none" />
                        </div>
                        <div className="flex flex-col flex-1">
                            <label htmlFor=""><h3 className="text-lg font-semibold text-[--second_color]">Votre Email *</h3></label>
                            <input type='email' placeholder='Email'
                                className="rounded-md border-2 border-gray-200 py-4 px-5 outline-none" />
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4  ">
                        <div className="flex flex-col flex-1">
                            <label htmlFor=""><h3 className="text-lg font-semibold text-[--second_color]">Phone *</h3></label>
                            <input type='email' placeholder='Phone No.'
                                className="rounded-md border-2 border-gray-200 py-4 px-5 outline-none" />
                        </div>
                        <div className="flex flex-col flex-1">
                            <label htmlFor=""><h3 className="text-lg font-semibold text-[--second_color]">Subjrct *</h3></label>
                            <input type='text' placeholder='Name'
                                className="rounded-md border-2 border-gray-200 py-4 px-5 outline-none" />
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4  ">
                        <div className="flex flex-col flex-1">
                            <label htmlFor=""><h3 className="text-lg font-semibold text-[--second_color]">le nom de l&apos;entreprise *</h3></label>
                            <input type='text' placeholder='Cobarnd...'
                                className="rounded-md border-2 border-gray-200 py-4 px-5" />
                        </div>
                        <div className="flex flex-col flex-1">
                            <label htmlFor=""><h3 className="text-lg font-semibold text-[--second_color]">Service *</h3></label>
                            <div className=" relative">
                                <button
                                    type="button"
                                    onClick={() => setOpen(!open)}
                                    className="relative w-full  text-left cursor-default rounded-md border-2 border-gray-200 py-4 px-5"
                                >
                                    <span className="block truncate">
                                        {selectedOptions.length ? selectedOptions.join(', ') : 'Select options'}
                                    </span>
                                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                        <svg
                                            className="h-5 w-5 text-gray-400"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </span>
                                </button>

                                {open && (
                                    <div
                                        className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                                        onBlur={() => setOpen(false)}
                                    >
                                        {options.map(option => (
                                            <div
                                                key={option}
                                                onClick={() => toggleOption(option)}
                                                className="cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-indigo-600 hover:text-white"
                                            >
                                                <span
                                                    className={`block truncate ${selectedOptions.includes(option) ? 'font-semibold' : ''
                                                        }`}
                                                >
                                                    {option}
                                                </span>
                                                {selectedOptions.includes(option) && (
                                                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 hover:text-white">
                                                        <svg
                                                            className="h-5 w-5"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </span>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col flex-1">
                        <label htmlFor=""><h3 className="text-lg font-semibold text-[--second_color]">Message *</h3></label>
                        <textarea placeholder='Message' rows={6}
                            className="w-full rounded-3xl border-2 border-gray-200 px-6 text-lg pt-3 outline-none"></textarea>
                    </div>
                    <button type='button'
                        className="text-[--white_color] w-fit relative bg-[--second_color] transition hover:translate-x-1 hover:translate-y-1 font-semibold rounded-lg text-lg px-6 py-3 !mt-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='currentColor' className="mr-2 inline" viewBox="0 0 548.244 548.244">
                            <path fill-rule="evenodd" d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z" clip-rule="evenodd" data-original="#000000" />
                        </svg>
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
}