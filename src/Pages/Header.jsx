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
                        <div className=" border-[2px] rounded-full border-blue-500 bg-blue-400  w-[80px] h-[80px]  flex items-center justify-center text-white text-[55px] ">
                            <AiFillThunderbolt />
                        </div>
                        <div className=" flex items-start flex-col justify-start">
                            <div className=" font-medium text-[30px]">FlashPrint</div>
                            <div className=" leading-[10px]  text-[14px]">Tez,sapalı,Qolaylı</div>
                        </div>
                    </div>
                    <div className=" flex items-center gap-1 md:gap-2 lg:gap-3">
                    
                        <div className="border-[2px] rounded-full border-blue-500 bg-blue-400 w-[55px] h-[55px]  flex items-center justify-center text-white text-[40px]">
                            <RxTriangleRight />
                        </div>
                        <div className="border-[2px] rounded-full border-blue-500 bg-blue-400 w-[55px] h-[55px]  flex items-center justify-center text-white text-[40px]">
                            <BiQuestionMark />
                        </div>
                        <div className="border-[2px] rounded-full border-blue-500 bg-blue-400 w-[55px] h-[55px]  flex items-center justify-center text-white text-[35px] ">
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