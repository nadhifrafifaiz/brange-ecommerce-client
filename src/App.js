import BaseTextInput from "./components/atom/BaseTextInput";

function App() {
  return (
    <div className="m-4">
      <BaseTextInput
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
