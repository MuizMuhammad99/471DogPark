import React from 'react'
import Axios from 'axios'
import {
    PieChart,
    Pie,
    Tooltip,
    BarChart,
    XAxis,
    YAxis,
    Legend,
    CartesianGrid,
    Bar,
    Sector,
    Cell,
  } from "recharts";

const analytics = () => {

    const receivedData = () => {
        Axios.get("http://localhost:3001/api/dogpark/user/all").then(
            (response)=>{
                const quadrant = response.data[0].Quadrant;
                console.log(quadrant)
        })
    };




    const data = [
        {name: "NW", NW: 6},
        {name: "NE", NE: 9},
        {name: "SW", SW: 5},
        {name: "SE", SE: 5},
        ];

    const data2 = [
        {name: "Admins", admins: 5},
        {name: "Reviewers", reviewers: 7},
        {name: "Viewers", viewers: 13},
        ];

    const data3= [
        {name: "NW", value: 2},
        {name: "NE", value: 1},
        {name: "SW", value: 1},
        {name: "SE", value: 1},
        ];
    const data4= [
        {name: "NW (park id: 1)", value: 4},
        {name: "NW (park id: 2)", value: 0},
        {name: "NE (park id: 3", value: 4},
        {name: "SW (park id: 4", value: 0},
        {name: "SE (park id: 5", value: 0},
        ];
    const data5= [
        {name: "NW (park id: 1)", value: 100},
        {name: "NW (park id: 2)", value: 100},
        {name: "NE (park id: 3", value: 342},
        {name: "SW (park id: 4", value: 88},
        {name: "SE (park id: 5", value: 15},
        ];
    const data6= [
        {name: "NW (park id: 1)", value: 3},
        {name: "NW (park id: 2)", value: 1},
        {name: "NE (park id: 3", value: 1},
        {name: "SW (park id: 4", value: 3},
        {name: "SE (park id: 5", value: 2},
        ];
    const data7= [
        {name: "NW (park id: 1)", value: 2},
        {name: "NW (park id: 2)", value: 1},
        {name: "NE (park id: 3", value: 3},
        {name: "SW (park id: 4", value: 0},
        {name: "SE (park id: 5", value: 1},
        ];
    


        return (
            <div style={{ textAlign: "center" }}>
              <h1>Analytics</h1>
              <button onClick={receivedData}>click</button>
              <div>Number of users in each quadrant
                <BarChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 80,
                    bottom: 5,
                  }}
                  barSize={20}
                >
                  <XAxis
                    dataKey="name"
                    padding={{ left: 10, right: 10 }}
                  />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Bar dataKey="NW" fill="#2184d8" />
                  <Bar dataKey="NE" fill="#E13102" />
                  <Bar dataKey="SW" fill="#D9B300" />
                  <Bar dataKey="SE" fill="#107c10" />

                </BarChart>
              </div>
              <div>Ratio of admins to reviewers to viewers
                <BarChart
                  width={500}
                  height={300}
                  data={data2}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 80,
                    bottom: 5,
                  }}
                  barSize={20}
                >
                  <XAxis
                    dataKey="name"
                    padding={{ left: 10, right: 10 }}
                  />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Bar dataKey="admins" fill="#2184d8" />
                  <Bar dataKey="reviewers" fill="#E13102" />
                  <Bar dataKey="viewers" fill="#D9B300" />

                </BarChart>
              </div>
              <div>Number of dog-parks in each  quadrant
                <BarChart
                  width={500}
                  height={300}
                  data={data3}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 80,
                    bottom: 5,
                  }}
                  barSize={20}
                >
                  <XAxis
                    dataKey="name"
                    padding={{ left: 10, right: 10 }}
                  />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
              </div>
              <div>Number of reviews in each park
                <BarChart
                  width={500}
                  height={300}
                  data={data4}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 80,
                    bottom: 5,
                  }}
                  barSize={20}
                >
                  <XAxis
                    dataKey="name"
                    padding={{ left: 10, right: 10 }}
                  />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
              </div>
              <div>Park User Capacity
                <BarChart
                  width={500}
                  height={300}
                  data={data5}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 80,
                    bottom: 5,
                  }}
                  barSize={20}
                >
                  <XAxis
                    dataKey="name"
                    padding={{ left: 10, right: 10 }}
                  />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
              </div>
              <div>Available number of parking spots
                <BarChart
                  width={500}
                  height={300}
                  data={data6}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 80,
                    bottom: 5,
                  }}
                  barSize={20}
                >
                  <XAxis
                    dataKey="name"
                    padding={{ left: 10, right: 10 }}
                  />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
              </div>
              <div>Number of all-time events held at each dog park 
                <BarChart
                  width={500}
                  height={300}
                  data={data7}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 80,
                    bottom: 5,
                  }}
                  barSize={20}
                >
                  <XAxis
                    dataKey="name"
                    padding={{ left: 10, right: 10 }}
                  />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
              </div>
            </div>
          );
}

export default analytics
