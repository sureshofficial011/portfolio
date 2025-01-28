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

      <div className="sm:h-[86vh] bg-black bg-opacity-80 p-5">

        {/* <div className="font-bold text-5xl mb-5 italic text-white">
          {tabName}
        </div> */}

        <div className="block sm:flex font-bold mb-5 italic text-white text-center cursor-pointer place-content-center">
          <p className={`m-5 rounded-full px-5 ${tabName=="Profile" ? `bg-white text-black` : `border-2 border-white text-white`}`} onClick={()=>{setTabName("Profile")}}>Profile</p>
          <p className={`m-5 rounded-full px-5 ${tabName=="Education" ? `bg-white text-black` : `border-2 border-white text-white`}`} onClick={()=>{setTabName("Education")}}>Education</p>
          <p className={`m-5 rounded-full px-5 ${tabName=="Skills" ? `bg-white text-black` : `border-2 border-white text-white`}`} onClick={()=>{setTabName("Skills")}}>Skills</p>
          <p className={`m-5 rounded-full px-5 ${tabName=="Experience" ? `bg-white text-black` : `border-2 border-white text-white`}`} onClick={()=>{setTabName("Experience")}}>Experience</p>
        </div>

        {tabName=="Profile" && <div className="block sm:flex">
          <div className="basis-1/2 text-white bg-gray-500 bg-opacity-50 rounded-2xl m-5 p-5">
            <div className={`block sm:flex`}>
              <div className="basis-1/3 text-2xl font-bold italic">
                <Image src="/photo.jpg" className="border-2 rounded-2xl border-white" width={200} height={250} />
              </div>
              <div className=" basis-2/3 italic text-start">
                <p className="text-4xl font-bold">Suresh kumar M</p>
                <p className="text-sm mb-3">Software engineer</p>
                <p>{" "}</p>
                <p>Age: 24</p>
                <p>Location: Coimbatore, Tamil Nadu, India</p>
                <div className="bg-gray-500 bg-opacity-50 rounded-2xl p-3 mt-3">
                  <p className="text-lg font-bold italic mb-3">About :</p>
                  <p className="text-lg font-bold italic text-sm">Software engineer with 3 years experience working predominantly with corporates and startups, gaining extensive knowledge and expertise in various technologies, including React and Node js. Passionate about tackling new challenges, I thrive on learning and implementing innovative & logical solutions. Known for my quick adaptability to new technologies and tasks, I consistently strive to deliver high-quality results.</p>
                </div>
                
                {/* <p>Freelance: Available</p> */}
              </div>
            </div>            
          </div>
          <div className="basis-1/2 text-white text-start">
            <div className="bg-gray-500 bg-opacity-50 rounded-2xl m-5 p-5">
              {/* <p className="text-2xl font-bold italic">Education</p> */}
              <div className="bg-gray-500 bg-opacity-50 rounded-2xl p-3 mt-3">
                <p className="text-lg font-bold italic mb-3">Languages Known :</p>
                <p className="text-lg font-bold italic text-sm">● English <span className="text-xs">(Fluent)</span></p>
                <p className="text-lg font-bold italic text-sm">● Tamil <span className="text-xs">(Native)</span></p>
              </div>
              <div className="bg-gray-500 bg-opacity-50 rounded-2xl p-3 mt-3">
                <p className="text-lg font-bold italic mb-3">Interests :</p>
                <div className="flex">
                  <div className="basis-1/2">
                    <p className="text-lg font-bold italic text-sm">● Web 3.0</p>
                    <p className="text-lg font-bold italic text-sm">● Artificial Intelligence</p>
                  </div>
                  <div className="basis-1/2">
                    <p className="text-lg font-bold italic text-sm">● Blockchain</p>
                    <p className="text-lg font-bold italic text-sm">● Fintech</p>
                  </div>
                </div>                  
              </div>
            </div>
          </div>
        </div>}

        {tabName=="Education" && <div className="sm:flex">
          <div className="basis-1/2 text-white">
            <div className="bg-gray-500 bg-opacity-50 rounded-2xl m-5 p-5">
              <p className="text-2xl font-bold italic">Education</p>
              <div className="">
                <div className="m-5 bg-white text-black rounded-2xl bg-opacity-50 p-5">
                  <div className="flex">
                    <div className="basis-1/4">
                      <Image src="https://dial4college.blr1.cdn.digitaloceanspaces.com/pro/1095/logo/1699432925.png" width={50} height={50} />
                    </div>
                    <div className="basis-3/4 text-start">
                      <p className="italic">2018-2021</p>
                      <p className="font-bold">Bachelor of Computer Science</p>
                      <p>Kongunadu Arts & Science</p>
                    </div>
                  </div>                  
                </div>
                <div className="m-5 bg-white text-black rounded-2xl bg-opacity-50 p-5">
                  <div className="flex">
                    <div className="basis-1/4">
                      <Image width={50} height={50} />
                    </div>
                    <div className="basis-3/4 text-start">
                      <p className="italic">2017-2018</p>
                      <p className="font-bold">High school - 12th State board</p>
                      <p>Brilliant Matric. Hr. Sec. School</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-1/2 text-white">
            <div className="bg-gray-500 bg-opacity-50 rounded-2xl m-5 p-5">
              <p className="text-2xl font-bold italic">Courses & Training</p>
              <div className="">
                <div className="m-5 bg-white text-black rounded-2xl bg-opacity-50 p-5">
                  <div className="flex">
                    <div className="basis-1/4">
                      <Image width={50} height={50} />
                    </div>
                    <div className="basis-3/4 text-start">
                      <p className="font-bold">Web Development - MERN Stack</p>
                      <p>Zero To Mastery, Brad Traversy, Udemy</p>
                    </div>
                  </div>                  
                </div>
                <div className="m-5 bg-white text-black rounded-2xl bg-opacity-50 p-5">
                  <div className="flex">
                    <div className="basis-1/4">
                      <Image width={50} height={50} />
                    </div>
                    <div className="basis-3/4 text-start">
                      <p className="font-bold">HackerRank</p>
                      <p>Rank: 1291076</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>}

        {tabName=="Skills" && <div className="sm:flex">
          <div className="basis-2/6 bg-gray-500 rounded-2xl m-5 p-5 bg-opacity-50">
            <p className="text-2xl text-white font-bold mb-5">Graphics Desginer</p>
            <div className="sm:flex place-content-between m-5">
              <div className="basis-1/3">
                <Image width={100} height={100} className="border-2 border-white mb-2"/>
                <p className="font-bold text-white">Adobe Photoshop</p>
                <p className="text-white">15+ yrs</p>
              </div>     
              <div className="basis-1/3">
                <Image width={100} height={100} className="border-2 border-white mb-2"/>
                <p className="font-bold text-white">Adobe Illustrator</p>
                <p className="text-white">15+ yrs</p>
              </div>
              <div className="basis-1/3">
                <Image width={100} height={100} className="border-2 border-white mb-2"/>
                <p className="font-bold text-white">Adobe Indesign</p>
                <p className="text-white">15+ yrs</p>
              </div>                   
            </div>
            <div className="sm:flex m-5">
              <div className="basis-1/3">
                <Image width={100} height={100} className="border-2 border-white mb-2"/>
                <p className="font-bold text-white">Figma</p>
                <p className="text-white">15+ yrs</p>
              </div>
              <div className="basis-1/3">
                <Image width={100} height={100} className="border-2 border-white mb-2"/>
                <p className="font-bold text-white">Adobe XD</p>
                <p className="text-white">15+ yrs</p>
              </div> 
            </div>
          </div>
          <div className="basis-4/6 bg-gray-500 rounded-2xl m-5 p-5 bg-opacity-50">
            <p className="text-2xl text-white font-bold mb-5">Software Engineer</p>
            <div className="sm:flex place-content-between m-5 text-white">
              <div className="basis-1/8">
                <Image width={100} height={100} className="border-2 border-white mb-2"/>
                <p className="font-bold">HTML</p>
                <p>15+ yrs</p>
              </div>    
              <div className="basis-1/8">
                <Image width={100} height={100} className="border-2 border-white mb-2"/>
                <p className="font-bold">CSS</p>
                <p>15+ yrs</p>
              </div>
              <div className="basis-1/8">
                <Image width={100} height={100} className="border-2 border-white mb-2"/>
                <p className="font-bold">JavaScript</p>
                <p>15+ yrs</p>
              </div>      
              <div className="basis-1/8">
                <Image width={100} height={100} className="border-2 border-white mb-2"/>
                <p className="font-bold">Mongo DB</p>
                <p>15+ yrs</p>
              </div>  
              <div className="basis-1/8">
                <Image width={100} height={100} className="border-2 border-white mb-2"/>
                <p className="font-bold">Docker</p>
                <p>15+ yrs</p>
              </div>
              <div className="basis-1/8">
                <Image width={100} height={100} className="border-2 border-white mb-2"/>
                <p className="font-bold">React JS</p>
                <p>15+ yrs</p>
              </div>   
              <div className="basis-1/8">
                <Image width={100} height={100} className="border-2 border-white mb-2"/>
                <p className="font-bold">Next JS</p>
                <p>15+ yrs</p>
              </div>
              <div className="basis-1/8">
                <Image width={100} height={100} className="border-2 border-white mb-2"/>
                <p className="font-bold">AWS services</p>
                <p>15+ yrs</p>
              </div> 
            </div>
            <div className="sm:flex place-content-between m-5 text-white">
              <div className="basis-1/8">
                <Image width={100} height={100} className="border-2 border-white mb-2"/>
                <p className="font-bold">Tailwind CSS</p>
                <p>15+ yrs</p>
              </div>    
              <div className="basis-1/8">
                <Image width={100} height={100} className="border-2 border-white mb-2"/>
                <p className="font-bold">Express JS</p>
                <p>15+ yrs</p>
              </div>
              <div className="basis-1/8">
                <Image width={100} height={100} className="border-2 border-white mb-2"/>
                <p className="font-bold">Node JS</p>
                <p>15+ yrs</p>
              </div>      
              <div className="basis-1/8">
                <Image width={100} height={100} className="border-2 border-white mb-2"/>
                <p className="font-bold">MySQL</p>
                <p>15+ yrs</p>
              </div>  
              <div className="basis-1/8">
                <Image width={100} height={100} className="border-2 border-white mb-2"/>
                <p className="font-bold">React Native</p>
                <p>15+ yrs</p>
              </div>
              <div className="basis-1/8">
                <Image width={100} height={100} className="border-2 border-white mb-2"/>
                <p className="font-bold">GitHub</p>
                <p>15+ yrs</p>
              </div>
              <div className="basis-1/8">
                <Image width={100} height={100} className="border-2 border-white mb-2"/>
                <p className="font-bold">Vue JS</p>
                <p>15+ yrs</p>
              </div>  
              <div className="basis-1/8">
                <Image width={100} height={100} className="border-2 border-white mb-2"/>
                <p className="font-bold">Bootstrap</p>
                <p>15+ yrs</p>
              </div>  
            </div>
            <div className="flex">
               
              
                  
              
               
            </div>
            
          </div>
          {/* <div className="basis-1/4 bg-gray-500 rounded-2xl m-5">
            <p className="text-2xl text-white font-bold">Investment</p>
            <div className="flex">
              <div>
                <p>Stock market</p>
                <p>15+ yrs</p>
              </div>     
              <div>
                <p>Crypto</p>
                <p>15+ yrs</p>
              </div>
              <div>
                <p>Adobe Photoshop</p>
                <p>15+ yrs</p>
              </div>         
            </div>
          </div>
          <div className="basis-1/4 bg-gray-500 rounded-2xl m-5">
            <p className="text-2xl text-white font-bold">Business</p>
            <p className="text-white">3+ yrs</p>
            <div className="flex">
              <div>
                <p>Marketing</p>
                <p>15+ yrs</p>
              </div>  
              <div>
                <p>Communication</p>
                <p>15+ yrs</p>
              </div>  
              <div>
                <p>Sales</p>
                <p>15+ yrs</p>
              </div>  
            </div>
          </div> */}
        </div>}

        {tabName=="Experience" && <div className="">
          <div className=" text-white">
            <div className="bg-gray-500 bg-opacity-50 rounded-2xl m-5 p-5">
              {/* <p className="text-2xl font-bold italic">Experience</p> */}
              <div className="sm:flex">
                <div className="basis-1/3 m-5 bg-white text-black rounded-2xl bg-opacity-50 p-5">
                  <div className="flex">
                    <div className="basis-1/4">
                      <Image width={50} height={50} />
                    </div>
                    <div className="basis-3/4 text-start">
                      <p className="italic text-xs">2019-2020</p>
                      <p className="font-bold text-2xl">Freelancer</p>
                      <p className="text-md">Markfly ventures</p>
                      <p className="italic text-xs">Coimbatore, Tamil Nadu</p>
                      <p className="mt-5 mb-2">Achievements :</p>
                      <p className="text-sm">1) Book formatting and cover design for 5 prestigious books</p>
                      <p className="text-sm">2) Awarded with Coimbatore Literary Award for the Best Book cover designer</p>
                      <p className="text-sm">3) Kalpaviruksha website developed and launched</p>
                    </div>
                  </div>                  
                </div>
                <div className="basis-1/3 m-5 bg-white text-black rounded-2xl bg-opacity-50 p-5">
                  <div className="flex">
                    <div className="basis-1/4">
                      <Image width={50} height={50} />
                    </div>
                    <div className="basis-3/4 text-start">
                      <p className="italic text-xs">2020-2022</p>
                      <p className="font-bold text-2xl">Co-Founder</p>
                      <p>Project Devs</p>
                      <p className="italic text-xs">Coimbatore, Tamil Nadu</p>
                      <p className="mt-5 mb-2">Achievements :</p>
                      <p className="text-sm">1) Built and Sold 50+ unique projects to college students</p>
                      <p className="text-sm">2) MrDood trading platform built and launched</p>
                      <p className="text-sm">3) AirConnect drone website built and sold to customer</p>
                      <p className="text-sm">4) I9 Options is an USA based Option trading platform built for TechOreo, Cyber-Security and hosting Company</p>
                      <p className="text-sm">5) Digital marketing for Numeric Gamers, an online video gaming content provider available in all Social platforms including Youtube, Blogger, Instagram</p>
                    </div>
                  </div>
                </div>
                <div className="basis-1/3 m-5 bg-white text-black rounded-2xl bg-opacity-50 p-5">
                  <div className="flex">
                    <div className="basis-1/4">
                      <Image width={50} height={50} />
                    </div>
                    <div className="basis-3/4 text-start">
                      <p className="italic text-xs">2022-2024</p>
                      <p className="font-bold text-2xl">Software Engineer</p>
                      <p>SPAN Technology Services Pvt. Ltd.</p>
                      <p className="italic text-xs">Coimbatore, Tamil Nadu</p>
                      <p className="mt-5 mb-2">Achievements :</p>
                      <p className="text-sm">1) Awarded with ‘Shining Star’ for Developing and enhancing SPAN Project Management SAAS product single handed</p>
                      <p className="text-sm">2) Awarded with ‘Spot Award’ for implementing the AWS services in production server within a day</p>
                      <p className="text-sm">3) Awarded with ‘Best team of the month’ for the TaxBandits BOIR product</p>
                      <p className="text-sm">4) Recognition for completing the MERN stack training within a month</p>
                      {/* <p className="text-sm">5) Recognition for developing ‘SPAN Foods’ application which was used within the organzation for ordering food from the company’s kitchen for the employees</p> */}
                      {/* <p className="text-sm">6) Recognition for developing FORM W9, W9-BEN from scratch and integration of third-party tax filing services for TAX BANDITS</p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>}

      </div>      

    </div>
  );
}
