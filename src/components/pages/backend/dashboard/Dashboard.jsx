import { ChevronDown, Dot } from "lucide-react";
import Footer from "../partials/Footer";
import Header from "../partials/Header";
import SideNavigation from "../partials/SideNavigation";
import DashboardCard from "./DashboardCard";
import DashboardAccordion from "./DashboardAccordion";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useQueryData from "@/components/custom-hook/useQueryData";
import TableLoader from "../partials/TableLoader";
import FetchingSpinner from "@/components/partials/spinner/FetchingSpinner";
import IconNoData from "../partials/IconNoData";
import { getCategoryPrices } from "./function";
import { data } from "autoprefixer";

const Dashboard = () => {
  const {
    isLoading: isLoadingCategory,
    isFetching: isFetchingCategory,
    error: errorCategory,
    data: dataCategory,
  } = useQueryData(
    `/v2/category`, //endpoint
    "get", //method
    "category" //key
  );

  const {
    isLoading: isLoadingFood,
    isFetching: isFetchingFood,
    error: errorFood,
    data: dataFood,
  } = useQueryData(
    `/v2/recipe`, //endpoint
    "get", //method
    "recipe" //key
  );

  const {
    isFetchinglevel,
    errorlevel,
    data: level,
    statuslevel,
  } = useQueryData(
    `/v2/level`, //endpoint
    "get", //method
    "level" //key
  );

  const tableData = getCategoryPrices(dataCategory, dataFood, level);
  console.log(tableData);

  return (
    <>
      <section className="layout-main ">
        <div className="layout-division ">
          <SideNavigation menu="dashboard" />
          <main>
            <Header title="DashBoard" subtitle="Welcome to Cooking-Ina" />
            <div className="p-5 overflow-y-auto custom-scroll">
              <div className="grid grid-cols-[1fr_400px] gap-5">
                <div className="stats">
                  <div className="relative chart pb-16">
                    {(isFetchingCategory || isFetchingFood) &&
                      !isLoadingCategory &&
                      !isLoadingFood && <FetchingSpinner />}
                    {isLoadingCategory || isLoadingFood ? (
                      <TableLoader cols={1} count={15} />
                    ) : (
                      <ResponsiveContainer width={1275} height={400}>
                        <h3>Recipe Levels</h3>
                        <BarChart
                          width={500}
                          height={300}
                          data={tableData}
                          margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="category_title" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="Easy" stackId="a" fill="#8884d8" />
                          <Bar dataKey="moderate" stackId="a" fill="#82ca9d" />
                          <Bar dataKey="hard" stackId="a" fill="#900D09" />
                        </BarChart>
                      </ResponsiveContainer>
                    )}
                  </div>
                  <div className="relative">
                    {isFetchingCategory && !isLoadingCategory && (
                      <FetchingSpinner />
                    )}
                    {isLoadingCategory && <TableLoader cols={4} count={10} />}
                    {dataCategory?.count === 0 && <IconNoData />}
                    <div className="grid grid-cols-4 gap-5">
                      {dataCategory?.count > 0 &&
                        dataCategory.data.map((item, key) => (
                          <DashboardCard
                            key={key}
                            item={item}
                            dataFood={dataFood}
                          />
                        ))}
                    </div>
                  </div>
                </div>

                <div className="sidebar overflow-auto custom-scroll h-[calc(100vh-200px)] relative">
                  {isFetchingCategory && <TableLoader cols={1} count={15} />}
                  {dataCategory?.count === 0 && <IconNoData />}
                  {dataCategory?.count > 0 &&
                    dataCategory?.data.map((item, key) => {
                      return (
                        <DashboardAccordion
                          key={key}
                          item={item}
                          dataFood={dataFood}
                        />
                      );
                    })}
                </div>
              </div>
            </div>

            <Footer />
          </main>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
