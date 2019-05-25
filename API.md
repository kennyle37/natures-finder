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
| email   | string | 

-----

### post
### /user/create
Create a user

| Fields  | Type   | 
| --------|:------:| 
| email   | string | 
| first_name   | string | 
| last_name   | string | 

-----

### post
### /user/update
Search a user by their original email and then update their profile

| Fields  | Type   | 
| --------|:------:| 
| original_email   | string | 
| updated_email   | string | 
| first_name   | string | 
| last_name   | string | 

-----

### delete
### /user/delete
Search a user by their email and delete them

| Fields  | Type   | 
| --------|:------:| 
| email   | string | 
