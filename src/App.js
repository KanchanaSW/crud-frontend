
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import EmployeeListComponents from './component/EmployeeListComponents';
import Header from './component/Header';
import Footer from './component/Footer';
import CreateEmployee from './component/CreateEmployee';
import UpdateEmployee from './component/UpdateEmployee';

function App() {
  return (
    <div>
      <Router>
          <Header />
          <div className="container">
            <Switch>
              <Route path="/" exact component={EmployeeListComponents}></Route>
              <Route path="/employees" component={EmployeeListComponents}></Route>
              {/* step 1 */}
              <Route path="/createEmployee/:id" component={CreateEmployee}></Route>
              {/* <Route path="/updateEmployee/:id" component={UpdateEmployee}></Route> */}
           
            </Switch>
          </div>
          <Footer /> 
      </Router>
    </div>
  );
}

export default App;
