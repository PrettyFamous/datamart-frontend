import { Route, Routes } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import AuthorisationLayout from "./layouts/AuthorisationLayout";

import Login from "./components/Login";
import Registration from "./components/Registration";
import DimensionCardWrapper from "./components/CardWrapper/DimensionCardWrapper";
import FactCardWrapper from "./components/CardWrapper/FactCardWrapper";
import AddDimension from "./components/AddDimension";
import DimensionInfo from "./components/DimensionInfo";
import AddFacts from "./components/AddFacts";
import FactInfo from "./components/FactInfo";
import AllTypeWrapper from "./components/CardWrapper/AllTypeWrapper";

function App() {
  return (
    <>
      <Routes>
        <Route path="/authorisation/" element={<AuthorisationLayout />}>
          <Route path="registration" element={<Registration />} />
          <Route path="" element={<Login />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<AllTypeWrapper />} />
          <Route path="dimension" element={<DimensionCardWrapper />} />
          <Route path="dimension/:id" element={<DimensionInfo />} />
          <Route path="dimension/add-dimension" element={<AddDimension />} />
          <Route path="fact/add-fact" element={<AddFacts />} />
          <Route path="fact" element={<FactCardWrapper />} />
          <Route path="fact/:id" element={<FactInfo />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
