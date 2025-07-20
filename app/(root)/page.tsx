import { Metadata } from 'next';
import sampleData from '@/db/sample-data';
import ProductList from '@/components/product/product-list';

export const metadata: Metadata = {
  title: 'Home'
}

const HomePage = () => {
  return (<>
    <ProductList data={sampleData.products} title="Newest Arrivals" limit={4} />
  </>);
}

export default HomePage;