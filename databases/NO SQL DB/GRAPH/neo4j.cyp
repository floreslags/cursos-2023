// CREAR TABLAS O NODOS
CREATE (:User {name: 'Jon', age: 39})
CREATE (:Movie {title: 'Inception', genre: 'Thriller'})

// CONSULTAS DE RELACIONES PARA CREAR EL BORDE O ARISTA
MATCH (u:User {name: 'Jon'}), (m:Movie {title: 'Inception'})
CREATE (u)-[:HAS_SEEN]->(m)


// AGREGACIÓN DE DATOS A NODOS USER Y MOVIE
CREATE (:User {name: 'Alice', age: 30})
CREATE (:User {name: 'Bob', age: 28})

CREATE (:Movie {title: 'The Shawshank Redemption', genre: 'Drama'})
CREATE (:Movie {title: 'Pulp Fiction', genre: 'Crime'})


// CREACIÓN DE RELACIONES ENTRE NODOS Y ARISTAS
MATCH (u:User {name: 'Jon'}), (m:Movie {title: 'The Shawshank Redemption'})
CREATE (u)-[:HAS_SEEN]->(m)

MATCH (u:User {name: 'Jon'}), (m:Movie {title: 'Pulp Fiction'})
CREATE (u)-[:HAS_SEEN]->(m)

MATCH (u:User {name: 'Alice'}), (m:Movie {title: 'The Shawshank Redemption'})
CREATE (u)-[:HAS_SEEN]->(m)

MATCH (u:User {name: 'Bob'}), (m:Movie {title: 'Pulp Fiction'})
CREATE (u)-[:HAS_SEEN]->(m)

// CREAR UN NODO

CREATE (:User {name: 'kEnAi', age: 10})

// MOSTRAR EL NODO CREADO
MATCH (u:User {name: 'kEnAi'})
RETURN u

// MODIFICAR DETERMINADA PROPIEDAD DE UN NODO
MATCH (u:User {name: 'kEnAi'})
SET u.age = 11

// ELIMINAR UN NODO
MATCH (u:User {name: 'kEnAi'})
DETACH DELETE u

// CRUD SOBRE UN NODO
CREATE (:Movie {title: 'Inception', genre: 'Thriller'})
MATCH (m:Movie {title: 'Inception'})
RETURN m

MATCH (m:Movie {title: 'Inception'})
SET m.genre = 'Sci-Fi'

MATCH (m:Movie {title: 'Inception'})
DETACH DELETE m