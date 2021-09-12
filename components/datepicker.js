
import {SelectorIcon } from '@heroicons/react/solid'

export default function DatePicker() {

    return (
      <div>
        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
          Date
        </label>
        <div className="relative rounded-md shadow-sm">
          <input
            type="date"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 pr-12 sm:text-sm border-gray-300 rounded-md"
            placeholder="0.00"
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
          </div>
        </div>
      </div>
    )
  }