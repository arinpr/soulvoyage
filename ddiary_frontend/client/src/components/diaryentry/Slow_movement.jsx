import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getTokenEmailUsername } from "../../util/token";
import Spin from "../../components/spinner/spinner";
import Toast from "../../components/alerts/alert";
import "./slow_movement.css"; // You can add your CSS here

const Slow_movement = () => {
    const { token, email } = getTokenEmailUsername();
    const navigate = useNavigate();

    const [title, setTitle] = useState("Slow movement Journal");
    const [entry1, setEntry1] = useState("");
    const [entry2, setEntry2] = useState("");
    const [entry3, setEntry3] = useState("");
    const [entry4, setEntry4] = useState("");
    const [entry5, setEntry5] = useState("");
    const [entry6, setEntry6] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const [activeDot, setActiveDot] = useState(0); // Track active dot
    const [numDots, setNumDots] = useState(6); // Default to 6 dots
    const scrollContainerRef = useRef(null);

    const prodUrl = import.meta.env.VITE_PROD_PATH + "/addJournal";
    const devUrl = import.meta.env.VITE_LOCAL_PATH + "/addJournal";
    const currentEnv = import.meta.env.VITE_APP_DEV;
    const [dbpath, setDbpath] = useState();

    useEffect(() => {
        setNumDots(6); // Always show 6 dots
        if (currentEnv === "local") {
            setDbpath(devUrl);
        } else {
            setDbpath(prodUrl);
        }
        const handleResize = () => {
            // Keep number of dots to 6 regardless of screen size
            setNumDots(6);
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

    const resetEntryDetails = () => {
        setTitle("");
        setEntry1("");
        setEntry2("");
        setEntry3("");
        setEntry4("");
        setEntry5("");
        setEntry6("");
    };

    const navigateToEntriesPage = () => navigate("/all-entries");

    const getAuthorisationHeader = () => ({
        Authorization: token ? token : "",
    });

    const postValidations = () => {
        if (!title || !entry1 || !entry2 || !entry3 || !entry4 || !entry5 || !entry6) {
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
                `Move slowly in a relaxed manner. Keep strolling, then suddenly stop moving. Be still, focus on your body as much as you can.\n 1. What did you feel?\n${entry1}` +
                `\n 2. What emotions did you feel?\n${entry2}` +
                `\n 3. What thoughts have come into your mind?\n${entry3}` +
                `\n 4. Imagine being the healthiest person. Walk and then freeze.\n${entry4}` +
                `\n 5. What emotions did you feel?\n${entry5}` +
                `\n 6. What sensations do you feel?\n${entry6}`,
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
        <div className="p-2 w-100 px-sm-4 ">
            <div className="card innerCard">
                <h3 id="safe_space_heading">Slow Movement Journaling</h3>
                <div
                    className="scroll-container"
                    ref={scrollContainerRef}
                    onScroll={handleScroll}
                >
                    <div className="scroll-item">
                        <div className="ItemCard">
                            <label>
                                <div className="safe_title">1. What did you feel?</div>
                                <div className="p-2 main-content">
                                    <textarea value={entry1} onChange={handleEntryChange1} rows="20" placeholder="Write here..." />
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="scroll-item">
                        <div className="ItemCard">
                            <label>
                                <div className="safe_title">2. What emotions did you feel?</div>
                                <div className="p-2 main-content">
                                    <textarea value={entry2} onChange={handleEntryChange2} rows="20" placeholder="Write here..." />
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="scroll-item">
                        <div className="ItemCard">
                            <label>
                                <div className="safe_title">3. What thoughts have come into your mind?</div>
                                <div className="p-2 main-content">
                                    <textarea value={entry3} onChange={handleEntryChange3} rows="20" placeholder="Write here..." />
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="scroll-item">
                        <div className="ItemCard">
                            <label>
                                <div className="safe_title">4. Walk and then freeze: What sensations do you feel?</div>
                                <div className="p-2 main-content">
                                    <textarea value={entry4} onChange={handleEntryChange4} rows="20" placeholder="Write here..." />
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="scroll-item">
                        <div className="ItemCard">
                            <label>
                                <div className="safe_title">5. What emotions did you feel?</div>
                                <div className="p-2 main-content">
                                    <textarea value={entry5} onChange={handleEntryChange5} rows="20" placeholder="Write here..." />
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="scroll-item">
                        <div className="ItemCard">
                            <label>
                                <div className="safe_title">6. What sensations do you feel?</div>
                                <div className="p-2 main-content">
                                    <textarea value={entry6} onChange={handleEntryChange6} rows="20" placeholder="Write here..." />
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

                <div className="d-flex justify-content-end w-100">
                    <button className="primaryButton" type="submit" onClick={handleSubmit} disabled={isLoading}>
                        {isLoading ? <Spin /> : "Save Post"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Slow_movement;
