// export async function generateWithGemini(prompt: string) {
//   const url = process.env.GEMINI_API_URL;
//   const key = process.env.GEMINI_API_KEY;

//   if (!url || !key) throw new Error("Gemini env variables missing");

//   const res = await fetch(`${url}?key=${key}`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       contents: [
//         {
//           parts: [{ text: prompt }]
//         }
//       ]
//     })
//   });

//   if (!res.ok) {
//     const t = await res.text();
//     throw new Error(`Gemini API error: ${res.status} ${t}`);
//   }

//   const data = await res.json();

//   return {
//     text: data.candidates?.[0]?.content?.parts?.[0]?.text || ""
//   };
// }
