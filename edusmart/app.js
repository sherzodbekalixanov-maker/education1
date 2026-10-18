const pages=[['index.html','Bosh sahifa'],['profil.html','Profil'],['darslar.html','Darslar'],['sos.html','SOS'],['test.html','Test']];
const cur=location.pathname.split('/').pop()||'index.html';
document.body.insertAdjacentHTML('afterbegin','<div id="bar"></div><div id="bg"></div><nav><b>🎓 EduSmart AI</b>'+pages.map(p=>`<a href="${p[0]}" class="${p[0]==cur?'on':''}">${p[1]}</a>`).join('')+'</nav>');
document.body.insertAdjacentHTML('beforeend','<footer>🚀 EduSmart AI — har bir o‘quvchi uchun shaxsiy ustoz</footer>');
const bg=document.getElementById('bg'),E='📚 🚀 🧠 ✏️ 🔬 🌍 ⭐ 🧮 🎨 🎧 💡 🪐 🧪 🏆 🎯 📐 ☄️ 🦄'.split(' '),it=[];
for(let i=0;i<46;i++){const e=document.createElement('i');e.textContent=E[i%E.length];const d=Math.random();e.dataset.d=(d*.35).toFixed(2);Object.assign(e.style,{left:Math.random()*100+'%',top:Math.random()*100+'%',fontSize:(18+d*60)+'px',opacity:.35+d*.5,animationDuration:(5+Math.random()*8)+'s',animationDelay:-Math.random()*8+'s'});bg.appendChild(e);it.push(e)}
const sc=()=>{const y=scrollY,h=document.body.scrollHeight-innerHeight;document.getElementById('bar').style.width=(y/h*100||0)+'%';it.forEach(e=>e.style.translate=`0 ${-y*e.dataset.d}px`)};
addEventListener('scroll',sc,{passive:true});sc();
addEventListener('mousemove',m=>{const x=(m.clientX/innerWidth-.5)*30,y=(m.clientY/innerHeight-.5)*30;bg.style.backgroundPosition=`${50+x}% ${50+y}%`});
const io=new IntersectionObserver(r=>r.forEach(e=>e.isIntersecting&&e.target.classList.add('in')),{threshold:.15});
document.querySelectorAll('.card,h2,section>p,.rv').forEach(e=>{e.classList.add('rv');io.observe(e)});
addEventListener('click',e=>{for(let i=0;i<12;i++){const p=document.createElement('span');p.className='p';p.textContent=E[Math.random()*E.length|0];p.style.left=e.clientX+'px';p.style.top=e.clientY+'px';p.style.setProperty('--x',(Math.random()-.5)*300+'px');p.style.setProperty('--y',(Math.random()-.5)*300+'px');document.body.appendChild(p);setTimeout(()=>p.remove(),900)}
const a=e.target.closest('a[href]');if(a&&a.getAttribute('href')[0]!='#'){e.preventDefault();document.body.classList.add('out');setTimeout(()=>location.href=a.href,330)}});
const $=s=>document.querySelector(s);
const IM='rocket planet book brain bulb atom'.split(' ');
for(let i=0;i<16;i++){const e=document.createElement('i'),d=Math.random(),z=40+d*70;e.innerHTML=`<img src="assets/${IM[i%6]}.svg" alt="">`;e.dataset.d=(d*.4).toFixed(2);Object.assign(e.style,{left:Math.random()*95+'%',top:Math.random()*100+'%',width:z+'px',height:z+'px',opacity:.5+d*.4,animationDuration:(6+Math.random()*8)+'s',animationDelay:-Math.random()*8+'s'});bg.appendChild(e);it.push(e)}
setInterval(()=>{const s=document.createElement('div');s.className='st';s.style.left=40+Math.random()*60+'vw';s.style.top=Math.random()*40+'vh';document.body.appendChild(s);setTimeout(()=>s.remove(),1500)},1800);
const fr=()=>{const r=document.createElement('img');r.src='assets/rocket.svg';r.className='rocket';r.style.bottom=5+Math.random()*40+'vh';document.body.appendChild(r);setTimeout(()=>r.remove(),7000)};setTimeout(fr,1500);setInterval(fr,9000);
const gl=document.createElement('div');gl.id='glow';document.body.appendChild(gl);addEventListener('mousemove',m=>{gl.style.left=m.clientX+'px';gl.style.top=m.clientY+'px'});
document.querySelectorAll('.card').forEach(c=>{c.addEventListener('mousemove',m=>{const r=c.getBoundingClientRect();c.style.transform=`perspective(700px) rotateX(${-((m.clientY-r.top)/r.height-.5)*14}deg) rotateY(${((m.clientX-r.left)/r.width-.5)*14}deg) scale(1.04)`});c.addEventListener('mouseleave',()=>c.style.transform='')});
function boom(){for(let i=0;i<70;i++){const c=document.createElement('span');c.className='cf';c.style.left=Math.random()*100+'vw';c.style.background=['#ffcf3f','#2ef2c0','#ff5d7a','#7c4dff'][i%4];c.style.animationDelay=Math.random()*.5+'s';document.body.appendChild(c);setTimeout(()=>c.remove(),3200)}}
const sec=document.querySelector('section');sec.style.position='relative';
if(cur=='index.html'||cur==''){
sec.insertAdjacentHTML('beforeend','<div class="orb"><img class="c" src="assets/planet.svg" alt=""><div><img src="assets/rocket.svg" alt=""></div><div><img src="assets/book.svg" alt=""></div></div>');
sec.querySelector('h1').insertAdjacentHTML('afterend','<div id="tw"></div>');
const W=['Matematika 🧮','Fizika ⚛️','Ingliz tili 🗣️','Kimyo 🧪','Tarix 🏛️','Dasturlash 💻'];let wi=0,ci=0,dl=0;
setInterval(()=>{const w=W[wi];if(!dl){ci++;if(ci>w.length){dl=1}}else{ci--;if(ci<0){dl=0;ci=0;wi=(wi+1)%W.length}}$('#tw').textContent=w.slice(0,Math.max(ci,0))},110);
const M=W.concat(['Biologiya 🌱','Geografiya 🌍','Rasm chizish 🎨']).join('   ⭐   ');
document.querySelector('main').insertAdjacentHTML('beforeend',`<div class="mq"><div>${M}   ⭐   ${M}   ⭐   </div></div><section style="text-align:center"><h2>Raqamlarda EduSmart</h2><div class="grid"><div><div class="stat" data-n="3">0</div>yosh guruhi</div><div><div class="stat" data-n="3">0</div>o‘rganish usuli</div><div><div class="stat" data-n="80">0</div>% amaliyot</div><div><div class="stat">∞</div>sabr-toqat</div></div></section>`);
const co=new IntersectionObserver(r=>r.forEach(x=>{if(x.isIntersecting&&x.target.dataset.n){const n=+x.target.dataset.n;let v=0;const t=setInterval(()=>{v+=Math.ceil(n/40);if(v>=n){v=n;clearInterval(t)}x.target.textContent=v},40);co.unobserve(x.target)}}));document.querySelectorAll('.stat[data-n]').forEach(s=>co.observe(s));
}else{const m={'profil.html':'brain','darslar.html':'book','sos.html':'bulb','test.html':'atom'}[cur];if(m)sec.insertAdjacentHTML('afterbegin',`<img class="hero-img" src="assets/${m}.svg" alt="">`)}
