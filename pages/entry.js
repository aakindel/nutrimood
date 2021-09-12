import Navbar from '../components/navbar'
import Link from 'next/link';
import {CheckIcon, SelectorIcon} from '@heroicons/react/solid'
import React, { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";



const  food = [
    { id: 1, name: 1 },
    { id: 2, name: 2 },
    { id: 3, name: 3 },
    { id: 4, name: 4 },
    { id: 5, name: 5 },
    { id: 6, name: 6 },
    { id: 7, name: 7 },
    { id: 8, name: 8 },
    { id: 9, name: 9 },
    { id: 10, name: 10 },
  ]

const mood = [
    { id: 1, name: 1 },
    { id: 2, name: 2 },
    { id: 3, name: 3 },
    { id: 4, name: 4 },
    { id: 5, name: 5 },
    { id: 6, name: 6 },
    { id: 7, name: 7 },
    { id: 8, name: 8 },
    { id: 9, name: 9 },
    { id: 10, name: 10 },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }



export default function Entry() {
    const [foodSelected, setFoodSelected] = useState(food[0])
    const [moodSelected, setMoodSelected] = useState(mood[0])
    const [startDate, setStartDate] = useState(new Date());

    const makeEntry = async() => {

        /*TO DO relate logged in user to entry to give correct id*/
        const entry = {
            date: startDate,
            food: foodSelected.id,
            mood: moodSelected.id,
            user_id: 123
        }

        const res = await fetch('/api/entry', {
          body: JSON.stringify(entry),
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST'
        })

        const result = await res.json()
        console.log(JSON.stringify(result));
    }

    return (
        <>
        <Navbar/>
        <div className='mt-10 flex items-center justify-center w-screen' >
          Pick A Date To Make An Entry For
        </div>
        <div className='mt-8 flex items-center justify-center w-screen' >
            {/* date picker */}
            <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                    Date
                </label>
                <div className="relative rounded-md shadow-sm">
                    <DatePicker  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 pr-12 sm:text-sm border-gray-300 rounded-md" selected={startDate} onChange={(date) => setStartDate(date)} />
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </span>
                </div>
            </div>
            {/* end date picker */}
        </div>

        <div className='mt-10 flex items-center justify-center w-screen' >
          On a Scale Of 1-10, How Healthy Did You Eat On The Selected Date?
        </div>
        <div className='mt-10 flex items-center justify-center w-screen'>
            {/* Begin Food Scale */}
            <Listbox value={foodSelected} onChange={setFoodSelected}>
                {({ open }) => (
                    <>
                    <div className='w-20'>
                    <div className="mt-1 relative">
                        <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <span className="block truncate">{foodSelected.name}</span>
                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </span>
                        </Listbox.Button>

                        <Transition
                        show={open}
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        >
                        <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-32 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                            { food.map((person) => (
                            <Listbox.Option
                                key={person.id}
                                className={({ active }) =>
                                classNames(
                                    active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                    'cursor-default select-none relative py-2 pl-3 pr-9'
                                )
                                }
                                value={person}
                            >
                                {({ foodSelected, active }) => (
                                <>
                                    <span className={classNames(foodSelected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                    {person.name}
                                    </span>

                                    {foodSelected ? (
                                    <span
                                        className={classNames(
                                        active ? 'text-white' : 'text-indigo-600',
                                        'absolute inset-y-0 right-0 flex items-center pr-4'
                                        )}
                                    >
                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                    </span>
                                    ) : null}
                                </>
                                )}
                            </Listbox.Option>
                            ))}
                        </Listbox.Options>
                        </Transition>
                    </div>
                    </div>
                    </>
                )}
                </Listbox>
            {/* End scale */}
        </div>
        <div className='mt-10 flex items-center justify-center w-screen' >
          On a Scale Of 1-10, Rate Your Well-being On The Selected Date
        </div>
        <div className='mt-10 flex items-center justify-center w-screen'>
            {/* Begin Mood Scale */}
            <Listbox value={moodSelected} onChange={setMoodSelected}>
                {({ open }) => (
                    <>
                    <div className='w-20'>
                    <div className="mt-1 relative">
                        <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <span className="block truncate">{moodSelected.name}</span>
                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </span>
                        </Listbox.Button>

                        <Transition
                        show={open}
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        >
                        <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-32 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                            { food.map((person) => (
                            <Listbox.Option
                                key={person.id}
                                className={({ active }) =>
                                classNames(
                                    active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                    'cursor-default select-none relative py-2 pl-3 pr-9'
                                )
                                }
                                value={person}
                            >
                                {({ moodSelected, active }) => (
                                <>
                                    <span className={classNames(moodSelected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                    {person.name}
                                    </span>

                                    {moodSelected ? (
                                    <span
                                        className={classNames(
                                        active ? 'text-white' : 'text-indigo-600',
                                        'absolute inset-y-0 right-0 flex items-center pr-4'
                                        )}
                                    >
                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                    </span>
                                    ) : null}
                                </>
                                )}
                            </Listbox.Option>
                            ))}
                        </Listbox.Options>
                        </Transition>
                    </div>
                    </div>
                    </>
                )}
                </Listbox>
            {/* End scale */}
        </div>
        <div className='mt-10 flex items-center justify-center w-screen' >
            <Link href={'/dashboard'} passHref>
            <button
                type="button"
                className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={makeEntry()}
            >
                Submit
            </button>
            </Link>
        </div>
    </>
    )
}
