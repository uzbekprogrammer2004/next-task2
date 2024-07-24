import React from 'react';
import 'antd/dist/reset.css';
import { Carousel } from 'antd';
import Logo from '@/public/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { HddOutlined, HeartOutlined, MailOutlined, PhoneOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import CaruselImg from '@/public/13.jpg';
const Index = () => {
    const links = [
        { path: "/", title: "Продукты" },
        { path: "/Контакты", title: "Контакты" },
        { path: "/Оплата-Доставка", title: "Оплата и Доставка" },
        { path: "/Новости", title: "Новости" },
        { path: "/O-нас", title: "О нас" },
    ];
      
    return (
        <header>
            <div className='bg-[#1F1D14] text-white flex justify-between pl-[138px] pr-[138px] pt-[15px] pb-[10px]'>
                <div className="flex items-center">
                    <div className='flex items-center text-2xl font-semibold font-[Fira Sans] leading-7 w-[62px] h-[54px]'>
                        <Image
                            src={Logo}
                            alt="Sayt logosi"
                        />
                        <h2 className="ml-2">Sport Market</h2>
                    </div>
                    <nav className='flex ml-[117.5px] gap-[30px]'>
                        {links.map((item, index) => (
                            <Link href={item.path} key={index} legacyBehavior>
                                <a className='text-white text-base font-normal'>{item.title}</a>
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className='flex items-center'>
                    <PhoneOutlined />
                    <span className='ml-2'>+998 (90) 565-85-85</span>
                </div>
                <div className='flex items-center'>
                    <MailOutlined />
                    <span className='ml-2'>info@gmail.com</span>
                </div>
            </div>
            <div className='pl-[138px] pr-[138px] pt-[15px] pb-[16px] flex justify-between'>
                <div className='flex'>
                    <button className='py-[15px] px-[40px] flex bg-black text-white'>
                        <HddOutlined /> Каталог
                    </button>
                    <form className='ml-3'>
                        <input className='bg-[#F2F2F2] text-black pt-[17px] pb-[17px] pl-[20px] pr-[300px] border-r border-b-black' type="search" placeholder='Поиск'/>
                    </form>
                </div>
                <div className='flex gap-3'>
                    <button className='pt-[13px] pb-[13px] pl-[12px] pr-[12px] bg-[#F2F2F2]'>
                        <UserOutlined />
                    </button>
                    <button className='pt-[13px] pb-[13px] pl-[12px] pr-[12px] w-[40px] bg-[#F2F2F2]'>
                        <HeartOutlined />
                    </button>
                    <button className='pt-[18px] pb-[13px] pl-[12px] pr-[112px] w-[40px] bg-[#F2F2F2] flex gap-1'>
                        <ShoppingCartOutlined /> Корзина
                    </button>
                </div>
            </div>
            <div className='pl-[138px] pr-[138px] pt-[13px] pb-[53px] w-[100%] h-[450px] bg-[#F2F2F2] '>
                <Carousel autoplay autoplaySpeed={1000} speed={500} infinite>
                    <div>
                        <Image src={CaruselImg} alt="Image 1" layout="responsive" objectFit="cover"/>
                    </div>
                    <div>
                        <Image src={CaruselImg} alt="Image 2" layout="responsive" objectFit="cover"/>
                    </div>
                    <div>
                        <Image src={CaruselImg} alt="Image 3" layout="responsive" objectFit="cover"/>
                    </div>
                    <div>
                        <Image src={CaruselImg} alt="Image 4" layout="responsive" objectFit="cover"/>
                    </div>
                </Carousel>
            </div>
        </header>
    );
}

export default Index;