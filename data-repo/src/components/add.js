import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Add(props) {
  const [form, setForm] = useState({
    id: "",
    title: "",
    description: "",
    link: "",
    tags: [],
    dateAdded: "",
  });

  useEffect(() => {
    if (!props.fetched) {
      if (props.id) {
        updateForm({ id: props.id });
        if (props.titie) {
          updateForm({ title: props.titie });
          props.setSearchInput(props.title)  // Change this to create a change of state so will reload table after save
        }
        if (props.description) {
          updateForm({ description: props.description });
        }
        if (props.website) {
          updateForm({ link: props.website });
        }
        if (props.tags) {
          setTags(props.tags);
        }
      }
    }
  }, []);

  const [showError, setShowError] = useState(false);
  const [input, setInput] = useState("");
  const [tags, setTags] = useState([]);
  const [isKeyReleased, setIsKeyReleased] = useState(false);
  const [saveButtonText, setSaveButtonText] = useState("Save Record");
  const [butttonSTate, setButtonState] = useState(false);

  const TagErrorMsg = () => (
    <div className="text-red-800 ml-20 ">Tag already exists</div>
  );

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  const deleteTag = (index) => {
    setTags((prevState) => prevState.filter((tag, i) => i !== index));
  };

  const onChange = (e) => {
    const { value } = e.target;
    setInput(value);
    // updateForm({ tags: e.target.value });
    updateForm({ tags: tags });
  };

  const onKeyDown = (e) => {
    const { key } = e;
    const trimmedInput = input.trim();
    if (key !== "Alt" || key !== "Ctrl") {
      setShowError(false);
    }
    if (key === "," && trimmedInput.length && !tags.includes(trimmedInput)) {
      e.preventDefault();
      setTags((prevState) => [...prevState, trimmedInput]);
      e.target.value = "";
      updateForm({ tags: tags });
      console.log("submit : ", form, " : ", tags);
    }

    if (key === "Backspace" && !input.length && tags.length && isKeyReleased) {
      const tagsCopy = [...tags];
      // const poppedTag = tagsCopy.pop();
      e.preventDefault();
      setTags(tagsCopy);
      // setInput(poppedTag);
      updateForm({ tags: tags });
    }
    if (tags.includes(trimmedInput)) {
      // then show error
      setShowError(true);
    }
    setIsKeyReleased(false);
  };

  const onKeyUp = () => {
    setIsKeyReleased(true);
  };

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();
    setSaveButtonText("Saving...");
    setButtonState(true);
    async function addRecord() {
      // When a post request is sent to the create url, we'll add a new record to the database.
      const newRecord = { ...form, tags: tags };
      // if id has a value then update else save

      if (form.id !== "") {
        axios.post(`/update/${form.id}`, newRecord).then((response) => {
          setSaveButtonText("Updating");
          setForm({ id: "", title: "", description: "", link: "", tags: [] });
          setTags([]);
          props.setShowingEditRecord(false);
          props.setSearchInput("")
        });
      } else {
        axios.post("/add", newRecord).then((response) => {
          setSaveButtonText("Save Record");
          setForm({ title: "", description: "", link: "", tags: [] });
          setTags([]);
        });
      }
    }
    addRecord();
    setButtonState(false);
 
    return;
  }

  // This following section will display the form that takes the input from the user.
  return (
    <form onSubmit={onSubmit}>
      <section className="text-gray-600 body-font relative  ">
        <div className="container px-15 py-14 mx-auto ">
          <div className="lg:w-1/2 md:w-2/3 mx-auto bg-gray-100 rounded-2xl border border-gray-200 shadow-2xl ">
            <div className="flex flex-wrap  mr-10 ml-10">
              <span className=" p-2 w-full h-10 mb-10 pb-10 mt-10 relative">
                <label htmlFor="title" className="text-3xl text-gray-900">
                  Title
                </label>
                <input
                  className="p-2 mt-1 border border-double border-sky-500 w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 "
                  type="text"
                  id="title"
                  value={form.title}
                  onChange={(e) => updateForm({ title: e.target.value })}
                />
              </span>
              <span className=" p-2 w-full h-10 mb-10 pb-10 relative">
                <label
                  htmlFor="link"
                  className="text-3xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none postion-absolute pt-2 ml-auto"
                >
                  Link
                </label>
                <input
                  className="p-2 mt-1 border border-double  border-sky-500 w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3  "
                  type="text"
                  id="link"
                  namw="link"
                  value={form.link}
                  onChange={(e) => updateForm({ link: e.target.value })}
                />
              </span>

              <span className=" p-2 w-full relative">
                <label
                  htmlFor="description"
                  className="text-3xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none postion-absolute pt-2 ml-auto"
                >
                  Description
                </label>
                <textarea
                  name="description"
                  className="w-full mt-1 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none p-2 border border-double  border-sky-500"
                  id="description"
                  value={form.description}
                  onChange={(e) => updateForm({ description: e.target.value })}
                ></textarea>
              </span>

              <span className=" p-2 w-full h-10 mb-10 pb-10 relative">
                <label
                  htmlFor="tags"
                  className="text-3xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none postion-absolute pt-2 ml-auto"
                >
                  Tags
                </label>
                <div className="flex border border-double border-sky-500 w-full bg-gray-100 justify-evenly content-center h-10">
                  {tags.map((tag, index) => (
                    <div
                      className="bg-green-200 flex ml-1 pl-2 pr-2 ring-2 ring-indigo-500 ring-inset w-fit mt-1 mr-1 h-8 font-semibold"
                      key={index}
                    >
                      <span>{tag}</span>
                      <button
                        className="flex p-1 border-none bg-none content-center font-normal"
                        onClick={() => deleteTag(index)}
                      >
                        x
                      </button>
                    </div>
                  ))}
                  <input
                    className="w-full pl-2 bg-gray-100 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                    type="text"
                    id="tags"
                    namw="tags"
                    placeholder="Enter a tag - use , to seperate"
                    onKeyDown={onKeyDown}
                    onKeyUp={onKeyUp}
                    onChange={onChange}
                  />
                </div>
              </span>
              {showError ? <TagErrorMsg /> : null}
            </div>
            <div className="p-2 w-full pt-10">
              <button
                disabled={butttonSTate}
                type="submit"
                className="hover:italic bg-[#1da1f2] border-none text-white hover:text-gray-800 ring-4 p-2 flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mb-10"
              >
                {saveButtonText}
              </button>
              {/* <input
             
                  type="submit"
                  value="Save record"
                  className="hover:italic bg-[#1da1f2] border-none text-white hover:text-gray-800 ring-4 p-2 flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mb-10"
                /> */}
            </div>
          </div>
        </div>
      </section>
    </form>
  );
}
