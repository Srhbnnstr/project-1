function index(req, res) {
  res.json({
    message: "Welcome to Ani-full!",
    documentation_url: "https://github.com/srhbnnstr/project-1/api.md",
    // base_url: "http://tunely.herokuapp.com",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"}
    ]
  });
}

module.exports.index = index;
