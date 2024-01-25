const isAuth = (req, res, next) => {
    const apiKey = req.headers.apikey;

    console.log('Received apiKey:', apiKey);

    if (!apiKey) {
        return res.status(401).json({
            status_code: 401,
            error: {
                code: "ec_auth-01",
                message: "Maaf, kamu membutuhkan ApiKey untuk melakukan request API",
            },
        });
    }

    if (apiKey !== process.env.API_KEY) {
        console.log('Invalid apiKey:', apiKey);
        return res.status(403).json({
            error: {
                status_code: 403,
                code: "ec_auth-03",
                message: "Maaf, ApiKey salah, silahkan request",
            },
        });
    }

    return next();
}

module.exports = isAuth;
