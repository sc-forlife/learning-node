import { CustomAPIError } from "../errors/custom-error.js";

export const errorHandlerMiddleware = (err, req, res, next) => {
  // console.log(err);
  if (err instanceof CustomAPIError) {
    return res.status(err.status).json({ msg: err.message });
  }
  return res.status(500).json({ msg: "Something went wrong please try again" });
};
