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

-----

### delete
### /address
Search an address and delete it

| Fields  | Type   | 
| --------|:------:| 
| address_1 (required)  | string | 
