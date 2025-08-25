#!/bin/bash

# ---- CONFIG ----
DB_USER="root"           # Your MySQL username
DB_PASS="Rajroy@@roy123" # Your MySQL password --> I AM LAZY
DB_NAME="practice"       # Your target database

# ---- PROMPT FOR FILE ----
# read -p "Enter SQL file name (with .sql extension): " SQL_FILE
SQL_FILE="first.sql"
# ---- CHECK FILE EXISTS ----
if [[ ! -f "$SQL_FILE" ]]; then
    echo "❌ Error: File '$SQL_FILE' not found!"
    exit 1
fi

# ---- EXECUTE AND SHOW OUTPUT ----
echo "📥 Executing SQL file on database '$DB_NAME'..."
echo "--------------------------------------------"
mysql -u "$DB_USER" -p"$DB_PASS" "$DB_NAME" --table <"$SQL_FILE"

# ---- CHECK EXIT STATUS ----
if [[ $? -eq 0 ]]; then
    echo "✅ Successfully executed $SQL_FILE."
else
    echo "❌ Error executing the SQL file."
fi
