import React from "react";

const Total = ({ items }) => {
	const total = items.reduce((sum, item) => {
		return sum + parseFloat(item.price) * item.quantity;
	}, 0);

	return (
		<div>
			<p className="text">Total Price: {total}</p>
		</div>
	);
};

export default Total;
