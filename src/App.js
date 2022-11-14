import "./App.css";

import { ThemeProvider } from "styled-components";
import AppRouter from "./router/AppRouter";
import Nav from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { ToastContainer } from "react-toastify";

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
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
