import "./App.css";

import { ThemeProvider } from "styled-components";
import AppRouter from "./router/AppRouter";

const style = {
  colors: {
    header: "#042940",
    body: "#005C53",
    text: "#D6D58E",
  },
  margins: {},
  responsive: "724px",
};

function App() {
  return (
    <div>
      <AppRouter />
    </div>
  );
}

export default App;
