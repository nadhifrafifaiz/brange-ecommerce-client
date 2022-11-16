import BaseTextInput from "./components/atom/BaseTextInput";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import { useState } from "react";

function App() {
  const [test, setTest] = useState("s");
  return (
    <div className="m-4">
      <p>{test}</p>
      <BaseTextInput
        value={test}
        onChange={(e) => setTest(e.target.value)}
        label="Name"
        placeholder="Input your name"
        error={true}
        errorMessage="Im error"
      />
      <BaseTextInput
        label="Email"
        placeholder="Input your email"
        error={false}
        errorMessage="Im error"
      />
    </div>
  );
}

export default App;
