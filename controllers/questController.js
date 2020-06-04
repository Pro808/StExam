
const Quests = require('../models/quest');

exports.addQuest = (req, res) => {
    const data = {
        engQ: req.body.engQ,
        rusQ: req.body.rusQ,
        ansE: req.body.ansE,
        ansR: req.body.ansR
    };

    Quests.add(data, (err) => {
        if (!err) {
            res.json({
                ok: true,
                message: 'Question added!'
            });
        } else {
            res.json({
                ok: false,
                message: "Error"
            });
        }
    });
};

exports.get = (req, res) => {
    Quests.getQuests((err, data) => {
        if (!err) {
            res.json({
                ok: true,
                quests: data
            });
        } else {
            res.json({
                ok: false,
                message: "Не удалось получить список вопросов!"
            });
        }
    });
};
