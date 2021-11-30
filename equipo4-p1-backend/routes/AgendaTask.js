const router = require('express').Router();
const AgendaTaskController = require('../controllers/AgendaTask');

router.post('/agregarTarea', AgendaTaskController.postAddTask);
router.get('/listarTareas', AgendaTaskController.getTasks);
router.get('/listarTareasCategoria', AgendaTaskController.getTaskByCategory);
router.get('/encontrarTarea', AgendaTaskController.getTask);
router.post('/actualizarTarea', AgendaTaskController.postUpdateTask);
router.post('/eliminarTarea', AgendaTaskController.postDeleteTask);

module.exports = router;