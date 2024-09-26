import React, { useState, useEffect } from "react";
import "./breathing_journal.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getTokenEmailUsername } from "../../util/token";
import Spin from "../../components/spinner/spinner";
import Toast from "../../components/alerts/alert";
import Table from 'react-bootstrap/Table';

const Breathing_journal = () => {
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
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                    </tbody>
                </Table>
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

export default Breathing_journal;
