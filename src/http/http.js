
export async function getMeals() {
  const response = await fetch('http://localhost:3000/meals');

  if(!response.ok) {
    throw new Error("Can not fetch available meals!");
  }

  const data = await response.json();

  return data;
}