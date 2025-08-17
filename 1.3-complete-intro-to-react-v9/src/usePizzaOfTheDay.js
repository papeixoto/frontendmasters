import { useState, useEffect, useDebugValue } from "react";

export const usePizzaOfTheDay = () => {
  const [pizzaOfTheDay, setPizzaOfTheDay] = useState(null);
  useDebugValue(
    pizzaOfTheDay ? `${pizzaOfTheDay.id} : ${pizzaOfTheDay.name}` : "loading",
  );

  useEffect(() => {
    async function fetchPizzaOfTheDay() {
      const res = await fetch("/api/pizza-of-the-day");
      const json = await res.json();
      setPizzaOfTheDay(json);
    }

    fetchPizzaOfTheDay();
  }, []);

  return pizzaOfTheDay;
};
