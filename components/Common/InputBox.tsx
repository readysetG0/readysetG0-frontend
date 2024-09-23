'use client'

import { InputBoxProps } from "../CommonProps/InputBoxProps"

export default function InputBox({title}: InputBoxProps){
    return(
        <>
            <div>
                <label htmlFor="travel-place" className="block text-sm font-semibold leading-6 text-gray-900">{title}</label>
                <div className="mt-2.5">
                <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
            </div>

            {/* <div>
                <div className="flex items-center justify-between">
                <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900"></label>
                <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                </div>
                </div>
                <div className="mt-2">
                <input id="" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
            </div> */}
        </>
    )
}