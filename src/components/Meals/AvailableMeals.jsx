import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card/Card";
import MealItem from "./MealItem/MealItem";
import mealsAPI from "../../API/firebase-meals.js";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
	const [meals, setMeals] = useState([]);

	useEffect(() => {
		const fetchMeals = async () => {
			const response = await mealsAPI.get("/meals.json");

			const loadedMeals = [];

			for (const key in response.data) {
				loadedMeals.push({
					id: key,
					name: response.data[key].name,
					description: response.data[key].description,
					price: response.data[key].price,
				});
			}

			setMeals(loadedMeals);
		};

		fetchMeals();
	}, []);

	const mealsList = meals.map((meal) => (
		<MealItem key={meal.id} name={meal.name} description={meal.description} price={meal.price} id={meal.id}>
			{meal.name}
		</MealItem>
	));

	return (
		<section className={classes.meals}>
			<Card>
				<ul>{mealsList}</ul>
			</Card>
		</section>
	);
};

export default AvailableMeals;
