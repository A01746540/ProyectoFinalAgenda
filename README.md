# ProyectoFinalAgenda

# Equipo4AlexisyMaxine - Proyecto final

## Instrucciones para back

### Para USUARIOS

### Para agregar un usuario:
POST
```
validaciones:
Campo	        Validación
fullname	    Debe ser un string
username	    Debe ser un entero
mail	        Debe ser un string
phone	        Debe ser un string
birthdate	    Debe ser un date
tasks         Debe ser un entero

```
```
http://localhost:8084/AgendaUser/agregarUsuario
```
```
{
    "fullname": "Edgar Alexis",
    "username": "EdAlXGoAm",
    "mail": "A01746540@tec.mx",
    "password": "12345",
    "phone": "55555555",
    "birthdate": "1999-02-26"
}
```
### Para listar todos los usuarios:
GET
```
http://localhost:8084/AgendaUser/listarUsuarios
```
```
{

}
```
### Para obtener un solo usuario por username:
GET
```
http://localhost:8084/AgendaUser/encontrarUsuario
```
```
{
    "username": "EdAlXGoAm"
}
```
### Para actualizar un usuario: 
POST
```
http://localhost:8084/AgendaUser/actualizarUsuario
```
```
{
    "fullname": "Edgar Alexis",
    "username": "EdAlXGoAm",
    "mail": "A01746540@tec.mx",
    "password": "12345",
    "phone": "5535297152",
    "birthdate": "1999-02-26"
}
```
### Para eliminar un usuario por username: 
GET
```
http://localhost:8084/AgendaUser/eliminarUsuario
```
```
{
    "username": "EdAlXGoAm"
}
```

### Para TAREAS

### Para agregar una tarea:
POST
```
validaciones:
Campo	        Validación
identificador	    Debe ser un string
categoria	        Debe ser un entero
titulo	          Debe ser un string
descripcion	      Debe ser un string
fecha_creacion	  Debe ser un date
fecha_inicio      Debe ser un date
fecha_termino	    Debe ser un date

```
```
http://localhost:8084/AgendaTask/agregarTarea
```
```
{
    identificador: 'Test-0001-2021-11-29-21-46',
    categoria: 'Test',
    titulo: 'Proyecto final de Aplicaciones Web',
    descripcion: 'Empezar y terminar el proyecto de Aplicaciones Web en menos de 12 horas sin morir en el intento',
    fecha_creacion: 2021-11-29,
    fecha_inicio: 2021-11-29,
    fecha_termino: 2021-11-30,
}
```
### Para listar todas as tareas:
GET
```
http://localhost:8084/AgendaTask/listarTareas
```
```
{

}
```
### Para listar todas las tareas de una categoría:
GET
```
http://localhost:8084/AgendaTask/listarTareasCategoria
```
```
{
    categoria: 'Test'
}
```
### Para obtener una tarea por id: 
POST
```
http://localhost:8084/AgendaTask/encontrarTarea
```
```
{
    identificador: 'Test-0001-2021-11-29-21-46'
}
```
### Para eliminar una tarea: 
POST
```
http://localhost:8084/AgendaTask/actualizarTarea
```
```
{
    identificador: 'Test-0001-2021-11-29-21-46'
}
```
### Para eliminar una tarea por id: 
POST
```
http://localhost:8084/AgendaTask/eliminarTarea
```
```
{
    identificador: 'Test-0001-2021-11-29-21-46'
}
```
