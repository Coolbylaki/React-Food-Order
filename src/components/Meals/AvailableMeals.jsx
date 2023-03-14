import classes from "./AvailableMeals.module.css";
import meals from "../../assets/dummy-meals.js";
import Card from "../UI/Card/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
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
