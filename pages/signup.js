import Head from 'next/head'
import Link from 'next/link'
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form'

export default function Home() {
  const { register, handleSubmit, 
    formState: { errors }, watch } = useForm();
  
  const password = useRef({});
  password.current = watch("password", "");

  const submitHandler = (formData) => {
    registerUser(formData)
  }

  const registerUser = async (formData) => {

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
  const [usernameErrorMsg, setUsernameErrorMsg] = useState(null);

  return (
    <div>
      <Head>
        <title>Sign Up | NutriMood</title>
        <meta name="description" content="Sign Up Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid min-h-screen place-items-center">
        <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
          <h1 className="text-5xl font-bold text-center my-6">Sign up</h1>
          <h1 className="text-xl text-center font-semibold">
            <span className="m-0">Hello there 👋
              <span className="font-normal">!</span> </span>
            <span className="font-normal">
              Please fill in your info to sign up.
            </span>
          </h1>

          <form className="mt-6" onSubmit={
            handleSubmit(async (formData) => {
              setSubmitting(true);
              setUsernameErrorMsg(null);
              
              const response = await fetch('/api/user', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  first_name: formData.first_name,
                  last_name: formData.last_name,
                  username: formData.username,
                  password: formData.password,
                }),
              })
          
              const result = await response.json()
              console.log(JSON.stringify(result));

              if (result.errorMsg) {
                setUsernameErrorMsg(result.errorMsg);
              }

              setSubmitting(false)
            })
          }>

            <>
            {/* First Name */}
            <label htmlFor="first_name" 
              className="block 
                mt-2 text-xs font-semibold text-gray-600 uppercase">
                  First Name
            </label>
            <input id="first_name" type="text" name="first_name" 
              placeholder="John" autoComplete="first-name" 
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 
                appearance-none focus:outline-none focus:bg-gray-300 
                focus:shadow-inner" 
              {...register("first_name", {required: "required"})} />
            {errors?.first_name ? 
              <div className="text-red-500 text-xs my-1">
                {errors?.first_name.message}</div> : null}
            </>
            
            {/* Last Name */}
            <label htmlFor="last_name" 
              className="block 
                mt-2 text-xs font-semibold text-gray-600 uppercase">
                  Last Name
            </label>
            <input id="last_name" type="text" name="last_name" 
              placeholder="Doe" autoComplete="last-name" 
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 
                appearance-none focus:outline-none focus:bg-gray-300 
                focus:shadow-inner"  
              {...register("last_name", {required: "required"})} />
            {errors?.last_name ? 
              <div className="text-red-500 text-xs my-1">
                {errors?.last_name.message}</div> : null}
            
            {/* Username */}
            <label htmlFor="username" 
              className="block 
                mt-2 text-xs font-semibold text-gray-600 uppercase">
                  Username
            </label>
            <input id="username" type="text" name="username" 
              placeholder="john_doe" autoComplete="last-name" 
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 
                appearance-none focus:outline-none focus:bg-gray-300 
                focus:shadow-inner"  
              {...register("username", {required: "required"})} />
            {errors?.username ? 
              <div className="text-red-500 text-xs my-1">
                {errors?.username.message}</div> : null}
            {usernameErrorMsg ? 
              <div className="text-red-500 text-xs my-1">
                {usernameErrorMsg}</div> : null}
            
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
              {...register("password", {required: "required", minLength: {
                value: 6, 
                message: "password must be 6 characters or more"}})} />
            {errors?.password ? 
              <div className="text-red-500 text-xs my-1">
                {errors?.password.message}</div> : null}
            
            {/* Confirm Password */}
            <label htmlFor="password_confirm" 
              className="block 
                mt-2 text-xs font-semibold text-gray-600 uppercase">
                  Confirm password
            </label>
            <input id="password_confirm" type="password" 
              name="password_confirm" 
              placeholder="********" autoComplete="new-password" 
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 
                appearance-none focus:outline-none focus:bg-gray-300 
                focus:shadow-inner"  
              {...register("password_confirm", {required: "required",
                validate: value =>
                  value === password.current || "both passwords must match"
              })} />
            {errors?.password_confirm ? 
              <div className="text-red-500 text-xs my-1">
                {errors?.password_confirm.message}</div> : null}
            
            {/* Sign Up Button */}
            <button type="submit" className="w-full py-3 mt-6 font-medium 
              tracking-widest text-white uppercase bg-black shadow-lg 
              focus:outline-none hover:bg-gray-900 hover:shadow-none"
              disabled={submitting} >
                Sign up
            </button>

            {/* Already Registed */}
            <p className="flex flex-start">
              <span className="flex justify-between inline-block mt-4 
                text-xs text-gray-500 m-1">
                  Already registered?
              </span> 
              <Link href="/login">
                <a>
                  <span className="flex justify-between inline-block mt-4 
                    text-xs text-gray-500 cursor-pointer hover:text-black"> 
                      Log In
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
