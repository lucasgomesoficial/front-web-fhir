import { Ruler, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { WeightIcon } from "../../assets/weightIcon";
import {
  Button,
  CardGraphInfo,
  CardStatsInfo,
  Header,
} from "../../components/index";
import { SelectMonth } from "./components/selectMonth";
import { dataFeelings, dataGraph, selectMonth } from "./config";

export function Dashboard() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <section className="px-14 pt-12">
        <div className="flex justify-between">
          <h2 className="text-4xl font-bold">Dashboard</h2>
          <div className="flex gap-5">
            <SelectMonth months={selectMonth} />
            <Button
              className="flex gap-5 text-base"
              onClick={() => navigate("/profile")}
            >
              <User /> Perfil
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-4 mt-12">
          <div className="flex justify-start p-5">
            <img
              className="rounded-full"
              src="https://avatars.githubusercontent.com/u/66390420?v=4"
              alt="image de perfil"
            />
          </div>
          <div className="col-span-2 flex items-center">
            <CardStatsInfo
              title="Peso"
              msg="69 Kg"
              description="+5 kilos comparado ao mes anterior"
              iconCard={WeightIcon}
            />
          </div>
          <div className="col-span-2 flex items-center">
            <CardStatsInfo title="Altura" msg="1.80" iconCard={Ruler} />
          </div>
          <div>
            <CardGraphInfo
              dataFeelings={dataFeelings}
              title="Sentimentos mais aparentes"
            />
          </div>
          <div className="col-span-2 h-64">
            <CardGraphInfo
              dataGraph={dataGraph}
              title="Nível de estresse durante o ano"
              description="+20% do mês anterior"
            />
          </div>
          <div className="col-span-2 h-64">
            <CardGraphInfo
              dataGraph={dataGraph}
              title="Variação de peso durante o ano"
              description="+2% do mês anterior"
            />
          </div>
        </div>
      </section>
    </>
  );
}
