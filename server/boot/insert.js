module.exports = function(app) {
    var Questions = app.models.Questions;
    Questions.remove({});
    Questions.upsert(require('../questions.json'));
};