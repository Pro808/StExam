exports.goToIndex = (req, res) => {
    res.redirect("http://" + req.headers["host"] + "/");
};
