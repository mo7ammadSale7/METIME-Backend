import Subscripe from "../controllers/Subscribe.Contoller";

const setupRoutes = (app) => {
  app.get("/", Subscripe.ShowAll);
  app.post("/", Subscripe.Add);

  // Get Not Found Page
  app.get("*", (req, res) => res.send("Not Found!"));
};

export default setupRoutes;
