import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getTokenEmailUsername } from "../../util/token";
import Spin from "../../components/spinner/spinner";
import Toast from "../../components/alerts/alert";
import "./grief_journal.css"; // You can add your CSS here

const Grief_journal = () => {
    const { token, email } = getTokenEmailUsername();
    const navigate = useNavigate();

    const [title, setTitle] = useState("Grief Journaling template");
    const [entry1, setEntry1] = useState("");
    const [entry2, setEntry2] = useState("");
    const [entry3, setEntry3] = useState("");
    const [entry4, setEntry4] = useState("");
    const [entry5, setEntry5] = useState("");
    const [entry6, setEntry6] = useState("");
    const [entry7, setEntry7] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const [activeDot, setActiveDot] = useState(0); // Track active dot
    const [numDots, setNumDots] = useState(7); // Default to 7 dots
    const scrollContainerRef = useRef(null);

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
        // Update dots based on screen size
        const handleResize = () => {
            // Keep number of dots to 6 regardless of screen size
            setNumDots(7);
        };
    
        handleResize(); // Set on load
        window.addEventListener("resize", handleResize); // Set on resize
    
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleEntryChange1 = (e) => setEntry1(e.target.value);
    const handleEntryChange2 = (e) => setEntry2(e.target.value);
    const handleEntryChange3 = (e) => setEntry3(e.target.value);
    const handleEntryChange4 = (e) => setEntry4(e.target.value);
    const handleEntryChange5 = (e) => setEntry5(e.target.value);
    const handleEntryChange6 = (e) => setEntry6(e.target.value);
    const handleEntryChange7 = (e) => setEntry7(e.target.value);

    const resetEntryDetails = () => {
        setTitle("");
        setEntry1("");
        setEntry2("");
        setEntry3("");
        setEntry4("");
        setEntry5("");
        setEntry6("");
        setEntry7("");
    };

    const navigateToEntriesPage = () => navigate("/all-entries");

    const getAuthorisationHeader = () => ({
        Authorization: token ? token : "",
    });

    const postValidations = () => {
        if (!title || !entry1 || !entry2 || !entry3 || !entry4 || !entry5 || !entry6 || !entry7) {
            Toast({ type: "error", message: "Fields Cannot be Empty" });
            return true;
        }
        return false;
    };

    const handleSubmit = () => {
        if (postValidations()) return;
        setIsLoading(true);

        const journalEntryObject = {
            title,
            journalEntry:
                `1. Remember a trauma and your shock. Describe how you felt.\n${entry1}` +
                `\n 2. How did you deny the trauma? Describe how you felt.\n${entry2}` +
                `\n 3. Describe your initial reactions to the trauma.\n${entry3}` +
                `\n 4. Describe the pain you felt from the trauma.\n${entry4}` +
                `\n 5. How did you come to accept the trauma?\n${entry5}` +
                `\n 6. Describe the way you said goodbye to the trauma.\n${entry6}` +
                `\n 7. How did you learn to be grateful after the trauma?\n${entry7}`,
            userEmailAddress: email,
            createdDate: new Date(),
            modifiedDate: new Date(),
        };

        axios.post(`${dbpath}`, journalEntryObject, { headers: getAuthorisationHeader() })
            .then(() => {
                resetEntryDetails();
                navigateToEntriesPage();
                Toast({ type: "info", message: "Entry Saved Successfully" });
            })
            .catch(() => {
                resetEntryDetails();
                navigateToEntriesPage();
            });
    };

    // Handle scroll event to update active dot
    const handleScroll = () => {
        const container = scrollContainerRef.current;
        const containerWidth = container.offsetWidth;
        const scrollLeft = container.scrollLeft;
        const activeIndex = Math.round(scrollLeft / containerWidth);
        setActiveDot(activeIndex);
    };

    // Scroll to a particular item when a dot is clicked
    const scrollToItem = (index) => {
        const container = scrollContainerRef.current;
        const containerWidth = container.offsetWidth;
        container.scrollTo({ left: containerWidth * index, behavior: "smooth" });
    };

    return (
        <div className="p-2 w-100 px-sm-4 Journal_diary_entry">
            <div className="card">
                <h1 id="safe_space_heading">Grief Journaling</h1>
                <div
                    className="scroll-container"
                    ref={scrollContainerRef}
                    onScroll={handleScroll}
                >
                    <div className="scroll-item">
                        <div className="ItemCard">
                            <label>
                                <div className="safe_title">1. Remember a trauma and your shock. Describe how you felt.</div>
                                <div className="p-2 main-content">
                                    <textarea value={entry1} onChange={handleEntryChange1} rows="20" placeholder="Write here..." />
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="scroll-item">
                        <div className="ItemCard">
                            <label>
                                <div className="safe_title">2. How did you deny the trauma? Describe how you felt.</div>
                                <div className="p-2 main-content">
                                    <textarea value={entry2} onChange={handleEntryChange2} rows="20" placeholder="Write here..." />
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="scroll-item">
                        <div className="ItemCard">
                            <label>
                                <div className="safe_title">3. Describe your initial reactions to the trauma.</div>
                                <div className="p-2 main-content">
                                    <textarea value={entry3} onChange={handleEntryChange3} rows="20" placeholder="Write here..." />
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="scroll-item">
                        <div className="ItemCard">
                            <label>
                                <div className="safe_title">4. Describe the pain you felt from the trauma.</div>
                                <div className="p-2 main-content">
                                    <textarea value={entry4} onChange={handleEntryChange4} rows="20" placeholder="Write here..." />
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="scroll-item">
                        <div className="ItemCard">
                            <label>
                                <div className="safe_title">5. How did you come to accept the trauma?</div>
                                <div className="p-2 main-content">
                                    <textarea value={entry5} onChange={handleEntryChange5} rows="20" placeholder="Write here..." />
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="scroll-item">
                        <div className="ItemCard">
                            <label>
                                <div className="safe_title">6. Describe the way you said goodbye to the trauma.</div>
                                <div className="p-2 main-content">
                                    <textarea value={entry6} onChange={handleEntryChange6} rows="20" placeholder="Write here..." />
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="scroll-item">
                        <div className="ItemCard">
                            <label>
                                <div className="safe_title">7. How did you learn to be grateful after the trauma?</div>
                                <div className="p-2 main-content">
                                    <textarea value={entry7} onChange={handleEntryChange7} rows="20" placeholder="Write here..." />
                                </div>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="dots-container">
                    {Array.from({ length: numDots }).map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${activeDot === index ? "active" : ""}`}
                            onClick={() => scrollToItem(index)}
                        />
                    ))}
                </div>

                <div className=" d-flex justify-content-end w-100">
                    <button className="primaryButton" type="submit" onClick={handleSubmit} disabled={isLoading}>
                        {isLoading ? <Spin /> : "Save Post"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Grief_journal;
