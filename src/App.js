import React from 'react';
import { Switch, Route} from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component'

import './App.css';

import SideBar from './components/sidebar/sidebar.component';
import TopBar from './components/topbar/topbar.component';

import UstadzPage from './pages/ustadz/ustadz-page/ustadz-page.component';
import AddUstadz from './pages/ustadz/add-ustadz-page/add-ustadz-page.component';
import EditUstadz from './pages/ustadz/edit-ustadz-page/edit-ustadz-page.component';

import SantriPage from './pages/santri/santri-page/santri-page.component';

class App extends React.Component{
  // constructor(){
  //   super();
  // }
    render(){
      return(
        <div className="App">
          <SideBar/>
          <TopBar/>
          <div className='main'>
            <Switch>
              <Route exact path='/' component={HomePage}/>
              <Route exact path='/ustadz' component={UstadzPage}/>
              <Route exact path='/ustadz/tambah' component={AddUstadz}/>
              <Route exact path='/ustadz/edit/:niyUstadz' component={EditUstadz}/>
              <Route exact path='/santri' component={SantriPage}/>
            </Switch>
          </div>
        </div>
      )
    }
  }

export default App;
