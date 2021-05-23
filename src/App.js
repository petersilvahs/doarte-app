import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//CSS global files
import { AppBody } from "./styles/App.styles";
import "./styles/global.css";

//Auth

//import { AuthProvider } from "./contexts/AuthContext";

//Components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MainContent from "./components/mainContent/MainContent";
import AdForm from "./components/adForm/AdForm";
import FloatingDiv from "./components/floatingDiv/FloatingDiv";
import ProductDashboard from "./components/productDashboard/ProductDashboard";
import UserProfile from "./components/userProfile/UserProfile";
import UpdateForm from "./components/updateForm/UpdateForm";

function App() {
  return (
   // <AuthProvider>
      <Router>
        <AppBody>
          <Header />

          <Switch>
            <Route exact path="/">
              <MainContent />
              <FloatingDiv />
            </Route>

            <Route path="/signIn">
              <AdForm />
            </Route>

            <Route path="/signUp">
              <AdForm signUp={true} />
            </Route>

            <Route path="/fundraisings">
              <ProductDashboard />
            </Route>

            <Route path="/profile">
              <UserProfile />
            </Route>

            <Route path="/updateUser">
                <UpdateForm/>
            </Route>
          </Switch>

          <Footer />
        </AppBody>
      </Router>
  //  </AuthProvider>
  );
}

export default App;
