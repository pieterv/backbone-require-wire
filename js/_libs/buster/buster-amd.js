function quote(t) {
    return "'" + t + "'";
}

function amdWrapper(paths, mapper) {
    var tests = paths.map(mapper).map(quote).join(", ");
    var identifiers = paths.map(function (t, i) { return "t" + i; });

    return "require([" + tests + "], function(" + identifiers.join(", ") +
        ") {\n  console.log('loading');\n  buster.run();\n});";
}

module.exports =  {
    name: "buster-amd",

    create: function (options) {
        var ext = Object.create(this);
        var mapper = options && options.pathMapper;
        ext.pathMapper = mapper || function (path) {
            return path.replace(/\.js$/, "").replace(/^\//, "");
        };
        return ext;
    },

    configure: function (conf) {
	conf.options.autoRun = false;

        conf.on("load:tests", function (rs) {
            var paths = rs.loadPath.paths();
	    rs.addResource({
                path: "/buster/load-all.js",
		content: amdWrapper(rs.loadPath.paths(), this.pathMapper)
	    });
            rs.loadPath.clear();
	    rs.loadPath.append("/buster/load-all.js");
        }.bind(this));
    }
};