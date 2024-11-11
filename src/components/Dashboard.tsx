import { useState } from 'react';
import { Shield, AlertTriangle, Terminal, Activity, Filter } from 'lucide-react';
import VulnerabilityCard from './VulnerabilityCard';
import { Vulnerability } from '../types';

const mockVulnerabilities: Vulnerability[] = [
  {
    id: '1',
    title: 'SQL Injection Vulnerability',
    severity: 'Critical',
    codeSnippet: 'const query = `SELECT * FROM users WHERE id = ${userId}`;',
    location: 'src/database/queries.js:15',
    impact: 'Potential database compromise and data leak',
    suggestedPatch: 'Use parameterized queries with prepared statements',
    detectedAt: '2024-03-15 14:30:00'
  },
  {
    id: '2',
    title: 'Cross-Site Scripting (XSS)',
    severity: 'High',
    codeSnippet: 'element.innerHTML = userInput;',
    location: 'src/components/UserProfile.js:45',
    impact: 'Client-side code injection risk',
    suggestedPatch: 'Use textContent or implement proper input sanitization',
    detectedAt: '2024-03-15 13:15:00'
  }
];

export default function Dashboard() {
  const [filter, setFilter] = useState('all');

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="h-6 w-6 text-red-500" />
                <span className="text-lg font-semibold">Critical</span>
              </div>
              <span className="text-2xl font-bold">2</span>
            </div>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Activity className="h-6 w-6 text-orange-500" />
                <span className="text-lg font-semibold">High</span>
              </div>
              <span className="text-2xl font-bold">5</span>
            </div>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Terminal className="h-6 w-6 text-yellow-500" />
                <span className="text-lg font-semibold">Medium</span>
              </div>
              <span className="text-2xl font-bold">8</span>
            </div>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-emerald-500" />
                <span className="text-lg font-semibold">Patched</span>
              </div>
              <span className="text-2xl font-bold">12</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Active Vulnerabilities</h2>
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-400" />
            <select 
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="bg-gray-900 text-white border-gray-700 rounded-lg px-3 py-2"
            >
              <option value="all">All Severities</option>
              <option value="critical">Critical</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockVulnerabilities.map((vulnerability) => (
            <VulnerabilityCard key={vulnerability.id} vulnerability={vulnerability} />
          ))}
        </div>
      </div>
    </div>
  );
}