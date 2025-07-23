import { getProductBySlug } from '@/lib/actions/product.actions';
import { notFound } from 'next/navigation';

const ProductPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (<>
    <h1 className="title-3">{product.name}</h1>
  </>);
}

export default ProductPage;