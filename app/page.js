// "use client";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import React, { useEffect, useRef } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, Sphere } from "@react-three/drei";
// import { pointsInner, pointsOuter } from "../utils/utils";

// function NotesDashboard() {

//   return (
//     <div className="h-screen w-full bg-slate-900">
//       <div className="h-[80px] shadow-lg px-[100px] flex justify-between items-center">

//         <div className="">
//           <Link href={"/"} className="text-white font-black text-xl">Icebit Note App</Link>
//         </div>

//         <div className="flex gap-5">
//           <Link href={"/login"}>
//             <button className="bg-gradient-to-r from-rose-600 to-pink-500 text-white font-bold py-1 px-4 rounded shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out">
//               Login
//             </button>
//           </Link>
//           <Link href={"/register"}>
//             <button className="bg-gradient-to-r from-rose-600 to-pink-500 text-white font-bold py-1 px-4 rounded shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out">
//               Register
//             </button>
//           </Link>
//         </div>
//       </div>

//       <div style={{ height: "calc(100vh - 80px)" }} className="w-full flex items-center justify-center flex-col gap-5">

//         <div className="flex gap-4">

//           <div className="inline-block radio">
//             <input
//               name="answer"
//               type="radio"
//               id="I"
//               hidden="hidden"
//               value="I"

//             />
//             <label
//               htmlFor="I"
//               className="px-2 py-1 rounded-lg flex justify-center items-center text-3xl lg:text-5xl font-bold w-10 h-10 lg:w-14 lg:h-14"
//             >
//               I
//             </label>
//           </div>

//           <div className="inline-block radio">
//             <input
//               name="answer"
//               type="radio"
//               id="C"
//               hidden="hidden"
//               value="C"
//             />
//             <label
//               htmlFor="C"
//               className="px-2 py-1 rounded-lg flex justify-center items-center text-3xl lg:text-5xl font-bold w-10 h-10 lg:w-14 lg:h-14"
//             >
//               C
//             </label>
//           </div>

//           <div className="inline-block radio">
//             <input
//               name="answer"
//               type="radio"
//               id="E"
//               hidden="hidden"
//               value="E"
//             />
//             <label
//               htmlFor="E"
//               className="px-2 py-1 rounded-lg flex justify-center items-center text-3xl lg:text-5xl font-bold w-10 h-10 lg:w-14 lg:h-14"
//             >
//               E
//             </label>
//           </div>

//           <div className="inline-block radio">
//             <input
//               name="answer"
//               type="radio"
//               id="B"
//               hidden="hidden"
//               value="B"
//             />
//             <label
//               htmlFor="B"
//               className="px-2 py-1 rounded-lg flex justify-center items-center text-3xl lg:text-5xl font-bold w-10 h-10 lg:w-14 lg:h-14"
//             >
//               B
//             </label>
//           </div>

//           <div className="inline-block radio">
//             <input
//               name="answer"
//               type="radio"
//               id="I2"
//               hidden="hidden"
//               value="I"
//             />
//             <label
//               htmlFor="I2"
//               className="px-2 py-1 rounded-lg flex justify-center items-center text-3xl lg:text-5xl font-bold w-10 h-10 lg:w-14 lg:h-14"
//             >
//               I
//             </label>
//           </div>

//           <div className="inline-block radio">
//             <input
//               name="answer"
//               type="radio"
//               id="T"
//               hidden="hidden"
//               value="T"
//             />
//             <label
//               htmlFor="T"
//               className="px-2 py-1 rounded-lg flex justify-center items-center text-3xl lg:text-5xl font-bold w-10 h-10 lg:w-14 lg:h-14"
//             >
//               T
//             </label>
//           </div>

//           <div className="inline-block radio">
//             <input
//               name="answer"
//               type="radio"
//               id="des"
//               hidden="hidden"
//               value="'"
//             />
//             <label
//               htmlFor="des"
//               className="px-1 py-1 rounded-lg flex justify-center items-center text-3xl lg:text-5xl font-bold w-8 h-10  lg:h-14"
//             >
//               &apos;
//             </label>
//           </div>

//           <div className="inline-block radio">
//             <input
//               name="answer"
//               type="radio"
//               id="S"
//               hidden="hidden"
//               value="S"
//             />
//             <label
//               htmlFor="S"
//               className="px-2 py-1 rounded-lg flex justify-center items-center text-3xl lg:text-5xl font-bold w-10 h-10 lg:w-14 lg:h-14"
//             >
//               S
//             </label>
//           </div>

