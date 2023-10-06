import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes,Route, Navigate } from 'react-router-dom';
import { checkUserSession } from "./redux/user/user.actions";


//hoc

//layout
//import MainLayout from "./layouts/MainLayout";
import HomePageLayout from "./layouts/HomepageLayout";

//pages
//import Header from "./components/Header";
import './default.scss';
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import AboutUs from "./pages/Aboutus";
import Dashboard from "./pages/Dashboard";
import Registration from "./pages/Registration";
import Recovery from "./pages/Recovery";


const ProtectedDashboard = () => (
  <withAuth>
    <Dashboard />
  </withAuth>
);

const App =props =>{
  const dispatch=useDispatch();
  const currentUser = useSelector(state => state.user.currentUser);

  useEffect(()=>{
    dispatch(checkUserSession());
    
  },[]);


    return (
      <div className="App">
        <HomePageLayout currentUser={currentUser}>
          <Routes>
            <Route exact path="/" element={<Homepage/>}/>
            


            <Route
              path="/registration"
              element={
                currentUser ? (
                  <Navigate to="/" /> // Redirect to another route if currentUser is authenticated
                ) : (
                  <Registration />
                )
              }
            />

            <Route
              path="/login"
              element={
                currentUser ? (
                  <Navigate to="/" /> // Redirect to another route if currentUser is authenticated
                ) : (
                  <Login />
                )
              }
            />

            <Route path="/aboutus" element={<AboutUs/>}/>
            <Route path="/recovery" element={<Recovery/>}/>
            <Route path="/dashboard" element={<ProtectedDashboard/>}/>
          </Routes>
        </HomePageLayout>
      </div>
    );
  }



export default App;