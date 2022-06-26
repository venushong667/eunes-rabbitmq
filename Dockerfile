FROM rabbitmq:3.9-management

ENV NODE_ENV=prod

COPY config/rabbitmq.conf /etc/rabbitmq/rabbitmq.conf
# COPY config/advanced.config /etc/rabbitmq/advanced.config

RUN rabbitmq-plugins enable rabbitmq_mqtt rabbitmq_auth_backend_http rabbitmq_event_exchange
# RUN apt-get update && apt-get install -y curl && curl -fsSL https://deb.nodesource.com/setup_12.x | bash - && apt-get install -y nodejs

ADD init.sh /init.sh
RUN chmod +x /init.sh

# RUN mkdir /http_auth
# ADD http_auth /http_auth
# RUN cd /http_auth && npm install

EXPOSE 15672
EXPOSE 1883

CMD ["/bin/sh", "init.sh"]