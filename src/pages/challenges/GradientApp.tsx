import React, {useState, useEffect, useId} from 'react'

/**
 * Gradient Generator App Challenge
 * Author: Jose Auyon
 * 
 * Create a customizable gradient generator with color and direction options
 */


const GradientApp =  () => {
const [from, setFrom] = useState('#000000')
const [to, setTo] = useState('#ffff')
const [direction, setDirection] = useState('left')
const [gradientCss, setGradientCss] = useState('')
const directionsArray: string[] = ['top', 'right', 'bottom', 'left', 'top right', 'bottom right', 'bottom left', 'top left']
const suggestedColors = [
                { from: '#ff9a9e', to: '#fad0c4', name: 'Warm Flame' },
                { from: '#a18cd1', to: '#fbc2eb', name: 'Lavender' },
                { from: '#ffecd2', to: '#fcb69f', name: 'Peach' },
                { from: '#4facfe', to: '#00f2fe', name: 'Fresh Sky' }
              ]
useEffect(() => {
     const css = `background: linear-gradient(to ${direction}, ${from}, ${to});`
    setGradientCss(css)
}, [from, to, direction])

const formatHexValue =(hex:string)=> {
  const validHexRegex =  /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i
  let formattedHex = hex

  if(!formattedHex.startsWith('#')){
    formattedHex = '#' + formattedHex
  }

  if(!validHexRegex.test(formattedHex)){
    return from 
  }

  if(formattedHex.length === 4){
    const r = formattedHex[1]
    const g = formattedHex[2]
    const b = formattedHex[3]
    formattedHex = `#${r}${r}${g}${g}${b}${b}`
  }
  return formattedHex
}

  return (
    <div className='max-w-6xl mx-auto p-6'>
      <h1 className='text-3xl font-bold mb-8 text-center'>Gradient Generator</h1>
      
      {/* Main flex container for side-by-side layout */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Control panel */}
        <div className='w-full md:w-1/3'>
          <div className='bg-gray-800 rounded-lg shadow-lg p-6 text-white'>
            <h2 className="text-xl font-semibold mb-4">Customize Your Gradient</h2>

            <div className="space-y-6">
              {/* From Color */}
              <div>
                <label htmlFor="from" className="block mb-2 text-sm font-medium">
                  Start Color
                </label>
                <div className="flex gap-3 items-center">
                  <input
                    type="color"
                    id="from-color"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    className="h-10 w-10 rounded cursor-pointer"
                  />
                  <input
                    type="text" 
                    id="from"
                    name="from"
                    placeholder="#000000"
                    value={from}
                    onChange={(e) => setFrom(formatHexValue(e.target.value))}
                    className="bg-gray-700 border border-gray-600 text-white rounded-md px-3 py-2 flex-1"
                  />
                </div>
              </div>

              {/* To color */}
              <div>
                <label htmlFor="to" className='block mb-2 text-sm font-medium'>
                  End Color
                </label>
                <div className='flex gap-3 items-center'>
                  <input 
                    type="color"
                    id='to-color'
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    className='h-10 w-10 rounded cursor-pointer'
                  />
                  <input
                    type="text" 
                    id="to"
                    name="to"
                    placeholder="#ffffff"
                    value={to}
                    onChange={(e) => setTo(formatHexValue(e.target.value))}
                    className="bg-gray-700 border border-gray-600 text-white rounded-md px-3 py-2 flex-1"
                  />
                </div>
              </div>

              {/* Direction */}
              <div>
                <label htmlFor="direction" className='block mb-2 text-sm font-medium'>Direction</label>
                <div className='grid grid-cols-2 gap-2'>
                  {directionsArray.map((dir) => (
                    <button 
                      key={dir}
                      type='button'
                      onClick={() => setDirection(dir)}
                      className={`py-2 px-3 rounded text-sm ${
                        direction === dir
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-700 hover:bg-gray-600 text-gray-200'
                      }`}
                    >
                      {dir.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </button>
                  ))}
                </div>
              </div>

              {/* CSS Output */}
              <div>
                <label className="block mb-2 text-sm font-medium">
                  CSS Code
                </label>
                <div className="relative">
                  <pre className="bg-gray-900 p-3 rounded-lg text-green-400 text-sm overflow-x-auto">
                    {gradientCss}
                  </pre>
                  <button
                    onClick={() => navigator.clipboard.writeText(gradientCss)}
                    className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 p-1 rounded"
                    title="Copy to clipboard"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Preview section */}
        <div className='w-full md:w-2/3 flex flex-col gap-4'>
          <div 
            className='h-80 rounded-xl shadow-lg transition-all duration-500'
            style={{background: `linear-gradient(to ${direction}, ${from}, ${to})`}}
          ></div>
          
          {/* Color Palette Suggestions */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-medium mb-2">Try These Combinations</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
              {suggestedColors.map((preset, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setFrom(preset.from);
                    setTo(preset.to);
                  }}
                  className="text-xs p-2 rounded bg-gray-50 hover:bg-gray-100 flex flex-col items-center"
                >
                  <div className="w-full h-6 rounded mb-1" 
                    style={{ background: `linear-gradient(to right, ${preset.from}, ${preset.to})` }}></div>
                  {preset.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GradientApp
