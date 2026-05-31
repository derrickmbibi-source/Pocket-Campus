let currentStep = 1;

  function showStep(n) {
    document.querySelectorAll('.form-step').forEach(s => s.style.display = 'none');
    document.getElementById('step-' + n).style.display = 'block';

    document.querySelectorAll('.step').forEach((s, i) => {
      s.classList.remove('active', 'done');
      if (i + 1 < n) s.classList.add('done');
      if (i + 1 === n) s.classList.add('active');
    });

    currentStep = n;
  }

  function nextStep(from) {
    const err = document.getElementById('step' + from + '-error');
    err.style.display = 'none';

    if (from === 1) {
      const name = document.getElementById('fullname').value.trim();
      const gender = document.getElementById('gender').value;
      const username = document.getElementById('username').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const email = document.getElementById('school-email').value.trim();
      if (!name || !gender || !username || !phone || !email) {
        err.textContent = 'Please fill in all fields before continuing.';
        err.style.display = 'block'; return;
      }
      if (!email.includes('@')) {
        err.textContent = 'Please enter a valid email address.';
        err.style.display = 'block'; return;
      }
    }

    if (from === 2) {
      const matric = document.getElementById('matric').value.trim();
      const dept = document.getElementById('department').value;
      const level = document.getElementById('level').value;
      if (!matric || !dept || !level) {
        err.textContent = 'Please fill in all fields before continuing.';
        err.style.display = 'block'; return;
      }
    }

    showStep(from + 1);
  }

  function prevStep(from) { showStep(from - 1); }

  function togglePwd(id, btn) {
    const input = document.getElementById(id);
    const svg = btn.querySelector('svg');
    if (input.type === 'password') {
      input.type = 'text';
      svg.innerHTML = `<path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>`;
    } else {
      input.type = 'password';
      svg.innerHTML = `<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>`;
    }
  }

  function checkStrength(val) {
    const bars = document.querySelectorAll('.s-bar');
    const label = document.getElementById('strength-label');
    let score = 0;
    if (val.length >= 8) score++;
    if (/[A-Z]/.test(val)) score++;
    if (/[0-9]/.test(val)) score++;
    if (/[^A-Za-z0-9]/.test(val)) score++;

    const colors = ['#f87171','#fb923c','#facc15','#10b981'];
    const labels = ['Weak','Fair','Good','Strong'];
    bars.forEach((b, i) => b.style.background = i < score ? colors[score - 1] : 'var(--border)');
    label.textContent = score > 0 ? labels[score - 1] : '';
    label.style.color = score > 0 ? colors[score - 1] : 'var(--text-muted)';
  }

  const signupForm = document.getElementById('signupForm');
  if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const pw = document.getElementById('password').value;
    const cpw = document.getElementById('confirm-password').value;
    const err = document.getElementById('step3-error');
    if (pw.length < 8) {
      err.textContent = 'Password must be at least 8 characters.';
      err.style.display = 'block'; return;
    }
    if (pw !== cpw) {
      err.textContent = 'Passwords do not match.';
      err.style.display = 'block'; return;
    }
    err.style.display = 'none';
    // Redirect to course registration
    window.location.href = 'Course registration.html';
    });
  }


  
  function togglePwd(id, btn) {
    const input = document.getElementById(id);
    const svg = btn.querySelector('svg');
    if (input.type === 'password') {
      input.type = 'text';
      svg.innerHTML = `<path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>`;
    } else {
      input.type = 'password';
      svg.innerHTML = `<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>`;
    }
  }

  function fillDemo(id, pw) {
    document.getElementById('identifier').value = id;
    document.getElementById('password').value = pw;
  }

  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const id = document.getElementById('identifier').value.trim();
    const pw = document.getElementById('password').value.trim();
    const err = document.getElementById('pwd-error');
    if (!id || !pw) {
      err.textContent = 'Please fill in all fields.';
      err.style.display = 'block';
      return;
    }
    err.style.display = 'none';
    // Simulate login — redirect to course registration
    window.location.href = 'Course registration.html';
    });
  }

  // Demo button hover
  document.querySelectorAll('.demo-btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => btn.style.borderColor = 'rgba(16,185,129,0.4)');
    btn.addEventListener('mouseleave', () => btn.style.borderColor = 'var(--border)');
  });


  
  function showStep(n) {
    document.querySelectorAll('.form-step').forEach(s => s.style.display = 'none');
    document.getElementById('step-' + n).style.display = 'block';
    document.querySelectorAll('.step').forEach((s, i) => {
      s.classList.remove('active','done');
      if (i + 1 < n) s.classList.add('done');
      if (i + 1 === n) s.classList.add('active');
    });
  }

  function nextStep(from) {
    const err = document.getElementById('step' + from + '-error');
    err.style.display = 'none';
    if (from === 1) {
      const name = document.getElementById('fullname').value.trim();
      const gender = document.getElementById('gender').value;
      const username = document.getElementById('username').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const email = document.getElementById('work-email').value.trim();
      if (!name || !gender || !username || !phone || !email) {
        err.textContent = 'Please fill in all fields before continuing.';
        err.style.display = 'block'; return;
      }
      if (!email.includes('@')) {
        err.textContent = 'Please enter a valid email address.';
        err.style.display = 'block'; return;
      }
    }
    showStep(from + 1);
  }

  function prevStep(from) { showStep(from - 1); }

  function togglePwd(id, btn) {
    const input = document.getElementById(id);
    const svg = btn.querySelector('svg');
    if (input.type === 'password') {
      input.type = 'text';
      svg.innerHTML = `<path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>`;
    } else {
      input.type = 'password';
      svg.innerHTML = `<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>`;
    }
  }

  function checkStrength(val) {
    const bars = document.querySelectorAll('.s-bar');
    const label = document.getElementById('strength-label');
    let score = 0;
    if (val.length >= 8) score++;
    if (/[A-Z]/.test(val)) score++;
    if (/[0-9]/.test(val)) score++;
    if (/[^A-Za-z0-9]/.test(val)) score++;
    const colors = ['#f87171','#fb923c','#facc15','#10b981'];
    const labels = ['Weak','Fair','Good','Strong'];
    bars.forEach((b, i) => b.style.background = i < score ? colors[score - 1] : 'var(--border)');
    label.textContent = score > 0 ? labels[score - 1] : '';
    label.style.color = score > 0 ? colors[score - 1] : 'var(--text-muted)';
  }

  const lecturerForm = document.getElementById('lecturerForm');
  if (lecturerForm) {
    lecturerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const course = document.getElementById('course').value;
    const pw = document.getElementById('password').value;
    const cpw = document.getElementById('confirm-password').value;
    const err = document.getElementById('step2-error');
    if (!course) { err.textContent = 'Please select a course.'; err.style.display = 'block'; return; }
    if (pw.length < 8) { err.textContent = 'Password must be at least 8 characters.'; err.style.display = 'block'; return; }
    if (pw !== cpw) { err.textContent = 'Passwords do not match.'; err.style.display = 'block'; return; }
    err.style.display = 'none';
    alert('Lecturer account created successfully! Please await admin approval.');
    window.location.href = 'lecturer-login.html';
    });
  }


  
  function togglePwd(id, btn) {
    const input = document.getElementById(id);
    const svg = btn.querySelector('svg');
    if (input.type === 'password') {
      input.type = 'text';
      svg.innerHTML = `<path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>`;
    } else {
      input.type = 'password';
      svg.innerHTML = `<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>`;
    }
  }

  function fillDemo(email, pw) {
    document.getElementById('email').value = email;
    document.getElementById('password').value = pw;
  }

  const lecturerLoginForm = document.getElementById('lecturerLoginForm');
  if (lecturerLoginForm) {
    lecturerLoginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const pw = document.getElementById('password').value.trim();
    const err = document.getElementById('form-error');
    if (!email || !pw) {
      err.textContent = 'Please fill in all fields.';
      err.style.display = 'block';
      return;
    }
    if (!email.includes('@')) {
      err.textContent = 'Please enter a valid email address.';
      err.style.display = 'block';
      return;
    }
    err.style.display = 'none';
    alert('Login successful! Redirecting to lecturer dashboard…');
    window.location.href = 'lecturers_dashboard.html';
    });
  }


  
  // ── Course data ──
  function makeCourse(code, name, units, type) {
    return { code, name, units, type };
  }

  function buildDeptCourses(prefix, topics) {
    const levels = [100, 200, 300, 400];
    const titleVariants = {
      100: ['Fundamentals', 'Foundations', 'Introduction', 'Basics'],
      200: ['Principles', 'Systems', 'Methods', 'Techniques'],
      300: ['Advanced', 'Applications', 'Theory', 'Design'],
      400: ['Capstone', 'Strategy', 'Management', 'Integration'],
    };
    return levels.reduce((acc, level) => {
      acc[level] = {
        1: topics.map((topic, index) => makeCourse(
          `${prefix}${level}${index + 1}`,
          `${topic} ${titleVariants[level][index]}`,
          index < 2 ? 3 : 2,
          index < 2 ? 'compulsory' : 'elective'
        )),
        2: topics.map((topic, index) => makeCourse(
          `${prefix}${level}${index + 5}`,
          `${topic} ${titleVariants[level][index]} II`,
          index < 2 ? 3 : 2,
          index < 2 ? 'compulsory' : 'elective'
        )),
      };
      return acc;
    }, {});
  }

  const departmentTemplates = {
    'business-administration': {
      prefix: 'BBA',
      topics: ['Business Management', 'Financial Accounting', 'Marketing', 'Leadership'],
    },
    'political-science': {
      prefix: 'PSC',
      topics: ['Political Theory', 'International Relations', 'Public Policy', 'Conflict Studies'],
    },
    'accounting-finance-taxation': {
      prefix: 'AFT',
      topics: ['Financial Reporting', 'Taxation', 'Audit Practice', 'Corporate Finance'],
    },
    economics: {
      prefix: 'ECO',
      topics: ['Microeconomics', 'Macroeconomics', 'Econometrics', 'Development Economics'],
    },
    psychology: {
      prefix: 'PSY',
      topics: ['Cognitive Psychology', 'Social Psychology', 'Clinical Psychology', 'Research Methods'],
    },
    criminology: {
      prefix: 'CRM',
      topics: ['Criminology', 'Security Studies', 'Justice Systems', 'Conflict Resolution'],
    },
    'mass-communication': {
      prefix: 'MCM',
      topics: ['Media Writing', 'Advertising', 'Public Relations', 'Media Research'],
    },
    'journalism-media-studies': {
      prefix: 'JMS',
      topics: ['News Reporting', 'Feature Writing', 'Media Ethics', 'Investigative Journalism'],
    },
    'broadcasting-media-production': {
      prefix: 'BMP',
      topics: ['Studio Production', 'Audio Engineering', 'Video Editing', 'Broadcast Technology'],
    },
    'film-media-studies': {
      prefix: 'FMS',
      topics: ['Film Theory', 'Screenwriting', 'Film Production', 'Cinema Studies'],
    },
    'biological-sciences': {
      prefix: 'BIS',
      topics: ['Cell Biology', 'Genetics', 'Biotechnology', 'Microbiology'],
    },
    'biochemistry-industrial-chemistry': {
      prefix: 'BIC',
      topics: ['Organic Chemistry', 'Biochemistry', 'Industrial Chemistry', 'Analytical Chemistry'],
    },
    'computer-science': {
      prefix: 'CSC',
      topics: ['Software Development', 'Data Structures', 'Computer Architecture', 'Network Systems'],
    },
    cybersecurity: {
      prefix: 'CYB',
      topics: ['Network Security', 'Cryptography', 'Ethical Hacking', 'Risk Management'],
    },
    'information-management': {
      prefix: 'IMN',
      topics: ['Information Systems', 'Data Governance', 'Records Management', 'Knowledge Management'],
    },
    'software-engineering': {
      prefix: 'SWE',
      topics: ['Software Design', 'Requirements Engineering', 'Testing & QA', 'System Architecture'],
    },
    crs: {
      prefix: 'CRS',
      topics: ['Christian Ethics', 'Bible Studies', 'Christian Doctrine', 'Religious Education'],
    },
    'educational-management': {
      prefix: 'EDM',
      topics: ['School Administration', 'Curriculum Development', 'Educational Planning', 'Leadership'],
    },
    architecture: {
      prefix: 'ARC',
      topics: ['Design Studio', 'Building Technology', 'Architectural History', 'Environmental Design'],
    },
    'public-law': {
      prefix: 'PUB',
      topics: ['Constitutional Law', 'Administrative Law', 'Human Rights Law', 'Public Policy Law'],
    },
    'private-property-law': {
      prefix: 'PPL',
      topics: ['Property Law', 'Contract Law', 'Equity & Trusts', 'Real Estate Law'],
    },
    'nursing-science': {
      prefix: 'NRS',
      topics: ['Anatomy & Physiology', 'Nursing Fundamentals', 'Community Health', 'Pharmacology'],
    },
    'medical-laboratory-science': {
      prefix: 'MLS',
      topics: ['Clinical Chemistry', 'Hematology', 'Medical Microbiology', 'Laboratory Techniques'],
    },
    'basic-medical-sciences': {
      prefix: 'BMS',
      topics: ['Anatomy', 'Physiology', 'Biochemistry', 'Pathology'],
    },
    'allied-health-services': {
      prefix: 'AHS',
      topics: ['Medical Imaging', 'Physiotherapy', 'Occupational Therapy', 'Health Promotion'],
    },
  };

  const courseData = Object.fromEntries(
    Object.entries(departmentTemplates).map(([dept, template]) => [dept, buildDeptCourses(template.prefix, template.topics)])
  );

  let selectedCourses = new Set();
  let currentSemester = 1;
  let currentLevel = '200';
  let currentDept = 'computer-science';

  function getCourses() {
    const data = courseData[currentDept];
    if (!data) return [];
    const levelData = data[currentLevel];
    if (!levelData) return [];
    return levelData[currentSemester] || [];
  }

  function filterCourses() {
    currentLevel = document.getElementById('level-filter').value;
    currentDept = document.getElementById('dept-filter').value;
    const search = document.getElementById('search-input').value.toLowerCase();
    renderCourses(search);
  }

  function switchSemester(sem, btn) {
    currentSemester = sem;
    document.querySelectorAll('.semester-tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('footer-sem').textContent = sem === 1 ? '1st' : '2nd';
    renderCourses();
  }

  function renderCourses(search = '') {
    const courses = getCourses();
    const container = document.getElementById('courses-container');

    if (!courses.length) {
      container.innerHTML = `<div class="courses-grid"><div class="no-results">No courses available for this selection.</div></div>`;
      return;
    }

    const compulsory = courses.filter(c => c.type === 'compulsory' && (!search || c.name.toLowerCase().includes(search) || c.code.toLowerCase().includes(search)));
    const elective = courses.filter(c => c.type === 'elective' && (!search || c.name.toLowerCase().includes(search) || c.code.toLowerCase().includes(search)));

    // Auto-select compulsory
    courses.filter(c => c.type === 'compulsory').forEach(c => selectedCourses.add(c.code));

    let html = '';

    if (compulsory.length) {
      html += `<div class="courses-section"><div class="section-title">Compulsory Courses</div><div class="courses-grid">`;
      compulsory.forEach(c => {
        html += buildCard(c, true);
      });
      html += `</div></div>`;
    }

    if (elective.length) {
      html += `<div class="courses-section"><div class="section-title">Elective Courses</div><div class="courses-grid">`;
      elective.forEach(c => {
        const sel = selectedCourses.has(c.code);
        html += buildCard(c, false, sel);
      });
      html += `</div></div>`;
    }

    if (!compulsory.length && !elective.length) {
      html = `<div class="courses-grid"><div class="no-results">No courses match your search.</div></div>`;
    }

    container.innerHTML = html;
    updateCounts();
  }

  function buildCard(c, isCompulsory, selected = false) {
    const cls = isCompulsory ? 'course-card compulsory selected' : `course-card${selected ? ' selected' : ''}`;
    const onclick = isCompulsory ? '' : `onclick="toggleCourse('${c.code}', this)"`;
    return `
      <div class="${cls}" ${onclick} data-code="${c.code}" data-units="${c.units}">
        <div class="card-top">
          <span class="course-code">${c.code}</span>
          <div class="check-box">
            <svg class="check-icon" width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6l3 3 5-5" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        <div class="course-name">${c.name}</div>
        <div class="card-meta">
          <span class="meta-tag meta-units">${c.units} unit${c.units > 1 ? 's' : ''}</span>
          <span class="meta-tag ${isCompulsory ? 'meta-type' : 'meta-elective'}">${isCompulsory ? 'Compulsory' : 'Elective'}</span>
        </div>
      </div>`;
  }

  function toggleCourse(code, card) {
    if (selectedCourses.has(code)) {
      selectedCourses.delete(code);
      card.classList.remove('selected');
    } else {
      selectedCourses.add(code);
      card.classList.add('selected');
    }
    updateCounts();
  }

  function updateCounts() {
    const courses = getCourses();
    let totalUnits = 0;
    let totalCourses = 0;

    courses.forEach(c => {
      if (selectedCourses.has(c.code)) {
        totalUnits += c.units;
        totalCourses++;
      }
    });

    document.getElementById('units-count').textContent = totalUnits;
    document.getElementById('footer-courses').textContent = totalCourses;
    document.getElementById('footer-units').textContent = totalUnits;

    const pct = Math.min(100, Math.round((totalUnits / 24) * 100));
    document.getElementById('units-fill').style.width = pct + '%';
    document.getElementById('units-status').textContent = pct + '%';

    const fill = document.getElementById('units-fill');
    if (totalUnits < 15) fill.style.background = 'linear-gradient(90deg, #f87171, #fb923c)';
    else if (totalUnits > 24) fill.style.background = 'linear-gradient(90deg, #f87171, #ef4444)';
    else fill.style.background = 'linear-gradient(90deg, var(--green), var(--green-light))';

    const btn = document.getElementById('register-btn');
    if (totalUnits >= 15 && totalUnits <= 24) {
      btn.disabled = false;
      btn.textContent = `Register ${totalCourses} Courses →`;
    } else if (totalUnits < 15) {
      btn.disabled = true;
      btn.textContent = `Need ${15 - totalUnits} more unit${15 - totalUnits !== 1 ? 's' : ''}`;
    } else {
      btn.disabled = true;
      btn.textContent = `Over limit by ${totalUnits - 24} unit${totalUnits - 24 !== 1 ? 's' : ''}`;
    }
  }

  function submitRegistration() {
    const courses = getCourses();
    const registered = courses.filter(c => selectedCourses.has(c.code));
    const totalUnits = registered.reduce((s, c) => s + c.units, 0);
    alert(`✅ Successfully registered ${registered.length} courses (${totalUnits} units) for ${currentLevel} Level – Semester ${currentSemester}!\n\nCourses:\n${registered.map(c => `• ${c.code} – ${c.name}`).join('\n')}`);
  }

  // Init
  renderCourses();



  let userEmail = '';
  let countdownTimer = null;
  let mockOTP = '123456'; // Simulated OTP for demo

  // ── Step navigation ──
  function showStep(n) {
    [1,2,3,4].forEach(i => {
      document.getElementById('step-' + i).style.display = i === n ? 'block' : 'none';
    });
    // Update dots
    [1,2,3].forEach(i => {
      const dot = document.getElementById('dot-' + i);
      dot.classList.remove('active','done');
      if (i < n) dot.classList.add('done');
      if (i === n) dot.classList.add('active');
    });
    // Hide progress dots and back link on success
    document.querySelector('.progress-dots').style.display = n === 4 ? 'none' : 'flex';
    document.getElementById('back-link').style.display = n === 4 ? 'none' : 'inline-flex';
  }

  // ── Step 1: Send OTP ──
  function sendOTP() {
    const emailInput = document.getElementById('email');
    const err = document.getElementById('email-error');
    const email = emailInput.value.trim();

    if (!email) {
      err.textContent = 'Please enter your email address.';
      err.style.display = 'block'; return;
    }
    if (!email.includes('@') || !email.includes('.')) {
      err.textContent = 'Please enter a valid email address.';
      err.style.display = 'block'; return;
    }

    err.style.display = 'none';
    userEmail = email;

    // Show masked email
    const [user, domain] = email.split('@');
    const masked = user.slice(0,2) + '***@' + domain;
    document.getElementById('email-display').textContent = masked;

    showStep(2);
    startCountdown();
    initOTPInputs();
  }

  // ── OTP input wiring ──
  function initOTPInputs() {
    const inputs = document.querySelectorAll('.otp-input');
    inputs.forEach((inp, idx) => {
      inp.value = '';
      inp.classList.remove('filled');

      inp.addEventListener('input', function(e) {
        const val = this.value.replace(/[^0-9]/g, '');
        this.value = val;
        this.classList.toggle('filled', val !== '');
        if (val && idx < inputs.length - 1) inputs[idx + 1].focus();
      });

      inp.addEventListener('keydown', function(e) {
        if (e.key === 'Backspace' && !this.value && idx > 0) {
          inputs[idx - 1].focus();
          inputs[idx - 1].value = '';
          inputs[idx - 1].classList.remove('filled');
        }
      });

      inp.addEventListener('paste', function(e) {
        e.preventDefault();
        const pasted = (e.clipboardData || window.clipboardData).getData('text').replace(/\D/g,'').slice(0,6);
        pasted.split('').forEach((ch, i) => {
          if (inputs[i]) { inputs[i].value = ch; inputs[i].classList.add('filled'); }
        });
        if (inputs[Math.min(pasted.length, 5)]) inputs[Math.min(pasted.length, 5)].focus();
      });
    });
    inputs[0].focus();
  }

  function startCountdown() {
    let secs = 60;
    const btn = document.getElementById('resend-btn');
    const cd = document.getElementById('countdown');
    btn.disabled = true;
    btn.innerHTML = `Resend in <span class="countdown" id="countdown">${secs}</span>s`;

    clearInterval(countdownTimer);
    countdownTimer = setInterval(() => {
      secs--;
      const el = document.getElementById('countdown');
      if (el) el.textContent = secs;
      if (secs <= 0) {
        clearInterval(countdownTimer);
        btn.disabled = false;
        btn.textContent = 'Resend code';
      }
    }, 1000);
  }

  function resendOTP() {
    mockOTP = Math.floor(100000 + Math.random() * 900000).toString();
    alert(`[Demo] A new OTP has been sent. Use: ${mockOTP}`);
    initOTPInputs();
    startCountdown();
  }

  // ── Step 2: Verify OTP ──
  function verifyOTP() {
    const inputs = document.querySelectorAll('.otp-input');
    const entered = Array.from(inputs).map(i => i.value).join('');
    const err = document.getElementById('otp-error');

    if (entered.length < 6) {
      err.textContent = 'Please enter the complete 6-digit code.';
      err.style.display = 'block'; return;
    }

    // Demo: accept 123456 or the randomly generated one
    if (entered !== mockOTP && entered !== '123456') {
      err.textContent = 'Incorrect code. Please try again. (Demo: use 123456)';
      err.style.display = 'block';
      inputs.forEach(i => { i.style.borderColor = 'var(--error)'; });
      setTimeout(() => inputs.forEach(i => { i.style.borderColor = ''; }), 1200);
      return;
    }

    err.style.display = 'none';
    clearInterval(countdownTimer);
    showStep(3);
  }

  // ── Step 3: Reset Password ──
  function resetPassword() {
    const pw = document.getElementById('new-password').value;
    const cpw = document.getElementById('confirm-password').value;
    const err = document.getElementById('pwd-error');

    if (pw.length < 8) {
      err.textContent = 'Password must be at least 8 characters.';
      err.style.display = 'block'; return;
    }
    if (pw !== cpw) {
      err.textContent = 'Passwords do not match. Please try again.';
      err.style.display = 'block'; return;
    }

    err.style.display = 'none';
    showStep(4);

    // Detect role for login redirect
    const role = document.getElementById('role') ? document.getElementById('role').value : 'student';
    const loginPage = role === 'lecturer' ? 'lecturer-login.html' : 'student-login.html';
    document.getElementById('go-login-btn').href = loginPage;

    // Redirect countdown
    let secs = 5;
    const rc = setInterval(() => {
      secs--;
      const el = document.getElementById('redirect-count');
      if (el) el.textContent = secs;
      if (secs <= 0) {
        clearInterval(rc);
        window.location.href = loginPage;
      }
    }, 1000);
  }

  // ── Helpers ──
  function togglePwd(id, btn) {
    const input = document.getElementById(id);
    const svg = btn.querySelector('svg');
    if (input.type === 'password') {
      input.type = 'text';
      svg.innerHTML = `<path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>`;
    } else {
      input.type = 'password';
      svg.innerHTML = `<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>`;
    }
  }

  function checkStrength(val) {
    const bars = document.querySelectorAll('.s-bar');
    const label = document.getElementById('strength-label');
    let score = 0;
    if (val.length >= 8) score++;
    if (/[A-Z]/.test(val)) score++;
    if (/[0-9]/.test(val)) score++;
    if (/[^A-Za-z0-9]/.test(val)) score++;
    const colors = ['#f87171','#fb923c','#facc15','#10b981'];
    const labels = ['Weak','Fair','Good','Strong'];
    bars.forEach((b, i) => b.style.background = i < score ? colors[score - 1] : 'var(--border)');
    label.textContent = score > 0 ? labels[score - 1] : '';
    label.style.color = score > 0 ? colors[score - 1] : 'var(--text-muted)';
  }