import { useEffect, useState } from "react";
import axios from "axios";

function History() {

    const [history, setHistory] = useState([]);

    useEffect(() => {

        axios.get("http://localhost:8080/api/history")
            .then((res) => {

                setHistory(res.data);

            })
            .catch((err) => {

                console.log(err);

            });

    }, []);

    return (

        <div className="min-h-screen bg-black text-white p-10">

            <h1 className="text-5xl font-bold mb-10">
                Scan History
            </h1>

            <div className="space-y-6">

                {history.map((item, index) => (

                    <div
                        key={index}
                        className="bg-gray-900 p-6 rounded-2xl border border-gray-700"
                    >

                        <h2 className="text-2xl font-bold mb-2">
                            {item.category}
                        </h2>

                        <p className="text-lg">
                            Risk Score: {item.risk}%
                        </p>

                        <p className={`font-bold mt-2 ${
                            item.scam
                                ? "text-red-400"
                                : "text-green-400"
                        }`}>

                            {item.scam ? "SCAM" : "SAFE"}

                        </p>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default History;