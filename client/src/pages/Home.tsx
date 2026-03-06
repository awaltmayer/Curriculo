import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Github, Linkedin, ExternalLink, Send, ChevronDown, Code2, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";

/**
 * Design Philosophy: VSCode Dark Theme - Balanced & Interactive
 * - Dark terminal aesthetic (#1e1e1e background)
 * - Balanced Prettier palette (blue primary, green accents, minimal pink)
 * - Rich interactive elements with hover effects
 * - Smooth animations and transitions
 * - Code/terminal aesthetic with developer focus
 */

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const fullText = "Augusto W. Altmayer";

  // Typing animation effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / scrollHeight) * 100;
      setScrollProgress(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const mailtoLink = `mailto:augustoaltmayer@email.com?subject=Contato de ${formData.name}&body=${encodeURIComponent(
        `Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`
      )}`;
      window.location.href = mailtoLink;
      toast.success("Mensagem enviada com sucesso!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Erro ao enviar mensagem. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const skills = [
    { name: "HTML5", icon: "fab fa-html5", color: "from-orange-500 to-orange-600", accent: "text-orange-400" },
    { name: "CSS3", icon: "fab fa-css3-alt", color: "from-blue-500 to-blue-600", accent: "text-blue-400" },
    { name: "JavaScript", icon: "fab fa-js", color: "from-yellow-500 to-yellow-600", accent: "text-yellow-400" },
    { name: "Python", icon: "fab fa-python", color: "from-blue-600 to-blue-700", accent: "text-blue-300" },
    { name: "Git", icon: "fab fa-git-alt", color: "from-red-500 to-red-600", accent: "text-red-400" },
    { name: "React", icon: "fab fa-react", color: "from-cyan-500 to-cyan-600", accent: "text-cyan-400" },
  ];

  const projects = [
    {
      title: "Portfólio Pessoal",
      description: "Website responsivo com design moderno e animações interativas.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/awaltmayer/Curriculo",
      icon: "fas fa-laptop-code",
      color: "border-blue-500/30 hover:border-blue-500/60",
      accentColor: "text-blue-400",
    },
    {
      title: "Game Development",
      description: "Experiência com Unity 3D e desenvolvimento de games.",
      tech: ["Unity", "C#", "Game Design"],
      link: "#",
      icon: "fas fa-gamepad",
      color: "border-cyan-500/30 hover:border-cyan-500/60",
      accentColor: "text-cyan-400",
    },
    {
      title: "Projetos Acadêmicos",
      description: "Diversos projetos desenvolvidos durante a faculdade.",
      tech: ["Python", "Java", "Algoritmos"],
      link: "#",
      icon: "fas fa-graduation-cap",
      color: "border-green-500/30 hover:border-green-500/60",
      accentColor: "text-green-400",
    },
  ];

  const certifications = [
    {
      title: "Curso Criação de Games - Ifosoft",
      description: "Curso focado no uso do Unity 3D e sistemas de desenvolvimento de games.",
      date: "2024",
    },
    {
      title: "Curso de Gestão de Pessoas",
      description: "Gestão logística de pessoas em uma equipe e liderança.",
      date: "2024",
    },
    {
      title: "Faculdade Ciência da Computação - Atitus",
      description: "Terceiro semestre da Faculdade de Ciência da Computação.",
      date: "2024-2026",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Progress Bar */}
      <div className="progress-bar" style={{ width: `${scrollProgress}%` }} />

      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-vscode" />
        <svg className="absolute inset-0 w-full h-full opacity-5" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#8be9fd" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        {/* Floating particles with balanced colors */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-float" />
        <div className="absolute top-40 right-10 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-10 left-1/2 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-float" style={{ animationDelay: "4s" }} />
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-md shadow-lg border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold terminal-text text-cyan-400 hover:text-blue-400 transition-colors cursor-pointer">
            &gt; awaltmayer
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#sobre" className="text-foreground hover:text-cyan-400 transition-colors terminal-text hover:underline">
              Sobre
            </a>
            <a href="#skills" className="text-foreground hover:text-blue-400 transition-colors terminal-text hover:underline">
              Habilidades
            </a>
            <a href="#projetos" className="text-foreground hover:text-green-400 transition-colors terminal-text hover:underline">
              Projetos
            </a>
            <a href="#contato" className="text-foreground hover:text-orange-400 transition-colors terminal-text hover:underline">
              Contato
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Code Banner Background */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Code banner background */}
        <div className="absolute inset-0 opacity-10 -z-5">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663149616614/5asFjHDoQ3Jf5o4h2HnyCS/code-terminal-banner-1-DoPJFxbwKqNKyB5jhNmhVo.webp"
            alt="Code background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center animate-fadeInUp">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative w-64 h-64 rounded-full border-4 border-blue-500/40 overflow-hidden shadow-2xl hover-glow group-hover:border-blue-500/80 transition-all">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663149616614/5asFjHDoQ3Jf5o4h2HnyCS/augusto-avatar-UH7krwcQ3iMpnXFYgG3Tyq.webp"
                    alt="Augusto W. Altmayer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Hero Text with Typing Animation */}
            <div className="animate-slideInRight">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 leading-tight terminal-text">
                <span className="text-blue-400">{displayedText}</span>
                <span className="text-cyan-400 animate-pulse">_</span>
              </h1>
              <p className="text-xl text-green-400 mb-2 terminal-text font-semibold">$ Desenvolvedor Front-End em Formação</p>
              <p className="text-base text-muted-foreground mb-8 leading-relaxed">
                Estudante de Computação apaixonado por desenvolvimento web. Construindo projetos práticos e evoluindo constantemente através de desafios e aprendizado contínuo.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white terminal-text font-bold group transition-all hover:shadow-lg hover:shadow-blue-500/50">
                  <a href="#projetos" className="flex items-center gap-2 group-hover:gap-3 transition-all">
                    Ver Projetos
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500 terminal-text font-bold transition-all hover:shadow-lg hover:shadow-cyan-500/30">
                  <a href="#contato" className="flex items-center gap-2">
                    Entrar em Contato
                    <Mail className="w-4 h-4" />
                  </a>
                </Button>
              </div>

              {/* Scroll indicator */}
              <div className="mt-12 flex justify-center">
                <ChevronDown className="w-6 h-6 text-blue-400 animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 px-4 bg-gradient-to-b from-transparent to-background/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center terminal-text">
            <span className="text-cyan-400">&gt;</span> <span className="text-blue-400">Sobre Mim</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover-lift border-blue-500/30 bg-background/50 backdrop-blur group hover:border-blue-500/60 transition-all">
              <CardHeader>
                <Code2 className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-125 transition-transform" />
                <CardTitle className="text-blue-400 group-hover:text-cyan-400 transition-colors">Desenvolvimento Web</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                  Especializado em criar interfaces modernas e responsivas com HTML, CSS e JavaScript.
                </p>
              </CardContent>
            </Card>
            <Card className="hover-lift border-cyan-500/30 bg-background/50 backdrop-blur group hover:border-cyan-500/60 transition-all">
              <CardHeader>
                <Zap className="w-8 h-8 text-cyan-400 mb-4 group-hover:scale-125 transition-transform" />
                <CardTitle className="text-cyan-400 group-hover:text-green-400 transition-colors">Educação Contínua</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                  Cursando Ciência da Computação e sempre buscando aprender novas tecnologias e frameworks.
                </p>
              </CardContent>
            </Card>
            <Card className="hover-lift border-green-500/30 bg-background/50 backdrop-blur group hover:border-green-500/60 transition-all">
              <CardHeader>
                <i className="fas fa-gamepad text-4xl text-green-400 mb-4 group-hover:scale-125 transition-transform inline-block" />
                <CardTitle className="text-green-400 group-hover:text-orange-400 transition-colors">Game Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                  Experiência com Unity 3D e desenvolvimento de games, combinando criatividade e lógica.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center terminal-text">
            <span className="text-blue-400">&gt;</span> <span className="text-cyan-400">Habilidades Técnicas</span>
          </h2>
          <div className="flex justify-center items-center flex-wrap gap-8 md:gap-12">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="animate-fadeInUp flex flex-col items-center gap-3 transition-all duration-300 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-lg transition-all duration-300 ${
                  hoveredSkill === skill.name ? "scale-125 shadow-2xl" : "hover:scale-110 hover:shadow-xl"
                }`}>
                  <i className={`${skill.icon} text-5xl text-white`} />
                </div>
                <div className="text-center">
                  <p className={`font-semibold terminal-text transition-colors ${hoveredSkill === skill.name ? skill.accent : "text-foreground"}`}>
                    {skill.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section with Code Banner */}
      <section id="projetos" className="py-20 px-4 bg-gradient-to-b from-transparent to-background/50 relative overflow-hidden">
        {/* Code banner background */}
        <div className="absolute inset-0 opacity-10 -z-5">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663149616614/5asFjHDoQ3Jf5o4h2HnyCS/code-terminal-banner-2-2rH2gjhDvsdyBBhDJSFhxs.webp"
            alt="Code background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center terminal-text">
            <span className="text-green-400">&gt;</span> <span className="text-blue-400">Projetos Destacados</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`hover-lift border-2 overflow-hidden group bg-background/50 backdrop-blur transition-all duration-300 ${project.color}`}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <CardHeader className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 group-hover:from-blue-500/20 group-hover:to-cyan-500/20 transition-all">
                  <i className={`${project.icon} text-5xl ${project.accentColor} mb-4 group-hover:scale-125 transition-transform`} />
                  <CardTitle className={`${project.accentColor} group-hover:text-white transition-colors`}>{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground group-hover:text-foreground transition-colors">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className={`px-3 py-1 bg-blue-500/20 ${project.accentColor} text-sm rounded-full font-medium terminal-text group-hover:bg-blue-500/40 transition-colors`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" className={`w-full group-hover:bg-blue-600/30 group-hover:border-blue-500 transition-all border-blue-500/50 ${project.accentColor}`}>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 w-full justify-center">
                      Ver Projeto
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center terminal-text">
            <span className="text-orange-400">&gt;</span> <span className="text-cyan-400">Formações e Certificados</span>
          </h2>
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover-lift border-orange-500/30 bg-background/50 backdrop-blur group hover:border-orange-500/60 transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2 text-blue-400 group-hover:text-cyan-400 transition-colors">
                        <i className="fas fa-certificate text-orange-400 group-hover:scale-125 transition-transform" />
                        {cert.title}
                      </CardTitle>
                      <CardDescription className="mt-2 text-muted-foreground group-hover:text-foreground transition-colors">{cert.description}</CardDescription>
                    </div>
                    <span className="text-sm font-semibold text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full terminal-text group-hover:bg-orange-500/20 transition-colors">
                      {cert.date}
                    </span>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 px-4 bg-gradient-to-b from-transparent to-background/50">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-center terminal-text">
            <span className="text-blue-400">&gt;</span> <span className="text-cyan-400">Entre em Contato</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 terminal-text">
            Tem uma oportunidade ou pergunta? Envie uma mensagem e responderei assim que possível.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="hover-lift border-blue-500/30 text-center bg-background/50 backdrop-blur group hover:border-blue-500/60 transition-all">
              <CardHeader>
                <Mail className="w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:scale-125 transition-transform" />
                <CardTitle className="text-blue-400 group-hover:text-cyan-400 transition-colors">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="mailto:augustowolfartaltmayer30@gmail.com" className="text-cyan-400 hover:text-blue-400 transition-colors terminal-text hover:underline">
                  Meu Email
                </a>
              </CardContent>
            </Card>
            <Card className="hover-lift border-cyan-500/30 text-center bg-background/50 backdrop-blur group hover:border-cyan-500/60 transition-all">
              <CardHeader>
                <Github className="w-8 h-8 text-cyan-400 mx-auto mb-3 group-hover:scale-125 transition-transform" />
                <CardTitle className="text-cyan-400 group-hover:text-green-400 transition-colors">GitHub</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="https://github.com/awaltmayer" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-cyan-400 transition-colors terminal-text hover:underline">
                  Meu GitHub
                </a>
              </CardContent>
            </Card>
            <Card className="hover-lift border-green-500/30 text-center bg-background/50 backdrop-blur group hover:border-green-500/60 transition-all">
              <CardHeader>
                <Linkedin className="w-8 h-8 text-green-400 mx-auto mb-3 group-hover:scale-125 transition-transform" />
                <CardTitle className="text-green-400 group-hover:text-orange-400 transition-colors">LinkedIn</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="www.linkedin.com/in/augustowolfartaltmayer" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-green-400 transition-colors terminal-text hover:underline">
                  Meu LinkedIn
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-blue-500/20 shadow-lg bg-background/50 backdrop-blur hover:border-blue-500/40 transition-all">
            <CardHeader>
              <CardTitle className="text-blue-400 terminal-text">$ Enviar Mensagem</CardTitle>
              <CardDescription className="text-muted-foreground">Preencha o formulário abaixo para enviar uma mensagem</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-cyan-400 mb-2 terminal-text">Nome</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-blue-500/30 rounded-md text-foreground focus:outline-none focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/30 transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-cyan-400 mb-2 terminal-text">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-cyan-500/30 rounded-md text-foreground focus:outline-none focus:border-cyan-500 focus:shadow-lg focus:shadow-cyan-500/30 transition-all"
                    placeholder="seu.email@exemplo.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-green-400 mb-2 terminal-text">Mensagem</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-background border border-green-500/30 rounded-md text-foreground focus:outline-none focus:border-green-500 focus:shadow-lg focus:shadow-green-500/30 transition-all"
                    placeholder="Sua mensagem aqui..."
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold terminal-text transition-all hover:shadow-lg hover:shadow-blue-500/50 disabled:opacity-50"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
