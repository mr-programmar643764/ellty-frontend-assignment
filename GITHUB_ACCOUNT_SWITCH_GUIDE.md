# GitHub Multiple Account Setup Guide

## Method 1: Using Repository-Specific Configuration (Easiest)

This method sets the GitHub account just for this specific project.

### Step 1: Configure your other GitHub account for this repo only
```bash
# Set your other account's email and username for this project only
git config user.name "YourOtherUsername"
git config user.email "yourotheremail@example.com"
```

### Step 2: Verify the configuration
```bash
git config user.name
git config user.email
```

### Step 3: Push to your other account's repository
When you push, use a Personal Access Token (PAT) for authentication:

```bash
# Add remote with your other account
git remote add origin https://github.com/YourOtherUsername/ellty-frontend-assignment.git
git push -u origin main
```

When prompted for credentials:
- Username: `YourOtherUsername`
- Password: Use **Personal Access Token** (not your actual password)

### How to get Personal Access Token:
1. Sign in to your **other GitHub account** at github.com
2. Go to Settings → Developer settings → Personal access tokens → Tokens (classic)
3. Click "Generate new token (classic)"
4. Give it a name: "Ellty Assignment"
5. Select scopes: ✅ `repo` (full control of private repositories)
6. Click "Generate token"
7. **Copy the token** (you won't see it again!)
8. Use this token as your password when pushing

---

## Method 2: Using GitHub CLI (Recommended)

### Step 1: Install GitHub CLI
```bash
# Download from: https://cli.github.com/
# Or use winget on Windows:
winget install --id GitHub.cli
```

### Step 2: Login to your other account
```bash
# Logout from current account
gh auth logout

# Login to your other account
gh auth login
```

Follow the prompts:
- Choose: GitHub.com
- Choose: HTTPS
- Authenticate with: Login with a web browser
- It will open browser → sign in with your other account

### Step 3: Push to your repository
```bash
git remote add origin https://github.com/YourOtherUsername/ellty-frontend-assignment.git
git push -u origin main
```

---

## Method 3: Using SSH Keys (Most Secure)

### Step 1: Generate SSH key for your other account
```bash
# Generate new SSH key
ssh-keygen -t ed25519 -C "yourotheremail@example.com" -f ~/.ssh/id_ed25519_other_account

# Start SSH agent
ssh-agent -s

# Add the key
ssh-add ~/.ssh/id_ed25519_other_account
```

### Step 2: Add SSH key to your other GitHub account
```bash
# Copy the public key
cat ~/.ssh/id_ed25519_other_account.pub
```

1. Go to your **other GitHub account**
2. Settings → SSH and GPG keys → New SSH key
3. Title: "My PC - Ellty Assignment"
4. Paste the public key
5. Click "Add SSH key"

### Step 3: Configure SSH config file
Create/edit `~/.ssh/config`:

```
# Default account (tarak6984)
Host github.com-tarak6984
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519

# Other account
Host github.com-otheraccount
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_other_account
```

### Step 4: Use SSH URL with specific host
```bash
# Add remote using the specific host
git remote add origin git@github.com-otheraccount:YourOtherUsername/ellty-frontend-assignment.git
git push -u origin main
```

---

## Method 4: Using Git Credential Manager (Windows)

### Step 1: Open Credential Manager
```bash
# Open Windows Credential Manager
control /name Microsoft.CredentialManager
```

### Step 2: Remove existing GitHub credentials
1. Go to "Windows Credentials"
2. Find entries with `git:https://github.com`
3. Remove them

### Step 3: Push with new credentials
```bash
git remote add origin https://github.com/YourOtherUsername/ellty-frontend-assignment.git
git push -u origin main
```

When prompted, enter your **other account's credentials**:
- Username: Your other GitHub username
- Password: Personal Access Token (not actual password)

Windows will save these credentials for future use.

---

## Quick Comparison

| Method | Difficulty | Best For |
|--------|-----------|----------|
| **Repository-Specific Config** | ⭐ Easy | One-time push |
| **GitHub CLI** | ⭐⭐ Medium | Frequent switching |
| **SSH Keys** | ⭐⭐⭐ Advanced | Multiple accounts regularly |
| **Credential Manager** | ⭐ Easy | Windows users |

---

## Recommended Approach for Your Case

Since you want to push this specific project to your other account, I recommend **Method 1** (Repository-Specific Configuration):

```bash
# 1. Configure this repo for your other account
git config user.name "YourOtherUsername"
git config user.email "yourotheremail@example.com"

# 2. Create repository on GitHub (other account)
# Go to https://github.com/new (signed in as other account)

# 3. Add remote
git remote add origin https://github.com/YourOtherUsername/ellty-frontend-assignment.git

# 4. Push (use Personal Access Token as password)
git push -u origin main
```

---

## After Pushing Successfully

You can switch back to your main account globally:
```bash
# Check global config
git config --global user.name
git config --global user.email

# This project will still use your other account (local config overrides global)
```

---

## Troubleshooting

### Error: "Authentication failed"
- Make sure you're using a **Personal Access Token**, not your password
- GitHub removed password authentication in 2021

### Error: "Permission denied"
- Verify you're pushing to the correct username's repository
- Check your Personal Access Token has `repo` scope

### Want to see which account is configured?
```bash
# Global configuration
git config --global user.name
git config --global user.email

# This repository's configuration
git config user.name
git config user.email
```

---

**Need help with any specific method? Let me know!**
