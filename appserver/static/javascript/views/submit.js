import * as Splunk from './splunk_helpers.js'

console.log("in submit now");

export async function perform(splunk_js_sdk, config_options) {
    const APP_NAME = "icecast_app";

    let http = new splunk_js_sdk.SplunkWebHttp();
    let service = new splunk_js_sdk.Service(http, {
        owner: "nobody",
        app: APP_NAME,
        sharing: "app"
    });

    let {tcp, ...options} = config_options;
    options.connection_host = "ip";

    // set [TCP/UDP:514] stanza in inputs.conf to input values
    await Splunk.update_configuration_file(service, "inputs", `${tcp ? "tcp" : "udp"}:514`, options);

    console.log("config updated...");
    
    // set is_configured in [install] stanza in app.conf to true
    await Splunk.update_configuration_file(service, "app", "install", {'is_configured' : "true"});

    let apps = service.apps();
    await apps.fetch();

    let current_app = apps.item(APP_NAME);
    current_app.reload();

    window.location.href = `/app/${APP_NAME}`;
};
