import React from "react";
import { useParams } from "react-router-dom";

const Contact = () => {
	const { userId } = useParams();
	return (
		<div>
			<h1>user Number {userId} </h1>
		</div>
	);
};

export default Contact;
