// List of diary entries

import React, { useState, useEffect } from "react";
import axios from "axios";
import ListItem from "./ListItem";
import CardGroup from "react-bootstrap/CardGroup";
import { getTokenEmailUsername } from "../../util/token";

// eslint-disable-next-line react/prop-types
const List = ({dbpath}) => {
  const [items, setItems] = useState([]);
  const { email } = getTokenEmailUsername();
  const listdbpath  = dbpath + "/" + email;
  console.log("LIST component: " + listdbpath);
  const fetchItems = () => {
    axios
      .get(`${listdbpath}`)
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateItem = (id, updatedItem) => {
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? updatedItem : item))
    );
  };

  useEffect(() => {
      // if (currentEnv === "local") {
      //   setDbpath(devUrl);
      // } else {
      //   setDbpath(prodUrl);
      // }
    fetchItems();
  }, []);

  if(items.length == 0){
    return(
      <><h1 className="text-center pt-5">No entries made by you</h1></>
    );
  }
  
  return (
    <div className="ml-auto w-100">
      <CardGroup className="p-2 p-sm-4">
        <div className="parent">
          {items &&
            items
              .filter((entry) => entry.title && entry.journalEntry)
              .map((entry, id) => {
                return (
                  <div key={id} >
                    <ListItem
                        className="child"
                        key={entry.id}
                        id={entry.id}
                        title={entry.title}
                        body={entry.journalEntry}
                        emoji={entry.emotionAttached}
                        createdDate={entry.createdDate}
                        deleteItem={deleteItem}
                        updateItem={updateItem}
                        {...entry}
                    />
                  </div>
                );
              })}
        </div>
      </CardGroup>
    </div>
  );
};

export default List;
