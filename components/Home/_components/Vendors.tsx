"use client"

import { formatTime,formatAddress} from "@/lib/utils"
import { useFetchData } from "@/hooks/useFetchData"
import VendorCard from "@/components/ui/VendorCard"
export const Vendors = () => {
    const {data, isLoading, isError,error} = useFetchData()
    console.log(data)
    if(isLoading) return<p>loading...</p>
    if(isError)return <p>Error: {error.message}</p>


    return (
      <>
        <div className="text-black flex flex-wrap gap-10  my-20 mx-20">
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
                  ratings={{
                    average: item.average_rating || 0,
                    count: item.total_reviews || 0,
                  }}
                  onFavorite={() => console.log("Favorite clicked")}
                  onViewPage={() => console.log("View page clicked")}
                />
              </div>
            ))}
        </div>
      </>
    );
}