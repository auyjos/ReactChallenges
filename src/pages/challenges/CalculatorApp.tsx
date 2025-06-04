import { useState } from "react"

/**
 * Calculator App Challenge
 * Author: Jose Auyon
 * 
 * Build a fully functional calculator with basic arithmetic operations
 */

const CalculatorApp = () => {
  const [numA, setNumA] = useState('')
  const [numB, setNumB] = useState('')
  const [operator, setOperator] = useState('+')
  const [result, setResult] = useState<number| string| undefined>(undefined)

  const calculate = () => {
    const a = parseFloat(numA)
    const b = parseFloat(numB)
    
    if(isNaN(a) || isNaN(b)){
      setResult('Invalid Input')
      return
    }

    let r: number = 0

    if(operator === '+'){
      r  = a + b
    } else if(operator === '-'){
      r  = a - b
    } else if(operator === '*'){
      r  = a * b
    } else if(operator === '/'){
      if(b === 0){
        setResult('Division by 0 not supported')
        return
      }
      r  = a / b
    }

    setResult(r)
  }

  const clearAll = () => {
    setNumA('')
    setNumB('')
    setOperator('+')
    setResult(undefined)
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Calculator App</h1>
          <p className="text-gray-600">
            Build a fully functional calculator with basic arithmetic operations
          </p>
        </div>

        <div className="mb-4">
          <label htmlFor="numA" className="block text-sm font-medium text-gray-700 mb-1">
            Enter a number (A)
          </label>
          <input
            id="numA"
            type="number"
            value={numA}
            onChange={(e) => setNumA(e.target.value)}
            placeholder="0"
            className="w-full border p-2 rounded mb-3"
          />

          <label htmlFor="op" className="block text-sm font-medium text-gray-700 mb-1">
            Select operator
          </label>
          <select
            id="op"
            value={operator}
            onChange={(e) => setOperator(e.target.value)}
            className="w-full border p-2 rounded mb-3"
          >
            <option value="+">+</option>
            <option value="-">−</option>
            <option value="*">×</option>
            <option value="/">÷</option>
          </select>

          <label htmlFor="numB" className="block text-sm font-medium text-gray-700 mb-1">
            Enter a number (B)
          </label>
          <input
            id="numB"
            type="number"
            value={numB}
            onChange={(e) => setNumB(e.target.value)}
            placeholder="0"
            className="w-full border p-2 rounded mb-4"
          />

          <div className="flex justify-between">
            <button onClick={calculate} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              =
            </button>
            <button onClick={clearAll} className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500">
              AC
            </button>
          </div>

          {result !== undefined && (
            <div className="mt-6 text-center">
              <h2 className="text-xl font-semibold text-gray-800">Result: {result}</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CalculatorApp
