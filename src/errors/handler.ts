import {ErrorRequestHandler} from "express";

const errorHandler:ErrorRequestHandler = (error, req, res, next) => {
    console.log(error);

    return res.status(500).json({status: "Internal server error"});
}

export default errorHandler;