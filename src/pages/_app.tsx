/* eslint-disable react/prop-types */
import 'Styles/index.css';
import Head from 'next/head';
import App from 'next/app';

export default class ChessGame extends App {
  public render() {
    const { Component, pageProps } = this.props;
    return (
      <div>
        <Head>
          <title>Chess Game</title>
          <meta
            name="description"
            content="Chess game created on next.js"
          />
          <link
            rel="icon"
            href="/favicon.ico"
          />
        </Head>
        <Component {...pageProps} />
      </div>
    );
  }
}

// export default MyApp;
