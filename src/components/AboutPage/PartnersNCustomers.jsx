import React from 'react'

const PartnersNCustomers = () => {
  const customers = [
    { 
      name: "Alaro City",
      src: "new_section_images/customers/alaro_city.png",
    },
    { 
      name: "Tolaram Africa",
      src: "new_section_images/customers/tolaram.png",
    },
    { 
      name: "bhn",
      src: "new_section_images/customers/bhn.png",
    },
    { 
      name: "Kellogg’s",
      src:  "new_section_images/customers/kelloggs.png",
    },
    { 
      name: "Colgate",
      src:  "new_section_images/customers/colgate.svg",
    },
    { 
      name: "Arla",
      src:  "new_section_images/customers/arla.jpg",
    },
    { 
      name: "Ariel",
      src:  "new_section_images/customers/ariel.jpg",
    },
    { 
      name: "Guinness Africa",
      src:  "new_section_images/customers/guinness_africa.png",
    },
    { 
      name: "Sonnex Packaging",
      src:  "new_section_images/customers/sonnex_packaging.png",
    },
    { 
      name: "TG Agri",
      src:  "new_section_images/customers/Tg_Agri.jpg",
    },
    { 
      name: "Dufil Prima Foods",
      src:  "new_section_images/customers/dufil.jpg",
    },
    { 
      name: "Checkers Africa",
      src:  "new_section_images/customers/checkers.png",
    },
    { 
      name: "Dasco Engineering",
      src:  "new_section_images/customers/dasco.png",
    },
    { 
      name: "Auro Private Ltd",
      src:  "new_section_images/customers/auro.jpg",
    },
    { 
      name: "Rosettee FZE",
      src:  "new_section_images/customers/Rosettee.png",
    },
    { 
      name: "SFM",
      src:  "new_section_images/customers/sfm.png",
    },
  
  
  
  
  
  
];

  const partners = [
  { 
      name: "Schneider",
      src:  "new_section_images/partners/schneider.png",
  },
  { 
      name: "Abb",
      src:  "new_section_images/partners/ABB.png",
  },
  { 
      name: "Siemens",
      src:  "new_section_images/partners/Siemens.png",
  },
  { 
      name: "Chint",
      src:  "new_section_images/partners/Chint.png",
  },
  { 
      name: "Delta",
      src:  "new_section_images/partners/Delta.png",
  },
  { 
      name: "Himel",
      src:  "new_section_images/partners/Himel.png",
  },
  { 
      name: "Philips",
      src:  "new_section_images/partners/Philips.png",
  },
  { 
      name: "Legrand",
      src:  "new_section_images/partners/Legrand.png",
  },
  { 
      name: "Osram",
      src:  "new_section_images/partners/Osram.png",
  },
  { 
      name: "Havells",
      src:  "new_section_images/partners/Havells.png",
  },
  { 
      name: "Wipro",
      src:  "new_section_images/partners/Wipro.png",
  },
  { 
      name: "yska LED",
      src:  "new_section_images/partners/Syska.png",
  },
  { 
      name: "Bajaj",
      src:  "new_section_images/partners/Bajaj.png",
  },
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
            className="flex items-center justify-center
    bg-white shadow-md rounded-lg
    aspect-[4/2]
    p-4
    hover:shadow-md transition"
          >
            <img src={customer.src} alt={`${customer.name} logo`} className=' max-h-full
      max-w-full
      object-contain' />
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
            className="flex items-center justify-center
    bg-white shadow-md rounded-lg
    aspect-[4/2]
    p-4
    hover:shadow-md transition"
          >
            <img src={partner.src} alt={`${partner.name} logo`} className=' max-h-full
      max-w-full
      object-contain' />
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