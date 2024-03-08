import Head from "next/head";
import Link from "next/link";
import Banner from "@/components/Banner";
import Section from "@/components/Section";

export async function getServerSideProps() {
  const request = await fetch(`https://backstage.diamondhabitacional.com.br/news`);
  const response = await request.json();

  return {
    props: {
      posts: response
    }
  };
}

export default function Noticias({ posts }) {
  return (
    <>
      <Head>
        <title>Notícias - Cooperativa Habitacional Diamond</title>
        <meta name="description" content="Acompanhe o progresso das nossas obras na Cooperativa Habitacional Diamond. Esteja por dentro das últimas atualizações e desenvolvimentos dos nossos projetos habitacionais. " />
        <meta property="og:title" content="Acompanhe nossas obras" />
        <meta property="og:description" content="Fique atualizado com o progresso das nossas obras na Cooperativa Habitacional Diamond. Saiba mais sobre os últimos desenvolvimentos em nossos projetos habitacionais e junte-se a nós na transformação de sonhos em realidade." />
        <meta
          property="og:url"
          content="https://diamondhabitacional.com.br/noticias"
        />
        <meta property="og:type" content="website" />
      </Head>
      <main>
        <Banner
          imagePath="/banners/noticias.jpg"
          title="Notícias"
          text="Acompanhe a construção do projeto e receba atualizações constantes em cada etapa importante. Viva a emoção de ver sua nova casa tomando forma. Conte conosco para realizar o sonho da casa própria."
        />
        <div className="my-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:mr-8">
            {posts && posts?.data?.news.map((post) => (
              <Section className="m-2 flex items-center justify-center">
                <Link href={`/noticias/${post?.slug}`}>
                  <div className="w-60 md:w-80 shadow-md shadow-zinc-400 rounded-2xl">
                    <div className="w-full h-60" style={{
                      backgroundImage: `url(https://backstage.diamondhabitacional.com.br${post?.banner})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderTopLeftRadius: "1rem",
                      borderTopRightRadius: "1rem"
                    }}>
                    </div>
                    <div className="p-6 bg-zinc-200 rounded-bl-2xl rounded-br-2xl">
                      <h2 className="text-lg truncate font-bold mb-3">{post?.title}</h2>
                      <p>{`${post?.description.slice(0, 50  )}...`}</p>
                    </div>
                  </div>
                </Link>
              </Section>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
