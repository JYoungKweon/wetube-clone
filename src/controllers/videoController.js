export const trending = (req, res) => res.render("home", { pageTitle: "Home" });
export const see = (req, res) => res.render("watch");
export const edit = (req, res) => res.render("edit");
//console.log(req.params);

export const search = (req, res) => res.send("Search Videos");
export const upload = (req, res) => res.send("upload Video");
export const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.send(`delete Video #${req.params.id}`);
};
