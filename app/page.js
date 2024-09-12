"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function NotesDashboard() {

  return (
    <div className="h-screen w-full bg-slate-900">
      <div className="h-[80px] shadow-lg px-[100px] flex justify-between items-center">

        <div className="">
          <Link href={"/"} className="text-white font-black text-xl">Icebit Note App</Link>
        </div>

        <div className="flex gap-5">
          <Link href={"/login"}>
            <button className="bg-gradient-to-r from-rose-600 to-pink-500 text-white font-bold py-1 px-4 rounded shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out">
              Login
            </button>
          </Link>
          <Link href={"/register"}>
            <button className="bg-gradient-to-r from-rose-600 to-pink-500 text-white font-bold py-1 px-4 rounded shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out">
              Register
            </button>
          </Link>
        </div>
      </div>

      <div style={{ height: "calc(100vh - 80px)" }} className="w-full flex items-center justify-center flex-col gap-5">

        <div className="flex gap-4">

          <div className="inline-block radio">
            <input
              name="answer"
              type="radio"
              id="I"
              hidden="hidden"
              value="I"

            />
            <label
              htmlFor="I"
              className="px-2 py-1 rounded-lg flex justify-center items-center text-3xl lg:text-5xl font-bold w-10 h-10 lg:w-14 lg:h-14"
            >
              I
            </label>
          </div>

          <div className="inline-block radio">
            <input
              name="answer"
              type="radio"
              id="C"
              hidden="hidden"
              value="C"
            />
            <label
              htmlFor="C"
              className="px-2 py-1 rounded-lg flex justify-center items-center text-3xl lg:text-5xl font-bold w-10 h-10 lg:w-14 lg:h-14"
            >
              C
            </label>
          </div>

          <div className="inline-block radio">
            <input
              name="answer"
              type="radio"
              id="E"
              hidden="hidden"
              value="E"
            />
            <label
              htmlFor="E"
              className="px-2 py-1 rounded-lg flex justify-center items-center text-3xl lg:text-5xl font-bold w-10 h-10 lg:w-14 lg:h-14"
            >
              E
            </label>
          </div>

          <div className="inline-block radio">
            <input
              name="answer"
              type="radio"
              id="B"
              hidden="hidden"
              value="B"
            />
            <label
              htmlFor="B"
              className="px-2 py-1 rounded-lg flex justify-center items-center text-3xl lg:text-5xl font-bold w-10 h-10 lg:w-14 lg:h-14"
            >
              B
            </label>
          </div>

          <div className="inline-block radio">
            <input
              name="answer"
              type="radio"
              id="I2"
              hidden="hidden"
              value="I"
            />
            <label
              htmlFor="I2"
              className="px-2 py-1 rounded-lg flex justify-center items-center text-3xl lg:text-5xl font-bold w-10 h-10 lg:w-14 lg:h-14"
            >
              I
            </label>
          </div>

          <div className="inline-block radio">
            <input
              name="answer"
              type="radio"
              id="T"
              hidden="hidden"
              value="T"
            />
            <label
              htmlFor="T"
              className="px-2 py-1 rounded-lg flex justify-center items-center text-3xl lg:text-5xl font-bold w-10 h-10 lg:w-14 lg:h-14"
            >
              T
            </label>
          </div>

          <div className="inline-block radio">
            <input
              name="answer"
              type="radio"
              id="des"
              hidden="hidden"
              value="'"
            />
            <label
              htmlFor="des"
              className="px-1 py-1 rounded-lg flex justify-center items-center text-3xl lg:text-5xl font-bold w-8 h-10  lg:h-14"
            >
              &apos;
            </label>
          </div>

          <div className="inline-block radio">
            <input
              name="answer"
              type="radio"
              id="S"
              hidden="hidden"
              value="S"
            />
            <label
              htmlFor="S"
              className="px-2 py-1 rounded-lg flex justify-center items-center text-3xl lg:text-5xl font-bold w-10 h-10 lg:w-14 lg:h-14"
            >
              S
            </label>
          </div>

        </div>

        <div className="flex gap-4">

          <div className="inline-block radio">
            <input
              name="answer"
              type="radio"
              id="B1"
              hidden="hidden"
              value="N"

            />
            <label
              htmlFor="B1"
              className="px-2 py-1 rounded-lg flex justify-center items-center text-3xl lg:text-5xl font-bold w-10 h-10 lg:w-14 lg:h-14"
            >
              N
            </label>
          </div>

          <div className="inline-block radio">
            <input
              name="answer"
              type="radio"
              id="C1"
              hidden="hidden"
              value="O"
            />
            <label
              htmlFor="C1"
              className="px-2 py-1 rounded-lg flex justify-center items-center text-3xl lg:text-5xl font-bold w-10 h-10 lg:w-14 lg:h-14"
            >
              O
            </label>
          </div>

          <div className="inline-block radio">
            <input
              name="answer"
              type="radio"
              id="D1"
              hidden="hidden"
              value="T"
            />
            <label
              htmlFor="D1"
              className="px-2 py-1 rounded-lg flex justify-center items-center text-3xl lg:text-5xl font-bold w-10 h-10 lg:w-14 lg:h-14"
            >
              T
            </label>
          </div>

          <div className="inline-block radio">
            <input
              name="answer"
              type="radio"
              id="E1"
              hidden="hidden"
              value="E"
            />
            <label
              htmlFor="E1"
              className="px-2 py-1 rounded-lg flex justify-center items-center text-3xl lg:text-5xl font-bold w-10 h-10 lg:w-14 lg:h-14"
            >
              E
            </label>
          </div>

        </div>


        <div className="flex gap-4">

          <div className="inline-block radio">
            <input
              name="answer"
              type="radio"
              id="A"
              hidden="hidden"
              value="A"

            />
            <label
              htmlFor="A"
              className="px-2 py-1 rounded-lg flex justify-center items-center text-3xl lg:text-5xl font-bold w-10 h-10 lg:w-14 lg:h-14"
            >
              A
            </label>
          </div>

          <div className="inline-block radio">
            <input
              name="answer"
              type="radio"
              id="P"
              hidden="hidden"
              value="P"
            />
            <label
              htmlFor="P"
              className="px-2 py-1 rounded-lg flex justify-center items-center text-3xl lg:text-5xl font-bold w-10 h-10 lg:w-14 lg:h-14"
            >
              P
            </label>
          </div>

          <div className="inline-block radio">
            <input
              name="answer"
              type="radio"
              id="P2"
              hidden="hidden"
              value="P"
            />
            <label
              htmlFor="P2"
              className="px-2 py-1 rounded-lg flex justify-center items-center text-3xl lg:text-5xl font-bold w-10 h-10 lg:w-14 lg:h-14"
            >
              P
            </label>
          </div>

        </div>

      </div>
    </div>
  );
}

export default NotesDashboard;
