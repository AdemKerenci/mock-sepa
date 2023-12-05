import { errorWrapper } from "@/error/error";
import { getAccounts } from "../methods";

export const GET = errorWrapper(getAccounts)
