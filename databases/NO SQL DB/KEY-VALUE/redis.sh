# HSET: COMANDO PARA CREAR O ACTUALIZAR UNA COLECCIÓN ::: CREAR :::

HSET user:1 name "Jon Doe" age 30 location "New York"
HSET user:2 name "Jannet Smith" age 25 location "London"

# LPUSH: AGREGAR UN CAMPO A LA IZQUIERDA DE SU CONJUNTO DE ATRIBUTOS A DETERMINADO USUARIO ::: AGREGAR :::
LPUSH user:1:posts 1001
LPUSH user:1:posts 1002
LPUSH user:2:posts 2001


# HSET: COMANDO PARA CREAR O ACTUALIZAR UNA COLECCIÓN ::: MODIFICAR :::
HSET posts:1001 content "¡Hola a todos!" created_at "2023-10-16 14:47:56" likes 10
HSET posts:1002 content "¡Feliz cumpleaños a mí!" created_at "2023-10-16 14:48:56" likes 20
HSET posts:2001 content "¡Gran día en la playa!" created_at "2023-10-16 14:50:56" likes 15

HSET user:3 name "Sarah Johnson" age 35 location "San Francisco"

# HGETALL: RECUPERAR O CONSULTAR TODA LA COLECCIÓN DE IN ID DETERMINADO
HGETALL user:1

# HGET: RECUPERAR O CONSULTAR UN DETERMIANDO ATRIBUTO DE UN ID DETERMINADO
HGET user:1 name
HGET user:1 age

# HSET: ACTUALIZAR ATRIBUTOS DE UN DOCUMENTO
HSET user:2 age 26

# DEL: ELIMINAR DOCUMENTO DE DETERMINADO ID
DEL user:3

LPUSH user:1:posts 1003
HSET post:1003 content "un comentario mas" created_at "2023_10_16 15:01:15" likes 15

HSET post:1002 likes 30
DEL post:1003
# HGETALL: CONSULTAR TODOS LOS POSTS
HGETALL posts:1001