import Builder from './pages/builder';
import Render from './pages/render';
import { BrowserRouter, Routes ,Route } from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Builder} />
        </Routes>
        <Routes>
          <Route path="/render" Component={Render} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
