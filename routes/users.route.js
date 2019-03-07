const express = require('express');
const http = require('http');
const router = express.Router();
const _ = require('lodash');

router.get('/', function(req, res){
   http.get('http://www.mocky.io/v2/5c814aaf3100009c79771ef5', function(response){
      let data = '';

      // A chunk of data has been recieved.
      response.on('data', (chunk) => {
         data += chunk;
      });

      response.on('end', () => {
         res.send(data);
       });
   });
});

router.get('/:id', function(req, res){
   const searchId = req.params.id;

   http.get('http://www.mocky.io/v2/5c814aaf3100009c79771ef5', function(response){
      let data = '';
      console.log(searchId);
      // A chunk of data has been recieved.
      response.on('data', (chunk) => {
         data += chunk;
      });

      response.on('end', () => {
         let json = JSON.parse(data);
         let user = _.find(json,x => x.id == searchId);
         res.send(user);
       });
   });
});

module.exports.router = router;