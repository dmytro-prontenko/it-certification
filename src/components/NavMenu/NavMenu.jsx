import { ListPage, PageLink } from "./NavMenu.styled";
const NavMenu = () => {
  return (
    <ListPage>
      <li>
        <PageLink to="/">Головна</PageLink>
      </li>
      <li>
        <PageLink to="/teachers">Викладачі</PageLink>
      </li>
      <li>
        <PageLink to="/universities">ЗВО</PageLink>
      </li>
      <li>
        <PageLink to="/specialties">Спеціальність</PageLink>
      </li>
      <li>
        <PageLink to="/education-levels">Рівень освіти</PageLink>
      </li>
      <li>
        <PageLink to="/education-programs">Освітні програми</PageLink>
      </li>

      <li>
        <PageLink to="/department">Кафедри</PageLink>
      </li>
      <li>
        <PageLink to="/discipline-blocks">Блок дисциплін</PageLink>
      </li>
      <li>
        <PageLink to="/disciplines">Дисципліна</PageLink>
      </li>
      <li>
        <PageLink to="/discipline-groups">Група дисциплін</PageLink>
      </li>
    </ListPage>
  );
};

export default NavMenu;
