import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Topics from './pages/Topics';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/topics" component={Topics} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
