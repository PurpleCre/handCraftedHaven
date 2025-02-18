import Form from '@/app/ui/market/post-product-form';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Post a Product',
};
 
export default async function Page() {
 
  return (
    <main>
      <Form />
    </main>
  );
}