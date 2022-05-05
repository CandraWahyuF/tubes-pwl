import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "./layout/Layout";
import Beranda from "./pages/Beranda";
import Produk from "./pages/Produk";
import Transaksi from "./pages/Transaksi";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/Produk" element={<Produk />} />
          <Route path="/Transaksi" element={<Transaksi />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
