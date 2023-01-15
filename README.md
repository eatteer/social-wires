# SocialWires

### A tener en cuenta:
Para cumplir con el objetivo de filtrar busquedas realicé las siguientes modificaciones a la API:
- Cambié el decorador @Get por @Post del método findFilterMessage en el controlador de MessagesController ya que está petición requiere que se envíe un cuerpo de petición y el cliente Http de Angular no permite enviar peticiones GET con cuerpos de petición.
- Añadí `{ select: ['user'], relations: { user: true } }` a la consulta de findFilterMessage del servicio MessagesService para relacionar los documentos filtrados con los usuarios.

Los cambios los realicé en local, por lo que a la hora de probar la aplicación que desarrollé deben realizarse los cambios que mencioné arriba.

### Páginas
1. /landing
2. /login
3. /signup
4. /all-messages
5. /my-messages
6. /create-message
