# Google Flights Search Application

## Getting Started

This project allows users to search for flights and view detailed information about specific flights.

### Prerequisites

Make sure you have the following installed on your local machine:

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/GNarek/google-flights.git
   ```

2. Navigate to the project directory:

   ```bash
   cd google-flights
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### API Key Setup

You need to configure an environment file to use the flight search API.

1. Create a `.env.local` file in the root of your project:

   ```bash
   touch .env.local
   ```

2. Add the following content to `.env.local` file, replacing `YOUR_RAPIDAPI_KEY` with your actual API key:

   ```
   REACT_APP_RAPIDAPI_KEY=YOUR_RAPIDAPI_KEY
   ```

### Running the Application

To start the application in development mode, run:

```bash
npm start
```

This will start the application at `http://localhost:3000`.

### Build for Production

To create a production build, run:

```bash
npm run build
```

### License

This project is licensed under the MIT License.
