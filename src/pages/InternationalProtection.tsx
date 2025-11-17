import { useEffect, useState, useRef, lazy, Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Shield, 
  Globe, 
  Zap, 
  ArrowRight,
  Check,
  Users,
  Image,
  Video,
  TrendingUp,
  FileText,
  Search,
  Trash2,
  Eye,
  Scale,
  Clock,
  Star,
  ChevronDown
} from "lucide-react";
import { Link } from "react-router-dom";

const GlobeInternational = lazy(() => import("@/components/GlobeInternational"));

// Translations for International Protection page
const translations = {
  en: {
    hero: {
      badge: "GLOBAL PROTECTION",
      title: "Global Digital Protection",
      subtitle: "For Creators Worldwide",
      description: "European-grade protection, available globally. Proven expertise from the world's strictest legal environments.",
      cta: "Check if my content is leaked"
    },
    whyGlobal: {
      title: "Why We Went Global",
      subtitle: "Years of experience in Europe's strictest legal environments. Now available worldwide.",
      reality: "The Reality",
      realityText: "Creators worldwide face the same threats, but often with",
      realityHighlight: "zero real protection",
      nowAvailable: "Now Available Globally:",
      features: {
        protection: "European-grade protection",
        legal: "Legal escalation systems",
        security: "24/7 security team"
      },
      conclusion: "International protection infrastructure."
    },
    whoWeProtect: {
      title: "Who We Protect",
      subtitle: "For creators everywhere:",
      creators: [
        { title: "OnlyFans & MYM Creators", description: "Fast removal of leaks, clones, and mirrors." },
        { title: "Webcam & Studio Performers", description: "Protection from captures and reuploads." },
        { title: "Photo Models & Visual Creators", description: "Stop AI edits, stolen photos, and deepfakes." },
        { title: "Influencers", description: "Remove fake accounts and impersonation." },
        { title: "All Creators", description: "Protect your image and reputation." }
      ],
      conclusion: "Your content deserves protection."
    },
    whatWeRemove: {
      title: "What We Remove",
      subtitle: "Platforms others can't touch:",
      items: [
        { title: "Leak Sites", description: "All major platforms and forums." },
        { title: "Clones & Mirrors", description: "Instant detection and removal." },
        { title: "Search Engine Traces", description: "Google, Bing, Yandex, cached pages." },
        { title: "Telegram & Discord", description: "Group takedowns and monitoring." },
        { title: "Impersonation", description: "Fake accounts and identity theft." },
        { title: "AI Content & Deepfakes", description: "Advanced detection and removal." }
      ],
      conclusion: "Nothing is tolerated. Nothing is ignored."
    },
    howItWorks: {
      title: "How It Works",
      steps: [
        { number: "1", title: "Scan", description: "Global detection across all platforms." },
        { number: "2", title: "Report", description: "Automated + manual submissions." },
        { number: "3", title: "Remove", description: "Legal escalation when needed." },
        { number: "4", title: "Monitor", description: "24/7 reupload detection." },
        { number: "5", title: "Report", description: "Complete documentation in your dashboard." }
      ]
    },
    plans: {
      title: "Plans",
      plans: [
        {
          name: "TRIAL",
          description: "Try with limited features.",
          features: ["Limited scans", "Basic support"],
          cta: "Start Free Trial"
        },
        {
          name: "CORE",
          description: "Full protection.",
          features: ["Full scans", "Priority removals", "24/7 monitoring", "Dashboard"],
          cta: "Choose Plan"
        },
        {
          name: "ELITE",
          description: "Full protection + legal escalations.",
          features: ["Everything in Core", "Legal escalations", "Priority support", "Advanced reports"],
          cta: "Choose Plan",
          recommended: "Recommended"
        }
      ],
      note: "* Prices displayed in {currency}. All charges processed in EUR."
    },
    whyChooseUs: {
      title: "Why Choose Us",
      points: [
        "We speak the language of hostile hosts.",
        "EU law applied globally.",
        "Manual work + legal escalation.",
        "Instant reupload detection.",
        "Complete transparency and proof."
      ],
      conclusion: {
        title: "Others send DMCA emails.",
        highlight: "We escalate until it's gone. Permanently."
      }
    },
    faq: {
      title: "FAQ",
      items: [
        { question: "Any country?", answer: "Yes. Global coverage." },
        { question: "Hostile hosts?", answer: "Yes. We have escalation vectors." },
        { question: "Non-adult creators?", answer: "100% protected." },
        { question: "How fast?", answer: "Minutes to days, depending on platform." }
      ]
    },
    cta: {
      title: "Your Content. Your Image. Your Reputation.",
      subtitle: "Protected Worldwide.",
      button: "Check if my content is leaked"
    }
  },
  es: {
    hero: {
      badge: "PROTECCIÓN GLOBAL",
      title: "Protección Digital Global",
      subtitle: "Para Creadores en Todo el Mundo",
      description: "Protección de nivel europeo, disponible globalmente. Experiencia probada en los entornos legales más estrictos del mundo.",
      cta: "Verificar si mi contenido está filtrado"
    },
    whyGlobal: {
      title: "Por Qué Nos Hicimos Globales",
      subtitle: "Años de experiencia en los entornos legales más estrictos de Europa. Ahora disponible en todo el mundo.",
      reality: "La Realidad",
      realityText: "Los creadores de todo el mundo enfrentan las mismas amenazas, pero a menudo con",
      realityHighlight: "cero protección real",
      nowAvailable: "Ahora Disponible Globalmente:",
      features: {
        protection: "Protección de nivel europeo",
        legal: "Sistemas de escalamiento legal",
        security: "Equipo de seguridad 24/7"
      },
      conclusion: "Infraestructura de protección internacional."
    },
    whoWeProtect: {
      title: "A Quién Protegemos",
      subtitle: "Para creadores en todas partes:",
      creators: [
        { title: "Creadores de OnlyFans y MYM", description: "Eliminación rápida de filtraciones, clones y espejos." },
        { title: "Artistas de Webcam y Estudios", description: "Protección contra capturas y re-subidas." },
        { title: "Modelos Fotográficos y Creadores Visuales", description: "Detén ediciones de IA, fotos robadas y deepfakes." },
        { title: "Influencers", description: "Elimina cuentas falsas e impostores." },
        { title: "Todos los Creadores", description: "Protege tu imagen y reputación." }
      ],
      conclusion: "Tu contenido merece protección."
    },
    whatWeRemove: {
      title: "Qué Eliminamos",
      subtitle: "Plataformas que otros no pueden tocar:",
      items: [
        { title: "Sitios de Filtraciones", description: "Todas las plataformas y foros principales." },
        { title: "Clones y Espejos", description: "Detección y eliminación instantánea." },
        { title: "Rastros en Motores de Búsqueda", description: "Google, Bing, Yandex, páginas en caché." },
        { title: "Telegram y Discord", description: "Eliminaciones grupales y monitoreo." },
        { title: "Suplantación", description: "Cuentas falsas y robo de identidad." },
        { title: "Contenido IA y Deepfakes", description: "Detección y eliminación avanzada." }
      ],
      conclusion: "Nada se tolera. Nada se ignora."
    },
    howItWorks: {
      title: "Cómo Funciona",
      steps: [
        { number: "1", title: "Escanear", description: "Detección global en todas las plataformas." },
        { number: "2", title: "Reportar", description: "Envíos automatizados + manuales." },
        { number: "3", title: "Eliminar", description: "Escalamiento legal cuando sea necesario." },
        { number: "4", title: "Monitorear", description: "Detección de re-subidas 24/7." },
        { number: "5", title: "Informar", description: "Documentación completa en tu panel." }
      ]
    },
    plans: {
      title: "Planes",
      plans: [
        {
          name: "PRUEBA",
          description: "Prueba con funciones limitadas.",
          features: ["Escaneos limitados", "Soporte básico"],
          cta: "Iniciar Prueba Gratuita"
        },
        {
          name: "CORE",
          description: "Protección completa.",
          features: ["Escaneos completos", "Eliminaciones prioritarias", "Monitoreo 24/7", "Panel de control"],
          cta: "Elegir Plan"
        },
        {
          name: "ELITE",
          description: "Protección completa + escalamientos legales.",
          features: ["Todo en Core", "Escalamientos legales", "Soporte prioritario", "Informes avanzados"],
          cta: "Elegir Plan",
          recommended: "Recomendado"
        }
      ],
      note: "* Precios mostrados en {currency}. Todos los cargos se procesan en EUR."
    },
    whyChooseUs: {
      title: "Por Qué Elegirnos",
      points: [
        "Hablamos el idioma de los hosts hostiles.",
        "Ley de la UE aplicada globalmente.",
        "Trabajo manual + escalamiento legal.",
        "Detección instantánea de re-subidas.",
        "Transparencia y pruebas completas."
      ],
      conclusion: {
        title: "Otros envían correos DMCA.",
        highlight: "Nosotros escalamos hasta que desaparezca. Permanentemente."
      }
    },
    faq: {
      title: "Preguntas Frecuentes",
      items: [
        { question: "¿Cualquier país?", answer: "Sí. Cobertura global." },
        { question: "¿Hosts hostiles?", answer: "Sí. Tenemos vectores de escalamiento." },
        { question: "¿Creadores no adultos?", answer: "100% protegidos." },
        { question: "¿Qué tan rápido?", answer: "Minutos a días, dependiendo de la plataforma." }
      ]
    },
    cta: {
      title: "Tu Contenido. Tu Imagen. Tu Reputación.",
      subtitle: "Protegido en Todo el Mundo.",
      button: "Verificar si mi contenido está filtrado"
    }
  },
  ru: {
    hero: {
      badge: "ГЛОБАЛЬНАЯ ЗАЩИТА",
      title: "Глобальная Цифровая Защита",
      subtitle: "Для Создателей по Всему Миру",
      description: "Защита европейского уровня, доступная глобально. Проверенный опыт в самых строгих правовых средах мира.",
      cta: "Проверить, утекла ли моя информация"
    },
    whyGlobal: {
      title: "Почему Мы Стали Глобальными",
      subtitle: "Годы опыта в самых строгих правовых средах Европы. Теперь доступно по всему миру.",
      reality: "Реальность",
      realityText: "Создатели по всему миру сталкиваются с теми же угрозами, но часто с",
      realityHighlight: "нулевой реальной защитой",
      nowAvailable: "Теперь Доступно Глобально:",
      features: {
        protection: "Защита европейского уровня",
        legal: "Системы правовой эскалации",
        security: "Команда безопасности 24/7"
      },
      conclusion: "Международная инфраструктура защиты."
    },
    whoWeProtect: {
      title: "Кого Мы Защищаем",
      subtitle: "Для создателей везде:",
      creators: [
        { title: "Создатели OnlyFans и MYM", description: "Быстрое удаление утечек, клонов и зеркал." },
        { title: "Вебкам и Студийные Артисты", description: "Защита от захватов и повторных загрузок." },
        { title: "Фотомодели и Визуальные Создатели", description: "Остановите редактирование ИИ, украденные фото и дипфейки." },
        { title: "Инфлюенсеры", description: "Удаление поддельных аккаунтов и мошенничества." },
        { title: "Все Создатели", description: "Защитите свой образ и репутацию." }
      ],
      conclusion: "Ваш контент заслуживает защиты."
    },
    whatWeRemove: {
      title: "Что Мы Удаляем",
      subtitle: "Платформы, к которым другие не могут прикоснуться:",
      items: [
        { title: "Сайты Утечек", description: "Все основные платформы и форумы." },
        { title: "Клоны и Зеркала", description: "Мгновенное обнаружение и удаление." },
        { title: "Следы в Поисковых Системах", description: "Google, Bing, Yandex, кэшированные страницы." },
        { title: "Telegram и Discord", description: "Групповые удаления и мониторинг." },
        { title: "Импersonация", description: "Поддельные аккаунты и кража личности." },
        { title: "Контент ИИ и Дипфейки", description: "Продвинутое обнаружение и удаление." }
      ],
      conclusion: "Ничего не терпится. Ничего не игнорируется."
    },
    howItWorks: {
      title: "Как Это Работает",
      steps: [
        { number: "1", title: "Сканирование", description: "Глобальное обнаружение на всех платформах." },
        { number: "2", title: "Отчет", description: "Автоматические + ручные отправки." },
        { number: "3", title: "Удаление", description: "Правовая эскалация при необходимости." },
        { number: "4", title: "Мониторинг", description: "Обнаружение повторных загрузок 24/7." },
        { number: "5", title: "Отчет", description: "Полная документация в вашей панели." }
      ]
    },
    plans: {
      title: "Планы",
      plans: [
        {
          name: "ПРОБНЫЙ",
          description: "Попробуйте с ограниченными функциями.",
          features: ["Ограниченные сканирования", "Базовая поддержка"],
          cta: "Начать Бесплатную Пробную Версию"
        },
        {
          name: "CORE",
          description: "Полная защита.",
          features: ["Полные сканирования", "Приоритетные удаления", "Мониторинг 24/7", "Панель управления"],
          cta: "Выбрать План"
        },
        {
          name: "ELITE",
          description: "Полная защита + правовая эскалация.",
          features: ["Все в Core", "Правовая эскалация", "Приоритетная поддержка", "Расширенные отчеты"],
          cta: "Выбрать План",
          recommended: "Рекомендуется"
        }
      ],
      note: "* Цены отображаются в {currency}. Все платежи обрабатываются в EUR."
    },
    whyChooseUs: {
      title: "Почему Выбрать Нас",
      points: [
        "Мы говорим на языке враждебных хостов.",
        "Закон ЕС применяется глобально.",
        "Ручная работа + правовая эскалация.",
        "Мгновенное обнаружение повторных загрузок.",
        "Полная прозрачность и доказательства."
      ],
      conclusion: {
        title: "Другие отправляют письма DMCA.",
        highlight: "Мы эскалируем, пока это не исчезнет. Навсегда."
      }
    },
    faq: {
      title: "Часто Задаваемые Вопросы",
      items: [
        { question: "Любая страна?", answer: "Да. Глобальное покрытие." },
        { question: "Враждебные хосты?", answer: "Да. У нас есть векторы эскалации." },
        { question: "Несовершеннолетние создатели?", answer: "100% защищены." },
        { question: "Как быстро?", answer: "От минут до дней, в зависимости от платформы." }
      ]
    },
    cta: {
      title: "Ваш Контент. Ваш Образ. Ваша Репутация.",
      subtitle: "Защищено по Всему Миру.",
      button: "Проверить, утекла ли моя информация"
    }
  },
  pt: {
    hero: {
      badge: "PROTEÇÃO GLOBAL",
      title: "Proteção Digital Global",
      subtitle: "Para Criadores em Todo o Mundo",
      description: "Proteção de nível europeu, disponível globalmente. Expertise comprovada nos ambientes legais mais rigorosos do mundo.",
      cta: "Verificar se meu conteúdo vazou"
    },
    whyGlobal: {
      title: "Por Que Nos Tornamos Globais",
      subtitle: "Anos de experiência nos ambientes legais mais rigorosos da Europa. Agora disponível em todo o mundo.",
      reality: "A Realidade",
      realityText: "Criadores em todo o mundo enfrentam as mesmas ameaças, mas muitas vezes com",
      realityHighlight: "zero proteção real",
      nowAvailable: "Agora Disponível Globalmente:",
      features: {
        protection: "Proteção de nível europeu",
        legal: "Sistemas de escalação legal",
        security: "Equipe de segurança 24/7"
      },
      conclusion: "Infraestrutura de proteção internacional."
    },
    whoWeProtect: {
      title: "Quem Protegemos",
      subtitle: "Para criadores em todos os lugares:",
      creators: [
        { title: "Criadores OnlyFans e MYM", description: "Remoção rápida de vazamentos, clones e espelhos." },
        { title: "Artistas de Webcam e Estúdio", description: "Proteção contra capturas e reenvios." },
        { title: "Modelos Fotográficos e Criadores Visuais", description: "Pare edições de IA, fotos roubadas e deepfakes." },
        { title: "Influenciadores", description: "Remova contas falsas e impersonação." },
        { title: "Todos os Criadores", description: "Proteja sua imagem e reputação." }
      ],
      conclusion: "Seu conteúdo merece proteção."
    },
    whatWeRemove: {
      title: "O Que Removemos",
      subtitle: "Plataformas que outros não conseguem tocar:",
      items: [
        { title: "Sites de Vazamentos", description: "Todas as principais plataformas e fóruns." },
        { title: "Clones e Espelhos", description: "Detecção e remoção instantânea." },
        { title: "Rastros em Motores de Busca", description: "Google, Bing, Yandex, páginas em cache." },
        { title: "Telegram e Discord", description: "Remoções em grupo e monitoramento." },
        { title: "Impersonação", description: "Contas falsas e roubo de identidade." },
        { title: "Conteúdo IA e Deepfakes", description: "Detecção e remoção avançada." }
      ],
      conclusion: "Nada é tolerado. Nada é ignorado."
    },
    howItWorks: {
      title: "Como Funciona",
      steps: [
        { number: "1", title: "Escanear", description: "Detecção global em todas as plataformas." },
        { number: "2", title: "Reportar", description: "Envios automatizados + manuais." },
        { number: "3", title: "Remover", description: "Escalação legal quando necessário." },
        { number: "4", title: "Monitorar", description: "Detecção de reenvios 24/7." },
        { number: "5", title: "Informar", description: "Documentação completa em seu painel." }
      ]
    },
    plans: {
      title: "Planos",
      plans: [
        {
          name: "TESTE",
          description: "Experimente com recursos limitados.",
          features: ["Escaneamentos limitados", "Suporte básico"],
          cta: "Iniciar Teste Gratuito"
        },
        {
          name: "CORE",
          description: "Proteção completa.",
          features: ["Escaneamentos completos", "Remoções prioritárias", "Monitoramento 24/7", "Painel de controle"],
          cta: "Escolher Plano"
        },
        {
          name: "ELITE",
          description: "Proteção completa + escalações legais.",
          features: ["Tudo no Core", "Escalações legais", "Suporte prioritário", "Relatórios avançados"],
          cta: "Escolher Plano",
          recommended: "Recomendado"
        }
      ],
      note: "* Preços exibidos em {currency}. Todos os cobranças processadas em EUR."
    },
    whyChooseUs: {
      title: "Por Que Nos Escolher",
      points: [
        "Falamos a língua dos hosts hostis.",
        "Lei da UE aplicada globalmente.",
        "Trabalho manual + escalação legal.",
        "Detecção instantânea de reenvios.",
        "Transparência e provas completas."
      ],
      conclusion: {
        title: "Outros enviam e-mails DMCA.",
        highlight: "Nós escalamos até desaparecer. Permanentemente."
      }
    },
    faq: {
      title: "Perguntas Frequentes",
      items: [
        { question: "Qualquer país?", answer: "Sim. Cobertura global." },
        { question: "Hosts hostis?", answer: "Sim. Temos vetores de escalação." },
        { question: "Criadores não adultos?", answer: "100% protegidos." },
        { question: "Quão rápido?", answer: "Minutos a dias, dependendo da plataforma." }
      ]
    },
    cta: {
      title: "Seu Conteúdo. Sua Imagem. Sua Reputação.",
      subtitle: "Protegido em Todo o Mundo.",
      button: "Verificar se meu conteúdo vazou"
    }
  },
  de: {
    hero: {
      badge: "GLOBALER SCHUTZ",
      title: "Globaler Digitaler Schutz",
      subtitle: "Für Creator Weltweit",
      description: "Schutz auf europäischem Niveau, weltweit verfügbar. Bewährte Expertise in den strengsten Rechtsumgebungen der Welt.",
      cta: "Prüfen, ob meine Inhalte geleakt wurden"
    },
    whyGlobal: {
      title: "Warum Wir Global Wurden",
      subtitle: "Jahrelange Erfahrung in den strengsten Rechtsumgebungen Europas. Jetzt weltweit verfügbar.",
      reality: "Die Realität",
      realityText: "Creator weltweit stehen vor denselben Bedrohungen, aber oft mit",
      realityHighlight: "null echtem Schutz",
      nowAvailable: "Jetzt Weltweit Verfügbar:",
      features: {
        protection: "Schutz auf europäischem Niveau",
        legal: "Rechtliche Eskalationssysteme",
        security: "24/7 Sicherheitsteam"
      },
      conclusion: "Internationale Schutzinfrastruktur."
    },
    whoWeProtect: {
      title: "Wen Wir Schützen",
      subtitle: "Für Creator überall:",
      creators: [
        { title: "OnlyFans & MYM Creator", description: "Schnelle Entfernung von Leaks, Klonen und Spiegeln." },
        { title: "Webcam & Studio-Performer", description: "Schutz vor Aufnahmen und Neu-Uploads." },
        { title: "Fotomodelle & Visuelle Creator", description: "Stoppen Sie KI-Bearbeitungen, gestohlene Fotos und Deepfakes." },
        { title: "Influencer", description: "Fake-Accounts und Identitätsdiebstahl entfernen." },
        { title: "Alle Creator", description: "Schützen Sie Ihr Image und Ihren Ruf." }
      ],
      conclusion: "Ihre Inhalte verdienen Schutz."
    },
    whatWeRemove: {
      title: "Was Wir Entfernen",
      subtitle: "Plattformen, die andere nicht anfassen können:",
      items: [
        { title: "Leak-Seiten", description: "Alle großen Plattformen und Foren." },
        { title: "Klone & Spiegel", description: "Sofortige Erkennung und Entfernung." },
        { title: "Suchmaschinen-Spuren", description: "Google, Bing, Yandex, gecachte Seiten." },
        { title: "Telegram & Discord", description: "Gruppen-Löschungen und Überwachung." },
        { title: "Impersonierung", description: "Fake-Accounts und Identitätsdiebstahl." },
        { title: "KI-Inhalte & Deepfakes", description: "Erweiterte Erkennung und Entfernung." }
      ],
      conclusion: "Nichts wird toleriert. Nichts wird ignoriert."
    },
    howItWorks: {
      title: "Wie Es Funktioniert",
      steps: [
        { number: "1", title: "Scannen", description: "Globale Erkennung auf allen Plattformen." },
        { number: "2", title: "Melden", description: "Automatisierte + manuelle Einreichungen." },
        { number: "3", title: "Entfernen", description: "Rechtliche Eskalation bei Bedarf." },
        { number: "4", title: "Überwachen", description: "24/7 Neu-Upload-Erkennung." },
        { number: "5", title: "Berichten", description: "Vollständige Dokumentation in Ihrem Dashboard." }
      ]
    },
    plans: {
      title: "Pläne",
      plans: [
        {
          name: "TEST",
          description: "Mit eingeschränkten Funktionen testen.",
          features: ["Begrenzte Scans", "Basis-Support"],
          cta: "Kostenlosen Test Starten"
        },
        {
          name: "CORE",
          description: "Vollständiger Schutz.",
          features: ["Vollständige Scans", "Prioritäts-Entfernungen", "24/7 Überwachung", "Dashboard"],
          cta: "Plan Wählen"
        },
        {
          name: "ELITE",
          description: "Vollständiger Schutz + rechtliche Eskalationen.",
          features: ["Alles in Core", "Rechtliche Eskalationen", "Prioritäts-Support", "Erweiterte Berichte"],
          cta: "Plan Wählen",
          recommended: "Empfohlen"
        }
      ],
      note: "* Preise werden in {currency} angezeigt. Alle Gebühren werden in EUR abgerechnet."
    },
    whyChooseUs: {
      title: "Warum Uns Wählen",
      points: [
        "Wir sprechen die Sprache feindlicher Hosts.",
        "EU-Recht global angewendet.",
        "Manuelle Arbeit + rechtliche Eskalation.",
        "Sofortige Neu-Upload-Erkennung.",
        "Vollständige Transparenz und Beweise."
      ],
      conclusion: {
        title: "Andere senden DMCA-E-Mails.",
        highlight: "Wir eskalieren, bis es weg ist. Permanently."
      }
    },
    faq: {
      title: "Häufig Gestellte Fragen",
      items: [
        { question: "Jedes Land?", answer: "Ja. Globale Abdeckung." },
        { question: "Feindliche Hosts?", answer: "Ja. Wir haben Eskalationsvektoren." },
        { question: "Nicht-Erwachsenen-Creator?", answer: "100% geschützt." },
        { question: "Wie schnell?", answer: "Minuten bis Tage, je nach Plattform." }
      ]
    },
    cta: {
      title: "Ihre Inhalte. Ihr Image. Ihr Ruf.",
      subtitle: "Weltweit Geschützt.",
      button: "Prüfen, ob meine Inhalte geleakt wurden"
    }
  }
};

