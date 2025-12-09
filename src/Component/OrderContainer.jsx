import React, { use, useState } from "react";
import States from "./States";
import OrderCard from "./Cards/OrderCard";
import CookingCard from "./Cards/CockingCard";
import ReadyOrder from "./Cards/ReadyOrder";

const OrderContainer = ({ loadOrder }) => {
  let order = use(loadOrder);

  let [cockingItems, setCockingItems] = useState([]);
  let [readyItems, setReadyItems] = useState([]);

  let handleReadyItems = (order) => {
    // console.log(order);
    let newReadyItems = [...readyItems, order];
    setReadyItems(newReadyItems)

    let remaining = cockingItems.filter(item => item.id !== order.id)
    setCockingItems(remaining)
  }

  let handleOrder = (order) => {
    // console.log(order);

    let isEixst = cockingItems.find(item => item.id == order.id);
    if(isEixst) {
        alert("Allready cocking");
        return;
    }

    let newCockingItems = [...cockingItems, order];
    setCockingItems(newCockingItems);
  };

  return (
    <div>
      <States cockingTotal={cockingItems.length} order={order.length} readyTotal = {readyItems.length}></States>

      <section className="w-11/12 mx-auto py-5 grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="lg:col-span-8">
          <h2 className="font-bold text-3xl">Current Order</h2>
          <div className="space-y-5 mt-5">
            {order.map((item) => (
              <OrderCard
                handleOrder={handleOrder}
                key={item.id}
                order={item}
              ></OrderCard>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4 space-y-5">
          {/* Cocking now */}
          <h2 className="font-bold text-3xl">Cocking Now</h2>
          <div className="shadow-sm p-10 space-y-5">
            {cockingItems.map((order) => (
              <CookingCard handleReadyItems = {handleReadyItems} key={order.id} order={order}></CookingCard>
            ))}
          </div>

          {/* Order ready */}
          <h2 className="font-bold text-3xl">OrderReady</h2>
          <div className="shadow-sm p-10 space-y-5">
            {
                readyItems.map(order => <ReadyOrder key={order.id} order = {order}></ReadyOrder>)
            }
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderContainer;
