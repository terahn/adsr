import express from 'express';
import UserCtrl from '../controllers/user-ctrl';

const router = express.Router();

router.post('/user', UserCtrl.createUser);
router.put('/user/:id', UserCtrl.updateUser);
router.delete('/user/:id', UserCtrl.deleteUser);
router.get('/user/:id', UserCtrl.getUserById);
router.get('/users', UserCtrl.getUsers);

module.exports = router;