// Currency types
type Currency = 'EUR' | 'USD' | 'GBP' | 'BRL' | 'RUB';

// Currency conversion rates (update periodically)
const CURRENCY_RATES: Record<Currency, number> = {
  EUR: 1,
  USD: 1.08,
  GBP: 0.85,
  BRL: 5.45, // Brazilian Real
  RUB: 98.50 // Russian Ruble
};

// Currency symbols and names
const CURRENCY_INFO: Record<Currency, { symbol: string; name: string }> = {
  EUR: { symbol: '€', name: 'EUR' },
  USD: { symbol: '$', name: 'USD' },
  GBP: { symbol: '£', name: 'GBP' },
  BRL: { symbol: 'R$', name: 'BRL' },
  RUB: { symbol: '₽', name: 'RUB' }
};

// Get user's currency based on browser locale
const getUserCurrency = (): Currency => {
  const locale = navigator.language || 'en-US';
  if (locale.includes('GB') || locale.includes('en-GB')) return 'GBP';
  if (locale.includes('US') || locale.includes('en-US')) return 'USD';
  if (locale.includes('BR') || locale.includes('pt-BR')) return 'BRL';
  if (locale.includes('RU') || locale.includes('ru')) return 'RUB';
  return 'EUR';
};

// Format price with currency
const formatPrice = (amount: number, currency: Currency): string => {
  const converted = amount * CURRENCY_RATES[currency];
  const info = CURRENCY_INFO[currency];
  return `${info.symbol}${Math.round(converted)}`;
};

