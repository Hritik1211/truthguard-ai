import { useState } from "react";
import API from "../api/scamApi";

function UrlScanner() {

    const [url, setUrl] = useState("");
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleScan = async () => {

        if (!url.trim()) {

            alert("Please enter a URL");

            return;
        }

        try {

            setLoading(true);
            setResult(null);
            setErrorMessage("");

            const response = await API.post(
                "/scan-url",
                url,
                {
                    headers: {
                        "Content-Type": "text/plain"
                    }
                }
            );

            console.log(response.data);

            setResult(response.data);

        } catch (error) {

            console.error(error);

            setErrorMessage(
                error.response?.data ||
                "URL Scan Failed"
            );

        } finally {

            setLoading(false);
        }
    };

    return (

        <div className="min-h-screen bg-black text-white flex flex-col items-center p-10">

            <h1 className="text-5xl font-bold text-red-500 mb-8">
                URL Scam Scanner
            </h1>

            <input
                type="text"
                placeholder="Enter suspicious URL..."
                className="w-full max-w-3xl p-5 rounded-xl bg-gray-900 border border-gray-700 text-lg"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
            />

            <button
                onClick={handleScan}
                disabled={loading}
                className="mt-6 bg-red-500 hover:bg-red-600 px-8 py-3 rounded-xl text-xl font-bold disabled:bg-gray-600"
            >

                {loading ? "Analyzing..." : "Scan URL"}

            </button>

            {loading && (

                <div className="mt-6 text-yellow-400 text-xl animate-pulse">
                    AI is analyzing the URL...
                </div>

            )}

            {errorMessage && (

                <div className="mt-6 text-red-500 text-xl">
                    {errorMessage}
                </div>

            )}

            {result && (

                <div className="mt-10 bg-gray-900 border border-gray-700 p-8 rounded-3xl w-full max-w-3xl shadow-2xl">

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

                            {result.scam
                                ? "SCAM DETECTED"
                                : "SAFE"}

                        </div>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

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

                            {result.reason?.map((item, index) => (

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

export default EmailScan;
