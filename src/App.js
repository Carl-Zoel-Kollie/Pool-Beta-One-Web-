import{Routes,Route} from "react-router-dom";
// import './App.css';
import Homescreen from './Homescreen';
import Login from "./Login";
import Feed from './Feed';
import PaystackIntegration from "./PaystackIntegration";
import ProtectedRoute from "./ProtectedRoute";
import Explore from "./Explore";
import { UserAuthContextProvider } from "./UserAuthContext";
import Chat from "./Chat";

function App() {
  return (
   <div className="app">
    <UserAuthContextProvider>
<Routes>
  <Route exact path="/" element={<Homescreen/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/feed" element={<ProtectedRoute> <Feed/></ProtectedRoute>}/>
  <Route path="/invest" element={ <PaystackIntegration/>}/>
  <Route path="/explore" element={ <Explore/>}/>
  <Route path="/chat" element={ <Chat/>}/>

   
</Routes>
</UserAuthContextProvider>
   </div>
  )
}

export default App;
