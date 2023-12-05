import * as yup from "yup";

const sourceAccountSchema = yup.object({
  id: yup.string().required(),
  name: yup.string().required(),
  IBAN: yup.string().required(),
  country: yup.string().required(),
  balances: yup.object({
    available: yup.object({
      value: yup.number().required(),
      currency: yup.string().required(),
    }),
  }),
});

export const formSchema = yup.object({
  sourceAccount: sourceAccountSchema.required(),
  recipientName: yup.string().required(),
  amount: yup.number().required(),
  reference: yup.string().required(),
  targetIBAN: yup.string().required(),
  targetBIC: yup.string().required(),
});

export type AccountInfo = yup.InferType<typeof sourceAccountSchema>;
export type IFormInput = yup.InferType<typeof formSchema>;

export type GetAccountResponse = {
  data: AccountInfo[];
  pageSize: number;
  pageNumber: number;
  total: number;
};
