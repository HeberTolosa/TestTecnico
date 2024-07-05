"use client";
import useMenu from "@/hooks/useMenu";
import Link from "next/link";
import { useState } from "react";

export default function Layout() {
  const { menu, setMenu, menuItems } = useMenu();

  return (
    <div className="Header__MainContainer">
      <div
        className={`Header__UserContainer ${menu ? "UserContainerActive" : ""}`}
        onClick={() => setMenu(!menu)}
      >
        <img src="/profile.jpeg" alt="" className="Header__UserImg" />
        <p className="Header__UserText">Heber Tolosa</p>
        <img
          src="/downArrow.png
        "
          alt=""
          className="Header__DownArrowICon"
        />
      </div>
      {menu ? (
        <div className="Header__MenuMainContainer">
          {menuItems.map((item) => (
            <Link href={item.value} key={item.name}>
              <div className="Header__MenuItemContainer">
                <p>{item.name}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
