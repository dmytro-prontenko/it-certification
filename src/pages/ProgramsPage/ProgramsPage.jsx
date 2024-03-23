import Hero from "../../components/Hero/Hero";

const ProgramsPage = () => {
  const subtitle = "Перелік освітніх програм";
  const subtext =
    "Освітні програми в ЗВО Харкова та Харківської області, які належать до інформаційних технологій";
  return (
    <>
      <Hero subtitle={subtitle} subtext={subtext} />
    </>
  );
};

export default ProgramsPage;
