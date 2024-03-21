import Hero from "../../components/Hero/Hero";

const InstitutionPage = () => {
  const subtitle = "Перелік Вищих навчальних закладів ЗВО";
  const subtext =
    "Вузи Харкова та Харківської області - університети, інститути, академії та інші вищі навчальні заклади ВНЗ 3-4 рівня академії ";

  return (
    <>
      <Hero subtitle={subtitle} subtext={subtext} />
    </>
  );
};

export default InstitutionPage;
