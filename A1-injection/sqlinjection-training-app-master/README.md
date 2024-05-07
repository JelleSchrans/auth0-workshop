# Simple SQL Injection Training App

## Introduction

**This is an extremely vulnerable application.**

This is a simple PHP application with multiple pages to demonstrate and learn SQL Injection.

## Pre-requisites

- `docker` 
- `docker-compose`

## Setup

- Run `docker-compose up` in the root of the repo where the `docker-compose.yml` file is present
- Go to `http://127.0.0.1:8000/resetdb.php` to create the database and tables within the application.

## Walkthrough

The different inputs for each of the links can be found in `walkthrough.md`

## Reset DB

To reset the database, navigate to `/resetdb.php`

## Database export

The `sqlitraining.sql` file contains the entire database as an export. **This file can be reviewed to see what the DB looks like in terms of the tables and data within.**