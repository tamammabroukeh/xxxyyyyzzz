import SetUpPage from "@/components/Set-Up/SetUpPage";
const page = () => {
  return <SetUpPage />;
};

export default page;
// <div className='flex flex-col gap-7 justify-center'>
//     <div className='flex items-center flex-col text-black-200'>
//         <h2 className='leading-[3.6rem] font-[500] text-6xl'>Welcome!</h2>
//         <p className='text-lg font-[400] leading-[1.8rem]'>Select Your Setup Type.</p>
//     </div>
//     <div className='flex justify-evenly'>
//         {/* left card */}

//         <div className='shadow-2xl hover:shadow-slate-600 flex flex-col  hover:rotate-effect transition-all duration-700'>
//             <div className='relative'>
//                 <div className='flex'>
//                     <div className='relative flex justify-end items-end'>
//                         <LeftImageOne className='mb-10 rotate-image-1 transition-transform duration-500 delay-150 ease-in-out'/>
//                         <LeftImageThree className='rotate-image-3 transition-transform duration-500 delay-150 ease-in-out'/>
//                     <div className='absolute bottom-0 left-[30%]'>
//                         <LeftImageTwo className='rotate-image-2 transition-transform delay-150 duration-500 ease-in-out'/>
//                     </div>
//                     </div>
//                 </div>
//                 <div className='shadow-lg bg-white-100 text-black-200 p-5 absolute -bottom-20 w-full z-10 rounded-xl'>
//                     <div className='flex flex-col gap-2 '>
//                         <h3 className='text-lg font-[500] leading-[1.8rem]'>Pre built website</h3>
//                         <p className='text-base leading-[1.2rem] font-[400]'>Start With a ready made website base.</p>
//                     </div>
//                     <div className='flex justify-center items-center'>
//                         <Link href={'/setup/type'} className='flex cardButton relative z-10 rounded-2xl hover:text-background bg-white-350 mt-5 text-md leading-[1.5rem] px-14 py-2'>Get Started</Link>
//                     </div>
//                 </div>
//             </div>
//         </div>

//         {/* right card */}
//         <div className='shadow-xl hover:shadow-slate-500 flex flex-col  hover:rotate-effect transition-all duration-700'>
//             <div className='relative'>
//                 <div className='flex'>
//                     <div className='relative flex justify-end items-end'>
//                         <RightImageOne className='rotate-image-1 transition-transform duration-500 delay-150 ease-in-out mb-2'/>
//                         <RightImageThree className='z-10 rotate-image-3 transition-transform duration-500 delay-150 ease-in-out'/>
//                     <div className='absolute bottom-0 left-[18%]'>
//                         <RightImageTwo className='rotate-image-2 transition-transform delay-150 duration-500 ease-in-out'/>
//                     </div>
//                     </div>
//                 </div>
//                 <div className='shadow-lg bg-white-100 text-black-200 p-5 absolute -bottom-20 w-full z-10 rounded-xl'>
//                     <div className='flex flex-col gap-2 '>
//                         <h3 className='text-lg font-[500] leading-[1.8rem]'>Site Form Scratch</h3>
//                         <p className='text-base leading-[1.2rem] font-[400]'>Choose Header, Footer, Colors and Typography.</p>
//                     </div>
//                     <div className='flex justify-center items-center'>
//                         <Link href={'/setup/type'} className='flex cardButton relative z-10 rounded-2xl hover:text-background bg-white-350 mt-5 text-md leading-[1.5rem] px-14 py-2'>Get Started</Link>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     </div>
// </div>
