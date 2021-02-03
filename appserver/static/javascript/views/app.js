// React JSX Definition for Icecast Config pane - compiled to icecastConfig.js
import * as Submit from "./submit.js";
define(["react", "splunkjs/splunk"], function (React, splunk_js_sdk) {
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
      this.setState({ ...this.state,
        [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
      });
    }

    async handleSubmit(event) {
      event.preventDefault();
      await Submit.perform(splunk_js_sdk, this.state);
    }

    render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Icecast Application Settings"), /*#__PURE__*/React.createElement("div", {
        id: "formwrapper"
      }, /*#__PURE__*/React.createElement("form", {
        id: "configform",
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/React.createElement("label", {
        for: "acceptFrom"
      }, "IP of Icecast Server Sending Syslogs:"), /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "acceptFrom",
        id: "acceptFrom",
        value: this.state.acceptFrom,
        onChange: this.handleChange
      }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
        for: "tcp"
      }, "TCP Connection:"), /*#__PURE__*/React.createElement("input", {
        type: "checkbox",
        name: "tcp",
        id: "tcp",
        checked: this.state.tcp,
        onChange: this.handleChange
      }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
        for: "index"
      }, "Index to Store Logs:"), /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "index",
        id: "index",
        value: this.state.index,
        onChange: this.handleChange
      }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
        type: "submit",
        value: "Submit"
      }))));
    }

  }

  return /*#__PURE__*/React.createElement(ConfigPanel, null);
});

