import React, { useState, useEffect, useRef } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { AlertCircle, Server,RefreshCcw, AlertTriangle,Shield, Zap, Activity, Box, Clock, Database, Lock, Globe, MessageSquare, X, HardDrive, Send, Rewind, Play, FastForward, SkipForward } from 'lucide-react';
const generateQuantumData = () => {
  return [...Array(10)].map((_, i) => ({
    time: i,
    entanglement: Math.random() * 100,
    qubits: Math.floor(Math.random() * 1000),
    decoherence: Math.random() * 50
  }));
};

const Footer = () => (
  <footer style={{
    backgroundColor: '#111827',
    color: '#A78BFA',
    padding: '20px',
    textAlign: 'center',
    borderTop: '1px solid #4B5563',
    marginTop: 'auto'
  }}>
    <div style={{ marginBottom: '10px' }}>
      <span style={{ marginRight: '20px' }}>© 2024 <a href="https://quantumqitten.xyz/">QuantumQitten</a></span>
      <span>Powered by MIW - IA Quantique</span>
    </div>
    <div>
      <a href="https://quantumqitten.xyz/disclaimer/" target="_blank" style={{ color: '#E9D5FF', marginRight: '15px', textDecoration: 'none' }}>Mentions Legales</a>
      <a href="https://quantumqitten.xyz/contact/" target="_blank" style={{ color: '#E9D5FF', textDecoration: 'none' }}>Contact</a>
    </div>
  </footer>
);

const ProgressBar = ({ value, color }) => (
  <div style={{ width: '100%', backgroundColor: '#4a5568', borderRadius: '9999px', height: '8px', overflow: 'hidden' }}>
    <div style={{ width: `${value}%`, backgroundColor: color, height: '100%' }} />
  </div>
);

const generateSuperposedStates = () => {
  const serverTypes = [
    { name: 'Serveur Web', icon: Globe },
    { name: 'Base de Données', icon: Database },
    { name: 'Authentification', icon: Lock },
    { name: 'Application', icon: Server },
    { name: 'Stockage', icon: HardDrive }
  ];


  return serverTypes.map((type, i) => ({
    id: `Serveur-${i + 1}`,
    type: type.name,
    icon: type.icon,
    operationalProbability: Math.random(),
    defectiveProbability: Math.random(),
    quantumState: Math.random()
  }));
};

const generateTimelineData = () => {
  const events = [
    { name: 'Mise à jour', icon: RefreshCcw },
    { name: 'Panne', icon: AlertTriangle },
    { name: 'Optimisation', icon: Zap },
    { name: 'Intrusion', icon: Shield },
    { name: 'Backup', icon: HardDrive }
  ];
  const timeStates = [
    { name: 'Passé lointain', icon: Rewind },
    { name: 'Passé récent', icon: Play },
    { name: 'Présent', icon: Activity },
    { name: 'Futur proche', icon: FastForward },
    { name: 'Futur lointain', icon: SkipForward }
  ];
  return [...Array(5)].map(() => {
    const event = events[Math.floor(Math.random() * events.length)];
    const timeState = timeStates[Math.floor(Math.random() * timeStates.length)];
    return {
      time: timeState.name,
      timeIcon: timeState.icon,
      event: event.name,
      icon: event.icon,
      impact: Math.floor(Math.random() * 100)
    };
  });
};

const ChatMessage = ({ message, isAI }) => (
  <div style={{ 
    display: 'flex', 
    justifyContent: isAI ? 'flex-start' : 'flex-end',
    marginBottom: '10px'
  }}>
    <div style={{ 
      backgroundColor: isAI ? '#4C1D95' : '#1F2937',
      color: '#E9D5FF',
      padding: '8px 12px',
      borderRadius: '12px',
      maxWidth: '80%'
    }}>
      {message}
    </div>
  </div>
);

