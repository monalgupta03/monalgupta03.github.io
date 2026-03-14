import MandelBrotSet from '@/assets/Projects/MandelBrotSet.png';


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
    id: 'cloud-deploy',
    title: 'Cloud Deploy CLI',
    description: 'A command-line tool for seamless multi-cloud deployments with rollback support and health checks.',
    image: '/placeholder.svg',
    github: 'https://github.com/username/cloud-deploy-cli',
    techStack: ['Go', 'AWS', 'Docker'],
  },
  {
    id: 'mandelbrot-generator',
    title: 'Mandelbrot Set Generator',
    description: 'Python based Mandelbrot Set renderer optimised from 225s to 8.45s',
    image: MandelBrotSet,
    github: 'https://github.com/monalgupta03/MadelbrotGenerator',
    techStack: ['Python', 'Numba', 'NumPy', 'cProfile'],
  },
  {
    id: 'infra-monitor',
    title: 'Infra Monitor',
    description: 'Infrastructure monitoring dashboard with alerting, anomaly detection, and Slack integration.',
    image: '/placeholder.svg',
    github: 'https://github.com/username/infra-monitor',
    techStack: ['TypeScript', 'React', 'Prometheus'],
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