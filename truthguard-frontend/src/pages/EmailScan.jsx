import { useState } from "react";
import API from "../api/scamApi";

function EmailScan() {

    const [emailText, setEmailText] = useState("");
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleScan = async () => {

        if (!emailText.trim()) {

            alert("Please enter an email message");

            return;
        }

        try {

            setLoading(true);
            setResult(null);
            setErrorMessage("");

            const response = await API.post(
                "/scan-email",
                emailText,
                {
                    headers: {
                        "Content-Type": "text/plain"
                    }
                }
            );

            console.log("API RESPONSE:", response.data);

            setResult(response.data);

        } catch (error) {

            console.error("FULL ERROR:", error);

            if (error.response) {

                console.log("BACKEND ERROR:", error.response.data);

                setErrorMessage(
                    typeof error.response.data === "string"
                        ? error.response.data
                        : JSON.stringify(error.response.data)
                );

            } else if (error.request) {

                setErrorMessage(
                    "Cannot connect to backend server"
                );

            } else {

                setErrorMessage(
                    "Unexpected frontend error"
                );
            }

        } finally {

            setLoading(false);
        }
    };

    return (

        <div className="min-h-screen bg-black text-white flex flex-col items-center p-10">

            <h1 className="text-5xl font-bold text-red-500 mb-8 text-center">
                Email Scam Scanner
            </h1>

            <textarea
                placeholder="Paste suspicious email here..."
                className="w-full max-w-3xl h-64 p-5 rounded-xl bg-gray-900 border border-gray-700 text-lg outline-none focus:border-red-500"
                value={emailText}
                onChange={(e) => setEmailText(e.target.value)}
            />

            <button
                onClick={handleScan}
                disabled={loading}
                className="mt-6 bg-red-500 hover:bg-red-600 px-8 py-3 rounded-xl text-xl font-bold transition-all duration-300 disabled:bg-gray-600"
            >

                {loading ? "Analyzing..." : "Scan Email"}

            </button>

            {loading && (

                <div className="mt-6 text-yellow-400 text-xl animate-pulse">
                    AI is analyzing the email...
                </div>

            )}

            {errorMessage && (

                <div className="mt-6 bg-red-900 border border-red-500 p-5 rounded-2xl w-full max-w-3xl">

                    <h2 className="text-2xl font-bold text-red-300 mb-2">
                        Scan Failed
                    </h2>

                    <p className="text-red-100 break-words">
                        {errorMessage}
                    </p>

                </div>

            )}

            {result && (

                <div className="mt-10 bg-gray-900 border border-gray-700 p-8 rounded-3xl w-full max-w-3xl shadow-2xl">

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">

                        <h2 className="text-3xl font-bold">
                            Scan Result
                        </h2>

                        <div
                            className={`px-5 py-2 rounded-full text-lg font-bold text-center ${
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

                        <div className="bg-black p-5 rounded-2xl border border-gray-800">

                            <p className="text-gray-400">
                                Risk Score
                            </p>

                            <h1 className="text-5xl font-bold text-red-400 mt-2">
                                {result.risk}%
                            </h1>

                        </div>

                        <div className="bg-black p-5 rounded-2xl border border-gray-800">

                            <p className="text-gray-400">
                                Scam Category
                            </p>

                            <h1 className="text-3xl font-bold text-yellow-400 mt-2 break-words">
                                {result.category}
                            </h1>

                        </div>

                    </div>

                    <div>

                        <h3 className="text-2xl font-semibold mb-4">
                            Threat Indicators
                        </h3>

                        <ul className="space-y-3">

                            {Array.isArray(result.reason) &&
                                result.reason.map((item, index) => (

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