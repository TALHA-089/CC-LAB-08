import { NextRequest, NextResponse } from "next/server";

const data: Record<string, object> = {
  "01-131232-089": { name: "Talha Naveed", lab: 8 },
  "01-131232-013": { name: "Arham Jan", lab: 8 }
};

// We explicitly type request as NextRequest and params as a Promise
export async function GET(
  request: NextRequest, 
  { params }: { params: Promise<{ id: string }> }
) {
  // We must await the params before extracting the id
  const resolvedParams = await params;
  const student = data[resolvedParams.id];
  
  if (!student) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(student);
}