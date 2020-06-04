const db = require('../utils/db/db');

exports.add = function (user, callback) {
    db.get().collection('Quest').insertOne(user, function (err) {
        callback(err);
    })
};

exports.getQuests = function (callback) {
    db.get().collection('Quest').find().toArray(function (err, docs) {
        callback(err, docs);
    });
};