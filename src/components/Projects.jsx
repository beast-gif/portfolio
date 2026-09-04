import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const projects = [
   {
    title: 'Triage-Confidence and cost aware RAG chatbot',
    desc: 'Built an adaptive RAG pipeline over a scraped institutional corpus: Crawl4AI ingestion with deduplication, BGE sentence embeddings, ChromaDB vector store, and a bge-reranker-base cross-encoder reranking layer.Designed a five-model LLM ensemble router that selects generation strategy per query from retrieval confidence and inference cost, cutting spend on easy queries while escalating ambiguous ones.',
    stack: ['Python', 'RAG', 'Rest APIs', 'LLMs', 'ChromaDB', 'BGE'],
  },
  
  {
    title: 'Deep Learning Music Generator',
    desc: 'Transformer-based model generating MIDI music sequences. Sequence modeling yields coherent multi-instrument outputs with improved musical structure.',
    stack: ['PyTorch', 'Transformers', 'MIDI'],
  },
    {
    title: 'Content Creation Campaigner',
    desc: 'Designed an AI-powered tool generating platform-specific social media posts and slides from seed ideas and vibes. Built automated LLM prompt pipelines and templating workflows to produce polished multi-channel assets',
    stack: ['Python', 'Flask', 'LLMs', 'React', 'Presentation APIs'],
  },
  {
    title: 'Student Mental Health Analysis',
    desc: 'ML models on structured datasets improving prediction insights by ~25%. Integrated DBMS for efficient querying and scalable data handling.',
    stack: ['Scikit-learn', 'MySQL', 'Pandas'],
  },
  {
    title: 'PhotoSpeakWrite',
    desc: 'ML pipeline achieving real-time conversion of multimodal inputs into robotic arm instructions. Reduced execution latency, improved responsiveness.',
    stack: ['CV', 'NLP', 'Embedded'],
  },
  {
    title: 'CCTV Streaming Platform',
    desc: 'Secure APIs supporting real-time streaming with authentication. Handles multiple concurrent video streams with optimized backend performance.',
    stack: ['Flask', 'REST', 'Auth'],
  },
  {
    title: 'AI Educational Video Generator',
    desc: 'Automated video generation pipeline reducing manual effort by ~80%. Generates structured 2-minute videos with optimized animation flow using LLM + Manim.',
    stack: ['LLM', 'Manim', 'Python'],
  },

 
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-header">
        <span className="section-num">01</span>
        <h2 className="section-title">Selected <span>work</span></h2>
      </div>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <div className="project-index">
              <span>{String(i + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span>
              <ArrowUpRight size={16} />
            </div>
            <h3 className="project-title">{p.title}</h3>
            <p className="project-desc">{p.desc}</p>
            <div className="project-stack">
              {p.stack.map(s => <span key={s} className="stack-pill">{s}</span>)}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}