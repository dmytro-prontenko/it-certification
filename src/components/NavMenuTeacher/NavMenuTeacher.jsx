import { ListItem, ListPage, PageLink } from "./NavMenuTeacher.styled";

const NavMenuTeacher = () => {
  return (
    <>
      <ListPage>
        <ListItem>
          <PageLink to="/teachers-cabinet/calendar">Розклад</PageLink>
        </ListItem>
        <ListItem>
          <PageLink to="/teachers-cabinet/silabus">Силабуси</PageLink>
        </ListItem>
        <ListItem>
          <PageLink to="/teachers-cabinet/reviews">Події</PageLink>
        </ListItem>
        <ListItem>
          <PageLink to="/teachers-cabinet/lecture">Відгуки</PageLink>
        </ListItem>
      </ListPage>
    </>
  );
};
export default NavMenuTeacher;
