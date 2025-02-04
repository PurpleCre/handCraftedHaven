import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Home',
};

export default function Page() {
    return (
      <>
        <h1>Home Page</h1>
        <div className='items'> 
          <div className='placeholder'>Placeholder for items</div>
          <div className='placeholder'>Placeholder for items</div>
          <div className='placeholder'>Placeholder for items</div>
          <div className='placeholder'>Placeholder for items</div>
          <div className='placeholder'>Placeholder for items</div>
          <div className='placeholder'>Placeholder for items</div>
          <div className='placeholder'>Placeholder for items</div>
          <div className='placeholder'>Placeholder for items</div>
          <div className='placeholder'>Placeholder for items</div>
          <div className='placeholder'>Placeholder for items</div>
          <div className='placeholder'>Placeholder for items</div>
          <div className='placeholder'>Placeholder for items</div>
          <div className='placeholder'>Placeholder for items</div>
          <div className='placeholder'>Placeholder for items</div>
          <div className='placeholder'>Placeholder for items</div>
        </div>
      </>
    ); // placeholers will be replaced with actual contents and react code later.
}