import Createuser from "./Createuser"
import Readuser from "./Readuser";
import Update from "./Update";
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
  return (
    <>
   <BrowserRouter>
   <Routes>
   
    <Route index element={<Createuser/>}/>
   <Route path="/read" element={<Readuser/>}/>
   <Route path="/update" element={<Update/>}/>
   
   </Routes>
   </BrowserRouter>
    </>
  )
}
export default App;
