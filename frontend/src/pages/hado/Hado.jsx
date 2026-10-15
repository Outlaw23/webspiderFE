import { useState } from "react";
import "./Hado.css";

function Hado() {

    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    const translate = async () => {

        try {

            const response = await fetch(
                `${import.meta.env.VITE_API_BASE_URL}/api/translate`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        text: input
                    }),
                }
            );

            const data = await response.json();

            setOutput(data.result);

        } catch (error) {
            console.error(error);
        }
    };



    return (

        <div className="hado-container">
            <h1>Hado</h1>

            <button className="translate-btn" onClick={translate}>
                Translate to hado
            </button>

            <textarea
                className="input-box"
                placeholder="Type text..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <textarea
                className="output-box"
                value={output}
                readOnly
            />

        </div>
    );
}

export default Hado;