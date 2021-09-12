import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen min-w-full bg-gray-100 
        flex flex-col justify-center p-10">
          <div className="relative w-full max-w-full 
            lg:max-w-6xl xl:max-w-screen-2xl mx-auto">
              <div className="absolute inset-0 -mr-3.5 bg-gradient-to-r 
                from-red-100 to-purple-500 shadow-lg transform 
                -skew-y-6 sm:skew-y-0 sm:rotate-3 sm:rounded-3xl"></div>
              <div className="relative bg-white shadow-lg sm:rounded-3xl">

                <div className="flex items-center justify-start pt-6 pl-6">
                  <span className="w-3 h-3 
                    bg-red-400 rounded-full mr-2"></span>
                  <span className="w-3 h-3 
                    bg-yellow-400 rounded-full mr-2"></span>
                  <span className="w-3 h-3 
                    bg-green-400 rounded-full mr-2"></span>
                </div>
                
                <div className="px-20 py-6">
                  
                  {/* <!-- nav --> */}
                  <div className="flex flex-col 
                    sm:flex-row items-center justify-between">
                      <div className="flex items-center justify-center">
                        <div className="flex items-center justify-center 
                          text-3xl font-bold text-true-gray-800">
                            <svg className="w-10 h-10 mr-1 text-blue-700" 
                              fill="none" stroke="currentColor" 
                              viewBox="0 0 24 24" 
                              xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" 
                                  strokeLinejoin="round" strokeWidth="2" 
                                  d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 
                                    10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656
                                    7.343A7.975 7.975 0 0120 13a7.975 7.975 0 
                                    01-2.343 5.657z"></path>
                                <path strokeLinecap="round" 
                                  strokeLinejoin="round" strokeWidth="2" 
                                  d="M9.879 16.121A3 3 0 1012.015 11L11 
                                    14H9c0 .768.293 1.536.879 2.121z"></path>
                            </svg>
                            NutriMood
                        </div> 
                      </div>
                      <div className="my-4 sm:my-0 
                        md:flex items-center justify-center">
                          <Link href="/login">
                            <a>
                              <span href="#" className="mr-5 
                                text-lg font-medium text-true-gray-800 
                                hover:text-cool-gray-700 
                                transition duration-150 ease-in-out">
                                  Login
                              </span>
                            </a>
                          </Link>
                          <Link href="/signup">
                            <a>
                              <button className="px-6 py-3 rounded-3xl 
                                font-medium bg-gradient-to-b from-gray-900 
                                to-black text-white outline-none 
                                focus:outline-none hover:shadow-md 
                                hover:from-true-gray-900 
                                transition duration-200 ease-in-out">
                                  Sign Up
                              </button>
                            </a>
                          </Link>
                      </div>
                  </div>
                  {/* <!-- /nav --> */}

                  {/* <!-- hero section --> */}
                  <div className="lg:2/6 xl:w-2/4 mt-20 
                    lg:mt-40 lg:ml-16 text-left">
                      <div className="text-5xl text-center sm:text-6xl 
                        sm:text-left font-semibold text-gray-900 leading-none">
                          Correlate your eating habits with your mood
                      </div>
                      <div className="mt-6 text-xl text-center sm:text-left 
                        font-light text-true-gray-500 antialiased">
                          Do you tend to feel better when you eat healthy? 
                          <br/> Find out with NutriMood.
                      </div>
                      <Link href="/signup">
                        <a className="flex justify-center sm:justify-start">
                          <button className="mt-6 px-8 py-4 rounded-full 
                            font-normal tracking-wide bg-gradient-to-b 
                            from-blue-600 to-blue-700 text-white outline-none 
                            focus:outline-none hover:shadow-lg 
                            hover:from-blue-700 transition 
                            duration-200 ease-in-out">
                              Get Started
                          </button>
                        </a>
                      </Link>
                  </div>
                  <div className="mt-12 lg:mt-32 lg:ml-20 text-left">
                    <bottom className="flex items-center justify-center w-12 
                      h-12 rounded-full bg-cool-gray-100 text-gray-800 
                      animate-bounce hover:text-gray-900 hover:bg-cool-gray-50 
                      transition duration-300 ease-in-out cursor-pointer">

                    </bottom>
                  </div>

                  {/* <!-- /hero section --> */}

                </div>
              </div>
          </div>
      </div>
    </div>
  )
}
