'use client';

import { Button } from './button';
import { useActionState } from 'react';
import { authenticate } from '@/app/lib/actions';
import { useSearchParams } from 'next/navigation';

export default function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <form action={formAction}>
      <div>
        <h1>
          Please log in to continue.
        </h1>
        <div>
          <div className="input-block">
            <label
              htmlFor="username"
            >
              Username
            </label>
            <div className="input-div">
              <input
                id="username"
                type="text"
                name="username"
                placeholder="Enter your username"
                required
              />
            </div>
          </div>
          <div className="input-block">
            <label
              htmlFor="password"
            >
              Password
            </label>
            <div className="input-div">
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={8}
              />
            </div>
          </div>
        </div>
        <input type="hidden" name="redirectTo" value={callbackUrl} />
        <div className="buttons">
          <Button className="mt-4 w-full" aria-disabled={isPending}>
            Log in
          </Button>
        </div>
        <div
          className="error-block"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}