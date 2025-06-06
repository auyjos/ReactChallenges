import { Link } from 'react-router-dom'

const ChallengeList = () => {
  const challenges = [
    {
      id: 1,
      title: 'Calculator App',
      description: 'Build a fully functional calculator with basic arithmetic operations and memory functions',
      path: '/calculator',
      difficulty: 'Easy',
      concepts: ['useState', 'Event Handling', 'Math Operations', 'String Manipulation'],
      estimatedTime: '1 hour'
    },
    {
      id: 2,
      title: 'Connect Four Game',
      description: 'Create the classic Connect Four board game with player turns and win detection',
      path: '/connect-four',
      difficulty: 'Hard',
      concepts: ['2D Arrays', 'Game Logic', 'Win Detection', 'Component State', 'Player Turns'],
      estimatedTime: '3-4 hours'
    },
    {
      id: 3,
      title: 'Dice Rolling App',
      description: 'Build a dice app with multiple dice, roll history, statistics, and animations',
      path: '/dice-app',
      difficulty: 'Medium',
      concepts: ['Random Numbers', 'Arrays', 'Local Storage', 'Animations', 'Statistics'],
      estimatedTime: '30 minutes'
    },
    {
      id: 4,
      title: 'Expense',
      description: 'Expense tracking application',
      path: '/expense',
      difficulty: 'Easy',
      concepts: ['Forms', 'Local storage', 'Local Storage', 'Arithmethic'],
      estimatedTime: '1 hour'
    },
    {
      id: 5,
      title: 'Gradient',
      description: 'Gradient creator',
      path: '/gradient',
      difficulty: 'Easy',
      concepts: ['JSX', 'Local storage', 'Hex Values', 'Input Events'],
      estimatedTime: '1 hour'
    }
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'Hard':
        return 'bg-red-100 text-red-800 border-red-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          All Challenges
        </h1>
        <p className="text-gray-600">
          Choose a challenge to practice your React skills
        </p>
      </div>

      <div className="space-y-4">
        {challenges.map((challenge) => (
          <div
            key={challenge.id}
            className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:border-blue-300 transition-colors duration-300"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Challenge {challenge.id}: {challenge.title}
                  </h2>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium border ${getDifficultyColor(
                      challenge.difficulty
                    )}`}
                  >
                    {challenge.difficulty}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{challenge.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Key Concepts:</h4>
                    <div className="flex flex-wrap gap-2">
                      {challenge.concepts.map((concept) => (
                        <span
                          key={concept}
                          className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded border border-blue-200"
                        >
                          {concept}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Estimated Time:</h4>
                    <span className="text-gray-600">{challenge.estimatedTime}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex-shrink-0">
                <Link
                  to={challenge.path}
                  className="inline-block bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors duration-300"
                >
                  Start Challenge
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ChallengeList
