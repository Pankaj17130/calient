import { useState } from 'react';
import { FilterSidebar } from './FilterSidebar';
import { ProductCard } from './ProductCard';
import { mockProducts } from './mockProducts';

export const ProductListPage = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortBy, setSortBy] = useState('price_asc');

  const categories = [...new Set(mockProducts.map(p => p.category))];

  const filteredProducts = mockProducts
    .filter(p => selectedCategories.length === 0 || selectedCategories.includes(p.category))
    .sort((a, b) => {
      switch (sortBy) {
        case 'price_asc': return a.price - b.price;
        case 'price_desc': return b.price - a.price;
        case 'rating': return b.rating - a.rating;
        default: return 0;
      }
    });

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      <FilterSidebar
        categories={categories}
        selectedCategories={selectedCategories}
        onCategoryChange={setSelectedCategories}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">Our Collection</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {filteredProducts.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No products found matching your criteria.
          </div>
        )}
      </div>
    </div>
  );
};
