import { ArrowLeftIcon } from "lucide-react";
import { Button, Header, Label } from "../../components/index";
import { dataProfile } from "./config";
import { useNavigate } from "react-router-dom";

export function Profile() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <section className="px-14 pt-12">
        <div className="flex justify-between">
          <h2 className="text-4xl font-bold">Perfil do Colaborador</h2>
          <Button
            className="flex-initial bg-transparent hover:bg-transparent"
            onClick={() => navigate("/dashboard")}
          >
            <ArrowLeftIcon  color="#0074d9" />
          </Button>
        </div>
        <div className="grid grid-cols-5 gap-4 mt-12">
          <div className="flex flex-col gap-9">
            <img
              className="rounded-full p-5"
              src="https://avatars.githubusercontent.com/u/66390420?v=4"
              alt="image de perfil"
            />
            {dataProfile.profession.map(({ label, value }) => {
              return (
                <div className="ml-9" key={label}>
                  <h3 className="font-bold text-primary">{label}</h3>
                  <p>{value}</p>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center col-span-2">
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-primary">DADOS PESSOAIS</h3>
              {dataProfile.person.map(({ label, value }) => {
                return (
                  <div className="flex items-center gap-2" key={label}>
                    <Label>{label}</Label>
                    <p>{value}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col col-span-2 gap-12">
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-primary">CONTATO</h3>
              {dataProfile.contact.map(({ label, value }) => {
                return (
                  <div className="flex items-center gap-2" key={label}>
                    <Label>{label}</Label>
                    <p>{value}</p>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-primary">CONTATO DE EMERGÊNCIA</h3>
              {dataProfile.contactEmergency.map(({ label, value }) => {
                return (
                  <div className="flex items-center gap-2" key={label}>
                    <Label>{label}</Label>
                    <p>{value}</p>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-primary">DADOS MÉDICOS</h3>
              {dataProfile.medicalData.map(({ label, value }) => {
                return (
                  <div className="flex items-center gap-2" key={label}>
                    <Label>{label}</Label>
                    <p>{value}</p>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-primary">DOENÇAS CRÔNICAS</h3>
              {dataProfile.chronicDiseases.map(({ value }) => {
                return (
                  <div className="flex items-center gap-2" key={value}>
                    <Label>• {value}</Label>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
