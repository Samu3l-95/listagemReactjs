import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import ScreenList from './componente/list';
import Details from './componente/details';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={ScreenList}></Route>
                <Route exact path='/Details' component={Details}></Route>
            </Switch>
        </Router>
    );
}

export default App;