Supabase import helper

This project includes helper scripts to import a local Postgres dump into your Supabase database. I cannot accept or use your keys — run these locally and provide your own connection string.

Steps

1) Create `.env.local` in the project root with:

```
SUPABASE_DB_URL=postgres://postgres:yourpassword@db.hostname.supabase.co:5432/postgres
```

2) Choose the appropriate script depending on your OS:

- Windows (PowerShell):
  - Open PowerShell in project root and run:
    ```powershell
    .\scripts\upload_dump.ps1 path\to\dump.sql
    ```

- macOS / Linux:
  - Ensure `psql` or `pg_restore` is installed, then run:
    ```bash
    ./scripts/upload_dump.sh path/to/dump.sql
    ```

Notes

- For plain `.sql` files the scripts use `psql`.
- For custom-format dumps (created with `pg_dump -Fc`) the scripts use `pg_restore`.
- Large files (>25MB) should be handled locally — GitHub web upload rejects >25MB.
- Do NOT commit `.env.local` or any secrets to the repository.
