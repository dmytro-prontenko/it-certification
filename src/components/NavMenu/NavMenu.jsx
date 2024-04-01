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
          <PageLink to="/specialty">Спеціальність</PageLink>
        </li>
        <li>
          <PageLink to="/education-level">Рівень освіти</PageLink>
        </li>
        <li>
          <PageLink to="/programs">Освітні програми</PageLink>
        </li>

        <li>
          <PageLink to="/department">Кафедри</PageLink>
        </li>
        <li>
          <PageLink to="/disciplines-block">Блок дисциплін</PageLink>
        </li>
        <li>
          <PageLink to="/discipline">Дисципліна</PageLink>
        </li>
        <li>
          <PageLink to="/disciplines-group">Група дисциплін</PageLink>
        </li>
      </ListPage>
   
  );
};

export default NavMenu;
