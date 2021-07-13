import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Result from './pages/Result';
import Topics from './pages/Topics';
import Quizzes from './pages/Quizzes';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/topics" component={Topics} />
        <ProtectedRoute path="/quizzes" component={Quizzes} />
        <ProtectedRoute path="/result" component={Result} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
