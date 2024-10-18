import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilters } from '../redux/actions/eventActions';

const categories = ['All', 'Concerts', 'Conferences', 'Sports'];
const priceRanges = [
  { label: 'All', value: [0, Infinity] },
  { label: '$0 - $50', value: [0, 50] },
  { label: '$51 - $100', value: [51, 100] },
  { label: '$101 - $200', value: [101, 200] },
  { label: '$200+', value: [200, Infinity] },
];

const Filters = () => {
  const [category, setCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, Infinity]);
  const dispatch = useDispatch();

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    dispatch(setFilters({ category: newCategory === 'All' ? null : newCategory, priceRange }));
  };

  const handlePriceRangeChange = (newRange) => {
    setPriceRange(newRange);
    dispatch(setFilters({ category: category === 'All' ? null : category, priceRange: newRange }));
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg mb-6">
      <h3 className="text-lg font-semibold mb-4">Filters</h3>
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