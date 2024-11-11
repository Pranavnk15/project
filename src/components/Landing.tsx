import { Shield, Zap, Lock, Code2, ArrowRight } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: 'Real-time Detection',
    description: 'Continuous monitoring and instant vulnerability detection using advanced AI algorithms.',
    icon: Zap
  },
  {
    title: 'Automated Patching',
    description: 'Smart patch recommendations and one-click fixes for identified vulnerabilities.',
    icon: Shield
  },
  {
    title: 'Code Analysis',
    description: 'Deep code inspection and pattern recognition for zero-day vulnerability detection.',
    icon: Code2
  },
  {
    title: 'Secure Integration',
    description: 'Seamless integration with your existing development workflow and CI/CD pipeline.',
    icon: Lock
  }
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/50 to-gray-950" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-500 text-transparent bg-clip-text">
              Secure Your Code with AI-Powered Intelligence
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Advanced zero-day vulnerability detection and automated patch recommendations powered by cutting-edge artificial intelligence.
            </p>
            <div className="flex justify-center space-x-4">
              <a 
                href="/dashboard" 
                className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 rounded-lg flex items-center space-x-2 transition-colors"
              >
                <span>Get Started</span>
                <ArrowRight className="h-5 w-5" />
              </a>
              <a 
                href="#features" 
                className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Powerful Security Features</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our platform combines advanced AI algorithms with security expertise to provide comprehensive protection for your applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="p-6 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors">
                <feature.icon className="h-12 w-12 text-emerald-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Code Preview Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Real-time Vulnerability Detection</h2>
              <p className="text-gray-400 mb-8">
                Our AI engine continuously analyzes your codebase, identifying potential security threats before they can be exploited.
              </p>
              <ul className="space-y-4">
                {[
                  'Zero-day vulnerability detection',
                  'Automated severity classification',
                  'Intelligent patch recommendations',
                  'Continuous security monitoring'
                ].map((item) => (
                  <li key={item} className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-emerald-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-900 rounded-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>
              <pre className="text-sm text-gray-300 overflow-x-auto">
                <code>{`// Vulnerability detected: SQL Injection Risk
const query = \`SELECT * FROM users WHERE id = \${userId}\`;

// Recommended fix:
const query = 'SELECT * FROM users WHERE id = ?';
const [rows] = await connection.execute(query, [userId]);

// Status: Critical
// Location: src/database/queries.js:15
// Impact: Potential database compromise`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}