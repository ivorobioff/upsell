import ProductPrice from '@/components/product/product-price';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Product } from '@/db/product';
import Image from 'next/image';
import Link from 'next/link';

export interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { slug, images, name, brand, rating, stock, price } = product;
  const url = `/products/${slug}`;
  return (<Card>
    <CardHeader className="p-0 justify-center">
      <Link href={url}>
        <Image src={images[0]} alt={name} height={300} width={300} />
      </Link>
    </CardHeader>
    <CardContent className="p-4">
      <div className="text-xs">{brand}</div>
      <Link href={url} className="block mb-2">
        <h2 className="text-sm font-medium">{name}</h2>
      </Link>
      <div className="flex-between">
        <p>{rating} Stars</p>
        {stock > 0 ? <ProductPrice price={price} /> : <p className="text-destructive">Out of Stock</p>}
      </div>
    </CardContent>
  </Card>);
}

export default ProductCard;