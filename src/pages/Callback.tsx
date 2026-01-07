import { useEffect, useState } from "react";
import { exchangeCode, getMe } from "../services/api";

export default function Callback() {
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const codeParam = new URLSearchParams(window.location.search).get("code");

    if (typeof codeParam !== "string") {
      setError("No code found in URL");
      return;
    }

    const code = codeParam;


    async function run() {
      try {
        const tokens = await exchangeCode(code);
        const me = await getMe(tokens.access_token);
        setResult({ tokens, me });
      } catch (e: any) {
        setError(e.message);
      }
    }

    run();
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h2>Auth Callback</h2>
      {error && <pre style={{ color: "red" }}>{error}</pre>}
      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
      {!error && !result && <p>Processing authentication...</p>}
    </div>
  );
}
