import { Metadata } from 'next';
import { getUserInformation, getUserProducts } from "@/app/lib/queries"
import "@/app/ui/global.css";
import "@/app/ui/market.css";
import "@/app/ui/product.css";
import UserProfile from '@/app/ui/profiles/UserProfile';

export const metadata: Metadata = {
  title: 'User Page',
};

export default async function Page() {
  const userId = "ddff15bd-e8c1-4274-9a84-416b64626974"
  // console.log(userId)
  const products = await getUserProducts(userId);
  const user = await getUserInformation(userId);
  return (
    <>
      <UserProfile products = {products} user = {user}/>
    </>
  )
}