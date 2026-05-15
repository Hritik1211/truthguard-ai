import { useState } from "react";
import axios from "axios";

function UrlScanner() {

    const [url, setUrl] = useState("");
    const [result, setResult] = useState(null);

    const handleScan = async () => {

        try {

            const response = await axios.post(
                "https://truthguard-backend-5.onrender.com/api/scan-url",
                url,
                {
                    headers: {
                        "Content-Type": "text/plain"
                    }
                }
            );

            setResult(response.data);

        } catch (error) {

            console.log(error);
            alert("URL Scan Failed");

        }
    };

    return (
        <div className="min-h-screen bg-black text-white p-10">

            <h1 className="text-6xl font-bold text-gray-300 mb-10">
                URL Scam Scanner
            </h1>

            <div className="flex gap-5">

                <input
                    type="text"
                    placeholder="Enter suspicious URL..."
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="flex-1 p-5 rounded-2xl bg-gray-300 text-black text-2xl"
                />

                <button
                    onClick={handleScan}
                    className="bg-red-700 px-10 rounded-2xl text-2xl font-bold"
                >
                    Scan URL
                </button>

            </div>

            {result && (

                <div className="mt-10">

                    <h2 className="text-3xl font-bold">
                        {result.scam ? "SCAM DETECTED" : "SAFE"}
                    </h2>

                </div>

            )}

        </div>
    );
}

export default UrlScanner;