import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const PageNotFound = lazy(() => import("./pages/LoginPage/LoginPage"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));

const App = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Router>
					<Suspense fallback={""}>
						<Switch>
							<Route exact path="/login" component={LoginPage} />
							<Route path="/404" component={PageNotFound} />
							<Route path="/" component={HomePage} />
						</Switch>
					</Suspense>
				</Router>
			</PersistGate>
		</Provider>
	);
};

export default App;
