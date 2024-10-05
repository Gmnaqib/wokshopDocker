const router = require('express').Router();
const userRoutes = require('../services/user/routes');
const authRoutes = require('../services/auth/routes');
const courseRoutes = require('../services/course/routes')
const assignmentRoutes = require('../services/assignment/routes')
const settingRoutes = require('../services/setting/routes')
const announcementRoutes = require('../services/announcement/routes')
const express = require('express');


router.use(express.json())
router.use('/auth', authRoutes)
router.use('/users', userRoutes);
router.use('/course', courseRoutes)
router.use('/assignment', assignmentRoutes)
router.use('/setting', settingRoutes)
router.use('/announcement', announcementRoutes)

module.exports = router;
