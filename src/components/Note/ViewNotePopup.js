import React, { useContext } from "react";
import $ from "jquery";
import { GrFormClose } from "react-icons/gr";
import Loading from "../Loading/Loading";
import NoteContext from "../context/note context folder/noteContext";

const ViewNotePopup = () => {
  const { view, loading } = useContext(NoteContext);

  const handleClose = () => {
    $(".view-note-bg").fadeOut(300);
    $(".view-note").slideUp(500);
  };

  const viewList = [
    {
      id: 1,
      title: "Title",
      body: view.title,
    },
    {
      id: 2,
      title: "Description",
      body: view.description,
    },
    {
      id: 3,
      title: "Status",
      body:
        view.noteStatus === 0 ? (
          <span>Pending</span>
        ) : view.noteStatus === 1 ? (
          <span>Success</span>
        ) : (
          <span>Failed</span>
        ),
    },
  ];

  return (
    <>
      <section className="popup-bg view-note-bg">
        <div className="popup view-note">
          <div className="popup-head">
            <h4>View Note</h4>
            <div className="close" onClick={handleClose}>
              <GrFormClose size="2rem" color="#fff" />
            </div>
          </div>

          <div className="popup-body">
            {loading ? (
              <>
                <div className="loading">
                  <Loading />
                  <span>Loading...Please wait</span>
                </div>
              </>
            ) : (
              <table className="uk-table uk-table-striped uk-table-hover">
                <tbody>
                  {viewList.map((props) => {
                    const { title, body, id } = props;
                    return (
                      <tr key={id}>
                        <td
                          className="uk-text-bold"
                          style={{ fontSize: "14px", color: "#000" }}
                        >
                          {title}
                        </td>
                        <td
                          style={{
                            borderLeft: "1px solid rgb(225, 226, 227)",
                          }}
                        >
                          {body}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
          <div className="popup-footer">
            <button className="uk-button cancel-btn" onClick={handleClose}>
              Exit
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ViewNotePopup;
