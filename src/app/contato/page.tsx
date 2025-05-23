import Head from "next/head";
import { SlLocationPin } from "react-icons/sl";
import Banner from "@/components/Banner";
import { Card, CardContent, Typography, Divider, Box, Container } from "@mui/material";

const locais = [
  {
    nome: "Caieiras",
    endereco: "Rua Anu, 60 - Laranjeiras, Caieiras - SP",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.057139463369!2d-46.723402096530194!3d-23.383991033355574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cee4cdc7aaae07%3A0xb70e424f34de2537!2sR.%20Anu%2C%2060%20-%20Laranjeiras%2C%20Caieiras%20-%20SP%2C%2007700-000!5e0!3m2!1spt-BR!2sbr!4v1688182180288!5m2!1spt-BR!2sbr",
  },
  {
    nome: "Mauá",
    endereco: "Av Capitão João, 70 - Mauá, Centro - SP",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.209493933678!2d-46.46491192460876!3d-23.668465065535862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce6968bc445293%3A0xda2df492a469722f!2sAv.%20Cap.%20Jo%C3%A3o%2C%2070%20-%20Matriz%2C%20Mau%C3%A1%20-%20SP%2C%2009360-120!5e0!3m2!1spt-BR!2sbr!4v1714265039304!5m2!1spt-BR!2sbr",
  },
];

export default function Contato() {
  return (
    <>
      <Head>
        <title>Contato - Cooperativa Habitacional Diamond</title>
        <meta
          name="description"
          content="Entre em contato conosco na Diamond Habitacional. Estamos aqui para responder às suas perguntas, fornecer informações detalhadas sobre nossos programas de habitação e ajudá-lo a dar o primeiro passo em direção ao seu sonho da casa própria."
        />
        <meta property="og:title" content="Fale com a Diamond" />
        <meta
          property="og:description"
          content="Estamos à disposição para responder às suas perguntas, fornecer informações detalhadas sobre nossos programas de habitação e ajudá-lo a dar o primeiro passo em direção ao seu sonho da casa própria. Contate-nos hoje mesmo."
        />
        <meta
          property="og:url"
          content="https://diamondhabitacional.com.br/contato"
        />
        <meta property="og:type" content="website" />
      </Head>
      <Banner
        imagePath="/banners/contato.jpg"
        title="Contato"
        text="Conheça agora o melhor Programa de Habitação que chegou na cidade de Caieiras e região!"
      />
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Typography variant="h3" align="center" gutterBottom fontWeight={700}>
          Nossas centrais de atendimento
        </Typography>
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          gap={4}
          justifyContent="center"
          alignItems="stretch"
          mt={4}
        >
          {locais.map((local, idx) => (
            <Card key={local.nome} sx={{ flex: 1, minWidth: 300, boxShadow: 3 }}>
              <CardContent>
                <Box display="flex" alignItems="center" gap={1} mb={1}>
                  <SlLocationPin size={28} color="#1976d2" />
                  <Typography variant="h5" fontWeight={600}>
                    {local.nome}
                  </Typography>
                </Box>
                <Typography variant="body1" color="text.secondary" mb={2}>
                  {local.endereco}
                </Typography>
                <Box
                  component="iframe"
                  src={local.mapa}
                  width="100%"
                  height="250"
                  sx={{ border: 0, borderRadius: 2 }}
                  loading="lazy"
                  title={`Mapa ${local.nome}`}
                />
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </>
  );
}