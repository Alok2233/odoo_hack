import React from "react";
import { Routes, Route } from "react-router-dom";
import ListItem from "./pages/ListItem";
import Home from "./pages/Home";
import BrowseItems from "./pages/BrowseItems";
import UserDash from "./pages/UserDash";
import ItemDetail from "./pages/itemDetail";


function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/list" element={<ListItem />} />
         <Route path="/browse" element={<BrowseItems/>}></Route>
         <Route path="/dashboard" element={<UserDash/>}></Route>
<Route path="/detail" element={<ItemDetail />} />


      </Routes>
    </>
  );
}

export default App;