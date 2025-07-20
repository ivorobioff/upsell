export interface ProductPriceProps {
  price: number;
}

const ProductPrice = ({ price }: ProductPriceProps) => {
  const formattedPrice = price.toFixed(2);
  const [intPrice, floatPrice] = formattedPrice.split('.');

  return (<p className="text-xl">
    <span className="text-xs align-super">$</span>
    {intPrice}
    <span className="text-xs align-super">.{floatPrice}</span>
  </p>);
}

export default ProductPrice;