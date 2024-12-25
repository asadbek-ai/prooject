import { RiAdvertisementLine } from "react-icons/ri";
import { AiOutlineScan } from "react-icons/ai";
import { AiOutlineCopy } from "react-icons/ai";
import { CgPrinter } from "react-icons/cg";
import React from "react";
import Container from "../Components/Container";
import Contant from "../Components/Contant";
import Button from "../Components/Button";

const Main = () => {
  return (
    <Container>
      
        <div className=" flex flex-col gap-5 px-auto">
          <div className="flex-col flex  sm:flex-row items-center  gap-4  ">
            <div className=" h-[40%] w-[60%] sm:w-[50%] rounded-md p-5 bg-green-400 text-white flex items-center flex-col justify-center gap-4">
              <div className=" text-slate-200 text-center lg:text-[30px] md:text-[25px] sm:text-[20px] text-[15px] w-full h-[40px]">
                Hújjetti basıp shıǵarıw
              </div>
              <div className="object-contain lg:text-[160px] md:text-[80x] sm:text-[70px] text-[65px] text-slate-200 ">
                <CgPrinter />
              </div>
            </div>
            <div className=" h-[40%] w-[60%] sm:w-[50%] lg:w-[50%] rounded-md p-5 bg-orange-400 text-white flex items-center flex-col justify-center gap-4 ">
              <div className=" text-slate-200 text-center lg:text-[30px] md:text-[25px] sm:text-[20px] text-[15px] h-[40px]">
                Hújjetten nusqa alıw
              </div>
              <div className="object-contain lg:text-[160px] md:text-[80x] sm:text-[70px] text-[65px] text-slate-200">
                <AiOutlineCopy />
              </div>
            </div>
          </div>
          <div className=" flex items-center  gap-4 flex-col sm:flex-row">
            <div className="h-[40%] w-[60%] sm:w-[50%] rounded-md p-5 bg-red-400 text-white flex items-center flex-col justify-center gap-4">
              <div className=" text-slate-200 text-center lg:text-[30px] md:text-[25px] sm:text-[20px] text-[15px] h-[40px]">
                Hújjetti skanerlew
              </div>
              <div className="object-contain lg:text-[160px] md:text-[80x] sm:text-[70px] text-[65px] text-slate-200">
                <AiOutlineScan />
              </div>
            </div>
            <div className="h-[40%] w-[60%] sm:w-[50%] rounded-md p-5 bg-blue-400 text-white flex items-center flex-col justify-center gap-4">
              <div className="w-full text-slate-200 text-center lg:text-[30px] md:text-[25px] sm:text-[20px] text-[15px] h-[40px]">
                Hújjetten nusqa alıw
              </div>
              <div className="object-contain lg:text-[160px] md:text-[80x] sm:text-[70px] text-[65px] text-slate-200">
                <RiAdvertisementLine />
              </div>
            </div>
          </div>
        </div>
        <Button/>
    </Container>
  );
};

export default Main;
