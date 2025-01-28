"use client"
import Image from "next/image";
import {useState} from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export default function Home() {

  const [capital, setCapital] = useState(0)
  const [ltp, setLtp] = useState(0)
  const [takeProfit, setTakeProfit] = useState(2)
  const [tabName, setTabName] = useState("Profile")

  const [percentageCalc, setPercentageCalc] = useState({})


  const handleStates = (name, value) => {

    if (name=="takeProfit") {

      setTakeProfit(value)
      if (Number(ltp)>0) {
        if (Number(capital)>0) {
          setProfit(Number(capital)*(Number(ltp) + Number(ltp*value/100)))
        }
      }      

    } else if (name=="ltp") {

      let tempQuantity = 0;

      setLtp(value)
      if (capital!=0 && value!=0) {
        tempQuantity = Math.round(capital/value)
        setQuantity(Math.round(capital/value))
      }
      if (Number(takeProfit)>0) {
        setProfit(Number(tempQuantity)*(Number(ltp) + Number(ltp*value/100)))
      }

    }

  }


  return (
    <div className="text-center items-center">
      
      {/* <Image src={`/intro.jpg`} width={100} height={100}/> */}

      <div className="h-[86vh] bg-black bg-opacity-80 p-5">

        <div className="bg-gray-500 bg-opacity-50 rounded-2xl m-5 p-5">
          <div className="mx-5 rounded-full place-content-center h-[7vh] cursor-pointer px-5 text-white">
            <div className="text">
              <div className="flex">
                <div className="basis-2/6 place-content-center">
                  <p className="text-4xl">🌐</p>
                </div>
                <div className="basis-4/6 text-start ms-3">
                  <p className="font-bold text-sm">Website</p>
                  <p className="text-xs">https://sureshkumar-sk.github.io/Portfolio/</p>
                  {/* <p>www.sureshkumar.netlify.com</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="bg-gray-500 bg-opacity-50 rounded-2xl m-5 p-5">
          <div className="mx-5 rounded-full place-content-center h-[7vh] cursor-pointer px-5 text-white">
            <div className="text">
              <div className="flex">
                <div className="basis-2/6 place-content-center">
                  <p className="text-4xl">📷</p>
                </div>
                <div className="basis-4/6 text-start ms-3">
                  <p className="font-bold text-sm">Instagram</p>
                  <p className="text-xs">@suresh_rbzian</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="bg-gray-500 bg-opacity-50 rounded-2xl m-5 p-5">
          <div className="mx-5 rounded-full place-content-center h-[7vh] cursor-pointer px-5 text-white">
            <div className="text">
              <div className="flex">
                <div className="basis-2/6 place-content-center">
                  <p className="text-4xl">📞</p>
                </div>
                <div className="basis-4/6 text-start ms-3">
                  <p className="font-bold text-sm">Whatsapp</p>
                  <p className="text-xs">+91 xxxxx xxxxx</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="bg-gray-500 bg-opacity-50 rounded-2xl m-5 p-5">
          <div className="mx-5 rounded-full place-content-center h-[7vh] cursor-pointer px-5 text-white">
            <div className="text">
              <div className="flex">
                <div className="basis-2/6 place-content-center">
                  <p className="text-4xl">✉️</p>
                </div>
                <div className="basis-4/6 text-start ms-3">
                  <p className="font-bold text-sm">Email</p>
                  <p className="text-xs">sureshoff011@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-500 bg-opacity-50 rounded-2xl m-5 p-5">
          <div className="mx-5 rounded-full place-content-center h-[7vh] cursor-pointer px-5 text-white">
            <div className="text">
              <div className="flex">
                <div className="basis-2/6 place-content-center">
                  <p className="text-4xl">🟦</p>
                </div>
                <div className="basis-4/6 text-start ms-3">
                  <p className="font-bold text-sm">LinkedIn</p>
                  <p className="text-xs">linkedin.com/sureshKumar011</p>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>      

    </div>
  );
}
