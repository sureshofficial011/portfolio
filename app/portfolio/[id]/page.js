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
import { useRouter, useParams } from "next/navigation";


export default function Home() {

  const router = useRouter()
  const params = useParams()

  console.log('Params => ', params?.id)

  const [imageNumber, setImageNumber] = useState(1)
  const [project, setProject] = useState(
    params?.id=="kalpaviruksha" ? `Kalpaviruksha` :
    params?.id=="projectDevs" ? `Project Devs` :
    params?.id=="mrDood" ? `Mr Dood` :
    params?.id=="aerConnect" ? `Aer Connect` :
    params?.id=="collegeProjects" ? `30+ College projects` :
    params?.id=="scalpy" ? `Scalpy` :
    params?.id=="madeBySundays" ? `Made By Sundays` :
    params?.id=="rippleRewards" ? `Ripple Rewards` :
    params?.id=="ipoPort" ? `Ipo Port` :
    params?.id=="qeutoLifts" ? `Qeuto Lifts` :
    ``
  )
  const [maxImageNumber, setMaxImageNumber] = useState(
    params?.id=="kalpaviruksha" ? 15 :
    params?.id=="projectDevs" ? 10 :
    params?.id=="mrDood" ? 1 :
    params?.id=="aerConnect" ? 10 :
    params?.id=="collegeProjects" ? 20 :
    params?.id=="scalpy" ? 2 :
    params?.id=="madeBySundays" ? 1 :
    params?.id=="rippleRewards" ? 15 :
    params?.id=="ipoPort" ? 3 :
    params?.id=="qeutoLifts" ? 11 :
    ``
  )
  const [projectDescription, setProjectDescription] = useState(
    params?.id=="kalpaviruksha" ? 
    `Kalpaviruksha - The Ayurveda Village
    Life (Ayu) is the combination of body, mind, senses and most importantly the soul. At Kalpaviruksha we follow the ideology of the most sacred science of life, Ayurveda, which is beneficial for both the world and beyond. Kalpaviruksha in Coimbatore aims at providing holistic and natural treatment that is found most effective on earth. With the experience of 14 years, we as a hospital are committed to bringing the most advanced diagnostic method through natural procedures of Ayurveda. We have authentic treatments and procedures that are craftd with maximum healing, care and comfort. We offer an Ecofriendly Ayurvedic resort that has multiple programs to cure the alleviations and sufferings of various diseases in people. We are successful in offering the best of health programs that Kalpaviruksha is a place for the healing of any physical ailments and relaxation for the unsettled or disturbed mind.
    From the distance of 15km from the main city of Coimbatore, Kalpaviruksha is located in the small hamlet, called Thekkupalayam. The transport facilities are feasible as it is30 minutes drive from the airport and 20 minutes from the Coimbatore railway station. The centre exactly lies at the 6th mile from the North Coimbatore Fly over the highway bound towards Ooty known as Mettupalayam road.` 
    :
    params?.id=="projectDevs" ? 
    `In Project Devs, we offer the best in class projects for all the Computer and IT related fields using the latest technology available.
    Incorporation of latest technologies.
    Massive varities of projects supporting many different platforms.
    Clean coded and well executed projects.
    24/7 customer support.
    Guidance throughout the process.
    Best discounted offers.
    Our mission is to provide the best in class project development services and guidance to all the students and researchers with the different and latest technologies. We offer more than 500+ varities of projects using different technologies ranging from traditional to trending supporting many different platforms.` 
    :
    params?.id=="mrDood" ? 
    'Mr Dood is an online trading platform where a user can create a demat account and start trading on stock market and crypto currency. I have developed a full stack web application for Mr Dood using technologies like Mongo DB, Vue js, Express js and Node js.' 
    :
    params?.id=="aerConnect" ? 
    'Aer Connect striving to provide complete solution of fertilizer and pesticide distribution of a wide variety of crops using drones. A recent survey shows farm owners are facing acute shortage of manpower to cultivate and maintain their crops. This poses the challenge to employ timely usage of fertilizer and pesticide to the crop. Aer Connect provides you an easy solution for the same. Just give us a call and we will take care of the process.'
    :
    params?.id=="collegeProjects" ? 
    'I had developed more than 30 projects for college students during my college days which includes projects like : Object detection AI models, Online ecommerce web application, Bus pass application, Industrial web landing pages, etc,.' 
    :
    params?.id=="scalpy" ? 
    'Scalpy is a scalp massager product selling web application and I had developed a full fledged application including web design.' 
    :
    params?.id=="madeBySundays" ? 
    '' 
    :
    params?.id=="rippleRewards" ? 
    '' 
    :
    params?.id=="ipoPort" ? 
    '' 
    :
    params?.id=="qeutoLifts" ? 
    '' 
    :
    ``
  )



  const imageChange = (flag) => {
    if (flag == "next") {
      if (imageNumber!=maxImageNumber) {
        setImageNumber(imageNumber+1)
      }
    } else if (flag == "previous") {
      setImageNumber(imageNumber-1)
    }
  }

  return (
    <div className="bg-white">
      
      <div className="pt-5 mt-5 px-5 mx-5">
        <button onClick={()=>router.push('/')} className="p-5 mx-5 bg-blue-700 rounded-lg font-bold text-white">Back</button>
      </div>
      <p className="text-5xl font-bold text-center">
        {project}
      </p>
      <div className="p-5 justify-items-center">
        <div className="p-5 m-5 border-2 border-blue-700 w-[85vw]">
          <Image src={`/webpages/${params?.id}/${imageNumber}.jpg`} height={1000} width={1000} className="h-[80vh] w-[85vw]" />
          <div className="justify-items-between">
            <button className={`p-2 rounded m-2 ${imageNumber==1 ? `bg-gray-500` : `bg-yellow-300`}`} onClick={()=>imageChange('previous')} disabled={imageNumber==1 ? true : false}>Previous</button>
            <button className={`p-2 rounded m-2 ${imageNumber==maxImageNumber ? `bg-gray-500` : `bg-yellow-300`}`} onClick={()=>imageChange('next')}  disabled={imageNumber==maxImageNumber ? true : false}>Next</button>
          </div>
        </div>
      </div>
      <div className="px-5 mx-5 pb-5 mb-5 justify-items-center">
        <div className="px-5 mx-5 pb-5 mb-5 v-[50vh]">
          {projectDescription}
        </div>
      </div>

    </div>
  );
}
