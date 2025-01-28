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
import { Route } from "lucide-react";
import { useRouter } from "next/navigation";


export default function Home() {

  const router = useRouter()

  const [capital, setCapital] = useState(0)
  const [ltp, setLtp] = useState(0)
  const [takeProfit, setTakeProfit] = useState(2)
  const [stopLoss, setStopLoss] = useState(1)
  const [target, setTarget] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const [profit, setProfit] = useState(0)

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

      <div className="h-[80vh] place-content-center">

        <div className="font-bold text-5xl mb-5 italic text-white">
          Suresh Kumar M
        </div>

        <div className="text-sm text-white">
          <span className="me-2">SOFTWARE</span>
          <span className="me-2">ENGINEER</span>
          {/* <span>DEVELOPER</span> */}
        </div>

        <div className="m-5">
          <button className="rounded-full px-5 bg-white py-2" onClick={()=>router.push("/about")}>Know more ⮞</button>
        </div>

      </div>      

    </div>
  );
}
