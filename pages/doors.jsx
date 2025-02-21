import { useState, useEffect } from "react";


export default function Doors() {

    const [active, setactive] = useState(false);
    const [currentstep, setcurrentstep] = useState(1);

    const [values, setvalues] = useState({
        house: "",
        door: {
            ExternalColor: null,
            InternalColor: null,
            color: null,
            glass: null,
            handle: null,
            knocker: null,
            letterplate: null,
            dstyle: null,
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
        2: ["ExternalColor", "InternalColor", "color", "glass", "handle", "knocker", "letterplate", "dstyle"],
    };


    const validateStep = (step, values) => {
        if (!stepValidationRules[step]) return true;

        return stepValidationRules[step].every((field) => {
            if (step === 2) {
                return (
                    values.door &&
                    values.door.ExternalColor &&
                    values.door.InternalColor &&
                    values.door.color &&
                    values.door.glass &&
                    values.door.handle &&
                    values.door.knocker &&
                    values.door.letterplate &&
                    values.door.dstyle
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


    // Step 3
    const DoorStyle = [
        { image: '/windows-doors/doors/style1.png' },
        { image: '/windows-doors/doors/style2.png' },
        { image: '/windows-doors/doors/style3.png' },
        { image: '/windows-doors/doors/style4.png' },
        { image: '/windows-doors/doors/style5.png' },
        { image: '/windows-doors/doors/style6.png' },
        { image: '/windows-doors/doors/style7.png' },
        { image: '/windows-doors/doors/style8.png' },
        { image: '/windows-doors/doors/style9.png' },
        { image: '/windows-doors/doors/style10.png' },
        { image: '/windows-doors/doors/style11.png' },
        { image: '/windows-doors/doors/style12.png' },
        { image: '/windows-doors/doors/style13.png' },
        { image: '/windows-doors/doors/style14.png' },
        { image: '/windows-doors/doors/style15.png' },
        { image: '/windows-doors/doors/style16.png' },
        { image: '/windows-doors/doors/style17.png' },
        { image: '/windows-doors/doors/style18.png' },
        { image: '/windows-doors/doors/style19.png' },
        { image: '/windows-doors/doors/style20.png' },
        { image: '/windows-doors/doors/style21.png' },
        { image: '/windows-doors/doors/style22.png' },
        { image: '/windows-doors/doors/style23.png' },
        { image: '/windows-doors/doors/style24.png' },
    ];

    const DoorColorClassic = [
        { name: "White", color: '/windows-doors/doorcolor/color1.png' },
        { name: "Anthracite Grey", color: '/windows-doors/doorcolor/color2.png' },
        { name: "Cream", color: '/windows-doors/doorcolor/color3.png' },
        { name: "Duck Egg Blue", color: '/windows-doors/doorcolor/color4.png' },
        { name: "Fir Green", color: '/windows-doors/doorcolor/color5.png' },
        { name: "Jet Black", color: '/windows-doors/doorcolor/color6.png' },
        { name: "Ruby Red", color: '/windows-doors/doorcolor/color7.png' },
        { name: "Sage Green", color: '/windows-doors/doorcolor/color8.png' },
        { name: "Steel Blue", color: '/windows-doors/doorcolor/color9.png' },
        { name: "Medium Oak", color: '/windows-doors/doorcolor/color10.png' },
        { name: "Dark Woodgrain", color: '/windows-doors/doorcolor/color11.png' },
    ]


    const DoorColorPremium = [
        { name: "Agate Grey", color: '/windows-doors/doorcolor/color12.png' },
        { name: "Cobalt Blue", color: '/windows-doors/doorcolor/color13.png' },
        { name: "Fern Green", color: '/windows-doors/doorcolor/color14.png' },
        { name: "Pastel Blue", color: '/windows-doors/doorcolor/color15.png' },
        { name: "Pebble Grey", color: '/windows-doors/doorcolor/color16.png' },
        { name: "Purple Violet", color: '/windows-doors/doorcolor/color17.png' },
        { name: "Turquoise Blue", color: '/windows-doors/doorcolor/color18.png' },
        { name: "Zinc Yellow", color: '/windows-doors/doorcolor/color19.png' },
    ]

    const DoorHardwareHandle = [
        { name: "None", image: '/windows-doors/doorhardware/hardware1.png' },
        { name: "Lever Handles", image: '/windows-doors/doorhardware/hardware2.png' },
        { name: "Finger Pull Escutcheon", image: '/windows-doors/doorhardware/hardware3.png' },
        { name: "Conexis Handle", image: '/windows-doors/doorhardware/hardware4.png' },
    ]

    const DoorHardwareLetterPlates = [
        { name: "None", image: '/windows-doors/doorhardware/hardware5.png' },
        { name: "LetterPlate", image: '/windows-doors/doorhardware/hardware6.png' },
    ]

    const DoorHardwareKnockers = [
        { name: "None", image: '/windows-doors/doorhardware/hardware7.png' },
        { name: "Urn Knocker", image: '/windows-doors/doorhardware/hardware8.png' },
        { name: "Ponytail Knocker", image: '/windows-doors/doorhardware/hardware9.png' }
    ]

    const DoorHardwareColor = [
        { name: "White", image: '/windows-doors/doorhardware/hardwarecolor1.png' },
        { name: "Black", image: '/windows-doors/doorhardware/hardwarecolor2.png' },
        { name: "Chrome", image: '/windows-doors/doorhardware/hardwarecolor3.png' },
        { name: "Gold", image: '/windows-doors/doorhardware/hardwarecolor4.png' },
    ]

    const DoorGlass = [
        { name: "Clear", image: '/windows-doors/doorglass/glass1.jpg' },
        { name: "Silver Mist", image: '/windows-doors/doorglass/glass2.jpg' },
    ]


    const prevdoorbtn = () => {
        if (step3selectedbtn == 'DoorColors') {
            setstep3selectedbtn('DoorStyles');
        }

        if (step3selectedbtn == 'DoorHardware') {
            setstep3selectedbtn('DoorColors');
        }

        if (step3selectedbtn == 'DoorGlass') {
            setstep3selectedbtn('DoorHardware');
        }
    }

    const nextdoorbtn = () => {
        if (step3selectedbtn == 'DoorStyles') {
            setstep3selectedbtn("DoorColors");
        }
        if (step3selectedbtn == 'DoorColors') {
            setstep3selectedbtn('DoorHardware');
        }

        if (step3selectedbtn == 'DoorHardware') {
            setstep3selectedbtn('DoorGlass');
        }
    }


    const [doorlist, setdoorlist] = useState(true);
    const [doorstype, setdoorstype] = useState(null);

    const handledoortype = (type) => {
        setdoorstype(type);
        setdoorlist(false);
    };


    const [step3selectedbtn, setstep3selectedbtn] = useState("DoorStyles");
    const [ColorState, setColorState] = useState("External");

    const handleDoorSelection = (type, value) => {
        setvalues(prevValues => ({
            ...prevValues,
            door: {
                ...prevValues.door,
                [type]: value
            }
        }));
    };


    // Elite Doors

    const DoorStyle2 = [
        { image: '/windows-doors/elite/style1.png' },
        { image: '/windows-doors/elite/style2.png' },
        { image: '/windows-doors/elite/style3.png' },
        { image: '/windows-doors/elite/style4.png' },
        { image: '/windows-doors/elite/style5.png' },
        { image: '/windows-doors/elite/style6.png' },
        { image: '/windows-doors/elite/style7.png' },
        { image: '/windows-doors/elite/style8.png' },
        { image: '/windows-doors/elite/style9.png' },
        { image: '/windows-doors/elite/style10.png' },
        { image: '/windows-doors/elite/style11.png' },
        { image: '/windows-doors/elite/style12.png' },
        { image: '/windows-doors/elite/style13.png' },
        { image: '/windows-doors/elite/style14.png' },
        { image: '/windows-doors/elite/style15.png' },
        { image: '/windows-doors/elite/style16.png' },
        { image: '/windows-doors/elite/style17.png' },
        { image: '/windows-doors/elite/style18.png' },
        { image: '/windows-doors/elite/style19.png' },
        { image: '/windows-doors/elite/style20.png' },
        { image: '/windows-doors/elite/style21.png' },
        { image: '/windows-doors/elite/style22.png' },
        { image: '/windows-doors/elite/style23.png' },
        { image: '/windows-doors/elite/style24.png' },
        { image: '/windows-doors/elite/style25.png' },
        { image: '/windows-doors/elite/style26.png' },
        { image: '/windows-doors/elite/style27.png' },
    ];

    const DoorColorClassic2 = [
        { name: "White", color: '/windows-doors/elite/color1.png' },
        { name: "Anthracite Grey", color: '/windows-doors/elite/color2.png' },
        { name: "Ice Blue", color: '/windows-doors/elite/color3.png' },
        { name: "Steel Blue", color: '/windows-doors/elite/color4.png' },
        { name: "Cream", color: '/windows-doors/elite/color5.png' },
        { name: "Fir Green", color: '/windows-doors/elite/color6.png' },
        { name: "Jet Black", color: '/windows-doors/elite/color7.png' },
        { name: "Sage Green", color: '/windows-doors/elite/color8.png' },
        { name: "Golden Oak", color: '/windows-doors/elite/color9.png' },
        { name: "Dark Woodgrain", color: '/windows-doors/elite/color10.png' },
    ]


    const DoorColorPremium2 = [
        { name: "Agate Grey", color: '/windows-doors/elite/color11.png' },
        { name: "Black Brown", color: '/windows-doors/elite/color12.png' },
        { name: "Peacock Blue", color: '/windows-doors/elite/color13.png' },
    ]

    const DoorGlass2 = [
        { name: "Clear", image: '/windows-doors/doorglass/glass1.jpg' },
        { name: "Silver Mist", image: '/windows-doors/doorglass/glass2.jpg' },
    ]

    const DoorHardwareColor2 = [
        { name: "White", image: '/windows-doors/doorhardware/hardwarecolor1.png' },
        { name: "Black", image: '/windows-doors/doorhardware/hardwarecolor2.png' },
        { name: "Chrome", image: '/windows-doors/doorhardware/hardwarecolor3.png' },
        { name: "Gold", image: '/windows-doors/doorhardware/hardwarecolor4.png' },
    ]

    const DoorHardwareHandle2 = [
        { name: "None", image: '/windows-doors/doorhardware/hardware1.png' },
        { name: "Lever Handles", image: '/windows-doors/doorhardware/hardware2.png' },
        { name: "Finger Pull Escutcheon", image: '/windows-doors/doorhardware/hardware3.png' },
    ]

    const DoorHardwareLetterPlates2 = [
        { name: "None", image: '/windows-doors/doorhardware/hardware5.png' },
        { name: "LetterPlate", image: '/windows-doors/doorhardware/hardware6.png' },
    ]

    const DoorHardwareKnockers2 = [
        { name: "None", image: '/windows-doors/doorhardware/hardware7.png' },
    ]


    // UPVC Doors
    const DoorStyle3 = [
        { image: '/windows-doors/upvc/style1.png' },
        { image: '/windows-doors/upvc/style2.png' },
        { image: '/windows-doors/upvc/style3.png' },
        { image: '/windows-doors/upvc/style4.png' },
        { image: '/windows-doors/upvc/style5.png' },
        { image: '/windows-doors/upvc/style6.png' },
        { image: '/windows-doors/upvc/style7.png' },
        { image: '/windows-doors/upvc/style8.png' },
        { image: '/windows-doors/upvc/style9.png' },
        { image: '/windows-doors/upvc/style10.png' },
        { image: '/windows-doors/upvc/style11.png' },
        { image: '/windows-doors/upvc/style12.png' },
        { image: '/windows-doors/upvc/style13.png' },
        { image: '/windows-doors/upvc/style14.png' },
        { image: '/windows-doors/upvc/style15.png' },
        { image: '/windows-doors/upvc/style16.png' },
        { image: '/windows-doors/upvc/style17.png' },
    ];

    const DoorColorClassic3 = [
        { name: "White Knight", color: '/windows-doors/upvc/color1.png' },
        { name: "Dark Woodgrain", color: '/windows-doors/upvc/color2.png' },
        { name: "Golden Oak", color: '/windows-doors/upvc/color3.png' },
        { name: "Sage Green", color: '/windows-doors/upvc/color4.png' },
        { name: "Anthracite Grey", color: '/windows-doors/upvc/color5.png' },
    ]


    const DoorColorPremium3 = [
        { name: "White Knight", color: '/windows-doors/upvc/color1.png' },
        { name: "Dark Woodgrain", color: '/windows-doors/upvc/color2.png' },
        { name: "Golden Oak", color: '/windows-doors/upvc/color3.png' },
    ]

    const DoorGlass3 = [
        { name: "Clear", image: '/windows-doors/upvc/glass1.jpg' },
        { name: "Silver Mist", image: '/windows-doors/upvc/glass2.jpg' },
    ]

    const DoorHardwareColor3 = [
        { name: "White", image: '/windows-doors/doorhardware/hardwarecolor1.png' },
        { name: "Black", image: '/windows-doors/doorhardware/hardwarecolor2.png' },
        { name: "Chrome", image: '/windows-doors/doorhardware/hardwarecolor3.png' },
        { name: "Gold", image: '/windows-doors/doorhardware/hardwarecolor4.png' },
    ]

    const DoorHardwareHandle3 = [
        { name: "None", image: '/windows-doors/doorhardware/hardware1.png' },
        { name: "Lever Handles", image: '/windows-doors/doorhardware/hardware2.png' },
    ]

    const DoorHardwareLetterPlates3 = [
        { name: "None", image: '/windows-doors/doorhardware/hardware5.png' },
    ]

    const DoorHardwareKnockers3 = [
        { name: "None", image: '/windows-doors/doorhardware/hardware7.png' },
    ]




    const doorStyles = {
        Classic: DoorStyle,
        Elite: DoorStyle2,
        UPVC: DoorStyle3,
    };

    const DoorColorClass = {
        Classic: DoorColorClassic,
        Elite: DoorColorClassic2,
        UPVC: DoorColorClassic3,
    }

    const DoorColorPremiums = {
        Classic: DoorColorPremium,
        Elite: DoorColorPremium2,
        UPVC: DoorColorPremium3,
    }

    const DoorsGlass = {
        Classic: DoorGlass,
        Elite: DoorGlass2,
        UPVC: DoorGlass3,

    }

    const DoorsHardwareColor = {
        Classic: DoorHardwareColor,
        Elite: DoorHardwareColor2,
        UPVC: DoorHardwareColor3,
    }

    const DoorsHandles = {
        Classic: DoorHardwareHandle,
        Elite: DoorHardwareHandle2,
        UPVC: DoorHardwareHandle3,
    }

    const DoorsLetterPlates = {
        Classic: DoorHardwareLetterPlates,
        Elite: DoorHardwareLetterPlates2,
        UPVC: DoorHardwareLetterPlates3,
    }

    const DoorsKnockers = {
        Classic: DoorHardwareKnockers,
        Elite: DoorHardwareKnockers2,
        UPVC: DoorHardwareKnockers3,
    }


    const Style = doorStyles[doorstype];
    const ClassicColor = DoorColorClass[doorstype];
    const PremiumColor = DoorColorPremiums[doorstype];
    const DoorGlasses = DoorsGlass[doorstype];
    const DoorsHardwareColors = DoorsHardwareColor[doorstype];
    const DoorsHandle = DoorsHandles[doorstype];
    const DoorsLetterPlate = DoorsLetterPlates[doorstype];
    const DoorsKnocker = DoorsKnockers[doorstype];


    console.log(values);

    const sections = [
        { id: 1, title: 'House Style' },
        { id: 2, title: 'Door Options' },
        { id: 3, title: 'View Summary' },
        { id: 4, title: 'Your Details' },
    ];

    const startstep = 1;
    const maxsteps = 3;





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
            const response = await fetch('/api/doors', {
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









    return (
        <div className="md:w-[1100px] mx-auto mt-[2%]">


            <div className=" my-[1%] md:w-[1100px]">
                <div className="flex  justify-between px-5">
                    <div className="">
                        {currentstep >= startstep + 1 && <button className="bg-[#f7a829] text-white font-bold py-2 px-3 rounded-md hover:scale-105 transition-transform text-sm active:translate-y-1" onClick={prevStep}> {`< PREVIOUS`}</button>}
                    </div>

                    <div className=" ">
                        {currentstep <= maxsteps && active && <button className="bg-[#f7a829] text-white font-bold py-2 px-3 rounded-md hover:scale-105 transition-transform text-sm tracking-wider active:translate-y-1" onClick={nextStep}>{`NEXT >`}</button>}
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
                                        className={`hover:bg-[#e2f4f4] w-[130px] cursor-pointer hover:opacity-75 ${selectedhouse?.name === house?.name ? 'border-[5px]  border-[orange] bg-[#e2f4f4]' : ''
                                            }`}
                                    >
                                        <img src={house.image} height={130} width={130} className="" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {currentstep == 2 && doorlist &&
                        <div className="py-5">

                            <div className="font-bold text-[20px] text-gray-800">Door Options</div>
                            <p className="text-[13px] text-gray-600">Select a Door material range from the options below</p>

                            <div onClick={() => handledoortype('Classic')} className="flex hover:bg-[#f7f7f7] items-center justify-center border cursor-pointer border-gray-400 p-2 my-4  mx-auto">
                                <img src="/windows-doors/classic.jpg" alt="Description" className="w-1/4 object-cover" />
                                <div className="ml-5 w-2/3">
                                    <h2 className="text-[14px] font-bold text-gray-800">Classic Composite Doors</h2>
                                    <p className="text-gray-600 text-[12px] mt-2">Our Classic GRP front and back doors are secure, energy-efficient and durable as well as modern.</p>
                                </div>
                            </div>

                            <div onClick={() => handledoortype('Elite')} className="flex hover:bg-[#f7f7f7] items-center justify-center border cursor-pointer border-gray-400 p-2 my-4 mx-auto">
                                <img src="/windows-doors/elite.jpg" alt="Description" className="w-1/4 object-cover" />
                                <div className="ml-5 w-2/3">
                                    <h2 className="text-[14px] font-bold text-gray-800">Elite Composite Doors</h2>
                                    <p className="text-gray-600 text-[12px] mt-2">Our Classic GRP front and back doors are secure, energy-efficient and durable as well as modern.</p>
                                </div>
                            </div>


                            <div onClick={() => handledoortype('UPVC')} className="flex hover:bg-[#f7f7f7] items-center justify-center border cursor-pointer border-gray-400 p-2 my-4 mx-auto">
                                <img src="/windows-doors/upvc.jpg" alt="Description" className="w-1/4 object-cover" />
                                <div className="ml-5 w-2/3">
                                    <h2 className="text-[14px] font-bold text-gray-800">UPVC Doors</h2>
                                    <p className="text-gray-600 text-[12px] mt-2">Our Classic GRP front and back doors are secure, energy-efficient and durable as well as modern.</p>
                                </div>
                            </div>


                        </div>
                    }


                    {currentstep == 2 && !doorlist && (
                        <div className="w-[400px]">
                            <div className="text-center font-bold text-[20px] py-2">{doorstype} Door Options</div>
                            <p className="text-center text-[12px] pb-2">Choose a style, colour, glass and hardware for your new door</p>

                            <div className="flex justify-center gap-4 items-center my-3">
                                <button onClick={() => setstep3selectedbtn("DoorStyles")}
                                    className={`px-2 py-1 text-[11px] border ${step3selectedbtn === "DoorStyles" ? "bg-[#f7a829] text-white" : "bg-gray-200"}`}
                                > Door Styles</button>
                                <button onClick={() => setstep3selectedbtn("DoorColors")}
                                    className={`px-2 py-1 text-[11px] border ${step3selectedbtn === "DoorColors" ? "bg-[#f7a829] text-white" : "bg-gray-200"}`}
                                > Door Colors</button>
                                <button onClick={() => setstep3selectedbtn("DoorHardware")}
                                    className={`px-2 py-1 text-[11px] border ${step3selectedbtn === "DoorHardware" ? "bg-[#f7a829] text-white" : "bg-gray-200"}`}
                                > Door Hardware</button>
                                <button onClick={() => setstep3selectedbtn("DoorGlass")}
                                    className={`px-2 py-1 text-[11px] border ${step3selectedbtn === "DoorGlass" ? "bg-[#f7a829] text-white" : "bg-gray-200"}`}
                                > Door Glass</button>
                            </div>


                            <div>

                                {step3selectedbtn === "DoorStyles" &&
                                    <>
                                        <div className="h-[300px] overflow-auto">
                                            <div className="flex flex-wrap gap-3">
                                                {Style.map((style, index) => (
                                                    <div key={index} onClick={() => handleDoorSelection("dstyle", style)}
                                                        className={`hover:bg-[#e2f4f4] cursor-pointer hover:opacity-75 ${values?.door?.dstyle?.image === style?.image ? 'border-[3px] border-[orange] bg-[#e2f4f4]' : ''}`}
                                                    >
                                                        <img src={style.image} height={35} width={35} className="object-contain" />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                    </>
                                }


                                {step3selectedbtn === "DoorColors" &&
                                    <div className="h-[300px] overflow-auto">

                                        <div className="flex justify-center gap-5">
                                            <button onClick={() => setColorState('External')}
                                                className={`py-1.5 px-2 text-[10px] rounded-md font-bold ${ColorState === 'External' ? 'bg-black text-white' : 'bg-gray-400 text-black'}`}
                                            >
                                                External Color
                                            </button>
                                            <button onClick={() => setColorState('Internal')}
                                                className={`py-1.5 px-2 text-[10px] rounded-md font-bold ${ColorState === 'Internal' ? 'bg-black text-white' : 'bg-gray-400 text-black'}`}
                                            >
                                                Internal Color
                                            </button>
                                        </div>


                                        {ColorState == "External" &&
                                            <>
                                                <div className="text-[12px] font-bold mt-5">Classic GRP Colors</div>
                                                <p className="text-[11px]">Choose the External color of your door</p>

                                                <div className="flex flex-wrap gap-3 py-3">
                                                    {ClassicColor.map((color, index) => (
                                                        <div key={index} onClick={() => handleDoorSelection("ExternalColor", color)} >
                                                            <div className={`hover:bg-[#e2f4f4] rounded-[50%] w-[50px] cursor-pointer hover:opacity-75 ${values?.door?.ExternalColor?.name === color?.name ? 'border-[2px] border-[orange] bg-[#e2f4f4]' : 'border border-[grey]'}`}>
                                                                <img src={color.color} height={50} width={50} className="object-contain rounded-[50%]" />
                                                            </div>
                                                            <div className="text-[10px] py-2">{color.name}</div>
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className="text-[12px] font-bold mt-5">Premium GRP Colors</div>
                                                <p className="text-[11px]">Choose the External color of your door</p>
                                                <div className="flex  flex-wrap gap-3 pt-3">
                                                    {PremiumColor.map((color, index) => (
                                                        <div key={index} onClick={() => handleDoorSelection("ExternalColor", color)} >
                                                            <div className={`hover:bg-[#e2f4f4] rounded-[50%] w-[50px] cursor-pointer hover:opacity-75 ${values?.door?.ExternalColor?.name === color?.name ? 'border-[2px] border-[orange] bg-[#e2f4f4]' : 'border border-[grey]'}`}>
                                                                <img src={color.color} height={50} width={50} className="object-contain rounded-[50%]" />
                                                            </div>
                                                            <div className="text-[10px] w-[50px] text-center py-2">{color.name}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </>
                                        }



                                        {ColorState == "Internal" &&
                                            <>
                                                <div className="text-[12px] font-bold mt-5">Classic GRP Colors</div>
                                                <p className="text-[11px]">Choose the Internal color of your door</p>

                                                <div className="flex flex-wrap gap-3 py-3">
                                                    {ClassicColor.map((color, index) => (
                                                        <div key={index} onClick={() => handleDoorSelection("InternalColor", color)} >
                                                            <div className={`hover:bg-[#e2f4f4] rounded-[50%] w-[50px] cursor-pointer hover:opacity-75 ${values?.door?.InternalColor?.name === color?.name ? 'border-[2px] border-[orange] bg-[#e2f4f4]' : 'border border-[grey]'}`}>
                                                                <img src={color.color} height={50} width={50} className="object-contain rounded-[50%]" />
                                                            </div>
                                                            <div className="text-[10px] w-[50px] text-center py-2">{color.name}</div>
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className="text-[12px] font-bold mt-5">Premium GRP Colors</div>
                                                <p className="text-[11px]">Choose the Internal color of your door</p>
                                                <div className="flex  flex-wrap gap-3 pt-3">
                                                    {PremiumColor.map((color, index) => (
                                                        <div key={index} onClick={() => handleDoorSelection("InternalColor", color)} >
                                                            <div className={`hover:bg-[#e2f4f4] rounded-[50%] w-[50px] cursor-pointer hover:opacity-75 ${values?.door?.InternalColor?.name === color?.name ? 'border-[2px] border-[orange] bg-[#e2f4f4]' : 'border border-[grey]'}`}>
                                                                <img src={color.color} height={50} width={50} className="object-contain rounded-[50%]" />
                                                            </div>
                                                            <div className="text-[10px] w-[50px] text-center py-2">{color.name}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </>
                                        }


                                    </div>
                                }


                                {step3selectedbtn === "DoorHardware" &&
                                    <div className="h-[300px] w-[350px] overflow-auto">

                                        <div className="text-[12px] font-bold mt-5">Choose Hardware Color</div>

                                        <div className="flex gap-5 py-3">
                                            {DoorsHardwareColors.map((hardware, index) => (
                                                <div key={index} onClick={() => handleDoorSelection("color", hardware)} >
                                                    <div className={`hover:bg-[#e2f4f4] rounded-[50%] w-[50px] cursor-pointer hover:opacity-75 ${values?.door?.color?.name === hardware?.name ? 'border-[2px] border-[orange] bg-[#e2f4f4]' : 'border border-[grey]'}`}>
                                                        <img src={hardware.image} height={50} width={50} className="object-contain rounded-[50%]" />
                                                    </div>
                                                    <div className="text-[10px] w-[50px] text-center py-2">{hardware.name}</div>
                                                </div>
                                            ))}
                                        </div>


                                        <div className="font-bold">Handles</div>

                                        <div className="flex flex-wrap gap-3 py-3">
                                            {DoorsHandle.map((hardware, index) => (
                                                <div key={index} onClick={() => handleDoorSelection("handle", hardware)}
                                                    className={`hover:bg-[#e2f4f4] p-2 cursor-pointer hover:opacity-75 ${values?.door?.handle?.image === hardware?.image ? 'border-[2px] border-[orange] bg-[#e2f4f4]' : ''}`}
                                                >
                                                    <img src={hardware.image} height={50} width={50} className="object-contain" />
                                                    <div className="text-[10px] w-[50px] text-center py-2">{hardware.name}</div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="font-bold">Letterplates</div>
                                        <div className="flex flex-wrap gap-3 py-3">
                                            {DoorsLetterPlate.map((hardware, index) => (
                                                <div key={index} onClick={() => handleDoorSelection("letterplate", hardware)}
                                                    className={`hover:bg-[#e2f4f4] p-1 cursor-pointer hover:opacity-75 ${values?.door?.letterplate?.image === hardware?.image ? 'border-[2px] border-[orange] bg-[#e2f4f4]' : ''}`}
                                                >
                                                    <img src={hardware.image} height={55} width={55} className="object-contain" />
                                                    <div className="text-[10px] w-[55px] text-center py-2">{hardware.name}</div>
                                                </div>
                                            ))}
                                        </div>


                                        <div className="font-bold">Knockers</div>
                                        <div className="flex flex-wrap gap-3 py-3">
                                            {DoorsKnocker.map((hardware, index) => (
                                                <div key={index} onClick={() => handleDoorSelection("knocker", hardware)}
                                                    className={`hover:bg-[#e2f4f4] p-1 cursor-pointer hover:opacity-75 ${values?.door?.knocker?.image === hardware?.image ? 'border-[2px] border-[orange] bg-[#e2f4f4]' : ''}`}
                                                >
                                                    <img src={hardware.image} height={55} width={55} className="object-contain" />
                                                    <div className="text-[10px] w-[55px] text-center py-2">{hardware.name}</div>
                                                </div>
                                            ))}
                                        </div>

                                    </div>
                                }


                                {step3selectedbtn === "DoorGlass" &&
                                    <>
                                        <div className="text-[12px] font-bold mt-5">Choose Hardware Color</div>

                                        <div className="flex gap-5 py-3">
                                            {DoorGlasses.map((hardware, index) => (
                                                <div key={index} onClick={() => handleDoorSelection("glass", hardware)} >
                                                    <div className={`hover:bg-[#e2f4f4] w-[50px] cursor-pointer hover:opacity-75 ${values?.door?.glass?.name === hardware?.name ? 'border-[2px] border-[orange] bg-[#e2f4f4]' : 'border border-[grey]'}`}>
                                                        <img src={hardware.image} height={50} width={50} className="object-contain" />
                                                    </div>
                                                    <div className="text-[10px] w-[50px] text-center py-2">{hardware.name}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                }


                            </div>


                            <div className="flex justify-between pl-5 py-5">
                                <button disabled={step3selectedbtn === "DoorStyles"} onClick={prevdoorbtn} className={`text-[11px] rounded-md py-1.5 px-2  ${step3selectedbtn === "DoorStyles" ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                                    : "bg-black text-white hover:opacity-85"
                                    }`}>Previous</button>

                                <button disabled={step3selectedbtn === "DoorGlass"} onClick={nextdoorbtn} className={`text-[11px] rounded-md py-1.5 px-2  ${step3selectedbtn === "DoorGlass"
                                    ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                                    : "bg-black text-white hover:opacity-85"
                                    }`}>Next</button>
                            </div>


                            <div className="flex justify-center">
                                <button onClick={() => setdoorlist(true)} className="bg-[black] mb-3 text-white py-1.5 px-2 text-[11px] font-bold rounded-md hover:opacity-90">More Doors</button>
                            </div>
                        </div>

                    )}


                    {(currentstep == 3 || currentstep == 4) && selectedhouse &&
                        <>
                            <div className="font-bold text-[25px] my-4 px-3">Summary Of The Product</div>
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

                                {/* {values.window && (
                                    <div>
                                        <h3 className="text-md text-[18px] font-semibold">uPVC Casement Window - Casement</h3>
                                        {values.window.style?.image && <img src={values.window.style.image} className="w-20 h-auto border rounded" />}
                                        {values.window.color && (<p>Color: {values.window.color.name}</p>)}
                                        {values.window.hardwarecolor && (<p>Hardware: {values.window.hardwarecolor.name}</p>)}
                                    </div>
                                )} */}


                                {values.door && (
                                    <div>
                                        <h3 className="text-md text-[18px]  font-semibold">{doorstype} Door </h3>
                                        {/* {values.door.style?.image && <img src={values.door.style.image} alt="Door Style" className="w-20 h-auto border rounded" />} */}
                                        {values.door.ExternalColor && (
                                            <>
                                                <p>External Color: {values.door.ExternalColor.name} </p>
                                                <p>Internal Color: {values.door.InternalColor.name} </p>
                                            </>
                                        )}

                                        {values.door.color && (<p>Hardware Color: {values.door.color.name}</p>)}
                                        {values.door.handle && (<p>Handle: {values.door.handle.name}</p>)}
                                        {values.door.handle && (<p>LetterPlate: {values.door.letterplate.name}</p>)}
                                        {values.door.handle && (<p>Knockers: {values.door.knocker.name}</p>)}
                                        {values.door.glass && (
                                            <p>Glass: {values.door.glass.name}</p>
                                        )}
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
                                        onChange={handleChange}
                                        className="w-1/2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                {/* Contact Number */}
                                <input type="number" name="phoneNumber" placeholder="Contact Number" value={formData.phoneNumber}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />

                                {/* Email Address */}
                                <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange}
                                    className="w-full p-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />

                                {/* House Number & Postal Code (Same Row) */}
                                <div className="flex space-x-4 mb-4">
                                    <input type="text" name="houseNumber" placeholder="House Number or Name" value={formData.houseNumber}
                                        onChange={handleChange}
                                        className="w-1/2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <input type="text" name="postalCode" placeholder="Postal Code" value={formData.postalCode}
                                        onChange={handleChange}
                                        className="w-1/2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>


                                <label className="flex items-center space-x-2 text-gray-700 mb-4">
                                    <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange}
                                        className="w-5 h-5 text-blue-600 border rounded focus:ring-blue-500" />
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
                        ${currentstep === section.id ? "bg-[#f7a829] text-white" : "bg-white text-gray-700"} `}>
                            <div className={`sm:text-[13px] text-[9px] ${currentstep === section.id ? "" : ""}`}>Step {section.id}</div>
                            <div className={`font-semibold sm:text-[14px] text-[11px] ${currentstep === section.id ? "" : ""}`}>{section.title}</div>
                        </div>
                    ))}
                </div>
            </div>



        </div >
    )
}