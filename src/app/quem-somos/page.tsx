import Head from "next/head";
import Banner from "@/components/Banner";
import Link from "next/link";
import { Container, Paper, Typography, Box, Divider } from "@mui/material";

export default function QuemSomos() {
  return (
    <>
      <Head>
        <title>Quem Somos - Cooperativa Habitacional Diamond</title>
        <meta
          name="description"
          content="Conheça a Cooperativa Habitacional em que torna o sonho da casa própria uma realidade através do cooperativismo. Junte-se a nós para alcançar seus objetivos de moradia com segurança e economia"
        />
        <meta property="og:title" content="Quem Somos" />
        <meta
          property="og:description"
          content="Junte-se à nossa cooperativa habitacional e torne realidade o sonho da casa própria através do cooperativismo. Garantia de segurança e economia para você e sua família."
        />
        <meta
          property="og:url"
          content="https://diamondhabitacional.com.br/quem-somos"
        />
      </Head>
      <main>
        <Banner
          imagePath="/banners/quem-somos.jpg"
          title="Quem Somos"
          text="Cooperativa habitacional que busca realizar o sonho da casa própria através do cooperativismo"
        />
        <Container maxWidth="md" sx={{ py: { xs: 4, md: 8 } }}>
          <Paper elevation={3} sx={{ p: { xs: 3, md: 6 }, borderRadius: 4 }}>
            <Typography variant="h4" fontWeight={700} color="primary" gutterBottom>
              Sobre a Diamond
            </Typography>
            <Typography variant="body1" paragraph>
              A Diamond é uma Cooperativa Habitacional, e sua essência é a ajuda mútua para a realização do sonho da casa própria. Para que isso aconteça, os cooperados contribuem mensalmente com valor monetário para que seja possível a construção das unidades habitacionais. Porém, sem intermediários e sem objetivar lucro algum.
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>O cooperativismo é um modelo muito popular no exterior</strong>, e apesar de já existir no Brasil desde 1889, poucas pessoas têm acesso à esta oportunidade. A Cooperativa Habitacional Diamond foi criada para alcançar mais pessoas, na esperança de um dia tornar este modelo o programa de habitação mais procurado devido às suas grandes vantagens.
            </Typography>
            <Typography variant="body1" paragraph>
              Trabalhando em prol das famílias desde junho de 2021, nossa cooperativa iniciou suas atividades na cidade de Caieiras. Nosso objetivo com a entrega de moradia é alcançar todos os públicos. Cada projeto tem seu diferencial, assim como é o nosso propósito: oferecer opções onde o cooperado tem a oportunidade de escolher entre um, dois ou{" "}
              <Link style={{ color: "#995522", fontWeight: 600 }} href="/projetos/residencial-safira" target="_blank">
                3 dormitórios
              </Link>
              , desde apartamentos compactos a maiores, e a{" "}
              <Link style={{ color: "#995522", fontWeight: 600 }} href="/projetos/residencial-topazio" target="_blank">
                sobrados residenciais
              </Link>
              .
            </Typography>
            <Divider sx={{ my: 4 }} />
            <Box mb={4}>
              <Typography variant="h5" fontWeight={700} color="#995522" align="center" gutterBottom>
                Missão
              </Typography>
              <Typography variant="body1" align="center">
                Dar oportunidade a pessoas que trabalham duro para ter uma vida melhor, de conquistarem sua moradia de maneira digna e com todas as facilidades que oferecemos. Nossa missão é facilitar todo <strong>processo da aquisição de um lar</strong>.
              </Typography>
            </Box>
            <Box mb={4}>
              <Typography variant="h5" fontWeight={700} color="#995522" align="center" gutterBottom>
                Visão
              </Typography>
              <Typography variant="body1" align="center">
                Acreditamos que todos os brasileiros deveriam ter conhecimento e acesso a este incrível programa habitacional que é a cooperativa, onde juntos somos mais fortes, um grupo unido com o mesmo objetivo.
              </Typography>
            </Box>
            <Box>
              <Typography variant="h5" fontWeight={700} color="#995522" align="center" gutterBottom>
                Valores
              </Typography>
              <Typography variant="body1" align="center">
                Defendemos a transparência, honestidade, humildade e trabalho árduo. Respeitamos as diferenças e apoiamos a diversidade de pessoas, pois como grupo, as diferenças nos tornam um só. Acreditamos na união, na esperança e na fé. Apoiamos a coletividade, a igualdade de direitos, o respeito mútuo e o desejo de crescimento pessoal e profissional.
              </Typography>
            </Box>
          </Paper>
        </Container>
      </main>
    </>
  );
}
