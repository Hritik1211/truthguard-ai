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
    <div>
      <h1>URL Scam Scanner</h1>

      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL"
      />

      <button onClick={handleScan}>
        Scan URL
      </button>

      {result && (
        <div>
          <h2>{result.scam ? "SCAM DETECTED" : "SAFE"}</h2>
        </div>
      )}
    </div>
  );
}

export default UrlScanner;