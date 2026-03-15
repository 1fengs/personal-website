'use client';

import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

function ContactCards() {
    return (
        <div className="grid md:grid-cols-3 gap-6 mb-12">

            <div className="p-6 bg-white/2 border border-blue-400/5 rounded-xl shadow-sm border flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="text-blue-600" size={22} />
                </div>
                <div>
                    <div className="body-txt font-semibold">Email</div>
                    <div className="body-txt">
                        evanshen95@gmail.com
                    </div>
                </div>
            </div>

            <div className="p-6 bg-white/2 border border-blue-400/5 rounded-xl shadow-sm border flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Phone className="text-blue-600" size={22} />
                </div>
                <div>
                    <div className="body-txt font-semibold">Phone</div>
                    <div className="body-txt text-sm">
                        +49 (0)152 25220284
                    </div>
                </div>
            </div>

            <div className="p-6 bg-white/2 border border-blue-400/5 rounded-xl shadow-sm border flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <MapPin className="text-blue-600" size={22} />
                </div>
                <div>
                    <div className="body-txt font-semibold">Location</div>
                    <div className="body-txt text-sm">
                        Berlin, Germany
                    </div>
                </div>
            </div>

        </div>
    );
}

export function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault();

        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (res.ok) {
            alert("Message sent!");
            setFormData({ name: '', email: '', message: '' });
        } else {
            alert("Something went wrong.");
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section
            id="contact"
            className="section-customer"
        >
            <div className="container-customer">

                <div className="text-center mb-12">
                    <h2 className="main-txt mb-4">
                        Get <span className="text-blue-400">In Touch</span>
                    </h2>

                    <p className="body-txt">
                        If you have any questions, want to collaborate,
                        or just want to say hi, feel free to reach out.
                        I'm always open to new opportunities.
                    </p>
                </div>

                <ContactCards />

                <div className="bg-white/2 border border-blue-400/5 rounded-xl shadow-sm p-8">

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >

                        <div>
                            <label className="body-txt block font-semibold mb-2">
                                Name
                            </label>

                            <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>

                        <div>
                            <label className="body-txt block font-semibold mb-2">
                                Email
                            </label>

                            <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="your@email.com"
                                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>

                        <div>
                            <label className="body-txt block font-semibold mb-2">
                                Message
                            </label>

                            <textarea
                                name="message"
                                required
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your message..."
                                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                            />
                        </div>

                        <div>
                            {/* bot detection */}
                            <input
                                type="text"
                                name="company"
                                className="hidden"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition shadow-sm"
                        >
                            Send Message
                        </button>

                    </form>

                </div>

            </div>
        </section>
    );
}