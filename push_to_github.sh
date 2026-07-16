#!/bin/bash
set -e

# ---- CONFIG ----
REMOTE_URL="https://github.com/Amiid5/united_cement.git"
BRANCH="main"
COMMIT_MSG="first commit"

# ---- SCRIPT ----

# 1. Init repo if not already one
if [ ! -d ".git" ]; then
  echo "Initializing git repository..."
  git init
else
  echo "Git repository already initialized. Skipping init."
fi

# 2. Add all files (change to just README.md if you only want that)
echo "Staging files..."
git add .

# 3. Commit (only if there are changes to commit)
if git diff --cached --quiet; then
  echo "Nothing new to commit."
else
  echo "Committing..."
  git commit -m "$COMMIT_MSG"
fi

# 4. Rename branch to main
echo "Renaming branch to $BRANCH..."
git branch -M "$BRANCH"

# 5. Add remote if it doesn't already exist
if git remote get-url origin >/dev/null 2>&1; then
  echo "Remote 'origin' already exists. Updating URL..."
  git remote set-url origin "$REMOTE_URL"
else
  echo "Adding remote 'origin'..."
  git remote add origin "$REMOTE_URL"
fi

# 6. Push
echo "Pushing to $REMOTE_URL ($BRANCH)..."
git push -u origin "$BRANCH"

echo "✅ Done!"