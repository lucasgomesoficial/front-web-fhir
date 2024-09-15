import { useNavigate } from "react-router-dom";
import {
  CardGraphInfo,
  CardStatsInfo,
  Header,
} from "../../components/index";
import { dataFeelings, dataGraph } from "./config";

export function Dashboard() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <section className="px-14 pt-12 mt-12">
        <div className="flex justify-between">
          <div>
            <CardStatsInfo 
              title={"Informações Gerais"}             
            />
          </div>
          <div className="border border-solid border-inherit"></div>
          <CardStatsInfo />
          <CardStatsInfo />
          <CardStatsInfo />
        </div>
      </section>
    </>
  );
}
