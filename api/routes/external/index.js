var external = {};

external.post_new_lead = {
    path: "/api/lead/{campign_id}",
    method: "POST",
    handler: function(req, rep) {
        rep({result: {code: 'OK', data: {campign_id: req.params.campign_id}}});
    }
};


module.exports = external;