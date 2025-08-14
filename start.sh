#!/bin/bash

echo "🚀 Starting Scrybe Landing Page Server..."
echo "📍 Server will be available at: http://localhost:8000"
echo "🛑 Press Ctrl+C to stop the server"
echo ""

# Check if Python 3 is available
if command -v python3 &> /dev/null; then
    echo "✅ Using Python 3 server"
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    echo "✅ Using Python server"
    python -m http.server 8000
else
    echo "❌ Python not found. Trying Node.js server..."
    if command -v node &> /dev/null; then
        echo "✅ Using Node.js server"
        npx serve . -p 8000
    else
        echo "❌ Neither Python nor Node.js found."
        echo "Please install Python 3 or Node.js to run the local server."
        exit 1
    fi
fi 