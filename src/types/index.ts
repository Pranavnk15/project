export interface Vulnerability {
  id: string;
  title: string;
  severity: 'Critical' | 'High' | 'Medium' | 'Low';
  codeSnippet: string;
  location: string;
  impact: string;
  suggestedPatch?: string;
  detectedAt: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType;
}