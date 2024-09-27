import React, { useState, useEffect } from "react";
import "./diaryEntry.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getTokenEmailUsername } from "../../util/token";
import Spin from "../../components/spinner/spinner";
import Toast from "../../components/alerts/alert";

const DiaryEntry = () => {
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
		<div id="diary-entry" className=" p-2 w-100 px-sm-4 ">
			<div className="card innerCard">
				<label>
					<input
						id=""
						className="custom_title"
						type="text"
						placeholder="Title"
						value={title}
						onChange={handleTitleChange}
					/>
				</label>
				<label>
					<textarea
						id=""
						className="custom_textArea mt-2"
						type="text"
						placeholder="Write your diary entry here..."
						value={entry}
						onChange={handleEntryChange}
						rows="20"
					/>
				</label>
				<button
					className="custom_submit"
					type="submit"
					onClick={handleSubmit}
					disabled={isLoading}
				>
					{isLoading ? <Spin /> : "Save Post"}
				</button>
			</div>
		</div>
	);
};

export default DiaryEntry;
