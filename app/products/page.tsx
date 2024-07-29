import React from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';
import Image from 'next/image';
import Img from '@/public/img.png';
import Img2 from '@/public/img2.png';
import Img3 from '@/public/img3.png';
import Img4 from '@/public/img4.png';

interface Product {
  name: string;
  price: string;
  old_price: string;
  img: any;
}

const Index: React.FC = () => {
  const data: Product[] = [
    {
      name: "Бутса Nike Mercurial Superfly 8 FG",
      price: "500 000 So'm",
      old_price: "750 000 So'm",
      img: Img
    },
    {
      name: "Бутса Nike Mercurial Superfly 8 FG",
      price: "500 000 So'm",
      old_price: "750 000 So'm",
      img: Img2
    },
    {
      name: "Бутса Nike Mercurial Superfly 8 FG",
      price: "500 000 So'm",
      old_price: "750 000 So'm",
      img: Img3
    },
    {
      name: "Бутса Nike Mercurial Superfly 8 FG",
      price: "500 000 So'm",
      old_price: "750 000 So'm",
      img: Img4
    },
    {
      name: "Бутса Nike Mercurial Superfly 8 FG",
      price: "500 000 So'm",
      old_price: "750 000 So'm",
      img: Img
    },
    {
      name: "Бутса Nike Mercurial Superfly 8 FG",
      price: "500 000 So'm",
      old_price: "750 000 So'm",
      img: Img2
    },
    {
      name: "Бутса Nike Mercurial Superfly 8 FG",
      price: "500 000 So'm",
      old_price: "750 000 So'm",
      img: Img3
    },
    {
      name: "Бутса Nike Mercurial Superfly 8 FG",
      price: "500 000 So'm",
      old_price: "750 000 So'm",
      img: Img4
    },
    {
      name: "Бутса Nike Mercurial Superfly 8 FG",
      price: "500 000 So'm",
      old_price: "750 000 So'm",
      img: Img
    },
    {
      name: "Бутса Nike Mercurial Superfly 8 FG",
      price: "500 000 So'm",
      old_price: "750 000 So'm",
      img: Img2
    },
    {
      name: "Бутса Nike Mercurial Superfly 8 FG",
      price: "500 000 So'm",
      old_price: "750 000 So'm",
      img: Img3
    },
    {
      name: "Бутса Nike Mercurial Superfly 8 FG",
      price: "500 000 So'm",
      old_price: "750 000 So'm",
      img: Img4
    },
    {
      name: "Бутса Nike Mercurial Superfly 8 FG",
      price: "500 000 So'm",
      old_price: "750 000 So'm",
      img: Img
    },
    {
      name: "Бутса Nike Mercurial Superfly 8 FG",
      price: "500 000 So'm",
      old_price: "750 000 So'm",
      img: Img2
    },
    {
      name: "Бутса Nike Mercurial Superfly 8 FG",
      price: "500 000 So'm",
      old_price: "750 000 So'm",
      img: Img3
    }

  ];
  const data2: Product[] = [
    {
      name: "Бутса Nike Mercurial Superfly 8 FG",
      price: "500 000 So'm",
      old_price: "750 000 So'm",
      img: Img
    },
    {
      name: "Бутса Nike Mercurial Superfly 8 FG",
      price: "500 000 So'm",
      old_price: "750 000 So'm",
      img: Img2
    },
    {
      name: "Бутса Nike Mercurial Superfly 8 FG",
      price: "500 000 So'm",
      old_price: "750 000 So'm",
      img: Img3
    },
    {
      name: "Бутса Nike Mercurial Superfly 8 FG",
      price: "500 000 So'm",
      old_price: "750 000 So'm",
      img: Img4
    },
  ];

  return (
    <div className='w-full px-5 lg:px-[138px] bg-gray-200'>
      <div className='flex flex-col lg:flex-row gap-6'>
        <div className='h-[522px] rounded-lg w-full lg:w-1/4 bg-white p-4'>
          <h3 className='text-xl font-bold mb-2'>Филтрь</h3>
          <p className='mb-2'>Цена</p>
        </div>
        <div className='w-full lg:w-3/4 rounded-lg bg-gray-200 p-6'>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {data.map((item, index) => (
              <div
                key={index}
                className='bg-white p-4 border rounded-lg shadow-sm transform transition-transform duration-100 hover:scale-105 hover:border-red-500'
              >
                <div className='relative'>
                  <Image src={item.img} alt={item.name} layout='responsive' />
                  <span className='absolute top-0 left-0 bg-red-500 text-white text-sm px-2 py-1'>Акция</span>
                </div>
                <h3 className='text-lg font-bold mt-4 mb-2'>{item.name}</h3>
                <p className='text-red-500 font-bold'>{item.price}</p>
                <p className='text-gray-500 line-through'>{item.old_price}</p>
                <button className='w-full bg-yellow-500 text-black py-2 mt-4 transition-colors duration-300 hover:bg-red-700'>
                  <ShoppingCartOutlined className='text-black mr-3 ' />
                  Корзина
                </button>
              </div>

            ))}
          </div>
          <button className='w-full py-5 bg-white text-black rounded-lg mt-7 ' >Показать ещё</button>
        </div>
      </div>
      <div className='mb-32' >
        <h2 className='text-2xl font-bold mt-8 mb-4'>Реконмендуемые продукты</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {data2.map((item, index) => (
            <div
              key={index}
              className='bg-white p-4 border rounded-lg shadow-sm transform transition-transform duration-100 hover:scale-105 hover:border-red-500'
            >
              <div className='relative'>
                <Image src={item.img} alt={item.name} layout='responsive' />
                <span className='absolute top-0 left-0 bg-red-500 text-white text-sm px-2 py-1'>Акция</span>
              </div>
              <h3 className='text-lg font-bold mt-4 mb-2'>{item.name}</h3>
              <p className='text-red-500 font-bold'>{item.price}</p>
              <p className='text-gray-500 line-through'>{item.old_price}</p>
              <button className='w-full bg-yellow-500 text-black py-2 mt-4 transition-colors duration-300 hover:bg-red-700'>
                <ShoppingCartOutlined className='text-black mr-3 ' />
                Корзина
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
