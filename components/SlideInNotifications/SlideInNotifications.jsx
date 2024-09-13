import React, { useEffect, useState } from "react";
import { FiCheckSquare, FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

// Notification display time in milliseconds
const NOTIFICATION_TTL = 5000;

const SlideInNotifications = ({ notifications, setNotifications }) => {
    const removeNotif = (id) => {
        setNotifications((pv) => pv.filter((n) => n.id !== id));
    };

    return (
        <div className="flex flex-col gap-1 w-72 fixed top-2 right-2 z-50 pointer-events-none">
            <AnimatePresence>
                {notifications.map((n) => (
                    <Notification removeNotif={removeNotif} {...n} key={n.id} />
                ))}
            </AnimatePresence>
        </div>
    );
};

const Notification = ({ text, id, removeNotif }) => {
    useEffect(() => {
        const timeoutRef = setTimeout(() => {
            removeNotif(id);
        }, NOTIFICATION_TTL);

        return () => clearTimeout(timeoutRef);
    }, [id, removeNotif]);

    return (
        <motion.div
            layout
            initial={{ y: -15, scale: 0.95 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="p-2 flex items-start rounded gap-2 text-xs font-medium shadow-lg text-white bg-indigo-500 pointer-events-auto"
        >
            <FiCheckSquare className="mt-0.5" />
            <span>{text}</span>
            <button onClick={() => removeNotif(id)} className="ml-auto mt-0.5">
                <FiX />
            </button>
        </motion.div>
    );
};

// Helper function to generate a notification
export const generateNotification = (message) => {
    return {
        id: Math.random(),
        text: message,
    };
};

export default SlideInNotifications;
