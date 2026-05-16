import { useState } from "react";
import API from "../api/scamApi";

function ImageScan() {

    const [file, setFile] = useState(null);
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleUpload = async () => {

        if (!file) {

            alert("Please select an image");
            return;
        }

        const formData = new FormData();

        formData.append("file", file);

        try {

            setLoading(true);
            setResult(null);

            const response = await API.post(
                "/scan-image",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }
            );

            console.log(response.data);

            setResult(response.data);

        } catch (error) {

            console.error(error);

            alert(
                error.response?.data?.message ||
                "Image Scan Failed"
            );

        } finally {

            setLoading(false);
        }
    };

    return (

        <div className="min-h-screen bg-black text-white flex flex-col items-center p-10">

            <h1 className="text-5xl font-bold text-blue-500 mb-8">
                Image Scam Scanner
            </h1>

            <div className="bg-gray-900 border border-gray-700 p-10 rounded-3xl w-full max-w-2xl flex flex-col items-center shadow-2xl">

                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setFile(e.target.files[0])}
                    className="mb-6 text-lg"
                />

                <button
                    onClick={handleUpload}
                    disabled={loading}
                    className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-xl text-xl font-bold disabled:bg-gray-600"
                >

                    {loading ? "Analyzing..." : "Scan Image"}

                </button>

                {loading && (

                    <div className="mt-6 text-yellow-400 text-xl animate-pulse">
                        AI is analyzing the image...
                    </div>

                )}

            </div>

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

                            {result.scam ? "SCAM DETECTED" : "SAFE"}

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

export default ImageScan;