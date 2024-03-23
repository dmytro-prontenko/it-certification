import Hero from "../../components/Hero/Hero";
const EducationalPage = () => {
  const subtitle = "Перелік рівней освіти";
  const subtext =
    " Рівні освіти в ЗВО Харкова та Харківської області, які належать до інформаційних технологій";
  return (
    <>
      <Hero subtitle={subtitle} subtext={subtext} />
    </>
  );
};

export default EducationalPage;
