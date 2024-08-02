### Requirements table

| Method | Path             | Additional Info | Result                                    | Response                                    |
| ------ | ---------------- | --------------- | ----------------------------------------- | ------------------------------------------- |
| GET    | /api/countries    |                 | all countries                             | { success: Boolean, payload: countries array } |
| GET    | /api/countries/:id |                 | one country based on id number | { success: Boolean, payload: country }       |
| POST   | /api/countries     | { body }        | create a new country                       | { success: Boolean, payload: country }       |
| PATCH  | /api/countries/:id | { body }        | updated country                            | { success: Boolean, payload: country }       |
| DELETE | /api/countries/:id |                 | country deleted                            | { success: Boolean, payload: country }       |



| Method | Path             | Additional Info | Result                                    | Response                                    |
| ------ | ---------------- | --------------- | ----------------------------------------- | ------------------------------------------- |
| GET    | /api/cities    |                 | all cities                             | { success: Boolean, payload: cities array } |
| GET    | /api/cities/:id |                 | one city based on id number | { success: Boolean, payload: city }       |
| POST   | /api/cities     | { body }        | create a new city                       | { success: Boolean, payload: city }       |
| PATCH  | /api/cities/:id | { body }        | updated city                            | { success: Boolean, payload: city }       |
| DELETE | /api/cities/:id |                 | city deleted                            | { success: Boolean, payload: city }       |


| Method | Path             | Additional Info | Result                                    | Response                                    |
| ------ | ---------------- | --------------- | ----------------------------------------- | ------------------------------------------- |
| GET    | /api/attractions    |                 | all attractions                             | { success: Boolean, payload: attractions array } |
| GET    | /api/attractions/:id |                 | one attraction based on id number | { success: Boolean, payload: attraction }       |
| POST   | /api/attractions     | { body }        | create a new attraction                       | { success: Boolean, payload: attraction }       |
| PATCH  | /api/attractions/:id | { body }        | updated attraction                            | { success: Boolean, payload: attraction }       |
| DELETE | /api/attractions/:id |                 | attraction deleted                            | { success: Boolean, payload: attraction }       |