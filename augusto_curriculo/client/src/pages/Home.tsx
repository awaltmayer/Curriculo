import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Github, Linkedin, ExternalLink, Download, Send } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";

/**
 * Design Philosophy: Minimalist Modern with Subtle Gradients
 * - Clean typography hierarchy with Poppins for headings
 * - Generous whitespace and strategic padding
 * - Animated background with subtle floating particles
 * - Blue-indigo primary color (#3B82F6) with slate-gray accents
 * - Smooth transitions and micro-interactions
 */

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
      // Simulate email sending (in production, this would call an API)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Create mailto link as fallback
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
    { name: "HTML5", level: 95, icon: "fab fa-html5", color: "from-orange-400 to-orange-600" },
    { name: "CSS3", level: 90, icon: "fab fa-css3-alt", color: "from-blue-400 to-blue-600" },
    { name: "JavaScript", level: 85, icon: "fab fa-js", color: "from-yellow-400 to-yellow-600" },
    { name: "Python", level: 80, icon: "fab fa-python", color: "from-blue-500 to-blue-700" },
    { name: "Git", level: 88, icon: "fab fa-git-alt", color: "from-red-500 to-red-700" },
    { name: "React", level: 82, icon: "fab fa-react", color: "from-cyan-400 to-cyan-600" },
  ];

  const projects = [
    {
      title: "Portfólio Pessoal",
      description: "Website responsivo com design moderno e animações interativas.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/awaltmayer/Curriculo",
      icon: "fas fa-laptop-code",
    },
    {
      title: "Game Development",
      description: "Experiência com Unity 3D e desenvolvimento de games.",
      tech: ["Unity", "C#", "Game Design"],
      link: "#",
      icon: "fas fa-gamepad",
    },
    {
      title: "Projetos Acadêmicos",
      description: "Diversos projetos desenvolvidos durante a faculdade.",
      tech: ["Python", "Java", "Algoritmos"],
      link: "#",
      icon: "fas fa-graduation-cap",
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
    <div className="min-h-screen bg-white">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-white opacity-50" />
        <svg className="absolute inset-0 w-full h-full opacity-5" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3B82F6" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        {/* Floating particles */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" />
        <div className="absolute top-40 right-10 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-10 left-1/2 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: "4s" }} />
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent">
            AW
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#sobre" className="text-foreground hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#skills" className="text-foreground hover:text-primary transition-colors">
              Habilidades
            </a>
            <a href="#projetos" className="text-foreground hover:text-primary transition-colors">
              Projetos
            </a>
            <a href="#contato" className="text-foreground hover:text-primary transition-colors">
              Contato
            </a>
          </div>
          <Button size="sm" variant="outline">
            <Download className="w-4 h-4 mr-2" />
            CV
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center animate-fadeInUp">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-indigo-600 rounded-full blur-2xl opacity-20" />
                <div className="relative w-64 h-64 rounded-full border-4 border-primary/20 overflow-hidden shadow-2xl hover-glow">
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                    <i className="fas fa-user text-6xl text-primary/40" />
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Text */}
            <div className="animate-slideInRight">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
                Augusto <span className="bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent">Altmayer</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-2">Desenvolvedor Front-End em Formação</p>
              <p className="text-base text-muted-foreground mb-8 leading-relaxed">
                Estudante de Computação apaixonado por desenvolvimento web. Construindo projetos práticos e evoluindo constantemente através de desafios e aprendizado contínuo.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <a href="#projetos" className="flex items-center gap-2">
                    Ver Projetos
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline">
                  <a href="#contato" className="flex items-center gap-2">
                    Entrar em Contato
                    <Mail className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 px-4 bg-gradient-to-b from-transparent to-blue-50/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Sobre Mim</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover-lift border-primary/10">
              <CardHeader>
                <i className="fas fa-code text-3xl text-primary mb-4" />
                <CardTitle>Desenvolvimento Web</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Especializado em criar interfaces modernas e responsivas com HTML, CSS e JavaScript.
                </p>
              </CardContent>
            </Card>
            <Card className="hover-lift border-primary/10">
              <CardHeader>
                <i className="fas fa-graduation-cap text-3xl text-primary mb-4" />
                <CardTitle>Educação Contínua</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Cursando Ciência da Computação e sempre buscando aprender novas tecnologias e frameworks.
                </p>
              </CardContent>
            </Card>
            <Card className="hover-lift border-primary/10">
              <CardHeader>
                <i className="fas fa-gamepad text-3xl text-primary mb-4" />
                <CardTitle>Game Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
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
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Habilidades Técnicas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {skills.map((skill, index) => (
              <div key={index} className="animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <i className={`${skill.icon} text-2xl text-primary`} />
                    <span className="font-semibold text-foreground">{skill.name}</span>
                  </div>
                  <span className="text-sm font-medium text-primary">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className={`skill-bar-fill bg-gradient-to-r ${skill.color}`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-20 px-4 bg-gradient-to-b from-transparent to-blue-50/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Projetos Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover-lift border-primary/10 overflow-hidden group">
                <CardHeader className="bg-gradient-to-br from-blue-50 to-indigo-50">
                  <i className={`${project.icon} text-4xl text-primary mb-4`} />
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-all">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      Ver Projeto
                      <ExternalLink className="w-4 h-4" />
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
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Formações e Certificados</h2>
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover-lift border-primary/10">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <i className="fas fa-certificate text-primary" />
                        {cert.title}
                      </CardTitle>
                      <CardDescription className="mt-2">{cert.description}</CardDescription>
                    </div>
                    <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
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
      <section id="contato" className="py-20 px-4 bg-gradient-to-b from-transparent to-blue-50/50">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-center">Entre em Contato</h2>
          <p className="text-center text-muted-foreground mb-12">
            Tem uma oportunidade ou pergunta? Envie uma mensagem e responderei assim que possível.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="hover-lift border-primary/10 text-center">
              <CardHeader>
                <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="mailto:augustoaltmayer@email.com" className="text-primary hover:underline">
                  augustoaltmayer@email.com
                </a>
              </CardContent>
            </Card>
            <Card className="hover-lift border-primary/10 text-center">
              <CardHeader>
                <Github className="w-8 h-8 text-primary mx-auto mb-3" />
                <CardTitle>GitHub</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="https://github.com/awaltmayer" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  github.com/awaltmayer
                </a>
              </CardContent>
            </Card>
            <Card className="hover-lift border-primary/10 text-center">
              <CardHeader>
                <Linkedin className="w-8 h-8 text-primary mx-auto mb-3" />
                <CardTitle>LinkedIn</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="#" className="text-primary hover:underline">
                  LinkedIn Profile
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-primary/20 shadow-lg">
            <CardHeader>
              <CardTitle>Enviar Mensagem</CardTitle>
              <CardDescription>Preencha o formulário abaixo para enviar uma mensagem</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Nome</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    placeholder="Seu nome"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    placeholder="seu@email.com"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Mensagem</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    required
                    placeholder="Sua mensagem..."
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-2 rounded-lg transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Enviar Mensagem
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="mb-4">© 2026 Augusto Altmayer. Todos os direitos reservados.</p>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/awaltmayer" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="mailto:augustoaltmayer@email.com" className="hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
