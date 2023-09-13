DOCKER_IMAGE_NAME = blog-service
DOCKER_CONTAINER_NAME = blog-service-node-container
DATABASE_URL = ""

build:
	docker build --build-arg DATABASE_URL=$(DATABASE_URL) -t $(DOCKER_IMAGE_NAME) .

start:
	docker run -p 3000:3000 --name $(DOCKER_CONTAINER_NAME) -e NODE_ENV=production -e DATABASE_URL=$(DATABASE_URL) $(DOCKER_IMAGE_NAME)

stop:
	docker stop $(DOCKER_CONTAINER_NAME)
	docker rm $(DOCKER_CONTAINER_NAME)

restart: stop start

.PHONY: build start stop restart
