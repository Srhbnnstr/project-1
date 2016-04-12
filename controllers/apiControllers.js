function index(req, res) {
  res.json({
    message: "Welcome to Ani-full!",
    documentation_url: "https://github.com/Srhbnnstr/project-1/blob/master/README.md",
    base_url: "https://ani-full.herokuapp.com/",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"}
    ]
  });
}

module.exports.index = index;
