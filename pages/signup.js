import Head from 'next/head'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

export default function Home() {
  const { register, handleSubmit } = useForm();

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

  return (
    <div>
      <Head>
        <title>Sign Up | NutriMood</title>
        <meta name="description" content="Sign Up Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid min-h-screen place-items-center">
        <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
          <h1 className="text-xl font-semibold">
            Hello there 👋, 
            <span className="font-normal">
              please fill in your information to continue
            </span>
          </h1>

          <form className="mt-6" onSubmit={handleSubmit((formData) => {
              submitHandler(formData)
            })
          }>

            {/* First Name */}
            <label htmlFor="firstname" 
              className="block 
                mt-2 text-xs font-semibold text-gray-600 uppercase">
                  First Name
            </label>
            <input id="firstname" type="text" name="firstname" 
              placeholder="John" autoComplete="first-name" 
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 
                appearance-none focus:outline-none focus:bg-gray-300 
                focus:shadow-inner" required 
              {...register("firstname")} />
            
            {/* Last Name */}
            <label htmlFor="lastname" 
              className="block 
                mt-2 text-xs font-semibold text-gray-600 uppercase">
                  Last Name
            </label>
            <input id="lastname" type="text" name="lastname" 
              placeholder="Doe" autoComplete="last-name" 
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 
                appearance-none focus:outline-none focus:bg-gray-300 
                focus:shadow-inner" required 
              {...register("lastname")} />
            
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
                focus:shadow-inner" required 
              {...register("username")} />
            
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
                focus:shadow-inner" required 
              {...register("password")} />
            
            {/* Confirm Password */}
            <label htmlFor="password-confirm" 
              className="block 
                mt-2 text-xs font-semibold text-gray-600 uppercase">
                  Confirm password
            </label>
            <input id="password-confirm" type="password" 
              name="password-confirm" 
              placeholder="********" autoComplete="new-password" 
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 
                appearance-none focus:outline-none focus:bg-gray-300 
                focus:shadow-inner" required 
              {...register("password-confirm")} />
            
            {/* Sign Up Button */}
            <button type="submit" className="w-full py-3 mt-6 font-medium 
              tracking-widest text-white uppercase bg-black shadow-lg 
              focus:outline-none hover:bg-gray-900 hover:shadow-none">
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
