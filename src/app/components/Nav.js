"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Nav =() => {
  const { isOpen, setIsOpen, itemAmount } = useContext(CartContext)
  return (
  <nav className="absolute w-full py-8">
    <div className="container mx-auto flex flex-col lg:flex-row gap-y-3 justify-between
      items-center">
      {/* Logo */}
      <Link href='#' className='max-w-[160px] lg:max-w-max'>
        <Image src={'logo.svg'} width={260} height={180} alt='' />
      </Link>
      {/*phone & cart */}
      <div className="flex gap-x-8 items-center">
        {/*phone*/}
          <div className="flex gap-x-3 items-center">
              <Image src={'phone.svg'} width={42} height={42} alt='' />
            <div className='text-white'>  
            <div className='text-[12px] font-roboto uppercase font-medium leading-none '>24/7 Dessert delivery service</div>
            <div className='text-[26px] flex items-center justify-center font-roboto font-extrabold leading-none tracking-wide'>920 234 5768</div>
          </div>
      </div>
        {/* cart */}
        <div onClick={()=> setIsOpen(!isOpen)} className="relative cursor-pointer hidden lg:flex">
          <Image src={'bag.svg'} width={38} height={38} alt='' />
          <div className='bg-tertiary w-6 h-6 rounded-full text-white flex justify-center
          items center text-[13px] font-robotoCondensed absolute -bottom-2 -right-1'>
            {itemAmount}
            </div>
        </div>
      </div>
    </div>
  </nav>
  
  
  );
};
export default Nav;
