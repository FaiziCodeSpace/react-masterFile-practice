import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router';
import "./components/css/style.css"

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>     
    <App />
  </BrowserRouter>
)
