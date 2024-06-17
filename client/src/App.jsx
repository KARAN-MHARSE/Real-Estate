import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  ErrorPage,
  SignIn,
  SignUp,
  Property,
  ContactUs,
  Profile,
  CreateListing,
  PropertyDetail,
} from "./Pages/index";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/property" element={<Property />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-listing" element={<CreateListing />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
