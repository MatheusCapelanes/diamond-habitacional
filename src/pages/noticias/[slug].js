import Head from "next/head";

import moment from "moment";
import "moment/locale/pt-br";

moment.locale("pt-br");

export async function getServerSideProps(context) {
  const request = await fetch(`https://backstage.diamondhabitacional.com.br/news/${context.params.slug}`);
  const response = await request.json();

  return {
    props: {
      posts: response
    }
  };
}

export default function NoticiaId({ posts }) {
  const post = posts?.data?.news;

  return (
    <>
      <Head>
        <title>{`${post?.title} - Cooperativa Habitacional Diamond`}</title>
        <meta name="description" content={`${post?.description}`} />
        <meta property="og:title" content={`${post?.title}`} />
        <meta property="og:description" content="Fique atualizado com o progresso das nossas obras na Cooperativa Habitacional Diamond. Saiba mais sobre os últimos desenvolvimentos em nossos projetos habitacionais e junte-se a nós na transformação de sonhos em realidade." />
        <meta
          property="og:url"
          content={`https://diamondhabitacional.com.br/noticias/${post?.slug}`}
        />
        <meta property="og:type" content="website" />
      </Head>
      <div className="w-full flex justify-center items-start min-h-screen">
        <div className="p-8 w-[70%]">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 mt-4 gap-4">
            <h1 className="text-4xl text-[#41220B] font-bold">{post?.title}</h1>
            <span className="text-[#995522] font-semibold">{moment(post?.updatedAt).format('DD [de] MMMM [de] YYYY')}</span>
          </div>
          <div className="mb-8">
            <div className="w-full h-80" style={{
              backgroundImage: `url(https://backstage.diamondhabitacional.com.br${post?.banner})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}></div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: post?.content }}></div>
        </div>
      </div>
    </>
  );
}
