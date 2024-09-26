import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./list.css";
import "./listItem.css";
import { getTokenEmailUsername } from "../../util/token";
import Toast from "../../components/alerts/alert";
import Spin from "../../components/spinner/spinner";
import PropTypes from "prop-types";
import axios from "axios";

const ListItem = (props) => {
  const { token } = getTokenEmailUsername();
  const [showModal, setShowModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const [title, setTitle] = useState(props.title);
  const [entry, setEntry] = useState(props.body);

  const [isLoading, setIsLoading] = useState(false);
  //*****************************
  const prodUrl = import.meta.env.VITE_PROD_PATH ;
  const devUrl = import.meta.env.VITE_LOCAL_PATH ;
  const currentEnv = import.meta.env.VITE_APP_DEV;
  // const [dbpath, setDbpath] = useState();
  const dbpath = currentEnv === "local" ? devUrl : prodUrl;
  //
  // useEffect(() => {
  //     if (currentEnv === "local") {
  //         setDbpath(devUrl);
  //     } else {
  //         setDbpath(prodUrl);
  //     }
  // }, []);
  //*****************************
  // console.log("ListItem props : " + dbpath);
  const getAuthorisationHeader = () => {
    const headers = {
      Authorization: token ? token : "",
    };
    return headers;
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleEntryChange = (e) => {
    setEntry(e.target.value);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const toggleDeleteModal = () => {
    setDeleteModal(!deleteModal);
    setShowModal(!showModal);
  };

  const toggleEditModal = () => {
    setEditModal(!editModal);
    setShowModal(!showModal);
  };

  const putValidations = () => {
    if (!title || !entry) {
      Toast({ type: "error", message: "Fields Cannot be Empty" });
      return true;
    } else if (title === props.title && entry === props.body) {
      Toast({ type: "error", message: "No Changes Made" });
      return true;
    }
    return false;
  };

  // Update entry on click by journal entry id
  const updateEntry = () => {
    if (putValidations()) {
      return;
    }
    setIsLoading(true);
    const journalEntryObject = {
      title: title,
      journalEntry: entry,
      userEmailAddress: props.email,
      createdDate: props.createdDate,
      modifiedDate: new Date(),
    };
    axios
      .patch(
        `${dbpath}/updateJournal/${props.id}`,
        journalEntryObject,
        {
          headers: getAuthorisationHeader(),
        }
      )
      .then((response) => {
        setIsLoading(false);
        Toast({
          type: "success",
          message: "Journal Entry Updated Successfully",
        });
        props.updateItem(props.id, journalEntryObject);
        toggleEditModal();
        toggleModal();
      })
      .catch((error) => {
        setIsLoading(false);
        Toast({ type: "error", message: "Error Updating Journal Entry" });
        setEntry(props.body);
        setTitle(props.title);
        toggleEditModal();
        toggleModal();
        console.log(error);
      });
  };

  // Delete entry on click by journal entry id
  const deleteEntry = () => {
    axios
      .delete(`${dbpath}/deleteJournal/${props.id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        props.deleteItem(props.id);
        Toast({ type: "info", message: "Journal Entry Deleted Successfully" });
        setDeleteModal(!deleteModal);
      })
      .catch((error) => {
        Toast({ type: "error", message: "Error Deleting Journal Entry" });
        console.log(error);
      });
  };
  
  const truncatedBody = props.body ? (props.body.length > 100 ? `${props.body.slice(0, 100)}...` : props.body) : "";
  const truncatedTitle = props.title ? (props.title.length > 20 ? `${props.title.slice(0, 20)}...` : props.title) : "";
  const emojiMap = {
    "Emotion: 1 stars\n": "😞",
    "Emotion: 2 stars\n": "😐",
    "Emotion: 3 stars\n": "🙂",
    "Emotion: 4 stars\n": "😃",
    "Emotion: 5 stars\n": "😊",
  };

  const emojiToShow = emojiMap[props.emoji] || "❓";
  return (
    <>
      <Card style={{ width: "17rem", margin: "auto", height: "13rem" }}>
        <Card.Body
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div>
              <Card.Title>{truncatedTitle}</Card.Title>
              <div
                style={{
                  position: "absolute",
                  top: "2px",
                  right: "2px",
                  fontSize: "1.5rem",
                }}
              >
                {emojiToShow}
              </div>
            </div>
            {console.log(truncatedBody)}
            <Card.Text>{truncatedBody}</Card.Text>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button className="listitem-button"
              variant="primary"
              onClick={toggleModal}
              style={{ width: "5rem" }}
            >
              {showModal ? "Close" : "Open"}
            </Button>
          </div>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={toggleModal}>
        <Modal.Header>
          <Modal.Title>{props.title}</Modal.Title>
          <div style={{ fontSize: "1.5rem" }}>{emojiToShow}</div>
        </Modal.Header>
        <Modal.Body>{props.body}</Modal.Body>
        <Modal.Footer style={{ justifyContent: "space-between" }}>
          <div className="editDelete">
            <Button className="listitem-button" variant=" btn-warning" onClick={toggleEditModal}>
              Edit
            </Button>
            <Button className="listitem-button"
              variant="outline-danger"
              style={{ marginLeft: "5px" }}
              onClick={toggleDeleteModal}
            >
              Delete
            </Button>
          </div>
          <Button className="listitem-button" variant="secondary" onClick={toggleModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={deleteModal} onHide={toggleDeleteModal}>
        <Modal.Header>
          <Modal.Title>Delete Entry</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this journal entry?
        </Modal.Body>
        <Modal.Footer style={{ justifyContent: "space-between" }}>
          <Button className="listitem-button" variant="outline-danger" onClick={deleteEntry}>
            Delete
          </Button>
          <Button className="listitem-button" variant="secondary" onClick={toggleDeleteModal}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Edit Modal */}
      <Modal show={editModal} onHide={toggleEditModal}>
        <Modal.Header>
          <Modal.Title>Edit Entry</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label htmlFor="title">Journal Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                value={title}
                onChange={handleTitleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="body">Journal Entry</label>
              <textarea
                className="form-control"
                id="body"
                rows="3"
                value={entry}
                onChange={handleEntryChange}
              ></textarea>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer style={{ justifyContent: "space-between" }}>
          <Button className="listitem-button"
            variant="warning"
            disabled={isLoading}
            type="submit"
            onClick={updateEntry}
          >
            {isLoading ? <Spin /> : "Save Changes"}
          </Button>
          <Button className="listitem-button" variant="secondary" onClick={toggleEditModal}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  createdDate: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  emoji: PropTypes.string, // This ensures emoji is optional
  updateItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};
export default ListItem;
