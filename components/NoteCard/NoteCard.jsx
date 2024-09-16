import React from 'react';
import Button from '../Button/Button';

const NoteCard = ({ noteTitle, noteContent, onEdit, onDelete }) => {
    return (

        <div className="note-card border rounded-lg p-4 shadow-md bg-white">

            <h3 className="note-title text-lg font-bold">{noteTitle}</h3>
            <p className="note-content text-sm">{noteContent}</p>

            <div className="mt-4">
                <Button
                    className="bg-slate-400 px-3 py-1 mr-2"
                    value="Edit"
                    onClick={onEdit}
                />
                <Button
                    className="bg-slate-400 px-3 py-1"
                    value="Delete"
                    onClick={onDelete}
                />
            </div>

        </div>
    );
};

export default NoteCard;
