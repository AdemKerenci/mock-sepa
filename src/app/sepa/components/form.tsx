"use client";

import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AccountInfo, IFormInput, formSchema } from "@/data/types";
import Account from "./account/account";
import Amount from "./amount";
import TextInput from "./textInput";

export default function FormComponent({ data }: { data: AccountInfo[] }) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      sourceAccount: data[0],
    },
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const { sourceAccount, amount, ...formData } = data;
    const body = {
      accountId: sourceAccount.id,
      amount: Number(amount),
      ...formData,
    };

    return fetch("api/sepa", {
      method: "POST",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(body),
    }).then((value) => value);
  };

  return (
    <form className="w-1/2 mx-auto" onSubmit={handleSubmit(onSubmit)}>
      <div className="border-b border-gray-900/10 pb-12 pt-12">
        <h2 className="text-base font-bold leading-5 text-gray-900">
          SEPA TRANSFER
        </h2>

        <div className="mt-10 grid gap-x-6 gap-y-8 sm:grid-cols-6">
          <Controller
            name="sourceAccount"
            control={control}
            render={({ field }) => (
              <Account
                {...field}
                data={data}
                label="Source Account"
                className="sm:col-span-4"
              />
            )}
          />
          <Amount
            register={register}
            id="amount"
            label="Amount"
            className="sm:col-span-4"
            error={errors.amount}
          />

          <TextInput
            id="recipientName"
            label="Recipient Name"
            register={register}
            className="sm:col-span-4"
            error={errors.recipientName}
          />

          <TextInput
            id="reference"
            label="Reference"
            register={register}
            className="sm:col-span-4"
            error={errors.reference}
          />

          <TextInput
            id="targetIBAN"
            label="Target Iban"
            register={register}
            className="sm:col-span-3"
            error={errors.targetIBAN}
          />

          <TextInput
            id="targetBIC"
            label="Target BIC"
            register={register}
            className="sm:col-span-3"
            error={errors.targetBIC}
          />
        </div>
      </div>

      <div className="mt-6 flex justify-start">
        <button
          type="submit"
          className="w-1/5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Transfer
        </button>
      </div>
    </form>
  );
}