// Detect user location and return both language and currency
const detectUserLocation = async (): Promise<{ language: 'en' | 'ru' | 'es' | 'pt' | 'de'; currency: Currency }> => {
  try {
    const response = await fetch('https://ipapi.co/json/', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      // Add timeout to prevent hanging
      signal: AbortSignal.timeout(5000)
    });
    
    if (!response.ok) {
      throw new Error('IP API response not ok');
    }
    
    const data = await response.json();
    const countryCode = data.country_code?.toUpperCase() || '';
    const currencyCode = data.currency?.toUpperCase() || '';
    
    // Determine language based on country
    let language: 'en' | 'ru' | 'es' | 'pt' | 'de' = 'en';
    if (['RU', 'BY', 'KZ', 'UA', 'KG', 'TJ', 'UZ', 'MD'].includes(countryCode)) {
      language = 'ru';
    } else if (['ES', 'MX', 'AR', 'CO', 'CL', 'PE', 'VE', 'EC', 'GT', 'CU', 'BO', 'DO', 'HN', 'PY', 'SV', 'NI', 'CR', 'PA', 'UY'].includes(countryCode)) {
      language = 'es';
    } else if (['BR', 'PT', 'AO', 'MZ', 'CV', 'GW', 'ST', 'TL'].includes(countryCode)) {
      language = 'pt';
    } else if (['DE', 'AT', 'CH', 'LI', 'LU', 'BE'].includes(countryCode)) {
      language = 'de';
    }
    
    // Determine currency based on country/currency code
    let currency: Currency = 'EUR';
    if (countryCode === 'BR' || currencyCode === 'BRL') {
      currency = 'BRL';
    } else if (['RU', 'BY', 'KZ', 'UA', 'KG', 'TJ', 'UZ', 'MD'].includes(countryCode) || currencyCode === 'RUB') {
      currency = 'RUB';
    } else if (countryCode === 'GB' || currencyCode === 'GBP') {
      currency = 'GBP';
    } else if (countryCode === 'US' || currencyCode === 'USD') {
      currency = 'USD';
    } else if (currencyCode === 'EUR' || ['FR', 'DE', 'IT', 'ES', 'NL', 'BE', 'AT', 'PT', 'FI', 'IE', 'GR', 'LU', 'DK', 'SE', 'CZ', 'PL', 'HU', 'SK', 'SI', 'EE', 'LV', 'LT', 'MT', 'CY'].includes(countryCode)) {
      currency = 'EUR';
    } else {
      // Fallback to browser locale
      currency = getUserCurrency();
    }
    
    return { language, currency };
  } catch (error) {
    // Silently fail and fallback to browser language/currency
    if (import.meta.env.DEV) {
      console.log('IP detection failed, using browser language/currency fallback:', error);
    }
    // Fallback to browser language
    const browserLang = navigator.language || 'en';
    let language: 'en' | 'ru' | 'es' | 'pt' | 'de' = 'en';
    if (browserLang.startsWith('ru')) language = 'ru';
    if (browserLang.startsWith('es')) language = 'es';
    if (browserLang.startsWith('pt')) language = 'pt';
    if (browserLang.startsWith('de')) language = 'de';
    
    return { language, currency: getUserCurrency() };
  }
};

