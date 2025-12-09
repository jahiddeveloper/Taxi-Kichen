import { ScrollText, CookingPot, Heater } from "lucide-react";
import React from "react";

const States = ({order, cockingTotal, readyTotal}) => {
  return (
    <div className="max-w-11/12 mx-auto py-10 grid grid-cols-1 lg:grid-cols-3 gap-5">
      {/* Total Order */}
      <div className="border-4 border-dotted rounded-2xl border-amber-500 p-5">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <ScrollText className="animate-pulse" color="#fcb700" size={100} />
          <div className="text-xl text-center">
            Current Orders
            <h2 className="text-6xl font-bold">{order}</h2>
          </div>
        </div>
      </div>

      {/* Total Cocking */}
      <div className="border-4 border-dotted rounded-2xl border-amber-500 p-5">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <Heater className="animate-pulse" color="#fcb700" size={100} />
          <div className="text-xl text-center">
            Current Cocking
            <h2 className="text-6xl font-bold">{cockingTotal}</h2>
          </div>
        </div>
      </div>

      {/* Total Ready */}
      <div className="border-4 border-dotted rounded-2xl border-amber-500 p-5">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <CookingPot className="animate-pulse" color="#fcb700" size={100} />
          <div className="text-xl text-center">
            Order Ready
            <h2 className="text-6xl font-bold">{readyTotal}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default States;
