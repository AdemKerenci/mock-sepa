"use client";

import type { AccountInfo } from "@/data/types";
import { Listbox, Transition } from "@headlessui/react";
import { type Ref, Fragment, forwardRef } from "react";
import AccountItemComponent from "./accountItem";
import ChevronDown from "./chevronDown";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export type DropdownProps = {
  value: AccountInfo;
  ref: Ref<HTMLElement>;
  onChange: any;
  label: string;
  data: AccountInfo[];
  className?: string;
};

const AccountComponent = forwardRef<HTMLElement, DropdownProps>(
  ({ className, value, label, onChange, data }, ref) => (
    <div className={className}>
      <Listbox value={value} onChange={onChange} ref={ref}>
        {({ open }) => (
          <>
            <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">
              {label}
            </Listbox.Label>
            <div className="relative mt-2">
              <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                <AccountItemComponent accountInfo={value} />
                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                  <ChevronDown />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {data.map((account) => (
                    <Listbox.Option
                      key={account.id}
                      className={({ active }) =>
                        classNames(
                          active ? "bg-indigo-600 text-white" : "text-gray-900",
                          "relative cursor-default select-none py-2 pl-3 pr-9"
                        )
                      }
                      value={account}
                    >
                      <AccountItemComponent accountInfo={account} />
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  )
);

AccountComponent.displayName = "AccountComponent"

export default AccountComponent;
