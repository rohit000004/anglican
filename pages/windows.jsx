import { useState, useEffect } from "react";


export default function Windows() {

    const [active, setactive] = useState(false);
    const [currentstep, setcurrentstep] = useState(1);

    const [values, setvalues] = useState({
        house: "",
        window: {
            color: null,
            hardwarecolor: null,
            wstyle: null
        },
    });

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        houseNumber: "",
        postalCode: "",
        agree: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    useEffect(() => { setactive(validateStep(currentstep, values)); }, [values, currentstep]);

    const stepValidationRules = {
        1: ["house"],
        2: ["color", "hardwarecolor", "wstyle"],
    };


    const validateStep = (step, values) => {
        if (!stepValidationRules[step]) return true;

        return stepValidationRules[step].every((field) => {
            if (step === 2) {
                return (
                    values.window &&
                    values.window.color &&
                    values.window.hardwarecolor &&
                    values.window.wstyle
                );
            }
            return values[field] !== "" && values[field] !== undefined;
        });
    };




    const nextStep = () => {
        if (validateStep(currentstep, values)) {
            setcurrentstep((prev) => prev + 1);
        }
    };

    const prevStep = () => {
        setcurrentstep((prev) => {
            const newStep = prev - 1;
            setactive(validateStep(newStep, values));
            return newStep;
        });
    };

    // Step 1
    const [selectedhouse, setselectedhouse] = useState(null);

    const House = [
        { name: 'House 1', image: '/windows-doors/house1.png' },
        { name: 'House 2', image: '/windows-doors/house2.png' },
        { name: 'House 3', image: '/windows-doors/house3.png' },
        { name: 'House 4', image: '/windows-doors/house4.png' },
        { name: 'House 5', image: '/windows-doors/house5.png' },
        { name: 'House 6', image: '/windows-doors/house6.png' },
    ];


    const handleHouseSelect = (house) => {
        setselectedhouse(house);
        setvalues((prev) => {
            const newValues = { ...prev, house: house };
            setactive(validateStep(currentstep, newValues));
            return newValues;
        });
    };



    // Step 2

    const prevwindowbtn = () => {
        if (step2selectedbtn == 'windowColors') {
            setstep2selectedbtn('windowStyles');
        }

        if (step2selectedbtn == 'windowHardware') {
            setstep2selectedbtn('windowColors');
        }
    }


    const nextwindowbtn = () => {
        if (step2selectedbtn == 'windowStyles') {
            setstep2selectedbtn("windowColors");
        }
        if (step2selectedbtn == 'windowColors') {
            setstep2selectedbtn('windowHardware');
        }
    }

    const [step2selectedbtn, setstep2selectedbtn] = useState("windowStyles");



    const WindowStyle = [
        { image: '/windows-doors/windows/style1.png' },
        { image: '/windows-doors/windows/style2.png' },
        { image: '/windows-doors/windows/style3.png' },
        { image: '/windows-doors/windows/style4.png' },
        { image: '/windows-doors/windows/style5.png' },
        { image: '/windows-doors/windows/style6.png' },
        { image: '/windows-doors/windows/style7.png' },
        { image: '/windows-doors/windows/style8.png' },
        { image: '/windows-doors/windows/style9.png' },
        { image: '/windows-doors/windows/style10.png' },
        { image: '/windows-doors/windows/style11.png' },
        { image: '/windows-doors/windows/style12.png' },
        { image: '/windows-doors/windows/style13.png' },
        { image: '/windows-doors/windows/style14.png' },
        { image: '/windows-doors/windows/style15.png' },
        { image: '/windows-doors/windows/style16.png' },
        { image: '/windows-doors/windows/style17.png' },
        { image: '/windows-doors/windows/style18.png' },
        { image: '/windows-doors/windows/style19.png' },
        { image: '/windows-doors/windows/style20.png' },
        { image: '/windows-doors/windows/style21.png' },
        { image: '/windows-doors/windows/style22.png' },
        { image: '/windows-doors/windows/style23.png' },
        { image: '/windows-doors/windows/style24.png' },
        { image: '/windows-doors/windows/style25.png' },
        { image: '/windows-doors/windows/style26.png' },
        { image: '/windows-doors/windows/style27.png' }
    ];

    const WindowColorInside = [
        { name: "White Knight", color: '/windows-doors/windowcolors/color1.png' },
        { name: "Golden Oak", color: '/windows-doors/windowcolors/color2.png' },
        { name: "Dark Woodgrain", color: '/windows-doors/windowcolors/color3.png' },
        { name: "White Woodgrain", color: '/windows-doors/windowcolors/color4.png' },
    ]


    const WindowColorOutside = [
        { name: "Dual Anthracite", color: '/windows-doors/windowcolors/color5.png' },
        { name: "Dual Golden", color: '/windows-doors/windowcolors/color6.png' },
        { name: "Dual Dark", color: '/windows-doors/windowcolors/color7.png' },
        { name: "Dual Cream", color: '/windows-doors/windowcolors/color8.png' }
    ]

    const WindowHardware = [
        { image: '/windows-doors/windowhardware/hardware1.png' },
        { image: '/windows-doors/windowhardware/hardware2.png' },
        { image: '/windows-doors/windowhardware/hardware3.png' },
        { image: '/windows-doors/windowhardware/hardware4.png' }
    ]


    const handleWindowSelection = (type, value) => {
        setvalues(prevValues => {
            const newValues = {
                ...prevValues,
                window: { ...prevValues.window, [type]: value }
            };

            return newValues;
        });
    };



    console.log(values);

    const [error, seterror] = useState("");
    const [sucess, setsuccess] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();

        const { firstName, lastName, phoneNumber, email, houseNumber, postalCode, agree } = formData;

        if (!firstName || !lastName || !phoneNumber || !email || !houseNumber || !postalCode) {
            seterror('All fields must be filled.');
            return;
        }

        else {
            seterror('');
            setsuccess("Email Has Been Sent")
        }

        try {
            const response = await fetch('/api/windows', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ values, formData }),
            });

            const result = await response.json();

            if (response.ok) {
                console.log('Success:', result);
            } else {
                console.error('Error:', result);
            }
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };




    const sections = [
        { id: 1, title: 'House Style' },
        { id: 2, title: 'Window Options' },
        { id: 3, title: 'View Summary' },
        { id: 4, title: 'Your Details' },
    ];

    const startstep = 1;
    const maxsteps = 4;


    return (
        <div className="md:w-[1100px] mx-auto mt-[2%]">


            <div className=" my-[1%] md:w-[1100px]">
                <div className="flex  justify-between px-5">
                    <div className="">
                        {currentstep >= startstep + 1 && <button className="bg-[#007fab] text-white font-bold py-2 px-3 rounded-md hover:scale-105 transition-transform text-sm active:translate-y-1" onClick={prevStep}> {`< PREVIOUS`}</button>}
                    </div>

                    <div className=" ">
                        {currentstep <= maxsteps && active && <button className="bg-[#007fab] text-white font-bold py-2 px-3 rounded-md hover:scale-105 transition-transform text-sm tracking-wider active:translate-y-1" onClick={nextStep}>{`NEXT >`}</button>}
                    </div>
                </div>
            </div>

            <div className="border md:flex border-[#cdcbcb] ">

                <div className="md:w-[40%] px-5 text-gray-800">
                    {currentstep == 1 && (
                        <div className="md:w-[400px]">
                            <div className="text-center font-bold text-[20px] py-3">House Styles</div>
                            <div className="flex flex-wrap justify-center gap-5 pb-5">
                                {House.map((house) => (
                                    <div key={house.name} onClick={() => handleHouseSelect(house)}
                                        className={`hover:bg-[#e2f4f4] w-[130px] cursor-pointer hover:opacity-75 ${selectedhouse?.name === house?.name ? 'border-[5px]  border-[#007fab] bg-[#e2f4f4]' : ''
                                            }`}
                                    >
                                        <img src={house.image} height={130} width={130} className="" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {currentstep == 2 && (
                        <div className="md:w-[400px]">
                            <div className="text-center font-bold text-[20px] py-2">Window Options</div>
                            <p className="text-center">Choose a style, colour and hardware for your new windows</p>

                            <div className="flex justify-center gap-4 items-center my-3">
                                <button onClick={() => setstep2selectedbtn("windowStyles")}
                                    className={`px-2 py-1 text-[11px] border ${step2selectedbtn === "windowStyles" ? "bg-[#007fab] text-white" : "bg-gray-200"}`}
                                > Window Styles</button>
                                <button onClick={() => setstep2selectedbtn("windowColors")}
                                    className={`px-2 py-1 text-[11px] border ${step2selectedbtn === "windowColors" ? "bg-[#007fab] text-white" : "bg-gray-200"}`}
                                > Window Colors</button>
                                <button onClick={() => setstep2selectedbtn("windowHardware")}
                                    className={`px-2 py-1 text-[11px] border ${step2selectedbtn === "windowHardware" ? "bg-[#007fab] text-white" : "bg-gray-200"}`}
                                > Window Hardware</button>
                            </div>


                            <div className="">

                                {step2selectedbtn === "windowStyles" &&
                                    <>
                                        <div className="h-[300px] overflow-auto">
                                            <div className="flex flex-wrap gap-3">
                                                {WindowStyle.map((style, index) => (
                                                    <div key={index} onClick={() => handleWindowSelection("wstyle", style)}
                                                        className={`hover:bg-[#e2f4f4] cursor-pointer hover:opacity-75 ${values?.window?.wstyle?.image === style?.image ? 'border-[3px] border-[#007fab] bg-[#e2f4f4]' : ''}`}
                                                    >
                                                        <img src={style.image} height={80} width={80} className="object-contain" />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                    </>
                                }


                                {step2selectedbtn === "windowColors" &&
                                    <>

                                        <div className="text-[12px] font-bold mt-5">Single Color</div>
                                        <p className="text-[11px]">Same colour on inside and out</p>
                                        <div className="flex flex-wrap gap-5 py-3">
                                            {WindowColorInside.map((color, index) => (
                                                <div key={index} onClick={() => handleWindowSelection("color", color)} >
                                                    <div className={`hover:bg-[#e2f4f4] rounded-[50%] w-[50px] cursor-pointer hover:opacity-75 ${values?.window?.color?.name === color?.name ? 'border-[2px] border-[#007fab] bg-[#e2f4f4]' : 'border border-[grey]'}`}>
                                                        <img src={color.color} height={50} width={50} className="object-contain rounded-[50%]" />
                                                    </div>
                                                    <div className="text-[10px] py-2">{color.name}</div>
                                                </div>
                                            ))}

                                        </div>


                                        <div className="text-[12px] font-bold mt-5">Dual Color</div>
                                        <p className="text-[11px]">White on the inside, different colour on the outside</p>
                                        <div className="flex  flex-wrap gap-5 py-3">
                                            {WindowColorOutside.map((color, index) => (
                                                <div key={index} onClick={() => handleWindowSelection("color", color)} >
                                                    <div className={`hover:bg-[#e2f4f4] rounded-[50%] w-[50px] cursor-pointer hover:opacity-75 ${values?.window?.color?.name === color?.name ? 'border-[2px] border-[#007fab] bg-[#e2f4f4]' : 'border border-[grey]'}`}>
                                                        <img src={color.color} height={50} width={50} className="object-contain rounded-[50%]" />
                                                    </div>
                                                    <div className="text-[10px] py-2">{color.name}</div>
                                                </div>
                                            ))}

                                        </div>


                                    </>
                                }


                                {step2selectedbtn === "windowHardware" &&
                                    <>

                                        <div className="text-[12px] font-bold mt-5">Window Hardware Color</div>
                                        <p className="text-[11px]">We offer 4 colors in our hardware range</p>
                                        <div className="flex flex-wrap gap-5 py-3">
                                            {WindowHardware.map((hardware, index) => (
                                                <div key={index} onClick={() => handleWindowSelection("hardwarecolor", hardware)}
                                                    className={`hover:bg-[#e2f4f4] p-2 cursor-pointer hover:opacity-75 ${values?.window?.hardwarecolor?.image === hardware?.image ? 'border-[2px] border-[#007fab] bg-[#e2f4f4]' : ''}`}
                                                >
                                                    <img src={hardware.image} height={65} width={65} className="object-contain" />
                                                </div>
                                            ))}

                                        </div>

                                    </>
                                }


                            </div>


                            <div className="flex justify-between pl-5 py-5">
                                <button disabled={step2selectedbtn === "windowStyles"} onClick={prevwindowbtn} className={`text-[11px] rounded-md py-1.5 px-2  ${step2selectedbtn === "windowStyles" ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                                    : "bg-black text-white hover:opacity-85"
                                    }`}>Previous</button>

                                <button disabled={step2selectedbtn === "windowHardware"} onClick={nextwindowbtn} className={`text-[11px] rounded-md py-1.5 px-2  ${step2selectedbtn === "windowHardware"
                                    ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                                    : "bg-black text-white hover:opacity-85"
                                    }`}>Next</button>
                            </div>
                        </div>

                    )}


                    {(currentstep == 3 || currentstep == 4) && selectedhouse &&
                        <>
                            <div className="font-bold text-[25px] my-4 px-3">Summary OF The Product</div>
                            <div className="px-3 pt-3 pb-6">
                                <img src={selectedhouse.image} />
                            </div>

                        </>
                    }


                </div>




                <div className="md:w-[60%] px-5 text-gray-800">
                    {[1, 2].includes(currentstep) && selectedhouse && (
                        <div className="p-3">
                            <img src={selectedhouse.image} />
                        </div>
                    )}


                    {currentstep == 3 &&
                        <>
                            <div className="p-4 md:mt-[60px] rounded space-y-4 text-[13px]">

                                {values.window && (
                                    <div>
                                        <h3 className="text-md text-[18px] font-semibold">uPVC Casement Window - Casement</h3>
                                        {/* {values.window.style?.image && <img src={values.window.style.image} className="w-20 h-auto border rounded" />} */}
                                        {values.window.color && (<p>Color: {values.window.color.name}</p>)}
                                        {/* {values.window.hardwarecolor && (<p>Hardware: {values.window.hardwarecolor.name}</p>)} */}
                                    </div>
                                )}



                                <div className="text-[18px] font-semibold">Get a Price For Your Doors and Windows</div>
                                <button onClick={() => setcurrentstep(4)} className="px-2 py-1.5 bg-[black] text-[white] rounded-md hover:opacity-85">Your Details</button>


                            </div>




                        </>
                    }

                    {currentstep == 4 &&
                        <>
                            <div className="max-w-lg mx-auto p-6 ">
                                <h2 className="text-xl font-semibold text-gray-700 mb-4">Contact Information</h2>

                                {/* First & Last Name (Same Row) */}
                                <div className="flex space-x-4 mb-4">
                                    <input type="text" name="firstName" placeholder="First Name" value={formData.firstName}
                                        onChange={handleChange}
                                        className="w-1/2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName}
                                        onChange={handleChange} required
                                        className="w-1/2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                {/* Contact Number */}
                                <input type="number" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber}
                                    onChange={handleChange} required
                                    className="w-full p-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />

                                {/* Email Address */}
                                <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange}
                                    className="w-full p-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required />

                                {/* House Number & Postal Code (Same Row) */}
                                <div className="flex space-x-4 mb-4">
                                    <input type="text" name="houseNumber" placeholder="House Number or Name" value={formData.houseNumber}
                                        onChange={handleChange} required
                                        className="w-1/2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <input type="text" name="postalCode" placeholder="Postal Code" value={formData.postalCode}
                                        onChange={handleChange} required
                                        className="w-1/2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>


                                <label className="flex items-center space-x-2 text-gray-700 mb-4">
                                    <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange}
                                        className="w-5 h-5 text-blue-600 border rounded focus:ring-blue-500"
                                    />
                                    <span> By providing your details you agree to being contacted under the terms of our privacy policy
                                    </span>
                                </label>


                                <div className="text-[red] text-center py-5">{error}</div>
                                <div className="text-[green] text-center py-5">{sucess}</div>


                                <div className="flex justify-center">
                                    <button onClick={handleSubmit} className={`w-[100px] py-2 rounded-lg text-white font-semibold transition ${formData.agree ? "bg-[black] hover:opacity-85" : "bg-gray-400 cursor-not-allowed"
                                        }`} disabled={!formData.agree}
                                    > Submit </button>
                                </div>
                            </div>
                        </>
                    }


                </div>

            </div>

            <div className="max-w-[1100px] mx-auto text-gray-800">
                <div className="flex">
                    {sections.map((section) => (
                        <div key={section.id} className={`w-[401px] border border-[#cdcbcb] py-3 px-3 
                        ${currentstep === section.id ? "bg-[#007fab] text-white" : "bg-white text-gray-700"} `}>
                            <div className={`sm:text-[13px] text-[9px] ${currentstep === section.id ? "" : ""}`}>Step {section.id}</div>
                            <div className={`font-semibold sm:text-[14px] text-[11px] ${currentstep === section.id ? "" : ""}`}>{section.title}</div>
                        </div>
                    ))}
                </div>
            </div>



        </div >
    )
}