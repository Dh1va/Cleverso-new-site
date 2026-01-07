// import { useEffect } from "react";

// export default function Error404() {

//   useEffect(() => {
//     // 🔁 Re-trigger original Rayo GSAP initializers
//     const reinitRayo = () => {
//       window.dispatchEvent(new Event("load"));
//       window.dispatchEvent(new Event("resize"));
//       window.dispatchEvent(new Event("scroll"));
//     };

//     // Delay is REQUIRED (fonts + images + DOM)
//     const timer = setTimeout(reinitRayo, 600);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       {/* Floating Image Background */}
//       <div className="mxd-floating-img floating-bg">
//         <div className="mxd-floating-img__item mxd-move">
//           <img
//             src="/assets/img/backgrounds/900x900_err-01.webp"
//             alt="Error Background"
//           />
//         </div>
//       </div>

//       {/* Page Content */}
//       <main id="mxd-page-content" className="mxd-page-content">

//         {/* Section – 404 Error */}
//         <div className="mxd-section mxd-section-fullscreen">
//           <div className="mxd-container grid-container fullwidth-container fullscreen-container loading-wrap">

//             {/* 404 Content */}
//             <div className="mxd-block fullscreen-block">
//               <div className="mxd-error floating-cards">

//                 <div className="mxd-error__descr">
//                   <div className="container-fluid p-0">
//                     <div className="row g-0">
//                       <div className="col-12 col-xl-6 mxd-grid-item no-margin">
//                         <div className="mxd-error__caption loading__fade">
//                           <p className="t-large t-medium t-120 t-bright">
//                             This page doesn&apos;t exist
//                           </p>
//                           <p className="t-large t-medium t-120 t-muted">
//                             Sorry.
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mxd-error__controls loading__fade">
//                   <div className="container-fluid p-0">
//                     <div className="row g-0">
//                       <div className="col-12 col-xl-6 mxd-grid-item no-margin">
//                         <a
//                           href="/"
//                           className="btn btn-anim btn-default btn-accent slide-right-up"
//                         >
//                           <span className="btn-caption">Let&apos;s Go Home</span>
//                           <i className="ph-bold ph-arrow-up-right"></i>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//               </div>
//             </div>

//             {/* 404 Marquee – ORIGINAL STRUCTURE (MOVES NOW) */}
//             <div className="mxd-block absolute-centered-block loading__item">
//               <div className="marquee marquee-error marquee-right--gsap bright">
//                 <div className="marquee__toright">

//                   {[1, 2, 3, 4].map((i) => (
//                     <div
//                       key={i}
//                       className="marquee__item item-regular item-regular-xl text"
//                     >
//                       <p className="marquee__text text-xl">404</p>
//                       <div className="marquee__image image-xl">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           viewBox="0 0 80 80"
//                           fill="currentColor"
//                         >
//                           <path
//                             fill="currentColor"
//                             d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8
//                             c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8
//                             c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9
//                             c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0
//                             s-1.6,0.8-1.6,1.6v17.4c0,1.6-0.6,4.3-0.8,5.9
//                             c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8
//                             s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8
//                             c-3.9,0.4-16.6,0-16.6,0C0.8,38.4,0,39.2,0,40
//                             s0.8,1.6,1.6,1.6h16.6c1.6,0,4.8,0.3,6.7,0.8
//                             c2.3,0.6,4.3,0.8,6.3,2.4c1.6,1.2,3.2,2.8,4.3,4.4
//                             c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7
//                             c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6
//                             s1.6-0.8,1.6-1.6V61.8c0-1.6,0.5-5.1,0.8-6.7
//                             c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4
//                             c2-1.2,3.9-2,6.3-2.4c1.8-0.3,5.1-0.7,7.1-0.8
//                             c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6
//                             S79.2,38.4,78.4,38.4z"
//                           />
//                         </svg>
//                       </div>
//                     </div>
//                   ))}

//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>

//       </main>
//     </>
//   );
// }
