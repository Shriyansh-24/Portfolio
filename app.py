"""
app.py - Main Flask application for Shriyansh Pattanayak's portfolio
Registers all routes and runs the development server.
"""

from flask import Flask, render_template

app = Flask(__name__)

# Ensure local edits in templates/static are reflected without stale caching.
app.config["TEMPLATES_AUTO_RELOAD"] = True
app.config["SEND_FILE_MAX_AGE_DEFAULT"] = 0

# ---------------------------------------------------------------------------
# Route definitions — each maps a URL path to its HTML template
# ---------------------------------------------------------------------------

@app.route("/")
def home():
    """Home / Hero page — first impression, tagline, AI personality intro."""
    return render_template("index.html")


@app.route("/about")
def about():
    """About page — personal story, courses, photo grid."""
    return render_template("about.html")


@app.route("/projects")
def projects():
    """Projects page — 4 GitHub projects with descriptions and tech tags."""
    # Project data is defined here so it's easy to update without touching HTML
    projects_data = [
        {
            "title": "AI Biomechanics Analyzer",
            "description": "Bridges high-performance sports and AI. Uses Computer Vision to analyze joint kinematics from video — born from being a national-level track athlete who wanted to understand his own movement.",
            "tech": ["Python", "Computer Vision", "OpenCV", "Biomechanics"],
            "github": "https://github.com/Shriyansh-24/AI-Biomechanics-project",
            "emoji": "🏃",
            "highlight": True   # Featured / top card
        },
        {
            "title": "WildGuard DNA Barcode Classifier",
            "description": "High-precision genetic barcode classifier for wildlife forensics. Identifies species from DNA sequences to combat illegal wildlife trafficking — where biology literally saves lives.",
            "tech": ["Python", "Bioinformatics", "ML", "DNA Analysis"],
            "github": "https://github.com/Shriyansh-24/DNA-Barcode-classifier",
            "emoji": "🧬",
            "highlight": False
        },
        {
            "title": "AI UV Skincare Advisor",
            "description": "AI-driven UV risk assessment and personalized dermatological guidance. Empowers skin health decisions through intelligent analysis — applying AI to everyday biological challenges.",
            "tech": ["Python", "AI", "Dermatology", "Risk Assessment"],
            "github": "https://github.com/Shriyansh-24/AI-UV-Skincare",
            "emoji": "☀️",
            "highlight": False
        },
        {
            "title": "Claude Prompt Optimizer",
            "description": "Automates Anthropic's prompt engineering best practices. Features XML delimitation, Chain of Thought injection, and structured output formatting — built while finishing CS50.",
            "tech": ["TypeScript", "Next.js", "Anthropic API", "Prompt Eng."],
            "github": "https://github.com/Shriyansh-24/prompt-optimizer",
            "emoji": "🤖",
            "highlight": False
        },
    ]
    return render_template("projects.html", projects=projects_data)


@app.route("/skills")
def skills():
    """Skills page — languages, tools, and areas of expertise."""
    return render_template("skills.html")


@app.route("/sports")
def sports():
    """Sports page — track athlete life, personal and chill."""
    return render_template("sports.html")


@app.route("/contact")
def contact():
    """Contact page — email, LinkedIn, GitHub links."""
    return render_template("contact.html")


# ---------------------------------------------------------------------------
# Run
# ---------------------------------------------------------------------------

if __name__ == "__main__":
    # debug=True enables auto-reload on file changes during development
    app.run(debug=True)