const InternationalProtection = () => {
  const [currency, setCurrency] = useState<Currency>('EUR');
  const [language, setLanguage] = useState<'en' | 'ru' | 'es' | 'pt' | 'de'>('en');
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isCurrencyMenuOpen, setIsCurrencyMenuOpen] = useState(false);
  const languageMenuRef = useRef<HTMLDivElement>(null);
  const currencyMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Detect user location and set both language and currency
    detectUserLocation().then(({ language: detectedLang, currency: detectedCurrency }) => {
      setLanguage(detectedLang);
      setCurrency(detectedCurrency);
    });
  }, []);

  // Update document title and meta description based on language
  useEffect(() => {
    const t = translations[language] || translations.en;
    document.title = `${t.hero.title} | ContentRemovalDesk - ${t.hero.subtitle}`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", t.hero.description);
    }
  }, [language]);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target as Node)) {
        setIsLanguageMenuOpen(false);
      }
      if (currencyMenuRef.current && !currencyMenuRef.current.contains(event.target as Node)) {
        setIsCurrencyMenuOpen(false);
      }
    };

    if (isLanguageMenuOpen || isCurrencyMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isLanguageMenuOpen, isCurrencyMenuOpen]);

  const languages = [
    { code: 'en', label: 'English', subtitle: 'Digital Protection' },
    { code: 'ru', label: 'Русский', subtitle: 'Цифровая Защита' },
    { code: 'es', label: 'Español', subtitle: 'Protección Digital' },
    { code: 'pt', label: 'Português', subtitle: 'Proteção Digital' },
    { code: 'de', label: 'Deutsch', subtitle: 'Digitaler Schutz' }
  ];

  const getSubtitle = () => {
    return languages.find(l => l.code === language)?.subtitle || 'Digital Protection';
  };

  // Get current translations
  const t = translations[language] || translations.en;

  // Language & Currency Switcher Component
  const languageCurrencySwitcher = (
    <>
        {/* Language Switcher */}
      <div className="relative z-50" ref={languageMenuRef}>
          <Button
            variant="outline"
            size="sm"
          onClick={(e) => {
            e.stopPropagation();
            setIsLanguageMenuOpen(!isLanguageMenuOpen);
          }}
          className="bg-slate-900/90 backdrop-blur-xl border-purple-800/50 text-white hover:bg-purple-950/80"
          >
            <Globe className="h-4 w-4 mr-2" />
            {languages.find(l => l.code === language)?.label}
            <ChevronDown className="h-4 w-4 ml-2" />
          </Button>
        <AnimatePresence>
          {isLanguageMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full right-0 mt-2 bg-slate-900 border border-purple-800/50 rounded-lg shadow-xl overflow-hidden min-w-[150px] z-[100]"
              style={{ 
                position: 'absolute',
                pointerEvents: 'auto'
              }}
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                onClick={(e) => {
                  e.stopPropagation();
                  setLanguage(lang.code as 'en' | 'ru' | 'es' | 'pt' | 'de');
                    setIsLanguageMenuOpen(false);
                  }}
                  className={`w-full px-4 py-2 text-left hover:bg-purple-950/80 transition-colors text-white cursor-pointer ${
                    language === lang.code ? 'bg-purple-950/80' : ''
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        </div>
        {/* Currency Switcher */}
      <div className="relative z-50" ref={currencyMenuRef}>
          <Button
            variant="outline"
            size="sm"
          onClick={(e) => {
            e.stopPropagation();
            setIsCurrencyMenuOpen(!isCurrencyMenuOpen);
          }}
          className="bg-slate-900/90 backdrop-blur-xl border-purple-800/50 text-white hover:bg-purple-950/80"
        >
          {CURRENCY_INFO[currency].symbol} {CURRENCY_INFO[currency].name}
          <ChevronDown className="h-4 w-4 ml-2" />
          </Button>
        <AnimatePresence>
          {isCurrencyMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full right-0 mt-2 bg-slate-900 border border-purple-800/50 rounded-lg shadow-xl overflow-hidden min-w-[150px] z-[100]"
              style={{ 
                position: 'absolute',
                pointerEvents: 'auto'
              }}
            >
              {(['EUR', 'USD', 'GBP', 'BRL', 'RUB'] as Currency[]).map((curr) => (
                <button
                  key={curr}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrency(curr);
                    setIsCurrencyMenuOpen(false);
                  }}
                  className={`w-full px-4 py-2 text-left hover:bg-purple-950/80 transition-colors flex items-center gap-2 text-white cursor-pointer ${
                    currency === curr ? 'bg-purple-950/80' : ''
                  }`}
                >
                  <span>{CURRENCY_INFO[curr].symbol}</span>
                  <span>{CURRENCY_INFO[curr].name}</span>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        </div>
    </>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950 via-blue-950 to-black text-white antialiased">
      <Header 
        hideMenu 
        showLanguageCurrency 
        language={languages.find(l => l.code === language)?.label || 'English'}
        currency={currency}
        hideStartButton
        languageCurrencySwitcher={languageCurrencySwitcher}
        subtitleText={getSubtitle()}
        usePurpleTheme
      />

      {/* SECTION 1 - Hero */}
      <section className="relative min-h-[95vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-24 sm:pt-32 pb-20 sm:pb-24">
        {/* Liquid glass background - black to purple to blue */}
        <div className="absolute inset-0 overflow-hidden" style={{ 
          transform: 'translateZ(0)', 
          WebkitTransform: 'translateZ(0)',
          WebkitBackfaceVisibility: 'hidden',
          backfaceVisibility: 'hidden'
        } as React.CSSProperties}>
          {/* Purple liquid orbs */}
          <motion.div 
            className="absolute top-1/4 right-1/4 w-[800px] h-[800px] rounded-full blur-[100px]"
            animate={{
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.2, 1],
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, rgba(147, 51, 234, 0.15) 50%, transparent 80%)',
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            } as React.CSSProperties}
          />
          <motion.div 
            className="absolute bottom-1/4 left-1/4 w-[700px] h-[700px] rounded-full blur-[90px]"
            animate={{
              opacity: [0.15, 0.35, 0.15],
              scale: [1, 1.25, 1],
              x: [0, -25, 0],
              y: [0, 25, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            style={{
              background: 'radial-gradient(circle, rgba(147, 51, 234, 0.25) 0%, rgba(139, 92, 246, 0.12) 50%, transparent 80%)',
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            } as React.CSSProperties}
          />
          {/* Blue liquid orbs */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full blur-[120px]"
            animate={{
              opacity: [0.1, 0.25, 0.1],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            style={{
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(37, 99, 235, 0.1) 50%, transparent 70%)',
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            } as React.CSSProperties}
          />
          <motion.div 
            className="absolute top-1/3 left-1/3 w-[600px] h-[600px] rounded-full blur-[80px]"
            animate={{
              opacity: [0.12, 0.22, 0.12],
              scale: [1, 1.1, 1],
              x: [0, 20, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            style={{
              background: 'radial-gradient(circle, rgba(96, 165, 250, 0.18) 0%, rgba(59, 130, 246, 0.08) 50%, transparent 75%)',
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            } as React.CSSProperties}
          />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left side - Main content */}
          <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 text-center lg:text-left space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
                className="inline-flex items-center gap-3 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full bg-black/40 backdrop-blur-2xl border border-purple-500/30 shadow-lg shadow-purple-500/20"
                style={{
                  background: 'rgba(0, 0, 0, 0.4)',
                  backdropFilter: 'blur(24px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(24px) saturate(180%)',
                }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                </motion.div>
                <span className="text-xs sm:text-sm font-bold text-purple-300 tracking-wide">
                  {t.hero.badge}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-display font-bold leading-[1.1] tracking-tight"
            >
                <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-foreground mb-4 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                  {t.hero.title}
              </span>
                <span className="block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-foreground mt-2">
                  {t.hero.subtitle}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl sm:text-2xl lg:text-3xl text-zinc-300 max-w-3xl mx-auto lg:mx-0 leading-relaxed font-medium"
              >
                {t.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-4"
              >
              <Button
                size="lg"
                variant="outline"
                  className="group border-2 border-purple-500/60 hover:border-purple-400 text-foreground font-semibold rounded-full px-8 sm:px-10 lg:px-12 py-5 sm:py-6 lg:py-7 text-base sm:text-lg lg:text-xl transition-all duration-300 w-full sm:w-auto shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20"
                style={{
                  background: 'rgba(0, 0, 0, 0.4)',
                  backdropFilter: 'blur(20px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                }}
                asChild
              >
                  <a href="https://scan.contentremovaldesk.com/scan">
                  <span className="flex items-center gap-3 justify-center">
                    <Search className="h-5 w-5 sm:h-6 sm:w-6" />
                      {t.hero.cta}
                  </span>
                </a>
              </Button>
            </motion.div>
          </motion.div>

            {/* Right side - Globe */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-5 hidden lg:block relative"
            >
              <div className="relative w-full h-[500px] flex items-center justify-center">
                <div 
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background: 'rgba(0, 0, 0, 0.3)',
                    backdropFilter: 'blur(40px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(40px) saturate(180%)',
                    border: '1px solid rgba(168, 85, 247, 0.2)',
                    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 0 80px rgba(168, 85, 247, 0.1)',
                  }}
                />
                <div className="relative rounded-3xl h-full w-full flex items-center justify-center">
                  <Suspense fallback={
                    <div className="flex items-center justify-center h-full">
                      <div className="w-8 h-8 border-2 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
                    </div>
                  }>
                    <GlobeInternational key="globe-international" />
                  </Suspense>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - Why CRD Went International */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              {t.whyGlobal.title}
            </h2>
            <p className="text-xl sm:text-2xl text-zinc-300 max-w-4xl mx-auto leading-relaxed">
              {t.whyGlobal.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl p-8 sm:p-12 lg:p-16"
            style={{
              background: 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(40px) saturate(180%)',
              WebkitBackdropFilter: 'blur(40px) saturate(180%)',
              border: '1px solid rgba(168, 85, 247, 0.2)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 0 80px rgba(168, 85, 247, 0.1)',
              transform: 'translate3d(0, 0, 0)',
              WebkitTransform: 'translate3d(0, 0, 0)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              isolation: 'isolate',
              opacity: 1,
            } as React.CSSProperties}
          >
            <p className="text-xl sm:text-2xl font-semibold text-foreground mb-6">
              {t.whyGlobal.reality}
            </p>
            <p className="text-lg sm:text-xl text-zinc-300 mb-8 leading-relaxed">
              {t.whyGlobal.realityText} <span className="text-purple-400 font-bold">{t.whyGlobal.realityHighlight}</span>.
            </p>
            <p className="text-lg sm:text-xl text-foreground font-semibold mb-6">
              {t.whyGlobal.nowAvailable}
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { icon: Globe, text: t.whyGlobal.features.protection },
                { icon: Scale, text: t.whyGlobal.features.legal },
                { icon: Shield, text: t.whyGlobal.features.security }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20 }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4 p-6 rounded-xl"
                  style={{
                    background: 'rgba(0, 0, 0, 0.3)',
                    backdropFilter: 'blur(20px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                    border: '1px solid rgba(168, 85, 247, 0.15)',
                    transform: 'translate3d(0, 0, 0)',
                    WebkitTransform: 'translate3d(0, 0, 0)',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    isolation: 'isolate',
                    opacity: 1,
                  } as React.CSSProperties}
                >
                  <item.icon className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                  <p className="text-base sm:text-lg text-zinc-300">{item.text}</p>
                </motion.div>
              ))}
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-xl sm:text-2xl font-bold text-foreground mt-8 text-center"
            >
              <span className="text-purple-400">{t.whyGlobal.conclusion}</span>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 - Who We Protect */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              {t.whoWeProtect.title}
            </h2>
            <p className="text-xl sm:text-2xl text-zinc-300 max-w-3xl mx-auto">
              {t.whoWeProtect.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {t.whoWeProtect.creators.map((creator, index) => {
              const icons = [Shield, Video, Image, TrendingUp, Users];
              const Icon = icons[index] || Shield;
              return (
              <motion.div
                key={index}
                initial={{ y: 30, scale: 0.95 }}
                whileInView={{ y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative rounded-3xl p-8 sm:p-12 transition-all duration-500 overflow-hidden"
                style={{
                  background: 'rgba(0, 0, 0, 0.4)',
                  backdropFilter: 'blur(30px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(30px) saturate(180%)',
                  border: '1px solid rgba(168, 85, 247, 0.2)',
                  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 0 60px rgba(168, 85, 247, 0.05)',
                  transform: 'translate3d(0, 0, 0)',
                  WebkitTransform: 'translate3d(0, 0, 0)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  isolation: 'isolate',
                  opacity: 1,
                } as React.CSSProperties}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.4)';
                  e.currentTarget.style.boxShadow = '0 12px 40px 0 rgba(168, 85, 247, 0.2), inset 0 0 80px rgba(168, 85, 247, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.2)';
                  e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 0 60px rgba(168, 85, 247, 0.05)';
                }}
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-500/10 border border-purple-500/30 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/20">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground mb-3">
                    {creator.title}
                  </h3>
                  <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
                    {creator.description}
                  </p>
                </div>
              </motion.div>
            )})}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-xl sm:text-2xl font-semibold text-foreground text-center mt-12"
          >
            <span className="text-purple-400">{t.whoWeProtect.conclusion}</span>
          </motion.p>
        </div>
      </section>

      {/* SECTION 4 - What CRD Removes */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              {t.whatWeRemove.title}
            </h2>
            <p className="text-xl sm:text-2xl text-zinc-300 max-w-3xl mx-auto">
              {t.whatWeRemove.subtitle}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {t.whatWeRemove.items.map((item, index) => {
              const icons = [Trash2, Image, Search, Users, Shield, Eye];
              const Icon = icons[index] || Trash2;
              return (
              <motion.div
                key={index}
                initial={{ y: 30, scale: 0.95 }}
                whileInView={{ y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative rounded-3xl p-8 transition-all duration-500 overflow-hidden"
                style={{
                  background: 'rgba(0, 0, 0, 0.4)',
                  backdropFilter: 'blur(30px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(30px) saturate(180%)',
                  border: '1px solid rgba(168, 85, 247, 0.2)',
                  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 0 60px rgba(168, 85, 247, 0.05)',
                  transform: 'translate3d(0, 0, 0)',
                  WebkitTransform: 'translate3d(0, 0, 0)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  isolation: 'isolate',
                  opacity: 1,
                } as React.CSSProperties}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.4)';
                  e.currentTarget.style.boxShadow = '0 12px 40px 0 rgba(168, 85, 247, 0.2), inset 0 0 80px rgba(168, 85, 247, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.2)';
                  e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 0 60px rgba(168, 85, 247, 0.05)';
                }}
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-500/10 border border-purple-500/30 flex items-center justify-center mb-4 shadow-lg shadow-purple-500/20">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-purple-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            )})}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-xl sm:text-2xl font-bold text-purple-400">
              {t.whatWeRemove.conclusion}
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 - How CRD Works */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              {t.howItWorks.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
            {t.howItWorks.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, scale: 0.95 }}
                whileInView={{ y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group relative rounded-3xl p-8 transition-all duration-500 overflow-hidden"
                style={{
                  background: 'rgba(0, 0, 0, 0.4)',
                  backdropFilter: 'blur(30px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(30px) saturate(180%)',
                  border: '1px solid rgba(168, 85, 247, 0.2)',
                  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 0 60px rgba(168, 85, 247, 0.05)',
                  transform: 'translate3d(0, 0, 0)',
                  WebkitTransform: 'translate3d(0, 0, 0)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  isolation: 'isolate',
                  opacity: 1,
                } as React.CSSProperties}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.4)';
                  e.currentTarget.style.boxShadow = '0 12px 40px 0 rgba(168, 85, 247, 0.2), inset 0 0 80px rgba(168, 85, 247, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.2)';
                  e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 0 60px rgba(168, 85, 247, 0.05)';
                }}
              >
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/30 to-purple-500/20 border-2 border-purple-500/50 flex items-center justify-center mb-6 text-2xl font-bold text-foreground">
                    {step.number}
                  </div>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 - International Plans */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              {t.plans.title}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 lg:gap-8">
            {t.plans.plans.map((planData, index) => {
              const plan = {
                name: planData.name,
                price: index === 0 ? 0 : index === 1 ? 79 : 99,
                period: index === 0 ? "" : "/month",
                description: planData.description,
                features: planData.features,
                highlight: index === 2,
                cta: planData.cta,
                recommended: planData.recommended
              };
              return (
              <motion.div
                key={index}
                initial={{ y: 30, scale: 0.95 }}
                whileInView={{ y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative rounded-3xl p-6 sm:p-8 lg:p-10 transition-all duration-500 overflow-hidden w-full max-w-md mx-auto"
                style={{
                  background: plan.highlight 
                    ? 'rgba(0, 0, 0, 0.5)' 
                    : 'rgba(0, 0, 0, 0.4)',
                  backdropFilter: 'blur(30px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(30px) saturate(180%)',
                  border: plan.highlight 
                    ? '1px solid rgba(168, 85, 247, 0.4)' 
                    : '1px solid rgba(168, 85, 247, 0.2)',
                  boxShadow: plan.highlight
                    ? '0 8px 32px 0 rgba(168, 85, 247, 0.3), inset 0 0 80px rgba(168, 85, 247, 0.15)'
                    : '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 0 60px rgba(168, 85, 247, 0.05)',
                  transform: 'translate3d(0, 0, 0)',
                  WebkitTransform: 'translate3d(0, 0, 0)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  isolation: 'isolate',
                  opacity: 1,
                } as React.CSSProperties}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.5)';
                  e.currentTarget.style.boxShadow = '0 12px 40px 0 rgba(168, 85, 247, 0.25), inset 0 0 80px rgba(168, 85, 247, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = plan.highlight 
                    ? 'rgba(168, 85, 247, 0.4)' 
                    : 'rgba(168, 85, 247, 0.2)';
                  e.currentTarget.style.boxShadow = plan.highlight
                    ? '0 8px 32px 0 rgba(168, 85, 247, 0.3), inset 0 0 80px rgba(168, 85, 247, 0.15)'
                    : '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 0 60px rgba(168, 85, 247, 0.05)';
                }}
              >
                {plan.highlight && plan.recommended && (
                  <div className="absolute top-4 right-4">
                    <div className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30">
                      <span className="text-xs font-semibold text-purple-400">{plan.recommended}</span>
                    </div>
                  </div>
                )}
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-bold text-foreground sm:text-5xl">
                      {formatPrice(plan.price, currency)}
                    </span>
                    {plan.period && (
                      <span className="text-base text-zinc-400 sm:text-lg">{plan.period}</span>
                    )}
                  </div>
                  <p className="text-sm sm:text-base text-zinc-300/90 mb-6 leading-relaxed">
                    {plan.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-purple-500/15 border border-purple-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 text-purple-300" />
                        </div>
                        <span className="text-sm sm:text-base text-zinc-200">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    size="lg"
                    className={`w-full rounded-2xl text-base font-semibold tracking-tight shadow-lg shadow-purple-900/40 ${
                      plan.highlight
                        ? 'bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 text-white hover:brightness-110'
                        : 'bg-white/5 text-foreground border border-white/10 hover:border-white/30 hover:bg-white/10'
                    }`}
                    style={plan.highlight ? {} : {
                      backdropFilter: 'blur(20px) saturate(180%)',
                      WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                    }}
                    asChild
                  >
                    <a href="https://espace.contentremovaldesk.com/auth?mode=signup" className="flex items-center justify-center gap-2">
                      {plan.cta}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            )})}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-xs sm:text-sm text-zinc-400 mb-4">
              {t.plans.note.replace('{currency}', CURRENCY_INFO[currency].name)}
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 7 - Why Creators Choose CRD */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              {t.whyChooseUs.title}
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {t.whyChooseUs.points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-xl"
                style={{
                  background: 'rgba(0, 0, 0, 0.3)',
                  backdropFilter: 'blur(20px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                  border: '1px solid rgba(168, 85, 247, 0.15)',
                }}
              >
                <Check className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">{point}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="rounded-3xl p-8 sm:p-12 text-center"
            style={{
              background: 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(40px) saturate(180%)',
              WebkitBackdropFilter: 'blur(40px) saturate(180%)',
              border: '1px solid rgba(168, 85, 247, 0.3)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 0 80px rgba(168, 85, 247, 0.1)',
            }}
          >
            <p className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              {t.whyChooseUs.conclusion.title}
            </p>
            <p className="text-xl sm:text-2xl font-bold text-purple-400">
              {t.whyChooseUs.conclusion.highlight}
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 8 - FAQ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              {t.faq.title}
            </h2>
          </motion.div>

          <div className="space-y-6">
            {t.faq.items.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl p-6 sm:p-8"
                style={{
                  background: 'rgba(0, 0, 0, 0.4)',
                  backdropFilter: 'blur(30px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(30px) saturate(180%)',
                  border: '1px solid rgba(168, 85, 247, 0.2)',
                  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 0 60px rgba(168, 85, 247, 0.05)',
                  transform: 'translate3d(0, 0, 0)',
                  WebkitTransform: 'translate3d(0, 0, 0)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  isolation: 'isolate',
                  opacity: 1,
                } as React.CSSProperties}
              >
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3">
                  {faq.question}
                </h3>
                <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
                  → {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 - Final CTA */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center rounded-3xl p-8 sm:p-12 lg:p-16 transition-all duration-500"
            style={{
              background: 'rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(40px) saturate(180%)',
              WebkitBackdropFilter: 'blur(40px) saturate(180%)',
              border: '1px solid rgba(168, 85, 247, 0.3)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.6), inset 0 0 100px rgba(168, 85, 247, 0.15)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.5)';
              e.currentTarget.style.boxShadow = '0 12px 40px 0 rgba(168, 85, 247, 0.3), inset 0 0 120px rgba(168, 85, 247, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.3)';
              e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.6), inset 0 0 100px rgba(168, 85, 247, 0.15)';
            }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              {t.cta.title}
            </h2>
            <p className="text-xl sm:text-2xl font-semibold text-purple-400 mb-8">
              {t.cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="group border-2 border-purple-500/50 hover:border-purple-400 text-foreground font-semibold rounded-full px-8 sm:px-10 lg:px-12 py-5 sm:py-6 lg:py-7 text-base sm:text-lg lg:text-xl transition-all duration-300"
                style={{
                  background: 'rgba(0, 0, 0, 0.4)',
                  backdropFilter: 'blur(20px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                }}
                asChild
              >
                <a href="https://scan.contentremovaldesk.com/scan" target="_blank" rel="noopener noreferrer">
                  <span className="flex items-center gap-3 justify-center">
                    <Search className="h-5 w-5 sm:h-6 sm:w-6" />
                    {t.cta.button}
                  </span>
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InternationalProtection;

