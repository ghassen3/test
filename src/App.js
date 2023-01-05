import { useEffect, useState } from "react";
import Menu from './shared/menu';
import Home from './pages/home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import WorkSpace from "./pages/workspace";

function App() {
  const generateId = () => {
    return (Math.random() + 1).toString(36).substring(8);
  };
  const [openApp, setOpenApp] = useState([]);

  const defaultVal = [
    {
      id: generateId(), 
      title: "APP1",
      content: "This is content 1",
    },
    {
      id: generateId(),
      title: "APP2",
      content: "This is content 2",
    },
    {
      id: generateId(),
      title: "APP3",
      content: "This is content 3",
    },
  ];
  useEffect(()=>{
    localStorage.setItem('menu',JSON.stringify(defaultVal));
    localStorage.setItem("openApp",JSON.stringify([]));

  })
  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
    { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: "c", x: 4, y: 0, w: 1, h: 2 }
  ]
  return (
    <Router>
      <Menu  items={defaultVal}></Menu>
      
      <div>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/work'>
          <WorkSpace/>
        </Route>
      </Switch>
      </div>
      
    </Router>
  );
}

export default App;