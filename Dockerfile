### configuration de XDEBUG 3
### les ARGs doivent être défini avant et après le FROM
### https://docs.docker.com/compose/compose-file/compose-file-v3/#args
ARG xdebug_remote_host
ARG xdebug_mode
ARG xdebug_output_dir

FROM wordpress:latest

# configuration de XDEBUG 3
ARG xdebug_remote_host
ARG xdebug_mode
ARG xdebug_output_dir

RUN apt-get update \
    # XDEBUG
    && pecl install xdebug-3.0.0 \
    && docker-php-ext-enable xdebug

RUN set -eux; \
   { \
       echo "xdebug.mode=${xdebug_mode}"; \
       echo "xdebug.client_host=${xdebug_remote_host}"; \
       echo "xdebug.output_dir=${xdebug_output_dir}"; \
   } > /usr/local/etc/php/conf.d/xdebug.ini