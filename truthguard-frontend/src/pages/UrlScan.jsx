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
                        "Content-Type": "text/plain",
                    },
                }
            );

            setResult(response.data);

        } catch (error) {

            console.error(error);

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
                    className="bg-red-700 hover:bg-red-800 px-10 rounded-2xl text-2xl font-bold"
                >
                    Scan URL
                </button>

            </div>

            {result && (

                <div className="mt-16 bg-gray-900 border border-gray-800 rounded-3xl p-10">

                    <div className="flex items-center justify-between">

                        <h2 className="text-5xl font-bold">
                            Scan Result
                        </h2>

                        <div className="bg-red-700 px-8 py-3 rounded-full text-3xl font-bold">

                            {result.scam ? "SCAM DETECTED" : "SAFE"}

                        </div>

                    </div>

                    <div className="grid grid-cols-2 gap-10 mt-10">

                        <div className="bg-black rounded-3xl p-8">

                            <p className="text-gray-400 text-2xl">
                                Risk Score
                            </p>

                            <h1 className="text-8xl font-bold text-red-400 mt-5">
                                {result.risk}%
                            </h1>

                        </div>

                        <div className="bg-black rounded-3xl p-8">

                            <p className="text-gray-400 text-2xl">
                                Scam Category
                            </p>

                            <h1 className="text-5xl font-bold text-red-300 mt-5">
                                {result.category}
                            </h1>

                        </div>

                    </div>

                    <div className="mt-12">

                        <h3 className="text-5xl font-bold mb-8">
                            Threat Indicators
                        </h3>

                        <div className="space-y-5">

                            {result.reason.map((item, index) => (

                                <div
                                    key={index}
                                    className="bg-black border border-gray-800 rounded-2xl p-5 text-3xl"
                                >
                                    ⚠️ {item}
                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            )}

        </div>

    );
}

export default UrlScanner;