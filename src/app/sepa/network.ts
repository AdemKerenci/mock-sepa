import { GetAccountResponse } from "@/data/types";

export async function getAccounts(): Promise<GetAccountResponse> {
    const url = new URL("/api/accounts", "http://127.0.0.1:3000");
    const response = await fetch(url);
    return response.json();
  }