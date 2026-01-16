import React from 'react'

export default function Home(){
  const bg = "url('https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=2f4bd5b8d8f5f4a3d1c9fa2b9d9f9f9b')"
  return (
    <section className="relative">
      <div className="h-[60vh] md:h-[70vh] flex items-center" style={{backgroundImage:bg, backgroundSize:'cover', backgroundPosition:'center'}}>
        <div className="max-w-6xl mx-auto px-6 py-20 bg-black/40 rounded-md">
          <h1 className="text-4xl md:text-5xl font-semibold text-white">Classic timepieces, thoughtfully restored</h1>
          <p className="mt-4 text-gray-200 max-w-2xl">We source, refurbish and certify vintage watches—bringing back their original character while ensuring modern reliability. Each watch is fully serviced, inspected, and paired with a guarantee.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-3 gap-6">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold">Nuts & Bolts</h3>
          <p className="mt-2 text-sm text-gray-600">Each piece is disassembled, cleaned, lubricated, and regulated by professional watchmakers. Components are replaced only when necessary to preserve originality.</p>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold">Authenticity</h3>
          <p className="mt-2 text-sm text-gray-600">We document provenance where available and provide condition reports for transparency, including dial, case, movement and service notes.</p>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold">Guarantee</h3>
          <p className="mt-2 text-sm text-gray-600">All watches come with a limited service warranty and a 14-day satisfaction window to ensure confidence with your purchase.</p>
        </div>
      </div>
    </section>
  )
}
