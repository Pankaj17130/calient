import { useParams } from 'react-router-dom';
import { RatingStars } from './RatingStars';
import { PriceTag } from './PriceTag';
import { mockProducts } from './mockProducts';

export const ProductDetailPage = () => {
  const { id } = useParams();
  const product = mockProducts.find(p => p.id === Number(id));

  if (!product) return <div className="p-4 text-red-500">Product not found</div>;


    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="md:sticky md:top-8">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className=" rounded-xl object-cover shadow-lg"
                />
              </div>
              
              <div className="space-y-6">
                <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
                <div className="flex items-center space-x-4">
                  <RatingStars rating={product.rating} />
                  <span className="text-gray-500">|</span>
                  <span className="text-green-600 font-medium">In Stock</span>
                </div>
                <PriceTag price={product.price} />
                
                <div className="border-t border-b border-gray-200 py-6">
                  <p className="text-lg text-gray-700 leading-relaxed">{product.description}</p>
                </div>
  
                <div className="space-y-4">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 rounded-xl hover:from-blue-700 hover:to-blue-600 transition-colors duration-200 text-lg font-semibold">
                    Add to Cart
                  </button>
                  <button className="w-full border-2 border-blue-600 text-blue-600 py-4 rounded-xl hover:bg-blue-50 transition-colors duration-200 text-lg font-semibold">
                    Save to Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };