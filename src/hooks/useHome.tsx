import { useEffect, useState } from "react";

export default function useHome() {
  const [keyGreeting, setKeyGreeting] = useState(0);
  const [enterSections, setEnterSections] = useState(false);
  const [error, setError] = useState(false);
  const [name, setName] = useState<string>("");
  const [nameValidate, setNameValidate] = useState(false);
  const [sendValidate, setSendValidate] = useState(false);
  const greetings = ["Bienvenido", "Welcome", "Bem-vindo"];
  const changeKey = () => {
    if (keyGreeting + 1 === greetings.length) {
      setKeyGreeting(0);
    } else {
      setKeyGreeting(keyGreeting + 1);
    }
  };
  useEffect(() => {
    const initialName = () => {
      const LocalStorageInitialName = localStorage.getItem("Guest");
      return LocalStorageInitialName ? LocalStorageInitialName : "";
    };
    if (initialName().length === 0) {
      setNameValidate(false);
    } else {
      setNameValidate(true);
    }
  }, []);
  const sendName = (name: string) => {
    if (name.length === 0) {
      setError(true);
    } else {
      localStorage.setItem("Guest", name);
      setNameValidate(true);
      setError(false);
      setEnterSections(false);
      setSendValidate(true);
    }
  };

  return {
    greetings,
    keyGreeting,
    changeKey,
    setEnterSections,
    enterSections,
    setName,
    name,
    setError,
    error,
    sendName,
    nameValidate,
    sendValidate,
  };
}
