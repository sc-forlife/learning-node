import mongoose from "mongoose";

const connectionString =
  "mongodb+srv://salemsc7_db_user:<db_password>@nodeexpressprojects.2gsjl7j.mongodb.net/?appName=NodeExpressProjects";

mongoose.connect(connectionString);
