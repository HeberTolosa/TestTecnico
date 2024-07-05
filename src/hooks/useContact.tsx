import React, { useEffect, useState } from "react";

export default function useContact() {
  const [name, setName] = useState<string>("");
  const [modal, setModal] = useState(false);
  useEffect(() => {
    const initialName = () => {
      const LocalStorageInitialName = localStorage.getItem("Guest");
      return LocalStorageInitialName ? LocalStorageInitialName : "";
    };

    setName(initialName);
  }, []);

  const sendData = () => {
    setModal(true);

    setTimeout(() => {
      setModal(false);
    }, 5000);
  };
  return {
    name,
    modal,
    sendData,
  };
}
