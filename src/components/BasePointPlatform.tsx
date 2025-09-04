'use client'
import React, { useState } from 'react';

// TypeScript interfaces
interface Project {
  id: number;
  name: string;
  status: string;
  progress: number;
  budget: string;
  manager: string;
  location: string;
  aiOptimized: boolean;
}

interface AIResponse {
  id: number;
  type: string;
  content: string;
  timestamp: Date;
  actions?: Array<{label: string; action: string}>;
  attachments?: Array<{type: string; name: string; size: string}>;
}

interface Message {
  id: number;
  type: string;
  content: string;
  timestamp: Date;
  actions?: Array<{label: string; action: string}>;
}

const BasePointPlatform = () => {
  const [activeModule, setActiveModule] = useState('Dashboard')
  const [currentUser] = useState({
    name: 'Alex Johnson',
    role: 'Project Manager',
    company: 'BasePoint Construction',
    avatar: 'AJ',
    permissions: ['admin'],
    aiCredits: 2847,
    lastLogin: new Date()
  })
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [notifications] = useState([
    { id: 1, type: 'ai', message: 'SiteGenie completed risk analysis for Highway Project', time: '2 min ago', read: false },
    { id: 2, type: 'alert', message: 'Equipment maintenance due: Excavator EX-204', time: '1 hr ago', read: false },
    { id: 3, type: 'success', message: 'AI contract generated successfully for Downtown Project', time: '3 hrs ago', read: true }
  ])
  const [aiInsights] = useState([
    { type: 'cost', message: 'Potential $15K savings identified on concrete supplier switch', priority: 'high', action: 'Review supplier options' },
    { type: 'safety', message: '45 consecutive days without incidents - AI protocols working effectively', priority: 'info', action: 'Continue current procedures' },
    { type: 'equipment', message: 'Excavator utilization can be increased 23% with schedule optimization', priority: 'medium', action: 'Optimize schedule' }
  ])

  const navItems = [
    { id: 'Dashboard', icon: '📊', label: 'Dashboard', roles: ['admin', 'project_manager', 'asset_manager', 'hr', 'employee'] },
    { id: 'SiteGenie', icon: '🤖', label: 'SiteGenie AI', roles: ['admin', 'project_manager', 'asset_manager', 'hr', 'employee'], badge: 'AI' },
    { id: 'Projects', icon: '🏗️', label: 'Projects', roles: ['admin', 'project_manager'] },
    { id: 'Assets', icon: '🚛', label: 'Assets', roles: ['admin', 'asset_manager', 'project_manager'] },
    { id: 'Workforce', icon: '👥', label: 'Workforce', roles: ['admin', 'hr', 'project_manager'] },
    { id: 'Contracts', icon: '📄', label: 'Contracts', roles: ['admin', 'project_manager'] },
    { id: 'Reports', icon: '📈', label: 'Reports', roles: ['admin', 'project_manager', 'asset_manager'] },
    { id: 'Marketplace', icon: '🏪', label: 'Marketplace', roles: ['admin', 'project_manager', 'asset_manager', 'employee', 'marketplace_user'], isPortal: true },
    { id: 'Recruitment', icon: '💼', label: 'Recruitment', roles: ['admin', 'hr'], isPortal: true },
    { id: 'Settings', icon: '⚙️', label: 'Settings', roles: ['admin'] }
  ]

  // Enhanced SiteGenie AI Assistant Component
  const SiteGenieComponent = () => {
    const [messages, setMessages] = useState<Message[]>([
      {
        id: 1,
        type: 'ai',
        content: `👋 Hello ${currentUser.name.split(' ')[0]}! I'm SiteGenie, your advanced AI assistant. I've been analyzing your recent project data and have some intelligent insights ready.\n\n🎯 **Quick Stats:**\n• 23 AI-generated contracts this month\n• $47K in cost savings identified\n• 98% safety compliance maintained\n• 156 automated tasks completed\n\nWhat would you like to work on today?`,
        timestamp: new Date(),
        actions: [
          { label: 'Generate Contract', action: 'contract' },
          { label: 'Safety Analysis', action: 'safety' },
          { label: 'Cost Optimization', action: 'cost' }
        ]
      }
    ])
    const [inputValue, setInputValue] = useState('')
    const [isTyping, setIsTyping] = useState(false)

    const advancedActions = [
      { icon: '📄', title: 'Smart Contract Generator', description: 'AI-powered legal document creation with compliance checking', action: 'Generate comprehensive construction contract with AI compliance analysis' },
      { icon: '⚠️', title: 'Safety Protocol AI', description: 'Automated safety procedures with risk assessment', action: 'Create advanced safety protocol with predictive risk modeling' },
      { icon: '🔍', title: 'Project Risk Analyzer', description: 'Machine learning risk detection and mitigation', action: 'Analyze current projects for risks and optimization opportunities' },
      { icon: '💰', title: 'Budget Intelligence', description: 'Predictive cost analysis and optimization', action: 'Optimize project budgets using predictive analytics and market intelligence' },
      { icon: '🚛', title: 'Equipment AI', description: 'Smart equipment recommendations and maintenance', action: 'Analyze equipment needs and provide AI-powered optimization recommendations' },
      { icon: '📊', title: 'Market Analytics', description: 'Real-time market intelligence and pricing', action: 'Generate market analysis report with pricing predictions and trends' }
    ]

    const handleSendMessage = () => {
      if (!inputValue.trim()) return
      
      const userMessage: Message = {
        id: messages.length + 1,
        type: 'user',
        content: inputValue,
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, userMessage])
      setInputValue('')
      setIsTyping(true)
      
      setTimeout(() => {
        setIsTyping(false)
        const aiResponse = generateAdvancedAIResponse(inputValue, messages.length)
        setMessages(prev => [...prev, aiResponse])
      }, Math.random() * 2000 + 1500)
    }

    const handleAdvancedAction = (action: string) => {
      const userMessage: Message = {
        id: messages.length + 1,
        type: 'user',
        content: action,
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, userMessage])
      setIsTyping(true)
      
      setTimeout(() => {
        setIsTyping(false)
        const aiResponse = generateAdvancedAIResponse(action, messages.length)
        setMessages(prev => [...prev, aiResponse])
      }, Math.random() * 3000 + 2000)
    }

    const generateAdvancedAIResponse = (input: string, messageId: number): AIResponse => {
      const lowerInput = input.toLowerCase()
      const response: AIResponse = {
        id: messageId + 1,
        type: 'ai',
        content: '',
        timestamp: new Date(),
        actions: [],
        attachments: []
      }

      if (lowerInput.includes('contract') || lowerInput.includes('agreement')) {
        response.content = `🤖 **AI Contract Generator - Advanced Legal Intelligence**

I'm analyzing your requirements and generating a comprehensive contract with the following AI enhancements:

**✅ Contract Analysis Complete:**
• Legal compliance check: **PASSED** (OSHA, local regulations)
• Risk assessment score: **87/100** (Excellent)
• Market rate validation: **Competitive** (within 3% of market average)
• Clause optimization: **12 improvements** identified

**📋 Generated Contract Features:**
• **Smart Payment Terms**: AI-optimized milestone structure
• **Risk Mitigation Clauses**: Automatically included based on project type
• **Performance Bonds**: Calculated at optimal 15% rate
• **Weather Protection**: Advanced force majeure provisions
• **Cost Escalation**: Built-in material price adjustment mechanisms
• **Safety Requirements**: Site-specific safety protocols integrated

**🔍 AI Insights:**
*"Based on similar projects, adding an Equipment Breakdown clause could prevent potential disputes. I&apos;ve included this with 72-hour replacement guarantee terms."*

**📄 Contract Ready For Review:**
- **Document Type**: Construction Service Agreement
- **Page Count**: 12 pages
- **Estimated Review Time**: 15 minutes
- **Compliance Score**: 94% (Industry Leading)

Would you like me to export this contract as PDF, send it for digital signatures, or make any specific modifications?`

        response.actions = [
          { label: 'Export PDF', action: 'export_pdf' },
          { label: 'Send for Signature', action: 'digital_signature' },
          { label: 'Customize Terms', action: 'modify_contract' }
        ]

        response.attachments = [
          { type: 'document', name: 'Construction_Agreement_AI_Generated.pdf', size: '847 KB' }
        ]

      } else if (lowerInput.includes('safety') || lowerInput.includes('protocol')) {
        response.content = `⚠️ **Advanced Safety Protocol AI - Predictive Risk Analysis**

I&apos;ve completed a comprehensive safety analysis using machine learning and real-time data:

**🛡️ AI Safety Assessment Results:**
• **Current Safety Score**: 9.4/10 (Exceptional)
• **Risk Prediction Model**: 95% accuracy rate
• **Incident Prevention Rate**: 89% reduction vs. industry average
• **Compliance Status**: 100% OSHA/MSHA compliant

**📊 Predictive Risk Analysis:**
🔴 **High Priority**: Weather-related slip hazards (40% probability next 7 days)
🟡 **Medium Priority**: Equipment fatigue on Excavator EX-204 (maintenance due in 5 days)
🟢 **Low Priority**: Standard site housekeeping protocols

**🎯 AI-Generated Safety Protocols:**

**1. Weather Risk Mitigation (Active Alert)**
• Real-time weather monitoring integration
• Automatic work suspension triggers at 25% precipitation probability
• Enhanced anti-slip measures for high-traffic areas
• Emergency shelter protocols within 30-second access

**2. Equipment Safety Enhancement**
• Predictive maintenance alerts 5 days before service due
• Operator certification verification before equipment start
• Proximity sensors for personnel safety zones
• Automated daily equipment safety checklists

Your safety protocols are now 23% more comprehensive than industry standards!`

        response.actions = [
          { label: 'Deploy Protocols', action: 'deploy_safety' },
          { label: 'Schedule Training', action: 'safety_training' },
          { label: 'Equipment Alerts', action: 'equipment_monitoring' }
        ]

      } else if (lowerInput.includes('budget') || lowerInput.includes('cost') || lowerInput.includes('optimize')) {
        response.content = `💰 **AI Budget Intelligence - Predictive Cost Optimization**

I&apos;ve analyzed your project finances using advanced algorithms and market intelligence:

**📈 Financial Performance Analysis:**
• **Current Projects**: $8.2M total value
• **Profit Margin**: 18.7% (Above industry 15.2%)
• **Cost Variance**: -2.3% (Under budget - Excellent!)
• **AI Savings YTD**: $247K (12% improvement)

**🎯 Optimization Opportunities Identified:**

**1. Material Cost Savings (High Impact - $47K potential)**
• **Concrete Supplier Switch**: Local supplier 15% cheaper with same quality rating
• **Steel Procurement**: Bulk purchase timing could save 8% next month
• **Fuel Optimization**: Route planning AI could reduce fuel costs by 12%

**2. Labor Efficiency (Medium Impact - $23K potential)**
• **Crew Optimization**: Reallocate 2 workers from Site A to Site B for 18% productivity gain
• **Overtime Reduction**: Schedule optimization could eliminate 67% of overtime costs

**🔮 Predictive Insights:**
*"Market analysis indicates steel prices will drop 6% in 30 days. Delaying Phase 3 steel order could save $12,400. Weather predictions show optimal concrete pour window opening next Tuesday."*

**ROI Impact**: Implementing these recommendations could increase overall project profitability by 5.7%!`

        response.actions = [
          { label: 'Apply Recommendations', action: 'apply_optimizations' },
          { label: 'Generate Savings Report', action: 'savings_report' },
          { label: 'Market Analysis', action: 'detailed_market_analysis' }
        ]

      } else {
        response.content = `🤖 **Advanced AI Assistant Ready**

I&apos;ve been analyzing your BasePoint operations and have several intelligent insights ready:

**Today&apos;s AI Highlights:**
• Processed 47 automation tasks this morning
• Identified $12K cost savings opportunity
• Generated 3 safety protocol updates
• Completed predictive maintenance analysis for 23 equipment units

**My Advanced Capabilities:**
• **Smart Contract Generation** - Legally compliant documents in under 60 seconds
• **Predictive Risk Analysis** - 95% accuracy in identifying project risks  
• **Cost Optimization** - Average 18% project savings through AI recommendations
• **Safety Protocol Automation** - Comprehensive safety procedures tailored to your sites
• **Market Intelligence** - Real-time pricing and trend analysis
• **Equipment AI** - Predictive maintenance and optimal utilization strategies

What would you like me to help optimize today?`
        
        response.actions = [
          { label: 'Cost Analysis', action: 'cost_analysis' },
          { label: 'Safety Check', action: 'safety_analysis' },
          { label: 'Equipment Status', action: 'equipment_check' }
        ]
      }

      return response
    }

    return (
      <div className="p-4 md:p-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-8 gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 flex flex-wrap items-center gap-2 md:gap-3">
              🤖 SiteGenie AI Command Center
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-bold animate-pulse">
                  AI ACTIVE
                </span>
                <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs font-medium">
                  {currentUser.aiCredits} Credits
                </span>
              </div>
            </h2>
            <p className="text-gray-600 text-sm md:text-base">Your intelligent construction and mining operations assistant</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-8">
          <div className="lg:col-span-3 order-2 lg:order-1">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col h-[500px] md:h-[600px]">
              <div className="p-4 md:p-6 border-b bg-gradient-to-r from-orange-50 to-orange-100 rounded-t-xl">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-gray-800 text-base md:text-lg">Advanced AI Conversation</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs md:text-sm text-gray-600">AI Online</span>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 p-3 md:p-6 overflow-y-auto space-y-4 md:space-y-6 bg-gradient-to-b from-gray-50 to-white">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`w-full md:max-w-4xl p-3 md:p-4 rounded-xl md:rounded-2xl shadow-md ${
                      message.type === 'user' 
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white' 
                        : 'bg-white border border-gray-200'
                    }`}>
                      <div className="whitespace-pre-wrap text-sm leading-relaxed">
                        {message.content}
                      </div>
                      {message.actions && message.actions.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-3 md:mt-4 pt-3 border-t border-gray-200">
                          {message.actions.map((action, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleAdvancedAction(action.action)}
                              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-2 md:px-3 py-1 rounded-lg text-xs hover:from-orange-600 hover:to-orange-700 transition-all shadow flex-1 md:flex-none"
                            >
                              {action.label}
                            </button>
                          ))}
                        </div>
                      )}
                      <div className={`text-xs mt-2 ${message.type === 'user' ? 'text-orange-100' : 'text-gray-500'}`}>
                        {message.timestamp.toLocaleTimeString()}
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white border border-gray-200 p-3 md:p-4 rounded-xl md:rounded-2xl shadow-md">
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                        <span className="text-sm text-gray-600">SiteGenie is thinking...</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-3 md:p-6 border-t bg-gray-50">
                <div className="flex flex-col md:flex-row gap-2 md:gap-3">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Ask SiteGenie about contracts, safety, optimization..."
                    className="flex-1 border border-gray-300 rounded-xl px-3 md:px-4 py-2 md:py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm md:text-base"
                    disabled={isTyping}
                    style={{ fontSize: '16px' }}
                  />
                  <button 
                    onClick={handleSendMessage}
                    disabled={isTyping || !inputValue.trim()}
                    className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-xl hover:from-orange-600 hover:to-orange-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg text-sm md:text-base"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 md:space-y-6 order-1 lg:order-2">
            <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
              <h3 className="font-bold text-gray-800 mb-3 md:mb-4 flex items-center gap-2 text-sm md:text-base">
                ⚡ Advanced AI Actions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-2 md:gap-3">
                {advancedActions.slice(0, 4).map((action, index) => (
                  <button
                    key={index}
                    onClick={() => handleAdvancedAction(action.action)}
                    className="w-full text-left p-2 md:p-3 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-orange-50 hover:to-orange-100 rounded-lg transition-all border border-gray-200 hover:border-orange-200 group"
                    disabled={isTyping}
                  >
                    <div className="flex items-start gap-2 md:gap-3">
                      <span className="text-lg md:text-2xl group-hover:scale-110 transition-transform">{action.icon}</span>
                      <div>
                        <div className="font-semibold text-xs md:text-sm text-gray-800">{action.title}</div>
                        <div className="text-xs text-gray-600 mt-1 hidden md:block">{action.description}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl shadow-lg p-4 md:p-6">
              <h3 className="font-bold text-gray-800 mb-3 md:mb-4 flex items-center gap-2 text-sm md:text-base">
                🎯 AI Performance
              </h3>
              <div className="space-y-3 md:space-y-4">
                {[
                  { label: 'Tasks Completed', value: '2,847', progress: 87, color: 'orange' },
                  { label: 'Cost Savings', value: '$247K', progress: 94, color: 'green' },
                  { label: 'Accuracy Rate', value: '96%', progress: 96, color: 'blue' }
                ].map((metric, index) => (
                  <div key={index} className="bg-white rounded-lg p-3 shadow">
                    <div className="flex justify-between items-center">
                      <span className="text-xs md:text-sm font-medium">{metric.label}</span>
                      <span className={`text-base md:text-lg font-bold text-${metric.color}-600`}>{metric.value}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div 
                        className={`bg-${metric.color}-500 h-2 rounded-full transition-all duration-300`}
                        style={{width: `${metric.progress}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Dashboard Component
  const DashboardComponent = () => {
    return (
      <div className="p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
            <p className="text-gray-600">Welcome back, {currentUser.name}</p>
          </div>
          <button 
            onClick={() => setActiveModule('SiteGenie')}
            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 flex items-center gap-2"
          >
            🤖 Ask SiteGenie
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { title: 'Active Projects', value: '24', subtitle: '🤖 AI-Optimized: 18', icon: '🏗️', color: 'blue' },
            { title: 'AI Tasks Completed', value: '156', subtitle: '📄 Contracts: 23 | ⚠️ Safety: 12', icon: '🤖', color: 'orange' },
            { title: 'Smart Assets', value: '89', subtitle: '🔧 Maintenance Due: 3', icon: '🚛', color: 'green' },
            { title: 'AI Cost Savings', value: '$2.4M', subtitle: '📈 This Quarter', icon: '💰', color: 'purple' }
          ].map((metric, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{metric.subtitle}</p>
                </div>
                <div className="text-3xl">{metric.icon}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              🤖 SiteGenie AI Insights
              <span className="bg-orange-500 text-white px-2 py-1 rounded text-xs">LIVE</span>
            </h3>
            <div className="space-y-3">
              {aiInsights.map((insight, index) => (
                <div key={index} className="bg-white rounded p-3 border-l-4 border-orange-500">
                  <p className="text-sm font-medium text-gray-800">{insight.message}</p>
                  <button className="text-xs text-orange-600 hover:text-orange-700 font-medium mt-1">
                    {insight.action} →
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Recent AI Activities</h3>
            <div className="space-y-3">
              {[
                { icon: '📄', title: 'Contract Generated', desc: 'Subcontractor Agreement - Electrical', time: '2 hrs ago' },
                { icon: '⚠️', title: 'Safety Protocol Created', desc: 'Mining Site - Level 3 Procedures', time: '4 hrs ago' },
                { icon: '🔍', title: 'Risk Analysis Completed', desc: 'Highway Project - Weather Impact', time: '1 day ago' }
              ].map((activity, index) => (
                <div key={index} className="flex items-center gap-3 text-sm">
                  <span className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">{activity.icon}</span>
                  <div className="flex-1">
                    <p className="font-medium">{activity.title}</p>
                    <p className="text-gray-600">{activity.desc}</p>
                  </div>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Smart Task Recommendations</h3>
            <div className="space-y-3">
              {[
                { priority: 'red', title: 'Review AI-Generated Contract', desc: 'Riverside Mall - Electrical Subcontract', time: 'Due Today' },
                { priority: 'orange', title: 'Equipment Maintenance Alert', desc: 'Excavator EX-204 - Scheduled Service', time: '3 days' },
                { priority: 'blue', title: 'Safety Protocol Update', desc: 'Mining Site Alpha - Quarterly Review', time: '1 week' }
              ].map((task, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className={`w-2 h-2 bg-${task.priority}-500 rounded-full`}></span>
                    <div>
                      <p className="font-medium text-sm">{task.title}</p>
                      <p className="text-xs text-gray-600">{task.desc}</p>
                    </div>
                  </div>
                  <span className={`text-xs text-${task.priority}-600 font-medium`}>{task.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Projects Component
  const ProjectsComponent = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)
    
    const projects: Project[] = [
      { id: 1, name: 'Downtown Office Complex', status: 'In Progress', progress: 75, budget: '$2.1M', manager: 'Sarah Johnson', location: 'Downtown', aiOptimized: true },
      { id: 2, name: 'Highway Bridge Repair', status: 'In Progress', progress: 45, budget: '$800K', manager: 'Mike Chen', location: 'Highway 101', aiOptimized: true },
      { id: 3, name: 'Mining Site Expansion', status: 'Planning', progress: 30, budget: '$1.2M', manager: 'Alex Rodriguez', location: 'Site Alpha', aiOptimized: false },
      { id: 4, name: 'Residential Complex', status: 'On Hold', progress: 15, budget: '$950K', manager: 'Emma Davis', location: 'Suburbs', aiOptimized: true }
    ]

    return (
      <div className="p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Projects</h2>
            <p className="text-gray-600">Manage and track all your construction and mining projects</p>
          </div>
          <button 
            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 flex items-center gap-2"
            onClick={() => alert('SiteGenie: I can help you create a new project with AI-powered planning, budget optimization, and resource allocation. What type of project would you like to start?')}
          >
            🤖 Create Smart Project
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <div key={project.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
                 onClick={() => setSelectedProject(project)}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">{project.name}</h3>
                {project.aiOptimized && (
                  <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded text-xs font-bold">
                    🤖 AI
                  </span>
                )}
              </div>
              
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progress</span>
                    <span className="font-medium">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        project.progress >= 70 ? 'bg-green-500' : 
                        project.progress >= 40 ? 'bg-blue-500' : 'bg-orange-500'
                      }`}
                      style={{width: `${project.progress}%`}}
                    ></div>
                  </div>
                </div>
                
                <div className="text-sm text-gray-600 space-y-1">
                  <div className="flex justify-between">
                    <span>Status:</span>
                    <span className={`font-medium ${
                      project.status === 'In Progress' ? 'text-blue-600' :
                      project.status === 'Planning' ? 'text-orange-600' : 'text-red-600'
                    }`}>{project.status}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Budget:</span>
                    <span className="font-medium">{project.budget}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Manager:</span>
                    <span>{project.manager}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-700">
              Selected: <strong>{selectedProject.name}</strong> - Click outside to deselect
            </p>
          </div>
        )}
      </div>
    )
  }

  // Simple placeholder components for other modules
  const AssetsComponent = () => (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Smart Asset Management</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-600">Asset management module with AI-powered predictive maintenance and utilization optimization.</p>
      </div>
    </div>
  )

  const WorkforceComponent = () => (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Intelligent Workforce Management</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-600">Workforce management with AI-powered skill matching and compliance tracking.</p>
      </div>
    </div>
  )

  const ContractsComponent = () => (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">AI Contract Management</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-600">Smart contract generation and automated compliance tracking.</p>
      </div>
    </div>
  )

  const MarketplaceComponent = () => (
    <div className="p-6">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-blue-600 font-semibold">🏪 BasePoint Equipment Marketplace</span>
          <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold">EXTERNAL PORTAL</span>
        </div>
        <p className="text-sm text-blue-700">
          This is BasePoint&apos;s public equipment marketplace where all network members can view and create listings.
        </p>
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Smart Equipment Marketplace</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-600">AI-powered equipment matching and recommendations.</p>
      </div>
    </div>
  )

  const RecruitmentComponent = () => (
    <div className="p-6">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-blue-600 font-semibold">💼 BasePoint Careers Portal</span>
          <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold">EXTERNAL WEBSITE</span>
        </div>
        <p className="text-sm text-blue-700">
          Job postings created here will be published on the public BasePoint careers website.
        </p>
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">AI Talent Recruitment</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-600">Smart candidate matching and automated screening.</p>
      </div>
    </div>
  )

  const ReportsComponent = () => (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        📈 Performance Analytics
        <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-sm">AI-Enhanced</span>
      </h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-600">AI-powered insights and performance metrics with predictive analytics.</p>
      </div>
    </div>
  )

  const SettingsComponent = () => (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Settings</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-600">Platform configuration and AI automation settings.</p>
      </div>
    </div>
  )

  const renderActiveModule = () => {
    switch(activeModule) {
      case 'Dashboard':
        return <DashboardComponent />
      case 'SiteGenie':
        return <SiteGenieComponent />
      case 'Projects':
        return <ProjectsComponent />
      case 'Assets':
        return <AssetsComponent />
      case 'Workforce':
        return <WorkforceComponent />
      case 'Contracts':
        return <ContractsComponent />
      case 'Marketplace':
        return <MarketplaceComponent />
      case 'Recruitment':
        return <RecruitmentComponent />
      case 'Reports':
        return <ReportsComponent />
      case 'Settings':
        return <SettingsComponent />
      default:
        return <DashboardComponent />
    }
  }

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Enhanced Mobile-First Sidebar */}
      <div className={`${sidebarCollapsed ? 'w-0 md:w-16' : 'w-full md:w-64'} bg-white shadow-lg transition-all duration-300 absolute md:relative z-50 h-full ${sidebarCollapsed ? '' : 'md:block'}`}>
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <div className={`${sidebarCollapsed ? 'hidden md:block' : 'block'}`}>
              <h1 className="text-xl font-bold text-orange-600">BasePoint</h1>
              <p className="text-sm text-gray-600">AI-Powered Platform</p>
            </div>
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              <span className="text-gray-600">{sidebarCollapsed ? '→' : '←'}</span>
            </button>
          </div>
          
          <nav className={`flex-1 p-4 overflow-y-auto ${sidebarCollapsed ? 'hidden md:block' : 'block'}`}>
            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveModule(item.id)
                    if (window.innerWidth < 768) setSidebarCollapsed(true)
                  }}
                  className={`w-full flex items-center justify-between px-4 py-3 text-left rounded-lg transition-colors group ${
                    activeModule === item.id
                      ? 'bg-orange-100 text-orange-600 shadow-sm'
                      : item.isPortal
                      ? 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-xl transition-transform group-hover:scale-110 ${sidebarCollapsed ? 'md:mx-auto' : ''}`}>
                      {item.icon}
                    </span>
                    <span className={`font-medium ${sidebarCollapsed ? 'hidden md:hidden lg:block' : 'block'}`}>
                      {item.label}
                    </span>
                  </div>
                  <div className={`flex gap-1 ${sidebarCollapsed ? 'hidden' : 'flex'}`}>
                    {item.badge && (
                      <span className="bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold animate-pulse">
                        {item.badge}
                      </span>
                    )}
                    {item.isPortal && (
                      <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold">
                        Portal
                      </span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </nav>
          
          <div className={`p-4 border-t border-gray-200 ${sidebarCollapsed ? 'hidden md:block' : 'block'}`}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">
                  {currentUser.avatar}
                </span>
              </div>
              <div className={`${sidebarCollapsed ? 'hidden lg:block' : 'block'}`}>
                <div className="font-medium text-sm text-gray-800">{currentUser.name}</div>
                <div className="text-xs text-gray-500">{currentUser.role}</div>
                <div className="text-xs text-orange-600 font-medium">{currentUser.aiCredits} AI Credits</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {!sidebarCollapsed && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarCollapsed(true)}
        />
      )}

      {/* Enhanced Main Content Area */}
      <div className="flex-1 overflow-hidden flex flex-col">
        {/* Mobile Header */}
        <div className="md:hidden bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <span className="text-xl">☰</span>
          </button>
          <div className="flex items-center gap-3">
            <h1 className="text-lg font-bold text-gray-800">
              {navItems.find(item => item.id === activeModule)?.icon} {navItems.find(item => item.id === activeModule)?.label}
            </h1>
            {activeModule === 'SiteGenie' && (
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-600 font-medium">AI Online</span>
              </div>
            )}
          </div>
          <div className="flex items-center gap-2">
            {notifications.filter(n => !n.read).length > 0 && (
              <div className="relative">
                <button className="p-2 rounded-lg hover:bg-gray-100">
                  <span className="text-xl">🔔</span>
                </button>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                  {notifications.filter(n => !n.read).length}
                </div>
              </div>
            )}
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xs">{currentUser.avatar}</span>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto bg-gray-50">
          {renderActiveModule()}
        </div>

        {/* Mobile AI Quick Access */}
        {activeModule !== 'SiteGenie' && (
          <button
            onClick={() => setActiveModule('SiteGenie')}
            className="md:hidden fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full shadow-lg flex items-center justify-center text-xl hover:shadow-xl transition-all z-30 animate-pulse"
          >
            🤖
          </button>
        )}
      </div>
    </div>
  )
}

export default BasePointPlatform