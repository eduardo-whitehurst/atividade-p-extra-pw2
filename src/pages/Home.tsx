//Componentes
import FeatureItem from "../components/FeatureItem/FeatureItem";
import { HeaderPage } from "../components/Header";
import ProductWrapper from "../components/ProductWrapper/ProductWrapper";

function Home() {
  return (
    <div className="">
      <HeaderPage />
      <FeatureItem />
      <ProductWrapper />
    </div>
  );
}

export default Home;
