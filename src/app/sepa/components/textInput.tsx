import type { FieldError, UseFormRegister } from "react-hook-form";
import { IFormInput } from "@/data/types";

type TextInputProps = {
  id: keyof IFormInput;
  label: string;
  register: UseFormRegister<any>;
  className: string;
  error?: FieldError;
};

export default function TextInputComponent({
  id,
  label,
  className,
  register,
  error,
}: TextInputProps) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          type="text"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          {...register(id)}
        />
        {error && (
          <p
            role="alert"
            className="text-sm font-medium border border-t-0 border-red-100 rounded-b bg-red-100 px-4 py-3 text-red-700"
          >
            {error.message?.replaceAll(id, label)}
          </p>
        )}
      </div>
    </div>
  );
}
