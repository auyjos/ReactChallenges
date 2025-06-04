import { Link } from 'react-router-dom'

const Home = () => {
  const challenges = [
    {
      id: 1,
      title: 'Calculator App',
      description: 'Build a fully functional calculator with basic arithmetic operations',
      path: '/calculator',
      difficulty: 'Easy',
      tags: ['useState', 'event handling', 'math operations']
    },
    {
      id: 2,
      title: 'Connect Four Game',
      description: 'Create the classic Connect Four board game with win detection',
      path: '/connect-four',
      difficulty: 'Hard',
      tags: ['2D arrays', 'game logic', 'win conditions', 'useState']
    },
    {
      id: 3,
      title: 'Dice Rolling App',
      description: 'Build a dice app with multiple dice, roll history, and statistics',
      path: '/dice-app',
      difficulty: 'Medium',
      tags: ['random numbers', 'arrays', 'state management', 'animations']
    }
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-100 text-green-800'
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800'
      case 'Hard':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to React Challenges
        </h1>
        <p className="text-xl text-gray-600 mb-4">
          Practice your React skills with these hands-on challenges
        </p>
        <p className="text-sm text-gray-500 mb-8">
          Created by Jose Auyon
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {challenges.map((challenge) => (
          <div
            key={challenge.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-semibold text-gray-900">
                {challenge.title}
              </h2>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(
                  challenge.difficulty
                )}`}
              >
                {challenge.difficulty}
              </span>
            </div>
            
            <p className="text-gray-600 mb-4">{challenge.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {challenge.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <Link
              to={challenge.path}
              className="inline-block w-full text-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
            >
              Start Challenge
            </Link>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link
          to="/challenges"
          className="inline-block bg-gray-800 text-white py-3 px-6 rounded-md hover:bg-gray-900 transition-colors duration-300"
        >
          View All Challenges
        </Link>
      </div>
    </div>
  )
}

export default Home
