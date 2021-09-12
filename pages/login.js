import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react';
import { useForm } from 'react-hook-form'

export default function Home() {
  const { register, handleSubmit, 
    formState: { errors } } = useForm();

  const submitHandler = (formData) => {
    logInUser(formData)
  }

  const logInUser = async (formData) => {

    const res = await fetch('/api/user', {
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    const result = await res.json()
    console.log(JSON.stringify(result));
  }

  const [submitting, setSubmitting] = useState(false);

  return (
    <div>
      <Head>
        <title>Login | NutriMood</title>
        <meta name="description" content="Login Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid min-h-screen place-items-center">
        <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
          <h1 className="text-5xl font-bold text-center my-6">Login</h1>
          <h1 className="text-xl text-center font-semibold">
            <span className="m-0">Hello again 👋
              <span className="font-normal">!</span> </span>
            <span className="font-normal">
              Please log in.
            </span>
          </h1>

          <form className="mt-6" onSubmit={
            handleSubmit((formData) => {
              setSubmitting(true)
              submitHandler(formData)
              setSubmitting(false)
            })
          }>
               
            {/* Username */}
            <label htmlFor="username" 
              className="block 
                mt-2 text-xs font-semibold text-gray-600 uppercase">
                  Last Name
            </label>
            <input id="username" type="text" name="username" 
              placeholder="Doe" autoComplete="last-name" 
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 
                appearance-none focus:outline-none focus:bg-gray-300 
                focus:shadow-inner" 
              {...register("username", {required: "required"})} />
            {errors?.username ? 
              <div className="text-red-500 text-xs my-1">
                {errors?.username.message}</div> : null}
            
            
            {/* Password */}
            <label htmlFor="password" 
              className="block 
                mt-2 text-xs font-semibold text-gray-600 uppercase">
                  Password
            </label>
            <input id="password" type="password" name="password" 
              placeholder="********" autoComplete="new-password" 
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 
                appearance-none focus:outline-none focus:bg-gray-300 
                focus:shadow-inner" 
              {...register("password", {required: "required"})} />
            {errors?.password ? 
              <div className="text-red-500 text-xs my-1">
                {errors?.password.message}</div> : null}
            
            {/* Login Button */}
            <button type="submit" className="w-full py-3 mt-6 font-medium 
              tracking-widest text-white uppercase bg-black shadow-lg 
              focus:outline-none hover:bg-gray-900 hover:shadow-none"
              disabled={submitting} >
                Login
            </button>

            {/* Don't have an account? */}
            <p className="flex flex-start">
              <span className="flex justify-between inline-block mt-4 
                text-xs text-gray-500 m-1">
                  Don't have an account?
              </span> 
              <Link href="/signup">
                <a>
                  <span className="flex justify-between inline-block mt-4 
                    text-xs text-gray-500 cursor-pointer hover:text-black"> 
                      Sign Up
                  </span>
                </a>
              </Link>
            </p>
            
          </form>

        </div>
      </div>
    </div>
  )
}
