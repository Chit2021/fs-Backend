export function errorLoggingMiddleware(error, req, res, next) {
    if (error.status && error.status >= 400 && error.status < 600) {
        console.log(`👀 ${error.status} ERRROOOR!!`);
        res.json({ msg: `${error.status} ERROR!!!!` });
    }
    next(error);
}
