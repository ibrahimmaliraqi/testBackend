var express = require('express');
var router = express.Router();

var dbHelper = require('../helpers/db_helpers');

router.get('/', function (req, res) {

    dbHelper.query(
        'SELECT 1 AS connected',
        [],
        function (error, result) {

            if (error) {
                return res.status(500).json({
                    success: false,
                    server: 'running',
                    database: 'disconnected',
                    message: 'Database connection failed',
                    error: error.message
                });
            }

            res.status(200).json({
                success: true,
                server: 'running',
                database: 'connected',
                message: 'Server and database are working successfully',
                result: result
            });
        }
    );

});

module.exports = router;
