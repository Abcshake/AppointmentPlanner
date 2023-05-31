import React from "react";

export const ConditionalButtons = (props) => {

const {setTemp, setChange, handleUpdateContact, change, contact} = props;
    return (
    <div>
        { change ? (
            <><button
                    onClick={() => {
                        setTemp({ ...contact });
                        setChange(false);
                    } }
                >
                    Cancel
                </button><button
                    onClick={handleUpdateContact}>Save</button></>
            ) : null}
    </div>
    );
};