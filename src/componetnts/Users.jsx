import {Outlet, useSearchParams } from "react-router-dom";
import ActiveUsers from "./ActiveUsers";

const Users = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	console.log(searchParams);
	const isFiltred = searchParams.get("filter") === "active";
	console.log(isFiltred);
	return (
		<div>

			<button onClick={() => setSearchParams({ filter: "active" })}>
				show Active
			</button>
			<button onClick={() => setSearchParams({})}>show All</button>
			{isFiltred ? <ActiveUsers/> : <h4>Showing All Users</h4>}
		</div>
	);
};

export default Users;
