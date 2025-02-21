import { useState, useEffect } from "react";
import { useRouter } from "next/router";



export default function Front() {


    const [cover, setcover] = useState(true);
    const [cover2, setcover2] = useState(false);

    const handle1 = () => {
        setcover(false);
        setcover2(true);
    }

    const router = useRouter();
    const handleNavigation = (path) => { router.push(`/${path}`) };

    return (

        <>

            {cover &&
                <div className="border border-black mx-3 p-4 bg-cover bg-center md:mt-[10%]"
                    style={{ backgroundImage: "url('/background.webp')" }}>

                    <div className="md:flex justify-center gap-5 items-center relative z-10">

                        <div className="bg-white p-6 rounded-lg shadow-lg relative z-20 px-10  md:px-[150px]">
                            <div className="text-center text-[25px] md:w-[280px] capitalize">Design your doors and windows online</div>

                            <div className="grid grid-cols-3 grid-rows-2 gap-y-2 justify-items-center w-full max-w-md mx-auto mt-5">

                                <div className="rounded-full bg-orange-500 text-white w-10 h-10 flex justify-center items-center font-bold">1</div>
                                <div className="border-4 border-orange-500 text-orange-500 w-10 h-10 flex justify-center items-center font-bold rounded-full">2</div>
                                <div className="border-4 border-orange-500 text-orange-500 w-10 h-10 flex justify-center items-center font-bold rounded-full">3</div>


                                <div className="text-center font-medium">Style</div>
                                <div className="text-center font-medium">Colour</div>
                                <div className="text-center font-medium">Hardware</div>
                            </div>

                            <div className="flex justify-center">
                                <button onClick={handle1} className="bg-orange-500 text-white px-3 py-1.5 rounded-md font-bold">Start Designing</button>
                            </div>

                        </div>

                        <div className="relative z-10   md:mt-0 mt-10">
                            <img src="/first.webp" className="w-full h-auto object-cover" />
                        </div>
                    </div>
                </div>
            }




            {cover2 &&
                <>
                    <div className="md:w-[550px] mx-auto px-5 md:mt-[1.5%]">
                        <div className="text-center text-[28px]">Design and visualise your new uPVC windows and composite or uPVC door</div>
                    </div>

                    <div className="md:w-[900px] bg-cover bg-center mx-auto my-8 px-5 py-[200px]" style={{ backgroundImage: "url('/bg.jpg')" }}>

                        <div className="text-[25px] font-bold text-white text-center">Which product would you like to design & visualise?</div>
                        <div className=" font-bold text-white text-center">Select the products you wish to design:</div>

                        <div className="flex justify-center gap-10 mt-5 ">
                            <button onClick={() => handleNavigation("doors")} className="bg-white px-3 py-1.5 rounded-md font-bold">Doors</button>
                            <button onClick={() => handleNavigation("doors-windows")} className="bg-white px-3 py-1.5 rounded-md font-bold">Windows & Doors</button>
                            <button onClick={() => handleNavigation("windows")} className="bg-white px-3 py-1.5 rounded-md font-bold">Windows</button>
                        </div>

                    </div>
                </>
            }





        </>
    );
}
