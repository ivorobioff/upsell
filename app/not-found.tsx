import { Button } from '@/components/ui/button';
import Logo from '@/components/ui/logo';
import Link from 'next/link';

const NotFoundPage = () => {
  return (<div className="flex h-screen w-screen justify-center items-center flex-col">
    <Logo size="64" className="mb-4"  />
    <h1 className="title-3">Not Found</h1>
    <p className="mb-4 insight">Could not find requested page</p>
    <Button asChild variant="secondary">
      <Link href="/">Go to Home</Link>
    </Button>
  </div >);
}

export default NotFoundPage;