import { useState } from "react";
import API from "../api/scamApi";

function EmailScan() {

    const [emailText, setEmailText] = useState("");
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleScan = async () => {

        if (!emailText.trim()) {
            alert("Please enter an email");
            return;
        }

        try {

            setLoading(true);
            setResult(null);

            const response = await API.post(
                "/scan-email",
                emailText,
                {
                    headers: {
                        "Content-Type": "text/plain"
                    }
                }
            );

            setResult(response.data);

        } catch (error) {

            console.error(error);

            alert("Email Scan Failed");

        } finally {

            setLoading(false);
        }
    };

    return (

        <div className="min-h-screen bg-black text-white flex flex-col items-center p-10">

            <h1 className="text-5xl font-bold text-red-500 mb-8">
                Email Scam Scanner
            </h1>

            <textarea
                placeholder="Paste suspicious email here..."
                className="w-full max-w-3xl h-64 p-5 rounded-xl bg-gray-900 border border-gray-700 text-lg"
                value={emailText}
                onChange={(e) => setEmailText(e.target.value)}
            />

            <button
                onClick={handleScan}
                disabled={loading}
                className="mt-6 bg-red-500 hover:bg-red-600 px-8 py-3 rounded-xl text-xl font-bold"
            >

                {loading ? "Analyzing..." : "Scan Email"}

            </button>

            {result && (

                <div className="mt-10 bg-gray-900 border border-gray-700 p-8 rounded-3xl w-full max-w-3xl">

                    <h2 className="text-3xl font-bold mb-6">
                        Scan Result
                    </h2>

                    <div className="mb-4">

                        <span
                            className={`px-5 py-2 rounded-full font-bold ${
                                result.scam
                                    ? "bg-red-500"
                                    : "bg-green-500"
                            }`}
                        >

                            {result.scam
                                ? "SCAM DETECTED"
                                : "SAFE"}

                        </span>

                    </div>

                    <div className="mt-6">

                        <p className="text-gray-400">
                            Risk Score
                        </p>

                        <h1 className="text-5xl font-bold text-red-400">
                            {result.risk}%
                        </h1>

                    </div>

                    <div className="mt-6">

                        <p className="text-gray-400">
                            Scam Category
                        </p>

                        <h1 className="text-3xl font-bold text-yellow-400">
                            {result.category}
                        </h1>

                    </div>

                    <div className="mt-8">

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