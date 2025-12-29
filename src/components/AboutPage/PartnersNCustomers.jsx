import React from 'react'

const PartnersNCustomers = () => {
    const customers = [
  "Tolaram Africa",
  "BHN",
  "Kellogg’s",
  "Colgate",
  "Arla",
  "Ariel",
  "Guinness Africa",
  "Sonnex Packaging",
  "Alaro City",
  "Dasco Engineering",
  "Checkers Africa",
  "Dufil Prima Foods",
  "TG Agric",
  "Auro Private Ltd",
  "Rosettee FZE",
  "SFM",
];

const partners = [
  "Schneider",
  "ABB",
  "Siemens",
  "Chint",
  "Delta",
  "Himel",
  "Philips",
  "Legrand",
  "Osram",
  "Havells",
  "Wipro",
  "Syska LED",
  "Bajaj",
];

  return (
    <div>
        <section className="w-full py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4">

    {/* Section Header */}
    <div className="text-center mb-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
        Our Customers & Certified Partners
      </h2>
      <p className="text-sm md:text-base text-gray-600 mt-3 max-w-2xl mx-auto">
        Trusted by leading organizations and supported by globally recognized
        electrical and power technology partners.
      </p>
    </div>

    {/* Customers */}
    <div className="mb-14">
      <h3 className="text-lg font-medium text-gray-800 mb-6">
        Our Customers
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {customers.map((customer, index) => (
          <div
            key={index}
            className="flex items-center justify-center bg-white border rounded-lg py-4 px-3 text-sm text-gray-700 hover:shadow-md transition"
          >
            <img src={customerimage}/>
            {customer}
          </div>
        ))}
      </div>

      <p className="text-xs text-gray-500 mt-4">
        Selected organizations we have delivered engineering solutions to across
        various projects.
      </p>
    </div>

    {/* Partners */}
    <div>
      <h3 className="text-lg font-medium text-gray-800 mb-6">
        Certified Technology Partners
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="flex items-center justify-center bg-white border rounded-lg py-4 px-3 text-sm font-medium text-gray-700 hover:shadow-md transition"
          >
            {partner}
          </div>
        ))}
      </div>

      <p className="text-xs text-gray-500 mt-4">
        We are certified partners of leading global electrical and automation
        brands.
      </p>
    </div>

  </div>
</section>

    </div>
  )
}

export default PartnersNCustomers