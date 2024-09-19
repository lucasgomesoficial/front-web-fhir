import {
  CardStatsInfo,
  Header,
} from "../../components/index";

export function Dashboard() {
  return (
    <>
      <Header />
      <section className="px-14 pt-12 mt-12">
        <div className="flex flex-wrap justify-center gap-4">
          <CardStatsInfo />
          <div className="border border-solid border-inherit"></div>
          <CardStatsInfo
            orderNumber="#0000"
            orderStatus="received"
            tokenDelivery={8885}
          />
          <CardStatsInfo
            orderNumber="#0001"
            orderStatus="preparing"
            tokenDelivery={8886}
          />
          <CardStatsInfo
            orderNumber="#0002"
            orderStatus="sending"
            tokenDelivery={8887}
          />
        </div>
      </section>
    </>
  );
}