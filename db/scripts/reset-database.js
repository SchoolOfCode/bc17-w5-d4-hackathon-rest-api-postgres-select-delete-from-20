import { pool } from "../index.js";



// >>> MAKE SURE YOU UNDERSTAND THIS FILE AND WHAT IT'S DOING <<<
// >>> FEEL FREE TO CHANGE IT TO MAKE YOUR OWN RESOURCES (TABLES AND PROPERTIES) - YOU DON'T HAVE TO USE ALBUMS AND ARTISTS <<<



async function resetDatabase() {
  try {
    // Drop existing tables if they exist
    await pool.query(`
        DROP TABLE IF EXISTS countries CASCADE;
        DROP TABLE IF EXISTS cities CASCADE;
        DROP TABLE IF EXISTS attractions CASCADE;
    `);

    // Create the Countries table
    await pool.query(`
        CREATE TABLE countries (
            id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            country_name VARCHAR(50) NOT NULL,
            speaks_english BOOLEAN
        );
    `);

    // Create the Cities table with a foreign key to the Countries table
    await pool.query(`
        CREATE TABLE cities (
            id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            city_name VARCHAR (50),
            country_id INT REFERENCES countries(id)
        );
    `);


    // Create the Attractions table with a foreign key to the Countries table
    await pool.query(`
      CREATE TABLE attractions (
          id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
          city_name VARCHAR(50),
          attr_name VARCHAR (50),
          city_id INT REFERENCES cities(id),
          star_rating INTEGER,
          address VARCHAR(100),
          gps_coords DECIMAL,
          nearest_station VARCHAR(50),
          wheelchair_access BOOLEAN
      );
  `);

    // Seed the countries table
    await pool.query(`
        INSERT INTO countries (country_name, speaks_english)
        VALUES 
            ('France', False),
            ('Italy', False)

    `);

    // Seed the cities table
    await pool.query(`
        INSERT INTO cities (city_name, country_id)
        VALUES 
            ('Paris', 1),
            ('Rome', 2),
            ('Venice', 2)
    `);

        // Seed the attractions table
    await pool.query(`
    INSERT INTO attractions (attr_name, city_id, star_rating, address, gps_coords, nearest_station, wheelchair_access)
    VALUES 
        ('Eiffel Tower', 1, 3, '1 rue de paris, ville de paris', '48.858422945', 'Trocadéro', true),
        ('Colosseum', 2, 4, '2 strada romana, roma', '48.858422945', 'Colosseo', false),
        ('Doges Palace', 3, 5, '3 piazza san marco, venezia', '48.858422945', 'Piazza San Marco', false)
`);


    console.log("Database reset successful");
  } catch (error) {
    console.error("Database reset failed: ", error);
  } finally {
    // End the pool
    await pool.end();
  }
}

await resetDatabase();