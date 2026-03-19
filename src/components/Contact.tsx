'use client';

import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import { track } from '@vercel/analytics';

function AvailableTag() {
    return (
        <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full 
                    text-white text-sm font-medium
                    bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 
                    bg-[length:200%_200%] animate-gradient"
        >
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            Available for Work
        </div>
    );
}

function ContactCards() {
    return (
        <div className="flex justify-center mx-auto mb-6 px-4">
            <div
                className="
                subtle-blur-card 
                p-4 md:p-6 
                flex flex-col gap-4 w-[80%]
                md:flex-row md:items-center md:gap-8
            "
            >
                {/* Email */}
                <div className="flex items-center gap-3 flex-1">
                    <div className="w-10 h-10 bg-neutral-900 border border-neutral-700 rounded-lg flex items-center justify-center">
                        <Mail className="text-blue-400" size={20} />
                    </div>
                    <div>
                        <div className="body-txt font-semibold">Email</div>
                        <div className="body-txt break-all">evanshen95@gmail.com</div>
                    </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3 flex-1">
                    <div className="w-10 h-10 bg-neutral-900 border border-neutral-700 rounded-lg flex items-center justify-center">
                        <Phone className="text-blue-400" size={20} />
                    </div>
                    <div>
                        <div className="body-txt font-semibold">Phone</div>
                        <div className="body-txt text-sm">+49 (0)152 25220284</div>
                    </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 flex-1">
                    <div className="w-10 h-10 bg-neutral-900 border border-neutral-700 rounded-lg flex items-center justify-center">
                        <MapPin className="text-blue-400" size={20} />
                    </div>
                    <div>
                        <div className="body-txt font-semibold">Location</div>
                        <div className="body-txt text-sm">Berlin, Germany</div>
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
        message: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (res.ok) {
            alert('Message sent!');
            setFormData({ name: '', email: '', message: '' });
        } else {
            alert('Something went wrong.');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section id="contact" className="section-customer">
            <div className="container-customer">
                <div className="text-center mb-12">
                    <h2 className="main-txt mb-4">
                        Get <span className="text-blue-400">In Touch</span>
                    </h2>

                    <p className="body-txt text-gray-400">
                        If you have any questions, want to collaborate, or just want to say hi, feel
                        free to reach out.
                    </p>
                </div>

                <div className="flex items-center justify-center mb-6">
                    <AvailableTag />
                </div>

                <ContactCards />

                <div className="mx-auto subtle-blur-card p-8 md:max-w-[78%]">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="body-txt block font-semibold mb-2">Name</label>

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
                            <label className="body-txt block font-semibold mb-2">Email</label>

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
                            <label className="body-txt block font-semibold mb-2">Message</label>

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
                            <input type="text" name="company" className="hidden" />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition shadow-sm"
                            onClick={() => {
                                track('Send Message Click', { method: 'email' });
                            }}
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
