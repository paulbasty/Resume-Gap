import React from 'react'

export default function About(){
  return (
    <section className="max-w-6xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-3xl font-semibold">Our Story</h2>
          <p className="mt-4 text-gray-700 text-lg">Founded in 2023 by two collectors with a love for mechanical craftsmanship, Refurbished Watches began as a weekend project restoring family heirlooms in Bucharest.</p>
          <p className="mt-4 text-gray-700">We combine traditional watchmaking techniques with modern diagnostics to bring classic timepieces back to life, emphasizing honesty and longevity in every service.</p>

          <h3 className="mt-6 text-xl font-medium">Our Process</h3>
          <ul className="mt-2 list-disc list-inside text-gray-600">
            <li>Full disassembly and ultrasonic cleaning</li>
            <li>Replacement of worn parts only when necessary</li>
            <li>Regulation and a thorough condition report</li>
          </ul>

          <div className="mt-6">
            <h4 className="text-lg font-medium">Timeline</h4>
            <div className="mt-3 space-y-3 text-sm text-gray-600">
              <div>
                <strong>2023</strong> — Workshop founded; first restorations completed.
              </div>
              <div>
                <strong>2024</strong> — Expanded supplier network across Europe; opened atelier.
              </div>
              <div>
                <strong>2025</strong> — Launched certified refurbishment program.
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <img src="/images/about1.jpg" alt="atelier" className="w-full h-52 object-cover rounded shadow" />
          <p className="text-sm text-gray-600">Our atelier in Bucharest focuses on small-batch restorations to maintain quality and attention to detail.</p>
          <div className="grid grid-cols-2 gap-3">
            <img src="/images/about2.jpg" alt="tools" className="w-full h-24 object-cover rounded" />
            <div className="bg-gray-50 p-3 rounded">
              <h5 className="font-medium">Meet the founders</h5>
              <p className="text-sm text-gray-600 mt-1">Two collectors turned watchmakers who care about provenance and service.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
