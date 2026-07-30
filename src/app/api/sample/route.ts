// app/api/sample/route.ts

import { sample } from "@/services/sampel";

export async function POST() {
  const data = sample();
  return Response.json({
    message: data,
  });
}
