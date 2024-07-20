#!/bin/sh

# Export environment variables
export VITE_API_KEY=$VITE_API_KEY
export VITE_AUTH_DOMAIN=$VITE_AUTH_DOMAIN
export VITE_PROJECT_ID=$VITE_PROJECT_ID
export VITE_STORAGE_BUCKET=$VITE_STORAGE_BUCKET
export VITE_MESSAGING_SENDER_ID=$VITE_MESSAGING_SENDER_ID
export VITE_APP_ID=$VITE_APP_ID

# Build the VITE app
npm run build

# Start the server on 0.0.0.0:80
npm run dev -- --host 0.0.0.0 --port 80