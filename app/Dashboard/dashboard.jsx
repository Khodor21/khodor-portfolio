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
            <TabPanel>
              <Portfolio />
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </Card>
    </div>
  );
};

export default Dashboard;

// import {
//   Card,
//   Flex,
//   Metric,
//   ProgressBar,
//   Tab,
//   TabGroup,
//   TabList,
//   TabPanel,
//   TabPanels,
//   Text,
// } from "@tremor/react";

// const TabExample = () => {
//   return (
//     <Card>
//       <Text>Total Sales</Text>
//       <Metric>$ 442,276</Metric>
//       <TabGroup>
//         <TabList className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           <Tab className="bg-blue text-third p-4 rounded-md hover:bg-blue/70 mr-4">
//             Read Form Details
//           </Tab>
//           <Tab className="bg-green-500 text-third p-4 rounded-md hover:bg-green-700">
//             Customer Names and Numbers
//           </Tab>{" "}
//           <Tab className="bg-purple-500 text-third p-4 rounded-md hover:bg-purple-700">
//             Post Images to Portfolio
//           </Tab>
//         </TabList>
//         <TabPanels>
//           <TabPanel>
//             <div className="mt-10">
//               <Flex className="mt-4">
//                 <Text className="w-full">Product Y</Text>
//                 <Flex className="space-x-2" justifyContent="end">
//                   <Text>$ 108,799</Text>
//                   <Text>38%</Text>
//                 </Flex>
//               </Flex>
//               <ProgressBar value={38} className="mt-2" />
//             </div>
//           </TabPanel>
//           <TabPanel>
//             <div className="mt-10">
//               <Flex className="mt-4">
//                 <Text className="w-full">Product Z</Text>
//                 <Flex className="space-x-2" justifyContent="end">
//                   <Text>$ 99,484</Text>
//                   <Text>16%</Text>
//                 </Flex>
//               </Flex>
//               <ProgressBar value={12} className="mt-2" />
//             </div>
//           </TabPanel>{" "}
//           <TabPanel>
//             <div className="mt-10">
//               <Flex className="mt-4">
//                 <Text className="w-full">Product M</Text>
//                 <Flex className="space-x-2" justifyContent="end">
//                   <Text>$ 99,484</Text>
//                   <Text>80%</Text> {/* Adjust the percentage value */}
//                 </Flex>
//               </Flex>
//               <ProgressBar value={80} className="mt-2" />{" "}
//             </div>
//           </TabPanel>
//         </TabPanels>
//       </TabGroup>
//     </Card>
//   );
// };
