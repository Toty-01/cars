export async function fetchCars() {
  const headers = {	
		'X-RapidAPI-Key': 'c7c33def0fmsh80f303f2042bca6p1b411ajsnb6405434b509',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
  const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
    headers: headers,
  });
  const result = await response.json();
  return result;
}