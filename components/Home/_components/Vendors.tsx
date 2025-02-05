"use client"

import { formatTime,formatAddress} from "@/lib/utils"
import { useFetchData } from "@/hooks/useFetchData"
import { Skeleton } from "@/components/ui/skeleton"
import VendorCard from "@/components/ui/VendorCard"
export const Vendors = () => {
    const {data, isLoading, isError,error} = useFetchData()
   if (isLoading)
     return (
       <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 xl:grid-col-6 m-20 ">
         <Skeleton className="skeleton-style" />
         <Skeleton className="skeleton-style" />
         <Skeleton className="skeleton-style" />
         <Skeleton className="skeleton-style" />
         <Skeleton className="skeleton-style" />
       </div>
     );
    if(isError)return <p>Error: {error.message}</p>

    console.log(data)

    return (
      <>
        <h3 className=" flex gap-10 items-center text-semibold mx-10">
          Explore a wide range of Vendors{" "}
          <span className="text-sm font-extralight cursor-pointer hover:text-gray-500 underline">
            see all
          </span>
        </h3>
        <div className="text-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10  m-2 lg:m-10">
          {Array.isArray(data) &&
            data.map((item) => (
              <div key={item._id} className="bg-card ">
                <VendorCard
                  logo={item.business_profile_picture}
                  name={item.name}
                  distance={formatTime(item.minutes_away)}
                  description={item.description}
                  location={formatAddress(item.address) || "No address"}
                  categories={item.categories}
                  ratings={item.total_ratings}
                  onFavorite={() => console.log("Favorite clicked")}
                  onViewPage={() => console.log("View page clicked")}
                />
              </div>
            ))}
        </div>
      </>
    );
}