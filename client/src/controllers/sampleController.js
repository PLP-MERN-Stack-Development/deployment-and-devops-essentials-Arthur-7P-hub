// sampleController.js - placeholder controller
exports.getSample = (req, res) => {
  res.status(200).json({ message: 'Sample controller working' });
};

exports.createSample = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }
  res.status(201).json({ message: `Sample created: ${name}` });
};
