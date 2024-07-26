const express = require('express');
const router = express.Router();
const {
  getProfiles,
  getProfileById,
  createProfile,
  updateProfile,
  deleteProfile
} = require('../controllers/profileController');

router.route('/')
  .get(getProfiles)
  .post(createProfile);

router.route('/:id')
  .get(getProfileById)
  .put(updateProfile)
  .delete(deleteProfile);

module.exports = router;
