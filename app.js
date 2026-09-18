// SAVVADI Interactive Studio Scripts

// Comprehensive Service Details Data
const servicesData = {
  web: {
    id: "web",
    title: "Website Development",
    category: "dev",
    tagline: "Modern, responsive, and purpose-driven websites built for impact.",
    badge: "Web & Engineering",
    icon: "globe",
    description: "At SAVVADI, we engineer websites that don't just look stunning—they perform. Whether you need an elite brand showcase, high-conversion landing page, or dynamic business platform, we build accessible, blazing-fast, and mobile-first digital experiences tailored to turn visitors into dedicated clients.",
    deliverables: [
      "Bespoke UI/UX design aligned with your brand identity",
      "100% fluid mobile responsiveness across all devices",
      "Performance optimization for sub-second page loads",
      "Built-in search engine optimization (SEO) architecture",
      "Domain, DNS, security headers, and hosting deployment",
      "Integrated analytics and conversion tracking"
    ],
    idealFor: "Businesses, startups, and creators wanting a credible, high-converting digital storefront.",
    serviceValue: "Website Development"
  },
  app: {
    id: "app",
    title: "App Development",
    category: "dev",
    tagline: "User-friendly mobile and digital applications engineered to scale.",
    badge: "Mobile & Software",
    icon: "smartphone",
    description: "We craft digital applications that provide effortless user journeys and rock-solid architecture. From initial interactive wireframes to full-stack deployment across iOS and Android, SAVVADI transforms your product concept into a sleek, reliable digital utility that users love returning to.",
    deliverables: [
      "Native & cross-platform application development (iOS & Android)",
      "Intuitive UI/UX wireframing, user journeys & prototypes",
      "Fast, secure API design & cloud database integration",
      "Responsive state management & offline-first capability",
      "App store readiness, testing, and continuous maintenance"
    ],
    idealFor: "Founders, enterprises, and innovators launching new digital products or customer portals.",
    serviceValue: "App Development"
  },
  social: {
    id: "social",
    title: "Social Media Management",
    category: "branding",
    tagline: "Strategic content planning, brand voice, and digital presence.",
    badge: "Growth & Content",
    icon: "share-2",
    description: "Consistent, high-quality digital presence is the cornerstone of modern brand authority. SAVVADI takes the guesswork out of social media by combining strategic content planning, aesthetic visual curation, engaging copywriting, and audience growth strategies that foster genuine loyalty.",
    deliverables: [
      "Comprehensive monthly content strategy & calendar",
      "High-engagement graphics, carousels, and visual templates",
      "Compelling storytelling captions & hashtag research",
      "Community engagement, DM management, and brand monitoring",
      "Monthly growth reporting and actionable audience insights"
    ],
    idealFor: "Brands, personal brands, and businesses looking to build a commanding digital voice without spending hours every day.",
    serviceValue: "Social Media Management"
  },
  photo: {
    id: "photo",
    title: "Photography & Videography",
    category: "media",
    tagline: "Professional visual content that captures the soul of your brand.",
    badge: "Cinematic Production",
    icon: "camera",
    description: "First impressions are visual. SAVVADI produces commercial-grade photography and cinematic videography that elevates your brand from ordinary to unforgettable. From on-location shoots to studio product staging, we highlight what makes your offerings truly exceptional.",
    deliverables: [
      "Commercial brand, product, and lifestyle photography",
      "Corporate leadership portraits & studio team coverage",
      "4K cinematic video production with pro lighting & sound",
      "Event and on-location documentary storytelling",
      "Full post-production color grading and high-res asset library"
    ],
    idealFor: "Companies seeking to revamp their imagery with authentic, premium visual assets.",
    serviceValue: "Photography & Videography"
  },
  video: {
    id: "video",
    title: "Video Editing & Content Creation",
    category: "media",
    tagline: "Engaging, high-retention video content built for today's digital platforms.",
    badge: "Post-Production",
    icon: "film",
    description: "In the attention economy, pacing and visual storytelling make all the difference. SAVVADI crafts high-retention video content optimized specifically for modern algorithms—including Instagram Reels, YouTube Shorts, brand commercials, and documentary-style promotional films.",
    deliverables: [
      "Dynamic short-form video editing (Reels, TikToks, Shorts)",
      "Kinetic typography, modern hooks, and motion graphics",
      "Immersive sound design, pacing, and audio mastering",
      "Color grading, visual transitions, and platform aspect ratios",
      "Batch content creation packages for consistent posting"
    ],
    idealFor: "Content creators, founders, and companies wanting viral reach and audience retention.",
    serviceValue: "Video Editing & Content Creation"
  },
  branding: {
    id: "branding",
    title: "Branding & Creative Design",
    category: "branding",
    tagline: "Visual identities and creative assets that communicate your brand values.",
    badge: "Identity & Design",
    icon: "palette",
    description: "Your brand is the reputation that precedes you. SAVVADI designs distinctive, timeless brand identities—from memorable logomarks and harmonious typography systems to complete digital design guidelines that ensure your brand is instantly recognizable across every touchpoint.",
    deliverables: [
      "Full logo suite (primary, secondary, and sub-marks)",
      "Curated typography pairings & color psychology palette",
      "Comprehensive Brand Guidelines & Usage Manual",
      "Business cards, stationery, and digital social media kits",
      "Vector assets and print-ready packaging designs"
    ],
    idealFor: "New ventures establishing their initial identity, or established companies undergoing a modern rebrand.",
    serviceValue: "Branding & Creative Design"
  },
  digital: {
    id: "digital",
    title: "Tailored Digital Solutions",
    category: "tech",
    tagline: "Customized technology and creative solutions built around your exact needs.",
    badge: "Custom Systems",
    icon: "cpu",
    description: "Off-the-shelf software often fails to capture the unique workflows of your business. SAVVADI builds bespoke technology and creative workflows—from custom automation pipelines and CRM setups to interactive customer portals that give you an unfair competitive edge.",
    deliverables: [
      "Custom workflow & business process automation",
      "Third-party API, CRM, and payment gateway integrations",
      "Interactive internal dashboards & customer self-service portals",
      "Digital transformation advisory and technical consulting",
      "Ongoing technical stewardship and optimization"
    ],
    idealFor: "Businesses requiring custom technical capabilities or automated operational efficiency.",
    serviceValue: "Digital Solutions"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Set current year in footer
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Interactive Cursor Light Following Mouse
  const cursorGlow = document.getElementById('cursorGlow');
  if (cursorGlow && window.innerWidth > 768) {
    window.addEventListener('mousemove', (e) => {
      cursorGlow.style.left = `${e.clientX}px`;
      cursorGlow.style.top = `${e.clientY}px`;
    });
  }

  // Mobile Menu Drawer Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const menuOpenIcon = document.getElementById('menuOpenIcon');
  const menuCloseIcon = document.getElementById('menuCloseIcon');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      const isHidden = mobileDrawer.classList.contains('hidden');
      if (isHidden) {
        mobileDrawer.classList.remove('hidden');
        menuOpenIcon.classList.add('hidden');
        menuCloseIcon.classList.remove('hidden');
      } else {
        mobileDrawer.classList.add('hidden');
        menuOpenIcon.classList.remove('hidden');
        menuCloseIcon.classList.add('hidden');
      }
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.add('hidden');
        menuOpenIcon.classList.remove('hidden');
        menuCloseIcon.classList.add('hidden');
      });
    });
  }

  // Category Filter Functionality
  const filterBtns = document.querySelectorAll('.filter-btn');
  const serviceCards = document.querySelectorAll('.service-card-wrapper');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      serviceCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filter === 'all' || cardCategory === filter) {
          card.classList.remove('hidden');
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.classList.add('hidden');
          }, 250);
        }
      });
    });
  });

  // Service Modal Handling
  const serviceModal = document.getElementById('serviceModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalTitle = document.getElementById('modalTitle');
  const modalTagline = document.getElementById('modalTagline');
  const modalBadge = document.getElementById('modalBadge');
  const modalDescription = document.getElementById('modalDescription');
  const modalDeliverables = document.getElementById('modalDeliverables');
  const modalIdealFor = document.getElementById('modalIdealFor');
  const modalCtaBtn = document.getElementById('modalCtaBtn');

  // Attach click listeners to open service modal
  window.openServiceModal = function(serviceKey) {
    const data = servicesData[serviceKey];
    if (!data || !serviceModal) return;

    modalTitle.textContent = data.title;
    modalTagline.textContent = data.tagline;
    modalBadge.textContent = data.badge;
    modalDescription.textContent = data.description;
    modalIdealFor.textContent = data.idealFor;

    // Render deliverables
    modalDeliverables.innerHTML = '';
    data.deliverables.forEach(item => {
      const li = document.createElement('li');
      li.className = 'flex items-start gap-2.5 text-sm text-slate-300';
      li.innerHTML = `
        <div class="w-5 h-5 rounded-md bg-brand-500/10 border border-brand-500/25 flex items-center justify-center text-brand-400 shrink-0 mt-0.5">
          <i data-lucide="check" class="w-3.5 h-3.5"></i>
        </div>
        <span>${item}</span>
      `;
      modalDeliverables.appendChild(li);
    });

    // Configure CTA button
    modalCtaBtn.onclick = () => {
      closeServiceModal();
      selectServiceAndScroll(data.serviceValue);
    };

    // Open Modal
    serviceModal.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Re-render lucide icons in modal
    if (window.lucide) {
      window.lucide.createIcons();
    }
  };

  window.closeServiceModal = function() {
    if (serviceModal) {
      serviceModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  };

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeServiceModal);
  }

  // Close modal when clicking outside content
  if (serviceModal) {
    serviceModal.addEventListener('click', (e) => {
      if (e.target === serviceModal) {
        closeServiceModal();
      }
    });
  }

  // Close modal with ESC key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeServiceModal();
    }
  });

  // Smooth scroll and select service in form
  window.selectServiceAndScroll = function(serviceValue) {
    const serviceSelect = document.getElementById('serviceType');
    if (serviceSelect) {
      serviceSelect.value = serviceValue;
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // FAQ Accordion Toggle
  const accordionItems = document.querySelectorAll('.accordion-item');
  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    if (header) {
      header.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Close others
        accordionItems.forEach(other => {
          if (other !== item) other.classList.remove('active');
        });
        // Toggle clicked
        if (isActive) {
          item.classList.remove('active');
        } else {
          item.classList.add('active');
        }
      });
    }
  });

  // Contact Form Submission Handler
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const contactMethod = document.getElementById('contactMethod').value.trim();
      const serviceType = document.getElementById('serviceType').value;
      const message = document.getElementById('message').value.trim();

      if (!name || !contactMethod || !message) {
        showToast('Please fill out all required fields.');
        return;
      }

      const subject = encodeURIComponent(`Project Inquiry: ${serviceType} - from ${name}`);
      const body = encodeURIComponent(
        `Hi SAVVADI,\n\n` +
        `I would like to discuss a project with you.\n\n` +
        `Name: ${name}\n` +
        `Contact Info: ${contactMethod}\n` +
        `Service Requested: ${serviceType}\n\n` +
        `Project Overview:\n${message}\n\n` +
        `Sent via SAVVADI Official Website`
      );

      // Launch email client
      window.location.href = `mailto:savvadi.studios@gmail.com?subject=${subject}&body=${body}`;

      showToast('Opening your email client to send to SAVVADI...');
      contactForm.reset();
    });
  }
});

// Copy to Clipboard Utility with Toast Notification
function copyToClipboard(text, message = 'Copied to clipboard!') {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(message);
    }).catch(() => {
      fallbackCopy(text, message);
    });
  } else {
    fallbackCopy(text, message);
  }
}

function fallbackCopy(text, message) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  textArea.style.top = '-999999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    showToast(message);
  } catch (err) {
    showToast('Failed to copy. Please copy manually.');
  }
  document.body.removeChild(textArea);
}

// Toast notification helper
let toastTimeout;
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.remove('translate-y-20', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-20', 'opacity-0');
  }, 3500);
}
