import {data} from './messages.js'

export default function Pricing() {

  return (
    <>
      <h1 className="my-4 text-3xl font-bold text-center text-slate-800">{data.title}</h1>

      <div className=" mx-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.services.map((service) => {
          return (
            <div className="shadow-lg px-6 py-4 bg-slate-200 rounded-md">
              <div className="font-bold text-2xl text-center mb-2 text-slate-800">{service.title}</div>
              <ul className="list-disc text-justify">
        
                {service.description.map((bullet) => {
                  return (
                    <li className="pb-2 text-slate-700">{bullet}</li>
                  )
                })}
        
              </ul>
              <div className="text-right text-xl font-bold text-red-700"> {service.price}
                <span className="font-normal text-sm text-slate-600"> {service.addOn} </span>
              </div>
              {service.note && (<div className="mt-4 text-sm text-right text-slate-700"><b>Note: </b>{service.note}</div>)}
            </div>
          )
        })}
      </div>
      <div className='mt-4'></div>
    </>
  )
}