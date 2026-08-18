## Backend setup

1. cd todo-be/todo
2. python -m venv venv && source venv/bin/activate
3. pip install -r requirements.txt
4. cp .env.example .env
5. Generate a SECRET_KEY: python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
6. Paste it into .env as SECRET_KEY=<value>
7. python manage.py migrate
8. python manage.py runserver


## Frontend setup

1. cd todo-fe/todo
2. npm install
3. npm run dev
