import type { NextRequest } from "next/server";

export function errorWrapper(
  method: (request: NextRequest) => Promise<Response>
) {
  return async (request: NextRequest) => {
    try {
      return method(request);
    } catch (error) {
      return Response.json({ error }, { status: 500 });
    }
  };
}