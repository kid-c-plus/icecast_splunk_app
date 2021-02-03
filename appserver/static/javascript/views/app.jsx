// React JSX Definition for Icecast Config pane - compiled to icecastConfig.js
import * as Submit from "./submit.js"

define(["react", "splunkjs/splunk"], 
    (React, splunk_js_sdk) => {
        class ConfigPanel extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    acceptFrom: "127.0.0.1",
                    tcp: true,
                    index: "main"
                };

                this.handleChange = this.handleChange.bind(this);
                this.handleSubmit = this.handleSubmit.bind(this);
                
            }

            handleChange(event) {
                this.setState({...this.state, [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value});
            }

            async handleSubmit(event) {
                event.preventDefault();

                console.log("submitting form...");
                await Submit.perform(splunk_js_sdk, this.state);
            }

            render() {
                return (
                <>
                    <h1>Icecast Application Settings</h1>
                    <div id="formwrapper">
                        <form id="configform" onSubmit={this.handleSubmit}>
                            <label for="acceptFrom">IP of Icecast Server Sending Syslogs:</label>
                            <input type="text" name="acceptFrom" id="acceptFrom" value={this.state.acceptFrom} onChange={this.handleChange} /><br />
                            <label for="tcp">TCP Connection:</label>
                            <input type="checkbox" name="tcp" id="tcp" checked={this.state.tcp} onChange={this.handleChange} /><br />
                            <label for="index">Index to Store Logs:</label>
                            <input type="text" name="index" id="index" value={this.state.index} onChange={this.handleChange} /><br />
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </>);
            }
    }

    return (<ConfigPanel />);
});
