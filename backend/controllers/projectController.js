import Project from '../models/projectModel.js';

export const saveProject = async (req, res) => {
    try {
        // GET DATA FROM REQUEST BODY
        const { components, userId } = req.body;

        // CHECK IF USER ID IS PROVIDED
        if (!userId) {
            return res.status(400).json({
                success: false,
                message: 'User ID is required'
            });
        }

        // VALIDATE COMPONENTS FIELD
        if (!components || !Array.isArray(components)) {
            return res.status(400).json({
                success: false,
                message: 'Components are required and must be an array'
            });
        }

        // CHECK IF PROJECT ALREADY EXISTS FOR THIS USER
        let project = await Project.findOne({ userId });

        // IF PROJECT EXISTS, UPDATE IT
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
            // IF PROJECT DOES NOT EXIST, CREATE NEW ONE
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
        // GET USER ID FROM QUERY
        const { userId } = req.query;

        // CHECK IF USER ID IS PROVIDED
        if (!userId) {
            return res.status(400).json({
                success: false,
                message: 'User ID is required'
            });
        }

        // FIND PROJECT BY USER ID
        const project = await Project.findOne({ userId });

        // IF NO PROJECT FOUND, RETURN EMPTY COMPONENTS
        if (!project) {
            return res.status(200).json({
                success: true,
                message: 'No project found',
                data: {
                    components: []
                }
            });
        }

        // RETURN FOUND PROJECT
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
        // GET USER ID FROM AUTHENTICATED USER
        const userId = req.user._id;

        // DELETE PROJECT BY USER ID
        const project = await Project.findOneAndDelete({ userId });

        // CHECK IF PROJECT EXISTS BEFORE DELETION
        if (!project) {
            return res.status(404).json({
                success: false,
                message: 'No project found to delete'
            });
        }

        // RETURN SUCCESS RESPONSE
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
