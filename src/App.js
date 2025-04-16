import "./App.css";
import React, { Component } from "react";
import Items from "./components/item/items";
import AddItem from "./components/addItem/addItem";
import Total from "./components/total/total";

class App extends Component {
	state = {
		items: [
			{ id: 1, product: "Pen", price: 2, quantity: 1 },
			{ id: 2, product: "Book", price: 10, quantity: 1 },
		],
	};

	deleteItem = (id) => {
		const items = this.state.items.filter((item) => item.id !== id);
		this.setState({ items });
	};

	addItem = (item) => {
		item.id =
			this.state.items.length > 0
				? this.state.items[this.state.items.length - 1].id + 1
				: 1;
		item.quantity = 1;
		this.setState({ items: [...this.state.items, item] });
	};

	changeQuantity = (id, delta) => {
		const items = this.state.items.map((item) =>
			item.id === id
				? { ...item, quantity: Math.max(1, item.quantity + delta) }
				: item
		);
		this.setState({ items });
	};

	render() {
		return (
			<div className="container">
				<h1>Product List React App</h1>
				<div className="table">
					<Items
						items={this.state.items}
						del={this.deleteItem}
						changeQty={this.changeQuantity}
					/>
					<AddItem add={this.addItem} />
					<Total items={this.state.items} />
				</div>
			</div>
		);
	}
}

export default App;
