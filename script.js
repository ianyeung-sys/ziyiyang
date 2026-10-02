/* ============================================================================
   ZIYI YANG — PERSONAL PORTFOLIO
   ----------------------------------------------------------------------------
   TABLE OF CONTENTS
   01. Project data          — ← edit this to update the Projects section
   02. Utilities
   03. Project rendering
   04. Case-study modal
   05. Navigation            — sticky state, active section, smooth scroll
   06. Mobile drawer
   07. Experience timeline
   08. Scroll reveal
   09. CV request form       — ← edit CV_ENDPOINT to enable email delivery
   10. Footer year
   ============================================================================ */

/* ============================================================================
   PENDING CONTENT — search for "TODO" to find everything at once
   ----------------------------------------------------------------------------
   The site is complete and deployable as-is. These are the places where real
   content still needs to be supplied. Nothing here is invented, and no
   placeholder can produce a broken link or a broken image.

   In this file (script.js)
     TODO  Project links      — 8 × '[ADD LINK]' in the `projects` array below.
                                Renders as a disabled grey chip until replaced.
     TODO  Case studies       — '[ADD ROLE]', '[ADD RESULT]', '[ADD REFLECTION]',
                                '[ADD TECHNOLOGY]' inside each `detail.sections`.
                                Delete any field you have no real information
                                for; the modal only renders what is present.
     TODO  Project visuals    — `image` currently points at a .svg placeholder in
                                assets/images/projects/. Swap for a real
                                screenshot (8:5 works best).
     TODO  Project GIFs       — set `gif` to a path under assets/gifs/ and add
                                the project to `gifAvailable` further down.
     TODO  CV delivery        — set CV_ENDPOINT in section 09 so requests are
                                delivered automatically instead of via the
                                visitor's mail client.

   In index.html
     TODO  Highlight dates    — 3 × '[ADD DATE]' in the Highlights section.

   In assets/
     TODO  Real screenshots   — assets/images/projects/
     TODO  Animations         — assets/gifs/
     TODO  Research figures   — assets/images/research/ (the pipeline diagram is
                                inline SVG in index.html and needs no asset)
   ============================================================================ */

