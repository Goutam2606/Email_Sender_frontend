import React, { useState } from 'react';
import axios from 'axios';
function Email() {

    const [recipient_email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    function sendMail() {
        if (recipient_email && subject && message) {
            axios.post("http://localhost:5000/send_email", {
                recipient_email,
                subject,
                message
            }).then(() => alert("Message send Successfuly"))
                .catch(() => alert("Something went wrong"));
            return;
        }
        return alert("Fill the Field Properly");
    }
    return (<>

        <h1 class="text-5xl p-10 font-bold dark:text-black">Email Sender </h1>


        <div className="w-full max-w-5xl mx-auto p-10 bg-gray-300 rounded-lg">
            <div className="mb-6">
                <label className="block text-lg font-bold mb-2 content-start">Recipients</label>
                <input
                    type="email"
                    onChange={e => setEmail(e.target.value)}
                    placeholder="username@gmail.com"
                    className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-6">
                <label className="block text-lg font-bold mb-2">Subject</label>
                <input
                    onChange={e => setSubject(e.target.value)}

                    type="text"
                    placeholder="Subject"
                    className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-6">
                <label className="block text-lg font-bold mb-2">Message</label>
                <textarea
                    onChange={e => setMessage(e.target.value)}

                    placeholder="email "
                    className="w-full h-40 p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                ></textarea>
            </div>
            <div className="flex justify-between">
                <button onClick={() => sendMail()} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-10 py-2.5 text-center me-2 mb-2">
                    Send
                </button>
            </div>
        </div >
    </>
    );
};

export default Email;
