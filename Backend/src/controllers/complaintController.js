import Complaint from "../models/Complaint.js";

export const createComplaint = async (req, res) => {
  try {
    const { title, description, category, location, priority } = req.body;

    const complaint = await Complaint.create({
      title,
      description,
      category,
      location,
      priority,
      createdBy: req.user.id,
    });

    res.status(201).json({
      success: true,
      message: "Complaint created successfully",
      complaint,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
