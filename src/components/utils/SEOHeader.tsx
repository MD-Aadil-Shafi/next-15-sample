import Head from "next/head"

type HeadType = {
    title:string,
    desc: string,
    keyword: string,
}
const SEOHeader = ({title, desc, keyword}: HeadType) => {
  return (
    <Head>
    <title>{title}</title>
        <meta
          name='description'
          content={desc}
          key='desc'
        />
        <meta name="keywords" content={keyword}></meta>
    </Head>
  )
}

export default SEOHeader