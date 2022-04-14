import React, { useEffect, useState } from "react";

import axios from "axios";
import Add from "./add";


const Record = (props) => (
  <tr>
    <td className="w-2/8 text-left py-3 px-4">{props.record.title}</td>
    <td className="w-2/8 text-left py-3 px-4">{props.record.description}</td>
    <td className="w-2/8 text-left py-3 px-4">
      <a href={props.record.link}>{props.record.link}</a>
    </td>
    <td className="w-1/8 text-left py-3 px-4 ">
      {props.record.tags.map((tag) => (
        <div
          className="bg-green-200 ml-1 pl-1 pr-1 ring-2  w-fit mt-1 mr-1 h-8 font-semibold inline"
          key={tag}
        >
          <span>{tag}</span>
        </div>
      ))}
    </td>

    <td className="w-1/8 text-left py-3 px-4 ">
      <button
        className="hover:italic bg-[#1da1f2] border-none text-white hover:text-gray-800 hover:bg-blue-100 ring-4 h-10 inline w-fit p-2 mr-5"
        onClick={() => {
          props.editRecord(props.record._id, props.title, props.description, props.link, props.tags);
        }}
      >
        Edit
      </button>

      <button
        className="hover:italic bg-red-600  hover:bg-red-100 border-none text-white hover:text-gray-800 ring-4 h-10 w-fit pr-5 pl-5"
        onClick={() => {
          props.deleteRecord(props.record._id);
        }}
      >
        X
      </button>
    </td>
  </tr>
);

export default function RecordList() {
  const [records, setRecords] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [showingEditRecord, setShowingEditRecord] = useState(false);


  const [form, setForm] = useState({
    id: "",
    title: "",
    description: "",
    link: "",
    tags: [],
    dateAdded : ""
  });

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
  };
  // const handleChange
  const handleClick = (event) => {
    setSearchInput("");
    document.getElementById("searchInputBox").defaultValue = "";
  };


  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      let article;
      console.log(searchInput);
      if (searchInput !== "") {
        article = { searchValue: { $regex: searchInput } };
      } else {
        article = {};
      }
      axios.post("/search", article).then((response) => {
        const records = response.data;
        setRecords(records);
      });
    }
    getRecords();
    // setShowingEditRecord(false);
    return;
  }, [records.length, searchInput]);

  // This method will map out the records on the table https://github.com/SherkinOne/basic-MERN-app.git
  function recordList() {
    return records.map((record) => {
      return (
        <Record
          record={record}
          key={record._id}
          deleteRecord={() => deleteRecord(record._id)}
          editRecord={() =>
            editRecord(record._id, record.title, record.description, record.link, record.tags)
          }
        />
      );
    });
  }

  // this allosws you delete the record
  async function deleteRecord(id) {
    await fetch(`/${id}`, {
      method: "DELETE",
    });

    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

  // this alliws you to edit the record
 function editRecord(ids, title, description, link, tags) {
    setForm({titie:title, id:ids, description:description, website : link, tags : tags})
    setShowingEditRecord(true);
     searchItems("")
  }

  const SearchTable = () => (
    <div className="bg-blue-100 h-screen">
      <h1 className="sm:text-5xl text-2xl font-medium title-font mb-4 text-gray-900 pt-10">
        Search Record List
      </h1>
      <span className="border-double  border-sky-500 w-2/6 h-10">
        <input
          className="p-2 border-none"
          type="text"
          name="searchInputBox"
          id="searchInputBox"
          onChange={(e) => searchItems(e.target.value)}
            value={searchInput}
            autoFocus="autoFocus"  // keeps the from loosing foxus on rerender
        />
      </span>
      <button
        className="hover:italic bg-[#1da1f2] border-none text-white hover:text-gray-800 ring-4 h-10 w-10"
        onClick={handleClick}
      >
        X
      </button>
      {/* onChange={handleChange} /> */}

      <section className="ml-20 mr-20 mt-10 bg-white overflow-auto">
        <table className="min-w-full bg-white ">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="w-2/8 py-3 px-4 uppercase font-semibold text-sm">
                Name
              </th>
              <th className="w-2/8 py-3 px-4 uppercase font-semibold text-sm">
                Description
              </th>
              <th className="w-2/8 py-3 px-4 uppercase font-semibold text-sm">
                Link
              </th>
              <th className="w-1/8 py-3 px-4 uppercase font-semibold text-sm">
                Tags
              </th>
              <th className="w-1/8 py-3 px-4 uppercase font-semibold text-sm">
                ?
              </th>
            </tr>
          </thead>
          <tbody>{recordList()}</tbody>
        </table>
      </section>
    </div>
  );

  // This following section will display the table with the records of individuals.
  return (
    <div>
      {showingEditRecord ? (
        <div className="bg-green-100 h-screen">
          <h1 className="sm:text-5xl text-2xl font-medium title-font mb-1 text-gray-900 pt-1">
            Edit Record
          </h1>
          <Add  {...form} setShowingEditRecord={setShowingEditRecord} setSearchInput={ searchItems}  />
        </div>
      ) : (
        <SearchTable />
      )}
    </div>
  );
}
