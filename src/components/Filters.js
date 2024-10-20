import React from 'react';

const categories = ['All', 'Concerts', 'Conferences', 'Sports'];
const priceRanges = [
  { label: 'All', value: [0, Infinity] },
  { label: '$0 - $50', value: [0, 50] },
  { label: '$51 - $100', value: [51, 100] },
  { label: '$101 - $200', value: [101, 200] },
  { label: '$200+', value: [200, Infinity] },
];

const Filters = ({ handlePriceRangeChange, handleCategoryChange, category, priceRange }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg mb-6">
      <h3 className="text-lg font-semibold mb-4">Filters</h3>

      {/* Category Filter */}
      <div className="mb-4">
        <h4 className="font-medium mb-2">Category</h4>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-3 py-1 rounded ${
                category === cat
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div>
        <h4 className="font-medium mb-2">Price Range</h4>
        <div className="flex flex-wrap gap-2">
          {priceRanges.map((range) => (
            <button
              key={range.label}
              onClick={() => handlePriceRangeChange(range.value)}
              className={`px-3 py-1 rounded ${
                JSON.stringify(priceRange) === JSON.stringify(range.value)
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-200'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
