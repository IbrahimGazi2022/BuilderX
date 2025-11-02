import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
            unique: true,
        },
        projectName: {
            type: String,
            default: 'My Platform',
        },
        components: [
            {
                id: {
                    type: String,
                    required: true,
                },
                type: {
                    type: String,
                    required: true,
                },
                designId: {
                    type: String,
                    required: true,
                },
                name: {
                    type: String,
                    required: true,
                },
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Project = mongoose.model('Project', projectSchema);
export default Project;
