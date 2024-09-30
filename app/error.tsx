'use client' // Error boundaries must be Client Components
 
import { ERRORS } from '@/utils/errors'
import { useEffect } from 'react'
import NotFound from './not-found'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  console.log("error",error.message)
  switch(error.message){
    case ERRORS[400]:
      return NotFound()
    case ERRORS[404]:
      return NotFound()
    default:
        return <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  }
 
  // return (
  //   <div>
  //     <h2>Something went wrong!</h2>
  //     <button
  //       onClick={
  //         // Attempt to recover by trying to re-render the segment
  //         () => reset()
  //       }
  //     >
  //       Try again
  //     </button>
  //   </div>
  // )
}
// "use client";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";

// import { IErrorHandler } from "@/interfaces";
// import { ErrorPageLogo } from "@/components/icons";
// const ErrorHandler = ({
//   statusCode = 500,
//   title = "Server Error",
//   error
// }: IErrorHandler) => {
//   const pathname = usePathname();
//   const router = useRouter();
//   console.log(error.message);

//   return (
//     <div className="fixed inset-0 flex items-center justify-center p-5 w-full">
//       <div className="text-center">
//         <div className="inline-flex rounded-full bg-red-100 p-4">
//           <div className="rounded-full stroke-red-600 bg-red-200 p-4">
//             <ul>
//               <li>
//                 <ErrorPageLogo />
//               </li>
//             </ul>
//           </div>
//         </div>
//         <h2 className="mt-5 text-4xl font-bold lg:text-[50px]">
//           {statusCode} - {title}
//         </h2>
//         <div className="mt-5 lg:text-lg">
//           Oops something went wrong. Try to refresh this page or <br /> feel
//           free to contact us if the problem presists.
//         </div>
//         <div className="flex items-center justify-center space-x-4 my-10">
//           <Link
//             className="inline-block bg-cyan-500 p-2 text-white rounded-md"
//             href={"/"}
//             onClick={() => router.refresh()}
//           >
//             Home
//           </Link>
//           <Link
//             className="inline-block bg-cyan-500 p-2 text-white rounded-md"
//             href={pathname}
//             onClick={() => router.refresh()}
//           >
//             Refresh
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ErrorHandler;