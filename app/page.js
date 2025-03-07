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



  return (
    <div className="text-center items-center snap-y snap-mandatory">
      
      {/* <Image src={`/intro.jpg`} width={100} height={100}/> */}

      {/* <div className="h-[90vh] place-content-center bg-black bg-[url(/banner.jpg)]"> */}
      <div className="place-content-center bg-blue-700 snap-center snap-always sm:h-[100vh]">

        <div className="sm:flex">

          <div className="basis-1/2 place-content-center">

            <div className=" mb-5 text-white flex">
              <p className="basis-1/4"></p>
              <div className="basis-2/4 text-start">
                <p className="text-white text-2xl font-bold">Hey, I'm</p>
                <p className="text-yellow-300 text-7xl font-black">Suresh Kumar M</p>
                <div className="text-lg text-white py-5">
                  <span className="me-2">SOFTWARE</span>
                  <span className="me-2">ENGINEER</span>
                  {/* <span>DEVELOPER</span> */}
                </div>
                <div className="mt-5 pt-5">
                  <button className="rounded-full px-5 bg-white text-black py-2" onClick={()=>router.push("/")}>See more ⮞</button>
                </div>
                {/* <div className="mt-5 pt-5">
                  <div className="mt-5 pt-5">
                    <div className="mt-5 pt-5">
                      <p>qwe qwewq eqw qw eqw eqwe q</p>
                      <p>qwe qwewq eqw qw eqw eqwe q</p>
                      <p>qwe qwewq eqw qw eqw eqwe q</p>

                    </div>
                  </div>
                </div> */}
              </div>
              <p className="basis-1/4"></p>
            </div>

          </div>

          <div className="basis-1/2 place-content-center text-center items-center">

            <div className="sm:flex">

              <div className="sm:basis-1/3 sm:h-[100vh]"></div>
              
              <div className="sm:basis-1/3 bg-yellow-300 h-[100vh] place-content-center">
                <Image src="/Photo.jpg" width={400} height={400} className="text-center items-center"/>
              </div>

              <div className="sm:basis-1/3 bg-yellow-300"></div>

            </div>

          </div>

        </div>

      </div>    

      {/* Profile */}

      <div className="px-5 mx-5 snap-center snap-always sm:h-[100vh] sm:flex ">
        <div className="sm:basis-1/2">
          <div className="text-5xl font-black p-5 m-5 text-left text-blue-700">About Me</div>
          <p className="text-xl italic text-sm mx-5 px-5 text-left">Software engineer with 3 years experience working predominantly with corporates and startups, gaining extensive knowledge and expertise in various technologies, including React and Node js. Passionate about tackling new challenges, I thrive on learning and implementing innovative & logical solutions. Known for my quick adaptability to new technologies and tasks, I consistently strive to deliver high-quality results.</p>
          <button className="bg-yellow-300 p-5 m-5 font-bold"><a href="/resume.pdf">View full resume</a></button>
          <div className="sm:flex">
            <div className="sm:basis-1/3 text-white bg-blue-700 rounded-2xl m-5 p-5">
              <div className={`block sm:flex`}>
                <div className=" basis-2/3 italic text-start">
                  <p><span className="font-bold text-yellow-300">Age:</span> 24</p>
                  <p><span className="text-yellow-300 font-bold">Location:</span> Coimbatore, Tamil Nadu, India</p>
                  
                  {/* <p>Freelance: Available</p> */}
                </div>
              </div>            
            </div>
            <div className="sm:basis-1/3 text-white bg-blue-700 rounded-2xl m-5 p-5 text-left">
              <p className="text-lg font-bold italic mb-3 text-yellow-300">Languages Known:</p>
              <p className="text-lg font-bold italic text-sm">● English <span className="text-xs">(Fluent)</span></p>
              <p className="text-lg font-bold italic text-sm">● Tamil <span className="text-xs">(Native)</span></p>
            </div>
            <div className="sm:basis-1/3 text-white bg-blue-700 rounded-2xl m-5 p-5 text-left">
              <p className="text-lg font-bold italic mb-3 text-yellow-300">Interests :</p>
              <div className="">
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
        <div className="sm:basis-1/2">
          <div className="">
            <div className=" text-white">
              <div className="rounded-2xl m-5 p-5">
                <div className="basis-1/2 place-content-center">
                  <p className="text-4xl font-black text-black text-blue-700">Education</p>
                  <div className="m-5 bg-yellow-300 text-black rounded-2xl p-5">
                    <div className="sm:flex">
                      <div className="basis-1/4">
                        <Image src="https://dial4college.blr1.cdn.digitaloceanspaces.com/pro/1095/logo/1699432925.png" width={50} height={50} />
                      </div>
                      <div className="basis-3/4 text-start">
                        <p className="italic">2018-2021</p>
                        <p className="font-black">Bachelor of Computer Science</p>
                        <p>Kongunadu Arts & Science</p>
                      </div>
                    </div>                  
                  </div>
                  <div className="m-5 bg-yellow-300 text-black rounded-2xl p-5">
                    <div className="sm:flex">
                      <div className="basis-1/4">
                        <Image src="https://www.eduska.com/assets/user_logo/aad110a65c5c2afbf179daf9fc4b157a.png" width={50} height={50} />
                      </div>
                      <div className="basis-3/4 text-start">
                        <p className="italic">2017-2018</p>
                        <p className="font-black">High school - 12th State board</p>
                        <p>Brilliant Matric. Hr. Sec. School</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="basis-1/2 place-content-center">
                  <p className="text-4xl font-black text-black text-blue-700">Courses & Training</p>
                  <div className="m-5 bg-yellow-300 text-black rounded-2xl p-5">
                    <div className="sm:flex">
                      <div className="basis-1/4">
                        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJK81PsouiVGCgwGxMYY3Jqv2o7HlKMLcOUQ&s" width={50} height={50} />
                      </div>
                      <div className="basis-3/4 text-start">
                        <p className="font-black">Web Development - MERN Stack</p>
                        <p>Zero To Mastery, Brad Traversy, Udemy</p>
                      </div>
                    </div>                  
                  </div>
                  <div className="m-5 bg-yellow-300 text-black rounded-2xl p-5">
                    <div className="sm:flex">
                      <div className="basis-1/4">
                        <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/HackerRank_Icon-1000px.png/640px-HackerRank_Icon-1000px.png' width={50} height={50} />
                      </div>
                      <div className="basis-3/4 text-start">
                        <p className="font-black">HackerRank</p>
                        <p>Rank: 1291076</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>  
      </div>
      

      {/* Skills */}

      <div className=" bg-blue-700 snap-always sm:h-[100vh]">
        <p className="text-center text-6xl font-black font-strong py-5 text-yellow-300">Skills</p>
        <div className="sm:flex">
          <div className="basis-2/6 bg-white text-black rounded-2xl m-5 p-5">
            <p className="text-2xl text-blue-700 font-black mb-5">Graphics Desginer</p>
            <p className="text-left ps-5 font-black"><span className="rounded-lg bg-yellow-300 px-5">Graphics</span></p>
            <div className="sm:flex place-content-between mx-5 bg-yellow-300 rounded-lg p-2">
              {[
                {image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/2101px-Adobe_Photoshop_CC_icon.svg.png", name: "Adobe Photoshop", years: "15+ yrs"},
                {image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/2101px-Adobe_Illustrator_CC_icon.svg.png", name: "Adobe Illustrator", years: "15+ yrs"},
                {image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Adobe_InDesign_CC_icon.svg/1200px-Adobe_InDesign_CC_icon.svg.png", name: "Adobe Indesign", years: "1 yr"}
              ]?.map((data)=>{
                return <div className="basis-1/3 flex sm:block">
                  <div className="text-center justify-items-center">
                    <Image src={data?.image} width={100} height={100} className="mb-2 h-[14vh] p-5"/>
                  </div>
                  <div className="text-start ms-5 sm:text-center ">
                    <p className="font-bold ">{data?.name}</p>
                    <p className="">{data?.years}</p>
                  </div>                
                </div> 
              })}           
            </div>
            <p className="text-left ps-5 font-black mt-5"><span className="rounded-lg bg-yellow-300 px-5">Web design</span></p>
            <div className="sm:flex mx-5 text-black bg-yellow-300 p-2 rounded-lg">
              {[
                {image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1200px-Figma-logo.svg.png", name: "Figma", years: "4+ yrs"},
                {image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/2101px-Adobe_XD_CC_icon.svg.png", name: "Adobe XD", years: "4+ yrs"},
              ]?.map((data)=>{
                return <div className="basis-1/3 flex sm:block">
                  <div className="text-center justify-items-center">
                    <Image src={data?.image} width={100} height={100} className="mb-2 h-[14vh] p-5"/>
                  </div>
                  <div className="text-start ms-5 sm:text-center">
                    <p className="font-bold ">{data?.name}</p>
                    <p className="">{data?.years}</p>
                  </div>                
                </div> 
              })}
            </div>
          </div>
          <div className="basis-4/6 bg-white rounded-2xl m-5 p-5">
            <p className="text-2xl text-blue-700 font-black mb-5">Software Engineer</p>
            <p className="text-left ps-5 font-black"><span className="rounded-lg bg-yellow-300 px-5">Frontend</span></p>
            <div className="sm:flex place-content-between mx-5 text-black bg-yellow-300 rounded-lg p-2">
              {[
                {name: "HTML", years: "15+ yrs", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9A_S6BPxCDRp5WjMFEfXrpCu1ya2OO-Lw&s"},
                {name: "CSS", years: "15+ yrs", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"},
                {name: "JavaScript", years: "4+ yrs", image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"},
                {name: "Tailwind CSS", years: "4+ yrs", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png"},
                {name: "React JS", years: "4+ yrs", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s"},
                {name: "Next JS", years: "3+ yrs", image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"},
                {name: "Vue JS", years: "2+ yrs", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png"},
                {name: "Bootstrap", years: "4+ yrs", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png"},
                
              ]?.map((data)=>{
                return <div className="basis-1/8">
                  <div className="flex sm:block">
                    <div className="">
                      <Image src={data?.image} width={100} height={100} className="border-b-2 border-white mb-2 h-[14vh]  p-5"/>
                    </div>
                    <div className="ps-5 text-start sm:text-center">  
                      <p className="font-bold">{data?.name}</p>
                      <p>{data?.years}</p>
                    </div>
                  </div>                  
                </div>
              })}
            </div>
            <p className="text-left ps-5 font-black mt-5"><span className="rounded-lg bg-yellow-300 px-5">Backend</span></p>
            <div className="sm:flex place-content-between mx-5 text-black bg-yellow-300 p-2 rounded-lg">
              {[
                {name: "Express JS", years: "4+ yrs", image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"},
                {name: "Node JS", years: "4+ yrs", image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"},
                {name: "Mongo DB", years: "4+ yrs", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png"},
                {name: "MySQL", years: "3+ yrs", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSblOKKbtfBxeDAAnjdRbRE_Hn3YVrrlj35Lg&s"},
                {name: "React Native", years: "1+ yrs", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"},
                {name: "GitHub", years: "4+ yrs", image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"},
                {name: "AWS services", years: "3+ yrs", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png"},
                {name: "Docker", years: "2+ yrs", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Docker_%28container_engine%29_logo.svg/2560px-Docker_%28container_engine%29_logo.svg.png"},
              
              ]?.map((data)=>{
                return <div className="basis-1/8">
                  <div className="flex sm:block">
                    <div>
                      <Image src={data?.image} width={100} height={100} className="border-b-2 border-white mb-2 h-[14vh] p-5"/>
                    </div>
                    <div className="ps-5 text-start sm:text-center">
                      <p className="font-bold">{data?.name}</p>
                      <p>{data?.years}</p>
                    </div>
                  </div>
                </div>
              })} 
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
        </div>
      </div>
      

      {/* Experience */}

      <div className="sm:h-[100vh]">
        <p className="text-6xl font-black p-5 text-blue-700">Experience</p>
        <div className=" text-white">
          <div className="rounded-2xl m-5 p-5">
            {/* <p className="text-2xl font-bold italic">Experience</p> */}
            <div className="sm:flex">
              <div className="basis-1/3 m-5 bg-yellow-300 text-black rounded-2xl p-5">
                <div className="sm:flex">
                  <div className="basis-1/4">
                    <Image width={50} height={50} src={`https://static.wixstatic.com/media/a5ec0c_019715cab1ef4b35b5206dd13322d324~mv2.png/v1/fill/w_2500,h_895,al_c/a5ec0c_019715cab1ef4b35b5206dd13322d324~mv2.png`}/>
                  </div>
                  <div className="basis-3/4 text-start">
                    <p className="italic text-xs">2019-2020</p>
                    <p className="font-black text-2xl">Freelancer</p>
                    <p className="text-md">Markfly ventures</p>
                    <p className="italic text-xs">Coimbatore, Tamil Nadu</p>
                    <p className="mt-5 mb-2">Achievements :</p>
                    <p className="text-sm">1) Book formatting and cover design for 5 prestigious books</p>
                    <p className="text-sm">2) Awarded with Coimbatore Literary Award for the Best Book cover designer</p>
                    <p className="text-sm">3) Kalpaviruksha website developed and launched</p>
                  </div>
                </div>                  
              </div>
              <div className="basis-1/3 m-5 bg-yellow-300 text-black rounded-2xl p-5">
                <div className="sm:flex">
                  <div className="basis-1/4">
                    <Image width={50} height={50} src="https://projectdevs.web.app/logo.png" />
                  </div>
                  <div className="basis-3/4 text-start">
                    <p className="italic text-xs">2020-2022</p>
                    <p className="font-black text-2xl">Co-Founder</p>
                    <p>Project Devs</p>
                    <p className="italic text-xs">Coimbatore, Tamil Nadu</p>
                    <p className="mt-5 mb-2">Achievements :</p>
                    <p className="text-sm">1) Built and Sold 50+ unique projects to college students</p>
                    <p className="text-sm">2) MrDood trading platform built and launched</p>
                    <p className="text-sm">3) AirConnect drone website built and sold to customer</p>
                    <p className="text-sm">4) I9 Options is a USA based Option trading platform built for TechOreo, Cyber-Security and hosting Company</p>
                    <p className="text-sm">5) Digital marketing for Numeric Gamers, an online video gaming content provider available in all Social platforms including Youtube, Blogger, Instagram</p>
                  </div>
                </div>
              </div>
              <div className="basis-1/3 m-5 bg-yellow-300 text-black rounded-2xl p-5">
                <div className="sm:flex">
                  <div className="basis-1/4">
                    <Image width={50} height={50} src="https://media.licdn.com/dms/image/v2/D560BAQFq-rO6qwiCCQ/company-logo_200_200/company-logo_200_200/0/1709300361982/span_technology_services_logo?e=2147483647&v=beta&t=uQtD4JiCJqhNdxTsR1Rv5fvORoRJ01fKp2MFqwbX9Fw" />
                  </div>
                  <div className="basis-3/4 text-start">
                    <p className="italic text-xs">2022-2024</p>
                    <p className="font-black text-2xl">Software Engineer</p>
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
      </div>

      {/* Contact  */}

      <div className="text-center items-center">
      
        {/* <Image src={`/intro.jpg`} width={100} height={100}/> */}

        <div className="bg-blue-700 p-5 sm:flex">

          <div className="basis-1/3 bg-white text-black rounded-2xl m-2 p-5">
            <div className="mx-5 rounded-full place-content-center h-[7vh] cursor-pointer px-5">
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
          <div className="basis-1/3 bg-white rounded-2xl m-2 p-5">
            <div className="mx-5 rounded-full place-content-center h-[7vh] cursor-pointer px-5 text-black">
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
          <div className="basis-1/3 bg-white rounded-2xl m-2 p-5">
            <div className="mx-5 rounded-full place-content-center h-[7vh] cursor-pointer px-5 text-black">
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

      {/* Footer  */}
      
      <div>

        <div className={`sm:h-[4vh] flex place-content-center bg-black bg-opacity-80`}>

          <p className="text-white text-xs py-2">@ Suresh Kumar M, 2025</p>

        </div>

      </div>

    </div>
  );
}
