import zkMarket from '@/assets/Projects/zkMarket.png';
import MandelBrotSet from '@/assets/Projects/MandelBrotSet.png';
import bc from '@/assets/Projects/blockchain.jpeg';


export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  github: string;
  techStack: string[];
}
export const projects: Project[] = [
  {
    id: 'mandelbrot-generator',
    title: 'Mandelbrot Set Generator',
    description: 'Python based Mandelbrot Set renderer optimised from 225s to 8.45s',
    image: MandelBrotSet,
    github: 'https://github.com/monalgupta03/MadelbrotGenerator',
    techStack: ['Python', 'Numba', 'NumPy', 'cProfile'],
  },
  {
    id: 'zkMarket',
    title: 'zkMarket',
    description: 'Trustless Web2-to-Web3 credential verification for targeted airdrops.',
    image: zkMarket,
    github: 'https://github.com/monalgupta03/zkDrop',
    techStack: ['Reclaim Protocol','ZkTLS', 'Solidity', 'React', 'ethers.js'],
  },
  {
    id: 'rust-blockchain',
    title: 'Blockchain - Implementation',
    description: 'Peer-to-peer blockchain with proof-of-work mining, built in Rust.',
    image: bc,
    github: 'https://github.com/monalgupta03/rust-blockchain',
    techStack: ['Rust', 'libp2p', 'SHA-256', 'Tokio'],
  },
  {
    id: 'k8s-operator',
    title: 'K8s Auto-Scaler',
    description: 'Custom Kubernetes operator for intelligent pod auto-scaling based on predictive traffic patterns.',
    image: '/placeholder.svg',
    github: 'https://github.com/username/k8s-auto-scaler',
    techStack: ['Go', 'Kubernetes', 'gRPC'],
  },
  {
    id: 'ci-pipeline',
    title: 'CI Pipeline Builder',
    description: 'Visual CI/CD pipeline builder that generates GitHub Actions and GitLab CI configs from drag-and-drop.',
    image: '/placeholder.svg',
    github: 'https://github.com/username/ci-pipeline-builder',
    techStack: ['Python', 'React', 'YAML'],
  },
  {
    id: 'secret-vault',
    title: 'Secret Vault',
    description: 'Lightweight secrets manager with encryption at rest, access policies, and audit logging.',
    image: '/placeholder.svg',
    github: 'https://github.com/username/secret-vault',
    techStack: ['Rust', 'PostgreSQL', 'AES-256'],
  },
];