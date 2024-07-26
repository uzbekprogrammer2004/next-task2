"use client"; // Ensure this directive is present

import React, { useState } from 'react';
import 'antd/dist/reset.css';
import { Carousel } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import {
    HddOutlined, HeartOutlined, MailOutlined, PhoneOutlined,
    ShoppingCartOutlined, UserOutlined, MenuOutlined, CloseOutlined
} from '@ant-design/icons';
import Logo from '@/public/logo.png';
import CaruselImg from '@/public/13.jpg';

const links = [
    { path: "/", title: "Продукты" },
    { path: "/Контакты", title: "Контакты" },
    { path: "/Оплата-Доставка", title: "Оплата и Доставка" },
    { path: "/Новости", title: "Новости" },
    { path: "/o-нас", title: "О нас" },
];

const Index: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header>
            {/* Top bar */}
            <div className='bg-[#1F1D14] xl:px-[138px] text-white flex flex-col lg:flex-row items-center justify-between px-[38px] py-4'>
                <div className="flex items-center mb-4 lg:mb-0">
                    <div className='flex items-center text-xl lg:text-2xl font-semibold font-[Fira Sans]'>
                        <Image src={Logo} alt="Sayt logosi" width={62} height={54} />
                        <h2 className="ml-2 w-[116px]">Sport Market</h2>
                    </div>
                    <nav className='hidden lg:flex ml-6 space-x-6'>
                        {links.map((item, index) => (
                            <Link href={item.path} key={index} legacyBehavior>
                                <a className='text-white text-base font-normal'>{item.title}</a>
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className='flex items-center space-x-4'>
                    <div className='flex items-center text-sm lg:text-base'>
                        <PhoneOutlined />
                        <span className='ml-2'>+998 (90) 565-85-85</span>
                    </div>
                    <div className='flex items-center text-sm lg:text-base'>
                        <MailOutlined />
                        <span className='ml-2'>info@gmail.com</span>
                    </div>
                    {/* Hamburger Menu */}
                    <button
                        className='lg:hidden p-2'
                        onClick={toggleMenu}
                    >
                        <MenuOutlined className='text-white' />
                    </button>
                </div>
            </div>
            
            {/* Search and Icons */}
            <div className='bg-white flex flex-col lg:flex-row items-center justify-between px-[138px] py-4 border-b border-gray-200'>
                <div className='flex flex-col lg:flex-row items-center w-full lg:w-auto'>
                    <button className='py-2 mr-2 px-4 bg-black text-white flex items-center rounded lg:w-auto mb-2 lg:mb-0'>
                        <HddOutlined className='mr-2' /> Каталог
                    </button>
                    <form className='flex-1'>
                        <input className='bg-[#F2F2F2] text-black w-full py-2 px-4 border rounded' type="search" placeholder='Поиск'/>
                    </form>
                </div>
                <div className='flex space-x-3 mt-2 lg:mt-0'>
                    <button className='p-2 bg-[#F2F2F2] text-black rounded'>
                        <UserOutlined />
                    </button>
                    <button className='p-2 bg-[#F2F2F2] text-black rounded'>
                        <HeartOutlined />
                    </button>
                    <button className='p-2 bg-[#F2F2F2] text-black flex items-center rounded'>
                        <ShoppingCartOutlined className='mr-1' /> Корзина
                    </button>
                </div>
            </div>

            {/* Hamburger Menu Content */}
            <div className={`fixed inset-0 bg-white z-50 flex flex-col items-center pt-8 px-4 transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} custom-lg:hidden`}>
                <button
                    className='absolute top-4 right-4 text-2xl'
                    onClick={toggleMenu}
                >
                    <CloseOutlined />
                </button>
                <div className='flex flex-col items-center space-y-4'>
                    <nav className='flex flex-col items-center space-y-4'>
                        {links.map((item, index) => (
                            <Link href={item.path} key={index} legacyBehavior>
                                <a className='text-black text-xl font-normal'>{item.title}</a>
                            </Link>
                        ))}
                    </nav>
                    <div className='flex flex-col items-center text-base'>
                        <div className='flex items-center mb-2'>
                            <PhoneOutlined />
                            <span className='ml-2'>+998 (90) 565-85-85</span>
                        </div>
                        <div className='flex items-center'>
                            <MailOutlined />
                            <span className='ml-2'>info@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Carousel */}
            <div className='relative w-full h-[200px] lg:h-[450px] bg-[#F2F2F2]'>
                <Carousel autoplay autoplaySpeed={3000} speed={500} infinite>
                    {[...Array(4)].map((_, index) => (
                        <div key={index} className='flex justify-center items-center'>
                            <Image src={CaruselImg} alt={`Image ${index + 1}`} layout="responsive" objectFit="cover" />
                        </div>
                    ))}
                </Carousel>
            </div>
        </header>
    );
};

export default Index;
