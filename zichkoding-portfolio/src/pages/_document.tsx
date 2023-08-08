import { Html, Head, Main, NextScript } from 'next/document'

// const background_image = './imgs/backgrounds/webb_galaxy_img_lg.png'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-webb-background bg-no-repeat bg-cover'>
        {/* <img src={background_image} alt="" width={500} height={500} /> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