//         </div>

//         <div className="flex gap-4">

//           <div className="inline-block radio">
//             <input
//               name="answer"
//               type="radio"
//               id="B1"
//               hidden="hidden"
//               value="N"

//             />
//             <label
//               htmlFor="B1"
//               className="px-2 py-1 rounded-lg flex justify-center items-center text-3xl lg:text-5xl font-bold w-10 h-10 lg:w-14 lg:h-14"
//             >
//               N
//             </label>
//           </div>

//           <div className="inline-block radio">
//             <input
//               name="answer"
//               type="radio"
//               id="C1"
//               hidden="hidden"
//               value="O"
//             />
//             <label
//               htmlFor="C1"
//               className="px-2 py-1 rounded-lg flex justify-center items-center text-3xl lg:text-5xl font-bold w-10 h-10 lg:w-14 lg:h-14"
//             >
//               O
//             </label>
//           </div>

//           <div className="inline-block radio">
//             <input
//               name="answer"
//               type="radio"
//               id="D1"
//               hidden="hidden"
//               value="T"
//             />
//             <label
//               htmlFor="D1"
//               className="px-2 py-1 rounded-lg flex justify-center items-center text-3xl lg:text-5xl font-bold w-10 h-10 lg:w-14 lg:h-14"
//             >
//               T
//             </label>
//           </div>

//           <div className="inline-block radio">
//             <input
//               name="answer"
//               type="radio"
//               id="E1"
//               hidden="hidden"
//               value="E"
//             />
//             <label
//               htmlFor="E1"
//               className="px-2 py-1 rounded-lg flex justify-center items-center text-3xl lg:text-5xl font-bold w-10 h-10 lg:w-14 lg:h-14"
//             >
//               E
//             </label>
//           </div>

//         </div>


//         <div className="flex gap-4">

//           <div className="inline-block radio">
//             <input
//               name="answer"
//               type="radio"
//               id="A"
//               hidden="hidden"
//               value="A"

//             />
//             <label
//               htmlFor="A"
//               className="px-2 py-1 rounded-lg flex justify-center items-center text-3xl lg:text-5xl font-bold w-10 h-10 lg:w-14 lg:h-14"
//             >
//               A
//             </label>
//           </div>

//           <div className="inline-block radio">
//             <input
//               name="answer"
//               type="radio"
//               id="P"
//               hidden="hidden"
//               value="P"
//             />
//             <label
//               htmlFor="P"
//               className="px-2 py-1 rounded-lg flex justify-center items-center text-3xl lg:text-5xl font-bold w-10 h-10 lg:w-14 lg:h-14"
//             >
//               P
//             </label>
//           </div>

//           <div className="inline-block radio">
//             <input
//               name="answer"
//               type="radio"
//               id="P2"
//               hidden="hidden"
//               value="P"
//             />
//             <label
//               htmlFor="P2"
//               className="px-2 py-1 rounded-lg flex justify-center items-center text-3xl lg:text-5xl font-bold w-10 h-10 lg:w-14 lg:h-14"
//             >
//               P
//             </label>
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// }

// export default NotesDashboard;


// With the navigation menu seprate from graphics elements
// "use client";
// import Link from "next/link";
// import React from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, Sphere } from "@react-three/drei";
// import { useRef } from "react";
// // import { pointsInner, pointsOuter } from "./utils";
// import { pointsInner, pointsOuter } from '../utils/utils.js'

// function NotesDashboard() {
//   return (
//     <div className="h-screen w-full bg-slate-900">
//       {/* Navigation Bar */}
//       <div className="h-[80px] px-4 md:px-[100px] flex justify-between items-center">
//         <div>
//           <Link href={"/"} className="text-white font-black text-lg md:text-xl">
//             Icebit Note App
//           </Link>
//         </div>
//         <div className="flex gap-3 md:gap-5">
//           <Link href={"/login"}>
//             <button className="bg-gradient-to-r from-rose-600 to-pink-500 text-white font-bold py-1 px-3 md:py-2 md:px-4 rounded shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out text-sm md:text-base">
//               Login
//             </button>
//           </Link>
//           <Link href={"/register"}>
//             <button className="bg-gradient-to-r from-rose-600 to-pink-500 text-white font-bold py-1 px-3 md:py-2 md:px-4 rounded shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out text-sm md:text-base">
//               Register
//             </button>
//           </Link>
//         </div>
//       </div>

