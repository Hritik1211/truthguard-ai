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

            console.log(error);

            alert("URL Scan Failed");
        }
    };

    return (

        <div className="min-h-screen bg-black text-white flex flex-col items-center p-10">

            <h1 className="text-6xl font-bold mb-10">
                URL Scam Scanner
            </h1>

            <div className="flex gap-4 mb-10">

                <input
                    type="text"
                    placeholder="Enter suspicious URL..."
                    className="px-5 py-3 rounded-xl text-black w-[500px]"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />

                <button
                    onClick={handleScan}
                    className="bg-red-500 px-6 py-3 rounded-xl font-bold"
                >
                    Scan URL
                </button>

            </div>

            {result && (

                <div className="bg-gray-900 border border-gray-700 p-8 rounded-3xl w-full max-w-3xl shadow-2xl">

                    <div className="flex items-center justify-between mb-6">

                        <h2 className="text-3xl font-bold">
                            Scan Result
                        </h2>

                        <div
                            className={`px-5 py-2 rounded-full text-lg font-bold ${
                                result.scam
                                    ? "bg-red-500"
                                    : "bg-green-500"
                            }`}
                        >

                            {result.scam ? "SCAM DETECTED" : "SAFE"}

                        </div>

                    </div>

                    <div className="grid grid-cols-2 gap-6 mb-8">

                        <div className="bg-black p-5 rounded-2xl">

                            <p className="text-gray-400">
                                Risk Score
                            </p>

                            <h1 className="text-5xl font-bold text-red-400 mt-2">
                                {result.risk}%
                            </h1>

                        </div>

                        <div className="bg-black p-5 rounded-2xl">

                            <p className="text-gray-400">
                                Scam Category
                            </p>

                            <h1 className="text-3xl font-bold text-yellow-400 mt-2">
                                {result.category}
                            </h1>

                        </div>

                    </div>

                    <div>

                        <h3 className="text-2xl font-semibold mb-4">
                            Threat Indicators
                        </h3>

                        <ul className="space-y-3">

                            {result.reason.map((item, index) => (

                                <li
                                    key={index}
                                    className="bg-black border border-gray-800 px-4 py-3 rounded-xl"
                                >
                                    ⚠️ {item}
                                </li>

                            ))}

                        </ul>

                    </div>

                </div>

            )}

        </div>

    );
}

export default UrlScanner;