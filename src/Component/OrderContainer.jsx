import React, { use } from "react";
import States from "./States";

const OrderContainer = ({ loadOrder }) => {
  let order = use(loadOrder);
  console.log(order);
  return (
    <div>
      <States></States>

      <section className="w-11/12 mx-auto py-5 grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="col-span-8">Orders</div>

        <div className="col-span-4">Cocking + Ready food</div>
      </section>
    </div>
  );
};

export default OrderContainer;
