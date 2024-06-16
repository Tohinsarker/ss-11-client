import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCard from "./JobCard";
import { useLoaderData } from "react-router-dom";
import axios from "axios";

const TabCategories = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
   
    const getData = async () => {
      const {data} = await axios(`${import.meta.env.VITE_API_URL}/products`)
      setJobs(data)
    };
    getData();
  }, []);
  return (
    <Tabs>
      <div className="container px-y py-10 mx-auto">
        <TabList>
          <Tab>Web</Tab>
          <Tab>Graphics</Tab>
          <Tab>Digital Marketing</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-3 gap-4">
            {jobs
              .filter((job) => job.category === "Web Development")
              .map((job) => (
                <JobCard job={job}></JobCard>
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 gap-4">
            {jobs
              .filter((job) => job.category === "Graphics Design")
              .map((job) => (
                <JobCard job={job}></JobCard>
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 gap-4">
            {jobs
              .filter((job) => job.category === "Digital Marketing")
              .map((job) => (
                <JobCard job={job}></JobCard>
              ))}
          </div>
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default TabCategories;
