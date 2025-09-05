'use client'
import { useState } from 'react'

export default function LandingPage() {
  const [showChatbot, setShowChatbot] = useState(false)
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: 'G\'day! I\'m SiteGenie, your AI assistant for construction and mining operations across Australia. How can I help you today?'
    }
  ])
  const [chatInput, setChatInput] = useState('')

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot)
  }

  const handleChatSubmit = (message: string) => {
    if (!message.trim()) return

    const userMessage = {
      id: chatMessages.length + 1,
      type: 'user',
      content: message
    }

    setChatMessages(prev => [...prev, userMessage])
    setChatInput('')

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: chatMessages.length + 2,
        type: 'ai',
        content: generateAIResponse(message)
      }
      setChatMessages(prev => [...prev, aiResponse])
    }, 1000)
  }

  const generateAIResponse = (input: string) => {
    const lowerInput = input.toLowerCase()
    
    if (lowerInput.includes('contract')) {
      return '📄 I can help generate custom contracts compliant with Australian standards! Our AI can create construction agreements, equipment hire agreements, subcontractor agreements, and WHS compliance documents. Would you like to see a demo of our contract generation?'
    } else if (lowerInput.includes('safety')) {
      return '⚠️ Safety first, mate! I create comprehensive WHS protocols including site-specific hazard assessments, equipment safety checklists, emergency procedures, and training documentation compliant with Safe Work Australia guidelines. What type of safety protocol do you need?'
    } else if (lowerInput.includes('equipment')) {
      return '🚛 I can optimise your equipment management with predictive maintenance, utilisation analysis, and smart recommendations. Our AI tracks 95% equipment uptime for clients across Australia, ensuring compliance with Australian Standards!'
    } else if (lowerInput.includes('demo') || lowerInput.includes('try')) {
      return '🎯 Beauty! Click "Try BasePoint Platform" above to access the full SaaS platform with SiteGenie AI, project management, and all features. No credit card required!'
    } else {
      return '🤖 I\'m SiteGenie, your construction AI assistant! I can help with contract generation, WHS safety protocols, equipment optimisation, project planning, and cost analysis. What would you like to explore?'
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-orange-500">BasePoint</div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-orange-500 transition-colours">Features</a>
              <a href="#solutions" className="text-gray-600 hover:text-orange-500 transition-colours">Solutions</a>
              <a href="#pricing" className="text-gray-600 hover:text-orange-500 transition-colours">Pricing</a>
              <a href="#about" className="text-gray-600 hover:text-orange-500 transition-colours">About</a>
            </div>
            <div className="flex gap-4">
              <button className="px-4 py-2 text-orange-500 border border-orange-500 rounded-lg hover:bg-orange-50 transition-colours">
                Sign In
              </button>
              <button 
                onClick={() => window.location.href = '/dashboard'}
                className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colours"
              >
                Try BasePoint Platform
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            AI-Powered Construction &<br />
            <span className="text-orange-500">Mining Platform</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Meet <strong>SiteGenie</strong>, your intelligent assistant for project management, 
            contract generation, WHS safety protocols, and operational optimisation across Australia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => window.location.href = '/dashboard'}
              className="px-8 py-4 bg-orange-500 text-white text-lg font-semibold rounded-lg hover:bg-orange-600 shadow-lg transition-all hover:shadow-xl hover:scale-105"
            >
              🤖 Try SiteGenie AI Free
            </button>
            <button 
              onClick={toggleChatbot}
              className="px-8 py-4 border-2 border-orange-500 text-orange-500 text-lg font-semibold rounded-lg hover:bg-orange-50 transition-colours"
            >
              Chat with SiteGenie
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 opacity-70">
            <div className="text-sm text-gray-500">Trusted by leading Australian companies:</div>
            <div className="flex gap-6">
              {['Lendlease', 'CIMIC', 'John Holland', 'CPB Contractors'].map((company) => (
                <div key={company} className="px-4 py-2 bg-gray-100 rounded-lg font-medium text-gray-600">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need, AI-Enhanced
            </h2>
            <p className="text-xl text-gray-600">
              Intelligent tools that work together to optimise your Australian operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🤖',
                title: 'SiteGenie AI Assistant',
                description: 'Your intelligent companion for contracts, WHS safety protocols, risk analysis, and project optimisation with 96% accuracy across Australian standards.'
              },
              {
                icon: '📊',
                title: 'Smart Project Management',
                description: 'AI-powered scheduling, predictive budget tracking, and intelligent resource allocation that prevents 90% of delays in Australian conditions.'
              },
              {
                icon: '⚠️',
                title: 'AI WHS Safety Protocols',
                description: 'Automated safety procedures with real-time risk assessment compliant with Safe Work Australia guidelines. Achieve 45+ days without incidents using AI protocols.'
              },
              {
                icon: '🚛',
                title: 'Equipment Intelligence',
                description: 'Predictive maintenance alerts and optimal utilisation recommendations. Increase uptime by 34% with AI insights, meeting Australian Standards requirements.'
              },
              {
                icon: '📄',
                title: 'Smart Contract Generator',
                description: 'AI-generated legal documents with 94% compliance score for Australian law. Create custom contracts in under 60 seconds.'
              },
              {
                icon: '📈',
                title: 'Predictive Analytics',
                description: 'Data-driven insights with 95% accuracy in cost forecasting. Average 18% project savings through AI optimisation tailored for Australian markets.'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105 border border-gray-100">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI-Driven Solutions for Every Australian Operation
            </h2>
            <p className="text-xl text-gray-600">
              Whether you're a major contractor, mining company, or specialty trade across Australia
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Built for Australian Construction & Mining Excellence
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Manage multiple projects across Australia with AI-powered insights, automated WHS compliance, and predictive cost optimisation.
              </p>
              <ul className="space-y-4">
                {[
                  'AI-optimised project scheduling saves 23% planning time across Australian sites',
                  'Predictive budget analysis prevents cost overruns with AUD-focused reporting',
                  'Automated WHS compliance reduces incidents by 67% using Safe Work Australia guidelines',
                  'Smart equipment allocation increases utilisation by 31% meeting Australian Standards'
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                      ✓
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => window.location.href = '/dashboard'}
                className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colours"
              >
                Explore Platform
              </button>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl">
              <div className="text-center">
                <div className="text-6xl mb-4">🏗️</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Live Australian Demo Available</h4>
                <p className="text-gray-600 mb-4">
                  Experience BasePoint's AI capabilities with real Australian construction data and SiteGenie interactions tailored for local conditions.
                </p>
                <button 
                  onClick={() => window.location.href = '/dashboard'}
                  className="px-6 py-3 bg-white text-orange-500 font-semibold rounded-lg hover:shadow-md transition-all"
                >
                  Try Interactive Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <blockquote className="text-2xl md:text-3xl font-light italic mb-8">
            "BasePoint's AI transformed our operations across Queensland and NSW. SiteGenie generates contracts in minutes, 
            predicts equipment needs, and reduced our project delays by 40% while maintaining full WHS compliance."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center font-bold text-lg">
              SM
            </div>
            <div className="text-left">
              <div className="font-semibold text-orange-400">Sarah Mitchell</div>
              <div className="text-gray-400">Senior Project Manager, Lendlease Building</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Australian Operations with AI?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join thousands of Australian contractors using BasePoint's AI platform to deliver projects on time and under budget with full WHS compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '/dashboard'}
              className="px-8 py-4 bg-white text-orange-500 text-lg font-semibold rounded-lg hover:bg-gray-50 shadow-lg transition-all hover:scale-105"
            >
              Start Free Trial
            </button>
            <button className="px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-orange-500 transition-all">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-orange-500 mb-4">BasePoint</div>
              <p className="text-gray-400 mb-4">
                AI-powered construction and mining management platform with SiteGenie intelligence, designed for Australian conditions and WHS compliance.
              </p>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-orange-400">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colours">SiteGenie AI</a></li>
                <li><a href="#" className="hover:text-white transition-colours">Project Management</a></li>
                <li><a href="#" className="hover:text-white transition-colours">WHS Safety Protocols</a></li>
                <li><a href="#" className="hover:text-white transition-colours">Equipment Management</a></li>
                <li><a href="#" className="hover:text-white transition-colours">Contract Generator</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-orange-400">Australian Solutions</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colours">Major Contractors</a></li>
                <li><a href="#" className="hover:text-white transition-colours">Mining Operations</a></li>
                <li><a href="#" className="hover:text-white transition-colours">Specialty Trades</a></li>
                <li><a href="#" className="hover:text-white transition-colours">Equipment Hire Companies</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-orange-400">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colours">Help Centre</a></li>
                <li><a href="#" className="hover:text-white transition-colours">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colours">API Reference</a></li>
                <li><a href="#" className="hover:text-white transition-colours">WHS Compliance Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colours">Contact Support</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 BasePoint Australia. All rights reserved. Building the future of AI-powered construction and mining operations with full WHS compliance.</p>
          </div>
        </div>
      </footer>

      {/* Floating SiteGenie Button */}
      <button
        onClick={toggleChatbot}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all z-40 flex items-center justify-center text-2xl animate-pulse"
      >
        🤖
      </button>

      {/* Chatbot Window */}
      {showChatbot && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-2xl shadow-2xl z-50 flex flex-col border border-gray-200">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold">SiteGenie AI</h3>
                <div className="flex items-center gap-2 text-sm opacity-90">
                  <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                  <span>Online in Australia</span>
                </div>
              </div>
              <button onClick={toggleChatbot} className="text-white hover:bg-white/20 w-6 h-6 rounded-full">
                ×
              </button>
            </div>
          </div>

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

          <div className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleChatSubmit(chatInput)}
                placeholder="Ask SiteGenie anything..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                onClick={() => handleChatSubmit(chatInput)}
                className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colours"
              >
                Send
              </button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {['Demo contract', 'WHS protocol', 'Equipment help'].map((action) => (
                <button
                  key={action}
                  onClick={() => handleChatSubmit(action)}
                  className="px-2 py-1 text-xs bg-gray-100 hover:bg-orange-50 text-gray-600 rounded"
                >
                  {action}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}