# Set nginx base image
FROM nginx

# File Author / Maintainer
MAINTAINER Ranjitha R

# Remove the default Nginx configuration file
RUN rm -v /etc/nginx/nginx.conf

# Copy custom configuration file from the current directory
COPY nginx.conf /etc/nginx/nginx.conf

RUN mkdir /etc/nginx/logs


ADD ./www/ /www/data/

# Expose ports
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
