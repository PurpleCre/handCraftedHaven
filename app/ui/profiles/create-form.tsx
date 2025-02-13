'use client';

import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { createProfile, State } from '@/app/lib/actions';
import { useActionState } from 'react';

export default function Form() {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(createProfile, initialState);
  console.log(state)
  return (
    <form action={formAction}>
      <div>
        {/* username */}
        <div className="input-block">
          <label htmlFor="username">
            Enter Username
          </label>
          <div className="input-div">
            <div>
              <input
                id="username"
                name="username"
                type="text"
                placeholder="Username"
                aria-describedby="username-error"
              />
            </div>
          </div>
          <div id="username-error" className='error-block' aria-live="polite" aria-atomic="true">
            {state.errors?.username &&
              state.errors.username.map((error: string) => (
                <p key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* email */}
        <div className="input-block">
          <label htmlFor="email">
            Enter Email
          </label>
          <div className="input-div">
            <div>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="email"
                aria-describedby="email-error"
              />
            </div>
          </div>
          <div id="email-error" className='error-block' aria-live="polite" aria-atomic="true">
            {state.errors?.email &&
              state.errors.email.map((error: string) => (
                <p key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* password */}
        <div className="input-block">
          <label htmlFor="password_hash">
            Enter Password
          </label>
          <div className="input-div">
            <div>
              <input
                id="password_hash"
                name="password_hash"
                type="password"
                placeholder="Password"
                aria-describedby="password_hash-error"
              />
            </div>
          </div>
          <div id="password_hash-error" className='error-block' aria-live="polite" aria-atomic="true">
            {state.errors?.password_hash &&
              state.errors.password_hash.map((error: string) => (
                <p key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* Full Name */}
        <div className="input-block">
          <label htmlFor="full_name">
            Enter Fullname
          </label>
          <div className="input-div">
            <div>
              <input
                id="full_name"
                name="full_name"
                type="text"
                placeholder="Fullname"
                aria-describedby="full_name-error"
              />
            </div>
          </div>
          <div id="full_name-error" className='error-block' aria-live="polite" aria-atomic="true">
            {state.errors?.full_name &&
              state.errors.full_name.map((error: string) => (
                <p key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* User Role */}
        <fieldset>
          <legend className="mb-2 block text-sm font-medium">
            What is your role?
          </legend>
          <div className="select-block">
            <div className="selections">
              <div className="input-label">
                <input
                  id="admin"
                  name="role"
                  type="radio"
                  value="admin"
                  aria-describedby="role-error"
                />
                <label
                  htmlFor="admin"
                  className="select-label"
                >
                  Admin
                </label>
              </div>

              <div className="input-label">
                <input
                  id="seller"
                  name="role"
                  type="radio"
                  value="seller"
                  aria-describedby="role-error"
                />
                <label
                  htmlFor="seller"
                  className="select-label"
                >
                  Seller
                </label>
              </div>

              <div className="input-label">
                <input
                  id="buyer"
                  name="role"
                  type="radio"
                  value="buyer"
                  aria-describedby="role-error"
                />
                <label
                  htmlFor="buyer"
                  className="select-label"
                >
                  Buyer
                </label>
              </div>
            </div> 
          </div>
          <div id="role-error" className="error-block" aria-live="polite" aria-atomic="true">
                {state.errors?.role &&
                  state.errors.role.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                      {error}
                    </p>
                  ))}
              </div>
        </fieldset>
      </div>
      <div className="buttons">
        <Button type="submit">Create Profile</Button>
        <Link href="/market">Cancel</Link>
      </div>
    </form>
  );
}