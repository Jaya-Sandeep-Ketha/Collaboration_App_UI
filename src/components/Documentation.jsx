import React, { useState } from "react";
import AdminHomebg from "../../assets/adminhomebg.jpg";

const CollapsibleSection = ({ title, content, tables }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <div 
        className="flex items-center justify-between bg-gray-700 p-3 rounded-lg cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-white font-semibold">{title}</span>
        <span className="text-white">{isOpen ? '▼' : '►'}</span>
      </div>
      {isOpen && (
        <div className="bg-gray-600 p-4 rounded-b-lg mt-1">
          <ul className="list-disc list-inside text-white mb-4">
            {content.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
          {tables.map((table, tableIndex) => (
            <div key={tableIndex} className="mb-6">
              <h3 className="text-white font-semibold mb-2">{table.title}</h3>
              <table className="w-full text-white border-collapse">
                <thead>
                  <tr>
                    {table.headers.map((header, index) => (
                      <th key={index} className="border border-gray-400 p-2 bg-gray-700">{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {table.rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className="border border-gray-400 p-2">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const TopLevelSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6">
      <div 
        className="flex items-center justify-between p-4 rounded-lg cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        style={{backgroundColor: "white", color: "black"}}
      >
        <span className="text-black font-bold text-xl">{title}</span>
        <span className="text-black">{isOpen ? '▼' : '►'}</span>
      </div>
      {isOpen && (
        <div className="mt-2 pl-4">
          {children}
        </div>
      )}
    </div>
  );
};

function Documentation() {
    const documentationData = [
        {
          title: "Admin Register",
          content: [
            "Endpoint: admin/register",
            "Description: Used by admin to register on the portal."
          ],
          tables: [
            {
              title: "Request Parameters",
              headers: ["Name", "Type", "Description"],
              rows: [
                ["admin_fname", "String", "First name of the admin"],
                ["admin_lname", "String", "Last name of the admin"],
                ["emailId", "String", "Email ID of the admin"],
                ["password", "String", "Password of the admin"],
                ["company_name", "String", "Admin's company"],
                ["location", "String", "Location of the company"],
              ]
            },
            {
              title: "Response",
              headers: ["Name", "Type", "Description"],
              rows: [
                ["status", "String", "Success or Error"],
                ["message", "String", "Registration successful/unsuccessful"],
                ["company_code", "String", "Company code of the admin (unique to a company)"],
              ]
            }
          ]
        },
        {
            title: "Admin Login",
            content: [
              "Endpoint: admin/login",
              "Description: Used by admin to login to the portal after registration."
            ],
            tables: [
              {
                title: "Request Parameters",
                headers: ["Name", "Type", "Description"],
                rows: [
                  ["emailId", "String", "Email ID of the admin"],
                  ["password", "String", "Password of the admin"],
                ]
              },
              {
                title: "Response",
                headers: ["Name", "Type", "Description"],
                rows: [
                  ["status", "String", "Success or Error"],
                  ["message", "String", "Login Successful/Unsuccessful"],
                  ["token", "String", "JWT token of the admin"],
                  ["company_code", "String", "Company code of the admin (unique to a company)"],
                ]
              }
            ]
          },
          {
            title: "Admin Upload",
            content: [
              "Endpoint: admin/upload",
              "Description: Used by admin to upload csv data of employees with corresponding data."
            ],
            tables: [
              {
                title: "Request Parameters",
                headers: ["Name", "Type", "Description"],
                rows: [
                  ["token", "String", "JWT token of the admin"],
                  ["file", "file_path", "path of the csv file with company's employees data"],
                  
                ]
              },
              {
                title: "Response",
                headers: ["Name", "Type", "Description"],
                rows: [
                  ["status", "String", "Success or Error"],
                  ["message", "String", "File uploaded successful or Error uploading the file"],
                ]
              }
            ]
          },
          {
            title: "User Onboarding",
            content: [
              "Endpoint: admin/send-onboarding-email",
              "Description: Used by admin to send an onboarding email to the user to fill out the details"
            ],
            tables: [
              {
                title: "Request Parameters",
                headers: ["Name", "Type", "Description"],
                rows: [
                  ["emailId", "String", "email of the employee that he wants to onboard"],
                ]
              },
              {
                title: "Response",
                headers: ["Name", "Type", "Description"],
                rows: [
                  ["status", "String", "Success or Error"],
                  ["message", "String", "Email successfully sent or failed to send an email"],
                ]
              }
            ]
          },
          {
            title: "User Login",
            content: [
              "Endpoint: users/login",
              "Description: Used by users to login to the portal using the credentials provided by admin."
            ],
            tables: [
              {
                title: "Request Parameters",
                headers: ["Name", "Type", "Description"],
                rows: [
                  ["emailId", "String", "Email Id of the user"],
                  ["password", "String", "Password of the user"],
                ]
              },
              {
                title: "Response",
                headers: ["Name", "Type", "Description"],
                rows: [
                  ["status", "String", "Success or Error"],
                  ["message", "String", "Login successful or Authentication failed"],
                  ["token", "String", "JWT token of the user"],
                  ["data", "Object", "data containing id, name, email, location, title"]
                ]
              }
            ]
          },
          {
            title: "Point of Contact details",
            content: [
              "Endpoint: users/projectdetails",
              "Description: Used by users to fetch details of employees working in a specific project or on a feature or based on github repository.",
              "A single request parameter (product_name, feature_name, github_repo_name) is sufficient to gather the points of contact."
            ],
            tables: [
              {
                title: "Request Parameters",
                headers: ["Name", "Type", "Description"],
                rows: [
                  ["product_name", "String", "Name of the project"],
                  ["feature_name", "String", "Name of the feature"],
                  ["github_repo_name", "String", "Name of the github repository"],
                  ["token", "String", "JWT token of the user"],
                ]
              },
              {
                title: "Response",
                headers: ["Name", "Type", "Description"],
                rows: [
                  ["status", "String", "Success or Error"],
                  ["message", "String", "Data fetched or error fetching data or no data found"],
                  ["data", "Object", "data of employees working on the corresponding project or feature or github repo"],
                ]
              }
            ]
          },
      ];

  const adminSections = documentationData.slice(0, 4);
  const userSections = documentationData.slice(4);

  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-no-repeat flex flex-col items-center"
      style={{ backgroundImage: `url(${AdminHomebg})` }}
    >
      <h1 className="text-white text-4xl font-bold mt-10 mb-6">Touch : API for Point of Contact for Collaboration Framework
      Documentation</h1>
      <div className="bg-black bg-opacity-60 p-8 rounded-lg w-full max-w-4xl">
      <h2 style={{color: "white", fontWeight: "bold"}}>Overview</h2>
      <p style={{color: "white"}}>Touch: API for Collaboration Framework Point of Contact is
a complete foundation for collaboration, the Touch API project aims to promote cooperation and expedite communication within businesses. It acts as a consolidated platform where users and administrators can efficiently manage and find personnel data and company-wide resources
</p>
    <h2 style={{color: "white", paddingTop: "10px", fontWeight: "bold"}}>How to run?</h2> 
    <p style={{color: "white"}}>We have used Node.js for building the backend APIs. The entire backend is deployed on AWS and the endpoint is live and available for users to use in their platform. Look at the below definitions of each available API and its configuration to understand the usage. </p>
    <h2 style={{color: "white", fontWeight: "bold", paddingTop: "10px"}}>API:</h2>
    <p style={{color: "white"}}>POST <a href="https://touch.sandyjsk.xyz/api">https://touch.sandyjsk.xyz/api</a></p>
      </div>
      <div className="bg-black bg-opacity-50 p-8 rounded-lg w-full max-w-4xl">
        <TopLevelSection title="Admin">
          {adminSections.map((section, index) => (
            <CollapsibleSection 
              key={index} 
              title={section.title} 
              content={section.content}
              tables={section.tables}
            />
          ))}
        </TopLevelSection>
        <TopLevelSection title="User">
          {userSections.map((section, index) => (
            <CollapsibleSection 
              key={index} 
              title={section.title} 
              content={section.content}
              tables={section.tables}
            />
          ))}
        </TopLevelSection>
      </div>
      <div>
      <div className="bg-black bg-opacity-60 p-8 rounded-lg w-full max-w-4xl" style={{color: "white"}}>
      <h2>Key Features:</h2>
      <ol>
        <li style={{paddingBottom: "10px"}}>1. Admin Dashboard: Gives administrators the ability to upload and manage corporate information, including geographical information, project assignments, and personnel profiles.
        creates and maintains user accounts to make the onboarding process easier.</li>

        <li style={{paddingBottom: "10px"}}>2. Advanced Search Features: Gives consumers the ability to look for workers throughout the company using a variety of parameters, such as location, project, feature, or engagement with GitHub repositories.
        encourages cross-team cooperation by enabling users to find coworkers working on related features or projects. </li>

        <li style={{paddingBottom: "10px"}}>3. Improved Cooperation: Ensures that resources and expertise are readily available by giving staff members working on particular projects a clear point of contact. By displaying team contributions and project associations across locations, it promotes organizational openness.</li>
     </ol>
          <p style={{color: "white"}}>
          For businesses wishing to improve departmental and geographical communication, the Touch API is perfect. This framework offers a smooth and effective solution whether an employee is looking for help with a particular feature, seeking knowledge in a GitHub repository, or attempting to connect with a colleague in a different office. Touch API becomes a vital instrument for encouraging innovation and raising productivity in businesses by facilitating centralized management of organizational data and bridging communication barriers.
          </p>
      </div>
      </div>
    </div>
  );
}

export default Documentation;