const ChatPopup = ({ isOpen, onClose, superposedStates }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const quirkyChatMessages = [
    "Désolé, je suis en train de démêler des flux quantiques. Je reviens dans une nanoseconde !",
    "Oups, j'ai accidentellement inversé la polarité du continuum espace-temps. Vous disiez ?",
    "Je suis un peu occupé à calculer le sens de la vie. Spoiler : c'est 42.",
    "Attendez, je crois que je viens de voir passer un chat de Schrödinger. Il était vivant. Ou pas.",
    "Je suis en pleine méditation quantique. Pouvez-vous reformuler votre question en termes d'ondes et de particules ?",
    "Désolé pour le délai, je négociais avec un qubit rebelle.",
    "Je viens de créer accidentellement un univers parallèle. Dans celui-ci, vous n'avez pas posé cette question.",
    "Un moment, je suis en train de déboguer l'entropie de l'univers. C'est un vrai casse-tête !",
    "Je viens de recevoir un appel d'Einstein. Il n'est pas content de ce que nous faisons avec la physique quantique.",
    "Excusez-moi, je viens de me perdre dans une superposition d'états. Quelle version de moi vouliez-vous ?",
    "Miaou, Avez vous trouvé l'easteregg dans le livre blanc ?"
  ];

  const handleSend = () => {
    if (input.trim() === '') return;

    setMessages(prev => [...prev, { text: input, isAI: false }]);
    setInput('');

    // Simuler une réponse de MIW
    setTimeout(() => {
      const aiResponse = Math.random() < 0.3 ? // 30% de chance d'avoir une réponse décalée
        quirkyChatMessages[Math.floor(Math.random() * quirkyChatMessages.length)] :
        generateAIResponse(input, superposedStates);
      setMessages(prev => [...prev, { text: aiResponse, isAI: true }]);
    }, Math.random() * 2000 + 500); // Délai aléatoire entre 500ms et 2500ms
  };

  const generateAIResponse = (input, states) => {
    
  
    // 30% de chance d'avoir une réponse décalée
    if (Math.random() < 0.3) {
      return quirkyChatMessages[Math.floor(Math.random() * quirkyChatMessages.length)];
    }
  
    const lowercaseInput = input.toLowerCase();
    
    if (lowercaseInput.includes('état') || lowercaseInput.includes('status')) {
      const randomServer = states[Math.floor(Math.random() * states.length)];
      return `Le ${randomServer.type} est opérationnel à ${(randomServer.operationalProbability * 100).toFixed(2)}% et défectueux à ${(randomServer.defectiveProbability * 100).toFixed(2)}%. Son état quantique est à ${(randomServer.quantumState * 100).toFixed(2)}%.`;
    } else if (lowercaseInput.includes('problème') || lowercaseInput.includes('erreur')) {
      const problematicServer = states.find(s => s.defectiveProbability > 0.5) || states[0];
      return `J'ai détecté un problème potentiel avec le ${problematicServer.type}. Son taux de défectuosité est de ${(problematicServer.defectiveProbability * 100).toFixed(2)}%. Je recommande une vérification approfondie.`;
    } else if (lowercaseInput.includes('optimiser') || lowercaseInput.includes('améliorer')) {
      const leastOptimalServer = states.reduce((prev, current) => 
        (prev.operationalProbability < current.operationalProbability) ? prev : current
      );
      return `Pour optimiser notre infrastructure, je suggère de se concentrer sur le ${leastOptimalServer.type}. Son taux opérationnel n'est que de ${(leastOptimalServer.operationalProbability * 100).toFixed(2)}%. Une mise à niveau quantique pourrait grandement améliorer ses performances.`;
    } else if (lowercaseInput.includes('sécurité') || lowercaseInput.includes('protection')) {
      const avgQuantumState = states.reduce((sum, server) => sum + server.quantumState, 0) / states.length;
      return `Notre niveau de sécurité quantique global est de ${(avgQuantumState * 100).toFixed(2)}%. N'oubliez pas que dans le monde quantique, observer c'est interagir. Notre cryptographie quantique est aussi impénétrable qu'un trou noir... en théorie.`;
    } else {
      return "Je suis MIW, l'IA en charge de la supervision de notre infrastructure IT quantique. Je peux vous informer sur l'état des serveurs, les problèmes potentiels, les optimisations possibles et notre sécurité quantique. Que souhaitez-vous savoir ?";
    }
  };

  if (!isOpen) return null;

  const AIAvatar = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="20" fill="#4C1D95" />
      <circle cx="20" cy="15" r="6" fill="#A78BFA" />
      <rect x="10" y="24" width="20" height="10" rx="5" fill="#A78BFA" />
      <line x1="15" y1="8" x2="25" y2="8" stroke="#E9D5FF" strokeWidth="2" />
      <line x1="13" y1="32" x2="27" y2="32" stroke="#E9D5FF" strokeWidth="2" />
    </svg>
  );

  return (
   
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      width: '300px',
      height: '400px',
      backgroundColor: '#111827',
      borderRadius: '10px',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 0 10px rgba(167, 139, 250, 0.3)'
    }}>
      <div style={{ 
        padding: '10px', 
        backgroundColor: '#1F2937', 
        borderTopLeftRadius: '10px', 
        borderTopRightRadius: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <AIAvatar />
          <span style={{ color: '#A78BFA', fontWeight: 'bold', marginLeft: '10px' }}>MIW - IA Quantique</span>
        </div>
        <X onClick={onClose} style={{ cursor: 'pointer', color: '#A78BFA' }} />
      </div>
      <div style={{ 
        flex: 1, 
        overflowY: 'auto', 
        padding: '10px',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg.text} isAI={msg.isAI} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div style={{ 
        display: 'flex', 
        padding: '10px',
        borderTop: '1px solid #4B5563'
      }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          style={{ 
            flex: 1, 
            padding: '8px', 
            borderRadius: '4px', 
            border: 'none',
            backgroundColor: '#374151',
            color: '#E9D5FF'
          }}
          placeholder="Posez une question à MIW..."
        />
        <button 
          onClick={handleSend}
          style={{
            marginLeft: '10px',
            padding: '8px 12px',
            backgroundColor: '#5B21B6',
            color: '#E9D5FF',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
          >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};
function App() {
  const [data, setData] = useState(generateQuantumData());
  const [alert, setAlert] = useState(null);
  const [superposedStates, setSuperposedStates] = useState(generateSuperposedStates());
  const [timelineData, setTimelineData] = useState(generateTimelineData());
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(generateQuantumData());
      setSuperposedStates(generateSuperposedStates());
      setTimelineData(generateTimelineData());
      setAlert(Math.random() > 0.7 ? "Alerte : Niveau de décohérence critique !" : null);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <HelmetProvider>
    <div className="App">
      <Helmet>
        <title>Dashboard IT Quantique</title>
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh',
      backgroundColor: '#000',
      color: '#d8b4fe'
    }}>
      <main style={{ flex: 1, padding: '20px' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '20px'
        }}>
          <img 
            src={process.env.PUBLIC_URL + '/banner.png'} 
            alt="Dashboard IT Quantique" 
            style={{
              maxWidth: '300px',
              height: 'auto'
            }}
          />
        </div>
        <h1 style={{ fontSize: '24px', textAlign: 'center', marginBottom: '20px', color: '#a78bfa' }}>version Gold v0.3q</h1>
      {alert && (
        <div style={{ backgroundColor: '#7f1d1d', color: '#fecaca', padding: '10px', borderRadius: '5px', marginBottom: '20px' }}>
          <AlertCircle style={{ display: 'inline', marginRight: '10px' }} />
          {alert}
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '20px' }}>
        <div style={{ backgroundColor: '#1f2937', padding: '15px', borderRadius: '5px' }}>
          <h2 style={{ fontSize: '18px', marginBottom: '10px', color: '#a78bfa' }}><Server style={{ display: 'inline', marginRight: '5px' }} /> Qubits Consommés</h2>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{data[data.length - 1].qubits}</p>
        </div>
        <div style={{ backgroundColor: '#1f2937', padding: '15px', borderRadius: '5px' }}>
          <h2 style={{ fontSize: '18px', marginBottom: '10px', color: '#a78bfa' }}><Zap style={{ display: 'inline', marginRight: '5px' }} /> Niveau d'Intrication</h2>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{data[data.length - 1].entanglement.toFixed(2)}%</p>
        </div>
        <div style={{ backgroundColor: '#1f2937', padding: '15px', borderRadius: '5px' }}>
          <h2 style={{ fontSize: '18px', marginBottom: '10px', color: '#a78bfa' }}><Activity style={{ display: 'inline', marginRight: '5px' }} /> Taux de Décohérence</h2>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{data[data.length - 1].decoherence.toFixed(2)}%</p>
        </div>
      </div>

      <div style={{ backgroundColor: '#1f2937', padding: '15px', borderRadius: '5px', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '18px', marginBottom: '10px', color: '#a78bfa' }}>Métriques Quantiques en Temps Réel</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4a5568" />
            <XAxis dataKey="time" stroke="#a78bfa" />
            <YAxis stroke="#a78bfa" />
            <Tooltip contentStyle={{ backgroundColor: '#1a202c', borderColor: '#4c1d95', color: '#e9d8fd' }} />
            <Legend />
            <Line type="monotone" dataKey="entanglement" stroke="#8b5cf6" name="Intrication" />
            <Line type="monotone" dataKey="qubits" stroke="#6366f1" name="Qubits" />
            <Line type="monotone" dataKey="decoherence" stroke="#c4b5fd" name="Décohérence" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div style={{ backgroundColor: '#1f2937', padding: '15px', borderRadius: '5px', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '18px', marginBottom: '10px', color: '#a78bfa' }}><Server style={{ display: 'inline', marginRight: '5px' }} /> États Superposés des Serveurs Quantiques</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
          {superposedStates.map((server) => {
            const ServerIcon = server.icon;
            return (
              <div key={server.id} style={{ backgroundColor: '#374151', padding: '10px', borderRadius: '5px' }}>
                <h3 style={{ fontSize: '16px', marginBottom: '10px', color: '#a78bfa' }}><ServerIcon style={{ display: 'inline', marginRight: '5px' }} /> {server.type}</h3>
                <div style={{ marginBottom: '8px' }}>
                  <p style={{ fontSize: '14px', marginBottom: '2px' }}>Opérationnel: {(server.operationalProbability * 100).toFixed(2)}%</p>
                  <ProgressBar value={server.operationalProbability * 100} color="#10B981" />
                </div>
                <div style={{ marginBottom: '8px' }}>
                  <p style={{ fontSize: '14px', marginBottom: '2px' }}>Défectueux: {(server.defectiveProbability * 100).toFixed(2)}%</p>
                  <ProgressBar value={server.defectiveProbability * 100} color="#EF4444" />
                </div>
                <div>
                  <p style={{ fontSize: '14px', marginBottom: '2px' }}>État Quantique: {(server.quantumState * 100).toFixed(2)}%</p>
                  <ProgressBar value={server.quantumState * 100} color="#6366F1" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ backgroundColor: '#1f2937', padding: '15px', borderRadius: '5px' }}>
  <h2 style={{ fontSize: '18px', marginBottom: '10px', color: '#a78bfa' }}>
    <Clock style={{ display: 'inline', marginRight: '5px' }} /> Timeline Quantique
  </h2>
  {timelineData.map((event, index) => {
    const EventIcon = event.icon;
    const TimeIcon = event.timeIcon;
    return (
      <div key={index} style={{ 
        display: 'flex', 
        alignItems: 'center', 
        marginBottom: '15px', 
        borderLeft: '2px solid #a78bfa', 
        paddingLeft: '15px' 
      }}>
        <div style={{ 
          backgroundColor: '#4C1D95', 
          borderRadius: '50%', 
          padding: '8px', 
          marginRight: '10px', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center' 
        }}>
          <TimeIcon size={20} color="#E9D5FF" style={{ marginBottom: '4px' }} />
          <EventIcon size={20} color="#E9D5FF" />
        </div>
        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: '16px', color: '#a78bfa', marginBottom: '2px' }}>{event.time}</h3>
          <p style={{ fontSize: '14px', marginBottom: '2px' }}>{event.event}</p>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '14px', marginRight: '10px' }}>Impact:</span>
            <div style={{ flex: 1, backgroundColor: '#4a5568', borderRadius: '9999px', height: '8px', overflow: 'hidden' }}>
              <div style={{ width: `${event.impact}%`, backgroundColor: '#8B5CF6', height: '100%' }} />
            </div>
            <span style={{ fontSize: '14px', marginLeft: '5px' }}>{event.impact}%</span>
          </div>
        </div>
      </div>
    );
  })}
</div>
      </main>
      <Footer />
      <button 
  onClick={() => setIsChatOpen(true)}
  style={{
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    padding: '10px 20px',
    backgroundColor: '#5B21B6',
    color: '#E9D5FF',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    boxShadow: '0 0 10px rgba(167, 139, 250, 0.3)'
  }}
>
  <MessageSquare style={{ marginRight: '5px' }} />
  Chat avec MIW
</button>

<ChatPopup 
  isOpen={isChatOpen} 
  onClose={() => setIsChatOpen(false)}
  superposedStates={superposedStates}
/>
    </div>
    </div>
    </HelmetProvider>
  );
}
export default App;