import { NextResponse } from "next/server";

const data: Record<string, object> = {
  "001": { name: "Talha Naveed", lab: 8 },
  "002": { name: "Arham Jan", lab: 8 }
};

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const student = data[params.id];
  if (!student) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(student);
}