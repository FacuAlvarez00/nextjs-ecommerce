import { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <ul>
              <li>
              <Link href="/">Home</Link>
              </li>

              <li>
              <Link href="/products">Products</Link>
              </li>

          </ul>
      <body>
        <Main />
        <NextScript />
        
      </body>
    </Html>
  )
}
