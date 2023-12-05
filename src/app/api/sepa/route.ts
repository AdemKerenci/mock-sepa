import { errorWrapper } from "@/error/error";
import { handleSepaTransfer } from "../methods";

export const POST = errorWrapper(handleSepaTransfer)
