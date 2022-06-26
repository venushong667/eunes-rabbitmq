#!/bin/sh

( rabbitmqctl set_global_parameter mqtt_port_to_vhost_mapping '{"1883":"/", "8883":"/"}') &

rabbitmq-server $@