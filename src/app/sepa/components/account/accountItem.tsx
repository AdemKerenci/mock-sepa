import type { AccountInfo } from "@/data/types";

type AccountItemProps = {
  accountInfo: AccountInfo;
};

export default function AccountItemComponent({
  accountInfo,
}: AccountItemProps) {
  const {
    name,
    IBAN,
    balances: {
      available: { value, currency },
    },
  } = accountInfo;
  return (
    <div className="flex justify-between gap-x-6 py-2 px-5">
      <div className="flex min-w-0 gap-x-4">
        <div className="min-w-0">
          <p className="text-sm font-semibold">{name}</p>
          <p className="mt-1 truncate font-normal text-xs">{IBAN}</p>
        </div>
      </div>
      <div className="flex min-w-0 gap-x-4">
        <div className="min-w-0">
          <p className="text-sm font-semibold">
            {value} {currency}
          </p>
        </div>
      </div>
    </div>
  );
}

export type AccountItemComponentType = typeof AccountItemComponent;
