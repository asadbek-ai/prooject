import { RiAdvertisementLine } from "react-icons/ri"; 
import { AiOutlineScan } from "react-icons/ai"; 
import { AiOutlineCopy } from "react-icons/ai"; 
import { CgPrinter } from "react-icons/cg"; 
import React from 'react'
import Container from "../Components/Container";
import Contant from "../Components/Contant";

const Main = () => {
  return (
    <Container>
        <Contant>
            <div className=" flex flex-col gap-5" >
    <div className='flex-col flex sm:flex-row items-center  gap-4  '>
        <div className=' h-full  w-[80%] sm:w-[50%] rounded-md p-5 bg-green-400 text-white flex items-center flex-col justify-center gap-4'>
            <div className=" text-slate-200 text-center lg:text-[30px] md:text-[25px] sm:text-[20px] text-[15px] w-full">
                Hújjetti basıp shıǵarıw
            </div>
            <div className="object-contain lg:text-[150px] md:text-[120px] sm:text-[100px] text-[90px] text-slate-200 ">
                <CgPrinter />
            </div>
        </div>
        <div className='h-full w-[80%] sm:w-[50%] rounded-md p-5 bg-orange-400 text-white flex items-center flex-col justify-center gap-4 '>
            <div className=" text-slate-200 text-center lg:text-[30px] md:text-[25px] sm:text-[20px] text-[15px]">
                Hújjetten nusqa alıw
            </div>
            <div className="object-contain lg:text-[150px] md:text-[120px] sm:text-[100px] text-[90px] text-slate-200">
                <AiOutlineCopy />
            </div>
        </div>
    </div>
    <div className=' flex items-center  gap-4 flex-col sm:flex-row'>
        <div className=' w-[80%] sm:w-[50%] rounded-md p-5 bg-red-400 text-white flex items-center flex-col justify-center gap-4'>
            <div className=" text-slate-200 text-center lg:text-[30px] md:text-[25px] sm:text-[20px] text-[15px]">
                Hújjetti skanerlew
            </div>
            <div className="object-contain lg:text-[150px] md:text-[120px] sm:text-[100px] text-[90px] text-slate-200">
                <AiOutlineScan />
            </div>
        </div>
        <div className='w-[80%] sm:w-[50%] rounded-md p-5 bg-blue-400 text-white flex items-center flex-col justify-center gap-4'>
            <div className="w-full text-slate-200 text-center lg:text-[30px] md:text-[25px] sm:text-[20px] text-[15px] ">
                Hújjetten nusqa alıw
            </div>
            <div className="object-contain lg:text-[150px] md:text-[120px] sm:text-[100px] text-[90px] text-slate-200">
                <RiAdvertisementLine />
            </div>
        </div>
    </div>
    </div>

        </Contant>
    </Container>
  )
}

export default Main