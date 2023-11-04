import { Suspense, lazy } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./componetnts/NavBar";
import Home from "./componetnts/Home";
import Contact from "./componetnts/Contact";
import About from "./componetnts/About";
import Child from "./componetnts/Child";
import ActiveUsers from "./componetnts/ActiveUsers";
import Users from "./componetnts/Users";

const Router = () => {
	const LazyLazy = lazy(() => import("./componetnts/Lazy.jsx"));
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route index element={<Home />} />
				<Route path="/About" Component={About}>
					<Route path="/About/child" Component={Child} />
				</Route>
				<Route path="/contact" Component={Contact}>
					<Route path="/contact/:userId" element={About} />
				</Route>
				<Route path="/Users" Component={Users}>
					<Route path="/Users?filter=active" Component={ActiveUsers} />
				</Route>
				<Route
					path="/lazy"
					element={
						<Suspense fallback="Loading..">
							<LazyLazy />
						</Suspense>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
