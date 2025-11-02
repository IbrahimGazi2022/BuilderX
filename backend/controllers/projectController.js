import Project from '../models/projectModel.js';

export const saveProject = async (req, res) => {
    try {
        const { components, userId } = req.body;
        if (!userId) {
            return res.status(400).json({
                success: false,
                message: 'User ID is required'
            });
        }

        if (!components || !Array.isArray(components)) {
            return res.status(400).json({
                success: false,
                message: 'Components are required and must be an array'
            });
        }

        let project = await Project.findOne({ userId });

        if (project) {
            project.components = components;
            project.updatedAt = Date.now();
            await project.save();

            return res.status(200).json({
                success: true,
                message: 'Project updated successfully',
                data: project
            });

        } else {
            project = await Project.create({
                userId,
                components
            });

            return res.status(201).json({
                success: true,
                message: 'Project saved successfully',
                data: project
            });
        }

    } catch (error) {
        console.error('Save Project Error:', error);
        return res.status(500).json({
            success: false,
            message: 'Server error while saving project',
            error: error.message
        });
    }
};


export const getMyProject = async (req, res) => {
    try {
        const { userId } = req.query;

        if (!userId) {
            return res.status(400).json({
                success: false,
                message: 'User ID is required'
            });
        }

        const project = await Project.findOne({ userId });

        if (!project) {
            return res.status(200).json({
                success: true,
                message: 'No project found',
                data: {
                    components: []
                }
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Project fetched successfully',
            data: project
        });

    } catch (error) {
        console.error('Get Project Error:', error);
        return res.status(500).json({
            success: false,
            message: 'Server error while fetching project',
            error: error.message
        });
    }
};

export const deleteProject = async (req, res) => {
    try {
        const userId = req.user._id;

        const project = await Project.findOneAndDelete({ userId });

        if (!project) {
            return res.status(404).json({
                success: false,
                message: 'No project found to delete'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Project deleted successfully'
        });

    } catch (error) {
        console.error('Delete Project Error:', error);
        return res.status(500).json({
            success: false,
            message: 'Server error while deleting project',
            error: error.message
        });
    }
};
