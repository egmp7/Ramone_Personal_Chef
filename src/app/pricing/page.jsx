const data = [
  {
    title: "AirBnB Services",
    description: [
      "For AirBnB Customers",
      "These meals will be ready to heat up  or I will prepare the meals in your kitchen with a full chef experience",
      "For groceries shopping the same hourly rate is applied and is made according to your budge and specifications."],
    price: "$70/hour",
    addOn: "plus groceries"
  },
  {
    title: "Express Services",
    description: [
      "For single executives and couples with the desire to have healthy meals made in your kitchen, with special details of your needs, like low salt, fats, sugars or calories counts",
      "These meals will be ready to heat up and eat, or prepared for you to cook following the Chef's instructions",
      "For groceries shopping the same hourly rate is applied and is made according to your budget and specifications.",
      "Weekly services available"],
    price: "$50/hour",
    addOn: "plus groceries"
  },
  {
    title: "Weekly Services",
    description: [
      "For clients that need a full chef experience to select the best quality ingredients in the market to prepare the meals on daily basis.",
      "I will give personal attention to presentation and deliver the final meal to the table.",
      "I will be available for 20 hours weekly, 4 hours a day Monday to Friday for lunch or dinner for a family up to 6 people.",
      "Chef Ramone is also available to cook to order served at your table from your kitchen at a desired time"],
    price: "$1000/week",
    addOn: "plus groceries",
    note: "Saturday and Sunday can be negotiated for an additional rate"
  },
  {
    title: "All day services",
    description: [
      "Usually clients with yachts",
      "Corporate fishing or hunting",
      "Chef Ramone will be available for 12 hours"],
    price: "$1000/day",
    addOn: "plus groceries"
  }
]

export default function Pricing() {

  return (
    <>
      <h1 className="pt-4 text-3xl font-bold text-center">Pricing</h1>

      <div className="flex flex-wrap">
        {data.map((service) => {
          return (
            <div className="max-w-sm rounded overflow-hidden shadow-lg px-6 py-4">
              <div className="font-bold text-2xl text-center mb-2">{service.title}</div>
              <ul className="list-disc text-justify">
        
                {service.description.map((bullet) => {
                  return (
                    <li className="pb-2">{bullet}</li>
                  )
                })}
        
              </ul>
              <div className="text-right text-xl font-bold text-red-700"> {service.price}
                <span className="font-normal text-sm text-gray-700"> {service.addOn} </span>
              </div>
              {service.note && (<div className="mt-4 text-sm text-right"><b>Note: </b>{service.note}</div>)}
            </div>
          )
        })}
      </div>
    </>
  )
}