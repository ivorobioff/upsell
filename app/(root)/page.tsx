import { Metadata } from 'next';
import ProductList from '@/components/product/product-list';
import { getLatestProducts } from '@/lib/actions/product';

export const metadata: Metadata = {
  title: 'Home'
}

const HomePage = async () => {

  const products = await getLatestProducts();

  return (<>
    <ProductList data={products} title="Newest Arrivals" limit={4} />
  </>);
}

export default HomePage;