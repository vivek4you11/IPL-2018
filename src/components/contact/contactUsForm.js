import React from 'react';

class ContactUsForm extends React.Component {
    render() {
        return (
            <div>
                <h1>ContactUs Form</h1>

                <div>First Name:<input type = "text" id = "fname" name = "firstname" placeholder="Type your first name" /></div>
            </div>
        );
    }
}

export default ContactUs;
