### Requirements table

| Method | Path             | Additional Info | Result                                    | Response                                    |
| ------ | ---------------- | --------------- | ----------------------------------------- | ------------------------------------------- |
| GET    | /api/recipes     |                 | all recipes                               | { success: Boolean, payload: recipe array } |
| GET    | /api/recipes/:id |                 | recipes with a particular id if it exists | { success: Boolean, payload: recipe }       |
| POST   | /api/recipes     | { body }        | create a new recipe                       | { success: Boolean, payload: recipe }       |
| PATCH  | /api/recipes/:id | { body }        | updated recipe                            | { success: Boolean, payload: recipe }       |
| DELETE | /api/recipes/:id |                 | recipe deleted                            | { success: Boolean, payload: recipe }       |