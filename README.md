# backend-challenge
Movie CRUD Operations includes create,delete,update,fetchall

## Routes

1.fetch all movies <br />
GET REQUEST <br />
PUBLIC <br />
route: https://backend-challeng.herokuapp.com/movie/fetch-all <br />
 <br /> <br />
2.create a movie <br />
PUT REQUEST <br />
PUBLIC <br />
ROUTE: https://backend-challeng.herokuapp.com/movie/create <br />
data to be sent :  <br />
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
    
     <br /> <br />

2.UPDATE a movie <br />
POST REQUEST <br />
PRIVATE <br />
USE FETCH ALL TO GET ID AND GIVE IT IN BODY <br />
ROUTE: https://backend-challeng.herokuapp.com/movie/create <br />
data to be sent :  <br />
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
 <br /> <br />
2.Delete a movie <br />
DELETE REQUEST <br />
PRIVATE <br />
USE FETCH ALL TO GET ID AND GIVE IT AS A QUERY <br />
ROUTE: https://backend-challeng.herokuapp.com/movie/create <br /> <br /> <br />

  


## access token to verify the delete and update movie routes
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoidG9rZW4iLCJpYXQiOjE2NTkxODE1MzIsImV4cCI6MTY2OTU0OTUzMn0.h9qbteQogESGSF2P7aTD2A0ZZ3i4ZTzmNTtuKs_FkK8
