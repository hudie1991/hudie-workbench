/* ====== \u80E1\u789F\u7684\u5DE5\u4F5C\u53F0 2.0 ====== */
const STORAGE_KEY = 'hudie_workbench_v3';
const WEEKDAYS = ['mon','tue','wed','thu','fri','sat','sun'];
const WEEKDAY_LABELS = { mon:'\u5468\u4E00', tue:'\u5468\u4E8C', wed:'\u5468\u4E09', thu:'\u5468\u56DB', fri:'\u5468\u4E94', sat:'\u5468\u516D', sun:'\u5468\u65E5' };
const MEAL_KEYS = ['breakfast','morningSnack','lunch','afternoonSnack','dinner','eveningSnack'];
const MEAL_LABELS = { breakfast:'\u65E9\u9910', morningSnack:'\u65E9\u52A0\u9910', lunch:'\u5348\u9910', afternoonSnack:'\u5348\u52A0\u9910', dinner:'\u665A\u9910', eveningSnack:'\u665A\u52A0\u9910' };
const DAILY_VIDEOS = {
  pilates: [
    { title:'\u5B55\u671F\u666E\u62C9\u63D0 20 \u5206\u949F\uFF08\u5B89\u5168\u8212\u7F13\uFF09', link:'https://m.bilibili.com/search?keyword=%E5%AD%95%E6%9C%9F%E6%99%AE%E6%8B%89%E6%8F%90' },
    { title:'\u5C45\u5BB6\u666E\u62C9\u63D0 10 \u5206\u949F\u5165\u95E8', link:'https://m.bilibili.com/search?keyword=%E5%B1%85%E5%AE%B6%E6%99%AE%E6%8B%89%E6%8F%90%E5%85%A5%E9%97%A8' },
    { title:'\u4EA7\u540E\u6062\u590D\u666E\u62C9\u63D0 15 \u5206\u949F', link:'https://m.bilibili.com/search?keyword=%E4%BA%A7%E5%90%8E%E6%99%AE%E6%8B%89%E6%8F%90%E6%81%A2%E5%A4%8D' },
    { title:'\u666E\u62C9\u63D0\u6838\u5FC3\u8BAD\u7EC3 \u521D\u7EA7', link:'https://m.bilibili.com/search?keyword=%E6%99%AE%E6%8B%89%E6%8F%90%E6%A0%B8%E5%BF%83%E8%AE%AD%E7%BB%83%E5%88%9D%E7%BA%A7' },
    { title:'\u7761\u524D\u666E\u62C9\u63D0\u62C9\u4F38 12 \u5206\u949F', link:'https://m.bilibili.com/search?keyword=%E7%9D%A1%E5%89%8D%E6%99%AE%E6%8B%89%E6%8F%90%E6%8B%89%E4%BC%B8' },
    { title:'\u5B55\u5987\u666E\u62C9\u63D0 \u7F13\u89E3\u8170\u80CC\u75BC\u75DB', link:'https://m.bilibili.com/search?keyword=%E5%AD%95%E5%A6%87%E6%99%AE%E6%8B%89%E6%8F%90%E8%85%B0%E8%83%8C' },
    { title:'30 \u5929\u666E\u62C9\u63D0\u5851\u5F62 \u00B7 \u7B2C 1 \u5929', link:'https://m.bilibili.com/search?keyword=30%E5%A4%A9%E6%99%AE%E6%8B%89%E6%8F%90%E5%A1%91%E5%BD%A2' },
    { title:'\u666E\u62C9\u63D0\u547C\u5438\u6CD5\u7EC3\u4E60 5 \u5206\u949F', link:'https://m.bilibili.com/search?keyword=%E6%99%AE%E6%8B%89%E6%8F%90%E5%91%BC%E5%90%B8%E6%B3%95' }
  ],
  beauty: [
    { title:'\u5B55\u671F\u901A\u52E4\u7A7F\u642D 5 \u5957 LOOK', link:'https://www.xiaohongshu.com/search_result?keyword=%E5%AD%95%E6%9C%9F%E7%A9%BF%E6%90%AD%E9%80%9A%E5%8B%A4' },
    { title:'\u65B0\u624B\u5316\u5986\u6559\u7A0B \u4F2A\u7D20\u989C\u5986', link:'https://m.bilibili.com/search?keyword=%E6%96%B0%E6%89%8B%E5%8C%96%E5%A6%86%E6%95%99%E7%A8%8B' },
    { title:'\u68A8\u5F62\u8EAB\u6750\u7A7F\u642D\u516C\u5F0F', link:'https://www.xiaohongshu.com/search_result?keyword=%E6%A2%A8%E5%BD%A2%E8%BA%AB%E6%9D%90%E7%A9%BF%E6%90%AD%E5%85%AC%E5%BC%8F' },
    { title:'\u5B55\u671F\u7A7F\u642D\u663E\u7626 10 \u4E2A\u6280\u5DE7', link:'https://www.xiaohongshu.com/search_result?keyword=%E5%AD%95%E6%9C%9F%E7%A9%BF%E6%90%AD%E6%98%BE%E7%98%A6' },
    { title:'\u65E9\u516B\u5FEB\u901F\u51FA\u95E8\u5986 5 \u5206\u949F', link:'https://m.bilibili.com/search?keyword=%E6%97%A9%E5%85%AB%E5%BF%AB%E9%80%9F%E5%87%BA%E9%97%A8%E5%A6%86' },
    { title:'\u5B55\u671F\u7A7F\u642D\u535A\u4E3B\u5408\u96C6\u63A8\u8350', link:'https://www.xiaohongshu.com/search_result?keyword=%E5%AD%95%E6%9C%9F%E7%A9%BF%E6%90%AD%E5%8D%9A%E4%B8%BB' },
    { title:'\u5355\u773C\u76AE\u773C\u5986\u6559\u7A0B \u81EA\u7136\u653E\u5927', link:'https://www.xiaohongshu.com/search_result?keyword=%E5%8D%95%E7%9C%BC%E7%9A%AE%E7%9C%BC%E5%A6%86%E6%95%99%E7%A8%8B' },
    { title:'\u57FA\u7840\u6B3E\u7A7F\u642D\u9AD8\u7EA7\u611F', link:'https://www.douyin.com/search/%E5%9F%BA%E7%A1%80%E6%AC%BE%E9%AB%98%E7%BA%A7%E6%84%9F%E7%A9%BF%E6%90%AD' }
  ],
  nutrition: [
    { title:'\u5B55\u671F\u63A7\u7CD6\u996E\u98DF\u5168\u653B\u7565', link:'https://m.bilibili.com/search?keyword=%E5%AD%95%E6%9C%9F%E6%8E%A7%E7%B3%96%E9%A5%AE%E9%A3%9F' },
    { title:'\u4E2D\u56FD\u5C45\u6C11\u81B3\u98DF\u6307\u5357\u89E3\u8BFB', link:'https://m.bilibili.com/search?keyword=%E4%B8%AD%E5%9B%BD%E5%B1%85%E6%B0%91%E8%86%B3%E9%A3%9F%E6%8C%87%E5%8D%97' },
    { title:'\u51CF\u8102\u671F\u86CB\u767D\u8D28\u600E\u4E48\u5403', link:'https://www.douyin.com/search/%E5%87%8F%E8%84%82%E6%9C%9F%E8%9B%8B%E7%99%BD%E8%B4%A8' },
    { title:'\u5B55\u671F\u8865\u94C1\u8865\u9499\u98DF\u7269\u6E05\u5355', link:'https://www.xiaohongshu.com/search_result?keyword=%E5%AD%95%E6%9C%9F%E8%A1%A5%E9%93%81%E8%A1%A5%E9%92%99' },
    { title:'\u4F4E GI \u98DF\u7269\u9009\u62E9\u6307\u5357', link:'https://m.bilibili.com/search?keyword=%E4%BD%8EGI%E9%A3%9F%E7%89%A9' },
    { title:'\u598A\u5A20\u671F\u7CD6\u5C3F\u75C5\u996E\u98DF\u7BA1\u7406', link:'https://m.bilibili.com/search?keyword=%E5%A6%8A%E5%A8%A0%E6%9C%9F%E7%B3%96%E5%B0%BF%E7%97%85%E9%A5%AE%E9%A3%9F' },
    { title:'\u5B55\u671F\u8425\u517B\u8865\u5145\u5242\u600E\u4E48\u9009', link:'https://www.xiaohongshu.com/search_result?keyword=%E5%AD%95%E6%9C%9F%E8%90%A5%E5%85%BB%E8%A1%A5%E5%85%85%E5%89%82' },
    { title:'\u51CF\u8102\u671F\u4E00\u65E5\u4E09\u9910\u642D\u914D', link:'https://www.douyin.com/search/%E5%87%8F%E8%84%82%E6%9C%9F%E4%B8%80%E6%97%A5%E4%B8%89%E9%A4%90' }
  ],
  english: [
    { title:'\u65E5\u5E38\u82F1\u8BED\u53E3\u8BED 100 \u53E5', link:'https://m.bilibili.com/search?keyword=%E6%97%A5%E5%B8%B8%E8%8B%B1%E8%AF%AD%E5%8F%A3%E8%AF%AD100%E5%8F%A5' },
    { title:'\u673A\u573A\u901A\u5173\u82F1\u8BED\u5BF9\u8BDD', link:'https://m.bilibili.com/search?keyword=%E6%9C%BA%E5%9C%BA%E9%80%9A%E5%85%B3%E8%8B%B1%E8%AF%AD%E5%AF%B9%E8%AF%9D' },
    { title:'\u9910\u5385\u70B9\u9910\u82F1\u8BED \u5B9E\u7528\u53E5\u578B', link:'https://m.bilibili.com/search?keyword=%E9%A4%90%E5%8E%85%E7%82%B9%E9%A4%90%E8%8B%B1%E8%AF%AD' },
    { title:'\u8D2D\u7269\u82F1\u8BED \u8BA8\u4EF7\u8FD8\u4EF7', link:'https://m.bilibili.com/search?keyword=%E8%B4%AD%E7%89%A9%E8%8B%B1%E8%AF%AD%E8%AE%A8%E4%BB%B7%E8%BF%98%E4%BB%B7' },
    { title:'\u81EA\u6211\u4ECB\u7ECD\u82F1\u8BED 30 \u79D2\u7248', link:'https://m.bilibili.com/search?keyword=%E8%87%AA%E6%88%91%E4%BB%8B%E7%BB%8D%E8%8B%B1%E8%AF%AD30%E7%A7%92' },
    { title:'\u7535\u8BDD\u82F1\u8BED \u9884\u7EA6/\u53D6\u6D88', link:'https://m.bilibili.com/search?keyword=%E7%94%B5%E8%AF%9D%E8%8B%B1%E8%AF%AD%E9%A2%84%E7%BA%A6' },
    { title:'\u9152\u5E97\u5165\u4F4F\u82F1\u8BED\u5BF9\u8BDD', link:'https://m.bilibili.com/search?keyword=%E9%85%92%E5%BA%97%E5%85%A5%E4%BD%8F%E8%8B%B1%E8%AF%AD' },
    { title:'\u770B\u75C5\u5C31\u533B\u82F1\u8BED\u5E38\u7528\u8868\u8FBE', link:'https://m.bilibili.com/search?keyword=%E7%9C%8B%E7%97%85%E5%B0%B1%E5%8C%BB%E8%8B%B1%E8%AF%AD' }
  ]
};
const defaultData = {
  todos: [
    { id:1, text:'\u666E\u62C9\u63D0\u7EC3\u4E60 30 \u5206\u949F', time:'\u7075\u6D3B\u5B89\u6392', done:false, category:'pilates', note:'' },
    { id:2, text:'\u8425\u517B\u5B66\u77E5\u8BC6\u5B66\u4E60 30 \u5206\u949F', time:'\u7075\u6D3B\u5B89\u6392', done:false, category:'nutrition', note:'' },
    { id:3, text:'\u5316\u5986\u7A7F\u642D\u5B66\u4E60 30 \u5206\u949F', time:'\u7075\u6D3B\u5B89\u6392', done:false, category:'beauty', note:'' },
    { id:4, text:'\u82F1\u8BED\u7EC3\u4E60 30 \u5206\u949F', time:'\u7075\u6D3B\u5B89\u6392', done:false, category:'english', note:'' }
  ],
  weightRecords:[], poopRecords:[], babyRecords:[], checkupRecords:[], lmpDate:null, fetalRecords:[], bagItems:[], knowledgeFavs:[],
  height:170, preWeight:null,
  todosDate:null,
  weeklyPlan:WEEKDAYS.reduce(function(acc,d){ acc[d]={}; MEAL_KEYS.forEach(function(k){ acc[d][k]={ content:'', meat:'', veg:'', staple:'', fruit:'', others:'', tags:[] }; }); return acc; }, {}),
  interests:[], memos:[], reviews:[]
};
function deepClone(obj) { return JSON.parse(JSON.stringify(obj)); }
function migrateData(stored) {
  if (!stored) return deepClone(defaultData);
  var merged = deepClone(defaultData);
  // \u628A stored \u7684\u5B57\u6BB5\u5408\u5E76\u5230 merged\uFF08\u6DF1\u5408\u5E76\uFF09
  for (var key in stored) {
    if (stored.hasOwnProperty(key) && stored[key] !== undefined && stored[key] !== null) {
      merged[key] = stored[key];
    }
  }
  if (!merged.weeklyPlan) merged.weeklyPlan = deepClone(defaultData.weeklyPlan);
  if (!merged.lmpDate) merged.lmpDate = null;
  WEEKDAYS.forEach(function(d){
    if (!merged.weeklyPlan[d]) merged.weeklyPlan[d] = {};
    MEAL_KEYS.forEach(function(k){
      var val = merged.weeklyPlan[d][k];
      if (val === undefined || val === null) {
        merged.weeklyPlan[d][k] = { content:'', meat:'', veg:'', staple:'', fruit:'', others:'', tags:[] };
      } else if (typeof val === 'string') {
        merged.weeklyPlan[d][k] = { content:val, meat:'', veg:'', staple:'', fruit:'', others:'', tags:[] };
      } else if (!val.tags) {
        val.tags = [];
      }
    });
  });
  ['weightRecords','poopRecords','babyRecords','checkupRecords','fetalRecords','interests','memos','reviews','bagItems','knowledgeFavs'].forEach(function(k){ if (!merged[k]) merged[k] = []; });
  if (merged.todos) {
    merged.todos.forEach(function(t){ if (t.note === undefined) t.note = ''; });
  }
  return merged;
}
function loadData() {
  var stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return migrateData(JSON.parse(stored));
    } catch(e) {
      // JSON \u89E3\u6790\u5931\u8D25\uFF0C\u5C1D\u8BD5\u4ECE\u5907\u4EFD\u6062\u590D
      var backup = localStorage.getItem(STORAGE_KEY + '_backup');
      if (backup) {
        try { return migrateData(JSON.parse(backup)); } catch(e2) {}
      }
      return deepClone(defaultData);
    }
  }
  return deepClone(defaultData);
}
function saveData() {
  // \u5148\u5907\u4EFD\uFF0C\u518D\u4FDD\u5B58\uFF0C\u9632\u6B62\u6570\u636E\u4E22\u5931
  try {
    localStorage.setItem(STORAGE_KEY + '_backup', localStorage.getItem(STORAGE_KEY) || JSON.stringify(appData));
  } catch(e) {}
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
}
var appData = loadData();
function todayStr() { var d = new Date(); return d.getFullYear() + '\u5E74' + (d.getMonth()+1) + '\u6708' + d.getDate() + '\u65E5'; }
function weekdayStr() { return ['\u661F\u671F\u65E5','\u661F\u671F\u4E00','\u661F\u671F\u4E8C','\u661F\u671F\u4E09','\u661F\u671F\u56DB','\u661F\u671F\u4E94','\u661F\u671F\u516D'][new Date().getDay()]; }
function todayISO() { var d = new Date(); return d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0'); }
function nowStr() { var d = new Date(); return d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0') + ' ' + String(d.getHours()).padStart(2,'0') + ':' + String(d.getMinutes()).padStart(2,'0'); }
function getWeekDates(baseDate) {
  var d = baseDate ? new Date(baseDate) : new Date();
  var day = d.getDay();
  var diff = d.getDate() - day + (day === 0 ? -6 : 1);
  var monday = new Date(d.setDate(diff));
  var dates = [];
  for (var i = 0; i < 7; i++) {
    var cur = new Date(monday);
    cur.setDate(monday.getDate() + i);
    dates.push({
      iso: cur.getFullYear() + '-' + String(cur.getMonth()+1).padStart(2,'0') + '-' + String(cur.getDate()).padStart(2,'0'),
      short: (cur.getMonth()+1) + '.' + cur.getDate(),
      weekday: ['\u5468\u4E00','\u5468\u4E8C','\u5468\u4E09','\u5468\u56DB','\u5468\u4E94','\u5468\u516D','\u5468\u65E5'][i]
    });
  }
  return dates;
}
function escapeHtml(str) { if (!str) return ''; return String(str).replace(/[&<>"']/g, function(m){ return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[m]; }); }
function newId(arr) { return arr.length ? Math.max.apply(null, arr.map(function(x){ return x.id || 0; })) + 1 : 1; }
function seededRandom(seed) { var x = Math.sin(seed)*10000; return x - Math.floor(x); }
function getDailySeed() { var d = new Date(); return d.getFullYear()*10000 + (d.getMonth()+1)*100 + d.getDate(); }
function pickDailyVideos(category) {
  var pool = DAILY_VIDEOS[category] || [];
  var seed = getDailySeed() + category.length;
  return pool.map(function(v,i){ return { v:v, r:seededRandom(seed + i*997) }; }).sort(function(a,b){ return a.r - b.r; }).slice(0,5).map(function(x){ return x.v; });
}
function openDB(name, store, version) {
  version = version || 1;
  return new Promise(function(resolve, reject){
    var req = indexedDB.open(name, version);
    req.onupgradeneeded = function(e){ var db = e.target.result; if (!db.objectStoreNames.contains(store)) db.createObjectStore(store, { keyPath:'id' }); };
    req.onsuccess = function(e){ resolve(e.target.result); };
    req.onerror = function(e){ reject(e.target.error); };
  });
}
function dbPut(name, store, id, blob) { return openDB(name, store).then(function(db){ return new Promise(function(resolve, reject){ var tx = db.transaction(store, 'readwrite'); tx.objectStore(store).put({id:id, blob:blob, date:Date.now()}); tx.oncomplete = function(){ resolve(); }; tx.onerror = function(){ reject(tx.error); }; }); }); }
function dbGet(name, store, id) { return openDB(name, store).then(function(db){ return new Promise(function(resolve, reject){ var tx = db.transaction(store, 'readonly'); var req = tx.objectStore(store).get(id); req.onsuccess = function(){ resolve(req.result ? req.result.blob : null); }; req.onerror = function(){ reject(req.error); }; }); }); }
function dbDelete(name, store, id) { return openDB(name, store).then(function(db){ return new Promise(function(resolve, reject){ var tx = db.transaction(store, 'readwrite'); tx.objectStore(store).delete(id); tx.oncomplete = function(){ resolve(); }; tx.onerror = function(){ reject(tx.error); }; }); }); }
document.querySelectorAll('.nav-item').forEach(function(btn){
  btn.addEventListener('click', function(){
    document.querySelectorAll('.nav-item').forEach(function(b){ b.classList.remove('active'); });
    document.querySelectorAll('.section').forEach(function(s){ s.classList.remove('active'); });
    btn.classList.add('active');
    document.getElementById(btn.dataset.section).classList.add('active');
  });
});

/* ====== \u6BCF\u65E5\u4EFB\u52A1 ====== */
function checkDailyReset() {
  var today = todayISO();
  if (appData.todosDate !== today) {
    appData.todos.forEach(function(t){ t.done = false; });
    appData.todosDate = today;
    saveData();
  }
}
function renderTodos() {
  checkDailyReset();
  var list = document.getElementById('todo-list');
  var html = '';
  for (var i = 0; i < appData.todos.length; i++) {
    var t = appData.todos[i];
    html += '<div class="todo-item ' + (t.done ? 'completed' : '') + '">';
    html += '<div class="todo-checkbox ' + (t.done ? 'checked' : '') + '" data-id="' + t.id + '"></div>';
    html += '<span class="todo-text">' + escapeHtml(t.text) + '</span>';
    html += '<span class="todo-time">' + escapeHtml(t.time || '') + '</span>';
    html += '<button class="todo-delete" data-id="' + t.id + '">\u2715</button>';
    html += '<input class="todo-note-input" data-id="' + t.id + '" placeholder="\u5907\u6CE8\u7279\u6B8A\u60C5\u51B5..." value="' + escapeHtml(t.note || '') + '">';
    html += '</div>';
  }
  list.innerHTML = html;
  updateProgress();
}
function updateProgress() { var total = appData.todos.length, done = appData.todos.filter(function(t){ return t.done; }).length; document.getElementById('progress-text').textContent = done + ' / ' + total; document.getElementById('progress-fill').style.width = total ? (done/total*100)+'%' : '0%'; }
document.getElementById('todo-list').addEventListener('click', function(e){
  var id = parseInt(e.target.dataset.id);
  if (e.target.classList.contains('todo-checkbox')) {
    var todo = appData.todos.find(function(t){ return t.id === id; });
    if (todo) { todo.done = !todo.done; saveData(); renderTodos(); }
  } else if (e.target.classList.contains('todo-delete')) {
    if (confirm('\u5220\u9664\u8FD9\u6761\u4EFB\u52A1\uFF1F')) { appData.todos = appData.todos.filter(function(t){ return t.id !== id; }); saveData(); renderTodos(); }
  }
});
document.getElementById('todo-list').addEventListener('input', function(e){
  if (e.target.classList.contains('todo-note-input')) {
    var id = parseInt(e.target.dataset.id);
    var todo = appData.todos.find(function(t){ return t.id === id; });
    if (todo) { todo.note = e.target.value; saveData(); }
  }
});
document.getElementById('add-task-btn').addEventListener('click', addTask);
document.getElementById('new-task-input').addEventListener('keypress', function(e){ if (e.key === 'Enter') addTask(); });
function addTask() {
  var input = document.getElementById('new-task-input'), text = input.value.trim();
  if (!text) return;
  var category = 'other';
  if (/\u666E\u62C9\u63D0|pilates/i.test(text)) category = 'pilates';
  else if (/\u8425\u517B|nutrition|\u98DF\u8C31|\u996E\u98DF/i.test(text)) category = 'nutrition';
  else if (/\u5316\u5986|\u7A7F\u642D|\u642D\u914D|\u670D\u88C5|\u7F8E\u5986/i.test(text)) category = 'beauty';
  else if (/\u82F1\u8BED|english|\u53E3\u8BED|\u5355\u8BCD/i.test(text)) category = 'english';
  appData.todos.push({ id:newId(appData.todos), text:text, time:'\u81EA\u5B9A\u4E49', done:false, category:category, note:'' });
  saveData(); input.value = ''; renderTodos();
}

/* ====== \u5F85\u4EA7\u5305\u6E05\u5355 ====== */
var currentBagCat = 'all';
var currentKnowledgeCat = 'all';

function ensureBagDefaults() {
  if (appData.bagItems && appData.bagItems.length) return;
  appData.bagItems = [
    { id:1, name:'\u592B\u59BB\u53CC\u65B9\u8EAB\u4EFD\u8BC1', cat:'\u8BC1\u4EF6\u8D44\u6599', checked:false },
    { id:2, name:'\u533B\u4FDD\u5361/\u793E\u4FDD\u5361', cat:'\u8BC1\u4EF6\u8D44\u6599', checked:false },
    { id:3, name:'\u4EA7\u68C0\u6863\u6848/\u6BCD\u5B50\u5065\u5EB7\u624B\u518C', cat:'\u8BC1\u4EF6\u8D44\u6599', checked:false },
    { id:4, name:'\u7ED3\u5A5A\u8BC1', cat:'\u8BC1\u4EF6\u8D44\u6599', checked:false },
    { id:5, name:'\u6237\u53E3\u672C', cat:'\u8BC1\u4EF6\u8D44\u6599', checked:false },
    { id:6, name:'\u536B\u751F\u5DFE\uFF08\u4EA7\u5987\u4E13\u7528\uFF09', cat:'\u5988\u5988\u7528\u54C1', checked:false },
    { id:7, name:'\u4EA7\u5987\u8BA1\u91CF\u7EB8/\u62A4\u7406\u57AB', cat:'\u5988\u5988\u7528\u54C1', checked:false },
    { id:8, name:'\u4E00\u6B21\u6027\u7EAF\u68C9\u5185\u88E4', cat:'\u5988\u5988\u7528\u54C1', checked:false },
    { id:9, name:'\u54FA\u4E73\u6587\u80F8/\u9632\u6EA2\u4E73\u57AB', cat:'\u5988\u5988\u7528\u54C1', checked:false },
    { id:10, name:'\u4E73\u5934\u4FDD\u62A4\u971C', cat:'\u5988\u5988\u7528\u54C1', checked:false },
    { id:11, name:'\u62BD\u7EB8/\u5377\u7EB8', cat:'\u5988\u5988\u7528\u54C1', checked:false },
    { id:12, name:'\u6708\u5B50\u670D/\u7761\u8863\uFF08\u524D\u5F00\u6263\uFF09', cat:'\u5988\u5988\u7528\u54C1', checked:false },
    { id:13, name:'\u62D6\u978B\uFF08\u9632\u6ED1\uFF09', cat:'\u5988\u5988\u7528\u54C1', checked:false },
    { id:14, name:'\u5438\u7BA1\u676F/\u4FDD\u6E29\u676F', cat:'\u5988\u5988\u7528\u54C1', checked:false },
    { id:15, name:'\u6D17\u6F31\u7528\u54C1\uFF08\u7259\u5237\u3001\u6BDB\u5DFE\u7B49\uFF09', cat:'\u5988\u5988\u7528\u54C1', checked:false },
    { id:16, name:'\u51FA\u9662\u670D', cat:'\u5988\u5988\u7528\u54C1', checked:false },
    { id:17, name:'\u6536\u8179\u5E26', cat:'\u5988\u5988\u7528\u54C1', checked:false },
    { id:18, name:'\u5A74\u513F\u5305\u88AB\uFF08\u8584\u539A\u5404\u4E00\uFF09', cat:'\u5B9D\u5B9D\u7528\u54C1', checked:false },
    { id:19, name:'\u5A74\u513F\u8FDE\u4F53\u8863\uFF0852\u7801\uFF09', cat:'\u5B9D\u5B9D\u7528\u54C1', checked:false },
    { id:20, name:'\u5A74\u513F\u53E3\u6C34\u5DFE/\u5C0F\u6BDB\u5DFE', cat:'\u5B9D\u5B9D\u7528\u54C1', checked:false },
    { id:21, name:'NB\u53F7\u7EB8\u5C3F\u88E4', cat:'\u5B9D\u5B9D\u7528\u54C1', checked:false },
    { id:22, name:'\u6E7F\u5DFE/\u68C9\u67D4\u5DFE', cat:'\u5B9D\u5B9D\u7528\u54C1', checked:false },
    { id:23, name:'\u5A74\u513F\u62A4\u81C0\u818F', cat:'\u5B9D\u5B9D\u7528\u54C1', checked:false },
    { id:24, name:'\u5976\u74F6+\u5976\u7C89\uFF08\u5C0F\u7F50\u5907\u7528\uFF09', cat:'\u5B9D\u5B9D\u7528\u54C1', checked:false },
    { id:25, name:'\u5A74\u513F\u5E3D/\u5C0F\u889C\u5B50', cat:'\u5B9D\u5B9D\u7528\u54C1', checked:false },
    { id:26, name:'\u624B\u673A+\u5145\u7535\u5668', cat:'\u5176\u4ED6', checked:false },
    { id:27, name:'\u4FDD\u6E29\u996D\u76D2/\u9910\u5177', cat:'\u5176\u4ED6', checked:false },
    { id:28, name:'\u73B0\u91D1/\u94F6\u884C\u5361', cat:'\u5176\u4ED6', checked:false },
    { id:29, name:'\u5438\u7BA1\uFF08\u4EA7\u540E\u8EBA\u7740\u559D\u6C34\u7528\uFF09', cat:'\u5176\u4ED6', checked:false },
    { id:30, name:'\u5DE7\u514B\u529B/\u7EA2\u725B\uFF08\u8865\u5145\u4F53\u529B\uFF09', cat:'\u5176\u4ED6', checked:false }
  ];
  saveData();
}

function renderBagList() {
  ensureBagDefaults();
  var list = document.getElementById('bag-list');
  var items = appData.bagItems.slice();
  if (currentBagCat !== 'all') items = items.filter(function(i){ return i.cat === currentBagCat; });
  var total = appData.bagItems.length;
  var done = appData.bagItems.filter(function(i){ return i.checked; }).length;
  document.getElementById('bag-count').textContent = done + ' / ' + total;
  document.getElementById('bag-progress-fill').style.width = total ? (done/total*100) + '%' : '0%';
  var html = '';
  for (var i = 0; i < items.length; i++) {
    var it = items[i];
    html += '<div class="bag-item">';
    html += '<div class="bag-checkbox ' + (it.checked ? 'checked' : '') + '" data-id="' + it.id + '">' + (it.checked ? '\u2713' : '') + '</div>';
    html += '<div class="bag-item-body"><div class="bag-item-name ' + (it.checked ? 'completed' : '') + '">' + escapeHtml(it.name) + '</div><span class="bag-item-tag">' + escapeHtml(it.cat) + '</span></div>';
    html += '<button class="bag-item-delete" data-id="' + it.id + '">\u2715</button>';
    html += '</div>';
  }
  list.innerHTML = html;
}

/* ====== \u5B55\u671F\u6307\u5357\u5B50\u5BFC\u822A\u5207\u6362 ====== */
document.querySelectorAll('.diet-nav-btn').forEach(function(btn){
  btn.addEventListener('click', function(){
    document.querySelectorAll('.diet-nav-btn').forEach(function(b){ b.classList.remove('active'); });
    btn.classList.add('active');
    var panel = btn.dataset.panel;
    document.querySelectorAll('.diet-panel').forEach(function(p){ p.classList.remove('active'); });
    var target = document.querySelector('.diet-panel[data-panel="' + panel + '"]');
    if (target) target.classList.add('active');
  });
});

document.querySelectorAll('.bag-tab').forEach(function(tab){
  tab.addEventListener('click', function(){
    document.querySelectorAll('.bag-tab').forEach(function(t){ t.classList.remove('active'); });
    tab.classList.add('active');
    currentBagCat = tab.dataset.cat;
    renderBagList();
  });
});
document.getElementById('bag-list').addEventListener('click', function(e){
  var cb = e.target.closest ? e.target.closest('.bag-checkbox') : null;
  if (cb) {
    var id = parseInt(cb.dataset.id);
    var item = appData.bagItems.find(function(i){ return i.id === id; });
    if (item) { item.checked = !item.checked; saveData(); renderBagList(); }
    return;
  }
  var delBtn = e.target.closest ? e.target.closest('.bag-item-delete') : null;
  if (delBtn) {
    var did = parseInt(delBtn.dataset.id);
    if (confirm('\u5220\u9664\u8FD9\u4E2A\u7269\u54C1\uFF1F')) {
      appData.bagItems = appData.bagItems.filter(function(i){ return i.id !== did; });
      saveData(); renderBagList();
    }
  }
});
document.getElementById('add-bag-btn').addEventListener('click', function(){
  var name = document.getElementById('bag-name').value.trim();
  var cat = document.getElementById('bag-category').value;
  if (!name) { alert('\u8BF7\u586B\u5199\u7269\u54C1\u540D\u79F0'); return; }
  appData.bagItems.push({ id:newId(appData.bagItems), name:name, cat:cat, checked:false });
  saveData(); renderBagList();
  document.getElementById('bag-name').value = '';
});

/* ====== \u5B55\u671F\u77E5\u8BC6 ====== */
var KNOWLEDGE_DATA = [
  { id:1, cat:'\u5B55\u65E9\u671F', icon:'\uD83C\uDFE5', title:'\u7B2C\u4E00\u6B21\u4EA7\u68C0\u653B\u7565', content:'\u5EFA\u6863\u3001NT \u68C0\u67E5\u3001\u5404\u9879\u7B5B\u67E5\u2026\u2026\u7B2C\u4E00\u6B21\u6B63\u5F0F\u4EA7\u68C0\u8BE5\u51C6\u5907\u4EC0\u4E48\uFF1F\n1. \u5E26\u4E0A\u8EAB\u4EFD\u8BC1\u3001\u533B\u4FDD\u5361\u3001\u672B\u6B21\u6708\u7ECF\u65E5\u671F\n2. \u63D0\u524D\u9884\u7EA6\u4EA7\u68C0\u65F6\u95F4\uFF0C\u9886\u53D6\u6BCD\u5B50\u5065\u5EB7\u624B\u518C\n3. \u7A7F\u5BBD\u677E\u8863\u7269\uFF0C\u65B9\u4FBF\u68C0\u67E5\uFF0C\u907F\u514D\u8FDE\u8863\u88D9\n4. \u90E8\u5206\u9879\u76EE\uFF08\u8840\u5E38\u89C4\u3001\u8840\u7CD6\uFF09\u9700\u7A7A\u8179\uFF0C\u8BB0\u5F97\u54A8\u8BE2\u533B\u751F\n5. \u9884\u7559\u5145\u8DB3\u65F6\u95F4\uFF0C\u6BCF\u9879\u68C0\u67E5\u53EF\u80FD\u9700 1-2 \u5C0F\u65F6' },
  { id:2, cat:'\u5B55\u65E9\u671F', icon:'\uD83D\uDE0A', title:'\u5B55\u671F\u60C5\u7EEA\u7BA1\u7406', content:'\u8377\u5C14\u8499\u53D8\u5316\u5BFC\u81F4\u60C5\u7EEA\u6CE2\u52A8\u5F88\u6B63\u5E38\uFF0C\u5B66\u4F1A\u7BA1\u7406\u5B55\u671F\u60C5\u7EEA\u3002\n1. \u4FDD\u6301\u5145\u8DB3\u7761\u7720\uFF0C\u6BCF\u5929 7-9 \u5C0F\u65F6\n2. \u9002\u5EA6\u8FD0\u52A8\uFF0C\u5982\u6563\u6B65\u3001\u5B55\u5987\u745C\u4F3D\n3. \u4E0E\u5BB6\u4EBA\u3001\u670B\u53CB\u5206\u4EAB\u611F\u53D7\uFF0C\u4E0D\u8981\u72EC\u81EA\u627F\u53D7\n4. \u9605\u8BFB\u6B63\u80FD\u91CF\u5185\u5BB9\uFF0C\u8FDC\u79BB\u8D1F\u9762\u4FE1\u606F\n5. \u9700\u8981\u65F6\u53EF\u54A8\u8BE2\u4E13\u4E1A\u5FC3\u7406\u533B\u751F' },
  { id:3, cat:'\u5B55\u4E2D\u671F', icon:'\uD83E\uDDB4', title:'\u5B55\u671F\u8170\u80CC\u75DB\u7F13\u89E3\u65B9\u6CD5', content:'\u968F\u7740\u809A\u5B50\u53D8\u5927\uFF0C\u8170\u80CC\u75DB\u662F\u5B55\u671F\u5E38\u89C1\u56F0\u6270\uFF0C\u8BD5\u8BD5\u8FD9\u4E9B\u7F13\u89E3\u6280\u5DE7\u3002\n1. \u4FDD\u6301\u6B63\u786E\u59FF\u52BF\uFF1A\u7AD9\u5750\u65F6\u80CC\u90E8\u633A\u76F4\uFF0C\u907F\u514D\u5F2F\u8170\u9A7C\u80CC\n2. \u4F7F\u7528\u5B55\u5987\u6795\u6216 U \u578B\u6795\u652F\u6491\u8170\u80CC\n3. \u6E29\u70ED\u6577\u7F13\u89E3\u6DF1\u5C42\u808C\u8089\u9178\u75DB\n4. \u907F\u514D\u957F\u65F6\u95F4\u7AD9\u7ACB\u6216\u4E45\u5750\uFF0C\u5B9A\u65F6\u53D8\u6362\u59FF\u52BF\n5. \u505A\u5B55\u5987\u666E\u62C9\u63D0\uFF0C\u589E\u5F3A\u8170\u80CC\u808C\u8089\u529B\u91CF' },
  { id:4, cat:'\u5B55\u4E2D\u671F', icon:'\uD83D\uDC63', title:'\u611F\u53D7\u80CE\u52A8\u7684\u7F8E\u597D\u65F6\u523B', content:'\u7B2C\u4E00\u6B21\u611F\u53D7\u80CE\u52A8\u662F\u5B55\u671F\u6700\u795E\u5947\u7684\u4F53\u9A8C\u4E4B\u4E00\uFF0C\u4E86\u89E3\u80CE\u52A8\u89C4\u5F8B\u3002\n1. \u9996\u6B21\u80CE\u52A8\u591A\u53D1\u751F\u5728 18-20 \u5468\uFF0C\u4E8C\u80CE\u5988\u5988\u53EF\u80FD\u66F4\u65E9\n2. \u521D\u671F\u80CE\u52A8\u7C7B\u4F3C\u9C7C\u6E38\u6C34\u3001\u8774\u8776\u6247\u7FC5\u3001\u8C46\u5B50\u8DF3\u52A8\n3. \u80CE\u52A8\u6700\u6D3B\u8DC3\u65F6\u95F4\u4E3A\u665A\u4E0A 8-11 \u70B9\n4. \u5B55 28 \u5468\u540E\u5E94\u6BCF\u5929\u6570\u80CE\u52A8\uFF0C\u6B63\u5E38\u6BCF\u5C0F\u65F6 3-5 \u6B21\n5. \u80CE\u52A8\u660E\u663E\u51CF\u5C11\u9700\u53CA\u65F6\u5C31\u533B' },
  { id:5, cat:'\u5B55\u665A\u671F', icon:'\uD83C\uDF3A', title:'\u4E34\u4EA7\u4FE1\u53F7\u8BC6\u522B', content:'\u63A5\u8FD1\u9884\u4EA7\u671F\uFF0C\u9700\u8981\u4E86\u89E3\u5404\u79CD\u4E34\u4EA7\u4FE1\u53F7\u4EE5\u4FBF\u53CA\u65F6\u5165\u9662\u3002\n1. \u89C4\u5F8B\u5BAB\u7F29\uFF1A\u6BCF 5 \u5206\u949F\u4E00\u6B21\u3001\u6BCF\u6B21\u6301\u7EED 1 \u5206\u949F\u3001\u6301\u7EED 1 \u5C0F\u65F6\n2. \u89C1\u7EA2\uFF1A\u9634\u9053\u6709\u8840\u6027\u5206\u6CCC\u7269\uFF0C\u53EF\u80FD 24-48 \u5C0F\u65F6\u540E\u5206\u5A29\n3. \u7834\u6C34\uFF1A\u7F8A\u6C34\u6D41\u51FA\uFF0C\u9700\u7ACB\u5373\u5E73\u8EBA\u5E76\u8D76\u5F80\u533B\u9662\n4. \u80CE\u5934\u4E0B\u964D\uFF1A\u80CE\u5934\u5165\u76C6\uFF0C\u51FA\u73B0\u4E0B\u5760\u611F\u3001\u5C3F\u9891\u52A0\u91CD\n5. \u51FA\u73B0\u4EE5\u4E0A\u4EFB\u4E00\u4FE1\u53F7\uFF0C\u53CA\u65F6\u8054\u7CFB\u533B\u9662' },
  { id:6, cat:'\u5B55\u665A\u671F', icon:'\uD83D\uDCDA', title:'\u5B55\u665A\u671F\u7761\u7720\u6539\u5584\u65B9\u6CD5', content:'\u5B55\u665A\u671F\u7761\u7720\u56F0\u96BE\u662F\u5E38\u89C1\u95EE\u9898\uFF0C\u8BD5\u8BD5\u8FD9\u4E9B\u5C0F\u6280\u5DE7\u3002\n1. \u4F7F\u7528\u5B55\u5987\u6795\u652F\u6491\u8170\u80CC\u548C\u8179\u90E8\n2. \u5DE6\u4FA7\u5367\u4F4D\u6700\u4F73\uFF0C\u4FC3\u8FDB\u8840\u6DB2\u5FAA\u73AF\n3. \u7761\u524D\u5C11\u559D\u6C34\uFF0C\u51CF\u5C11\u591C\u8D77\u6B21\u6570\n4. \u7761\u524D\u907F\u514D\u9971\u98DF\u548C\u5496\u5561\u56E0\uFF0C\u53EF\u559D\u6E29\u725B\u5976\n5. \u4FDD\u6301\u5367\u5BA4\u51C9\u723D\u5B89\u9759\uFF0C\u53EF\u7528\u8033\u585E\u773C\u7F69\u8F85\u52A9' },
  { id:7, cat:'\u5B55\u665A\u671F', icon:'\uD83D\uDCB0', title:'\u5B55\u665A\u671F\u8425\u517B\u91CD\u70B9', content:'\u5B55\u665A\u671F\u662F\u80CE\u513F\u5FEB\u901F\u751F\u957F\u9636\u6BB5\uFF0C\u6CE8\u610F\u8425\u517B\u4F9B\u7ED9\u3002\n1. \u4F18\u8D28\u86CB\u767D\uFF1A\u9C7C\u3001\u867E\u3001\u9E21\u8089\u3001\u9E21\u86CB\u3001\u4E73\u5236\u54C1\n2. \u8865\u9499\uFF1A\u725B\u5976\u3001\u8C46\u8150\u3001\u829D\u9EBB\u9171\u3001\u867E\u76AE\n3. \u8865\u94C1\uFF1A\u7EA2\u8089\u3001\u52A8\u7269\u809D\u810F\u3001\u83E0\u83DC\uFF08\u914D\u7EF4C\u4FC3\u5438\u6536\uFF09\n4. \u8865\u5145 DHA \u5E2E\u52A9\u80CE\u513F\u5927\u8111\u53D1\u80B2\n5. \u63A7\u5236\u7CD6\u5206\u548C\u7CBE\u5236\u78B3\u6C34\uFF0C\u9884\u9632\u598A\u5A20\u671F\u7CD6\u5C3F\u75C5' },
  { id:8, cat:'\u5206\u5A29', icon:'\uD83C\uDF8A', title:'\u81EA\u7136\u5206\u5A29\u4E0E\u5F85\u4EA7\u51C6\u5907', content:'\u4E86\u89E3\u5206\u5A29\u8FC7\u7A0B\uFF0C\u505A\u597D\u5FC3\u7406\u548C\u7269\u54C1\u51C6\u5907\u3002\n1. \u672C\u4EBA\u53CA\u5BB6\u5C5E\u8981\u4E86\u89E3\u5206\u5A29\u6D41\u7A0B\uFF0C\u505A\u597D\u5FC3\u7406\u51C6\u5907\n2. \u9009\u62E9\u6709\u8D44\u8D28\u3001\u6709\u7ECF\u9A8C\u7684\u533B\u9662\u548C\u4EA7\u79D1\u533B\u751F\n3. \u63D0\u524D\u4E86\u89E3\u4EA7\u623F\u73AF\u5883\uFF0C\u719F\u6089\u5165\u9662\u6D41\u7A0B\n4. \u51C6\u5907\u597D\u5F85\u4EA7\u5305\uFF0C\u4F34\u4EA7\u4EBA\u5168\u7A0B\u966A\u4F34\n5. \u7EC3\u4E60\u62C9\u739B\u6CFD\u547C\u5438\u6CD5\uFF0C\u5E2E\u52A9\u5E94\u5BF9\u5BAB\u7F29\u75BC\u75DB' },
  { id:9, cat:'\u4EA7\u540E', icon:'\uD83D\uDCAF', title:'\u4EA7\u540E\u6062\u590D\u8981\u70B9', content:'\u4EA7\u540E 42 \u5929\u662F\u91CD\u8981\u7684\u6062\u590D\u671F\uFF0C\u6CE8\u610F\u79D1\u5B66\u8C03\u517B\u3002\n1. \u5145\u8DB3\u4F11\u606F\uFF0C\u907F\u514D\u8FC7\u5EA6\u52B3\u7D2F\n2. \u8425\u517B\u5747\u8861\uFF0C\u591A\u98DF\u9AD8\u86CB\u767D\u3001\u5BCC\u542B\u94C1\u548C\u9499\u7684\u98DF\u7269\n3. \u5173\u6CE8\u6076\u9732\u6392\u51FA\u60C5\u51B5\uFF0C\u53D1\u73B0\u5F02\u5E38\u53CA\u65F6\u5C31\u533B\n4. \u8863\u7740\u5BBD\u677E\u900F\u6C14\uFF0C\u6CE8\u610F\u4E2A\u4EBA\u536B\u751F\n5. \u4FDD\u6301\u5FC3\u60C5\u8212\u7545\uFF0C\u8B66\u60D5\u4EA7\u540E\u6291\u90C1\n6. \u4EA7\u540E 42 \u5929\u590D\u67E5\uFF0C\u8BC4\u4F30\u6062\u590D\u60C5\u51B5' }
];

function renderKnowledgeList() {
  var list = document.getElementById('knowledge-list');
  var items = KNOWLEDGE_DATA.slice();
  if (currentKnowledgeCat !== 'all') items = items.filter(function(k){ return k.cat === currentKnowledgeCat; });
  var html = '';
  for (var i = 0; i < items.length; i++) {
    var k = items[i];
    var fav = appData.knowledgeFavs.indexOf(k.id) >= 0;
    html += '<div class="knowledge-item">';
    html += '<div class="knowledge-item-header">';
    html += '<div class="knowledge-item-title">' + escapeHtml(k.icon) + ' ' + escapeHtml(k.title) + '<span class="knowledge-item-cat">' + escapeHtml(k.cat) + '</span></div>';
    html += '<button class="knowledge-item-fav" data-id="' + k.id + '">' + (fav ? '\u2605' : '\u2606') + '</button>';
    html += '</div>';
    html += '<div class="knowledge-item-content">' + escapeHtml(k.content) + '</div>';
    html += '</div>';
  }
  list.innerHTML = html;
}
document.querySelectorAll('.knowledge-tab').forEach(function(tab){
  tab.addEventListener('click', function(){
    document.querySelectorAll('.knowledge-tab').forEach(function(t){ t.classList.remove('active'); });
    tab.classList.add('active');
    currentKnowledgeCat = tab.dataset.cat;
    renderKnowledgeList();
  });
});
document.getElementById('knowledge-list').addEventListener('click', function(e){
  var btn = e.target.closest ? e.target.closest('.knowledge-item-fav') : null;
  if (!btn) return;
  var id = parseInt(btn.dataset.id);
  if (appData.knowledgeFavs.indexOf(id) >= 0) {
    appData.knowledgeFavs = appData.knowledgeFavs.filter(function(x){ return x !== id; });
  } else {
    appData.knowledgeFavs.push(id);
  }
  saveData(); renderKnowledgeList();
});

/* ====== \u6570\u80CE\u52A8 ====== */
var fetalState = { count:0, startTime:0, timer:null };
function updateFetalDisplay() {
  document.getElementById('fetal-count').textContent = fetalState.count;
  var elapsed = fetalState.startTime ? Math.floor((Date.now() - fetalState.startTime) / 1000) : 0;
  var mm = String(Math.floor(elapsed / 60)).padStart(2,'0');
  var ss = String(elapsed % 60).padStart(2,'0');
  document.getElementById('fetal-timer').textContent = mm + ':' + ss;
}
function startFetalTimer() {
  if (fetalState.timer) return;
  if (!fetalState.startTime) fetalState.startTime = Date.now();
  fetalState.timer = setInterval(updateFetalDisplay, 1000);
}
function stopFetalTimer() {
  if (fetalState.timer) { clearInterval(fetalState.timer); fetalState.timer = null; }
}
document.getElementById('fetal-tap').addEventListener('click', function(){
  if (!fetalState.startTime) fetalState.startTime = Date.now();
  startFetalTimer();
  if (fetalState.count < 10) fetalState.count++;
  updateFetalDisplay();
  if (fetalState.count >= 10) {
    stopFetalTimer();
    if (confirm('\u5DF2\u8FBE\u5230 10 \u6B21\u80CE\u52A8\uFF0C\u662F\u5426\u4FDD\u5B58\u4ECA\u65E5\u8BB0\u5F55\uFF1F')) {
      saveFetalRecord();
      fetalReset();
    }
  }
});
document.getElementById('fetal-reset').addEventListener('click', fetalReset);
function fetalReset() {
  if (fetalState.count > 0 && fetalState.startTime) {
    if (!confirm('\u5F53\u524D\u8BA1\u6570 ' + fetalState.count + ' \u6B21\u8981\u4E22\u5F03\u5417\uFF1F')) return;
  }
  fetalState.count = 0;
  fetalState.startTime = 0;
  stopFetalTimer();
  updateFetalDisplay();
}
function saveFetalRecord() {
  var date = todayISO();
  var existing = appData.fetalRecords.find(function(r){ return r.date === date; });
  var elapsed = Math.floor((Date.now() - fetalState.startTime) / 60000);
  if (existing) {
    existing.count = Math.max(existing.count, fetalState.count);
    existing.duration = elapsed;
  } else {
    appData.fetalRecords.push({ id:newId(appData.fetalRecords), date:date, count:fetalState.count, duration:elapsed });
  }
  saveData(); renderFetalHistory();
}
function renderFetalHistory() {
  var list = document.getElementById('fetal-history');
  var records = appData.fetalRecords.slice().sort(function(a,b){ return a.date.localeCompare(b.date); }).reverse().slice(0, 7);
  var html = '<h4 style="font-size:14px;color:var(--text);margin:12px 0 8px;">\u6700\u8FD1\u8BB0\u5F55</h4>';
  if (!records.length) { html += '<div style="text-align:center;color:var(--text-light);font-size:13px;padding:12px;">\u8FD8\u6CA1\u6709\u8BB0\u5F55</div>'; list.innerHTML = html; return; }
  for (var i = 0; i < records.length; i++) {
    var r = records[i];
    html += '<div class="fetal-history-item"><span class="fetal-history-date">' + r.date + '</span><span class="fetal-history-count">' + r.count + ' \u6B21 / ' + (r.duration || '--') + ' \u5206\u949F</span></div>';
  }
  list.innerHTML = html;
}
updateFetalDisplay();

/* ====== \u4F53\u91CD\u8BB0\u5F55 ====== */
function getWeightUnit() { return appData.weightUnit || 'kg'; }
function weightUnitLabel(unit) { return unit === 'jin' ? '\u65A4' : '\u516C\u65A4'; }
function formatWeight(weight, unit) {
  unit = unit || getWeightUnit();
  if (unit === 'jin') return (weight * 2).toFixed(1) + ' \u65A4';
  return weight.toFixed(1) + ' \u516C\u65A4';
}
function parseInputWeight(val, unit) {
  unit = unit || getWeightUnit();
  var n = parseFloat(val);
  if (isNaN(n)) return NaN;
  return unit === 'jin' ? n / 2 : n;
}
function updateWeightInputPlaceholder() {
  var unit = getWeightUnit();
  var input = document.getElementById('weight-value');
  var label = document.getElementById('weight-unit-label');
  var btn = document.getElementById('weight-unit-toggle');
  if (input) input.placeholder = '0.0';
  if (label) label.textContent = weightUnitLabel(unit);
  if (btn) btn.textContent = unit === 'jin' ? '\u5207\u6362\u4E3A\u516C\u65A4' : '\u5207\u6362\u4E3A\u65A4';
}
document.getElementById('weight-unit-toggle').addEventListener('click', function(){
  var input = document.getElementById('weight-value');
  var currentVal = parseFloat(input.value);
  var oldUnit = getWeightUnit();
  var newUnit = oldUnit === 'kg' ? 'jin' : 'kg';
  appData.weightUnit = newUnit;
  updateWeightInputPlaceholder();
  if (!isNaN(currentVal)) {
    input.value = oldUnit === 'kg' ? (currentVal * 2).toFixed(1) : (currentVal / 2).toFixed(1);
  }
  saveData(); renderWeightSection();
});
function resetWeightForm() {
  document.getElementById('weight-date').value = todayISO();
  document.getElementById('weight-value').value = '';
  document.getElementById('weight-week').value = '';
  document.getElementById('weight-note').value = '';
  document.getElementById('weight-edit-id').value = '';
  document.getElementById('add-weight-btn').textContent = '\u6DFB\u52A0';
  document.getElementById('cancel-weight-edit').style.display = 'none';
}
function renderWeightSection() {
  document.getElementById('weight-date').value = todayISO();
  updateWeightInputPlaceholder();
  var hInput = document.getElementById('preg-height');
  var wInput = document.getElementById('preg-pre-weight');
  if (hInput) hInput.value = appData.height || 170;
  if (wInput) wInput.value = appData.preWeight || '';
  renderWeightGuide(); renderWeightChart(); renderWeightList();
}
document.getElementById('add-weight-btn').addEventListener('click', function(){
  var date = document.getElementById('weight-date').value;
  var week = document.getElementById('weight-week').value;
  var note = document.getElementById('weight-note').value.trim();
  var editId = document.getElementById('weight-edit-id').value;
  var weightKg = parseInputWeight(document.getElementById('weight-value').value);
  if (!date || isNaN(weightKg)) { alert('\u8BF7\u586B\u5199\u65E5\u671F\u548C\u4F53\u91CD'); return; }
  if (editId) {
    var id = parseInt(editId);
    for (var i = 0; i < appData.weightRecords.length; i++) {
      if (appData.weightRecords[i].id === id) {
        appData.weightRecords[i].date = date;
        appData.weightRecords[i].weight = weightKg;
        appData.weightRecords[i].week = week;
        appData.weightRecords[i].note = note;
        break;
      }
    }
  } else {
    appData.weightRecords.push({ id:newId(appData.weightRecords), date:date, weight:weightKg, week:week, note:note });
  }
  saveData(); resetWeightForm(); renderWeightSection();
});
document.getElementById('cancel-weight-edit').addEventListener('click', resetWeightForm);
function renderWeightList() {
  var list = document.getElementById('weight-list');
  var unit = getWeightUnit();
  var records = appData.weightRecords.slice().sort(function(a,b){ return a.date.localeCompare(b.date); }).reverse();
  var html = '';
  for (var i = 0; i < records.length; i++) {
    var r = records[i];
    html += '<div class="record-item">';
    html += '<div class="record-main"><span class="record-date">' + r.date + '</span><span class="record-value">' + formatWeight(r.weight, unit) + '</span>' + (r.week ? '<span class="record-tag">\u5B55 ' + r.week + ' \u5468</span>' : '') + '</div>';
    if (r.note) html += '<div class="record-note">' + escapeHtml(r.note) + '</div>';
    html += '<button class="record-edit" data-id="' + r.id + '" data-type="weight" title="\u7F16\u8F91">\u270E</button>';
    html += '<button class="record-delete" data-id="' + r.id + '" data-type="weight" title="\u5220\u9664">\u2715</button>';
    html += '</div>';
  }
  list.innerHTML = html;
}
function editWeightRecord(id) {
  var r = appData.weightRecords.find(function(x){ return x.id === id; });
  if (!r) return;
  document.getElementById('weight-date').value = r.date;
  document.getElementById('weight-value').value = formatWeightForEdit(r.weight);
  document.getElementById('weight-week').value = r.week || '';
  document.getElementById('weight-note').value = r.note || '';
  document.getElementById('weight-edit-id').value = r.id;
  document.getElementById('add-weight-btn').textContent = '\u4FDD\u5B58\u4FEE\u6539';
  document.getElementById('cancel-weight-edit').style.display = 'inline-block';
  window.scrollTo({ top:0, behavior:'smooth' });
}
function formatWeightForEdit(weightKg) {
  var unit = getWeightUnit();
  return unit === 'jin' ? (weightKg * 2).toFixed(1) : weightKg.toFixed(1);
}
function renderWeightChart() {
  var chart = document.getElementById('weight-chart');
  var records = appData.weightRecords.slice().sort(function(a,b){ return a.date.localeCompare(b.date); });
  if (records.length < 2) { chart.innerHTML = '<div class="chart-placeholder">\u8BB0\u5F55 2 \u6761\u4EE5\u4E0A\u4F53\u91CD\u540E\u751F\u6210\u66F2\u7EBF</div>'; return; }
  var W = 600, H = 240, pad = { l:44, r:20, t:20, b:34 };
  var weights = records.map(function(r){ return r.weight; });
  var minW = Math.min.apply(null, weights) - 1, maxW = Math.max.apply(null, weights) + 1;
  var xStep = (W - pad.l - pad.r) / (records.length - 1);
  var points = [];
  for (var i = 0; i < records.length; i++) {
    var x = pad.l + i * xStep;
    var y = pad.t + (H - pad.t - pad.b) * (1 - (records[i].weight - minW) / (maxW - minW));
    points.push({ x:x, y:y, r:records[i] });
  }
  var polyline = points.map(function(p){ return p.x + ',' + p.y; }).join(' ');
  var svg = '<svg viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="none" style="width:100%;height:240px;">';
  for (var j = 0; j <= 4; j++) {
    var y = pad.t + j * (H - pad.t - pad.b) / 4;
    svg += '<line x1="' + pad.l + '" y1="' + y + '" x2="' + (W-pad.r) + '" y2="' + y + '" stroke="#eee" stroke-dasharray="3"/>';
    svg += '<text x="' + (pad.l-6) + '" y="' + (y+4) + '" text-anchor="end" font-size="11" fill="#999">' + (maxW - j*(maxW-minW)/4).toFixed(1) + '</text>';
  }
  svg += '<polyline fill="none" stroke="#5a7a4f" stroke-width="3" points="' + polyline + '"/>';
  for (var k = 0; k < points.length; k++) {
    svg += '<circle cx="' + points[k].x + '" cy="' + points[k].y + '" r="5" fill="#5a7a4f" stroke="white" stroke-width="2"/>';
    svg += '<text x="' + points[k].x + '" y="' + (points[k].y-10) + '" text-anchor="middle" font-size="10" fill="#666">' + points[k].r.weight + '</text>';
  }
  for (var m = 0; m < points.length; m++) {
    if (records.length <= 7 || m % Math.ceil(records.length/7) === 0) svg += '<text x="' + points[m].x + '" y="' + (H-8) + '" text-anchor="middle" font-size="10" fill="#999">' + points[m].r.date.slice(5) + '</text>';
  }
  svg += '</svg>';
  chart.innerHTML = svg;
}

/* ====== \u5B55\u671F\u4F53\u91CD\u589E\u957F\u53C2\u8003\u8868 ====== */
var PREGNANCY_WEIGHT_GUIDE = {
  bmi_low: {
    label: '\u504F\u7626\uFF08BMI < 18.5\uFF09', totalRange: [12.5, 18],
    phases: [
      { phase: '\u5B55\u65E9\u671F', weeks: '1-12 \u5468', total: '0.5-2 kg', weekly: '0-0.2 kg', note: '\u589E\u957F\u7F13\u6162\uFF0C\u6CE8\u610F\u53F6\u9178\u8865\u5145' },
      { phase: '\u5B55\u4E2D\u671F', weeks: '13-27 \u5468', total: '\u7D2F\u8BA1 5-7 kg', weekly: '0.5-0.6 kg', note: '\u8FDB\u5165\u5FEB\u901F\u589E\u957F\u671F\uFF0C\u91CD\u70B9\u8865\u86CB\u767D' },
      { phase: '\u5B55\u665A\u671F', weeks: '28-40 \u5468', total: '\u7D2F\u8BA1 5-7 kg', weekly: '0.5-0.6 kg', note: '\u7A33\u5B9A\u589E\u957F\uFF0C\u5C11\u98DF\u591A\u9910' }
    ]
  },
  bmi_standard: {
    label: '\u6807\u51C6\uFF08BMI 18.5-24.0\uFF09', totalRange: [11.5, 16],
    phases: [
      { phase: '\u5B55\u65E9\u671F', weeks: '1-12 \u5468', total: '1-2 kg', weekly: '0-0.2 kg', note: '\u589E\u957F\u7F13\u6162\uFF0C\u6CE8\u610F\u53F6\u9178' },
      { phase: '\u5B55\u4E2D\u671F', weeks: '13-27 \u5468', total: '\u7D2F\u8BA1 4-6 kg', weekly: '0.4-0.5 kg', note: '\u7A33\u5B9A\u589E\u957F\uFF0C\u8865\u9499\u8865\u94C1' },
      { phase: '\u5B55\u665A\u671F', weeks: '28-40 \u5468', total: '\u7D2F\u8BA1 4-6 kg', weekly: '0.4-0.5 kg', note: '\u7EE7\u7EED\u589E\u957F\uFF0C\u63A7\u7CD6\u63A7\u76D0' }
    ]
  },
  bmi_high: {
    label: '\u504F\u80D6\uFF08BMI \u2265 24.0\uFF09', totalRange: [7, 11.5],
    phases: [
      { phase: '\u5B55\u65E9\u671F', weeks: '1-12 \u5468', total: '0.5-1.5 kg', weekly: '0-0.1 kg', note: '\u63A7\u5236\u589E\u957F\uFF0C\u4F4E\u7CD6\u4F4E\u8102' },
      { phase: '\u5B55\u4E2D\u671F', weeks: '13-27 \u5468', total: '\u7D2F\u8BA1 3-4 kg', weekly: '0.25-0.3 kg', note: '\u6CE8\u610F\u996E\u98DF\u7ED3\u6784' },
      { phase: '\u5B55\u665A\u671F', weeks: '28-40 \u5468', total: '\u7D2F\u8BA1 3-4 kg', weekly: '0.25-0.3 kg', note: '\u6301\u7EED\u63A7\u5236\uFF0C\u76D1\u6D4B\u8840\u538B' }
    ]
  }
};
var DIET_SUGGESTIONS = {
  '\u5B55\u65E9\u671F': {
    title: '\uD83E\uDD57 \u996E\u98DF\u5EFA\u8BAE\uFF08\u5B55\u65E9\u671F\uFF09',
    food: '\u53F6\u9178\u4E30\u5BCC\uFF1A\u83E0\u83DC\u3001\u82A6\u7B0B\u3001\u52A8\u7269\u809D\u810F\u3001\u8C46\u7C7B\uFF1B\u7F13\u89E3\u5B55\u5410\uFF1A\u9999\u8549\u3001\u71D5\u9EA6\u3001\u575A\u679C\u3001\u82CF\u6253\u997C\u5E72',
    nutrition: '\u53F6\u9178 400-600 \u03BCg/\u5929\u3001\u7EF4\u751F\u7D20 B6\u3001\u94C1 20mg',
    tips: '\u5C11\u98DF\u591A\u9910\uFF0C\u907F\u514D\u6CB9\u817B\u548C\u6C14\u5473\u91CD\u7684\u98DF\u7269\uFF1B\u6668\u8D77\u5148\u5403\u51E0\u7247\u997C\u5E72\u7F13\u89E3\u5B55\u5410'
  },
  '\u5B55\u4E2D\u671F': {
    title: '\uD83E\uDD57 \u996E\u98DF\u5EFA\u8BAE\uFF08\u5B55\u4E2D\u671F\uFF09',
    food: '\u4F18\u8D28\u86CB\u767D\uFF1A\u9E21\u86CB\u3001\u725B\u5976\u3001\u9C7C\u3001\u7626\u8089\uFF08\u6BCF\u5929 200g\uFF09\uFF1B\u8865\u9499\uFF1A\u5976\u5236\u54C1\u3001\u8C46\u8150\u3001\u6DF1\u7EFF\u852C\u83DC\uFF1BDHA\uFF1A\u6DF1\u6D77\u9C7C\u6BCF\u5468 2-3 \u6B21\u3001\u6838\u6843',
    nutrition: '\u86CB\u767D\u8D28 70-80g/\u5929\u3001\u9499 1000mg\u3001\u94C1 28mg\u3001DHA 200-300mg',
    tips: '\u6BCF\u5929\u52A0\u9910 1-2 \u6B21\uFF08\u9178\u5976+\u575A\u679C/\u6C34\u679C\uFF09\uFF1B\u4E3B\u98DF\u7C97\u7EC6\u642D\u914D\uFF0C\u63A7\u5236\u7CBE\u5236\u7CD6'
  },
  '\u5B55\u665A\u671F': {
    title: '\uD83E\uDD57 \u996E\u98DF\u5EFA\u8BAE\uFF08\u5B55\u665A\u671F\uFF09',
    food: '\u9AD8\u86CB\u767D\uFF1A\u9C7C\u79BD\u86CB\u7626\u8089\uFF1B\u81B3\u98DF\u7EA4\u7EF4\u9632\u4FBF\u79D8\uFF1A\u5168\u8C37\u7269\u3001\u82B9\u83DC\u3001\u706B\u9F99\u679C\uFF1B\u8865\u94C1\uFF1A\u7EA2\u8089\u3001\u52A8\u7269\u8840',
    nutrition: '\u86CB\u767D\u8D28 80-100g/\u5929\u3001\u9499 1200mg\u3001\u94C1 28mg\u3001\u81B3\u98DF\u7EA4\u7EF4 25-30g',
    tips: '\u5C11\u98DF\u591A\u9910\u907F\u514D\u80C3\u53CD\u6D41\uFF1B\u7761\u524D 2 \u5C0F\u65F6\u4E0D\u8FDB\u98DF\uFF1B\u63A7\u5236\u76D0\u5206\u9632\u6C34\u80BF'
  }
};
var EXERCISE_SUGGESTIONS = {
  '\u5B55\u65E9\u671F': {
    title: '\uD83C\uDFC3 \u8FD0\u52A8\u5EFA\u8BAE\uFF08\u5B55\u65E9\u671F\uFF09',
    content: '\u6563\u6B65 20-30 \u5206\u949F/\u5929\uFF1B\u5B55\u5987\u745C\u4F3D\uFF08\u907F\u514D\u8DF3\u8DC3\u548C\u626D\u8F6C\u52A8\u4F5C\uFF09\uFF1B\u51EF\u683C\u5C14\u8FD0\u52A8\u6BCF\u5929 3 \u7EC4\u6BCF\u7EC4 10 \u6B21',
    tips: '\u907F\u514D\u5267\u70C8\u8FD0\u52A8\u548C\u8179\u90E8\u53D7\u538B\uFF1B\u6709\u51FA\u8840\u6216\u5148\u5146\u6D41\u4EA7\u9700\u5367\u5E8A\u4F11\u606F'
  },
  '\u5B55\u4E2D\u671F': {
    title: '\uD83C\uDFC3 \u8FD0\u52A8\u5EFA\u8BAE\uFF08\u5B55\u4E2D\u671F\uFF09',
    content: '\u5FEB\u6B65\u8D70 30-45 \u5206\u949F/\u5929\uFF1B\u5B55\u5987\u666E\u62C9\u63D0\uFF08\u5F3A\u5316\u6838\u5FC3\u548C\u76C6\u5E95\u808C\uFF09\uFF1B\u6E38\u6CF3\uFF08\u7F13\u89E3\u8170\u80CC\u75DB\uFF09\uFF1B\u51EF\u683C\u5C14\u8FD0\u52A8',
    tips: '\u6700\u4F73\u8FD0\u52A8\u671F\uFF0C\u53EF\u9002\u5F53\u589E\u52A0\u5F3A\u5EA6\uFF1B\u907F\u514D\u4EF0\u5367\u4F4D\u8FC7\u4E45\uFF08\u9632\u6B62\u538B\u8FEB\u4E0B\u8154\u9759\u8109\uFF09'
  },
  '\u5B55\u665A\u671F': {
    title: '\uD83C\uDFC3 \u8FD0\u52A8\u5EFA\u8BAE\uFF08\u5B55\u665A\u671F\uFF09',
    content: '\u6162\u8D70 30 \u5206\u949F/\u5929\uFF1B\u76D8\u817F\u5750\u62C9\u4F38\u6253\u5F00\u9AA8\u76C6\uFF1B\u6DF1\u8E72\u7EC3\u4E60\uFF08\u6276\u5899\uFF0C\u4E3A\u5206\u5A29\u505A\u51C6\u5907\uFF09\uFF1B\u4F1A\u9634\u6309\u6469\uFF1B\u51EF\u683C\u5C14\u8FD0\u52A8',
    tips: '\u907F\u514D\u5267\u70C8\u8FD0\u52A8\u548C\u957F\u65F6\u95F4\u7AD9\u7ACB\uFF1B\u51FA\u73B0\u89C4\u5F8B\u5BAB\u7F29\u3001\u7834\u6C34\u3001\u89C1\u7EA2\u7ACB\u5373\u505C\u6B62\u8FD0\u52A8\u5C31\u533B'
  }
};
function getPreWeight() {
  if (appData.preWeight) return appData.preWeight;
  var records = appData.weightRecords.slice().sort(function(a,b){ return a.date.localeCompare(b.date); });
  if (records.length) return records[0].weight;
  return null;
}
function getCurrentPregnancyWeek() {
  if (appData.lmpDate) {
    var totalDays = daysBetween(appData.lmpDate, new Date());
    if (totalDays >= 0) return Math.floor(totalDays / 7) + 1;
  }
  if (appData.babyRecords && appData.babyRecords.length) {
    var last = appData.babyRecords.slice().sort(function(a,b){ return b.totalDays - a.totalDays; })[0];
    if (last && last.week) return last.week;
  }
  return null;
}
function getBmiCategory(bmi) {
  if (bmi < 18.5) return 'bmi_low';
  if (bmi >= 24) return 'bmi_high';
  return 'bmi_standard';
}
function renderWeightGuide() {
  var summaryEl = document.getElementById('weight-guide-summary');
  var tableEl = document.getElementById('weight-guide-table-wrap');
  var suggEl = document.getElementById('weight-guide-suggestion');
  if (!summaryEl) return;
  var preWeight = getPreWeight();
  var records = appData.weightRecords.slice().sort(function(a,b){ return a.date.localeCompare(b.date); });
  var currentWeight = records.length ? records[records.length - 1].weight : (preWeight || 0);
  var gained = preWeight ? (currentWeight - preWeight) : 0;
  var heightM = appData.height ? appData.height / 100 : 1.70;
  var bmi = preWeight ? preWeight / (heightM * heightM) : (currentWeight / (heightM * heightM));
  var categoryKey = getBmiCategory(bmi);
  var guide = PREGNANCY_WEIGHT_GUIDE[categoryKey];
  var week = getCurrentPregnancyWeek();
  var weekNum = week || 0;
  var currentPhase = weekNum < 13 ? '\u5B55\u65E9\u671F' : (weekNum < 28 ? '\u5B55\u4E2D\u671F' : '\u5B55\u665A\u671F');
  var summaryHtml = '';
  summaryHtml += '<div class="wgs-item"><div class="wgs-label">BMI \u5206\u7C7B</div><div class="wgs-value">' + bmi.toFixed(1) + '</div><div class="wgs-sub">' + guide.label + '</div></div>';
  summaryHtml += '<div class="wgs-item"><div class="wgs-label">\u63A8\u8350\u603B\u589E\u91CD</div><div class="wgs-value">' + guide.totalRange[0] + '-' + guide.totalRange[1] + ' kg</div><div class="wgs-sub">\u6574\u4E2A\u5B55\u671F</div></div>';
  if (preWeight) {
    var gainStatus = '', gainClass = '';
    if (gained > guide.totalRange[1]) { gainStatus = '\u5DF2\u8D85\u6807'; gainClass = 'alarm'; }
    else if (gained < guide.totalRange[0] * (weekNum / 40)) { gainStatus = '\u504F\u6162'; gainClass = 'warn'; }
    else { gainStatus = '\u6B63\u5E38'; }
    summaryHtml += '<div class="wgs-item ' + gainClass + '"><div class="wgs-label">\u5DF2\u589E\u91CD</div><div class="wgs-value">' + gained.toFixed(1) + ' kg</div><div class="wgs-sub">' + gainStatus + '</div></div>';
  } else {
    summaryHtml += '<div class="wgs-item warn"><div class="wgs-label">\u5DF2\u589E\u91CD</div><div class="wgs-value">--</div><div class="wgs-sub">\u8BF7\u5148\u8BB0\u5F55\u4F53\u91CD</div></div>';
  }
  if (week) {
    summaryHtml += '<div class="wgs-item"><div class="wgs-label">\u5F53\u524D\u5B55\u5468</div><div class="wgs-value">' + weekNum + ' \u5468</div><div class="wgs-sub">' + currentPhase + '</div></div>';
  } else {
    summaryHtml += '<div class="wgs-item warn"><div class="wgs-label">\u5F53\u524D\u5B55\u5468</div><div class="wgs-value">\u672A\u8BBE\u7F6E</div><div class="wgs-sub">\u8BF7\u8BBE\u7F6E\u672B\u6B21\u6708\u7ECF</div></div>';
  }
  summaryEl.innerHTML = summaryHtml;
  var tableHtml = '<table class="weight-guide-table"><thead><tr><th>\u9636\u6BB5</th><th>\u5B55\u5468</th><th>\u7D2F\u8BA1\u589E\u91CD</th><th>\u6BCF\u5468\u589E\u957F</th><th>\u8BF4\u660E</th></tr></thead><tbody>';
  for (var i = 0; i < guide.phases.length; i++) {
    var p = guide.phases[i];
    var isCurrent = p.phase === currentPhase;
    tableHtml += '<tr class="' + (isCurrent ? 'wg-current' : '') + '">';
    tableHtml += '<td class="wg-phase">' + p.phase + (isCurrent ? '<span class="wg-tag wg-tag-current">\u5F53\u524D</span>' : '') + '</td>';
    tableHtml += '<td>' + p.weeks + '</td>';
    tableHtml += '<td>' + p.total + '</td>';
    tableHtml += '<td>' + p.weekly + '</td>';
    tableHtml += '<td>' + p.note + '</td>';
    tableHtml += '</tr>';
  }
  tableHtml += '</tbody></table>';
  tableEl.innerHTML = tableHtml;
  var diet = DIET_SUGGESTIONS[currentPhase];
  var exer = EXERCISE_SUGGESTIONS[currentPhase];
  var suggHtml = '<h5>\uD83D\uDCCB ' + currentPhase + ' \u4E2A\u6027\u5316\u5EFA\u8BAE</h5>';
  suggHtml += '<div class="wgs-section"><span class="wgs-section-title">' + diet.title + '</span>';
  suggHtml += '<strong>\u63A8\u8350\u98DF\u7269\uFF1A</strong>' + diet.food + '<br>';
  suggHtml += '<strong>\u8425\u517B\u7D20\uFF1A</strong>' + diet.nutrition + '<br>';
  suggHtml += '<strong>\u5C0F\u8D34\u58EB\uFF1A</strong>' + diet.tips + '</div>';
  suggHtml += '<div class="wgs-section"><span class="wgs-section-title">' + exer.title + '</span>';
  suggHtml += exer.content + '<br>';
  suggHtml += '<strong>\u6CE8\u610F\uFF1A</strong>' + exer.tips + '</div>';
  suggEl.innerHTML = suggHtml;
}
document.getElementById('weight-guide-toggle').addEventListener('click', function(){
  document.getElementById('weight-guide-card').classList.toggle('collapsed');
});
document.getElementById('save-preg-info-btn').addEventListener('click', function(){
  var h = parseFloat(document.getElementById('preg-height').value);
  var w = parseFloat(document.getElementById('preg-pre-weight').value);
  if (!isNaN(h) && h > 0) appData.height = h;
  if (!isNaN(w) && w > 0) appData.preWeight = w;
  saveData(); renderWeightSection();
});
function renderPoopSection() { document.getElementById('poop-date').value = todayISO(); renderPoopList(); }
function resetPoopForm() {
  document.getElementById('poop-date').value = todayISO();
  document.getElementById('poop-status').value = '';
  document.getElementById('poop-note').value = '';
  document.getElementById('poop-edit-id').value = '';
  document.getElementById('add-poop-btn').textContent = '\u6DFB\u52A0';
  document.getElementById('cancel-poop-edit').style.display = 'none';
}
document.getElementById('add-poop-btn').addEventListener('click', function(){
  var date = document.getElementById('poop-date').value;
  var status = document.getElementById('poop-status').value;
  var note = document.getElementById('poop-note').value.trim();
  var editId = document.getElementById('poop-edit-id').value;
  if (!date || !status) { alert('\u8BF7\u586B\u5199\u65E5\u671F\u548C\u72B6\u6001'); return; }
  if (editId) {
    var id = parseInt(editId);
    for (var i = 0; i < appData.poopRecords.length; i++) {
      if (appData.poopRecords[i].id === id) {
        appData.poopRecords[i].date = date;
        appData.poopRecords[i].status = status;
        appData.poopRecords[i].note = note;
        break;
      }
    }
  } else {
    appData.poopRecords.push({ id:newId(appData.poopRecords), date:date, status:status, note:note });
  }
  saveData(); resetPoopForm(); renderPoopSection();
});
document.getElementById('cancel-poop-edit').addEventListener('click', resetPoopForm);
var POOP_LABELS = { normal:'\u6B63\u5E38', dry:'\u504F\u5E72', diarrhea:'\u504F\u7A00', difficult:'\u56F0\u96BE', none:'\u672A\u6392\u4FBF' };
function renderPoopList() {
  var list = document.getElementById('poop-list');
  var records = appData.poopRecords.slice().sort(function(a,b){ return a.date.localeCompare(b.date); }).reverse();
  var html = '';
  for (var i = 0; i < records.length; i++) {
    var r = records[i];
    html += '<div class="record-item">';
    html += '<div class="record-main"><span class="record-date">' + r.date + '</span><span class="record-value">' + POOP_LABELS[r.status] + '</span></div>';
    if (r.note) html += '<div class="record-note">' + escapeHtml(r.note) + '</div>';
    html += '<button class="record-edit" data-id="' + r.id + '" data-type="poop" title="\u7F16\u8F91">\u270E</button>';
    html += '<button class="record-delete" data-id="' + r.id + '" data-type="poop" title="\u5220\u9664">\u2715</button>';
    html += '</div>';
  }
  list.innerHTML = html;
}
function editPoopRecord(id) {
  var r = appData.poopRecords.find(function(x){ return x.id === id; });
  if (!r) return;
  document.getElementById('poop-date').value = r.date;
  document.getElementById('poop-status').value = r.status;
  document.getElementById('poop-note').value = r.note || '';
  document.getElementById('poop-edit-id').value = r.id;
  document.getElementById('add-poop-btn').textContent = '\u4FDD\u5B58\u4FEE\u6539';
  document.getElementById('cancel-poop-edit').style.display = 'inline-block';
  window.scrollTo({ top:0, behavior:'smooth' });
}

/* ====== \u5B9D\u5B9D\u6210\u957F\u72B6\u6001 ====== */
var BABY_GROWTH_DATA = {
  4:  { length:0.4, weight:'--', baby:'\u53D7\u7CBE\u5375\u7740\u5E8A\uFF0C\u5F00\u59CB\u5206\u88C2\u53D1\u80B2\uFF0C\u50CF\u829D\u9EBB\u4E00\u6837\u5C0F\u3002', mom:'\u53EF\u80FD\u8FD8\u6CA1\u4EC0\u4E48\u611F\u89C9\uFF0C\u6FC0\u7D20\u6C34\u5E73\u5F00\u59CB\u53D8\u5316\u3002' },
  5:  { length:0.6, weight:'--', baby:'\u80DA\u80CE\u50CF\u82F9\u679C\u7C7D\uFF0C\u795E\u7ECF\u7BA1\u5F00\u59CB\u5F62\u6210\u3002', mom:'\u53EF\u80FD\u51FA\u73B0\u8F7B\u5FAE\u75B2\u52B3\u3001\u4E73\u623F\u80C0\u75DB\u3002' },
  6:  { length:0.8, weight:'--', baby:'\u5FC3\u810F\u5F00\u59CB\u8DF3\u52A8\uFF0C\u56DB\u80A2\u82BD\u51FA\u73B0\uFF0C\u50CF\u6241\u8C46\u5927\u5C0F\u3002', mom:'\u65E9\u5B55\u53CD\u5E94\u53EF\u80FD\u51FA\u73B0\uFF0C\u5BB9\u6613\u6076\u5FC3\u3001\u55DC\u7761\u3002' },
  7:  { length:1.0, weight:'--', baby:'\u5934\u90E8\u53D1\u80B2\u660E\u663E\uFF0C\u773C\u775B\u3001\u9F3B\u5B50\u5F00\u59CB\u6210\u5F62\u3002', mom:'\u5B55\u5410\u53EF\u80FD\u52A0\u91CD\uFF0C\u6CE8\u610F\u5C11\u98DF\u591A\u9910\u3002' },
  8:  { length:1.6, weight:'1', baby:'\u521D\u5177\u4EBA\u5F62\uFF0C\u624B\u6307\u811A\u8DBE\u5F00\u59CB\u53D1\u80B2\uFF0C\u50CF\u82B8\u8C46\u5927\u5C0F\u3002', mom:'\u5B50\u5BAB\u5728\u6162\u6162\u589E\u5927\uFF0C\u8179\u90E8\u8FD8\u6CA1\u660E\u663E\u53D8\u5316\u3002' },
  9:  { length:2.2, weight:'2', baby:'\u4E94\u5B98\u66F4\u6E05\u6670\uFF0C\u5FC3\u810F\u5206\u6210\u56DB\u4E2A\u8154\u5BA4\u3002', mom:'\u4E73\u623F\u80C0\u75DB\u6301\u7EED\uFF0C\u60C5\u7EEA\u53EF\u80FD\u6CE2\u52A8\u8F83\u5927\u3002' },
  10: { length:3.1, weight:'4', baby:'\u6B63\u5F0F\u8FDB\u5165\u80CE\u513F\u671F\uFF0C\u624B\u81C2\u53EF\u5F2F\u66F2\uFF0C\u50CF\u91D1\u6854\u5927\u5C0F\u3002', mom:'\u65E9\u5B55\u53CD\u5E94\u53EF\u80FD\u51CF\u8F7B\uFF0C\u7CBE\u529B\u7565\u6709\u6062\u590D\u3002' },
  11: { length:4.1, weight:'7', baby:'\u810A\u67F1\u5F00\u59CB\u9AA8\u5316\uFF0C\u4F1A\u505A\u5438\u542E\u548C\u541E\u54BD\u52A8\u4F5C\u3002', mom:'\u8179\u90E8\u8F7B\u5FAE\u9686\u8D77\uFF0C\u88E4\u5B50\u53EF\u80FD\u53D8\u7D27\u3002' },
  12: { length:5.4, weight:'14', baby:'\u6240\u6709\u5668\u5B98\u57FA\u672C\u5F62\u6210\uFF0CNT\u68C0\u67E5\u7684\u597D\u65F6\u673A\u3002', mom:'\u5B55\u5410\u660E\u663E\u51CF\u8F7B\uFF0C\u98DF\u6B32\u5F00\u59CB\u6062\u590D\u3002' },
  13: { length:7.4, weight:'23', baby:'\u6307\u7EB9\u5F62\u6210\uFF0C\u80BE\u810F\u5F00\u59CB\u4EA7\u751F\u5C3F\u6DB2\u3002', mom:'\u8179\u90E8\u9686\u8D77\u66F4\u660E\u663E\uFF0C\u6CE8\u610F\u8865\u5145\u8425\u517B\u3002' },
  14: { length:8.7, weight:'43', baby:'\u9762\u90E8\u7279\u5F81\u66F4\u660E\u663E\uFF0C\u4F1A\u505A\u9B3C\u8138\u3002', mom:'\u7CBE\u529B\u6062\u590D\uFF0C\u80CE\u76D8\u5F00\u59CB\u627F\u62C5\u66F4\u591A\u529F\u80FD\u3002' },
  15: { length:10.4, weight:'70', baby:'\u56DB\u80A2\u7279\u522B\u6D3B\u8DC3\uFF0C\u52A8\u4F5C\u53D8\u5F97\u9891\u7E41\uFF0C\u4F46\u5988\u5988\u53EF\u80FD\u8FD8\u611F\u53D7\u4E0D\u5230\u3002', mom:'\u9F3B\u5B50\u5BB9\u6613\u5145\u8840\u751A\u81F3\u51FA\u8840\uFF0C\u591A\u559D\u6C34\u591A\u5403\u679C\u852C\u3002' },
  16: { length:11.6, weight:'100', baby:'\u9AA8\u9ABC\u53D8\u786C\uFF0C\u542C\u89C9\u5F00\u59CB\u53D1\u80B2\u3002', mom:'\u8179\u90E8\u660E\u663E\u9686\u8D77\uFF0C\u53EF\u80FD\u5F00\u59CB\u611F\u53D7\u5230\u8F7B\u5FAE\u80CE\u52A8\u3002' },
  17: { length:13.0, weight:'140', baby:'\u76AE\u4E0B\u8102\u80AA\u5F00\u59CB\u79EF\u7D2F\uFF0C\u4F1A\u5438\u542E\u62C7\u6307\u3002', mom:'\u98DF\u6B32\u589E\u52A0\uFF0C\u6CE8\u610F\u63A7\u5236\u4F53\u91CD\u589E\u957F\u3002' },
  18: { length:14.2, weight:'190', baby:'\u80CE\u52A8\u66F4\u660E\u663E\uFF0C\u80FD\u542C\u5230\u5916\u754C\u58F0\u97F3\u3002', mom:'\u8170\u80CC\u90E8\u538B\u529B\u589E\u52A0\uFF0C\u6CE8\u610F\u59FF\u52BF\u3002' },
  19: { length:15.3, weight:'240', baby:'\u611F\u89C9\u5668\u5B98\u8FC5\u901F\u53D1\u5C55\uFF0C\u5927\u8111\u795E\u7ECF\u8FDE\u63A5\u589E\u52A0\u3002', mom:'\u53EF\u80FD\u51FA\u73B0\u76AE\u80A4\u7619\u75D2\uFF0C\u6CE8\u610F\u4FDD\u6E7F\u3002' },
  20: { length:16.4, weight:'300', baby:'\u56DB\u80A2\u548C\u8EAF\u5E72\u6BD4\u4F8B\u66F4\u534F\u8C03\uFF0C\u5927\u6392\u7578\u68C0\u67E5\u597D\u65F6\u673A\u3002', mom:'\u5B50\u5BAB\u9876\u5230\u809A\u8110\uFF0C\u80CE\u52A8\u50CF\u5C0F\u9C7C\u6E38\u3002' },
  21: { length:26.7, weight:'360', baby:'\u4F53\u91CD\u5FEB\u901F\u589E\u52A0\uFF0C\u7709\u6BDB\u548C\u776B\u6BDB\u5F00\u59CB\u751F\u957F\u3002', mom:'\u7CBE\u529B\u65FA\u76DB\u671F\uFF0C\u6CE8\u610F\u9002\u5F53\u8FD0\u52A8\u3002' },
  22: { length:27.8, weight:'430', baby:'\u76AE\u80A4\u5F00\u59CB\u6709\u76B1\u7EB9\uFF0C\u542C\u89C9\u66F4\u654F\u9510\u3002', mom:'\u8179\u90E8\u7EE7\u7EED\u589E\u5927\uFF0C\u53EF\u80FD\u51FA\u73B0\u598A\u5A20\u7EB9\u3002' },
  23: { length:28.9, weight:'501', baby:'\u80BA\u90E8\u5F00\u59CB\u53D1\u80B2\uFF0C\u4E3A\u51FA\u751F\u540E\u547C\u5438\u505A\u51C6\u5907\u3002', mom:'\u80CE\u52A8\u89C4\u5F8B\uFF0C\u6CE8\u610F\u4F11\u606F\u907F\u514D\u52B3\u7D2F\u3002' },
  24: { length:30.0, weight:'600', baby:'\u76AE\u80A4\u8584\u800C\u900F\u660E\uFF0C\u80FD\u542C\u5230\u5988\u5988\u5FC3\u8DF3\u548C\u80A0\u80C3\u8815\u52A8\u3002', mom:'\u53EF\u80FD\u51FA\u73B0\u8170\u9178\u80CC\u75DB\uFF0C\u9002\u5F53\u6309\u6469\u7F13\u89E3\u3002' },
  25: { length:34.6, weight:'680', baby:'\u76AE\u4E0B\u8102\u80AA\u589E\u591A\uFF0C\u76AE\u80A4\u5F00\u59CB\u53D8\u5149\u6ED1\u3002', mom:'\u547C\u5438\u56F0\u96BE\u53EF\u80FD\u52A0\u91CD\uFF0C\u907F\u514D\u5E73\u8EBA\u3002' },
  26: { length:35.6, weight:'760', baby:'\u773C\u775B\u5F00\u59CB\u7741\u5F00\uFF0C\u5BF9\u5916\u754C\u5149\u7EBF\u6709\u53CD\u5E94\u3002', mom:'\u5C3F\u9891\u53EF\u80FD\u518D\u6B21\u51FA\u73B0\uFF0C\u907F\u514D\u618B\u5C3F\u3002' },
  27: { length:36.6, weight:'875', baby:'\u5927\u8111\u5FEB\u901F\u53D1\u80B2\uFF0C\u7761\u7720\u65F6\u95F4\u89C4\u5F8B\u3002', mom:'\u8EAB\u4F53\u91CD\u5FC3\u524D\u79FB\uFF0C\u6CE8\u610F\u9632\u8DCC\u5012\u3002' },
  28: { length:37.6, weight:'1000', baby:'\u8FDB\u5165\u5B55\u665A\u671F\uFF0C\u80BA\u90E8\u7EE7\u7EED\u6210\u719F\u3002', mom:'\u53EF\u80FD\u51FA\u73B0\u5047\u6027\u5BAB\u7F29\uFF0C\u6CE8\u610F\u4F11\u606F\u3002' },
  29: { length:38.6, weight:'1150', baby:'\u808C\u8089\u548C\u80BA\u90E8\u7EE7\u7EED\u53D1\u80B2\uFF0C\u5934\u56F4\u589E\u5927\u3002', mom:'\u8179\u90E8\u6C89\u91CD\uFF0C\u6CE8\u610F\u5DE6\u4FA7\u5367\u4F4D\u4F11\u606F\u3002' },
  30: { length:39.9, weight:'1300', baby:'\u5934\u53D1\u5F00\u59CB\u751F\u957F\uFF0C\u6307\u7532\u53D8\u957F\u3002', mom:'\u53EF\u80FD\u51FA\u73B0\u6C34\u80BF\uFF0C\u6CE8\u610F\u63A7\u76D0\u3002' },
  31: { length:41.1, weight:'1500', baby:'\u76AE\u4E0B\u8102\u80AA\u8FDB\u4E00\u6B65\u589E\u52A0\uFF0C\u4F53\u6E29\u8C03\u8282\u80FD\u529B\u53D1\u5C55\u3002', mom:'\u80CE\u52A8\u6709\u529B\uFF0C\u6CE8\u610F\u6570\u80CE\u52A8\u3002' },
  32: { length:42.4, weight:'1700', baby:'\u76AE\u80A4\u53D8\u7C89\u7EA2\uFF0C\u624B\u6307\u7532\u548C\u811A\u8DBE\u7532\u957F\u9F50\u3002', mom:'\u5B50\u5BAB\u9876\u5230\u808B\u9AA8\u4E0B\u7F18\uFF0C\u5C11\u98DF\u591A\u9910\u3002' },
  33: { length:43.7, weight:'1900', baby:'\u80BA\u90E8\u63A5\u8FD1\u6210\u719F\uFF0C\u9AA8\u9ABC\u53D8\u786C\u4F46\u4ECD\u67D4\u8F6F\u3002', mom:'\u53EF\u80FD\u51FA\u73B0\u7761\u7720\u56F0\u96BE\uFF0C\u7528\u6795\u5934\u652F\u6491\u3002' },
  34: { length:45.0, weight:'2150', baby:'\u514D\u75AB\u7CFB\u7EDF\u5F00\u59CB\u5DE5\u4F5C\uFF0C\u80FD\u8BC6\u522B\u5988\u5988\u58F0\u97F3\u3002', mom:'\u5047\u6027\u5BAB\u7F29\u66F4\u9891\u7E41\uFF0C\u6CE8\u610F\u533A\u5206\u771F\u5047\u4E34\u4EA7\u3002' },
  35: { length:46.2, weight:'2350', baby:'\u8EAB\u4F53\u5404\u5668\u5B98\u57FA\u672C\u6210\u719F\uFF0C\u6B63\u5728\u589E\u52A0\u4F53\u91CD\u3002', mom:'\u547C\u5438\u56F0\u96BE\u53EF\u80FD\u7F13\u89E3\uFF0C\u80CE\u513F\u4E0B\u964D\u5165\u76C6\u3002' },
  36: { length:47.5, weight:'2600', baby:'\u76AE\u4E0B\u8102\u80AA\u9971\u6EE1\uFF0C\u50CF\u5C0F\u897F\u74DC\u5927\u5C0F\u3002', mom:'\u5C3F\u9891\u52A0\u91CD\uFF0C\u51C6\u5907\u5F85\u4EA7\u5305\u3002' },
  37: { length:48.6, weight:'2850', baby:'\u8DB3\u6708\uFF0C\u80BA\u90E8\u548C\u5927\u8111\u5B8C\u5168\u6210\u719F\uFF0C\u968F\u65F6\u53EF\u80FD\u51FA\u751F\u3002', mom:'\u53EF\u80FD\u6709\u4E0B\u5760\u611F\uFF0C\u6CE8\u610F\u4E34\u4EA7\u5F81\u5146\u3002' },
  38: { length:49.8, weight:'3000', baby:'\u4F53\u91CD\u6301\u7EED\u589E\u52A0\uFF0C\u5934\u53D1\u53D8\u6D53\u5BC6\u3002', mom:'\u8EAB\u4F53\u51C6\u5907\u5206\u5A29\uFF0C\u6CE8\u610F\u4F11\u606F\u4FDD\u5B58\u4F53\u529B\u3002' },
  39: { length:50.7, weight:'3150', baby:'\u7F8A\u6C34\u91CF\u53EF\u80FD\u51CF\u5C11\uFF0C\u80CE\u52A8\u4ECD\u8981\u5173\u6CE8\u3002', mom:'\u968F\u65F6\u53EF\u80FD\u4E34\u4EA7\uFF0C\u51C6\u5907\u597D\u5165\u9662\u7269\u54C1\u3002' },
  40: { length:51.2, weight:'3200', baby:'\u9884\u4EA7\u671F\u5230\u4E86\uFF0C\u968F\u65F6\u51C6\u5907\u548C\u5988\u5988\u89C1\u9762\u3002', mom:'\u6CE8\u610F\u89C4\u5F8B\u5BAB\u7F29\u3001\u7834\u6C34\u3001\u89C1\u7EA2\u7B49\u4E34\u4EA7\u4FE1\u53F7\u3002' }
};

function parseWeek(weekStr) {
  var s = String(weekStr || '').trim().replace(/\u5468/g, ' ').replace(/\u5929/g, ' ').replace(/\+/g, ' ').replace(/\s+/g, ' ');
  var parts = s.split(' ').filter(function(v){ return v !== ''; });
  if (!parts.length) return 0;
  var week = parseInt(parts[0]);
  var day = parts.length > 1 ? parseInt(parts[1]) || 0 : 0;
  if (isNaN(week) || week <= 0) return 0;
  return { week:week, day:day, totalDays:week * 7 + day };
}

function formatWeek(weekObj) {
  if (!weekObj) return '--';
  return weekObj.week + '\u5468' + (weekObj.day ? weekObj.day + '\u5929' : '');
}

function addDays(dateStr, days) {
  var d = new Date(dateStr);
  d.setDate(d.getDate() + days);
  return d;
}

function formatDate(d) {
  if (typeof d === 'string') d = new Date(d);
  return (d.getMonth()+1) + '\u6708' + d.getDate() + '\u65E5';
}

function daysBetween(start, end) {
  var s = new Date(start).setHours(0,0,0,0);
  var e = new Date(end).setHours(0,0,0,0);
  return Math.round((e - s) / 86400000);
}

function getBabyGrowth(weekObj) {
  var week = weekObj ? weekObj.week : 0;
  if (!week || week < 4) return null;
  if (week > 40) week = 40;
  var data = BABY_GROWTH_DATA[week];
  if (!data) return null;
  var isEarly = week <= 12;
  return {
    length: data.length,
    weight: data.weight,
    lengthLabel: isEarly ? '\u9876\u81C0\u957F' : '\u8EAB\u957F',
    baby: data.baby,
    mom: data.mom
  };
}

function renderBabySection() {
  var lmpInput = document.getElementById('baby-lmp');
  if (appData.lmpDate) lmpInput.value = appData.lmpDate;
  renderBabyStatus();
  renderBabyList();
}

function renderBabyStatus() {
  var card = document.getElementById('baby-status-card');
  var tips = document.getElementById('baby-tips');
  var babyChange = document.getElementById('baby-change');
  var momChange = document.getElementById('mom-change');
  var today = new Date();
  var currentWeekObj = null;
  var dueDate = null;
  var daysToDue = null;
  if (appData.lmpDate) {
    var totalDays = daysBetween(appData.lmpDate, today);
    if (totalDays >= 0) {
      var week = Math.floor(totalDays / 7);
      var day = totalDays % 7;
      currentWeekObj = { week:week, day:day, totalDays:totalDays };
    }
    dueDate = addDays(appData.lmpDate, 280);
    daysToDue = daysBetween(today, dueDate);
  }
  if (!currentWeekObj && appData.babyRecords && appData.babyRecords.length) {
    var last = appData.babyRecords.slice().sort(function(a,b){ return b.totalDays - a.totalDays; })[0];
    if (last && last.totalDays) currentWeekObj = { week:last.week, day:last.day, totalDays:last.totalDays };
  }
  if (!currentWeekObj || currentWeekObj.week < 1) {
    card.innerHTML = '<div class="baby-status-week">\u8BF7\u8BBE\u7F6E\u672B\u6B21\u6708\u7ECF\u65E5\u671F</div><div class="baby-status-due">\u6216\u624B\u52A8\u6DFB\u52A0\u6210\u957F\u8BB0\u5F55</div>';
    tips.style.display = 'none';
    return;
  }
  var growth = getBabyGrowth(currentWeekObj);
  var html = '';
  html += '<div class="baby-status-week">\u5B55 ' + formatWeek(currentWeekObj) + '</div>';
  if (dueDate && daysToDue !== null) {
    html += '<div class="baby-status-due">\u9884\u4EA7\u671F ' + formatDate(dueDate) + ' \u00B7 \u8DDD\u79BB\u9884\u4EA7\u671F ' + daysToDue + ' \u5929</div>';
  }
  if (growth) {
    html += '<div class="baby-status-size">';
    html += '<div class="baby-size-item"><div class="num">' + growth.length + '</div><div class="label">' + growth.lengthLabel + ' cm</div></div>';
    html += '<div class="baby-size-item"><div class="num">' + growth.weight + '</div><div class="label">\u4F53\u91CD g</div></div>';
    html += '</div>';
  }
  card.innerHTML = html;
  if (growth) {
    babyChange.textContent = growth.baby;
    momChange.textContent = growth.mom;
    tips.style.display = 'flex';
  } else {
    tips.style.display = 'none';
  }
}

document.getElementById('save-lmp-btn').addEventListener('click', function(){
  var lmp = document.getElementById('baby-lmp').value;
  if (!lmp) { alert('\u8BF7\u9009\u62E9\u672B\u6B21\u6708\u7ECF\u65E5\u671F'); return; }
  appData.lmpDate = lmp;
  saveData();
  renderBabySection();
});

document.getElementById('add-baby-btn').addEventListener('click', function(){
  var weekStr = document.getElementById('baby-week').value.trim();
  var length = parseFloat(document.getElementById('baby-length').value);
  var weight = parseFloat(document.getElementById('baby-weight').value);
  var note = document.getElementById('baby-note').value.trim();
  var editId = document.getElementById('baby-edit-id').value;
  var parsed = parseWeek(weekStr);
  if (!parsed || !parsed.week) { alert('\u8BF7\u586B\u5199\u5B55\u5468\uFF0C\u5982 15+1'); return; }
  var growth = getBabyGrowth(parsed);
  if (!length && growth) length = growth.length;
  if (!weight && growth) weight = parseInt(growth.weight) || '';
  if (editId) {
    var id = parseInt(editId);
    for (var i = 0; i < appData.babyRecords.length; i++) {
      if (appData.babyRecords[i].id === id) {
        appData.babyRecords[i].week = parsed.week;
        appData.babyRecords[i].day = parsed.day;
        appData.babyRecords[i].totalDays = parsed.totalDays;
        appData.babyRecords[i].length = length || '';
        appData.babyRecords[i].weight = weight || '';
        appData.babyRecords[i].note = note;
        break;
      }
    }
  } else {
    appData.babyRecords.push({ id:newId(appData.babyRecords), week:parsed.week, day:parsed.day, totalDays:parsed.totalDays, length:length || '', weight:weight || '', note:note });
  }
  saveData(); resetBabyForm(); renderBabySection();
});
function resetBabyForm() {
  document.getElementById('baby-week').value = '';
  document.getElementById('baby-length').value = '';
  document.getElementById('baby-weight').value = '';
  document.getElementById('baby-note').value = '';
  document.getElementById('baby-edit-id').value = '';
  document.getElementById('add-baby-btn').textContent = '\u6DFB\u52A0';
  document.getElementById('cancel-baby-edit').style.display = 'none';
}
document.getElementById('cancel-baby-edit').addEventListener('click', resetBabyForm);
function renderBabyList() {
  var list = document.getElementById('baby-list');
  var records = appData.babyRecords.slice().sort(function(a,b){ return a.totalDays - b.totalDays; }).reverse();
  var html = '';
  for (var i = 0; i < records.length; i++) {
    var r = records[i];
    var weekText = r.day ? r.week + '+' + r.day : String(r.week);
    html += '<div class="record-item">';
    html += '<div class="record-main"><span class="record-value">\u5B55 ' + weekText + ' \u5468</span>' + (r.length ? '<span class="record-tag">' + (r.week <= 12 ? '\u9876\u81C0\u957F' : '\u8EAB\u957F') + ' ' + r.length + ' cm</span>' : '') + (r.weight ? '<span class="record-tag">\u4F53\u91CD ' + r.weight + ' g</span>' : '') + '</div>';
    if (r.note) html += '<div class="record-note">' + escapeHtml(r.note) + '</div>';
    html += '<button class="record-edit" data-id="' + r.id + '" data-type="baby" title="\u7F16\u8F91">\u270E</button>';
    html += '<button class="record-delete" data-id="' + r.id + '" data-type="baby" title="\u5220\u9664">\u2715</button>';
    html += '</div>';
  }
  list.innerHTML = html;
}
function editBabyRecord(id) {
  var r = appData.babyRecords.find(function(x){ return x.id === id; });
  if (!r) return;
  var weekText = r.day ? r.week + '+' + r.day : String(r.week);
  document.getElementById('baby-week').value = weekText;
  document.getElementById('baby-length').value = r.length || '';
  document.getElementById('baby-weight').value = r.weight || '';
  document.getElementById('baby-note').value = r.note || '';
  document.getElementById('baby-edit-id').value = r.id;
  document.getElementById('add-baby-btn').textContent = '\u4FDD\u5B58\u4FEE\u6539';
  document.getElementById('cancel-baby-edit').style.display = 'inline-block';
  window.scrollTo({ top:0, behavior:'smooth' });
}

/* ====== \u5B55\u68C0\u8BB0\u5F55 ====== */
function renderCheckupSection() { document.getElementById('checkup-date').value = todayISO(); renderCheckupList(); }
function resetCheckupForm() {
  document.getElementById('checkup-date').value = todayISO();
  document.getElementById('checkup-item').value = '';
  document.getElementById('checkup-result').value = '';
  document.getElementById('checkup-next').value = '';
  document.getElementById('checkup-edit-id').value = '';
  document.getElementById('add-checkup-btn').textContent = '\u6DFB\u52A0';
  document.getElementById('cancel-checkup-edit').style.display = 'none';
}
document.getElementById('add-checkup-btn').addEventListener('click', function(){
  var date = document.getElementById('checkup-date').value;
  var item = document.getElementById('checkup-item').value.trim();
  var result = document.getElementById('checkup-result').value.trim();
  var nextDate = document.getElementById('checkup-next').value;
  var editId = document.getElementById('checkup-edit-id').value;
  if (!date || !item) { alert('\u8BF7\u586B\u5199\u65E5\u671F\u548C\u9879\u76EE'); return; }
  if (editId) {
    var id = parseInt(editId);
    for (var i = 0; i < appData.checkupRecords.length; i++) {
      if (appData.checkupRecords[i].id === id) {
        appData.checkupRecords[i].date = date;
        appData.checkupRecords[i].item = item;
        appData.checkupRecords[i].result = result;
        appData.checkupRecords[i].nextDate = nextDate;
        break;
      }
    }
  } else {
    appData.checkupRecords.push({ id:newId(appData.checkupRecords), date:date, item:item, result:result, nextDate:nextDate });
  }
  saveData(); resetCheckupForm(); renderCheckupSection();
});
document.getElementById('cancel-checkup-edit').addEventListener('click', resetCheckupForm);
function renderCheckupList() {
  var list = document.getElementById('checkup-list');
  var records = appData.checkupRecords.slice().sort(function(a,b){ return a.date.localeCompare(b.date); }).reverse();
  var html = '';
  for (var i = 0; i < records.length; i++) {
    var r = records[i];
    html += '<div class="record-item">';
    html += '<div class="record-main"><span class="record-date">' + r.date + '</span><span class="record-value">' + escapeHtml(r.item) + '</span></div>';
    if (r.result) html += '<div class="record-note">\u7ED3\u679C\uFF1A' + escapeHtml(r.result) + '</div>';
    if (r.nextDate) html += '<div class="record-note">\u4E0B\u6B21\u4EA7\u68C0\uFF1A' + r.nextDate + '</div>';
    html += '<button class="record-edit" data-id="' + r.id + '" data-type="checkup" title="\u7F16\u8F91">\u270E</button>';
    html += '<button class="record-delete" data-id="' + r.id + '" data-type="checkup" title="\u5220\u9664">\u2715</button>';
    html += '</div>';
  }
  list.innerHTML = html;
}
function editCheckupRecord(id) {
  var r = appData.checkupRecords.find(function(x){ return x.id === id; });
  if (!r) return;
  document.getElementById('checkup-date').value = r.date;
  document.getElementById('checkup-item').value = r.item || '';
  document.getElementById('checkup-result').value = r.result || '';
  document.getElementById('checkup-next').value = r.nextDate || '';
  document.getElementById('checkup-edit-id').value = r.id;
  document.getElementById('add-checkup-btn').textContent = '\u4FDD\u5B58\u4FEE\u6539';
  document.getElementById('cancel-checkup-edit').style.display = 'inline-block';
  window.scrollTo({ top:0, behavior:'smooth' });
}
document.getElementById('diet').addEventListener('click', function(e){
  var editBtn = e.target.closest ? e.target.closest('.record-edit') : null;
  if (editBtn) {
    var eid = editBtn.dataset.id, etype = editBtn.dataset.type;
    if (etype === 'weight') editWeightRecord(parseInt(eid));
    if (etype === 'poop') editPoopRecord(parseInt(eid));
    if (etype === 'baby') editBabyRecord(parseInt(eid));
    if (etype === 'checkup') editCheckupRecord(parseInt(eid));
    return;
  }
  var btn = e.target.closest ? e.target.closest('.record-delete') : null;
  if (!btn) return;
  var id = btn.dataset.id, type = btn.dataset.type;
  var arr = type + 'Records';
  if (!appData[arr]) return;
  if (confirm('\u5220\u9664\u8FD9\u6761\u8BB0\u5F55\uFF1F')) {
    appData[arr] = appData[arr].filter(function(r){ return r.id != id; });
    saveData();
    if (type === 'weight') renderWeightSection();
    if (type === 'poop') renderPoopSection();
    if (type === 'baby') renderBabySection();
    if (type === 'checkup') renderCheckupSection();
  }
});

/* ====== \u5174\u8DA3\u6536\u85CF ====== */
var currentFavCat = 'all';
var currentFavQuery = '';
document.querySelectorAll('.favorite-tab').forEach(function(tab){
  tab.addEventListener('click', function(){
    document.querySelectorAll('.favorite-tab').forEach(function(t){ t.classList.remove('active'); });
    tab.classList.add('active');
    currentFavCat = tab.dataset.cat;
    renderFavorites();
  });
});
function getFavoriteItems() {
  var items = appData.interests || [];
  if (currentFavCat !== 'all') items = items.filter(function(i){ return i.type === currentFavCat; });
  if (currentFavQuery) {
    var q = currentFavQuery.toLowerCase();
    items = items.filter(function(i){
      return (i.title && i.title.toLowerCase().indexOf(q) !== -1) ||
             (i.ingredients && i.ingredients.toLowerCase().indexOf(q) !== -1) ||
             (i.note && i.note.toLowerCase().indexOf(q) !== -1);
    });
  }
  return items.slice().sort(function(a,b){ return new Date(b.date) - new Date(a.date); });
}
function renderFavorites() {
  var list = document.getElementById('favorite-list');
  var items = getFavoriteItems();
  var TYPE_ICONS = { video:'\uD83C\uDFAC', article:'\uD83D\uDCC4', recipe:'\uD83E\uDD57', other:'\uD83D\uDCCC' };
  var TYPE_LABELS = { video:'\u89C6\u9891', article:'\u6587\u7AE0', recipe:'\u83DC\u8C31', other:'\u5176\u4ED6' };
  var html = '';
  if (!items.length) {
    list.innerHTML = '<div class="empty-state"><div class="empty-icon">\u2B50</div><p>' + (currentFavQuery ? '\u6CA1\u6709\u627E\u5230\u5339\u914D\u7684\u6536\u85CF' : '\u8FD8\u6CA1\u6709\u6536\u85CF\u5185\u5BB9') + '</p></div>';
    return;
  }
  for (var i = 0; i < items.length; i++) {
    var it = items[i];
    html += '<div class="favorite-item">';
    html += '<div class="fav-icon">' + (TYPE_ICONS[it.type] || '\uD83D\uDCCC') + '</div>';
    html += '<div class="fav-body">';
    html += '<div class="fav-title">' + escapeHtml(it.title) + '</div>';
    html += '<div class="fav-tags">' + (TYPE_LABELS[it.type] || '\u5176\u4ED6') + (it.ingredients ? ' \u00B7 ' + escapeHtml(it.ingredients) : '') + '</div>';
    if (it.link) html += '<a href="' + escapeHtml(it.link) + '" target="_blank" class="fav-link">' + escapeHtml(it.link) + '</a>';
    if (it.note) html += '<div class="fav-note collapsed" data-collapsed="1">' + escapeHtml(it.note) + '</div><button class="fav-note-toggle" data-action="toggle-note">\u5C55\u5F00 \u25BE</button>';
    html += '<div class="fav-meta">' + it.date + '</div>';
    html += '</div>';
    html += '<div class="fav-actions">';
    html += '<button class="fav-edit" data-id="' + it.id + '" title="\u7F16\u8F91">\u270E</button>';
    html += '<button class="fav-delete" data-id="' + it.id + '" title="\u5220\u9664">\u2715</button>';
    html += '</div>';
    html += '</div>';
  }
  list.innerHTML = html;
}
function doFavSearch(query) {
  currentFavQuery = (query || '').trim();
  renderFavorites();
}
function resetFavForm() {
  document.getElementById('fav-title').value = '';
  document.getElementById('fav-link').value = '';
  document.getElementById('fav-ingredients').value = '';
  document.getElementById('fav-note').value = '';
  document.getElementById('fav-type').value = 'video';
  document.getElementById('save-favorite-btn').textContent = '\u4FDD\u5B58\u6536\u85CF';
  document.getElementById('save-favorite-btn').dataset.editingId = '';
}
document.getElementById('save-favorite-btn').addEventListener('click', function(){
  var btn = document.getElementById('save-favorite-btn');
  var title = document.getElementById('fav-title').value.trim();
  var link = document.getElementById('fav-link').value.trim();
  var type = document.getElementById('fav-type').value;
  var ingredients = document.getElementById('fav-ingredients').value.trim();
  var note = document.getElementById('fav-note').value.trim();
  if (!title) { alert('\u8BF7\u586B\u5199\u6807\u9898'); return; }
  var editingId = btn.dataset.editingId;
  if (editingId) {
    var id = parseInt(editingId);
    for (var i = 0; i < appData.interests.length; i++) {
      if (appData.interests[i].id === id) {
        appData.interests[i].title = title;
        appData.interests[i].link = link;
        appData.interests[i].type = type;
        appData.interests[i].ingredients = ingredients;
        appData.interests[i].note = note;
        appData.interests[i].updatedAt = nowStr();
        break;
      }
    }
  } else {
    appData.interests.unshift({ id:newId(appData.interests), title:title, link:link, type:type, ingredients:ingredients, note:note, date:nowStr() });
  }
  saveData(); renderFavorites();
  resetFavForm();
  if (editingId) {
    var inputEl = document.getElementById('recipe-search');
    if (inputEl && inputEl.value) doFavSearch(inputEl.value);
  }
});
document.getElementById('favorite-list').addEventListener('click', function(e){
  var noteBtn = e.target.closest ? e.target.closest('.fav-note-toggle') : null;
  if (noteBtn) {
    var card = noteBtn.previousElementSibling;
    if (card && card.classList.contains('fav-note')) {
      var isCollapsed = card.classList.toggle('collapsed');
      noteBtn.textContent = isCollapsed ? '\u5C55\u5F00 \u25BE' : '\u6536\u8D77 \u25B4';
    }
    return;
  }
  var delBtn = e.target.closest ? e.target.closest('.fav-delete') : null;
  if (delBtn) {
    var id = parseInt(delBtn.dataset.id);
    if (confirm('\u5220\u9664\u8FD9\u4E2A\u6536\u85CF\uFF1F')) { appData.interests = appData.interests.filter(function(i){ return i.id !== id; }); saveData(); renderFavorites(); }
    return;
  }
  var editBtn = e.target.closest ? e.target.closest('.fav-edit') : null;
  if (editBtn) {
    var eid = parseInt(editBtn.dataset.id);
    var item = appData.interests.find(function(i){ return i.id === eid; });
    if (!item) return;
    document.getElementById('fav-title').value = item.title || '';
    document.getElementById('fav-link').value = item.link || '';
    document.getElementById('fav-type').value = item.type || 'video';
    document.getElementById('fav-ingredients').value = item.ingredients || '';
    document.getElementById('fav-note').value = item.note || '';
    var saveBtn = document.getElementById('save-favorite-btn');
    saveBtn.textContent = '\u66F4\u65B0\u6536\u85CF';
    saveBtn.dataset.editingId = String(eid);
    window.scrollTo({ top:document.getElementById('save-favorite-btn').getBoundingClientRect().top + window.scrollY - 80, behavior:'smooth' });
  }
});
function renderFavoriteResults(containerId, query) {
  var container = document.getElementById(containerId);
  var q = (query || '').trim().toLowerCase();
  if (!q) { container.innerHTML = ''; return; }
  var items = (appData.interests || []).filter(function(i){
    return (i.title && i.title.toLowerCase().indexOf(q) !== -1) ||
           (i.ingredients && i.ingredients.toLowerCase().indexOf(q) !== -1) ||
           (i.note && i.note.toLowerCase().indexOf(q) !== -1);
  }).slice().sort(function(a,b){ return new Date(b.date) - new Date(a.date); });
  var TYPE_ICONS = { video:'\uD83C\uDFAC', article:'\uD83D\uDCC4', recipe:'\uD83E\uDD57', other:'\uD83D\uDCCC' };
  var html = '<div class="weekly-fav-header">\u6211\u7684\u6536\u85CF\u4E2D\u542B\u300C' + escapeHtml(query) + '\u300D\u7684\u8BB0\u5F55</div>';
  if (!items.length) {
    html += '<div class="weekly-fav-empty">\u6682\u65E0\u5339\u914D\u8BB0\u5F55</div>';
  } else {
    html += '<div class="weekly-fav-list">';
    for (var i = 0; i < items.length; i++) {
      var it = items[i];
      html += '<div class="weekly-fav-item">';
      html += '<span class="weekly-fav-icon">' + (TYPE_ICONS[it.type] || '\uD83D\uDCCC') + '</span>';
      html += '<div class="weekly-fav-body">';
      html += '<div class="weekly-fav-title">' + escapeHtml(it.title) + '</div>';
      if (it.ingredients) html += '<div class="weekly-fav-tags">' + escapeHtml(it.ingredients) + '</div>';
      if (it.note) html += '<div class="weekly-fav-note collapsed">' + escapeHtml(it.note) + '</div><button class="fav-note-toggle">\u5C55\u5F00 \u25BE</button>';
      if (it.link) html += '<a href="' + escapeHtml(it.link) + '" target="_blank">' + escapeHtml(it.link) + '</a>';
      html += '</div>';
      html += '</div>';
    }
    html += '</div>';
  }
  container.innerHTML = html;
}
document.getElementById('search-my-favorites').addEventListener('click', function(){
  var q = document.getElementById('recipe-search').value.trim();
  if (!q) { alert('\u8BF7\u5148\u8F93\u5165\u98DF\u6750'); return; }
  renderFavoriteResults('weekly-fav-results', q);
});
document.getElementById('weekly-fav-results').addEventListener('click', function(e){
  var noteBtn = e.target.closest ? e.target.closest('.fav-note-toggle') : null;
  if (noteBtn) {
    var card = noteBtn.previousElementSibling;
    if (card && card.classList.contains('weekly-fav-note')) {
      var isCollapsed = card.classList.toggle('collapsed');
      noteBtn.textContent = isCollapsed ? '\u5C55\u5F00 \u25BE' : '\u6536\u8D77 \u25B4';
    }
  }
});

/* ====== \u4E00\u5468\u996E\u98DF\u8BA1\u5212 ====== */
var currentWeekOffset = 0;
var currentExpandedCell = null;

function getWeeklyPlan(day, meal) {
  if (!appData.weeklyPlan[day]) appData.weeklyPlan[day] = {};
  if (!appData.weeklyPlan[day][meal] || typeof appData.weeklyPlan[day][meal] !== 'object') {
    appData.weeklyPlan[day][meal] = { content:'', meat:'', veg:'', staple:'', fruit:'', others:'', tags:[] };
  }
  return appData.weeklyPlan[day][meal];
}

function renderWeeklyPlan() {
  var plan = document.getElementById('weekly-plan');
  var base = new Date();
  base.setDate(base.getDate() + currentWeekOffset * 7);
  var weekDates = getWeekDates(base);
  var html = '';
  html += '<div class="weekly-header">';
  html += '<button class="week-nav-btn" id="week-prev">\u2039</button>';
  html += '<span class="week-range">' + weekDates[0].short + ' - ' + weekDates[6].short + '</span>';
  html += '<button class="week-nav-btn" id="week-next">\u203A</button>';
  html += '<button class="week-today-btn" id="week-today">\u4ECA\u5929</button>';
  html += '</div>';
  html += '<div class="weekly-table-wrap"><table class="weekly-table"><thead><tr><th>\u65E5\u671F</th>';
  for (var i = 0; i < MEAL_KEYS.length; i++) html += '<th>' + MEAL_LABELS[MEAL_KEYS[i]] + '</th>';
  html += '</tr></thead><tbody>';
  for (var d = 0; d < WEEKDAYS.length; d++) {
    var day = WEEKDAYS[d];
    var dateInfo = weekDates[d];
    var isToday = dateInfo.iso === todayISO();
    html += '<tr><td class="day-label ' + (isToday ? 'today' : '') + '"><div class="day-date">' + dateInfo.short + '</div><div class="day-week">' + dateInfo.weekday + '</div></td>';
    for (var m = 0; m < MEAL_KEYS.length; m++) {
      var meal = MEAL_KEYS[m];
      var data = getWeeklyPlan(day, meal);
      html += '<td class="meal-cell">';
      html += '<div class="meal-cell-header">';
      html += '<button class="meal-detail-toggle" data-day="' + day + '" data-meal="' + meal + '">\u22EF</button>';
      html += '</div>';
      html += '<textarea data-day="' + day + '" data-meal="' + meal + '" data-field="content" placeholder="\u8BA1\u5212\u5403\u4EC0\u4E48...">' + escapeHtml(data.content || '') + '</textarea>';
      html += '<div class="meal-tags-preview">' + (data.tags && data.tags.length ? data.tags.map(function(t){ return '<span class="mtp-tag">' + escapeHtml(t) + '</span>'; }).join('') : '') + '</div>';
      html += '</td>';
    }
    html += '</tr>';
  }
  html += '</tbody></table></div>';
  html += '<div class="diet-analysis-section">';
  html += '<h3>\uD83E\uDD57 \u4ECA\u65E5\u996E\u98DF\u5206\u6790</h3>';
  html += '<button id="analyze-diet-btn" class="analyze-btn">\u5206\u6790\u4ECA\u65E5\u996E\u98DF</button>';
  html += '<div id="diet-analysis-result" class="diet-analysis-result"></div>';
  html += '</div>';
  plan.innerHTML = html;
  bindWeeklyEvents();
  autoResizeWeeklyTextareas();
  requestAnimationFrame(function(){ autoResizeWeeklyTextareas(); });
}

function autoResizeWeeklyTextareas() {
  document.querySelectorAll('#weekly-plan textarea').forEach(function(ta){
    ta.style.height = 'auto';
    ta.style.height = Math.max(54, ta.scrollHeight) + 'px';
  });
}
function autoResizeTextarea(el) {
  el.style.height = 'auto';
  el.style.height = Math.max(54, el.scrollHeight) + 'px';
}

function bindWeeklyEvents() {
  document.getElementById('week-prev').addEventListener('click', function(){ currentWeekOffset--; renderWeeklyPlan(); });
  document.getElementById('week-next').addEventListener('click', function(){ currentWeekOffset++; renderWeeklyPlan(); });
  document.getElementById('week-today').addEventListener('click', function(){ currentWeekOffset = 0; renderWeeklyPlan(); });
  document.getElementById('analyze-diet-btn').addEventListener('click', analyzeTodayDiet);
  document.querySelectorAll('.meal-detail-toggle').forEach(function(btn){
    btn.addEventListener('click', function(e){ e.stopPropagation(); openMealDetail(btn.dataset.day, btn.dataset.meal); });
  });
}

document.getElementById('weekly-plan').addEventListener('input', function(e){
  var day = e.target.dataset.day, meal = e.target.dataset.meal, field = e.target.dataset.field;
  if (day && meal && field) {
    var data = getWeeklyPlan(day, meal);
    data[field] = e.target.value;
    saveData();
  }
  // textarea \u81EA\u52A8\u8C03\u6574\u9AD8\u5EA6
  if (e.target.tagName === 'TEXTAREA') {
    autoResizeTextarea(e.target);
  }
});

/* ====== \u98DF\u6750\u63A8\u8350\u4E0E\u81EA\u52A8\u6807\u7B7E ====== */
var FOOD_SUGGESTIONS = {
  meat: ['\u9E21\u86CB','\u9E21\u80F8\u8089','\u725B\u8089','\u732A\u8089','\u867E\u4EC1','\u4E09\u6587\u9C7C','\u732A\u809D','\u732A\u8840','\u9E2D\u8840','\u7F8A\u8089','\u9E21\u817F','\u9C88\u9C7C'],
  veg: ['\u83E0\u83DC','\u897F\u5170\u82B1','\u756A\u8304','\u80E1\u841D\u535C','\u9EC4\u74DC','\u82B9\u83DC','\u6CB9\u9EA6\u83DC','\u83B4\u7B0B','\u5357\u74DC','\u8611\u83C7','\u6D77\u5E26'],
  staple: ['\u6742\u7CAE\u996D','\u7EA2\u85AF','\u5168\u9EA6\u9762\u5305','\u71D5\u9EA6','\u7389\u7C73','\u7D2B\u85AF','\u7CD9\u7C73','\u835E\u9EA6\u9762','\u5357\u74DC'],
  fruit: ['\u84DD\u8393','\u82F9\u679C','\u7315\u7334\u6843','\u6A59\u5B50','\u897F\u67DA','\u8349\u8393','\u756A\u8304','\u897F\u6885','\u68A8','\u6843\u5B50'],
  others: ['\u725B\u5976','\u9178\u5976','\u575A\u679C','\u6838\u6843','\u829D\u9EBB','\u8C46\u8150','\u8C46\u6D46','\u71D5\u7A9D']
};
var FOOD_TAG_RULES = {
  '\u8865\u94C1': ['\u732A\u809D','\u732A\u8840','\u9E2D\u8840','\u725B\u8089','\u7F8A\u8089','\u7626\u8089','\u83E0\u83DC','\u6D77\u5E26','\u9ED1\u6728\u8033','\u7EA2\u67A3'],
  '\u8865\u9499': ['\u725B\u5976','\u9178\u5976','\u8C46\u8150','\u829D\u9EBB','\u867E\u76AE','\u5976\u916A','\u6DF1\u7EFF\u53F6\u83DC','\u6D77\u5E26','\u8C46\u6D46'],
  '\u8865\u53F6\u9178': ['\u83E0\u83DC','\u82A6\u7B0B','\u897F\u5170\u82B1','\u751F\u83DC','\u725B\u6CB9\u679C','\u6A59\u5B50','\u8349\u8393','\u8C46\u7C7B',' liver','\u809D'],
  '\u8865DHA': ['\u4E09\u6587\u9C7C','\u9CD5\u9C7C','\u9C88\u9C7C','\u867E','\u6D77\u9C7C','\u6DF1\u6D77\u9C7C','\u6838\u6843','\u85FB\u6CB9','\u4E9A\u9EBB\u7C7D'],
  '\u8865\u86CB\u767D\u8D28': ['\u9E21\u86CB','\u9E21\u80F8\u8089','\u725B\u8089','\u732A\u8089','\u9C7C','\u867E','\u8C46\u8150','\u725B\u5976','\u9178\u5976','\u575A\u679C'],
  '\u8865\u7EF4\u751F\u7D20': ['\u6A59\u5B50','\u7315\u7334\u6843','\u8349\u8393','\u84DD\u8393','\u756A\u8304','\u80E1\u841D\u535C','\u897F\u5170\u82B1','\u83E0\u83DC','\u5F69\u6912'],
  '\u8865\u81B3\u98DF\u7EA4\u7EF4': ['\u71D5\u9EA6','\u7EA2\u85AF','\u7389\u7C73','\u7CD9\u7C73','\u5168\u9EA6','\u82B9\u83DC','\u83E0\u83DC','\u82F9\u679C','\u68A8','\u6728\u8033'],
  '\u8865\u950C': ['\u725B\u8089','\u732A\u8089','\u7F8A\u8089','\u7261\u86CE','\u867E','\u5357\u74DC\u5B50','\u829D\u9EBB','\u6838\u6843','\u86CB\u9EC4']
};

function autoDetectTags(text) {
  var detected = [];
  var joined = (text || '').toLowerCase();
  for (var tag in FOOD_TAG_RULES) {
    var foods = FOOD_TAG_RULES[tag];
    for (var i = 0; i < foods.length; i++) {
      if (joined.indexOf(foods[i].toLowerCase()) >= 0) {
        if (detected.indexOf(tag) < 0) detected.push(tag);
        break;
      }
    }
  }
  return detected;
}

function renderFoodSuggestions(panel, field) {
  var list = FOOD_SUGGESTIONS[field] || [];
  if (!list.length) return '';
  return '<div class="food-suggestions" data-for="' + field + '">' + list.map(function(item){
    return '<button type="button" class="food-suggestion-chip" data-food="' + escapeHtml(item) + '">' + escapeHtml(item) + '</button>';
  }).join('') + '</div>';
}

function bindFoodSuggestions(panel, data) {
  panel.querySelectorAll('.food-suggestion-chip').forEach(function(chip){
    chip.addEventListener('click', function(){
      var field = chip.parentNode.dataset.for;
      var input = panel.querySelector('[data-field="' + field + '"]');
      if (!input) return;
      var val = input.value.trim();
      var food = chip.dataset.food;
      var sep = val ? '\u3001' : '';
      if (val.indexOf(food) < 0) input.value = val + sep + food;
      // \u66F4\u65B0\u81EA\u52A8\u6807\u7B7E
      updateAutoTags(panel, data);
    });
  });
}

function updateAutoTags(panel, data) {
  var allText = '';
  panel.querySelectorAll('input[data-field], textarea[data-field]').forEach(function(el){
    allText += ' ' + el.value;
  });
  var detected = autoDetectTags(allText);
  panel.querySelectorAll('.tag-options input').forEach(function(cb){
    var label = cb.closest('.tag-option');
    if (detected.indexOf(cb.value) >= 0) {
      cb.checked = true;
      label.classList.add('checked');
    } else {
      cb.checked = false;
      label.classList.remove('checked');
    }
  });
}

function openMealDetail(day, meal) {
  currentExpandedCell = { day:day, meal:meal };
  var data = getWeeklyPlan(day, meal);
  var mealName = MEAL_LABELS[meal];
  var dateInfo = getWeekDates(new Date().setDate(new Date().getDate() + currentWeekOffset * 7))[WEEKDAYS.indexOf(day)];
  var panel = document.createElement('div');
  panel.className = 'meal-detail-panel-overlay';
  panel.id = 'meal-detail-panel';
  var tags = ['\u8865\u94C1','\u8865\u9499','\u8865\u53F6\u9178','\u8865DHA','\u8865\u86CB\u767D\u8D28','\u8865\u7EF4\u751F\u7D20','\u8865\u81B3\u98DF\u7EA4\u7EF4','\u8865\u950C'];
  // \u5148\u6839\u636E\u5DF2\u6709\u5185\u5BB9\u81EA\u52A8\u68C0\u6D4B\u6807\u7B7E
  var allContent = [data.content, data.meat, data.veg, data.staple, data.fruit, data.others].join(' ');
  var detectedTags = autoDetectTags(allContent);
  var mergedTags = data.tags ? data.tags.slice() : [];
  detectedTags.forEach(function(t){ if (mergedTags.indexOf(t) < 0) mergedTags.push(t); });
  data.tags = mergedTags;
  var html = '';
  html += '<div class="meal-detail-panel">';
  html += '<div class="meal-detail-header">';
  html += '<h4>' + dateInfo.short + ' ' + dateInfo.weekday + ' \u00B7 ' + mealName + '</h4>';
  html += '<button class="meal-detail-close">\u2715</button>';
  html += '</div>';
  html += '<div class="meal-detail-body">';
  html += '<div class="meal-detail-row"><label>\u4E3B\u8981\u9910\u98DF</label><textarea data-field="content" placeholder="\u5982\uFF1A\u71D5\u9EA6\u9E21\u86CB\u7897\u3001\u4E94\u9ED1\u996E">' + escapeHtml(data.content || '') + '</textarea></div>';
  html += '<div class="meal-detail-row"><label>\u8089\u7C7B/\u86CB\u7C7B</label><input type="text" data-field="meat" placeholder="\u5982\uFF1A\u9E21\u86CB\u3001\u9E21\u80F8\u8089\u3001\u725B\u8089" value="' + escapeHtml(data.meat || '') + '">' + renderFoodSuggestions(panel, 'meat') + '</div>';
  html += '<div class="meal-detail-row"><label>\u852C\u83DC</label><input type="text" data-field="veg" placeholder="\u5982\uFF1A\u83E0\u83DC\u3001\u897F\u5170\u82B1\u3001\u756A\u8304" value="' + escapeHtml(data.veg || '') + '">' + renderFoodSuggestions(panel, 'veg') + '</div>';
  html += '<div class="meal-detail-row"><label>\u4E3B\u98DF/\u8C37\u7269</label><input type="text" data-field="staple" placeholder="\u5982\uFF1A\u6742\u7CAE\u996D\u3001\u7EA2\u85AF\u3001\u5168\u9EA6\u9762\u5305" value="' + escapeHtml(data.staple || '') + '">' + renderFoodSuggestions(panel, 'staple') + '</div>';
  html += '<div class="meal-detail-row"><label>\u6C34\u679C</label><input type="text" data-field="fruit" placeholder="\u5982\uFF1A\u84DD\u8393\u3001\u82F9\u679C\u3001\u7315\u7334\u6843" value="' + escapeHtml(data.fruit || '') + '">' + renderFoodSuggestions(panel, 'fruit') + '</div>';
  html += '<div class="meal-detail-row"><label>\u5176\u4ED6</label><input type="text" data-field="others" placeholder="\u5982\uFF1A\u725B\u5976\u3001\u575A\u679C\u3001\u9178\u5976" value="' + escapeHtml(data.others || '') + '">' + renderFoodSuggestions(panel, 'others') + '</div>';
  html += '<div class="meal-detail-row"><label>\u8425\u517B\u6807\u7B7E <small>\uFF08\u4F1A\u6839\u636E\u98DF\u6750\u81EA\u52A8\u52FE\u9009\uFF09</small></label><div class="tag-options">';
  for (var i = 0; i < tags.length; i++) {
    var checked = (data.tags || []).indexOf(tags[i]) >= 0 ? 'checked' : '';
    html += '<label class="tag-option ' + checked + '"><input type="checkbox" value="' + tags[i] + '" ' + checked + '> ' + tags[i] + '</label>';
  }
  html += '</div></div>';
  html += '</div>';
  html += '<div class="meal-detail-footer"><button class="save-meal-detail">\u4FDD\u5B58</button></div>';
  html += '</div>';
  panel.innerHTML = html;
  document.body.appendChild(panel);
  // \u521D\u59CB\u5316 textarea \u9AD8\u5EA6
  panel.querySelectorAll('textarea[data-field]').forEach(function(el){
    el.style.height = 'auto';
    el.style.height = Math.max(60, el.scrollHeight) + 'px';
  });
  panel.querySelector('.meal-detail-close').addEventListener('click', closeMealDetail);
  panel.addEventListener('click', function(e){ if (e.target === panel) closeMealDetail(); });
  bindFoodSuggestions(panel, data);
  // \u8F93\u5165\u65F6\u5B9E\u65F6\u66F4\u65B0\u6807\u7B7E + textarea \u81EA\u52A8\u8C03\u6574\u9AD8\u5EA6
  panel.querySelectorAll('input[data-field], textarea[data-field]').forEach(function(el){
    el.addEventListener('input', function(){
      updateAutoTags(panel, data);
      if (el.tagName === 'TEXTAREA') {
        el.style.height = 'auto';
        el.style.height = Math.max(60, el.scrollHeight) + 'px';
      }
    });
  });
  // \u6807\u7B7E\u70B9\u51FB\u5207\u6362\u6837\u5F0F
  panel.querySelectorAll('.tag-options input').forEach(function(cb){
    cb.addEventListener('change', function(){
      var label = cb.closest('.tag-option');
      if (cb.checked) label.classList.add('checked'); else label.classList.remove('checked');
    });
  });
  panel.querySelector('.save-meal-detail').addEventListener('click', function(){
    var inputs = panel.querySelectorAll('input[data-field], textarea[data-field]');
    for (var i = 0; i < inputs.length; i++) {
      var field = inputs[i].dataset.field;
      if (field) data[field] = inputs[i].value;
    }
    var checkedTags = [];
    panel.querySelectorAll('.tag-options input:checked').forEach(function(cb){ checkedTags.push(cb.value); });
    data.tags = checkedTags;
    saveData();
    closeMealDetail();
    renderWeeklyPlan();
  });
}

function closeMealDetail() {
  var panel = document.getElementById('meal-detail-panel');
  if (panel) panel.remove();
  currentExpandedCell = null;
}

function analyzeTodayDiet() {
  var today = new Date().getDay();
  var dayKey = today === 0 ? 'sun' : WEEKDAYS[today - 1];
  var meals = [];
  MEAL_KEYS.forEach(function(meal){
    var data = getWeeklyPlan(dayKey, meal);
    if (data && (data.content || data.meat || data.veg || data.staple || data.fruit || (data.tags && data.tags.length))) {
      meals.push({ name:MEAL_LABELS[meal], data:data });
    }
  });
  var result = document.getElementById('diet-analysis-result');
  if (!meals.length) { result.innerHTML = '<div class="analysis-empty">\u4ECA\u5929\u8FD8\u6CA1\u6709\u8BB0\u5F55\u996E\u98DF\uFF0C\u5148\u586B\u5199\u4ECA\u65E5\u9910\u98DF\u5427\uFF5E</div>'; return; }
  var summary = [], allMeat = [], allVeg = [], allStaple = [], allFruit = [], allOthers = [], allTags = [];
  meals.forEach(function(m){
    if (m.data.content) summary.push('<b>' + m.name + '</b>\uFF1A' + escapeHtml(m.data.content));
    if (m.data.meat) allMeat.push(m.data.meat);
    if (m.data.veg) allVeg.push(m.data.veg);
    if (m.data.staple) allStaple.push(m.data.staple);
    if (m.data.fruit) allFruit.push(m.data.fruit);
    if (m.data.others) allOthers.push(m.data.others);
    if (m.data.tags) allTags = allTags.concat(m.data.tags);
  });
  var html = '';
  html += '<div class="analysis-block"><h5>\uD83D\uDCCB \u4ECA\u65E5\u9910\u98DF\u8BB0\u5F55</h5><p>' + summary.join('<br>') + '</p></div>';
  html += '<div class="analysis-block"><h5>\uD83E\uDD69 \u8089\u7C7B/\u86CB\u7C7B</h5><p>' + (allMeat.length ? escapeHtml(allMeat.join('\u3001')) : '\u672A\u8BB0\u5F55') + '</p></div>';
  html += '<div class="analysis-block"><h5>\uD83E\uDD6C \u852C\u83DC</h5><p>' + (allVeg.length ? escapeHtml(allVeg.join('\u3001')) : '\u672A\u8BB0\u5F55') + '</p></div>';
  html += '<div class="analysis-block"><h5>\uD83C\uDF5A \u4E3B\u98DF/\u8C37\u7269</h5><p>' + (allStaple.length ? escapeHtml(allStaple.join('\u3001')) : '\u672A\u8BB0\u5F55') + '</p></div>';
  html += '<div class="analysis-block"><h5>\uD83C\uDF4E \u6C34\u679C</h5><p>' + (allFruit.length ? escapeHtml(allFruit.join('\u3001')) : '\u672A\u8BB0\u5F55') + '</p></div>';
  html += '<div class="analysis-block"><h5>\uD83E\uDD5B \u5176\u4ED6</h5><p>' + (allOthers.length ? escapeHtml(allOthers.join('\u3001')) : '\u672A\u8BB0\u5F55') + '</p></div>';
  html += '<div class="analysis-block"><h5>\uD83C\uDFF7\uFE0F \u8425\u517B\u6807\u7B7E</h5><p>' + (allTags.length ? allTags.map(function(t){ return '<span class="analysis-tag">' + escapeHtml(t) + '</span>'; }).join(' ') : '\u672A\u52FE\u9009') + '</p></div>';

  // \u6539\u5584\u5EFA\u8BAE
  var suggestions = [];
  if (!allMeat.length || !/(\u732A|\u725B|\u7F8A|\u9E21|\u9C7C|\u867E|\u86CB|\u8089)/.test(allMeat.join(''))) suggestions.push('\u4ECA\u65E5\u86CB\u767D\u8D28\u6444\u5165\u4E0D\u8DB3\uFF0C\u5EFA\u8BAE\u665A\u9910\u8865\u5145\u7626\u8089\u3001\u9E21\u86CB\u6216\u9C7C\u867E\u3002');
  if (!allVeg.length) suggestions.push('\u852C\u83DC\u6444\u5165\u504F\u5C11\uFF0C\u5EFA\u8BAE\u4E0B\u4E00\u9910\u589E\u52A0\u6DF1\u8272\u852C\u83DC\uFF0C\u5982\u83E0\u83DC\u3001\u897F\u5170\u82B1\u3001\u756A\u8304\u3002');
  if (!allFruit.length) suggestions.push('\u4ECA\u5929\u8FD8\u6CA1\u5403\u6C34\u679C\uFF0C\u53EF\u9002\u91CF\u8865\u5145\u4F4E\u7CD6\u6C34\u679C\u5982\u84DD\u8393\u3001\u82F9\u679C\u3001\u7315\u7334\u6843\u3002');
  if (allTags.indexOf('\u8865\u94C1') < 0 && !/(\u732A|\u725B|\u7F8A|\u52A8\u7269|\u8840|\u809D)/.test((allMeat.join('') + allOthers.join('')))) suggestions.push('\u5B55\u671F\u5BB9\u6613\u7F3A\u94C1\uFF0C\u53EF\u9002\u5F53\u6444\u5165\u7EA2\u8089\u3001\u52A8\u7269\u809D\u810F\u6216\u8840\u5236\u54C1\u3002');
  if (allTags.indexOf('\u8865\u9499') < 0 && !/(\u5976|\u8C46\u8150|\u829D\u9EBB|\u867E|\u6DF1\u7EFF)/.test((allOthers.join('') + allVeg.join('')))) suggestions.push('\u6CE8\u610F\u8865\u9499\uFF0C\u53EF\u559D\u725B\u5976\u3001\u5403\u8C46\u8150\u6216\u829D\u9EBB\u9171\u3002');
  if (allTags.indexOf('\u8865\u53F6\u9178') < 0 && !/(\u83E0|\u82A6|\u83DC|\u809D|\u8C46)/.test((allVeg.join('') + allOthers.join('')))) suggestions.push('\u53F6\u9178\u5BF9\u5B55\u671F\u5F88\u91CD\u8981\uFF0C\u591A\u5403\u6DF1\u7EFF\u8272\u852C\u83DC\u548C\u8C46\u7C7B\u3002');
  if (allTags.indexOf('\u8865DHA') < 0 && !/(\u9C7C|\u867E|\u6D77|\u85FB|\u6838\u6843)/.test((allMeat.join('') + allOthers.join('')))) suggestions.push('DHA \u6709\u52A9\u4E8E\u80CE\u513F\u5927\u8111\u53D1\u80B2\uFF0C\u53EF\u6BCF\u5468\u5403 2-3 \u6B21\u6DF1\u6D77\u9C7C\u6216\u6838\u6843\u3002');
  if (!suggestions.length) suggestions.push('\u4ECA\u65E5\u996E\u98DF\u7ED3\u6784\u8F83\u5747\u8861\uFF0C\u7EE7\u7EED\u4FDD\u6301\uFF01\u6CE8\u610F\u591A\u559D\u6C34\u3001\u9002\u91CF\u8FD0\u52A8\u3002');

  html += '<div class="analysis-block suggestions"><h5>\uD83D\uDCA1 \u6539\u5584\u5EFA\u8BAE</h5><ul>';
  suggestions.forEach(function(s){ html += '<li>' + s + '</li>'; });
  html += '</ul></div>';
  result.innerHTML = html;
}

function openRecipeSearch(platform) {
  var q = document.getElementById('recipe-search').value.trim() || '\u51CF\u8102\u9910';
  var urls = {
    bilibili:'https://m.bilibili.com/search?keyword=' + encodeURIComponent(q),
    douyin:'https://www.douyin.com/search/' + encodeURIComponent(q),
    xhs:'https://www.xiaohongshu.com/search_result?keyword=' + encodeURIComponent(q)
  };
  window.open(urls[platform], '_blank');
}
document.getElementById('search-bilibili').addEventListener('click', function(){ openRecipeSearch('bilibili'); });
document.getElementById('search-douyin').addEventListener('click', function(){ openRecipeSearch('douyin'); });
document.getElementById('search-xhs').addEventListener('click', function(){ openRecipeSearch('xhs'); });

/* ====== \u6BCF\u65E5\u89C6\u9891\u63A8\u9001 ====== */
function renderDailyVideos(containerId, category) {
  var container = document.getElementById(containerId);
  var videos = pickDailyVideos(category);
  var html = '<div class="daily-videos-grid">';
  for (var i = 0; i < videos.length; i++) {
    var v = videos[i];
    html += '<div class="daily-video-card">';
    html += '<div class="dv-num">' + (i+1) + '</div>';
    html += '<div class="dv-body"><h4>' + escapeHtml(v.title) + '</h4><a href="' + escapeHtml(v.link) + '" target="_blank">' + escapeHtml(v.link) + '</a></div>';
    html += '<button class="dv-fav" data-title="' + escapeHtml(v.title) + '" data-link="' + escapeHtml(v.link) + '">\u2B50</button>';
    html += '</div>';
  }
  html += '</div>';
  container.innerHTML = html;
}
document.querySelectorAll('.daily-videos').forEach(function(el){
  el.addEventListener('click', function(e){
    var btn = e.target.closest ? e.target.closest('.dv-fav') : null;
    if (!btn) return;
    appData.interests.unshift({ id:newId(appData.interests), title:btn.dataset.title, link:btn.dataset.link, type:'video', note:'\u6765\u81EA\u6BCF\u65E5\u63A8\u9001', date:nowStr() });
    saveData(); alert('\u5DF2\u6536\u85CF\u5230\u300C\u5174\u8DA3\u6536\u85CF\u300D');
  });
});

/* ====== \u5907\u5FD8\u5F55 ====== */
var memoType = 'text';
document.querySelectorAll('.memo-tab').forEach(function(tab){
  tab.addEventListener('click', function(){
    document.querySelectorAll('.memo-tab').forEach(function(t){ t.classList.remove('active'); });
    tab.classList.add('active');
    memoType = tab.dataset.type;
    document.getElementById('memo-input-area').style.display = memoType === 'text' ? 'block' : 'none';
    document.getElementById('memo-record-area').style.display = memoType === 'audio' ? 'block' : 'none';
  });
});
document.getElementById('save-text-memo-btn').addEventListener('click', function(){
  var text = document.getElementById('memo-text').value.trim();
  if (!text) return;
  appData.memos.unshift({ id:newId(appData.memos), type:'text', content:text, date:nowStr() });
  saveData(); renderMemos();
  document.getElementById('memo-text').value = '';
});
var mediaRecorder = null, recordedChunks = [], recordStartTime = 0, recordDuration = 0, recordTimer = null;
var recordBtn = document.getElementById('record-btn');
var recordStatus = document.getElementById('record-status');
function updateRecordTimer() {
  if (!mediaRecorder) return;
  var sec = Math.floor((Date.now() - recordStartTime) / 1000);
  recordStatus.textContent = '\u5F55\u97F3\u4E2D... ' + sec + 's \u677E\u624B\u7ED3\u675F';
  recordTimer = requestAnimationFrame(updateRecordTimer);
}
function startRecording() {
  if (mediaRecorder) return;
  navigator.mediaDevices.getUserMedia({ audio:true }).then(function(stream){
    var mimeType = MediaRecorder.isTypeSupported('audio/webm') ? 'audio/webm' : MediaRecorder.isTypeSupported('audio/mp4') ? 'audio/mp4' : '';
    mediaRecorder = new MediaRecorder(stream, mimeType ? { mimeType:mimeType } : {});
    recordedChunks = [];
    mediaRecorder.ondataavailable = function(e){ if (e.data.size > 0) recordedChunks.push(e.data); };
    mediaRecorder.onstop = function(){
      var blob = new Blob(recordedChunks, { type:mimeType || 'audio/webm' });
      var id = 'audio_' + Date.now();
      dbPut('hudie_audio', 'memos', id, blob).then(function(){
        appData.memos.unshift({ id:newId(appData.memos), type:'audio', content:id, date:nowStr(), duration:recordDuration });
        saveData(); renderMemos();
      });
      mediaRecorder = null; recordedChunks = [];
      recordBtn.classList.remove('recording');
      recordStatus.textContent = '\u5F55\u97F3\u5DF2\u4FDD\u5B58';
      stream.getTracks().forEach(function(t){ t.stop(); });
    };
    recordStartTime = Date.now();
    mediaRecorder.start();
    recordBtn.classList.add('recording');
    recordStatus.textContent = '\u5F55\u97F3\u4E2D... \u677E\u624B\u7ED3\u675F';
    updateRecordTimer();
  }).catch(function(err){ alert('\u65E0\u6CD5\u5F55\u97F3\uFF1A' + err.message); });
}
function stopRecording() {
  if (!mediaRecorder || mediaRecorder.state === 'inactive') return;
  recordDuration = Math.floor((Date.now() - recordStartTime) / 1000);
  if (recordTimer) cancelAnimationFrame(recordTimer);
  mediaRecorder.stop();
}
recordBtn.addEventListener('pointerdown', startRecording);
recordBtn.addEventListener('pointerup', stopRecording);
recordBtn.addEventListener('pointerleave', stopRecording);
recordBtn.addEventListener('touchstart', function(e){ e.preventDefault(); startRecording(); });
recordBtn.addEventListener('touchend', function(e){ e.preventDefault(); stopRecording(); });
function renderMemos() {
  var list = document.getElementById('memo-list');
  var memos = (appData.memos || []).slice().sort(function(a,b){ return new Date(b.date) - new Date(a.date); });
  if (!memos.length) { list.innerHTML = '<div class="empty-state"><div class="empty-icon">\uD83D\uDCDD</div><p>\u8FD8\u6CA1\u6709\u5907\u5FD8\u5F55</p></div>'; return; }
  list.innerHTML = '';
  var pending = [];
  for (var i = 0; i < memos.length; i++) {
    (function(m){
      var item = document.createElement('div'); item.className = 'memo-item';
      if (m.type === 'text') {
        item.innerHTML = '<div class="memo-content">' + escapeHtml(m.content) + '</div><div class="memo-meta">' + m.date + '<button class="memo-delete" data-id="' + m.id + '">\u5220\u9664</button></div>';
        list.appendChild(item);
      } else {
        dbGet('hudie_audio', 'memos', m.content).then(function(blob){
          var url = blob ? URL.createObjectURL(blob) : '';
          item.innerHTML = '<div class="memo-audio"><audio controls src="' + url + '"></audio><span>\uD83C\uDF99\uFE0F ' + (m.duration || '?') + 's</span></div><div class="memo-meta">' + m.date + '<button class="memo-delete" data-id="' + m.id + '">\u5220\u9664</button></div>';
          list.appendChild(item);
        }).catch(function(){});
      }
    })(memos[i]);
  }
}
document.getElementById('memo-list').addEventListener('click', function(e){
  var btn = e.target.closest ? e.target.closest('.memo-delete') : null;
  if (btn) {
    var id = parseInt(btn.dataset.id);
    var memo = appData.memos.find(function(m){ return m.id === id; });
    if (memo && memo.type === 'audio') dbDelete('hudie_audio', 'memos', memo.content).catch(function(){});
    appData.memos = appData.memos.filter(function(m){ return m.id !== id; });
    saveData(); renderMemos();
  }
});

/* ====== \u6570\u636E\u5BFC\u51FA/\u5BFC\u5165 ====== */
function exportData() {
  var blob = new Blob([JSON.stringify(appData, null, 2)], { type:'application/json' });
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url;
  a.download = 'hudie_workbench_' + todayISO() + '.json';
  a.click();
  URL.revokeObjectURL(url);
}
function importData(file) {
  if (!file) return;
  var reader = new FileReader();
  reader.onload = function(ev){
    try {
      var imported = JSON.parse(ev.target.result);
      if (confirm('\u786E\u8BA4\u5BFC\u5165\uFF1F\u8FD9\u5C06\u8986\u76D6\u5F53\u524D\u6570\u636E\u3002')) {
        appData = migrateData(imported);
        saveData();
        alert('\u5BFC\u5165\u6210\u529F\uFF01\u9875\u9762\u5C06\u5237\u65B0\u3002');
        location.reload();
      }
    } catch(err) {
      alert('\u6587\u4EF6\u683C\u5F0F\u9519\u8BEF\uFF0C\u65E0\u6CD5\u5BFC\u5165');
    }
  };
  reader.readAsText(file);
}
var exportBtns = document.querySelectorAll('#export-data-btn, #export-data-btn2');
exportBtns.forEach(function(btn){ btn.addEventListener('click', exportData); });
var importBtns = document.querySelectorAll('#import-data-btn, #import-data-btn2');
importBtns.forEach(function(btn){ btn.addEventListener('click', function(){ var f = btn.id === 'import-data-btn' ? 'import-file' : 'import-file2'; document.getElementById(f).click(); }); });
var importFiles = document.querySelectorAll('#import-file, #import-file2');
importFiles.forEach(function(input){ input.addEventListener('change', function(e){ importData(e.target.files[0]); e.target.value = ''; }); });

/* ====== \u521D\u59CB\u5316 ====== */
function init() {
  document.getElementById('today-date').textContent = todayStr();
  document.getElementById('today-weekday').textContent = weekdayStr();
  renderTodos();
  renderWeightSection();
  renderPoopSection();
  renderBabySection();
  renderCheckupSection();
  renderBagList();
  renderKnowledgeList();
  renderFetalHistory();
  renderFavorites();
  renderWeeklyPlan();
  renderDailyVideos('pilates-videos', 'pilates');
  renderDailyVideos('beauty-videos', 'beauty');
  renderDailyVideos('nutrition-videos', 'nutrition');
  renderDailyVideos('english-videos', 'english');
  renderMemos();
}
init();
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function(){
    navigator.serviceWorker.register('./sw.js').then(function(){ console.log('SW registered'); }).catch(function(err){ console.log('SW error', err); });
  });
}
