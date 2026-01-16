import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-white/90 border-t mt-12">
      <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-semibold">Refurbished Watches</h4>
          <p className="text-sm text-gray-600 mt-2">Restoring classic timepieces with care and transparency. Servicing, repairs and warranties available.</p>
          <p className="text-sm text-gray-500 mt-3">© {new Date().getFullYear()} Refurbished Watches</p>
        </div>

        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="mt-2 text-sm text-gray-600 space-y-1">
            <li>Home</li>
            <li>Watches</li>
            <li>About</li>
            <li>Contact</li>
            <li>Services</li>
            <li>Testimonials</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="text-sm text-gray-600 mt-2">Old Town, Bucharest, Romania</p>
          <p className="text-sm text-gray-600">Email: info@refurbishedwatches.example</p>
          <p className="text-sm text-gray-600">Phone: +40 21 000 0000</p>
          <div className="mt-4">
            <label className="text-sm text-gray-600">Newsletter</label>
            <div className="mt-2 flex">
              <input className="border px-2 py-1 rounded-l text-sm flex-1" placeholder="your@email.example" />
              <button className="px-3 py-1 bg-gray-900 text-white rounded-r text-sm">Subscribe</button>
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-500">
            <a className="underline">Privacy Policy</a> · <a className="underline">Terms</a> · <a className="underline">Shipping</a>
          </div>
          <div className="mt-3 flex gap-3">
            <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">f</div>
            <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">t</div>
            <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">i</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
