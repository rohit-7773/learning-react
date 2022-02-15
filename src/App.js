import React from "react";
import reactLogo from "./react-logo.png";

function Header() {
  return (
    <header>
      <nav>
        <img src={reactLogo} width="60px" alt="react logo" />
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <small>copyright 2022 rohit developments.</small>
  )
}

function MainContent() {
  return (
    <div>
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
  </div>
  )
}

function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}


export default Page;