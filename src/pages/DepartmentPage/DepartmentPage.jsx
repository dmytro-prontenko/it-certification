import Hero from "../../components/Hero/Hero";

const DepartmentPage = () => {
  const subtitle = "Перелік кафедер ЗВО";
  const subtext = "Перелік кафедр ЗВО Харкова та Харківської області";
  return (
    <>
      <Hero subtitle={subtitle} subtext={subtext} />
    </>
  );
};

export default DepartmentPage;
