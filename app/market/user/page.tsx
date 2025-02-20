import { Metadata } from 'next';
import UserProfile from '@/app/ui/profiles/UserProfile';
import { getUserInformation, getUserProducts } from "@/app/lib/queries"
// import getServerSession from "next-auth";
// import { authConfig } from '@/auth.config';
// import { Session } from 'inspector/promises';
import "@/app/ui/global.css";
import "@/app/ui/market.css";
import "@/app/ui/product.css";
 
export const metadata: Metadata = {
  title: 'User Page',
};

export default async function Page() {
  // const data = (await getServerSession(authConfig)) as unknown;
  // const session = await data as Session;
  // console.log(session)
  // const userId = session.user.id
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