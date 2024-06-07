import React from 'react'

function Tab({tabData, field, setField}) {
  return (
    <div
        style={{ boxShadow:"inset 0px -1px 0px rgba(255, 255, 255, 0.18"}}
        className="flex bg-slate-800 p-1 gap-x-1 my-6 rounded-full max-w-max">
            {
tabData.map((e) => {
    return <button key={e.id} 
    onClick={()=> setField(e.type)}
    className={`${field === e.type ? "bg-slate-900 text-white" : "bg-transparent text-slate-500"} py-2 px-5 rounded-full transition-all duration-200`}
    >
{e?.tabName}
    </button>
})
            }
    </div>
  )
}

export default Tab