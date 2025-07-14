import { Navigate, Route, Routes } from "react-router";
import NavManu from "./navManu";
import Business from "./business";
import Details from "./details";
import College from "./college";
import Navbar from "./navbar";
import FruitList from "./fruitList";
import FruitDetails from "./fruitDetails";


export default function Routers() {
  return (
    <>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/home" element={<h1>HOME</h1>} />
          <Route path="/study" element={<h1>STUDY</h1>} />

          {/* Define two routes for FruitList */}
          <Route path="/fruits/list?" element={<FruitList />} />
          <Route path="/fruits/:id/:name?" element={<FruitDetails />} />

          <Route path="/us">
            <Route path="/us/contact" element={<h1>CONTACT US</h1>} /> {/* Corrected relative path */}
            <Route path="/us/about" element={<h1>ABOUT US</h1>} />   {/* Corrected relative path */}
          </Route>
          <Route path="/*" element={<Navigate to={"/home"} />} />
        </Route>


        <Route path="/manu" element={<NavManu />}>
          <Route index element={<Business />} />
          <Route path="business" element={<Business />} />
          <Route path="college" element={<College />} />
          <Route path="details" element={<Details />} />
        </Route>

      </Routes>
    </>
  );
}