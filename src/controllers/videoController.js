export const trending = (req, res) => {
  const videos = [
    {
      title: "First Video",
      rating: 4,
      comments: 2,
      createdAt: "2minutes ago",
      views: 59,
      id: 1,
    },
    {
      title: "Second Video",
      rating: 4,
      comments: 2,
      createdAt: "2minutes ago",
      views: 59,
      id: 1,
    },
    {
      title: "Third Video",
      rating: 4,
      comments: 2,
      createdAt: "2minutes ago",
      views: 59,
      id: 1,
    },
  ];
  return res.render("home", { pageTitle: "Home", videos });
};
export const see = (req, res) => res.render("watch");
export const edit = (req, res) => res.render("edit");
//console.log(req.params);

export const search = (req, res) => res.send("Search Videos");
export const upload = (req, res) => res.send("upload Video");
export const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.send(`delete Video #${req.params.id}`);
};
