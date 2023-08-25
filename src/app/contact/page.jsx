export default function Contact() {
  return (
    <>
      <div className="mt-4"></div>
      <div className="my-auto mx-4">
        <h1 className="text-3xl font-bold text-center text-slate-800">Contact</h1>
        <p className="mt-4 text-center text-md text-slate-700"><b>Note:</b> Please provide the following information when requesting my service:</p>

        <div className="mt-4 max-w-sm rounded-md overflow-hidden shadow-lg px-6 py-4 mx-auto bg-slate-100">
          <ul className=" mt-4 list-disc mx-8 text-slate-700">
            <li>Location and date</li>
            <li>Date of service</li>
            <li>Budget</li>
            <li>Type of food</li>
            <li>Allergies</li>
            <li>Dietary Restrictions</li>
          </ul>
        </div>
        <div className="mt-4 px-6 py-4 max-w-md rounded-md overflow-hidden shadow-lg  mx-auto text-slate-800 bg-slate-100">
          <div><b>Email:</b> <a href="mailto:chefevargas1968@gmail.com"> chefevargas1968@gmail.com </a></div>
          <div><b>Phone:</b> +1 (773) 886 3028</div>
          <div><b>Location:</b> Chicago, Illinois</div>
        </div>

      </div>
      <div className="mt-4"></div>
    </>
  )
}