import { useState, useMemo } from "react";
import Call from "./components/call";

function App() {
  const [isCalling, setIsCalling] = useState(true);
  const templates = useMemo(() => {
    return {};
  }, []);

  return (
    <>
      <h1 className="text-4xl font-bold text-center py-2">Fake Caller</h1>
      <div className="grid-cols-2"></div>
      <Call
        name="Name"
        icon="https://avatars.githubusercontent.com/u/102061951?v=4&size=64"
        isCalling={isCalling}
        onRejectCall={() => setIsCalling(false)}
      />
    </>
  );
}

export default App;
