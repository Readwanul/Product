import Image from "next/image";
import { useAppDispatch } from "../store/hook";
import { addToCart } from "../store/slice";

interface ProductProps {
  unique_id: string;
  name: string;
  price: number;
  image: string;
  short_desc: string;
}

const ProductCard = ({ unique_id,name, price, image, short_desc }: ProductProps) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ unique_id,name, quantity: 1 ,price,image})); 
    alert(`Added ${name} to cart!`); 
  };
  return (
    <div className="bg-white rounded-xl shadow-md mx-10 p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-blue-100 w-full max-w-xs ">
      <Image
        src={`https://admin.refabry.com/storage/product/${image}`}
        alt={name}
        width={300}
        height={300}
        className="rounded-md object-cover"
      />
      <div className="mt-4">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-500 mb-2 line-clamp-2">{short_desc}</p>
        <p className="text-gray-700 font-bold text-lg mb-2">৳ {price}</p>
        <button className="w-full bg-gray-200 text-black py-2 rounded-md hover:bg-gray-300"
        onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
