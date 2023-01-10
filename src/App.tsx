import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

import { Home } from "./pages/Home";
import GlobalStyled from "./styles/global";

const App = () => {
  return (
    <>
      <GlobalStyled />
      <ParallaxProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ParallaxProvider>
    </>
  );
};

export default App;
