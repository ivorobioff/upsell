import { Prisma } from '@/lib/generated/prisma';

export interface ProductPriceProps {
  price: Prisma.Decimal;
  className?: string;
}

const ProductPrice = ({ price, className }: ProductPriceProps) => {
  const formattedPrice = price.toFixed(2);
  const [intPrice, floatPrice] = formattedPrice.split('.');

  return (<p className={`text-xl ${className}`}>
    <span className="text-xs align-super">$</span>
    {intPrice}
    <span className="text-xs align-super">.{floatPrice}</span>
  </p>);
}

export default ProductPrice;