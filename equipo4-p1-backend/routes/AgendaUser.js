const router = require('express').Router();
const AgendaUserController = require('../controllers/AgendaUser');

router.post('/agregarUsuario', AgendaUserController.postAgregarUsuario);
router.get('/listarUsuarios', AgendaUserController.getUsuarios);
router.get('/encontrarUsuario', AgendaUserController.getUsuario);
router.post('/actualizarUsuario', AgendaUserController.postUpdateUsuario);
router.post('/eliminarUsuario', AgendaUserController.postDeleteUsuario);

module.exports = router;