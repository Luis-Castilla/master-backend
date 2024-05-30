const { getTopReposGoogleService } = require('../services/gitHub-service');


  const getTopReposGoogleController = async (req, res) => {
    try {
      const response = await getTopReposGoogleService();
      const responseObject = {
        data: response,
        message: 'Success',
      };
      res.json(responseObject);
    } catch (error) {
      res.status(error.status).json({ message: error.message });
    }
  };

module.exports = { getTopReposGoogleController };