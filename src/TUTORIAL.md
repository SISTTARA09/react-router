<h2>React Router</h2>

<h3>Installing</h3>

```sh
npm i -D react-router-dom@latest
```

<h3>Configuring Routes</h3>

```js
["src/Router.jsx"];

import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import NavBar from "./componetnts/NavBar";
import Home from "./componetnts/Home";
import Contact from "./componetnts/Contact";
import About from "./componetnts/About";

const Router = () => {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route index element={Home} />
				<Route path="/contact" element={Contact} />
				<Route path="/About" element={About} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
```

ATTRIBUTES:

<i>
index: specifies that the route is the default route.
</br>
exact: ensures that the route is matched only if the URL is in exact mach.
</i>

NOTE:
if you want to make acomonent to apear in all the pages put it outside the <code>Routes </code> tag.

<h3>Links & Active links</h3>

```js
["components/NavBar.jsx"];

import { NavLink, Link } from "react-router-dom";

// the difference between NavLink and Link is that, NavLink Add .active to the element

// the same functionality, the same syntax
const NavBar = () => {
	return (
		<nav>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/about">About</NavLink>
			<NavLink to="/contact">Contact</NavLink>
		</nav>
	);
};

export default NavBar;
```

<h3>Navigating Programmaticaly</h3>

<i>

the main target of using it, is to transfer between the pages. on Clicking in a button
</i>

```js
["components/Home.jsx"];

import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();

	return (
		<>
			<button type="button" onClick={() => navigate("/about")}>
				{/*on clicking here you will go to about page About*/}
			</button>
		</>
	);
};

export default Home;
```

<h3>Nested Route</h3>

```js
['Router.jsx']
...
<Route path="/About" Component={About}>
  <Route path="/About/child" Component={Child} />
</Route>
...
```

```js
["components/About.jsx"];
import { Outlet } from "react-router-dom";

const About = () => {
	return (
		<div>
			<h3>About</h3>
			<Outlet /> // this will show the content of the child element
		</div>
	);
};

export default About;
```

<h3>URL Params</h3>

<i>
URL params is used to embed data directly into the path of a URL, You define URL  paramaer in you route configuration , 
and React Router extracts them from the URL When The Route Matches.
</i>

```js
['Router.jsx']
<Route path="/contact" Component={Contact}>
 <Route path="/contact/:userId" />
</Route>

```

```js
["components/Contact.jsx"];
import { useParams } from "react-router-dom";

const Contact = () => {
	const { userId } = useParams(); // the role of this hook is to get the userId From The path
	return (
		<div>
			<h3>user Number {userId} </h3>
		</div>
	);
};

export default Contact;
```

<h3>Search Params</h3>

```js
["components/Users.jsx"];

import { useSearchParams } from "react-router-dom";
import ActiveUsers from "./ActiveUsers";

const Users = () => {
	const [searchParams, setSearchParams] = useSearchParams(); // as useState Hook.
	const isFiltred = searchParams.get("filter") === "active"; // check if it filtred or not
	return (
		<div>
			<button onClick={() => setSearchParams({ filter: "active" })}>
				{/*using the filter*/}
				show Active
			</button>
			<button onClick={() => setSearchParams({})}>show All</button> {/*remove the filter*/}
			{isFiltred ? <ActiveUsers /> : <h4>Showing All Users</h4>}
			{/* if the user wants the active users show them if not show all*/}
		</div>
	);
};

export default Users;
```

```js
['Router.jsx']

<Route path="/Users" Component={Users}>
  <Route path="/Users?filter=active" Component={ActiveUsers} /> // show the component of active users
</Route>

```

<h3>Dynamic Routes</h3>

```js
['Router.jsx']


<Route path="/contact" Component={Contact}>
  <Route path="/contact/:userId" Component={About}/>
  {/*any \w aftger /users, Will Target to the <About/>*/}
</Route>

```

<h3>Relative links</h3>

<i>Relative links is to do not use to="/..." in the Route</i>

<h3>Lazy Loading</h3>

<i>lazy loading is an operation to minimize the duration and the weight of a component</i>

```js
["Router.jsx"];

import { Suspense, lazy } from "react";

<Route
	path="/lazy"
	element={
		<Suspense fallback="Loading..">
			<LazyLazy />
        {/* fallback: if the component is heavy the user will see 'Loading...' untill
			the file is uploaded*/}
		</Suspense>
	}
/>;
```
