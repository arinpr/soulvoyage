import React, { useState, useEffect } from "react";
import "./ptsd.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getTokenEmailUsername } from "../../util/token";
import Spin from "../../components/spinner/spinner";
import Toast from "../../components/alerts/alert";

const Ptsd = () => {
    const { token, email } = getTokenEmailUsername();

    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [entry, setEntry] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    //*****************************
    const prodUrl = import.meta.env.VITE_PROD_PATH + "/addJournal";
    const devUrl = import.meta.env.VITE_LOCAL_PATH + "/addJournal";
    const currentEnv = import.meta.env.VITE_APP_DEV;
    const [dbpath, setDbpath] = useState();


    useEffect(() => {
        if (currentEnv === "local") {
            setDbpath(devUrl);
        } else {
            setDbpath(prodUrl);
        }
    }, []);

    //*****************************
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleEntryChange = (e) => {
        setEntry(e.target.value);
    };

    const resetEntryDetails = () => {
        setTitle("");
        setEntry("");
    };
    const navigateToEntriesPage = () => {
        const path = "/all-entries";
        navigate(path);
    };

    const getAuthorisationHeader = () => {
        const headers = {
            Authorization: token ? token : "",
        };
        return headers;
    };

    const postValidations = () => {
        if (!title || !entry) {
            Toast({ type: "error", message: "Fields Cannot be Empty" });
            return true;
        }
        return false;
    };

    const handleSubmit = () => {
        // You can implement the submission logic here, e.g., sending data to an API
        if(postValidations()) {
            return;
        }
        setIsLoading(true);
        const journalEntryObject = {
            title: title,
            journalEntry: entry,
            userEmailAddress: email,
            createdDate: new Date(),
            modifiedDate: new Date(),
        };

        axios
            .post(`${dbpath}`, journalEntryObject, {
                headers: getAuthorisationHeader(),
            })
            .then(function (response) {
                resetEntryDetails();
                navigateToEntriesPage();
                Toast({ type: "info", message: "Entry Saved Successfully" });
            })
            .catch(function (error) {
                console.log(error);
                resetEntryDetails();
                navigateToEntriesPage();
            });
    };

    return (
        <div id="diary-entry" className="diary-entry-container bg-light col-md-8 container-fluid">
            <div className="diary-entry-form d-flex row">
                <label>
                    <h1>Understanding your Trauma</h1>
                    <p>1. Were you exposed to the experience of trauma directly ?</p>
                </label>
                <label>
					<textarea
                        id="diary-entry-textarea-1"
                        className="diary-entry-textarea"
                        type="text"
                        placeholder=""
                        value={entry}
                        onChange={handleEntryChange}
                        rows="20"
                    />
                </label>
                <label>
                    <p>2. Were you exposed to trauma repeatedly?</p>
                </label>
                <label>
					<textarea
                        id="diary-entry-textarea-2"
                        className="diary-entry-textarea"
                        type="text"
                        placeholder=""
                        value={entry}
                        onChange={handleEntryChange}
                        rows="20"
                    />
                </label>
                <label>
                    <p>3. What is the nature of the trauma?</p>
                </label>
                <label>
					<textarea
                        id="diary-entry-textarea-3"
                        className="diary-entry-textarea"
                        type="text"
                        placeholder=""
                        value={entry}
                        onChange={handleEntryChange}
                        rows="20"
                    />
                </label>
                <label>
                    <p>4. How does the experience of trauma disrupt you? How does it affect your personal life? How
                        does it affect your social, professional, and family life?</p>
                </label>
                <label>
					<textarea
                        id="diary-entry-textarea-4"
                        className="diary-entry-textarea"
                        type="text"
                        placeholder=""
                        value={entry}
                        onChange={handleEntryChange}
                        rows="20"
                    />
                </label>
                <label>
                    <p>4. What changes in your behavior have you noticed? </p>
                </label>
                <label>
					<textarea
                        id="diary-entry-textarea-5"
                        className="diary-entry-textarea"
                        type="text"
                        placeholder=""
                        value={entry}
                        onChange={handleEntryChange}
                        rows="20"
                    />
                </label>
                <button
                    className="diary-entry-save"
                    type="submit"
                    onClick={handleSubmit}
                    disabled={isLoading}
                >
                    {isLoading ? <Spin/> : "Save Post"}
                </button>
            </div>
        </div>
    );
};

export default Ptsd;
