/* @refresh reload */
import { render } from "solid-js/web";
import "./styles.css";
import App from "./App";

const root = document.getElementById("app");

render(() => <App />, root!);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").then(() => {
    console.log("Service Worker Registered");
  });
}