//       {/* Main Content: ParticleRing */}
//       <div style={{ height: "calc(100vh - 80px)" }} className="relative">
//         <ParticleRing />
//       </div>
//     </div>
//   );
// }

// const ParticleRing = () => {
//   return (
//     <div className="relative">
//       <Canvas
//         camera={{
//           position: [10, -7.5, -5],
//         }}
//         style={{ height: "100vh" }}
//         className="bg-slate-900"
//       >
//         <OrbitControls maxDistance={20} minDistance={10} />
//         <directionalLight />
//         <pointLight position={[-30, 0, -30]} power={10.0} />
//         <PointCircle />
//       </Canvas>

//       {/* <h1 className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-slate-200 font-medium text-2xl md:text-5xl pointer-events-none">
//         Icebit's Note App
//       </h1> */}
//     </div>
//   );
// };

// const PointCircle = () => {
//   const ref = useRef(null);

//   useFrame(({ clock }) => {
//     if (ref.current?.rotation) {
//       ref.current.rotation.z = clock.getElapsedTime() * 0.05;
//     }
//   });

//   return (
//     <group ref={ref}>
//       {pointsInner.map((point) => (
//         <Point key={point.idx} position={point.position} color={point.color} />
//       ))}
//       {pointsOuter.map((point) => (
//         <Point key={point.idx} position={point.position} color={point.color} />
//       ))}
//     </group>
//   );
// };

// const Point = ({ position, color }) => {
//   return (
//     <Sphere position={position} args={[0.1, 10, 10]}>
//       <meshStandardMaterial
//         emissive={color}
//         emissiveIntensity={0.5}
//         roughness={0.5}
//         color={color}
//       />
//     </Sphere>
//   );
// };

// export default NotesDashboard;




"use client";
import Link from "next/link";
import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { useRef } from "react";
import { pointsInner, pointsOuter } from "../utils/utils.js";

function NotesDashboard() {
  return (
    <div className="h-screen w-full bg-slate-900 relative">
      {/* Navigation Bar */}
      <div className="absolute top-0 left-0 w-full h-[80px] px-4 md:px-[100px] flex justify-between items-center z-10 bg-transparent">
        <div>
          <Link href={"/"} className="text-white font-black text-lg md:text-xl">
            Icebit&apos;s Note App
          </Link>
        </div>
        <div className="flex gap-3 md:gap-5">
          <Link href={"/login"}>
            <button className="bg-gradient-to-r from-rose-600 to-pink-500 text-white font-bold py-1 px-3 md:py-2 md:px-4 rounded shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out text-sm md:text-base">
              Login
            </button>
          </Link>
          <Link href={"/register"}>
            <button className="bg-gradient-to-r from-rose-600 to-pink-500 text-white font-bold py-1 px-3 md:py-2 md:px-4 rounded shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out text-sm md:text-base">
              Register
            </button>
          </Link>
        </div>
      </div>

      {/* Main Content: ParticleRing */}
      <div className="w-full h-full">
        <ParticleRing />
      </div>
    </div>
  );
}

const ParticleRing = () => {
  return (
    <div className="relative">
      <Canvas
        camera={{
          position: [10, -7.5, -5],
        }}
        style={{ height: "100vh" }}
        className="bg-slate-900"
      >
        <OrbitControls maxDistance={20} minDistance={10} />
        <directionalLight />
        <pointLight position={[-30, 0, -30]} power={10.0} />
        <PointCircle />
      </Canvas>

      {/* <h1 className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] font-bold text-xl md:text-4xl lg:text-5xl pointer-events-none" style={{ color: "#6CB4EE" }}>
        Icebit&apos;s Note App
      </h1> */}
    </div>
  );
};

const PointCircle = () => {
  const ref = useRef(null);

  useFrame(({ clock }) => {
    if (ref.current?.rotation) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={ref}>
      {pointsInner.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
      {pointsOuter.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
    </group>
  );
};

const Point = ({ position, color }) => {
  return (
    <Sphere position={position} args={[0.1, 10, 10]}>
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
        color={color}
      />
    </Sphere>
  );
};

export default NotesDashboard;
