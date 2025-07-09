import React from "react";
import { flush } from "@gluestack-ui/nativewind-utils/flush";
import { AppRegistry } from "react-native-web";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
Document.getInitialProps = async ({ renderPage }) => {
  AppRegistry.registerComponent("Main", () => Main);
  const { getStyleElement } = AppRegistry.getApplication("Main");
  const page = await renderPage();
  const styles = [getStyleElement(), flush()];
  return { ...page, styles: React.Children.toArray(styles) };
};
