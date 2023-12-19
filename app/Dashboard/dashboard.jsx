import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link href="/form-details">
          <p className="bg-blue text-third p-4 rounded-md hover:bg-blue-700">
            Read Form Details
          </p>
        </Link>
        <Link href="/customer">
          <p className="bg-green-500 text-third p-4 rounded-md hover:bg-green-700">
            Customer Names and Numbers
          </p>
        </Link>
        <Link href="/portfolio">
          <p className="bg-purple-500 text-third p-4 rounded-md hover:bg-purple-700">
            Post Images to Portfolio
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
