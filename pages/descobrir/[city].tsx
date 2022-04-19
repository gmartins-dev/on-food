import Head from "next/head";
import { PageTemplate, DishList } from "@/components";
import Styles from "../../styles/discovery.module.css";
import { api } from "@/services";
import { CityPros, ParamsStaticProps, PageDiscoverProps } from "@/types";

export default function Descobrir(props: PageDiscoverProps) {

  const { city } = props;

  return (
    <>
    <Head>
      <title>iHungry - Food Delivery App - See the best food places in {city.name}</title>
      <meta name="description" content={`iHungry - Food Delivery App - See the best food places in {city.name}`} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <PageTemplate>
      <div className={Styles.content}>
        <h1>Option in the {city.name} city</h1>
        <p>Found {city.catalogEstimated} options</p>
        <div className={Styles.items}>
          <DishList citySlug={city.slug}/>
        </div>
      </div>
    </PageTemplate>
    </>
  );
}


export async function getStaticPaths() {

  const response = await api.get("/cities");
  const cities = response.data;

  const urls = cities.map((city: CityPros) => ({
    params: {
      city: city.slug,
    },
  }));

  return {
    paths: urls,
    fallback: false,
  }
}


//função para que a pagina seja "renderizada parcialmente" 
//para melhorar o desempenho e diminuir consumo
export async function getStaticProps({ params } : ParamsStaticProps) {

    const citySlug = params?.city as string;
    const response = await api.get(`/cities?citySlug=${citySlug}`);

    const city = response.data;

    return{
      props: {
        city,
      },
      revalidate: 30,
    };
}

