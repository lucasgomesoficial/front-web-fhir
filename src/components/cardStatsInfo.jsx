import { Star } from "lucide-react";
import deliveryimg from "./../assets/deliveryImg.png"

export function CardStatsInfo({ orderNumber, orderStatus, tokenDelivery }) {
  const status = {
    preparing: "Preparando",
    sending: "A Caminho",
    received: "Recebido",
  }

  return (
    <div className="flex justify-between py-8 px-8">
      <div className="w-full sm:w-80 h-full border rounded-lg border-solid border-inherit shadow-lg">
        <div className="flex border rounded-t-lg border-solid border-inherit shadow-lg bg-[#0074D9] px-11 pt-4 items-start gap-4">
          <img src={deliveryimg} alt="animação entrega delivery" />
        </div>
        <div className="flex px-8 pt-4 items-start gap-4">
          <h3 className="text-base font-bold">Entrega:{orderNumber}</h3>
        </div>
        <div className="flex px-8 pt-4 items-start gap-4">
          <p className="text-base font-normal">Sua entrega é realizada por um colaborador parceiro</p>
        </div>
        <div className="flex px-8 pt-4 items-start gap-4">
          <h3 className="text-base font-normal"><span className="font-bold">Status: </span>{status[orderStatus]}</h3>
        </div>
        <div className="flex px-8 pt-4 items-start gap-4">
          <h3 className="text-base font-normal"><span className="font-bold">Código de recebimento: </span>{tokenDelivery}</h3>
        </div>
        <div className="flex mt-8 mb-2 px-8 pt-4 items-start gap-4">
          <p className="flex space-x-1 cursor-pointer"><Star /><Star /><Star /><Star /><Star /></p>
        </div>
        <div className="flex mb-12 px-8 pt-4 items-start gap-4">
          <p className="text-secondary font-bold">Avaliar Entrega</p>
        </div>
      </div>
    </div>
  );
}
