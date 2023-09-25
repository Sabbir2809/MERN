exports.Create = async (req, res) => {
  try {
    res.status(201).json({
      status: true,
      data: "Create",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.Read = async (req, res) => {
  try {
    res.status(201).json({
      status: true,
      data: "Read",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.Update = async (req, res) => {
  try {
    res.status(201).json({
      status: true,
      data: "Delete",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.Delete = async (req, res) => {
  try {
    res.status(201).json({
      status: true,
      data: "Update",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
