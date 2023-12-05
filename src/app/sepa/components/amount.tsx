"use client";

import { FieldError, UseFormRegister } from "react-hook-form";

type AmountProps = {
  id: string;
  label: string;
  register: UseFormRegister<any>;
  className: string;
  error?: FieldError;
};

export default function AmountComponent({
  id,
  label,
  register,
  className,
  error,
}: AmountProps) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">€</span>
        </div>
        <input
          type="number"
          id={id}
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          {...register(id)}
        />
      </div>
      {error && (
        <p
          role="alert"
          className="text-sm font-medium border border-t-0 border-red-100 rounded-b bg-red-100 px-4 py-3 text-red-700"
        >
          {error.message?.replaceAll(id, label)}
        </p>
      )}
    </div>
  );
}
