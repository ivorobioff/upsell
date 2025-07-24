'use client'

import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';

export interface ProductImagesProps {
  images: string[];
}

const ProductImages = ({ images }: ProductImagesProps) => {
  const [index, setIndex] = useState(0);

  return (<>
    <div className="relative w-full aspect-square mb-5">
      <Image src={images[index]} alt="product image" fill className="object-contain object-center" />
    </div>
    <div className="flex gap-1">
      {images.map((image, i) => <div key={i} className={`cursor-pointer rounded-xs border-2 overflow-hidden hover:border-orange-500 ${i === index ? 'border-orange-400' : 'border-0'}`} onClick={() => setIndex(i)}>
        <Image src={images[i]} width={100} height={100} alt={`product image ${image}`} />
      </div>)}
    </div>
  </>);
}

export default ProductImages;