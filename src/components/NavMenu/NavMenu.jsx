import { ListPage, PageLink, Wrapper} from "./NavMenu.styled";
const NavMenu = () => {
  return (
    <Wrapper>
      <ListPage>
        <li>
          <PageLink to="/">Головна</PageLink>
        </li>
        <li>
          <PageLink to="/teachers">Викладачі</PageLink>
        </li>
        <li>
          <PageLink to="/institution">ЗВО</PageLink>
        </li>
        <li>
          <PageLink to="/specialty">Спеціальність</PageLink>
        </li>
        <li>
          <PageLink to="/educational">Рівень Освіти</PageLink>
        </li>
        <li>
          <PageLink to="/programs">Освітні програми</PageLink>
        </li>

        <li>
          <PageLink to="/department">Кафедри</PageLink>
        </li>
        <li>
          <PageLink to="/blocdisciplines">Блок дисциплін</PageLink>
        </li>
        <li>
          <PageLink to="/discipline">Дисципліна</PageLink>
        </li>
        <li>
          <PageLink to="/groupdisciplines">Група дисциплін</PageLink>
        </li>
      </ListPage>
      </Wrapper>
  );
};

export default NavMenu;
