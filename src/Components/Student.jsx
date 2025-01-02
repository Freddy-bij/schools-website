import { Link } from "react-router"


const Student = () => {
  return (
    <>
     <div className="bg-[url('/public/class.png')] w-full h-screen flex flex-col justify-center">
       <div className="ml-60">

       <div className="uppercase text-6xl font-bold mt-7">
            <h1 className="pb-4">Preparing Students</h1>
            <h2 className="pb-4">for Successful Futurs</h2>
             </div>
           <Link to="/countries"><button className="bg-black text-white py-5 px-5 hover:bg-white hover:text-black rounded-xl uppercase text-2xl mt-8">find your favorite country</button></Link> 
       </div>
      
    </div>
    </>
   
  )
}

export default Student