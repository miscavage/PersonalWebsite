//Modules
import Document, { Head, Main, NextScript } from 'next/document'

/**
 * Document
 */
export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <script src='https://www.google.com/recaptcha/api.js'></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}
