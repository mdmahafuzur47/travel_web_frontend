/* eslint-disable @next/next/no-img-element */
import { IDestination, destinationData } from "@/data/destination";
import React from "react";
import { IndicatorArrow, StarIcon } from "../icons";

const PopularDestination = () => {
  return (
    <section className="container my-20">
      <div>
        <div className="flex flex-col gap-3">
          <p className="text-primaryColor font-medium text-xl">
            Why Are You Waiting For
          </p>
          <h1 className="text-4xl tracking-wider font-medium">
            Get Your Visa Now
          </h1>
          <div className="bg-primaryColor w-[130px] h-[1.5px]"></div>
        </div>

        {/* destination card  */}
        <div className="grid grid-cols-4 mt-8 gap-5">
          {destinationData?.map((data, index) => {
            return (
              <PopularDestinationCard index={index} key={index} data={data} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

const PopularDestinationCard = ({
  data,
  index,
}: {
  data: IDestination;
  index: number;
}) => {
  return (
    <div
      className={`rounded-2xl relative h-full group overflow-hidden shadow-sm w-full ${
        index % 2 !== 0 && "lg:mt-8"
      }`}
    >
      <img
        className="w-full group-hover:scale-110 transition-all duration-500  h-full rounded-2xl object-cover"
        src={data.img}
        alt={data.name}
      />
      <div className="absolute group-hover:block hidden bottom-0 left-0 w-full">
        <div className="bg-slate-100 rounded-xl p-5 mx-4 mb-4 flex gap-4 justify-between items-center">
          <p className="font-medium">- {data?.name}</p>
          <div className="bg-primaryColor text-xl text-white rounded-full w-fit p-2">
            <IndicatorArrow />
          </div>
        </div>
      </div>

      {/* rating  */}
      <div className="absolute top-3 right-3 bg-slate-100 p-1 flex items-center gap-1 rounded-md px-2">
        <StarIcon className="text-primaryColor" />
        <p className="font-medium text-sm">{data?.rating}</p>
      </div>
    </div>
  );
};

export default PopularDestination;
