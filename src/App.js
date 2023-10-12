import  "./Commonresources/css/bootstrap.css";
import "./Commonresources/css/styles.css";
import { Routes, Route } from  "react-router-dom";
import Main from "./components/Main/Main";
import Mac  from "./components/Routingpath/Mac";
import Iphone from "./components/Routingpath/Iphone";
import Ipad from "./components/Routingpath/Ipad";
import Music from "./components/Routingpath/Music";
import Watch from "./components/Routingpath/Watch";
import Support from "./components/Routingpath/Support";
import Productpage from "./components/Routingpath/Productpage";
import Four04 from "./components/Routingpath/Four04";
import  Sharedlayout  from "./components/Routingpath/Sharedpaths/Sharedlayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Sharedlayout />}>
        <Route path="/" element={<Main />} />
        <Route path="Mac" element={<Mac />} />
        <Route path="ipad" element={<Ipad />} />
        <Route path="music" element={<Music />} />
        <Route path="watch" element={<Watch />} />
        <Route path="support" element={<Support />} />
        <Route path="*" element={<Four04 />} />

        <Route path="/iphone/:productID" element={<Productpage />} />
        <Route path="iphone" element={<Iphone />} />
      </Route>
    </Routes>
  );
}

export default App;





