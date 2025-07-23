import ProductCard from '@/components/product/product-card';
import { Product } from '@/lib/generated/prisma';

export interface ProductListProps {
  data: Product[];
  title: string;
  limit?: number;
}

const ProductList = ({ data, title, limit }: ProductListProps) => {

  const limitedData = limit ? data.slice(0, limit) : data;

  return <div className="my-2">
    <h2 className="title-3 my-4">{title}</h2>
    {limitedData.length > 0
      ? <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {limitedData.map((product) => <ProductCard key={product.slug} product={product} />)}
      </div>
      : <p>No products found</p>}

  </div>;
}

export default ProductList;