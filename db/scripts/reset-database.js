import { pool } from "../index.js";



// >>> MAKE SURE YOU UNDERSTAND THIS FILE AND WHAT IT'S DOING <<<
// >>> FEEL FREE TO CHANGE IT TO MAKE YOUR OWN RESOURCES (TABLES AND PROPERTIES) - YOU DON'T HAVE TO USE ALBUMS AND ARTISTS <<<



async function resetDatabase() {
  try {
    // Drop existing tables if they exist
    await pool.query(`
        DROP TABLE IF EXISTS Countries CASCADE;
        DROP TABLE IF EXISTS Cities CASCADE;
        DROP TABLE IF EXISTS Attractions CASCADE;
    `);

    // Create the Countries table
    await pool.query(`
        CREATE TABLE countries (
            id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            name VARCHAR(50) NOT NULL
            speaks_english BOOLEAN
        );
    `);

    // Create the Cities table with a foreign key to the Countries table
    await pool.query(`
        CREATE TABLE cities (
            id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            city_name VARCHAR (50)
            country_id INT REFERENCES countries(id)
        );
    `);


    // Create the Attractions table with a foreign key to the Countries table
    await pool.query(`
      CREATE TABLE attractions (
          id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
          city_name VARCHAR (50)
          attr_name VARCHAR (50)
          city_id INT REFERENCES cities(id)
          star_rating INTEGER
          address VARCHAR (100)
          gps_coords INTEGER
          nearest_station VARCHAR (50)
          wheelchair_access BOOLEAN
      );
  `);

    // Seed the artists table
    await pool.query(`
        INSERT INTO artists (name)
        VALUES 
            ('Dua Lipa'),
            ('Jay-Z');
    `);

    // Seed the albums table
    await pool.query(`
        INSERT INTO albums (title, published_date, artist_id)
        VALUES 
            ('Dua Lipa', '2017-06-02', 1),
            ('Future Nostalgia', '2020-03-27', 1),
            ('Reasonable Doubt', '1996-06-25', 2),
            ('The Blueprint', '2001-09-11', 2);
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

CREATE TABLE "Countries"(
  "Id" PK,
  "Country_name" VARCHAR(50),
  "Speaks_english" BOOLEAN
);

CREATE TABLE "Cities"(
  "Id" PK,
  "City_name" VARCHAR(50),
  "Country_id" FK,
  CONSTRAINT "FK_City.City_name"
    FOREIGN KEY("City_name")
      REFERENCES "Country"("Id")
);

CREATE TABLE "Attractions"(
  "Id" PK,
  "Attr_name" VARCHAR(50),
  "City_id" FK,
  "Star_rating" INTEGER,
  "Address" VARCHAR(100),
  "GPS_coords" INTEGER,
  "Nearest_station" VARCHAR(50),
  "Wheelchair_access" BOOLEAN,
  CONSTRAINT "FK_Attraction.City_id"
    FOREIGN KEY("City_id")
      REFERENCES "City"("Id")
);

