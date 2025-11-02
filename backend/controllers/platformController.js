import Platform from "../models/platformModel.js";

export const createPlatform = async (req, res) => {
    try {
        const { platformName, platformType, components } = req.body;

        if (!platformName) {
            return res.status(400).json({
                success: false,
                message: "Platform name is required"
            });
        }

        const userId = req.user._id;
        const newPlatform = await Platform.create({
            userId,
            platformName,
            platformType: platformType || "custom",
            components: components || []
        });

        res.status(201).json({
            success: true,
            message: "Platform created successfully",
            platform: newPlatform
        });

    } catch (error) {
        console.error("Create Platform Error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to create platform",
            error: error.message
        });
    }
};


export const getUserPlatforms = async (req, res) => {
    try {
        const userId = req.user._id;
        const platforms = await Platform.find({ userId })
            .sort({ createdAt: -1 })
            .select("-__v");

        res.status(200).json({
            success: true,
            count: platforms.length,
            platforms
        });

    } catch (error) {
        console.error("Get Platforms Error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch platforms",
            error: error.message
        });
    }
};


export const getPlatformById = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user._id;

        const platform = await Platform.findById(id);

        if (!platform) {
            return res.status(404).json({
                success: false,
                message: "Platform not found"
            });
        }

        if (platform.userId.toString() !== userId.toString()) {
            return res.status(403).json({
                success: false,
                message: "Unauthorized: You don't own this platform"
            });
        }

        res.status(200).json({
            success: true,
            platform
        });

    } catch (error) {
        console.error("Get Platform Error:", error);
        if (error.kind === "ObjectId") {
            return res.status(400).json({
                success: false,
                message: "Invalid platform ID"
            });
        }
    }
};