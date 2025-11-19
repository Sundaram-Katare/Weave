// import { NextResponse } from 'next/server';
// import pdf from 'pdf-parse';

// export async function POST(req: Request) {
// try {
// const form = await req.formData();
// const file = form.get('file') as File | null;
// if (!file) return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });


// const buffer = Buffer.from(await file.arrayBuffer());
// const data = await pdf(buffer as any);
// const text = data.text || '';
// return NextResponse.json({ text });
// } catch (err: any) {
// return NextResponse.json({ error: err.message || String(err) }, { status: 500 });
// }
// }