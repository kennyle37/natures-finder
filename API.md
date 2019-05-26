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
### /user/create
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
| first_name   | string | 
| last_name   | string | 

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
Find one user by their email

| Fields  | Type   | 
| --------|:------:| 
| address_1 (required)  | string | 

-----

### post
### /address/create
Create a user

| Fields  | Type   | 
| --------|:------:| 
| req.query.address_1 (required)  | string | 
| address_2   | string | 
| zipcode   | integer | 

-----

### patch
### /address
Search a user by their original email and then update their profile

| Fields  | Type   | 
| --------|:------:| 
| oldAddress_1 (required)  | string | 
| address_1   | string | 
| address_2   | string | 
| zipcode   | int | 

-----

### delete
### /address
Search a user by their email and delete them

| Fields  | Type   | 
| --------|:------:| 
| address_1 (required)  | string | 
