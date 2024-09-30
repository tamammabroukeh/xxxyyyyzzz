// import React from "react";

// import { Check } from "../icons";
// import { MyLink } from "../ui";

// import InstallPagesLayout from "./InstallPagesLayout";
// import SingleRequire from "./SingleRequire";

// import { FetchRequirements } from "@/api/services/install-program";
// import { WELCOME_MESSAGE } from "@/data/constant";
// import NotFound from "@/app/not-found";

// const ServerRequirementPage = async () => {
//   const requirs = await FetchRequirements();

//   if (!requirs) return NotFound();
//   const { phpSupportInfo, requirements: req } = requirs;
//   const { php } = req?.requirements;
//   const requirementsArr = Object.keys(php);

//   return (
//     <InstallPagesLayout description={WELCOME_MESSAGE} title="Welcome">
//       <div className="flex justify-center flex-1 items-center">
//         <div className="flex w-[90%] lg:w-[60%] xl:w-[55%] text-black-200 flex-col gap-6 lg:gap-8">
//           <div className="flex text-green-500 items-center justify-between">
//             <p className="text-base md:text-lg lg:text-xl xl:text-2xl leading-none">
//               PHP version {phpSupportInfo.current} required
//             </p>
//             <div className="flex gap-2 items-end justify-center">
//               <p className="text-base md:text-md">{phpSupportInfo.full}</p>
//               <Check className="w-7 h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9" />
//             </div>
//           </div>
//           <div className="flex flex-col gap-4">
//             {requirementsArr?.map((req: string) => (
//               <React.Fragment key={req}>
//                 <SingleRequire title={req} />
//               </React.Fragment>
//             ))}
//           </div>
//           <div className="mt-2 mx-auto">
//             <MyLink
//               classes="px-16 md:px-24 text-md py-2 rounded-2xl bg-slate-400"
//               href="/install/system"
//               title="Next"
//             >
//               Next
//             </MyLink>
//           </div>
//         </div>
//       </div>
//     </InstallPagesLayout>
//   );
// };

// export default ServerRequirementPage;
