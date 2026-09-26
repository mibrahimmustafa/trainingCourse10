# Use lightweight Alpine-based Nginx image
FROM nginx:alpine

# Set working directory
WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy all application assets
COPY index.html ./
COPY styles.css ./
COPY app.js ./
COPY course-data.js ./
COPY policies-data.js ./
COPY assets ./assets

# Expose port 80 for HTTP traffic
EXPOSE 80

# Health check to ensure service availability
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://127.0.0.1/ || exit 1

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
