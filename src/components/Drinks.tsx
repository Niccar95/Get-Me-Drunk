import { IDrink } from "../models/IDrink";
import { Drink } from "./Drink";

interface IDrinksProps {
  drinks: IDrink[];
}

export const Drinks = ({ drinks }: IDrinksProps) => {
  return (
    <>
      {drinks.length > 0 &&
        drinks.map((drink) => (
          <Drink drink={drink} key={drink.idDrink}></Drink>
        ))}
    </>
  );
};
