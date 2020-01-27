import React, { PureComponent } from "react";
import { CssBaseline } from "@material-ui/core";
import { Header, Footer } from "./Layouts";

import { Provider } from "../context";
import { Video } from "./Work";

class App extends PureComponent {
  getContext = () => ({
    ...this.state
  });

  render() {
    return (
      <Provider value={this.getContext()}>
        <CssBaseline />

        <Header />

        <Video />

        <Footer />
      </Provider>
    );
  }
}

export default App;
