import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { PiArrowBendDownRightThin } from "react-icons/pi";

const categories = [ 'VISTECH', 'GO-DIGITAL']

export default function WorkExpTabs() {
  return (
    <div className="flex  experience-tabs-container">
      <div className="w-full ml-4">
        <TabGroup>
          <TabList className="flex gap-4">
            {categories.map((name:string) => (
              <Tab
                key={name}
                className=" py-1 text-xs font-thin tracking-widest text-gray-400 focus:outline-none data-[selected]:border-b border-b-cyan-300  data-[selected]:text-cyan-300 data-[hover]:text-cyan-300"
              >
                {name}
              </Tab>
            ))}
          </TabList>

          <TabPanels className="mt-3">
              <TabPanel  className="">
               <div className="work-tab">
                <div className="job-title-year mb-4">
                  <h2 className="job-title ubuntu-normal text-gray-400 font-bold tracking-wide">Software Developer <span className='pl-3 text-cyan-300'>—  VISTECH </span> </h2>
                  <p className="job-year text-xs font-thin tracking-widest  text-gray-400 ml-1">Jun 2023 - Present</p>
                </div>
                <div className="job-details text-gray-400  font-normal ">
                  <p className='mb-2'> I work as a Full-Stack Developer, specializing in SharePoint Framework (SPFx), TypeScript, and modern web technologies to build internal systems for external clients. My role focuses on:</p>
                  
                  <div className="flex items-start mb-4 ">
                    <PiArrowBendDownRightThin className="mr-2 mt-1 text-2xl text-cyan-300" />
                    <p>Developing and maintaining custom internal applications tailored for database management and record-keeping to enhance business processes.</p>
                  </div>
                  <div className="flex items-start mb-4 ">
                    <PiArrowBendDownRightThin className="mr-2 mt-1 text-2xl text-cyan-300" />
                    <p>Leveraging React, SPFx and TypeScript to build robust solutions within the Microsoft 365 ecosystem, ensuring scalability and efficiency.</p>
                  </div>
                  <div className="flex items-start mb-4">
                    <PiArrowBendDownRightThin className="mr-2 mt-1 text-2xl text-cyan-300" />
                    <p> Occasionally designing UI/UX mockups in Figma to visualize workflows and improve user experiences before implementation.                 
                    </p>
                  </div>
                  <div className="flex items-start mb-4">
                    <PiArrowBendDownRightThin className="mr-2 mt-1 text-xl text-cyan-300" />
                    <p> Integrating third-party services and APIs to extend application functionality and optimize data handling.                 
                    </p>
                  </div>
                </div>

               </div>
              </TabPanel>

              <TabPanel className="">
               <div className="work-tab">
                <div className="job-title-year mb-3">
                  <h2 className="job-title ubuntu-normal text-gray-400 font-bold tracking-wide">Software Developer <span className='pl-3 text-cyan-300'>—  GO-Digital </span> </h2>
                  <p className="job-year text-xs font-thin tracking-widest  text-gray-400 ml-1">Oct 2019 -   Jan 2021</p>
                </div>
                <div className="job-details text-gray-400 font-normal ">
                  <p className="mb-2">Worked as a Web Developer, focusing on WordPress development and custom JavaScript solutions to create engaging, dynamic websites, including eCommerce platforms. My key contributions included:</p>
                  <div className="flex items-start mb-4">
                    <PiArrowBendDownRightThin className="mr-2 mt-1 text-2xl text-cyan-300" />
                    <p>Building and customizing WordPress websites, ensuring high performance, responsiveness, and SEO optimization.</p>
                  </div>
                  <div className="flex items-start mb-4 ">
                    <PiArrowBendDownRightThin className="mr-2 mt-1 text-2xl text-cyan-300" />
                    <p>Developing custom JavaScript solutions to add interactive elements and enhance website functionality beyond standard plugins.</p>
                  </div>
                  <div className="flex items-start mb-4 ">
                    <PiArrowBendDownRightThin className="mr-2 mt-1 text-2xl text-cyan-300" />
                    <p>Designing and implementing eCommerce websites, integrating payment gateways, product catalogs, and seamless checkout experiences.</p>
                  </div>
                  <div className="flex items-start mb-4 ">
                    <PiArrowBendDownRightThin className="mr-2 mt-1 text-2xl text-cyan-300" />
                    <p>Optimizing website speed and user experience, applying best practices in caching, compression, and code efficiency.</p>
                  </div>
                  <div className="flex items-start mb-4 ">
                    <PiArrowBendDownRightThin className="mr-2 mt-1 text-2xl text-cyan-300" />
                    <p>Collaborating with designers and clients to turn UI/UX concepts into fully functional, aesthetically pleasing web experiences.</p>
                  </div>
                </div>

               </div>
              </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  )
}
