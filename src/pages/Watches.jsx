import React from 'react'
import { Link } from 'react-router-dom'

const watches = [
  {id:1, name:'Vintage Diver', img:'https://picsum.photos/seed/watch1/800/600'},
  {id:2, name:'Dress Classic', img:'https://picsum.photos/seed/watch2/800/600'},
  {id:3, name:'Pilot Chrono', img:'https://picsum.photos/seed/watch3/800/600'},
  {id:4, name:'Field Explorer', img:'https://picsum.photos/seed/watch4/800/600'}
]

export default function Watches(){
  return (
    <section className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Available Watches</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {watches.map(w => (
          <div key={w.id} className="border rounded-lg overflow-hidden shadow-sm">
            <img src={w.img} alt={w.name} className="w-full h-44 object-cover" />
            <div className="p-4">
              <h3 className="font-medium">{w.name}</h3>
              <p className="text-sm text-gray-600 mt-2">A carefully inspected and restored timepiece.</p>
              <div className="mt-4 flex justify-between items-center">
                <div className="text-lg font-semibold">$1,250</div>
                <Link to={`/watches/${w.id}`} className="px-3 py-1 bg-gray-900 text-white rounded">View</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
