export const trending = (req, res) => res.send("Home Page");
export const see = (req, res) => {
  console.log(req.params);
  return res.send(`Watch #${req.params.id}`);
};
export const edit = (req, res) => {
  console.log(req.params);
  return res.send(`Edit #${req.params.id}`);
};
export const search = (req, res) => res.send("Search Videos");
export const upload = (req, res) => res.send("upload Video");
export const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.send(`delete Video #${req.params.id}`);
};
