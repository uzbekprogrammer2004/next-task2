// "use client";
// import React, { useEffect, useState, FormEvent } from "react";
// import Image from "next/image";
// import cart from "@/public/img3.png";
// import share from "@/public/logo.png";
// import { useParams } from "next/navigation";
// import http from "@/api/interseptors";
// import Link from "next/link";
// import avatar from "@/public/img4.png";
// import Home from '@/public/img4.png';
// import Arrow from '@/public/logo.png';
// import sliders from '@/public/adidaslogo.png'

// interface Product {
//   product_id: string;
//   product_name: string;
//   description: string;
//   made_in: string;
//   count: number;
//   cost: number;
//   image_url: string[];
//   color?: string;
//   age_min?: number;
//   age_max?: number;
// }

// interface CommentType {
//   OwnerID: string;
//   Message: string;
// }

// const SingleProductPage: React.FC = () => {
//   const [product, setProduct] = useState<Product | null>(null);
//   const [comments, setComments] = useState<CommentType[]>([]);
//   const [newComment, setNewComment] = useState<string>("");
//   const [selectedImage, setSelectedImage] = useState<string | null>(null);

//   const { id } = useParams();

//   const getData = async () => {
//     try {
//       const { data } = await http.get(`/product/${id}`);
//       setProduct(data);
//       if (data.image_url && data.image_url.length > 0) {
//         setSelectedImage(data.image_url[0]);
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const getComments = async (id: string) => {
//     try {
//       const response = await Comment.get(id);
//       console.log(response);
//       setComments(response?.Comment || []);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleCommentSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       const commentData = {
//         productId: id,
//         text: newComment,
//       };
//       const response = await Comment.post(commentData);
//       console.log(response);
//       setNewComment("");
//       getComments(id);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     if (id) {
//       getData();
//       getComments(id);
//     }
//   }, [id]);

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   const { product_name, description, made_in, count, cost, image_url, color, age_min, age_max } = product;

//   return (
//     <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-7">
//       <div className='flex gap-3 items-center mb-1'>
//         <Image src={Home} alt='Home' />
//         <Link href="/">
//           <p className='text-sm sm:text-base opacity-70 hover:text-[#FBD029] hover:opacity-100'>Главная</p>
//         </Link>
//         <Image src={Arrow} alt='Arrow' />
//         <Link href="/product">
//           <p className='text-sm sm:text-base opacity-70 hover:text-[#FBD029] hover:opacity-100'>Продукты</p>
//         </Link>
//         <Image src={Arrow} alt='Arrow' />
//         <p className='text-[#1F1D14] text-sm sm:text-base'>{product_name}</p>
//       </div>
//       <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-[40px] rounded-lg">
//         <div className="w-full max-w-[600px] h-[530px] flex flex-col justify-center items-center bg-white rounded-xl">
//           <div>
//             {selectedImage ? (
//               <Image
//                 src={selectedImage}
//                 alt={product_name}
//                 width={400}
//                 height={500}
//               />
//             ) : (
//               <div>
//                 <Image
//                   src="/path/to/fallback/image" // Provide a fallback image path
//                   alt="Fallback product image"
//                   width={370}
//                   height={370}
//                 />
//               </div>
//             )}
//           </div>
//           <div className="flex gap-2 mt-4">
//             {image_url && image_url.length > 0 && image_url.map((url, index) => (
//               <div
//                 key={index}
//                 className="w-20 h-20 bg-white p-2 border-2 rounded-lg overflow-hidden cursor-pointer"
//                 onClick={() => setSelectedImage(url)}
//               >
//                 <Image
//                   src={url}
//                   alt={`Thumbnail ${index}`}
//                   className="w-[40px] h-[40px] object-cover"
//                   width={80}
//                   height={80}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="w-full max-w-[600px] h-[530px] p-8 bg-white rounded-lg mb-[40px]">
//           <h1 className="text-2xl font-bold">{product_name}</h1>
//           <p className="mt-2 text-gray-700">{description}</p>
//           <p className="mt-2 text-gray-700">В наличии: {count} шт.</p>
//           <p className="mt-2 text-gray-700">Страна производитель: {made_in}</p>
//           <p className="mt-4 text-2xl font-bold">{cost} UZS / 1 шт.</p>
//           <div className="flex gap-4 mt-4">
//             <Link
//               href="/basket"
//               className="flex items-center gap-[4px] px-4 py-2 bg-[#FBD029] text-black rounded-md"
//               onClick={() => handleBasket(product.product_id)}
//             >
//               <Image src={cart} alt="cart" />
//               Корзина
//             </Link>
//             <button className="flex items-center gap-[4px] px-4 py-2 border-2 border-[#FBD029] text-[#FBD029] rounded-md">
//               <Image src={sliders} alt="slider" />
//               Сравнить
//             </button>
//           </div>
//           <div className="mt-[30px]">
//             <button className="flex items-center gap-[4px] px-4 py-2 border-2 border-gray-300 rounded-md">
//               <Image src={share} alt="share" />
//               Поделиться
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="mt-16 container pb-10 grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div className="bg-white p-6 rounded-lg shadow">
//           <h2 className="text-xl font-bold mb-4">Описание</h2>
//           <h4 className="text-lg font-semibold">{product_name}</h4>
//           <p className="text-base mt-2 mb-6 text-[#FBD029]">
//             Oписание: {description}
//           </p>
//           <ul className="space-y-2">
//             <li className="flex items-center gap-2">
//               <h3 className="text-lg font-semibold">Цена:</h3>
//               <p className="text-lg text-[#FBD029]"> {cost} so'm</p>
//             </li>
//             <li className="flex items-center gap-2">
//               <h3 className="text-lg font-semibold">Цвета:</h3>
//               <p className="text-base text-[#FBD029]">{color}</p>
//             </li>
//             <li className="flex items-center gap-2">
//               <h3 className="text-lg font-semibold">Возраст:</h3>
//               <p className="text-base text-[#FBD029]">
//                 {age_min} - {age_max} лет
//               </p>
//             </li>
//             <li className="flex items-center gap-2">
//               <h3 className="text-lg font-semibold">Производство:</h3>
//               <p className="text-base text-[#FBD029]">{made_in}</p>
//             </li>
//           </ul>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow">
//           <h2 className="text-lg font-bold mb-4">Отзывы</h2>            
//           <div className="space-y-4">
//             {comments && comments.length > 0 ? (
//               comments.map((comment, index) => (
//                 <div key={index} className="flex items-start space-x-4">
//                   <Image
//                     src={avatar}
//                     alt="User avatar"
//                     width={60}
//                     height={60}
//                     className="rounded-full"
//                   />
//                   <div>
//                     <p className="font-bold">{comment.OwnerID}</p>
//                     <p className="text-sm text-gray-600">Клиент</p>
//                     <p className="mt-1 text-sm text-gray-600">
//                       {comment.Message}
//                     </p>
//                     <div className="flex mt-2 text-[#FBD029]">
//                       <span>★</span>
//                       <span>★</span>
//                       <span>★</span>
//                       <span>★</span>
//                       <span className="text-gray-400">★</span>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p className="text-sm text-gray-600">Нет отзывов.</p>
//             )}
//           </div>
//           <a href="#" className="block mt-4 text-[#FBD029]">
//             Все отзывы
//           </a>
//         </div>
//         <form className="mt-4" onSubmit={handleCommentSubmit}>
//           <label htmlFor="comment" className="block mb-[20px] font-medium text-[25px] text-gray-700">
//             Оставить комментарий:
//           </label>
//           <textarea
//             id="comment"
//             rows="4"
//             className="w-full px-3 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring focus:ring-[#FBD029]"
//             value={newComment}
//             onChange={(e) => setNewComment(e.target.value)}
//           ></textarea>
//           <button
//             type="submit"
//             className="px-4 py-2 mt-2 text-sm font-medium text-white bg-[#FBD029] rounded-md hover:bg-[#FBD029] focus:outline-none focus:ring focus:ring-yellow-300"
//           >
//             Добавить
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SingleProductPage;
