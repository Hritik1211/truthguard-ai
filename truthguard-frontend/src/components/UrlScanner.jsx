import { useState } from "react";
import API from "../api/scamApi";

function UrlScanner() {

    const [url, setUrl] = useState("");
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleScan = async () => {

        if (!url.trim()) {
            alert("Please enter a URL");
            return;
        }

        try {

            setLoading(true);

            const response = await API.post(
                "/scan-url",
                url,
                {
                    headers: {
                        "Content-Type": "text/plain"
                    }
                }
            );

            setResult(response.data);

        } catch (error) {

            console.error(error);

            alert("URL Scan Failed");

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

            {result && (

                <div className="mt-10 bg-gray-900 p-8 rounded-3xl w-full max-w-3xl">

                    <h2 className="text-3xl font-bold mb-6">
                        Scan Result
                    </h2>

                    <div className="text-2xl mb-4">

                        {result.scam
                            ? "🚨 Scam Detected"
                            : "✅ Safe URL"}

                    </div>

                    <div className="text-xl">
                        Risk Score: {result.risk}%
                    </div>

                    <div className="text-xl mt-3">
                        Category: {result.category}
                    </div>

                </div>

            )}

        </div>

    );
}

export default UrlScanner;