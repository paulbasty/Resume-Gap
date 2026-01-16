import React from 'react'

export default function Contact(){
  return (
    <section className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <div className="mt-4 grid md:grid-cols-2 gap-6">
        <div>
          <p className="text-gray-700">Email: info@refurbishedwatches.example</p>
          <p className="text-gray-700 mt-2">Phone: +40 21 000 0000</p>
          <p className="text-gray-700 mt-2">Address: Old Town, Bucharest, Romania</p>
        </div>
        <div>
          <div className="w-full h-64 border rounded overflow-hidden">
            <iframe title="Bucharest map" width="100%" height="100%" style={{border:0}} loading="lazy" src="https://maps.google.com/maps?q=Bucharest&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
