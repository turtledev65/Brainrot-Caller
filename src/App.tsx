import { useState } from "react";
import Call from "./components/call";

function App() {
  const [isCalling, setIsCalling] = useState(true);

  return (
    <>
      <p className="px-4 font-bold  text-blue-500 bg-white text-3xl">
        Hello World
      </p>
      <Call
        callerName="Name"
        callerIcon="https://avatars.githubusercontent.com/u/102061951?v=4&size=64"
        isCalling={isCalling}
        onRejectCall={() => setIsCalling(false)}
      />
    </>
  );
}

export default App;
