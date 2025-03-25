import Image from "next/image";
import MealSearchInput from "./components/MealSearchInput";

const Meals = async ({ searchParams }) => {
    const query = await searchParams;

    const fetchMeals = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`)
            const data = await res.json();
            // setMeals(data?.meals || [])
            return data.meals;
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    const meals = await fetchMeals();

    return (
        <div>
            <div className="flex justify-center items-center">
                <MealSearchInput></MealSearchInput>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-4">
                {meals?.map(meal => (
                    <div key={meal.idMeal} className="p-4 rounded-2xl shadow-md active:bg-gray-800 cursor-pointer border">
                        <h2>{meal?.strMeal}</h2>
                        <Image width={641} height={641} src={meal?.strMealThumb} alt={meal?.strMeal} />
                        <p>{meal?.strInstructions}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Meals;