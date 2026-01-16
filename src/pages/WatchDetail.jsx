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
    `/images/watch${id}.jpg`,
    `/images/watch${id}-2.jpg`,
    `/images/watch${id}-3.jpg`
  ]

  return (
    <section className="max-w-5xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Carousel images={images} />
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Refurbished Watch #{id}</h2>
          <p className="mt-4 text-gray-700 text-lg">A carefully restored timepiece with attention to original finish and functionality. Each watch receives a full service, calibration, and a condition report.</p>

          <div className="mt-4 text-sm text-gray-700">
            <p><strong>Model:</strong> {`Model ${id} — Reference 100${id}`}</p>
            <p className="mt-2"><strong>Condition:</strong> Excellent — service report available.</p>
            <p className="mt-2">This example retains its original case with light surface marks consistent with age. The dial has been cleaned; luminous material left untouched to preserve authenticity.</p>
          </div>

          <div className="mt-6">
            <h4 className="font-medium">Highlights</h4>
            <ul className="mt-2 list-disc list-inside text-sm text-gray-600">
              <li>Full service by certified watchmaker</li>
              <li>Original case and dial preserved where possible</li>
              <li>Movement regulated for accuracy; timing certificate included</li>
            </ul>
          </div>

          <div className="mt-6">
            <h4 className="font-medium">Specs</h4>
            <ul className="mt-2 text-sm text-gray-600">
              {sampleSpecs.map(s => (
                <li key={s[0]} className="flex justify-between border-b py-2"><span>{s[0]}</span><span className="text-gray-800">{s[1]}</span></li>
              ))}
            </ul>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3">
            <div className="text-2xl font-semibold">$1,250</div>
            <form className="mt-2 grid grid-cols-1 gap-2 max-w-md">
              <input className="border px-3 py-2 rounded" placeholder="Your name" />
              <input className="border px-3 py-2 rounded" placeholder="Email" />
              <button type="button" className="px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700">Reserve</button>
            </form>
            <div className="text-sm text-gray-500">This placeholder form collects your interest. We'll contact you to confirm specifics and arrange payment/shipping.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
