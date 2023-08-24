import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";



const CheckoutDetails = ({setModal}) => {
  const { cart, setCart, cartTotal } = useContext(CartContext);
  const [successMsg, setSuccessMsg] = useState(false);
  const [count, setCount] = useState(5);

  // counter
  useEffect(()=> {
    if (successMsg) {
      const timer = setTimeout(() => {
        if (count > 1) {
          setCount(count - 1);
        }
      }, 1000);
    // clear timer
    return () => clearTimeout(timer);
    }
  });

  // close modal after 5 sec
  useEffect(()=> {
    if(successMsg) {
      const timer = setTimeout(()=> {
        setSuccessMsg(false);
        setCart([]);
        setModal(false);
      }, 5000)
     // clear timer
      return ()=> clearTimeout(timer);
    }
  }, [successMsg, setCart, setModal])

  return (
    <div className="bottom-0 bg-white md:rounded-full fixed w-full h-full left-0 z-20 transition-all duration-300
    flex flex-col">
      {successMsg ? (
      <div className="flex flex-col justify-center items-center h-[100vh] lg:h-[600px] px-6">
        <h2 className="text-2x1 font-semibold text-center">Thank you! The order has been placed!</h2>
        <Image src={'/success-1.gif'} width={150} height={150} alt="" />
        <div>
          This window will close in <span>{count}</span>{' '} seconds
        </div>
        </div> 
      ) : (
          <div className="lg:gap-x-8 h-full lg:px-12 lg:py-8">
        {/* title */}
        <h2 className="mb-6 text-[20px] uppercase font-extrabold text-center lg:text-left pt-6 lg:pt-0">
          Shipping & Checkout
        </h2>
        <div className="h-[86vh] lg:h-[47.5vh] flex flex-col lg:flex-row lg:gap-x-4">
          {/* box 1 */}
          <div
            className="flex-1 h-full overflow-y-auto
          lg:overflow-visible py-4 px-8 lg:py-0 lg:px-0"
          >
            {/* input wrapper */}
            <div className="flex flex-col gap-4 h-full">
              <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 lg:gap-x-4">
                <input
                  type="text"
                  className="w-full input"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  className="w-full input"
                  placeholder="Last Name"
                />
              </div>
              <div>
                {/* phone & email*/}
                <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 lg:gap-x-4">
                  <input
                    type="text"
                    className="w-full input"
                    placeholder="Phone"
                  />
                  <input
                    type="text"
                    className="w-full input"
                    placeholder="Email Address"
                  />
                </div>

                {/* street & street no */}
                <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 lg:gap-x-4">
                  <input
                    type="text"
                    className="w-full input"
                    placeholder="Street Name"
                  />
                  <input
                    type="text"
                    className="w-full input"
                    placeholder="Street No"
                  />
                </div>

                {/* block floor & apartment */}
                <div className="flex justify-between gap-x-4">
                  <input
                    type="text"
                    className="w-full input"
                    placeholder="Block"
                  />
                  <input
                    type="text"
                    className="w-full input"
                    placeholder="Floor"
                  />
                  <input
                    type="text"
                    className="w-full input"
                    placeholder="Apt. No"
                  />
                </div>

                {/* textarea */}
                <div className="flex-1 h-[80%]">
                  <textarea
                    className="textarea w-full h-full"
                    placeholder="Mentions (optional)"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          {/* box 2 */}
          <div className="flex-1 h-full lg:max-w-[40%] lg:max-h-[80%] flex flex-col justify-between pt-3 px-8 lg:p-0">
              <div className="border rounded-lg flex flex-col mb-4 p-4 h-full">
                <h3 className="text-base font-extrabold uppercase mb-4 border-b pb-4">
                  Your order
                </h3>
                {/* items */}
                <div className="overflow-y-scroll overflow-hidden scrollbar-thin scrollbar-thumb-gray-200 scrollbar-white-500 font-semibold flex flex-col gap-x-4 h-[200px] py-2">
                  {cart.map((pizza, index) => {
                    return (
                      <div className="flex justify-between text-[15px]" key={index}>
                        <div className="flex gap-x-2">
                          <div className="capitalize">{pizza.name}</div>
                          <div>{pizza.amount > 1 && `x ${pizza.amount}`}</div>
                        </div>
                        <div>
                          $ {parseFloat(pizza.price * pizza.amount).toFixed(2)}
                        </div>
                      </div>
                    );
                  })}
                </div>
              
              </div>
              {/* place order btn */}
              <button onClick={()=> setSuccessMsg(true)} className="btn btn-lg sm:mb-12 gradient w-full">
                Place order
              </button>
            </div>
        </div>
      </div>  
      )}

    </div>
  );
};

export default CheckoutDetails;
