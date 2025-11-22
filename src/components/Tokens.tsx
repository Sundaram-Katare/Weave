"use client"

import { useEffect, useState } from "react"

export default function Tokens() {
    const [tokens, setToken] = useState(0);

    useEffect(() => {
        const fetchTokens = async () => {
            try {
                const response = await fetch('/api/getTokens');
                const data = await response.json();
                if (response.ok) {
                    setToken(data.tokens);
                } else {
                    console.error("Failed to fetch tokens:", data.error);
                }
            } catch (error) {
                console.error("Error fetching tokens:", error);
            }
        }
        fetchTokens();
    }, []);

    return (
      <>
       <div>
        <h2 className="bg-blue-200/20 p-1 font-poppins w-fit rounded-xl">{tokens} Tokens Left</h2>
       </div>
      </>
    )
}