import {
  Card,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@tremor/react";
import UsersTable from "./FormDetails.jsx";
import Portfolio from "./Portfolio.jsx";
import ProjectForm from "./Project.jsx";

const Dashboard = () => {
  return (
    <div className="mx-auto p-4">
      <h1 className="text-3xl mb-4 text-right arabic text-second">
        لوحة التحكّم
      </h1>
      <Card>
        <TabGroup>
          <TabList className="mt-8 mx-auto flex flex-col-reverse md:flex-row-reverse md:justify-between gap-4">
            <Tab className="bg-third text-main flex justify-end arabic w-full p-4 rounded-md hover:bg-third/70">
              الرئيسيَة
            </Tab>
            <Tab className="bg-third text-main flex justify-end arabic w-full p-4 rounded-md hover:bg-green-700">
              الرسائل
            </Tab>
            <Tab className="bg-third text-main flex justify-end arabic w-full p-4 rounded-md hover:bg-third/30">
              نشر
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel className="py-8">
              <UsersTable />
            </TabPanel>
            <TabPanel className="flex flex-col gap-2">
              <Portfolio />
              <ProjectForm />
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </Card>
    </div>
  );
};

export default Dashboard;
