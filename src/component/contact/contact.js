
import React, { useState,useRef,useEffect } from 'react';

import DetaiContact from "./detail-contact/detail-contact";
function ContactAccount(props) {
    return (
        <div className="contact-account">
            <div className="header-contact-account">
                <h4>Sổ liên lạc học viên</h4>
            </div>
            <DetaiContact/>
        </div>
    )
}

export default ContactAccount;
