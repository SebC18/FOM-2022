var rewrite = require("express-urlrewrite");

const router = function (app) { 
    app.get("/api/map", rewrite("/static/apimap.json"));
    app.get("/api/fom/ravespecs", rewrite("/db/ravespecs"));
    app.get("/api/fom/kaleidos", rewrite("/db/kaleidos"));
    // function(req, resp) {
    //     const msg = "Erreur 404 adresse non trouvée";
    //     resp.status(404).send(msg);
    // });
    app.get("/api/fom/sunglasses", rewrite("/db/sunglasses"));
}

function generateErrorJson(errorCode) {
    return {
        errorCode: errorCode,
        userMessage: "",
        errorDate: (new Date()).toISOString()
    }
}
module.exports = router;