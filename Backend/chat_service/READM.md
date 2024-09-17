chat-service/
├── src/
│   ├── config/
│   │   ├── index.ts
│   │   ├── dbConfig.ts
│   │   ├── redisConfig.ts
│   │   └── rabbitmqConfig.ts
│   ├── controllers/
│   │   ├── chatController.ts
│   ├── models/
│   │   ├── messageModel.ts
│   │   ├── userModel.ts
│   ├── services/
│   │   ├── chatService.ts
│   │   ├── redisService.ts
│   │   ├── rabbitmqService.ts
│   ├── routes/
│   │   ├── chatRoutes.ts
│   ├── middleware/
│   │   ├── authMiddleware.ts
│   ├── utils/
│   │   ├── logger.ts
│   ├── index.ts
│   └── types/
│       ├── socket.d.ts
├── Dockerfile
├── docker-compose.yml
├── tsconfig.json
├── package.json
└── README.md
