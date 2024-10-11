const jwt = require('jsonwebtoken');

const secret = 'myCat';
const token =  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInNjb3BlIjoiY3VzdG9tZXIiLCJpYXQiOjE3Mjg1MjcyNDd9.y135sxbBQpO8Eqz60-1MtbaQTJ0XTAsRCqFOnaPaHqg'

function verifyToken(token, secret) {
    return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);
console.log(payload);
