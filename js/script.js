// ─── Date ──────────────────────────────────────────────────
const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months=['January','February','March','April','May','June','July','August','September','October','November','December'];
(function(){
  const d=new Date();
  const el=document.getElementById('dashDate');
  if(el) el.textContent=`${days[d.getDay()]}, ${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
})();

// ─── Navigation ────────────────────────────────────────────
const pageLabels={
  'dashboard':'Dashboard','materials':'Materials','attendance':'Attendance',
  'timetable':'Timetable','quiz-manual':'Snap-Test · Manual',
  'quiz-ai':'Snap-Test · AI','quiz-summarize':'Snap-Test · Summarize',
  'assignment':'Create Assignment','announcement':'Announcement',
  'create-class':'Create Class','campai':'CampAI',
  'notifications':'Notifications','profile':'Profile','settings':'Settings'
};

function navigate(pageId){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  const target=document.getElementById('page-'+pageId);
  if(target) target.classList.add('active');
  document.querySelectorAll('.nav-item[data-page]').forEach(n=>{
    n.classList.toggle('active',n.dataset.page===pageId);
  });
  document.querySelectorAll('.sub-item[data-page]').forEach(n=>{
    n.classList.toggle('active',n.dataset.page===pageId);
  });
  document.getElementById('topbarTitle').textContent=pageLabels[pageId]||pageId;
  document.getElementById('content').scrollTop=0;
}

document.querySelectorAll('.nav-item[data-page]').forEach(item=>{
  item.addEventListener('click',()=>navigate(item.dataset.page));
});
document.querySelectorAll('.sub-item[data-page]').forEach(item=>{
  item.addEventListener('click',()=>navigate(item.dataset.page));
});

// Sub-menu expand
document.getElementById('nav-snaptest').addEventListener('click',function(e){
  if(e.target.closest('[data-page]')&&e.target!==this) return;
  this.classList.toggle('open');
});

// Sidebar collapse
document.getElementById('collapseBtn').addEventListener('click',()=>{
  document.getElementById('sidebar').classList.toggle('collapsed');
});

// Profile / Notification quick links
document.getElementById('notifBtn').addEventListener('click',()=>navigate('notifications'));
document.getElementById('profileBtn').addEventListener('click',()=>navigate('profile'));

// ─── Attendance Toggle ─────────────────────────────────────
function toggleAttendance(){
  const t=document.getElementById('attToggle');
  const b=document.getElementById('attBadge');
  t.classList.toggle('on');
  if(t.classList.contains('on')){b.textContent='Open';b.className='closed-badge open-badge';}
  else{b.textContent='Closed';b.className='closed-badge';}
}
function toggleWin(badgeId,toggleId){
  const t=document.getElementById(toggleId);
  const b=document.getElementById(badgeId);
  t.classList.toggle('on');
  if(t.classList.contains('on')){b.textContent='Open';b.className='closed-badge open-badge';}
  else{b.textContent='Closed';b.className='closed-badge';}
}

// ─── Quiz questions ────────────────────────────────────────
let qCount=1;
function addQuestion(){
  qCount++;
  const c=document.getElementById('questionsContainer');
  const d=document.createElement('div');
  d.className='form-group';
  d.style.marginBottom='10px';
  d.innerHTML=`<label>Question ${qCount}</label><input type="text" placeholder="Enter question here…"/>`;
  c.appendChild(d);
}

// ─── Timetable ────────────────────────────────────────────
function addTimetableRow(){
  const name=document.getElementById('tt-name').value.trim();
  const code=document.getElementById('tt-code').value.trim();
  const days=document.getElementById('tt-days').value.trim();
  const time=document.getElementById('tt-time').value.trim();
  const venue=document.getElementById('tt-venue').value.trim();
  if(!name||!code) return alert('Please fill in at least Course Name and Code.');
  const tb=document.getElementById('timetableBody');
  const rowNum=tb.rows.length+1;
  const tr=document.createElement('tr');
  tr.innerHTML=`<td>${rowNum}</td><td>${name}</td><td><span class="course-code-tag">${code}</span></td><td>${days||'—'}</td><td>${time||'—'}</td><td><span class="venue-tag"><i class="fas fa-map-marker-alt"></i>${venue||'TBD'}</span></td><td><button class="btn btn-outline btn-sm">Edit</button> <button class="btn btn-danger btn-sm" onclick="delRow(this)">Delete</button></td>`;
  tb.appendChild(tr);
  closeModal('addClassModal');
  ['tt-name','tt-code','tt-days','tt-time','tt-venue'].forEach(id=>document.getElementById(id).value='');
}
function delRow(btn){
  btn.closest('tr').remove();
}

// ─── Add Course ────────────────────────────────────────────
function addCourse(){
  const name=document.getElementById('cn-name').value.trim();
  const code=document.getElementById('cn-code').value.trim();
  if(!name||!code) return alert('Please fill in Course Name and Code.');
  const grid=document.getElementById('courseCardsGrid');
  const div=document.createElement('div');
  div.className='course-card-mini';
  div.innerHTML=`<button class="del-btn" onclick="deleteCourse(this)"><i class="fas fa-times"></i></button><div class="cc-code">${code}</div><div class="cc-name">${name}</div><div class="cc-enrolled"><i class="fas fa-users"></i>0 enrolled</div>`;
  grid.appendChild(div);
  closeModal('addCourseModal');
  ['cn-name','cn-code','cn-desc'].forEach(id=>document.getElementById(id).value='');
}
function deleteCourse(btn){
  if(confirm('Delete this course?')) btn.closest('.course-card-mini').remove();
}

// ─── Announcement ──────────────────────────────────────────
function postAnnouncement(){
  const title=document.querySelector('#page-announcement input[type=text]').value.trim();
  const link=document.querySelector('#page-announcement input[type=url]').value.trim();
  const desc=document.querySelector('#page-announcement textarea').value.trim();
  if(!title) return alert('Please add a title.');
  const list=document.getElementById('announcementList');
  const d=document.createElement('div');
  d.className='ann-item';
  const now=new Date();
  d.innerHTML=`<div class="ann-title">${title}</div><div class="ann-desc">${desc}</div>${link?`<a class="ann-link" href="${link}">${link}</a>`:''}<div class="ann-meta">Posted by Dr. Williams · ${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}</div>`;
  list.prepend(d);
  navigate('dashboard');
}

// ─── File Upload ───────────────────────────────────────────
function handleFileUpload(input){
  const files=input.files;
  if(files.length>0) alert(`${files.length} file(s) uploaded: ${Array.from(files).map(f=>f.name).join(', ')}`);
}
function handleAvatar(input){
  const file=input.files[0];
  if(!file) return;
  const reader=new FileReader();
  reader.onload=e=>{
    const src=e.target.result;
    document.getElementById('profileAvatarLarge').innerHTML=`<img src="${src}" alt="avatar"/><input type="file" id="avatarUpload" accept="image/*" hidden onchange="handleAvatar(this)"/>`;
    document.getElementById('profileBtn').innerHTML=`<img src="${src}" alt="avatar" style="width:100%;height:100%;object-fit:cover;border-radius:50%;"/>`;
  };
  reader.readAsDataURL(file);
}

// ─── Modals ────────────────────────────────────────────────
function openModal(id){document.getElementById(id).classList.add('open');}
function closeModal(id){document.getElementById(id).classList.remove('open');}
document.querySelectorAll('.modal-overlay').forEach(o=>{
  o.addEventListener('click',function(e){if(e.target===this)this.classList.remove('open');});
});

// ─── Forgot Password Steps ─────────────────────────────────
let fpStep=1;
function fpNext(current){
  document.getElementById('fp-step'+current).classList.remove('active');
  fpStep=current+1;
  document.getElementById('fp-step'+fpStep).classList.add('active');
}
function fpComplete(){
  closeModal('forgotModal');
  resetForgot();
  alert('Password reset successfully! You can now log in.');
  navigate('dashboard');
}
function resetForgot(){
  fpStep=1;
  document.querySelectorAll('.otp-step').forEach(s=>s.classList.remove('active'));
  document.getElementById('fp-step1').classList.add('active');
}
function otpNext(input,idx){
  const inputs=document.querySelectorAll('.otp-inputs input');
  if(input.value.length===1&&idx<3) inputs[idx+1].focus();
}

// ─── CampAI Chat ───────────────────────────────────────────
const campaiResponses=[
  "I can analyze your course materials and generate targeted practice questions to improve student comprehension. Which topic would you like to focus on?",
  "Based on recent quiz results, students in CS201 are struggling with tree traversal algorithms. I recommend uploading supplementary notes on DFS and BFS.",
  "I can help you draft a comprehensive assignment rubric for your current topics. Just share the learning objectives!",
  "Your attendance rate is excellent at 89%! The three students with consistent absences may benefit from a follow-up message.",
  "I found 5 related academic papers on your current lecture topic. Would you like me to summarize them for your reference material?",
  "Great question! I can generate a 10-question snap test on that topic in under 30 seconds. Shall I proceed?",
];
let campaiIdx=0;
function sendCampAI(){
  const input=document.getElementById('campaiInput');
  const msg=input.value.trim();
  if(!msg) return;
  const box=document.getElementById('campaiMessages');
  // User message
  box.innerHTML+=`<div class="msg user"><div class="msg-av user"><i class="fas fa-user"></i></div><div class="msg-bubble">${msg}</div></div>`;
  input.value='';
  // Typing indicator
  const typingId='typing-'+Date.now();
  box.innerHTML+=`<div class="msg ai" id="${typingId}"><div class="msg-av"><i class="fas fa-brain"></i></div><div class="chat-typing"><span></span><span></span><span></span></div></div>`;
  box.scrollTop=box.scrollHeight;
  setTimeout(()=>{
    document.getElementById(typingId)?.remove();
    const reply=campaiResponses[campaiIdx%campaiResponses.length];
    campaiIdx++;
    box.innerHTML+=`<div class="msg ai"><div class="msg-av"><i class="fas fa-brain"></i></div><div class="msg-bubble">${reply}</div></div>`;
    box.scrollTop=box.scrollHeight;
  },1400);
}

// ─── Customer Service Chat ─────────────────────────────────
// const csResponses=[
//   "I understand your concern! Let me look into that for you. Could you give me a bit more detail?",
//   "This is a known issue and our team is working on it. Expected resolution is within 24 hours.",
//   "Try clearing your browser cache and logging back in. This resolves the issue in most cases.",
//   "I'm sorry I couldn't fully resolve this. Please email support@pocketcampus.edu with the details and our team will assist you promptly.",
//   "You can manage that setting under Settings > Notification Preferences in your dashboard.",
// ];
// let csIdx=0;
// function sendCS(){
//   const input=document.getElementById('csInput');
//   const msg=input.value.trim();
//   if(!msg) return;
//   const box=document.getElementById('csMessages');
//   box.innerHTML+=`<div class="msg user" style="max-width:100%;flex-direction:row-reverse"><div class="msg-av user" style="width:26px;height:26px;min-width:26px;font-size:11px"><i class="fas fa-user"></i></div><div class="msg-bubble" style="font-size:12px">${msg}</div></div>`;
//   input.value='';
//   box.scrollTop=box.scrollHeight;
//   setTimeout(()=>{
//     const reply=csResponses[csIdx%csResponses.length];
//     csIdx++;
//     box.innerHTML+=`<div class="msg ai" style="max-width:100%"><div class="msg-av" style="width:26px;height:26px;min-width:26px;font-size:11px"><i class="fas fa-headset"></i></div><div class="msg-bubble" style="font-size:12px">${reply}</div></div>`;
//     box.scrollTop=box.scrollHeight;
//   },1200);
// }


function toggleCS(){
  document.getElementById('csPanel').classList.toggle('open');
}

// ─── Logout ────────────────────────────────────────────────
document.getElementById('logoutBtn').addEventListener('click',()=>{
  if(confirm('Are you sure you want to logout?'))
    alert('You have been logged out. Redirecting to login…');
});

// ─── Global Search ─────────────────────────────────────────
document.getElementById('globalSearch').addEventListener('keydown',function(e){
  if(e.key==='Enter'&&this.value.trim()){
    const q=this.value.trim().toLowerCase();
    const map={'dashboard':'dashboard','material':'materials','attendance':'attendance','timetable':'timetable','quiz':'quiz-manual','assignment':'assignment','announcement':'announcement','profile':'profile','settings':'settings','campai':'campai','notification':'notifications','class':'create-class'};
    for(const[k,v] of Object.entries(map)){if(q.includes(k)){navigate(v);this.value='';return;}}
    alert(`No page found for "${this.value}". Try: dashboard, materials, attendance, etc.`);
    this.value='';
  }
});