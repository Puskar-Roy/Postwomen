import React from 'react'

const Bodyfields = () => {
  return (
    <div className='mt-10'>
      <div className='flex gap-3 bg-slate-800 justify-between text-slate-200 px-3 mx-auto rounded-lg text-sm w-[60%]'>
            <div className='p-2 hover:bg-green-400 font-semibold rounded-lg hover:text-black'>
                Parameter
            </div>
            <div className='p-2 hover:bg-green-400 font-semibold rounded-lg hover:text-slate-800'>
                Body
            </div>
            <div className='p-2 hover:bg-green-400 font-semibold rounded-lg hover:text-slate-800'>
                Autharization
            </div>
            <div className='p-2 hover:bg-green-400 font-semibold rounded-lg hover:text-slate-800'>
                Query
            </div>
            <div className='p-2 hover:bg-green-400 font-semibold rounded-lg hover:text-slate-800'>
                Tests
            </div>
      </div>
    </div>
  )
}

export default Bodyfields
