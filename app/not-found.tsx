import { Button } from '@/components/ui/button';
import Logo from '@/components/ui/logo';
import { Title, Paragraph } from '@/components/ui/typography';
import Link from 'next/link';

const NotFoundPage = () => {
  return (<div className="flex h-screen w-screen justify-center items-center flex-col">
    <Logo size="64" />
    <br />
    <Title size="3" bottomSpacing="none">Not Found</Title>
    <Paragraph>Could not find requested page</Paragraph>
    <Button asChild variant="secondary">
      <Link href="/">Go to Home</Link>
    </Button>
  </div >);
}

export default NotFoundPage;