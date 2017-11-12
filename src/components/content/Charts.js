import React from 'react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  Brush,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Legend
} from 'recharts';
import Grid from 'material-ui/Grid';
const data = [
  { name: 'Page A', uv: 4000, pv: 9000 },
  { name: 'Page B', uv: 3000, pv: 7222 },
  { name: 'Page C', uv: 2000, pv: 6222 },
  { name: 'Page D', uv: 1223, pv: 5400 },
  { name: 'Page E', uv: 1890, pv: 3200 },
  { name: 'Page F', uv: 2390, pv: 2500 },
  { name: 'Page G', uv: 3490, pv: 1209 }
];

const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 }
];

const data02 = [
  { name: 'A1', value: 100 },
  { name: 'A2', value: 300 },
  { name: 'B1', value: 100 },
  { name: 'B2', value: 80 },
  { name: 'B3', value: 40 },
  { name: 'B4', value: 30 },
  { name: 'B5', value: 50 },
  { name: 'C1', value: 100 },
  { name: 'C2', value: 200 },
  { name: 'D1', value: 150 },
  { name: 'D2', value: 50 }
];

const Charts = () => {
  return (
    <div>
      <Grid item xs={6} sm={3}>
        <LineChart
          width={600}
          height={200}
          data={data}
          syncId="anyId"
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </LineChart>
      </Grid>
      <Grid item xs={6} sm={3}>
        <LineChart
          width={600}
          height={200}
          data={data}
          syncId="anyId"
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Line type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
          <Brush />
        </LineChart>
      </Grid>
      <Grid item xs={6} sm={3}>
        <AreaChart
          width={600}
          height={200}
          data={data}
          syncId="anyId"
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
        </AreaChart>
      </Grid>
      <Grid item xs={6} sm={3}>
        <PieChart width={800} height={400}>
          <Pie
            data={data01}
            cx={200}
            cy={200}
            outerRadius={60}
            fill="#8884d8"
            dataKey="value"
          />
          <Pie
            data={data02}
            cx={200}
            cy={200}
            innerRadius={70}
            outerRadius={90}
            fill="#82ca9d"
            label
            dataKey="value"
          />
        </PieChart>
      </Grid>
    </div>
  );
};

export default Charts;
