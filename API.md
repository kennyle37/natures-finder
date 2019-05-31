# USER API

### get
### /user

Find all users

-----

### get
### /user/search
Find one user by their email

| Fields  | Type   | 
| --------|:------:| 
| email (required)  | string | 

-----

### post
### /user
Create a user

| Fields  | Type   | 
| --------|:------:| 
| email (required)  | string | 
| first_name   | string | 
| last_name   | string | 

-----

### patch
### /user
Search a user by their original email and then update their profile

| Fields  | Type   | 
| --------|:------:| 
| original_email (required)  | string | 
| updated_email   | string | 
| updated_first_name   | string | 
| updated_last_name   | string | 

-----

### delete
### /user
Search a user by their email and delete them

| Fields  | Type   | 
| --------|:------:| 
| email   | string | 

# Address API

### get
### /address

Find all address

-----

### get
### /address/search
Find one address by their address

| Fields  | Type   | 
| --------|:------:| 
| address_1 (required)  | string | 
| address_2 (required)  | string | 
| zipcode (required)  | int | 

-----

### post
### /address
Create an address

| Fields  | Type   | 
| --------|:------:| 
| req.query.address_1 (required)  | string | 
| address_2   | string | 
| zipcode   | integer | 
| state_id   | integer | 
| city_id   | integer | 

-----

### patch
### /address
Search a address by their old address and then update 

| Fields  | Type   | 
| --------|:------:| 
| original_address_1 (required)  | string | 
| original_address_2 | string | 
| original_zipcode  | int | 
| updated_address_1   | string | 
| updated_address_2   | string | 
| updated_zipcode   | int | 
| state_id   | integer | 
| city_id   | integer | 

-----

### delete
### /address
Search an address and delete it

| Fields  | Type   | 
| --------|:------:| 
| address_1 (required)  | string | 
| address_2  | string | 
| zipcode (required) | string | 
| state_id (required)  | integer | 
| city_id (required)  | integer | 

# City API

### get
### /city

Find all cities

-----

### get
### /city/search
Find one city by its name

| Fields  | Type   | 
| --------|:------:| 
| city_name (required)  | string | 
| state_id (required) | int | 

-----

### post
### /city
Create a city

| Fields  | Type   | 
| --------|:------:| 
| city_name (required) | string | 
| state_id (required) | int | 

-----

### patch
### /city
Search a city by their original email and then update their profile

| Fields  | Type   | 
| --------|:------:| 
| original_city_name (required) | string | 
| updated_city_name (required) | string | 
| state_id (required)   | int | 

-----

### delete
### /city
Search a user by their email and delete them

| Fields  | Type   | 
| --------|:------:| 
| city_name (required)  | string | 
| state_id (required)   | int | 

# Country API

### get
### /country

Find all countries

-----

### get
### /country/search
Find one country by the country_name

| Fields  | Type   | 
| --------|:------:| 
| country_name (required)  | string | 

-----

### post
### /country
Create an country

| Fields  | Type   | 
| --------|:------:| 
| country_name (required)  | string | 

-----

### patch
### /country
Search a country by their old name and then update 

| Fields  | Type   | 
| --------|:------:| 
| original_country_name (required)  | string | 
| updated_country_name (required) | string | 

-----

### delete
### /country
Search a country and delete it

| Fields  | Type   | 
| --------|:------:| 
| country_name (required)  | string | 

# Dining_category API

### get
### /dining_category

Find all dining_categories

-----

### get
### /dining_category/search
Find one user by their email

| Fields  | Type   | 
| --------|:------:| 
| name (required)  | string | 

-----

### post
### /dining_category
Create a dining_category

| Fields  | Type   | 
| --------|:------:| 
| name (required)  | string | 

-----

### patch
### /dining_category
Search a dining_category by their original name and then update their name

| Fields  | Type   | 
| --------|:------:| 
| original_name (required)  | string | 
| updated_name (required)  | string | 

-----

### delete
### /dining_category
Search a dining_category by their name and delete it

| Fields  | Type   | 
| --------|:------:| 
| name   | string | 

# Food_category API

### get
### /Food_category

Find all food category

-----

### get
### /food_category/search
Find one food category by its name

| Fields  | Type   | 
| --------|:------:| 
| name  | string |

-----

### post
### /food_category
Create a food category

| Fields  | Type   | 
| --------|:------:| 
| name (required)  | string |


-----

### patch
### /food_category
Search a food category by their original name and cost and then update its name and cost

| Fields  | Type   | 
| --------|:------:| 
| original_name (required)  | string | 
| updated_name (required)  | string | 

-----

### delete
### /food_category
Search a food category by their name and delete it

| Fields  | Type   | 
| --------|:------:| 
| name (required)  | string | 

# Dish API

### get
### /dish

Find all dish

-----

### get
### /dish/search
Find one dish by its name and cost

| Fields  | Type   | 
| --------|:------:| 
| dish_name (required)  | string |
| dish_cost (required)  | int | 

-----

### post
### /dish
Create a dish

| Fields  | Type   | 
| --------|:------:| 
| dish_name (required)  | string |
| dish_cost (required)  | int | 


-----

### patch
### /dish
Search a dish by their original name and cost and then update its name and cost

| Fields  | Type   | 
| --------|:------:| 
| original_dish_name (required)  | string | 
| original_dish_cost (required)  | int | 
| updated_dish_name (required)  | string | 
| updated_dish_cost (required)  | int | 

-----

### delete
### /dish
Search a dish by their name and delete it

| Fields  | Type   | 
| --------|:------:| 
| dish_name (required)  | string | 
| dish_cost (required)  | int | 

# State API

### get
### /state

Find all state

-----

### get
### /state/search
Find one state by its name

| Fields  | Type   | 
| --------|:------:| 
| state_name (required)  | string |
| country_id (required)   | int | 

-----

### post
### /state
Create a state

| Fields  | Type   | 
| --------|:------:| 
| state_name (required)  | string |
| country_id (required)   | int | 

-----

### patch
### /state
Search a state by their original name and then update its name

| Fields  | Type   | 
| --------|:------:| 
| original_state_name (required)  | string | 
| updated_state_name (required)  | string | 
| country_id (required)   | int | 

-----

### delete
### /state
Search a state by its name and delete it

| Fields  | Type   | 
| --------|:------:| 
| state_name (required)  | string | 
| country_id (required)   | int | 

# Restaurant API

### get
### /Restaurant

Find all Restaurants

-----

### get
### /Restaurant/search
Find one Restaurant by its name

| Fields  | Type   | 
| --------|:------:| 
| name (required)  | string |

-----

### post
### /Restaurant
Create a Restaurant

| Fields  | Type   | 
| --------|:------:| 
| name (required)  | string |

-----

### patch
### /Restaurant
Search a Restaurant by its original name and then update its name

| Fields  | Type   | 
| --------|:------:| 
| original_name (required)  | string | 
| updated_name (required)  | string | 

-----

### delete
### /state
Search a state by its name and delete it

| Fields  | Type   | 
| --------|:------:| 
| name (required)  | string | 

