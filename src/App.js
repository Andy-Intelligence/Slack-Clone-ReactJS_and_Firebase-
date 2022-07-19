import React from "react";
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "./Chat";
import Login from "./Login";
import { useStateValue } from "./StateProvider";


function App() {


  const [{user}, dispatch] = useStateValue();



  return (
    <BrowserRouter>

          <div className="app">

              {!user?(<Login/>):(<>   <Header/>
                
                <div className = "app__body">
                      <Sidebar />
                      <Routes>
                        

                          <Route element = {<Chat/>} path = "/room/:roomId"/>
                        
                          <Route element = {<><h1>Hello2</h1></>}  path = "/" />
                        
                      </Routes>
                </div>
        
            </>)}

              
             
              
        
          </div>

    </BrowserRouter>
    
  );
}

export default App;
