import React from 'react'
import { Link } from 'react-router-dom'

const watches = [
  {id:1, name:'Vintage Diver', img:'/images/watch1.jpg', price:1250, desc:'Robust diver from the 1970s — cleaned, regulated, and pressure-tested.'},
  {id:2, name:'Dress Classic', img:'/images/watch2.jpg', price:980, desc:'Elegant slim profile with a restored dial and new leather strap.'},
  {id:3, name:'Pilot Chrono', img:'/images/watch3.jpg', price:1420, desc:'Functional chronograph with freshly serviced movement and crisp register hands.'},
  {id:4, name:'Field Explorer', img:'/images/watch4.jpg', price:760, desc:'Rugged field watch — reliable, legible, and ready for daily wear.'}
]

export default function Watches(){
  return (
    <section className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Available Watches</h2>
      <p className="text-gray-600 mb-4">Each watch below has been inspected, serviced, and photographed. Click any model to view full details, condition report, and reserve.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {watches.map(w => (
          <div key={w.id} className="border rounded-lg overflow-hidden shadow-sm">
            <img src={w.img} alt={w.name} className="w-full h-44 object-cover" />
            <div className="p-4">
              <h3 className="font-medium">{w.name}</h3>
              <p className="text-sm text-gray-600 mt-2">{w.desc}</p>
              <div className="mt-4 flex justify-between items-center">
                <div className="text-lg font-semibold">${w.price.toLocaleString()}</div>
                <Link to={`/watches/${w.id}`} className="px-3 py-1 bg-gray-900 text-white rounded">View</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
