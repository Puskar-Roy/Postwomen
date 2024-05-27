import React from 'react'

const Bodyfields = () => {
  return (
    <div className='mt-10'>
      <div className='flex gap-3 bg-slate-800 justify-between text-slate-200 p-3 rounded-lg text-sm'>
            <div className='p-2 hover:bg-green-400 font-semibold rounded-lg hover:text-black'>
                Parameter
            </div>
            <div>
                Body
            </div>
            <div>
                Autharization
            </div>
            <div>
                Query
            </div>
            <div>
                Tests
            </div>
      </div>
    </div>
  )
}

export default Bodyfields
