'use client';

import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { createProduct, ProductState } from '@/app/lib/actions';
import { useActionState } from 'react';

export default function Form() {
  const initialState: ProductState = { message: null, errors: {} };
  const [state, formAction] = useActionState(createProduct, initialState);

  return (
    <form action={formAction}>
      <div>
        {/* product name */}
        <div className="input-block">
          <label htmlFor="product_name">
            Enter Product Name
          </label>
          <div className="input-div">
            <div>
              <input
                id="product_name"
                name="product_name"
                type="text"
                placeholder="Product Name"
                aria-describedby="product_name-error"
              />
            </div>
          </div>
          <div id="product_name-error" className='error-block' aria-live="polite" aria-atomic="true">
            {state.errors?.product_name &&
              state.errors.product_name.map((error: string) => (
                <p key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>    
        {/* material */}
        <div className="input-block">
          <label htmlFor="material">
            Enter Main Material The Product I Made
          </label>
          <div className="input-div">
            <div>
              <input
                id="material"
                name="material"
                type="text"
                placeholder="Material"
                aria-describedby="material-error"
              />
            </div>
          </div>
          <div id="material-error" className='error-block' aria-live="polite" aria-atomic="true">
            {state.errors?.material &&
              state.errors.material.map((error: string) => (
                <p key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        {/* price */}
        <div className="input-block">
          <label htmlFor="price">
            Enter Price
          </label>
          <div className="input-div">
            <div>
              <input
                id="price"
                name="price"
                type="number"
                step="0.01"
                placeholder="Price"
                aria-describedby="price-error"
              />
            </div>
          </div>
          <div id="price-error" className='error-block' aria-live="polite" aria-atomic="true">
            {state.errors?.price &&
              state.errors.price.map((error: string) => (
                <p key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        {/* description */}
        <div className="input-block">
          <label htmlFor="description">
            Enter Description
          </label>
          <div className="input-div">
            <div>
              <textarea
                id="description"
                name="description"
                placeholder="Description"
                aria-describedby="description-error"
                rows={4}
              />
            </div>
          </div>
          <div id="description-error" className="error-block" aria-live="polite" aria-atomic="true">
            {state.errors?.description &&
              state.errors.description.map((error: string) => (
                <p key={error}>{error}</p>
              ))}
          </div>
        </div>
        {/* image 1 */}
        <div className="input-block">
          <label htmlFor="image1">
            Enter Image URL
          </label>
          <div className="input-div">
            <div>
              <input
                id="image1"
                name="image1"
                type="text"
                placeholder="Image"
                aria-describedby="image1-error"
              />
            </div>
          </div>
          <div id="image1-error" className='error-block' aria-live="polite" aria-atomic="true">
            {state.errors?.image1 &&
              state.errors.image1.map((error: string) => (
                <p key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        {/* image 2 */}
        <div className="input-block">
          <label htmlFor="image2">
            Enter Another Image URL (Optional)
          </label>
          <div className="input-div">
            <div>
              <input
                id="image2"
                name="image2"
                type="text"
                placeholder="Image"
                aria-describedby="image2-error"
              />
            </div>
          </div>
          <div id="image1-error" className='error-block' aria-live="polite" aria-atomic="true">
            {state.errors?.image2 &&
              state.errors.image2.map((error: string) => (
                <p key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        {/* image 3 */}
        <div className="input-block">
          <label htmlFor="image3">
          Enter Another Image URL (Optional)
          </label>
          <div className="input-div">
            <div>
              <input
                id="image3"
                name="image3"
                type="text"
                placeholder="Image"
                aria-describedby="image3-error"
              />
            </div>
          </div>
          <div id="image3-error" className='error-block' aria-live="polite" aria-atomic="true">
            {state.errors?.image3 &&
              state.errors.image3.map((error: string) => (
                <p key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        {/* */}
      </div>

      <div className="buttons">
        <Button type="submit">Post Product</Button>
        <Link href="/market">Cancel</Link>
      </div>
    </form>
  );
}