import { useState } from "react"




function Dice({ number }: { number: number }) {
  return (
    <div className="bg-gray-50 rounded p-4 size-24 text-black flex items-center justify-center gap-4">
      {number === 1 && <p className="bg-black rounded-full size-5"></p>}
      {number === 2 && (
        <>
          <p className="bg-black rounded-full size-5"></p>
          <p className="bg-black rounded-full size-5"></p>
        </>
      )}
      {number === 3 && (
        <div className="flex flex-col gap-2 w-full">
          <div className="w-full flex justify-start">
            <p className="bg-black rounded-full size-5"></p>
          </div>
          <div className="w-full flex justify-center">
            <p className="bg-black rounded-full size-5"></p>
          </div>
          <div className="w-full flex justify-end">
            <p className="bg-black rounded-full size-5"></p>
          </div>
        </div>
      )}
      {number === 4 && (
        <div className="flex flex-col gap-4 w-full">
          <div className="w-full flex justify-center gap-4">
            <p className="bg-black rounded-full size-5"></p>
            <p className="bg-black rounded-full size-5"></p>
          </div>
          <div className="w-full flex justify-center gap-4">
            <p className="bg-black rounded-full size-5"></p>
            <p className="bg-black rounded-full size-5"></p>
          </div>
        </div>
      )}
      {number === 5 && (
        <div className="flex flex-col gap-2 w-full">
          <div className="w-full flex justify-center gap-6">
            <p className="bg-black rounded-full size-5"></p>
            <p className="bg-black rounded-full size-5"></p>
          </div>
          <div className="w-full flex justify-center">
            <p className="bg-black rounded-full size-5"></p>
          </div>
          <div className="w-full flex justify-center gap-6">
            <p className="bg-black rounded-full size-5"></p>
            <p className="bg-black rounded-full size-5"></p>
          </div>
        </div>
      )}
      {number === 6 && (
        <div className="flex flex-col gap-4 w-full">
          <div className="w-full flex justify-center gap-2">
            <p className="bg-black rounded-full size-4"></p>
            <p className="bg-black rounded-full size-4"></p>
            <p className="bg-black rounded-full size-4"></p>
          </div>
          <div className="w-full flex justify-center gap-2">
            <p className="bg-black rounded-full size-4"></p>
            <p className="bg-black rounded-full size-4"></p>
            <p className="bg-black rounded-full size-4"></p>
          </div>
        </div>
      )}
    </div>
  );
}


/**
 * Dice Rolling App Challenge
 * Author: Jose Auyon
 * 
 * Build a dice app with multiple dice, roll history, statistics, and animations
 */

const DiceApp = () => {
  const [number,setNumber] = useState<number|undefined>(undefined)



  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Dice Rolling App
          </h1>
          <p className="text-gray-600">
            Build a dice app with random number generation
          </p>
        </div>


       <div>
      <button
        className="bg-gray-500 rounded p-4"
        onClick={() => {
          const randomNumber = Math.floor(Math.random() * 6) + 1;
          setNumber(randomNumber);
        }}
      >
        Roll
      </button>
      {number !== undefined && <Dice number={number} />}
    </div>
        
        
      

       
      </div>
    </div>
  )
}

export default DiceApp
