import { BiQuestionMark } from "react-icons/bi"; 
import { RxTriangleRight } from "react-icons/rx"; 
import { AiFillThunderbolt } from "react-icons/ai"; 
import React from 'react'
import Container from '../Components/Container'
import Contant from '../Components/Contant'

const Header = () => {
  return (
    <div className="">
        <Container>
            <Contant>
                <div className=' p-5 rounded-lg bg-slate-300 flex items-center gap-1 justify-between'>
                    <div className=" flex gap-4 items-center ">
                        <div className=" border-[2px] rounded-full border-blue-500 bg-blue-400 md:w-[37px] md:h-[37px] w-[30px] h-[30px] lg:w-[40px] lg:h-[40px]  flex items-center justify-center text-white lg:text-[25px] md:text-[22px] sm:text-[20px] text-[18px]">
                            <AiFillThunderbolt />
                        </div>
                        <div className=" flex items-start flex-col justify-start">
                            <div className=" font-medium text-[14px] sm:text-[16px] md:text-[20px]">FlashPrint</div>
                            <div className=" leading-[10px] lg:text-[13px] md:text-[10px] sm:text-[8px] text-[7px]">Tez,sapalı,Qolaylı</div>
                        </div>
                    </div>
                    <div className=" flex items-center gap-3">
                    
                        <div className="border-[2px] rounded-full border-blue-500 bg-blue-400 w-[25px] h-[25px] sm:w-[35px] sm:h-[35px] flex items-center justify-center text-white text-[20px]">
                            <RxTriangleRight />
                        </div>
                        <div className="border-[2px] rounded-full border-blue-500 bg-blue-400 w-[25px] h-[25px] sm:w-[35px] sm:h-[35px] flex items-center justify-center text-white text-[20px]">
                            <BiQuestionMark />
                        </div>
                        <div className="border-[2px] rounded-full border-blue-500 bg-blue-400 w-[25px] h-[25px] sm:w-[35px] sm:h-[35px] flex items-center justify-center text-white text-[15px] sm:text-[20px]">
                            KK
                        </div>
                    </div>
                </div>
            </Contant>
        </Container>
    </div>
  )
}

export default Header