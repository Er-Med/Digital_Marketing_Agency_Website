// impo
export default function Statistics() {
    return (
        <div className="statistics">
            <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div className="p-6 flex flex-col items-center">
                    <h3 className="head text-[5rem] font-semibold mb-2"><span className="text-4xl">+</span>13</h3>
                    <h4 className="text-2xl text-center font-semibold">Years in Market</h4>
                </div>
                <div className="p-6 flex flex-col items-center">
                    <h3 className="head text-[5rem] font-semibold mb-2">110</h3>
                    <h4 className="text-2xl text-center font-semibold">Project done</h4>
                </div>
                <div className="p-6 flex flex-col items-center">
                    <h3 className="head text-[5rem] font-semibold mb-2">99<span className="text-4xl">%</span></h3>
                    <h4 className="text-2xl text-center font-semibold">Top feedback</h4>
                </div>
                <div className="p-6 flex flex-col items-center">
                    <h3 className="head text-[5rem] font-semibold mb-2"><span className="text-4xl">+</span>100</h3>
                    <h4 className="text-2xl text-center font-semibold">Cup of Coffee</h4>
                </div>
            </div>
        </div>
    );
}