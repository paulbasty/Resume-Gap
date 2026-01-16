import React from 'react'

export default function Home(){
  const bg = "url('https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=2f4bd5b8d8f5f4a3d1c9fa2b9d9f9f9b')"
  return (
    <section className="relative">
      <div className="h-[60vh] md:h-[70vh] flex items-center" style={{backgroundImage:bg, backgroundSize:'cover', backgroundPosition:'center'}}>
        <div className="max-w-6xl mx-auto px-6 py-20 bg-black/40 rounded-md">
          <h1 className="text-4xl md:text-5xl font-semibold text-white">Classic timepieces, thoughtfully restored</h1>
          <p className="mt-4 text-gray-200 max-w-2xl">We source, refurbish and certify vintage watches—bringing back their original character while ensuring modern reliability. Each piece is hand-serviced by our atelier and comes with a detailed service report and limited guarantee.</p>
          <div className="mt-6 flex gap-3">
            <a href="/watches" className="px-4 py-2 bg-amber-500 text-white rounded shadow">Browse Watches</a>
            <a href="/contact" className="px-4 py-2 border border-white/30 text-white rounded">Reserve a Consultation</a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg bg-white/60">
          <h3 className="font-semibold text-lg">Nuts & Bolts</h3>
          <p className="mt-2 text-sm text-gray-700">Each watch is fully disassembled, ultrasonic-cleaned, inspected for wear, and reassembled with fresh lubrication. Parts are sourced from trusted suppliers and replaced only when necessary to maintain integrity.</p>
        </div>
        <div className="p-6 border rounded-lg bg-white/60">
          <h3 className="font-semibold text-lg">Authenticity & Provenance</h3>
          <p className="mt-2 text-sm text-gray-700">We research serials and reference numbers where possible and include a provenance note in every condition report. Historic patina is carefully preserved unless the client requests restoration.</p>
        </div>
        <div className="p-6 border rounded-lg bg-white/60">
          <h3 className="font-semibold text-lg">Guarantee & Support</h3>
          <p className="mt-2 text-sm text-gray-700">All sales include a 12-month workmanship guarantee and a 14-day return window. Ongoing servicing is available at preferential rates for returning clients.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6 mt-6">
        <h3 className="text-2xl font-semibold">Our Services</h3>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          <div className="p-4 border rounded bg-white/50">
            <strong>Full Service</strong>
            <p className="text-sm text-gray-700 mt-2">Complete overhaul including timing, cleaning and regulation.</p>
          </div>
          <div className="p-4 border rounded bg-white/50">
            <strong>Dial & Case Restoration</strong>
            <p className="text-sm text-gray-700 mt-2">Careful cosmetic restoration to revive appearance while respecting originality.</p>
          </div>
          <div className="p-4 border rounded bg-white/50">
            <strong>Authentication & Valuation</strong>
            <p className="text-sm text-gray-700 mt-2">Documentation and valuation for insurance or resale.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
