import React, { useState } from "react";

export default function useMenu() {
  const [menu, setMenu] = useState(false);
  const menuItems = [
    { name: "Home", value: "/" },
    { name: "About me", value: "/aboutMe" },
    { name: "Contact", value: "/contact" },
  ];
  return {
    menu,
    setMenu,
    menuItems,
  };
}
