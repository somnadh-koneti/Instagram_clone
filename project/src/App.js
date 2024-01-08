import React from 'react';
import Homecomponent from './components/Homecomponent.jsx';
import { createBrowserRouter,createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Mainhome from './components/mainhome.jsx';
import Messages from './components/Messages.jsx';
import Search from './components/Search.jsx';
import Explore from './components/Explore.jsx';
import Reels from './components/Reels.jsx';
import Notifications from './components/Notifications.jsx';
import Create from './components/Create.jsx';
import More from './components/More.jsx';


const router=createBrowserRouter(createRoutesFromElements(

  <Route path="/" element={<Mainhome />}>
        <Route index element={<Homecomponent/>}/>
        <Route path='Home' element={<Homecomponent/>}/>
        <Route path='Search' element={<Search/>}/>
        <Route path='Explore' element={<Explore/>}/>
        <Route path='Reels' element={<Reels/>}/>
        <Route path='Messages' element={<Messages/>}/>
        <Route path='Notifications' element={<Notifications/>}/>
        <Route path='Create' element={<Create/>}/>
        <Route path='More' element={<More/>}/>
    </Route>
    ))

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
