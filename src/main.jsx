import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { storage } from "./firebase";

// Liga a função de armazenamento (que fala com o Firebase) ao "window.storage"
// que o App.jsx usa para carregar e salvar os dados. Sem essa linha, o app
// não consegue se conectar ao banco de dados — é exatamente essa ligação
// que estava faltando e causava o erro "Cannot read properties of
// undefined (reading 'get')" na tela de carregamento.
window.storage = storage;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
