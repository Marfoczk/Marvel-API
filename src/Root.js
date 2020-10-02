import React from 'react';
import store from './store/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import About from './views/About/About'
import Page from './views/Page/Page'
import Hero from './views/Hero/Hero'
import Page404 from './views/Page404/Page404'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import PagePagination from './components/PagePagination/PagePagination'

function Root() {
  return (
    <Router>
      <Provider store={store}>
        <div className="wrapper">
          <Header />
            <Switch>
              <Route path="/" exact render={() => <Redirect to='/1'/>}
                />
              <Route path="/about" component={About} />
              <Route path="/hero/:name" component={Hero} />
              <Route
                  path="/:data"
                  exact
                  strict
                  render={({ match, ...rest }) => {
                    if (/^\d+$/.test(match.params.data)) {
                      return <Page match={match} props={rest}/>;
                    }
                      return <Page404/>;
                  }}
              />
              <Redirect to="/"/>
            </Switch>
          <PagePagination />
          <Footer />
        </div>
      </Provider>
    </Router>
  );
}

export default Root;
