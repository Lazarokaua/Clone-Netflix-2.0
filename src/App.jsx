import React from "react";
import './index.css'
import logo from './assets/logo.png'

import { NavBar } from "./components/NavBar/NavBar";
import { MenuProfiles } from "./components/MenuProfiles/MenuProfiles";

export function App() {
  return (
    <main className="min-h-screen bg-black">
      <NavBar logo={logo}/>
      <MenuProfiles 
      title='Kim izliyor?'
      button='PROFİLLERİ YÖNET'
      />
    </main>
  );
}
