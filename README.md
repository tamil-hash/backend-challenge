# backend-challenge
Movie CRUD Operations includes create,delete,update,fetchall

## Routes

1.fetch all movies
GET REQUEST
PUBLIC
route: [a link](https://backend-challeng.herokuapp.com/movie/fetch-all)

2.create a movie
PUT REQUEST
PUBLIC
ROUTE: [a link](https://backend-challeng.herokuapp.com/movie/create)
data to be sent : 
  {
        "name": "Avengers",
        "rating": 8,
        "cast": [
            "first person",
            "second person"
        ],
        "genre": "Action",
        "releaseDate": "2012-04-26T18:30:00.000Z",
    }
    
    

2.UPDATE a movie
POST REQUEST
PRIVATE
USE FETCH ALL TO GET ID AND GIVE IT IN BODY
ROUTE: [a link](https://backend-challeng.herokuapp.com/movie/create)
data to be sent : 
  {
        "movieid": "62e4fb57dd629ccff512be7f",
        "name": "Avengers",
        "rating": 8,
        "cast": [
            "first person",
            "second person"
        ],
        "genre": "Action",
        "releaseDate": "2012-04-26T18:30:00.000Z",
    }

2.Delete a movie
DELETE REQUEST
PRIVATE
USE FETCH ALL TO GET ID AND GIVE IT AS A QUERY
ROUTE: [a link](https://backend-challeng.herokuapp.com/movie/create)

  


## access token to verify the delete and update movie routes
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoidG9rZW4iLCJpYXQiOjE2NTkxODE1MzIsImV4cCI6MTY2OTU0OTUzMn0.h9qbteQogESGSF2P7aTD2A0ZZ3i4ZTzmNTtuKs_FkK8
