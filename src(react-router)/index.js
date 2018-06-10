import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter,
    Route,
    Switch,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";

const App = () => (
    <BrowserRouter>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/topics">Topics</Link>
                </li>
            </ul>

            <hr />

            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/topics" component={Topics} />

                <Route component={NoMatch} />
            </Switch>
        </div>
    </BrowserRouter>
);

const NoMatch = () => <div>404-Not Found</div>;

const Home = () => (
    <div>
        <h2>Home</h2>
        <p>Hello. This is the Home page.</p>
    </div>
);

const About = () => (
    <div>
        <h2>About</h2>
        <p>Yes. You are now seeing the About page.</p>
    </div>
);

const Topic = ({ match }) => (
    <div>
        <h3>This is {match.params.topicId}.</h3>
    </div>
);

const Topics = ({ match }) => (
    <div>
        <h2>Topics</h2>

        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>Rendering with React</Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>Components</Link>
            </li>
            <li>
                <Link to={`${match.url}/props-and-states`}>
                    props vs states
                </Link>
            </li>
        </ul>

        <hr />

        <Switch>
            <Route path={`${match.path}/:topicId`} component={Topic} />
            <Route
                exact
                path={match.path}
                render={() => <h3>Please select a topic.</h3>}
            />
        </Switch>
    </div>
);

ReactDOM.render(<App />, document.body);
