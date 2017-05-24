var mongoUri = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/todo';

module.exports = {
    todo: {
        connector: "mongodb",
        url: mongoUri
    }
};
