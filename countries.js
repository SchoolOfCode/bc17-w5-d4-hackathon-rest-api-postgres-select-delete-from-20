
// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "./db/index.js";


// Helper func to get all countries
export async function getCountries() {

  const queryText = "SELECT * FROM countries";

  const result = await pool.query(queryText);

  return result.rows;
}

// Helper func to get a country by it's ID
export async function getCountryById(id) {

  const queryText = "SELECT * FROM countries WHERE id = $1";

  const result = await pool.query(queryText, [id]);

  return result.rows[0] || null;
}

// Helper func to create a new country
export async function createCountry(country) {

  const newCountry = {
    ...country
  }
  const queryText = "INSERT INTO countries (country_name, speaks_english) VALUES ($1, $2)";

  const result = await pool.query(queryText, [newCountry.country_name, newCountry.speaks_english]);


  return result || null;
}


export async function updateCountryById(id, updates) {
  const updatedCountry = {
    ...updates
  };
  const queryText = "UPDATE countries SET country_name = $1, speaks_english = $2";

  const result = await pool.query(queryText, [updatedCountry.country_name, updatedCountry.speaks_english, id]);

  return result || null;
}
//updateCountryById(1, {"country_name": "Germany", "speaks_english": "false"})

export async function deleteCountryById(id) {
  // Query the database to delete the resource and return the deleted resource or null
}