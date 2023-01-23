import { useRef, useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Button from "./components/Button";
import Image from "./components/Image";

function App() {
  function clickedButton() {
    const value = inputValuesRef.current.value;
    setSearchValue(value);
  }

  const inputValuesRef = useRef();

  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center">
        <form
          className="mb-8 flex flex-col items-center gap-y-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <Input referenceName={inputValuesRef} />
          <Button clickedButton={clickedButton} />
          <Image searchValue={searchValue} />
        </form>
      </main>
    </>
  );
}

export default App;
