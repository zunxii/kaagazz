import React from 'react'
import cone from './cone.jpg'
import leaves_5 from './leaves-5.png'
import leaves_10 from './leaves-10.jpeg'
import yashraj from './yashraj.jpg'

const Shop = () => {
  return (
    
    <div className="flex flex-col gap-8 p-8 py-12">
      <div className="flex justify-end">
        <select 
          className="p-2 border rounded-md text-[#355F9B] font-semibold"
          onChange={(e) => {
            const products = document.querySelectorAll('.grid > div');
            const productsArray = Array.from(products);
            
            if (e.target.value === 'popularity') {
              const popularityOrder = {
                'Leaves 5': 0,
                'Leaves 10': 1, 
                'Cone': 2,
                'Yashraj': 3
              };
              
              productsArray.sort((a, b) => {
                const aName = a.querySelector('img').alt;
                const bName = b.querySelector('img').alt;
                return popularityOrder[aName] - popularityOrder[bName];
              });
            } else if (e.target.value === 'latest') {
              const latestOrder = {
                'Yashraj': 0,
                'Cone': 1,
                'Leaves 5': 2,
                'Leaves 10': 3
              };
              
              productsArray.sort((a, b) => {
                const aName = a.querySelector('img').alt;
                const bName = b.querySelector('img').alt;
                return latestOrder[aName] - latestOrder[bName];
              });
            } else if (e.target.value === 'price') {
              const priceOrder = {
                'Leaves 5': 0,
                'Cone': 1,
                'Leaves 10': 2,
                'Yashraj': 3
              };
              
              productsArray.sort((a, b) => {
                const aName = a.querySelector('img').alt;
                const bName = b.querySelector('img').alt;
                return priceOrder[aName] - priceOrder[bName];
              });
            }

            const grid = document.querySelector('.grid');
            productsArray.forEach(product => grid.appendChild(product));
          }}
        >
          <option value="popularity">Sort by Popularity</option>
          <option value="latest">Sort by Latest</option>
          <option value="price">Sort by Price</option>
        </select>
      </div>
      
          <div className="grid grid-cols-3 gap-8">
        <div className="border rounded-lg p-4 flex flex-col items-center">
          <img src={cone} alt="Cone" className="w-100 h-48 rounded-lg object-cover" />
          <h3 className="mt-4 font-bold text-[#355F9B]">Product Name</h3>
          <p className="text-gray-600">₹XXX</p>
          <button className="mt-4 bg-[#355F9B] text-white px-4 py-2 rounded-lg hover:bg-[#1C3B6B] transition-colors">
            Add to Cart
          </button>
        </div>

        <div className="border rounded-lg p-4 flex flex-col items-center">
          <img src={leaves_5} alt="Leaves 5" className="w-100 h-48 rounded-lg object-cover" />
          <h3 className="mt-4 font-bold text-[#355F9B]">Product Name</h3>
          <p className="text-gray-600">₹XXX</p>
          <button className="mt-4 bg-[#355F9B] text-white px-4 py-2 rounded-lg hover:bg-[#1C3B6B] transition-colors">
            Add to Cart
          </button>
        </div>

        <div className="border rounded-lg p-4 flex flex-col items-center">
          <img src={leaves_10} alt="Leaves 10" className="w-100 h-48 rounded-lg object-cover" />
          <h3 className="mt-4 font-bold text-[#355F9B]">Product Name</h3>
          <p className="text-gray-600">₹XXX</p>
          <button className="mt-4 bg-[#355F9B] text-white px-4 py-2 rounded-lg hover:bg-[#1C3B6B] transition-colors">
            Add to Cart
          </button>
        </div>
        <div className="border rounded-lg p-4 flex flex-col items-center">
          <img src={yashraj} alt="Yashraj" className="w-100 h-48 rounded-lg object-cover" />
          <h3 className="mt-4 font-bold text-[#355F9B]">Product Name</h3>
          <p className="text-gray-600">₹XXX</p>
          <button className="mt-4 bg-[#355F9B] text-white px-4 py-2 rounded-lg hover:bg-[#1C3B6B] transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Shop
