// src/App.tsx
import {BrowserRouter, Route, Routes } from "react-router-dom"
// import ContactForm from "../src/components/contact";
import { Home } from "../src/pages/Home"
import { NotFound } from "../src/pages/NotFound"
function App() {
  return (
    <>
      <BrowserRouter>
       <Routes>
        <Route index element={<Home/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
    {/* <div>
      <ContactForm />
    </div> */}
    </>
  );
}

export default App;
