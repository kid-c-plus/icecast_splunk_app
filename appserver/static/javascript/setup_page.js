// React top-level for Icecast app config view

"use strict";

try {
    require.config({
        paths: {
            icecastConfig: "../app/icecast_app/javascript/views/app",
            react: "../app/icecast_app/javascript/vendor/react.production.min",
            ReactDOM: "../app/icecast_app/javascript/vendor/react-dom.production.min"
        },
        scriptType: "module"
    });

    require(["react", "ReactDOM", "icecastConfig"], 
        function(react, ReactDOM, icecastConfig) {
            ReactDOM.render(icecastConfig, document.getElementById("root"));
        }
    );
} catch (error) {
    console.log(error);
}
