import Form from '@/app/ui/profiles/create-form';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Create Invoice',
};
 
export default async function Page() {
 
  return (
    <main>
      <Form />
    </main>
  );
}