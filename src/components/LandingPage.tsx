'use client';
import { useState } from 'react';

export default function LandingPage() {
  const [showChatbot, setShowChatbot] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: "👋 Hi! I'm SiteGenie, your AI assistant for construction and mining operations. How can I help you today?"
    }
  ]);
  const [chatInput, setChatInput] = useState('');

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  const handleChatSubmit = (message: string) => {
    if (!message.trim()) return;

    const userMessage = {
      id: chatMessages.length + 1,
      type: 'user',
      content: message
    };

    setChatMessages(prev => [...prev, userMessage]);
    setChatInput('');

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: chatMessages.length + 2,
        type: 'ai',
        content: generateAIResponse(message)
      };
      setChatMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const generateAIResponse = (input: string) => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('contract')) {
      return '📄 I can help generate custom contracts! Our AI can create construction agreements, equipment rentals, subcontractor agreements, and safety compliance documents. Would you like to see a demo of our contract generation?';
    } else if (lowerInput.includes('safety')) {
      return '⚠️ Safety first! I create comprehensive safety protocols including site-specific hazard assessments, equipment safety checklists, emergency procedures, and training documentation. What type of safety protocol do you need?';
    } else if (lowerInput.includes('equipment')) {
      return '🚛 I can optimize your equipment management with predictive maintenance, utilization analysis, and smart recommendations. Our AI tracks 95% equipment uptime for clients!';
    } else if (lowerInput.includes('demo') || lowerInput.includes('try')) {
      return '🎯 Great! Click "Try BasePoint Platform" above to access the full SaaS platform with SiteGenie AI, project management, and all features. No credit card required!';
    } else {
      return "🤖 I'm SiteGenie, your construction AI assistant! I can help with contract generation, safety protocols, equipment optimization, project planning, and cost analysis. What would you like to explore?";
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-orange-500">BasePoint</div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-orange-500 transition-colors">Features</a>
              <a href="#solutions" className="text-gray-600 hover:text-orange-500 transition-colors">Solutions</a>
              <a href="#pricing" className="text-gray-600 hover:text-orange-500 transition-colors">Pricing</a>
              <a href="#about" className="text-gray-600 hover:text-orange-500 transition-colors">About</a>
            </div>
            <div className="flex gap-4">
              <button className="px-4 py-2 text-orange-500 border border-orange-500 rounded-lg hover:bg-orange-50 transition-colors">
                Sign In
              </button>
              <button
                onClick={() => window.location.href = '/dashboard'}
                className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
              >
                Try BasePoint Platform
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-24">
        {/* Your other sections like Hero, Features, etc. go here */}
      </main>
      
      {/* Floating SiteGenie Button and Chatbot Window */}
      <>
        <button
          onClick={toggleChatbot}
          className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all z-40 flex items-center justify-center text-2xl animate-pulse"
        >
          🤖
        </button>

        {showChatbot && (
          <div className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-2xl shadow-2xl z-50 flex flex-col border border-gray-200">
            {/* Chatbot Header */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-t-2xl">
              {/* ... header content */}
            </div>
            {/* Chatbot Messages */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
              {chatMessages.map((message) => (
                <div key={message.id} className={`mb-4 ${message.type === 'user' ? 'text-right' : 'text-left'}`}>
                  <div className={`inline-block p-3 rounded-lg max-w-xs ${
                    message.type === 'user'
                      ? 'bg-orange-500 text-white'
                      : 'bg-white text-gray-800 shadow-sm border'
                  }`}>
                    <p className="text-sm">{message.content}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Chatbot Input */}
            <div className="p-4 border-t">
              {/* ... input content */}
            </div>
          </div>
        )}
      </>
    </div>
  );
}