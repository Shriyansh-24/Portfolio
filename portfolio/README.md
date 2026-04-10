# Shriyansh Portfolio (Flask)

Personal portfolio website built with Flask, HTML templates, and static CSS/JS assets.

## Features

- Multi-page portfolio site
- Flask routes for Home, About, Projects, Skills, Sports, and Contact
- Template-based rendering with Jinja2
- Static assets for CSS, JS, and images

## Tech Stack

- Python 3.10+
- Flask 3.0.3
- HTML/CSS/JS

## Project Structure

```text
portfolio/
  app.py
  requirements.txt
  README.md
  static/
    css/
    js/
    images/
  templates/
    base.html
    index.html
    about.html
    projects.html
    skills.html
    sports.html
    contact.html
```

## 1) Clone the Repository

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
```

## 2) Create and Activate Virtual Environment

### Windows (PowerShell)

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
```

### macOS/Linux

```bash
python3 -m venv .venv
source .venv/bin/activate
```

## 3) Install Dependencies

```bash
pip install -r requirements.txt
```

## 4) Run the App

```bash
python app.py
```

Open in browser:

- http://127.0.0.1:5000/

## Available Routes

- `/` -> Home
- `/about` -> About
- `/projects` -> Projects
- `/skills` -> Skills
- `/sports` -> Sports
- `/contact` -> Contact

## Development Notes

- The app runs with `debug=True` in `app.py` for auto-reload during development.
- Keep images inside `static/images/` and reference them with `url_for('static', filename='images/<name>')`.

## Troubleshooting

- If `flask` is not found, make sure your virtual environment is active.
- If images do not load, verify they are inside `static/images/`.
- If port 5000 is busy, stop the conflicting process or run Flask with a different port.

## License

This project is for personal portfolio use.
