import classes from "./AvailableMeals.module.css";
import meals from "../../assets/dummy-meals.js";
import Card from "../UI/Card/Card";

const AvailableMeals = () => {
	const mealsList = meals.map((meal) => <li>{meal.name}</li>);

	return (
		<section className={classes.meals}>
			<Card>
				<ul>{mealsList}</ul>
			</Card>
		</section>
	);
};

export default AvailableMeals;
