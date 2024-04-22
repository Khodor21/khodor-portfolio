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
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      {/* <TabExample /> */}
      <Card>
        <TabGroup>
          <TabList className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Tab className="bg-blue text-third p-4 rounded-md hover:bg-blue/70 mr-4">
              Form
            </Tab>
            <Tab className="bg-green-500 text-third p-4 rounded-md hover:bg-green-700">
              Message
            </Tab>

            <Tab className="bg-purple-500 text-third p-4 rounded-md hover:bg-purple-700">
              Post
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <UsersTable />
            </TabPanel>
            <TabPanel>Hello Message</TabPanel>
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
