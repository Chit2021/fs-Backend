export function monitorLoggingMiddleware(req, res, next) {
    if (req.method === "POST" && res.statusCode === 200) {
        console.log("👀 [INFO]: created " + req.path);
    }
    next();
}
