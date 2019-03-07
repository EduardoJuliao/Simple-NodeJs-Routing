const express = require('express');
const router = express.Router();

router.get('/echo', (req, res) =>{
   res.send('HEEEEEEEEEEEEEEEEEEEYAAAAAAAAAAAAAAA');
});

router.use('/users', require('./users.route').router);

module.exports.router = router;