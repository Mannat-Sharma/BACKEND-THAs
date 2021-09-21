# REDIS

### INSTALLING REDIS

Commands to install Redis on Ubuntu:

    $sudo apt-get update 
    $sudo apt-get install redis-server

Start Redis: 
   

     $redis-server

Check if its working:

    $redis-cli

This will open a redis prompt:

    redis 127.0.0.1:6379>

### GETTING STARTED
##### FOR STRINGS:

 - **SET** command sets a value in redis key

        127.0.0.1:6379> set keyname value
- **GET** command retrieves the value of the specified key

      127.0.0.1:6379> GET keyname

- **DEL** command removes the key
  

      127.0.0.1:6379> DEL keyname
- **EXISTS** command is used to check whether the key exists or not.
  

      127.0.0.1:6379> EXISTS keyname
- `KEYS *` lists all the keys

      127.0.0.1:6379> KEYS *
- **FLUSHALL** deletes all the keys

      127.0.0.1:6379> FLUSHALL
 - **ttl** (time to live) is a value for the period of time that a packet, or data, should exist on a computer or network before being discarded.

       127.0.0.1:6379> ttl keyname
- **EXPIRE** is used to set the expiry of a key. After the expiry time, the key will not be available.

      127.0.0.1:6379> expire keyname time_in_seconds
 - **SETEX** command is used to set some string value with a specified timeout in Redis key.

       127.0.0.1:6379> SETEX keyname timeout value

##### FOR ARRAYS
- **LPUSH** command inserts all the specified values at the head of the list stored at the key.

      127.0.0.1:6379> LPUSH keyname value [values...]
- **LRANGE** command returns the specified elements of the list stored at key.
  

      127.0.0.1:6379> LRANGE keyname start end
- **RPUSH** command inserts all the specified values at the end of the list stored at the key.

      127.0.0.1:6379> RPUSH keyname value [values...]
- **LPOP** removes and returns the first elements of the list stored at key.

      127.0.0.1:6379> LPOP keyname
- **RPOP** removes and returns the first elements of the list stored at key.

      127.0.0.1:6379> RPOP keyname

##### FOR SETS:
- **SADD** command is used to add members to a set stored at the key.

      127.0.0.1:6379> SADD setname value
- **SMEMBERS** Returns all the members of the set value stored at key.

      127.0.0.1:6379> SADD setname

##### FOR OBJECT/HASH:
- **HSET** command is used to set field in the hash stored at the key to value.

      127.0.0.1:6379> HSET keyname field value
- **HGET** Gets the value of a hash field stored at the specified key.

      127.0.0.1:6379> HGET keyname field
- **HGETALL** gets all the fields and values stored in a hash at the specified key.

      127.0.0.1:6379> HGETALL keyname
 - **HDEL** deletes one or more hash fields.

       127.0.0.1:6379> HDEL keyname field
- **HEXISTS** determines whether a hash field exists or not.

      127.0.0.1:6379> HEXISTS keyname field


# POSTGRESQL
### GETTING STARTED

    $sudo service postgresql start
    psql -U postgres

- `CREATE USER username WITH PASSWORD 'password'`  adds a new user to a PostgreSQL database cluster.
- `CREATE DATABASE dbname` creates a new database. 'name' is the name  of the database to create.
- `GRANT ALL PRIVILEGES ON dbname TO username` grants all the privileges to user, allowing that user have full control over a specific database.
- `\c dbname` connects to a desired database.
- `\d` lists all the tables in the database.
- `\l` to view all the databases.
- `DROP DATABASE dbname` drops a database.
- `CREATE TABLE tablename (columnName datatype)` creates a new table in a database.
- `\d tablename` to view the specified table's data.
- `DROP TABLE tablename` drops the specified table.
