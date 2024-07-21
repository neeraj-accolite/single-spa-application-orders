import { BrowserRouter, Route,Routes } from "react-router-dom";
import Orders from './pages/orders';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/orders/:id"  Component={Orders} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
