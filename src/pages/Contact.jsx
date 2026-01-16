import React from 'react'

export default function Contact(){
  return (
    <section className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-6 items-start">
        <div className="md:col-span-2">
          <p className="text-gray-700">Email: info@refurbishedwatches.example</p>
          <p className="text-gray-700 mt-2">Phone: +40 21 000 0000</p>
          <p className="text-gray-700 mt-2">Address: Old Town, Bucharest, Romania</p>

          <h4 className="mt-4 font-medium">Business Hours</h4>
          <p className="text-sm text-gray-600">Mon-Fri: 09:00 — 17:00</p>
          <p className="text-sm text-gray-600">Sat: By appointment</p>
        </div>

        <div className="w-full h-80 border rounded overflow-hidden">
          <iframe title="Bucharest map" width="100%" height="100%" style={{border:0}} loading="lazy" src="https://maps.google.com/maps?q=Bucharest&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
        </div>
      </div>
    </section>
  )
}
