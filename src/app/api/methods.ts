import type { NextRequest } from "next/server";
import accounts from "@/data/accounts.json";
import { searchParamsSchema, sepaRequestSchema } from "./methods.types";

export async function handleSepaTransfer(request: NextRequest) {
  try {
    const requestBody = await request.json();
    const parsedRB = sepaRequestSchema.parse(requestBody);
    console.log(parsedRB);
    return Response.json("OK");
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

export async function getAccounts(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const { minBalance, maxBalance, country, pageSize, pageNumber } =
    searchParamsSchema.parse(Object.fromEntries(searchParams));

  const filteredData = accounts.data.filter(
    (acc) =>
      (minBalance ? acc.balances.available.value > minBalance : true) &&
      (maxBalance ? acc.balances.available.value < maxBalance! : true) &&
      (country ? acc.country === country : true)
  );

  const paginatedData = filteredData.slice(
    pageSize * pageNumber,
    pageSize * (pageNumber + 1)
  );

  return Response.json({
    data: paginatedData,
    pageSize,
    pageNumber,
    total: filteredData.length,
  });
}
