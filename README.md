# FinFree - Smart Budget Tracker

An all-in-one personal finance application that helps you by tracking expenses across all your accounts, managing budgets, and providing intelligent spending insights.

## Features

- **Expense Tracking**: Track expenses across all your financial accounts in one place
- **Budget Management**: Create and manage budgets to stay on top of your spending
- **Spending Reports**: Visual reports that display your spending patterns and trends
- **Smart Insights**: AI-generated insights to help you understand and optimize your spending habits

## Tech Stack

### Frontend
- React
- TypeScript
- TailwindCSS

### Backend
- Java
- Spring Boot
- Spring JPA

### Database
- PostgreSQL (Docker)

## Prerequisites

Before running this application, ensure you have the following installed:

- Node.js (v16 or higher)
- Java JDK (v17 or higher)
- Docker and Docker Compose
- Maven or Gradle

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/chewyaan/fin-free.git
cd fin-free
```

### 2. Set Up the Database

Start the PostgreSQL container:

```bash
docker run --name finfree-postgres \
  -e POSTGRES_DB=finfree \
  -e POSTGRES_USER=your_username \
  -e POSTGRES_PASSWORD=your_password \
  -p 5432:5432 \
  -d postgres
```

### 3. Configure the Backend

Create an `application.properties` file in `src/main/resources/`:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/finfree
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

### 4. Run the Backend

```bash
cd backend
./mvnw spring-boot:run
```

The backend API will be available at `http://localhost:8080`

### 5. Run the Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:5173`

## Project Structure

```
finfree/
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   └── resources/
│   │   └── test/
│   └── pom.xml
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.tsx
│   ├── package.json
│   └── tailwind.config.js
└── README.md
```

## API Documentation

Once the backend is running, you can access the API documentation at:
- Swagger UI: `http://localhost:8080/swagger-ui.html`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Enzo Panem - panemjf@gmail.com

Project Link: [https://github.com/chewyaan/fin-free](https://github.com/chewyaan/fin-free)