import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();

	return (
		<>
			<button type="button" onClick={() => navigate("/about")}>
				About
			</button>

    
    </>
	);
};

export default Home;
