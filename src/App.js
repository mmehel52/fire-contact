import "./App.css";

import { ThemeProvider } from "styled-components";
import AppRouter from "./router/AppRouter";
import Nav from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const style = {
  colors: {
    header: "#042940",
    body: "#005C53",
    text: "#02bc67",
  },
  margins: {},
  responsive: "724px",
};

function App() {
  return (
    <ThemeProvider theme={style}>
      <Nav />
      <AppRouter />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
