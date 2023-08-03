import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faMagnifyingGlass  } from '@fortawesome/free-solid-svg-icons';
import Form from 'react-bootstrap/Form';

export default function Navigationsearch(){
    const [open, setOpen] = React.useState(false);

    const handleLangSearch = () => {
        setOpen(!open);
    }
    return(
        <div className="navigation-search">
            <FontAwesomeIcon onClick={handleLangSearch} className='navigation-icon' icon={faMagnifyingGlass} />
            {open?( <div className="serach-wrapper">
                <Form>
                    <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2 navigation-search"
                    aria-label="Search"
                    />
                </Form>

                <div className="serach-tag">
                    <h4>Popular tag</h4>
                    <div className="searchTag-title">
                        <span>#history</span>
                        <span>#nature</span>
                        <span>#sport</span>
                        <span>#blog</span>
                    </div>
                </div>
            </div>):null}
        </div>
    )
}