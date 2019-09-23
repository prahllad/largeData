const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.r = (result) => {
        res.json({
            status: true,
            message: "success",
            result,
        });
    };
    next();
});


// CORS ALL ACCESS
app.use(cors());


// create DB pool
// require('./config/config').createDBPool(10);


require('./routes')(app);

require('./config/config')(app);
require('./config/log')(app);
// error handler
// require('./ErrorHandler')(app);

const PORT = 3000;
app.listen(PORT, () => {
    console.info(`[ApiServer] Listening on Port ${PORT}`);
});

module.exports = app;