import {
  Bar,
  BarChart,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const priceOverTimeData = [
  { month: "Jan", Nitrogen: 275, Phosphate: 340, Potash: 200 },
  { month: "Feb", Nitrogen: 312, Phosphate: 180, Potash: 355 },
  { month: "Mar", Nitrogen: 360, Phosphate: 230, Potash: 290 },
  { month: "Apr", Nitrogen: 220, Phosphate: 310, Potash: 275 },
  { month: "May", Nitrogen: 340, Phosphate: 265, Potash: 150 },
  { month: "Jun", Nitrogen: 155, Phosphate: 375, Potash: 230 },
  { month: "Jul", Nitrogen: 275, Phosphate: 250, Potash: 365 },
  { month: "Aug", Nitrogen: 370, Phosphate: 190, Potash: 180 },
  { month: "Sep", Nitrogen: 330, Phosphate: 340, Potash: 225 },
  { month: "Oct", Nitrogen: 150, Phosphate: 225, Potash: 310 },
  { month: "Nov", Nitrogen: 355, Phosphate: 150, Potash: 295 },
  { month: "Dec", Nitrogen: 200, Phosphate: 375, Potash: 160 },
];

const priceByCompanyData = [
  { company: "Company A", Nitrogen: 320, Phosphate: 270, Potash: 220 },
  { company: "Company B", Nitrogen: 315, Phosphate: 275, Potash: 225 },
  { company: "Company C", Nitrogen: 330, Phosphate: 265, Potash: 218 },
  { company: "Company D", Nitrogen: 325, Phosphate: 280, Potash: 230 },
  { company: "Company E", Nitrogen: 318, Phosphate: 272, Potash: 222 },
];

export default function FertilizerCharts() {
  return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 px-5">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Fertilizer Prices Over Time</CardTitle>
            <CardDescription>
              Monthly price trends for different fertilizer types
            </CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={priceOverTimeData}>
                <XAxis
                  dataKey="month"
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `$${value}`}
                />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="Nitrogen"
                  stroke="hsl(var(--chart-3))"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="Phosphate"
                  stroke="hsl(var(--chart-4))"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="Potash"
                  stroke="hsl(var(--chart-5))"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Fertilizer Prices by Company</CardTitle>
            <CardDescription>
              Comparison of prices across different companies
            </CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={priceByCompanyData}>
                <XAxis
                  dataKey="company"
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `$${value}`}
                />
                <Tooltip />
                <Bar
                  dataKey="Nitrogen"
                  fill="hsl(var(--chart-1))"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="Phosphate"
                  fill="hsl(var(--chart-2))"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="Potash"
                  fill="hsl(var(--chart-3))"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
  );
}