(function () {
  'use strict';

  /* ==========================================================================
     01. PROJECT DATA
     --------------------------------------------------------------------------
     Everything in the "Selected Projects" section is generated from this array.
     To add a project, copy an object and edit it. To reorder, move objects
     around. No HTML changes are needed.

     Object shape
     ------------
     title        string   Project name.
     category     string   Discipline label shown in the entry head.
     description  string   One or two sentences, plain text.
     image        string   Path to the visual. 8:5 aspect ratio works best.
     gif          string   Optional path to an animated GIF. When the file
                           exists it layers over `image` (which becomes its
                           poster). Leave as null if you have no GIF.
     technologies array    Short technology names, rendered as chips.
     result       string   Optional outcome line. Plain text, or null.
     layout       string   'wide'   — full-width media, body beneath (used once)
                           'split'  — media left,  body right
                           'flip'   — media right, body left
     links        array    { label, href, external }. `external: true` opens in
                           a new tab and gets the ↗ mark. An href of '[ADD LINK]'
                           renders as a clearly disabled placeholder chip instead
                           of a broken link.
     detail       object   Case-study content for the modal. Every field is
                           optional — only add the ones you have real
                           information for, and only the ones you provide will
                           be rendered.

       detail.lead        string  Opening line, shown large.
       detail.figcaption  string  Caption under the modal figure.
       detail.sections    array   { label, body } where body is a string or an
                                  array of strings (rendered as a list).
       detail.links       array   Same shape as the top-level `links`.
     ========================================================================== */

  const projects = [

    /* ── 01 ─────────────────────────────────────────────────────────────── */
    {
      title: 'China Travel Guide',
      category: 'Product · Web · Frontend',
      description:
        'A mobile-friendly travel guide designed for international students who want to ' +
        'explore China but do not know where to start.',
      image: 'assets/images/projects/travel-guide.svg',
      gif: 'assets/gifs/travel-guide.gif',
      technologies: ['HTML', 'CSS', 'JavaScript', 'GitHub', 'Vercel', 'Responsive Design'],
      result: null,
      layout: 'wide',
      links: [
        // TODO: add your live demo URL (e.g. the Vercel deployment)
        { label: 'Live Demo', href: '[ADD LINK]', external: true },
        // TODO: add your GitHub repository URL
        { label: 'GitHub', href: '[ADD LINK]', external: true }
      ],
      detail: {
        lead:
          'International students want to travel in China but often do not know where to begin. ' +
          'This started as an attempt to answer that question properly, for one specific audience, ' +
          'instead of writing another generic listicle.',
        figcaption: 'Mobile-first guide — replace with real screenshots.',
        sections: [
          {
            label: 'Overview',
            body:
              'A responsive travel guide aimed at international students planning their first ' +
              'trip in China. The content is organised around the questions someone actually ' +
              'asks before a first trip, rather than around geography.'
          },
          {
            label: 'Problem',
            body:
              'Most travel content assumes you already know the basics — which cities matter, how ' +
              'much time to allow, how to get between places, what to do about payments and ' +
              'booking. For a first-time visitor from outside China, that gap is the actual ' +
              'barrier. The information exists, but it is scattered and not written for them.'
          },
          {
            label: 'Approach',
            body: [
              'Wrote for one specific reader — an international student — instead of a general audience.',
              'Designed mobile-first, because this is the kind of content people read while travelling.',
              'Kept navigation shallow so the answer to a question is never more than a screen away.',
              'Deployed on Vercel so updates can ship immediately.'
            ]
          },
          {
            label: 'My role',
            body:
              'End-to-end: research, content structure, design, frontend implementation, and deployment.'
          },
          {
            label: 'Technology',
            body: 'HTML, CSS, JavaScript. No framework — the site is simple enough that one would only add weight.'
          },
          {
            label: 'Result',
            body:
              'A deployed, responsive site that works from a phone. [ADD RESULT — e.g. how it was received, ' +
              'how many people used it, or what changed after testing.]'
          },
          {
            label: 'Reflection',
            body:
              'The hardest part was not the code — it was deciding what to leave out. Writing for a ' +
              'narrow, clearly defined audience made that decision much easier: if it was not useful ' +
              'to an international student on their first trip, it did not belong on the page. ' +
              '[ADD REFLECTION — what you would do differently next time.]'
          }
        ],
        links: [
          { label: 'Live Demo', href: '[ADD LINK]', external: true },
          { label: 'GitHub', href: '[ADD LINK]', external: true }
        ]
      }
    },

    /* ── 02 ─────────────────────────────────────────────────────────────── */
    {
      title: 'Intelligent Inspection Car',
      category: 'Embedded · Intelligent Systems',
      description:
        'A multi-sensor intelligent inspection vehicle integrating embedded control, ' +
        'computer vision, and sensor fusion.',
      image: 'assets/images/projects/inspection-car.svg',
      gif: 'assets/gifs/inspection-car.gif',
      technologies: ['STM32F407', 'OpenMV', 'MPU6050', 'Ultrasonic Sensors', 'PID Control', 'Kalman Filter'],
      result: null,
      layout: 'split',
      links: [
        // TODO: add a repository or report link if you have one
        { label: 'GitHub', href: '[ADD LINK]', external: true }
      ],
      flow: ['Sensors', 'Data Processing', 'Sensor Fusion', 'Control Algorithm', 'STM32', 'Actuation'],
      detail: {
        lead:
          'A small vehicle that navigates and inspects its surroundings using several sensors at ' +
          'once — and the engineering problem of making those sensors agree with each other.',
        figcaption: 'Vehicle and system diagram — replace with your own photo.',
        sections: [
          {
            label: 'Overview',
            body:
              'A four-wheeled inspection vehicle built around an STM32F407 microcontroller, ' +
              'combining machine vision with inertial and distance sensing to move through and ' +
              'report on its environment.'
          },
          {
            label: 'Problem',
            body:
              'No single sensor is good enough on its own. Ultrasonic readings are noisy and ' +
              'struggle with angled surfaces; the inertial sensor drifts over time; vision needs ' +
              'stable lighting. A vehicle that trusts any one of them will fail in a predictable way.'
          },
          {
            label: 'Approach',
            body: [
              'STM32F407 as the main controller, handling sensor intake and motor output.',
              'OpenMV module for vision tasks — line and target detection.',
              'MPU6050 for heading and motion state, fused to limit drift.',
              'Ultrasonic sensors for close-range obstacle detection.',
              'PID control loop for motor speed and steering.',
              'Kalman filtering to combine noisy measurements into a usable state estimate.'
            ]
          },
          {
            label: 'My role',
            body: '[ADD ROLE — be specific about which subsystems you personally built.]'
          },
          {
            label: 'Technology',
            body: 'STM32F407 · OpenMV · MPU6050 · Ultrasonic Sensors · PID Control · Kalman Filter'
          },
          {
            label: 'Result',
            body: '[ADD RESULT — e.g. what the vehicle reliably did at the end, and under what conditions it failed.]'
          },
          {
            label: 'Reflection',
            body:
              'Tuning the control loop turned out to be most of the work. A theoretically correct ' +
              'controller still behaved badly until the filtering and the timing were right — ' +
              'which is the point at which sensor fusion stopped being an abstraction and became ' +
              'a practical debugging problem. ' +
              '[ADD REFLECTION — what you would change about the design.]'
          }
        ],
        links: [
          { label: 'GitHub', href: '[ADD LINK]', external: true }
        ]
      }
    },

    /* ── 03 ─────────────────────────────────────────────────────────────── */
    {
      title: 'AI Voice Projection Clock',
      category: 'AI · Embedded · Interaction',
      description:
        'An ESP32-S3 based intelligent assistant combining voice interaction, weather ' +
        'information, alarms, music, and a projected display.',
      image: 'assets/images/projects/voice-clock.svg',
      gif: 'assets/gifs/voice-clock.gif',
      technologies: ['ESP32-S3', 'TFT Display', 'DeepSeek API', 'Weather API', 'Embedded Development', 'Voice Interaction'],
      result: null,
      layout: 'flip',
      links: [
        // TODO: add a repository link if the code is public
        { label: 'GitHub', href: '[ADD LINK]', external: true }
      ],
      detail: {
        lead:
          'What if a bedside clock could just answer you? A voice-driven assistant that puts the ' +
          'information you ask for onto a projected display.',
        figcaption: 'Device and projected display — replace with your own photo.',
        sections: [
          {
            label: 'Overview',
            body:
              'A compact desktop device built on the ESP32-S3 that listens for voice input, ' +
              'fetches a response, and presents the answer on both an on-board TFT display and a ' +
              'projected surface.'
          },
          {
            label: 'Problem',
            body:
              'Alarm clocks are rigid — they show what they were programmed to show. Checking the ' +
              'weather or changing an alarm means picking up a phone, which at 7am is exactly the ' +
              'behaviour you are trying to avoid.'
          },
          {
            label: 'Approach',
            body: [
              'ESP32-S3 as the main board, chosen for its wireless capability and headroom for audio work.',
              'Voice input captured and passed to the DeepSeek API for the conversational response.',
              'Weather API integrated so current conditions are available on request.',
              'TFT display for close-range output; projection for a readable view across a room.',
              'Alarm and music playback handled on-device.'
            ]
          },
          {
            label: 'My role',
            body: '[ADD ROLE — which of hardware, firmware, API integration, and enclosure did you build?]'
          },
          {
            label: 'Technology',
            body: 'ESP32-S3 · TFT Display · DeepSeek API · Weather API · Embedded Development · Voice Interaction'
          },
          {
            label: 'Result',
            body: '[ADD RESULT — what the working prototype could do, and what it could not.]'
          },
          {
            label: 'Reflection',
            body:
              'The interaction design mattered more than the model. The device was only useful ' +
              'once the latency between speaking and seeing an answer was short enough to feel ' +
              'like a conversation rather than a request. ' +
              '[ADD REFLECTION — what you would improve in a second version.]'
          }
        ],
        links: [
          { label: 'GitHub', href: '[ADD LINK]', external: true }
        ]
      }
    },

    /* ── 04 ─────────────────────────────────────────────────────────────── */
    {
      title: 'AI Education Application',
      category: 'AI · Product · Education',
      description:
        'An educational application designed to support children with special needs.',
      image: 'assets/images/projects/education-app.svg',
      gif: 'assets/gifs/education-app.gif',
      technologies: ['Application Development', 'User Testing', 'Interaction Design', 'Iteration'],
      result: null,
      layout: 'split',
      links: [
        // Verified: Noah's Ark official website
        { label: "Noah's Ark", href: 'https://www.noahsark.org.in/', external: true }
      ],
      detail: {
        lead:
          'Developed with Noah&rsquo;s Ark, a registered non-profit society in Kolkata working in ' +
          'special education. The clearest lesson from this project came from user testing rather ' +
          'than from development.',
        figcaption: 'Application and testing — replace with your own screenshots.',
        sections: [
          {
            label: 'Overview',
            body:
              'An educational application built to support children with special needs, developed ' +
              'as part of an AI application development internship with Noah&rsquo;s Ark.'
          },
          {
            label: 'Problem',
            body:
              'Educational tools are generally designed around a typical learner. For children with ' +
              'special needs, the assumptions built into those tools — pacing, feedback, how much ' +
              'is on screen at once — are often the part that does not work.'
          },
          {
            label: 'Approach',
            body: [
              'Participated in application testing and user testing sessions.',
              'Gathered feedback from observation and from the people running the sessions.',
              'Improved application interactions based on what the testing surfaced.',
              'Iterated on the design rather than treating the first version as finished.'
            ]
          },
          {
            label: 'My role',
            body: '[ADD ROLE — which parts of the application did you work on, and in what capacity?]'
          },
          {
            label: 'Technology',
            body: '[ADD TECHNOLOGY — only list what you actually worked with.]'
          },
          {
            label: 'Result',
            body:
              '[ADD RESULT — what improved after the iteration, in as specific terms as you can honestly support.]'
          },
          {
            label: 'Reflection',
            body:
              'Watching children use the application changed more than any design review did. ' +
              'Assumptions that seemed reasonable on paper turned out to be wrong in practice, ' +
              'and most of the meaningful improvements came from observing rather than guessing. ' +
              '[ADD REFLECTION — what you took away from the experience.]'
          }
        ],
        links: [
          { label: "Noah's Ark", href: 'https://www.noahsark.org.in/', external: true }
        ]
      }
    }
  ];


  /* ==========================================================================
     02. UTILITIES
     ========================================================================== */

  const $  = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  /** True when the visitor has asked the OS to reduce motion. */
  const prefersReducedMotion = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /**
   * Escape text before inserting it into innerHTML.
   * Project data is authored by hand rather than user-supplied, but escaping
   * keeps the rendering path safe if content is ever pulled from elsewhere.
   */
  const esc = (str) =>
    String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');

  /** A placeholder is any value still wrapped in [ … ] brackets. */
  const isPlaceholder = (value) =>
    typeof value === 'string' && /^\[[^\]]+\]$/.test(value.trim());


  /* ==========================================================================
     03. PROJECT RENDERING
     ========================================================================== */

  const projectsList = $('#projects-list');

  /**
   * Which projects currently have an animated GIF to show.
   *
   * A missing GIF cannot be probed over the network without producing exactly
   * the 404 this is meant to avoid — the browser logs a failed request whether
   * or not the code handles it. So availability is declared here instead.
   *
   * WORKFLOW — when you drop a file into assets/gifs/:
   *   1. add its project index to this set (0 = first project, 1 = second, …)
   *   2. that's it. The GIF layers over the poster image automatically.
   *
   * Until then the static poster is used and the layout is identical, minus the
   * "GIF" chip. Example once the first two are ready:
   *   const gifAvailable = new Set([0, 1]);
   */
  const gifAvailable = new Set([]);

  /**
   * Build the markup for one button/link in a project's action row.
   * A placeholder href renders as a disabled chip rather than a dead link, so
   * the site never ships a 404 while you are still filling in URLs.
   */
  function renderActionLink(link) {
    const ext = link.external !== false;
    const extAttrs = ext ? ' target="_blank" rel="noopener noreferrer"' : '';
    const extMark = ext ? '<span class="ext-mark" aria-hidden="true">↗</span>' : '';

    if (isPlaceholder(link.href)) {
      return (
        '<span class="btn btn--ghost" aria-disabled="true" ' +
        'title="Add this URL in script.js">' +
        esc(link.label) + ' — ' + esc(link.href) +
        '</span>'
      );
    }

    return (
      '<a class="btn btn--ghost" href="' + esc(link.href) + '"' + extAttrs + '>' +
      esc(link.label) + extMark +
      '</a>'
    );
  }

  /** Build the markup for one project entry. */
  function renderProject(project, index) {
    const num = String(index + 1).padStart(2, '0');
    const layoutClass =
      project.layout === 'wide'  ? ' project--wide'  :
      project.layout === 'flip'  ? ' project--flip'  : '';

    // --- media ------------------------------------------------------------
    // The GIF layers over the static image, which acts as its poster frame.
    // It is only emitted for projects listed in `gifAvailable`, so a project
    // with no animation never requests a file that does not exist.
    let media =
      '<img src="' + esc(project.image) + '" ' +
      'alt="' + esc(project.title) + ' project visual" ' +
      'width="1200" height="750" loading="lazy" decoding="async">';

    const hasGif = Boolean(project.gif) && gifAvailable.has(index);

    let chip = '';
    if (hasGif) {
      chip = '<span class="project__media-chip">GIF</span>';
      media +=
        '<img class="project__gif" src="' + esc(project.gif) + '" ' +
        'alt="' + esc(project.title) + ' interaction animation" ' +
        'loading="lazy" decoding="async">';
    }

    // --- technology chips -------------------------------------------------
    const chips = project.technologies && project.technologies.length
      ? '<ul class="chips">' +
          project.technologies.map((t) => '<li>' + esc(t) + '</li>').join('') +
        '</ul>'
      : '';

    // --- optional flow strip ---------------------------------------------
    const flow = project.flow && project.flow.length
      ? '<ul class="flow">' +
          project.flow.map((step) => '<li>' + esc(step) + '</li>').join('') +
        '</ul>'
      : '';

    // --- optional outcome line -------------------------------------------
    const result = project.result
      ? '<p class="project__result">' +
          '<span class="label">Outcome</span>' + esc(project.result) +
        '</p>'
      : '';

    // --- action row -------------------------------------------------------
    const actions = project.links && project.links.length
      ? '<div class="project__actions">' +
          project.links.map(renderActionLink).join('') +
          // Always offer the case study when there is detail content for it.
          (project.detail
            ? '<button class="link-arrow-host" type="button" ' +
              'data-project-index="' + index + '">' +
              'Case study<span class="link-arrow" aria-hidden="true">→</span>' +
              '</button>'
            : '') +
        '</div>'
      : '';

    return (
      '<article class="project' + layoutClass + '" id="project-' + num + '">' +
        '<header class="project__head">' +
          '<span class="figure">' + num + '</span>' +
          '<span class="label">' + esc(project.category) + '</span>' +
        '</header>' +

        '<div class="project__spread">' +
          '<div class="project__media reveal reveal--media">' + chip + media + '</div>' +

          '<div class="project__body reveal">' +
            '<h3 class="project__title">' + esc(project.title) + '</h3>' +
            '<p class="project__desc">' + esc(project.description) + '</p>' +
            result +
            chips +
            flow +
            actions +
          '</div>' +
        '</div>' +
      '</article>'
    );
  }

  /** Render every project into the page. */
  function renderProjects() {
    if (!projectsList) return;
    projectsList.innerHTML = projects.map(renderProject).join('');
  }


  /* ==========================================================================
     04. CASE-STUDY MODAL
     --------------------------------------------------------------------------
     Uses the native <dialog> element, so focus trapping, page inertness and
     Esc-to-close come for free. We only manage: which project is open, the
     content, the body scroll lock, and restoring focus on close.
     ========================================================================== */

  const modal       = $('#project-modal');
  const modalBody   = $('#modal-content');
  const modalEyebrow = $('#modal-eyebrow');
  const supportsDialog = modal && typeof modal.showModal === 'function';

  /** Remember what had focus, so it can be restored on close. */
  let lastFocused = null;

  /** Render one <dt>/<dd> row of the case study. */
  function renderSection(section) {
    let body;

    if (Array.isArray(section.body)) {
      body = '<ul>' + section.body.map((item) => '<li>' + esc(item) + '</li>').join('') + '</ul>';
    } else {
      body = '<p>' + esc(section.body) + '</p>';
    }

    return (
      '<div class="case__row">' +
        '<dt>' + esc(section.label) + '</dt>' +
        '<dd>' + body + '</dd>' +
      '</div>'
    );
  }

  /** Build the full case-study markup for a project. */
  function renderCaseStudy(project, index) {
    const num = String(index + 1).padStart(2, '0');
    const detail = project.detail || {};

    const lead = detail.lead
      ? '<p class="modal__lead">' + esc(detail.lead) + '</p>'
      : '';

    const figure =
      '<figure class="modal__figure">' +
        '<img src="' + esc(project.image) + '" ' +
        'alt="' + esc(project.title) + ' case study visual" ' +
        'width="1200" height="750" loading="lazy" decoding="async">' +
        (detail.figcaption
          ? '<figcaption>' + esc(detail.figcaption) + '</figcaption>'
          : '') +
      '</figure>';

    const sections = detail.sections && detail.sections.length
      ? '<dl class="case">' + detail.sections.map(renderSection).join('') + '</dl>'
      : '';

    // The modal's link row falls back to the entry's own links.
    const links = detail.links || project.links || [];
    const actions = links.length
      ? '<div class="modal__actions">' + links.map(renderActionLink).join('') + '</div>'
      : '';

    return (
      '<p class="label">' + num + ' — ' + esc(project.category) + '</p>' +
      '<h2 class="modal__title" id="modal-title">' + esc(project.title) + '</h2>' +

      '<div class="modal__meta">' +
        (project.technologies || []).slice(0, 4)
          .map((t) => '<span class="label">' + esc(t) + '</span>').join('') +
      '</div>' +

      figure +
      lead +
      sections +
      actions
    );
  }

  function openModal(index) {
    const project = projects[index];
    if (!project || !project.detail || !supportsDialog) return;

    lastFocused = document.activeElement;

    modalBody.innerHTML = renderCaseStudy(project, index);
    if (modalEyebrow) modalEyebrow.textContent = 'Case study';

    modal.showModal();
    document.body.classList.add('is-locked');

    // Move focus into the dialog. Focusing the close button keeps the exit
    // route immediately reachable for keyboard and screen-reader users.
    const closeBtn = $('[data-modal-close]', modal);
    if (closeBtn) {
      closeBtn.focus({ preventScroll: true });
    } else {
      modal.focus({ preventScroll: true });
    }

    // Reset the internal scroll so a previously opened case study does not
    // leave the next one scrolled halfway down.
    const scroller = $('.modal__scroll', modal);
    if (scroller) scroller.scrollTop = 0;
  }

  /**
   * Close any open disclosure — modal or drawer — and release the scroll lock.
   * The 'close' event on <dialog> fires asynchronously, so releasing the lock
   * from the event handler alone would leave the page frozen for a frame (or
   * longer if a second dialog were opened in that window). Doing it here as
   * well makes the unlock synchronous with the user's action.
   */
  function releaseScrollLock() {
    // Anything still holding the page open? Then keep it locked.
    const drawerOpen = document.body.classList.contains('has-drawer');
    const modalOpen = supportsDialog && modal.open;
    if (!drawerOpen && !modalOpen) {
      document.body.classList.remove('is-locked');
    }
  }

  function closeModal() {
    if (!supportsDialog || !modal.open) return;
    modal.close();
    releaseScrollLock();
  }

  function initModal() {
    if (!supportsDialog) {
      // Without <dialog> support, remove the case-study buttons so nothing
      // looks clickable but does nothing.
      $$('[data-project-index]').forEach((btn) => btn.remove());
      return;
    }

    // Open buttons (delegated, since projects render dynamically).
    document.addEventListener('click', (e) => {
      const trigger = e.target.closest('[data-project-index]');
      if (trigger) {
        openModal(Number(trigger.dataset.projectIndex));
      }
    });

    // Close button.
    modal.addEventListener('click', (e) => {
      if (e.target.closest('[data-modal-close]')) closeModal();
    });

    // Click on the backdrop. The dialog element itself receives clicks that
    // land outside its content box.
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    // Fires for Esc as well as programmatic close — the single place that
    // cleans up, so state can never drift out of sync.
    modal.addEventListener('close', () => {
      modalBody.innerHTML = '';

      // Only unlock if the drawer is not also holding the page.
      releaseScrollLock();

      if (lastFocused && document.contains(lastFocused)) {
        lastFocused.focus({ preventScroll: true });
      }
    });
  }


  /* ==========================================================================
     05. NAVIGATION
     ========================================================================== */

  const header = $('#site-header');

  /** Compact the header once the page has scrolled, and clear it at the top. */
  function initHeaderState() {
    if (!header) return;

    let ticking = false;

    const update = () => {
      header.classList.toggle('is-scrolled', window.scrollY > 24);
      ticking = false;
    };

    window.addEventListener(
      'scroll',
      () => {
        if (!ticking) {
          ticking = true;
          window.requestAnimationFrame(update);
        }
      },
      { passive: true }
    );

    update();
  }

  /**
   * Highlight the nav link for the section currently in view.
   * rootMargin biases the "active" band toward the upper third of the
   * viewport, which matches where people read rather than where the section
   * technically starts.
   */
  function initActiveSection() {
    const links = $$('.nav__link');
    if (!links.length || !('IntersectionObserver' in window)) return;

    const sections = links
      .map((link) => {
        const id = link.getAttribute('href');
        return id && id.startsWith('#') ? document.querySelector(id) : null;
      })
      .filter(Boolean);

    if (!sections.length) return;

    const visible = new Set();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        });

        // Choose the topmost visible section so the indicator stays stable
        // when two sections are on screen at once.
        let current = null;
        sections.forEach((section) => {
          if (visible.has(section.id) && !current) current = section.id;
        });

        links.forEach((link) => {
          link.classList.toggle(
            'is-active',
            current !== null && link.getAttribute('href') === '#' + current
          );
        });
      },
      { rootMargin: '-15% 0px -60% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
  }

  /**
   * Smooth scrolling is handled by CSS (scroll-behavior + scroll-padding-top).
   * This adds an explicit handler only so that focus moves to the target too —
   * otherwise keyboard users stay where they were and tab back through the nav.
   * The reduced-motion case is respected.
   */
  function initSmoothScroll() {
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;

      const hash = link.getAttribute('href');
      if (!hash || hash === '#') return;

      const target = document.querySelector(hash);
      if (!target) return;

      e.preventDefault();

      target.scrollIntoView({
        behavior: prefersReducedMotion() ? 'auto' : 'smooth',
        block: 'start'
      });

      // Make the destination focusable just long enough to receive focus,
      // without leaving a stray tabindex in the document.
      if (!target.hasAttribute('tabindex')) {
        target.setAttribute('tabindex', '-1');
        target.addEventListener('blur', function handler() {
          target.removeAttribute('tabindex');
          target.removeEventListener('blur', handler);
        });
      }
      target.focus({ preventScroll: true });

      // Keep the URL shareable without adding a jump to history.
      if (window.history && window.history.replaceState) {
        window.history.replaceState(null, '', hash);
      }
    });
  }


  /* ==========================================================================
     06. MOBILE DRAWER
     ========================================================================== */

  function initDrawer() {
    const toggle = $('#nav-toggle');
    const drawer = $('#mobile-drawer');
    if (!toggle || !drawer) return;

    // The breakpoint at which the drawer is replaced by the desktop nav.
    const DESKTOP = window.matchMedia('(min-width: 901px)');

    const isOpen = () => toggle.getAttribute('aria-expanded') === 'true';

    function open() {
      // Clear `hidden` first so the element is laid out and can transition.
      drawer.hidden = false;
      drawer.removeAttribute('aria-hidden');

      // Force a reflow so the transition starts from the closed state rather
      // than being collapsed into the same frame as `hidden = false`.
      void drawer.offsetWidth;

      drawer.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', 'Close menu');
      document.body.classList.add('is-locked', 'has-drawer');

      // The first link is the natural entry point for keyboard and
      // screen-reader users.
      const first = $('.drawer__link', drawer);
      if (first) first.focus({ preventScroll: true });
    }

    function close() {
      drawer.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
      document.body.classList.remove('has-drawer');

      // Mark it inert immediately so the closed drawer cannot be tabbed into,
      // even while the fade-out is still playing.
      drawer.setAttribute('aria-hidden', 'true');

      // Remove from the layout once the transition has finished.
      const delay = prefersReducedMotion() ? 0 : 340;
      window.setTimeout(() => {
        if (!isOpen()) drawer.hidden = true;
      }, delay);

      releaseScrollLock();
    }

    toggle.addEventListener('click', () => (isOpen() ? close() : open()));

    // Any link inside the drawer navigates — close on the way out.
    // `data-close-drawer` marks anchors whose target is on this page but which
    // need the drawer dismissed so the destination is actually visible.
    $$('a', drawer).forEach((link) => link.addEventListener('click', close));

    // Close when the viewport grows into desktop territory.
    const onBreakpoint = (e) => { if (e.matches && isOpen()) close(); };
    if (DESKTOP.addEventListener) DESKTOP.addEventListener('change', onBreakpoint);
    else DESKTOP.addListener(onBreakpoint);

    // Escape closes the drawer. The modal handles its own Esc via <dialog>.
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen()) {
        close();
        toggle.focus({ preventScroll: true });
      }
    });
  }


  /* ==========================================================================
     07. EXPERIENCE TIMELINE
     --------------------------------------------------------------------------
     Accordion behaviour: opening one entry closes the others so the section
     never grows tall enough to bury the projects below it.
     ========================================================================== */

  function initTimeline() {
    const items = $$('.timeline__item');
    if (!items.length) return;

    items.forEach((item) => {
      const toggle = $('.timeline__toggle', item);
      if (!toggle) return;

      toggle.addEventListener('click', () => {
        const willOpen = !item.classList.contains('is-open');

        // Close every entry, then open this one if it was closed.
        items.forEach((other) => {
          other.classList.remove('is-open');
          const otherToggle = $('.timeline__toggle', other);
          if (otherToggle) otherToggle.setAttribute('aria-expanded', 'false');
        });

        if (willOpen) {
          item.classList.add('is-open');
          toggle.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }


  /* ==========================================================================
     08. SCROLL REVEAL
     --------------------------------------------------------------------------
     Content is authored visible. The `js-reveal` class on <html> is what
     switches elements to their hidden starting state, and it is only added once
     IntersectionObserver has been confirmed — so if scripting fails, nothing is
     ever stuck at opacity 0.

     A reveal is a nice-to-have, so it must never be able to hide content
     permanently. Three independent safeguards guarantee that:

       1. Elements already in the viewport at load are revealed immediately,
          without waiting for an observer callback.
       2. A page-wide safety timeout reveals everything still hidden after a few
          seconds, covering any case where observer callbacks are delayed,
          throttled or dropped (slow devices, background tabs, print, automation).
       3. The reduced-motion path skips the effect entirely.

     Any one of these is sufficient. Together they make it impossible for a
     visitor to be left looking at blank sections.
     ========================================================================== */

  /** How long to wait before revealing everything regardless of scroll. */
  const REVEAL_SAFETY_MS = 2500;

  function initReveal() {
    const targets = $$('.reveal');
    if (!targets.length) return;

    // Reduced motion: leave everything in its natural, visible state.
    if (prefersReducedMotion() || !('IntersectionObserver' in window)) return;

    document.documentElement.classList.add('js-reveal');

    const reveal = (el) => el.classList.add('is-visible');

    /** Reveal everything that has not been revealed yet. */
    const revealAll = () => targets.forEach(reveal);

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          reveal(entry.target);
          obs.unobserve(entry.target);  // reveal once, then stop watching
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.06 }
    );

    targets.forEach((el) => {
      const rect = el.getBoundingClientRect();
      // Already on screen (or above it) at load — reveal without an observer.
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        reveal(el);
      } else {
        observer.observe(el);
      }
    });

    // Safety net (2). Also runs on first user interaction so the page can never
    // feel stuck, and on print so a printed page is not blank.
    const safety = window.setTimeout(revealAll, REVEAL_SAFETY_MS);

    window.addEventListener('beforeprint', () => {
      window.clearTimeout(safety);
      revealAll();
    }, { once: true });

    // If the visitor starts interacting, they are clearly engaged — stop waiting
    // out the timer.
    ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((evt) => {
      window.addEventListener(evt, () => {
        window.clearTimeout(safety);
        window.setTimeout(revealAll, 600);
      }, { once: true, passive: true });
    });
  }


  /* ==========================================================================
     09. CV REQUEST FORM
     --------------------------------------------------------------------------
     The CV is deliberately not published on the site. Visitors submit their
     email and it is sent to them, which keeps the document out of search
     engines and away from scrapers.

     ─────────────────────────────────────────────────────────────────────────
     TO MAKE IT ACTUALLY SEND MAIL, pick ONE of these and set CV_ENDPOINT below.
     ─────────────────────────────────────────────────────────────────────────

     A) Formspree (easiest, free tier, no backend)
        1. Create a form at https://formspree.io and put your CV file in it as
           an attachment on the auto-reply, or forward the notification by hand.
        2. Set:
             const CV_ENDPOINT = 'https://formspree.io/f/XXXXXXXX';

     B) Google Apps Script (free, sends straight from your Gmail)
        1. Create a new Apps Script bound to a Sheet, and expose it as a web app
           ("Execute as: me", "Who has access: anyone").
        2. Have the script append a row and call GmailApp.sendEmail with the PDF
           attached.
        3. Set:
             const CV_ENDPOINT = 'https://script.google.com/macros/s/XXXX/exec';

     C) Netlify / Cloudflare / Vercel function (if you outgrow the above)
        Post the same JSON body to your function's URL.

     Until CV_ENDPOINT is set, the form validates the address and then opens the
     visitor's mail client pre-addressed to you — so the path to a real request
     never dead-ends, and nothing appears broken.
     ========================================================================== */

  const CV_ENDPOINT = '';        // ← paste a URL from the options above
  const CV_OWNER_EMAIL = 'ianyeung818@gmail.com';

  /** Very light email shape check. Real validation happens server-side. */
  function looksLikeEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
  }

  function initCvRequest() {
    const form = $('#cv-form');
    if (!form) return;

    const emailInput = $('#cv-email', form);
    const noteInput = $('#cv-note', form);
    const trapInput = $('#cv-website', form);
    const submitBtn = $('#cv-submit', form);
    const statusEl = $('#cv-status', form);
    const errorEl = $('#cv-email-error', form);

    /** Show a message in the status region. `state` drives the styling. */
    function setStatus(message, state) {
      statusEl.innerHTML = message;
      statusEl.dataset.state = state;
      statusEl.hidden = false;
    }

    function clearStatus() {
      statusEl.hidden = true;
      statusEl.textContent = '';
      delete statusEl.dataset.state;
    }

    function setEmailError(message) {
      if (message) {
        emailInput.setAttribute('aria-invalid', 'true');
        errorEl.textContent = message;
        errorEl.hidden = false;
      } else {
        emailInput.removeAttribute('aria-invalid');
        errorEl.textContent = '';
        errorEl.hidden = true;
      }
    }

    function setBusy(busy) {
      submitBtn.disabled = busy;
      emailInput.disabled = busy;
      if (noteInput) noteInput.disabled = busy;
      submitBtn.textContent = busy ? 'Sending…' : 'Send request';
    }

    /** Fallback path: hand off to the visitor's own mail client. */
    function openMailFallback(email, note) {
      const subject = 'CV request from ' + email;
      const body = [
        'Please send your CV.',
        '',
        'My email: ' + email,
        note ? 'Note: ' + note : '',
      ].filter(Boolean).join('\n');

      const href = 'mailto:' + CV_OWNER_EMAIL +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body);

      window.location.href = href;

      setStatus(
        'Your mail app should be opening with the request ready to send. ' +
        'If nothing happened, email me directly at ' +
        '<a href="mailto:' + CV_OWNER_EMAIL + '">' + CV_OWNER_EMAIL + '</a>.',
        'success'
      );
    }

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      clearStatus();

      const email = emailInput.value.trim();
      const note = noteInput ? noteInput.value.trim() : '';

      // Honeypot: if it is filled, silently pretend to succeed so the bot
      // learns nothing, and send nothing.
      if (trapInput && trapInput.value.trim() !== '') {
        setStatus('Thanks — your request has been noted.', 'success');
        return;
      }

      if (!email) {
        setEmailError('Please enter your email address.');
        emailInput.focus();
        return;
      }

      if (!looksLikeEmail(email)) {
        setEmailError('That does not look like a valid email address.');
        emailInput.focus();
        return;
      }

      setEmailError(null);

      // No endpoint configured yet — use the mail-client fallback.
      if (!CV_ENDPOINT) {
        openMailFallback(email, note);
        return;
      }

      setBusy(true);

      try {
        const response = await fetch(CV_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ email, note, source: 'portfolio' }),
        });

        if (!response.ok) throw new Error('Request failed: ' + response.status);

        form.reset();
        setStatus(
          'Thanks — I&rsquo;ve got your address and will send the CV over shortly. ' +
          'If anything goes wrong, reach me at ' +
          '<a href="mailto:' + CV_OWNER_EMAIL + '">' + CV_OWNER_EMAIL + '</a>.',
          'success'
        );
      } catch (err) {
        // Never leave the visitor stuck: offer the direct route instead.
        setStatus(
          'Something went wrong sending that. You can email me directly at ' +
          '<a href="mailto:' + CV_OWNER_EMAIL + '">' + CV_OWNER_EMAIL + '</a> ' +
          'and I&rsquo;ll send the CV back.',
          'error'
        );
      } finally {
        setBusy(false);
      }
    });

    // Clear the error as soon as the visitor starts correcting it.
    emailInput.addEventListener('input', () => {
      if (emailInput.getAttribute('aria-invalid') === 'true') setEmailError(null);
    });
  }


  /* ==========================================================================
     10. FOOTER YEAR
     The footer states 2026 explicitly; this keeps the copyright line honest if
     the site outlives that year. The visible text stays static in the HTML so
     it is correct without JavaScript.
     ========================================================================== */

  function initFooterYear() {
    const el = $('.footer__top .label');
    if (!el) return;

    const year = new Date().getFullYear();
    if (year > 2026) el.textContent = '© ' + year + ' Ziyi Yang';
  }


  /* ==========================================================================
     BOOTSTRAP
     ========================================================================== */

  function init() {
    renderProjects();  // must run before initModal, which binds to its buttons
    initModal();
    initHeaderState();
    initActiveSection();
    initSmoothScroll();
    initDrawer();
    initTimeline();
    initReveal();
    initCvRequest();
    initFooterYear();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
