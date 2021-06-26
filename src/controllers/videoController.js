let videos = [
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
    views: 1,
    id: 2,
  },
  {
    title: "Third Video",
    rating: 4,
    comments: 2,
    createdAt: "2minutes ago",
    views: 59,
    id: 3,
  },
];

export const trending = (req, res) => {
  return res.render("home", { pageTitle: "Home", videos });
};
export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("watch", { pageTitle: `Watching ${video.title}`, video });
  //const id = req.params.id;
  //console.log("Show video", id);
};

export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("edit", { pageTitle: `Editing: ${video.title}`, video });
};
export const postEdit = (req, res) => {};
