import { useEffect } from "react";
import Menu from './shared/menu';
import Home from './pages/home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Content from './pages/Content';

function App() {
  const generateId = () => {
    return (Math.random() + 1).toString(36).substring(8);
  };
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
  })

  return (
    <Router>
      <Menu  items={defaultVal}></Menu>
      <div>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/app/:app'>
          <Content/>
        </Route>
      </Switch>
      </div>
      
    </Router>
  );
}

export default App;