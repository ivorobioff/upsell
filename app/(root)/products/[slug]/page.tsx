import ProductImages from '@/components/product/product-images';
import ProductPrice from '@/components/product/product-price';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getProductBySlug } from '@/lib/actions/product.actions';
import { Plus } from 'lucide-react';
import { notFound } from 'next/navigation';

const ProductPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (<section>
    <div className="grid grid-cols-1 md:grid-cols-5">
      <div className="col-span-2">
        <ProductImages images={product.images} />
      </div>
      <div className="col-span-2 p-5">
        <div className="flex flex-col gap-6">
          <p>{product.brand} {product.category}</p>
          <h1 className="title-3">{product.name}</h1>
          <p>{product.rating.toString()} of {product.numReviews.toString()}</p>
          <div className="text-center md:text-left">
            <ProductPrice price={product.price} className="inline-block rounded-full bg-green-100 text-green-700 px-5 py-2" />
          </div>
          <p>
            <span className="font-semibold block">Description</span>
            {product.description}
          </p>
        </div>
      </div>
      <div className="col-span-1">
        <Card>
          <CardContent>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <div>Price</div>
                <ProductPrice price={product.price} />
              </div>
              <div className="flex justify-between">
                <div>Status</div>
                {product.stock > 0 ? <Badge variant="outline">In stock</Badge> : <Badge variant="destructive">Out of stock</Badge>}
              </div>
              {product.stock > 0 && <div className="text-center mt-4">
                <Button><Plus /> Add to Cart</Button>
              </div>}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>);
}

export default ProductPage;