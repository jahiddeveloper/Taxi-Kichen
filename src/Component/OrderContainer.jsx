import React, { use } from "react";
import States from "./States";
import OrderCard from "./Cards/OrderCard";

const OrderContainer = ({ loadOrder }) => {
  let order = use(loadOrder);
  console.log(order);
  return (
    <div>
      <States></States>

      <section className="w-11/12 mx-auto py-5 grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="col-span-8">
          <h2 className="font-bold text-3xl">Current Order</h2>
          <div className="space-y-5 mt-5">
            {order.map((item) => (
              <OrderCard key={item.id} order={item}></OrderCard>
            ))}
          </div>
        </div>

        <div className="col-span-4">Cocking + Ready food</div>
      </section>
    </div>
  );
};

export default OrderContainer;
