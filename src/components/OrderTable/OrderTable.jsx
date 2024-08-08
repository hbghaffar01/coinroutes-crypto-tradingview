import { useEffect, useState } from "react";

const OrderTable = ({ isAsked = true, data, updatedOrders }) => {
  const [updatedOrdersState, setCumulativeOrdersState] = useState([]);

  useEffect(() => {
    setCumulativeOrdersState(updatedOrders);

    const timeout = setTimeout(() => {
      setCumulativeOrdersState([]);
    }, 1500);

    return () => clearTimeout(timeout);
  }, [updatedOrders]);

  return (
    <div className="w-full overflow-y-scroll h-64 scrollbar-hidden bg-[#0D1820]">
      <table className="text-xs text-left border-collapse w-full">
        <thead className="bg-[#141e24]">
          <tr className="table-head">
            <th className="py-3 px-6 text-slate-500">Price(USD)</th>
            <th className="py-3 px-6 text-slate-500">Size</th>
          </tr>
        </thead>
        <tbody className="overflow-y-auto w-full text-start">
          {data.map(([price, size], index) => (
            <tr
              key={index}
              className={
                updatedOrdersState.find(([p]) => p === price)
                  ? !isAsked
                    ? "animate-redFlash"
                    : "animate-greenFlash"
                  : ""
              }
            >
              <td
                className={`px-2 w-1/2 ${isAsked ? "text-green-600" : "text-red-600"}`}
              >
                {price}
              </td>
              <td className="px-2 w-1/2">{size}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;