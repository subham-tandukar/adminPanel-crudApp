import React, { useContext } from "react";
import $ from "jquery";
import { GrFormClose } from "react-icons/gr";
import Loading from "../Loading/Loading";
import AssignUserContext from "../context/assign user context folder/assignUserContext";

const ViewAssignUserPopup = () => {
  const { view, loading } = useContext(AssignUserContext);

  const handleClose = () => {
    $(".view-assign-user-bg").fadeOut(300);
    $(".view-assign-user").slideUp(500);
  };

  const viewList = [
    {
      id: 1,
      title: "Name",
      body: view.name,
    },
    {
      id: 2,
      title: "Email",
      body: view.email,
    },
    {
      id: 3,
      title: "Role",
      body: view.roleName,
    },
  ];

  return (
    <>
      <section className="popup-bg view-assign-user-bg">
        <div className="popup view-assign-user">
          <div className="popup-head">
            <h4>View User</h4>
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

export default ViewAssignUserPopup;
