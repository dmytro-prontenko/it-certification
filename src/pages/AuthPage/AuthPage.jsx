import { Tabs } from "@mui/base/Tabs";

import SignInForm from "../../components/Forms/SignInFrom/SignInForm";
import SignUpForm from "../../components/Forms/SignUpForm/SignUpForm";
import { StyledTabsWrapper, Tab, TabPanel, TabsList, tabSx } from "./AuthPage.styled";

const AuthPage = () => {
return (
  <StyledTabsWrapper>
    <Tabs defaultValue={1} sx={tabSx} centered="true">
      <TabsList>
        <Tab value={1}>Реєстрація</Tab>
        <Tab value={2}>Вхід</Tab>
      </TabsList>
      <TabPanel value={1}>
        <SignUpForm />
      </TabPanel>
      <TabPanel value={2}>
        <SignInForm />
      </TabPanel>
    </Tabs>
  </StyledTabsWrapper>
);
};

export default AuthPage;
