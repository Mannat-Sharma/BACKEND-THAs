var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/images/:filename', (req, res) => {
  const filename = req.params.filename;
  const filepath = path.join(__dirname, "../public/images")
  console.log(fs.existsSync(path.join(filepath, filename)))
  if (fs.existsSync(path.join(filepath,filename))){
    res.sendFile(path.join(filepath,filename))
  }
  else{
    throw new Error("errrrr");
  }
});
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
