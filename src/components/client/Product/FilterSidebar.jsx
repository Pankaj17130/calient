export const FilterSidebar = ({ categories, selectedCategories, onCategoryChange, sortBy, onSortChange }) => {
    const handleCheckboxChange = (category) => {
      onCategoryChange(
        selectedCategories.includes(category)
          ? selectedCategories.filter(c => c !== category)
          : [...selectedCategories, category]
      );
    };
  
    return (
      <div className="w-72 p-6 bg-white border-r hidden md:block sticky top-0 h-screen overflow-y-auto">
        <div className="mb-8">
          <h3 className="font-bold text-lg mb-4">Sort By</h3>
          <select
            className="w-full px-4 py-2 border rounded-lg"
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
          >
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
            <option value="rating">Rating</option>
          </select>
        </div>
  
        <h3 className="font-bold text-lg mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map(category => (
            <label key={category} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCheckboxChange(category)}
                className="mr-2"
              />
              {category}
            </label>
          ))}
        </div>
      </div>
    );
  };
  