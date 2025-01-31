import Image from "next/image"

export const  EmptyMap = ()=> {
    return(
 <div className="border flex flex-col justify-center gap-5 items-center map-styling rounded-lg">
       <div className="bg-[#FAF8F3] rounded-full w-10 h-10 flex justify-center items-center">
         <Image src="/svgs/marker.svg" alt="marker" height={20} width={20} />
       </div>

       <p className="font-light text-sm text-center">
         No Business to display for now.
         <br /> Don&apos;t forget to check back soon
       </p>
     </div>
    )
    
}