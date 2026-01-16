import React from 'react'
import { useParams } from 'react-router-dom'
import Carousel from '../components/Carousel'

const sampleSpecs = [
  ['Case','40mm stainless steel'],
  ['Movement','Automatic, serviced 2024'],
  ['Crystal','Sapphire (replaced)'],
  ['Strap','Genuine leather']
]

export default function WatchDetail(){
  const { id } = useParams()
  const images = [
    `https://picsum.photos/seed/watch${id}a/1200/800`,
    `https://picsum.photos/seed/watch${id}b/1200/800`,
    `https://picsum.photos/seed/watch${id}c/1200/800`
  ]

  return (
    <section className="max-w-5xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Carousel images={images} />
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Refurbished Watch #{id}</h2>
          <p className="mt-4 text-gray-700">A beautiful example of a restored classic—maintaining original charm while fitted with reliable parts where needed.</p>

          <div className="mt-6">
            <h4 className="font-medium">Specs</h4>
            <ul className="mt-2 text-sm text-gray-600">
              {sampleSpecs.map(s => (
                <li key={s[0]} className="flex justify-between border-b py-2"><span>{s[0]}</span><span className="text-gray-800">{s[1]}</span></li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="text-2xl font-semibold">$1,250</div>
            <button className="px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700">Reserve</button>
          </div>
        </div>
      </div>
    </section>
  )
}
