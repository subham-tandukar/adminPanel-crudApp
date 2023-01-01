import React, { useContext, useRef, useState } from "react";
import DataTable from "react-data-table-component";
import { AiFillPrinter } from "react-icons/ai";
import { BsFileEarmarkPdfFill } from "react-icons/bs";
// import { RiFileExcel2Fill } from "react-icons/ri";
import $ from "jquery";
import { GrFormClose } from "react-icons/gr";
import { ToastContainer } from "react-toastify";
import ReactToPrint from "react-to-print";
// import ReactHTMLTableToExcel from "react-html-table-to-excel";
import "../../../node_modules/react-toastify/dist/ReactToastify.css";
import Pdf from "react-to-pdf";
import AddNotePopup from "./AddNotePopup";
import ViewNotePopup from "./ViewNotePopup";
import EditNotePopup from "./EditNotePopup";
import DeleteNotePopup from "./DeleteNotePopup";
import NoteContext from "../context/note context folder/noteContext";

const Note = () => {
  const {
    setInputData,
    initialValue,
    noteData,
    handleEdit,
    handleView,
    handleDelete,
    loading,
  } = useContext(NoteContext);

  const componentRef = useRef();

  const [searchTerm, setSearchTerm] = useState("");

  const note = noteData.filter(
    (item) =>
      item.title && item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleClear = () => {
    setSearchTerm("");
  };

  const handleAdd = () => {
    $(".add-note-bg").fadeIn(300);
    $(".add-note").slideDown(500);
    setInputData(initialValue);
  };

  const columns = [
    {
      name: "S.N.",
      // grow: 0,
      width: "60px",
      center: true,
      cell: (row, index) => index + 1,
    },
    {
      name: "Title",
      // grow: 2,
      // width: "150px",
      sortable: true,
      filterable: true,
      selector: (row) => row.title,
    },
    {
      name: "Description",
      // grow: 0,
      center: true,
      sortable: true,
      selector: (row) => row.description,
    },

    {
      name: "Action",
      // grow: 0,
      center: true,
      selector: (row) => {
        return (
          <>
            <span className="uk-margin-right" uk-tooltip="View">
              <i className="fas fa-eye" onClick={() => handleView(row)}></i>
            </span>
            <span className="uk-margin-right" uk-tooltip="Edit">
              <i className="fas fa-edit" onClick={() => handleEdit(row)}></i>
            </span>
            <span uk-tooltip="Delete">
              <i
                className="fas fa-trash-alt"
                onClick={() => handleDelete(row)}
              ></i>
            </span>
          </>
        );
      },
    },
  ];

  const ref = React.createRef();

  const options = {
    orientation: "landscape",
    unit: "in",
    format: [12, 12],
  };
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className=" title uk-flex uk-flex-between uk-flex-middle uk-flex-wrap">
        <h4>
          <i className="fab fa-wpforms uk-margin-small-right"></i>
          Note
        </h4>
        <div>
          <button className="uk-button" onClick={handleAdd}>
            + Add Note
          </button>
        </div>
      </div>

      <div ref={componentRef}>
        <div className="content_wrapper" ref={ref}>
          <DataTable
            columns={columns}
            data={note}
            // customStyles={customStyles}
            pagination
            fixedHeader
            fixedHeaderScrollHeight="335px"
            highlightOnHover
            pointerOnHover
            progressPending={loading}
            responsive
            subHeader
            dense
            striped
            subHeaderComponent={
              <>
                <div className="filter uk-flex uk-flex-wrap">
                  <div className="filter-option">
                    <input
                      // ref={searchInput}
                      type="text"
                      className="uk-input searchField"
                      placeholder="Search"
                      value={searchTerm}
                      onChange={(e) => {
                        setSearchTerm(e.target.value);
                      }}
                      // onChange={searchHandler}
                    />
                    <div
                      className="clear"
                      onClick={handleClear}
                      uk-tooltip="Clear"
                    >
                      <GrFormClose size="1.5rem" />
                    </div>
                  </div>
                </div>

                <div className="export-button uk-flex uk-flex-wrap">
                  {/* <div className="export-icon">
                    <ReactHTMLTableToExcel
                      id="test-table-xls-button"
                      className="download-table-xls-button"
                      table="table-to-xls"
                      filename="user data"
                      sheet="tablexls"
                      buttonText={
                        <RiFileExcel2Fill
                          uk-tooltip="Excel"
                          color="#136438"
                          size="1rem"
                        />
                      }
                    />
                  </div> */}
                  <div className="export-icon">
                    <Pdf
                      targetRef={ref}
                      filename="user data.pdf"
                      options={options}
                      x={0.5}
                      y={0.5}
                      scale={0.8}
                    >
                      {({ toPdf }) => (
                        <button onClick={toPdf}>
                          <BsFileEarmarkPdfFill
                            uk-tooltip="Pdf"
                            color="#ff0002"
                          />
                        </button>
                      )}
                    </Pdf>
                    {/* <BsFileEarmarkPdfFill uk-tooltip="Pdf" color="#ff0002" /> */}
                  </div>
                  <div className="export-icon">
                    <ReactToPrint
                      trigger={() => {
                        return (
                          <AiFillPrinter uk-tooltip="Print" color="#22333F" />
                        );
                      }}
                      content={() => componentRef.current}
                      documentTitle="user data"
                      pageStyle="print"
                    />
                  </div>
                </div>
              </>
            }
          />
        </div>
      </div>

      <AddNotePopup />
      <ViewNotePopup />
      <EditNotePopup />
      <DeleteNotePopup />
    </>
  );
};

export default Note;
