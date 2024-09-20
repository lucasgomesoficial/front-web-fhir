import { Hash, MapPinIcon, PackageCheck, UserCircle, Users } from "lucide-react";



export function CardInformations({ address, residentAmount, deliveryAmount, tokenResident }) {
  return (
    <div className="flex justify-between py-8 px-8">
      <div className="w-full sm:w-80 h-full border rounded-lg border-solid border-inherit shadow-lg">
        <div className="flex px-8 pt-4 items-start gap-4">
          <h3 className="text-base font-medium">Informações Gerais</h3>
        </div>
        <div className="flex px-8 pt-6 items-start gap-4">
          <MapPinIcon size={68} color="#0074D9" />
          <p className="text-base font-normal"><span className="font-bold">Endereço: </span>{address}</p>
        </div>
        <div className="flex px-8 pt-6 items-start gap-4">
          <Users size={24} color="#0074D9" />
          <p className="text-base font-normal"><span className="font-bold">Quantidade de Moradores: </span>{residentAmount} </p>
        </div>
        <div className="flex px-8 pt-6 items-start gap-4">
          <PackageCheck size={24} color="#0074D9" />
          <h3 className="text-base font-normal"><span className="font-bold">Quantidade  de entregas: </span>{deliveryAmount}</h3>
        </div>
        <div className="flex px-8 pt-6 gap-4">
          <Hash size={24} color="#0074D9" />
          <h3 className="text-base font-normal"><span className="font-bold">Código de recebimento: </span>{tokenResident}</h3>
        </div>
        <div className="flex mt-8 mb-2 px-8 pt-4 items-start gap-4">
          <h3 className="text-base font-medium">Colaboradores Ativos</h3>
        </div>
        <div className="flex mb-2 px-8 pt-4 items-start gap-4">
          <p className="flex space-x-5 cursor-pointer">
            <UserCircle size={24} color="#0074d9"/>
            <UserCircle size={24} color="#0074d9"/>
            <UserCircle size={24} color="#0074d9"/>
            <UserCircle size={24} color="#0074d9"/>
            <UserCircle size={24} color="#0074d9"/>
          </p>
        </div>
      </div>
    </div>
  );
}