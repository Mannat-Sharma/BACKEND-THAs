# PostgreSQL [contd.]

    

 - `CREATE SCHEMA schema_name` creates a new schema in the database.
 - `CREATE TABLE tablename.schema_name ( column datatype)` creates a new table in the schema.
 - `DROP SCHEMA schema_name`   removes a schema. By default, it refuses to drop a schema if it contains any objects.
 - `DROP SCHEMA schema_name CASCADE` automatically drop objects (tables, functions, etc.) that are contained in the schema.
- `INSERT INTO tablename (column1, column2,..) VALUES (value1, value2,..)` inserts a new row in the table.