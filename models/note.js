import mongoose from 'mongoose';

const NoteSchema = new mongoose.Schema({
    noteTitle: {
        type: String,
        required: [true, 'Note title is required'],
        maxlength: [300, 'Note title cannot exceed 300 characters'],
    },
    noteText: {
        type: String,
        required: [true, 'Note text is required'],
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true,
    },
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

const Note = mongoose.models.Note || mongoose.model('Note', NoteSchema);

export default Note;