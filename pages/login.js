import Head from 'next/head'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

export default function Home() {
  const { register, handleSubmit } = useForm();

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

  return (
    <div>
      <Head>
        <title>Login | NutriMood</title>
        <meta name="description" content="Login Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid min-h-screen place-items-center">
        <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
          <h1 className="text-xl font-semibold">
            Hello again 👋, 
            <span className="font-normal">
              please log in
            </span>
          </h1>

          <form className="mt-6" onSubmit={handleSubmit((formData) => {
              submitHandler(formData)
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
            
            {/* Login Button */}
            <button type="submit" className="w-full py-3 mt-6 font-medium 
              tracking-widest text-white uppercase bg-black shadow-lg 
              focus:outline-none hover:bg-gray-900 hover:shadow-none">
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
