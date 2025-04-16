import React from "react";

const Items = ({ items, del, changeQty }) => {
	const length = items.length;

	const ListItem = length ? (
		items.map((item) => (
			<div key={item.id} className="item item-color">
				<p>{item.product}</p>
				<p>{item.price}</p>
				<div className="quantity-controls">
					<button onClick={() => changeQty(item.id, -1)}>-</button>
					<span>{item.quantity}</span>
					<button onClick={() => changeQty(item.id, 1)}>+</button>
				</div>
				<p className="delete" onClick={() => del(item.id)}>
					&times;
				</p>
			</div>
		))
	) : (
		<div className="text">There are no items, Try to add some.</div>
	);

	return (
		<div>
			<div className="header item item-color">
				<p>Product</p>
				<p>Price</p>
				<p>Quantity</p>
				<p>Edit</p>
			</div>
			{ListItem}
		</div>
	);
};

export default Items;
    