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
            <button class="bg-gradient-to-r from-rose-600 to-pink-500 text-white font-bold py-1 px-4 rounded shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out">
              Login
            </button>
          </Link>
          <Link href={"/register"}>
            <button class="bg-gradient-to-r from-rose-600 to-pink-500 text-white font-bold py-1 px-4 rounded shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out">
              Register
            </button>
          </Link>
        </div>
      </div>

      <div style={{ height: "calc(100vh - 80px)" }} className="w-full flex items-center justify-center flex-col gap-5">

        <div class="flex gap-4">

          <div class="inline-block radio">
            <input
              name="answer"
              type="radio"
              id="I"
              hidden="hidden"
              value="I"

            />
            <label
              for="I"
              class="px-2 py-1 rounded-lg flex justify-center items-center text-3xl lg:text-5xl font-bold w-10 h-10 lg:w-14 lg:h-14"
            >
              I
            </label>
          </div>

          <div class="inline-block radio">
            <input
              name="answer"
              type="radio"
              id="C"
              hidden="hidden"
              value="C"
            />
            <label
              for="C"
              class="px-2 py-1 rounded-lg flex justify-center items-center text-3xl lg:text-5xl font-bold w-10 h-10 lg:w-14 lg:h-14"
            >
              C
            </label>
          </div>

          <div class="inline-block radio">
            <input
              name="answer"
              type="radio"
              id="E"
              hidden="hidden"
              value="E"
            />
            <label
              for="E"
              class="px-2 py-1 rounded-lg flex justify-center items-center text-3xl lg:text-5xl font-bold w-10 h-10 lg:w-14 lg:h-14"
            >
              E
            </label>
          </div>

          <div class="inline-block radio">
            <input
              name="answer"
              type="radio"
              id="B"
              hidden="hidden"
              value="B"
            />
            <label
              for="B"
              class="px-2 py-1 rounded-lg flex justify-center items-center text-3xl lg:text-5xl font-bold w-10 h-10 lg:w-14 lg:h-14"
            >
              B
            </label>
          </div>

          <div class="inline-block radio">
            <input
              name="answer"
              type="radio"
              id="I2"
              hidden="hidden"
              value="I"
            />
            <label
              for="I2"
              class="px-2 py-1 rounded-lg flex justify-center items-center text-3xl lg:text-5xl font-bold w-10 h-10 lg:w-14 lg:h-14"
            >
              I
            </label>
          </div>

          <div class="inline-block radio">
            <input
              name="answer"
              type="radio"
              id="T"
              hidden="hidden"
              value="T"
            />
            <label
              for="T"
              class="px-2 py-1 rounded-lg flex justify-center items-center text-3xl lg:text-5xl font-bold w-10 h-10 lg:w-14 lg:h-14"
            >
              T
            </label>
          </div>

          <div class="inline-block radio">
            <input
              name="answer"
              type="radio"
              id="des"
              hidden="hidden"
              value="'"
            />
            <label
              for="des"
              class="px-1 py-1 rounded-lg flex justify-center items-center text-3xl lg:text-5xl font-bold w-8 h-10  lg:h-14"
            >
              '
            </label>
          </div>

          <div class="inline-block radio">
            <input
              name="answer"
              type="radio"
              id="S"
              hidden="hidden"
              value="S"
            />
            <label
              for="S"
              class="px-2 py-1 rounded-lg flex justify-center items-center text-3xl lg:text-5xl font-bold w-10 h-10 lg:w-14 lg:h-14"
            >
              S
            </label>
          </div>

        </div>

        <div class="flex gap-4">

          <div class="inline-block radio">
            <input
              name="answer"
              type="radio"
              id="B1"
              hidden="hidden"
              value="N"

            />
            <label
              for="B1"
              class="px-2 py-1 rounded-lg flex justify-center items-center text-3xl lg:text-5xl font-bold w-10 h-10 lg:w-14 lg:h-14"
            >
              N
            </label>
          </div>

          <div class="inline-block radio">
            <input
              name="answer"
              type="radio"
              id="C1"
              hidden="hidden"
              value="O"
            />
            <label
              for="C1"
              class="px-2 py-1 rounded-lg flex justify-center items-center text-3xl lg:text-5xl font-bold w-10 h-10 lg:w-14 lg:h-14"
            >
              O
            </label>
          </div>

          <div class="inline-block radio">
            <input
              name="answer"
              type="radio"
              id="D1"
              hidden="hidden"
              value="T"
            />
            <label
              for="D1"
              class="px-2 py-1 rounded-lg flex justify-center items-center text-3xl lg:text-5xl font-bold w-10 h-10 lg:w-14 lg:h-14"
            >
              T
            </label>
          </div>

          <div class="inline-block radio">
            <input
              name="answer"
              type="radio"
              id="E1"
              hidden="hidden"
              value="E"
            />
            <label
              for="E1"
              class="px-2 py-1 rounded-lg flex justify-center items-center text-3xl lg:text-5xl font-bold w-10 h-10 lg:w-14 lg:h-14"
            >
              E
            </label>
          </div>

        </div>


        <div class="flex gap-4">

          <div class="inline-block radio">
            <input
              name="answer"
              type="radio"
              id="A"
              hidden="hidden"
              value="A"

            />
            <label
              for="A"
              class="px-2 py-1 rounded-lg flex justify-center items-center text-3xl lg:text-5xl font-bold w-10 h-10 lg:w-14 lg:h-14"
            >
              A
            </label>
          </div>

          <div class="inline-block radio">
            <input
              name="answer"
              type="radio"
              id="P"
              hidden="hidden"
              value="P"
            />
            <label
              for="P"
              class="px-2 py-1 rounded-lg flex justify-center items-center text-3xl lg:text-5xl font-bold w-10 h-10 lg:w-14 lg:h-14"
            >
              P
            </label>
          </div>

          <div class="inline-block radio">
            <input
              name="answer"
              type="radio"
              id="P2"
              hidden="hidden"
              value="P"
            />
            <label
              for="P2"
              class="px-2 py-1 rounded-lg flex justify-center items-center text-3xl lg:text-5xl font-bold w-10 h-10 lg:w-14 lg:h-14"
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
