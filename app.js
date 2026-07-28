/* ====== \u80e1\u789f\u7684\u5de5\u4f5c\u53f0 2.0 ====== */
const STORAGE_KEY = 'hudie_workbench_v3';
const WEEKDAYS = ['mon','tue','wed','thu','fri','sat','sun'];
const WEEKDAY_LABELS = { mon:'\u5468\u4e00', tue:'\u5468\u4e8c', wed:'\u5468\u4e09', thu:'\u5468\u56db', fri:'\u5468\u4e94', sat:'\u5468\u516d', sun:'\u5468\u65e5' };
const MEAL_KEYS = ['breakfast','morningSnack','lunch','afternoonSnack','dinner','eveningSnack'];
const MEAL_LABELS = { breakfast:'\u65e9\u9910', morningSnack:'\u65e9\u52a0\u9910', lunch:'\u5348\u9910', afternoonSnack:'\u5348\u52a0\u9910', dinner:'\u665a\u9910', eveningSnack:'\u665a\u52a0\u9910' };
const DAILY_VIDEOS = {
  pilates: [
    { title:'\u5b55\u671f\u666e\u62c9\u63d0 20 \u5206\u949f\uff08\u5b89\u5168\u8212\u7f13\uff09', link:'https://m.bilibili.com/search?keyword=%E5%AD%95%E6%9C%9F%E6%99%AE%E6%8B%89%E6%8F%90' },
    { title:'\u5c45\u5bb6\u666e\u62c9\u63d0 10 \u5206\u949f\u5165\u95e8', link:'https://m.bilibili.com/search?keyword=%E5%B1%85%E5%AE%B6%E6%99%AE%E6%8B%89%E6%8F%90%E5%85%A5%E9%97%A8' },
    { title:'\u4ea7\u540e\u6062\u590d\u666e\u62c9\u63d0 15 \u5206\u949f', link:'https://m.bilibili.com/search?keyword=%E4%BA%A7%E5%90%8E%E6%99%AE%E6%8B%89%E6%8F%90%E6%81%A2%E5%A4%8D' },
    { title:'\u666e\u62c9\u63d0\u6838\u5fc3\u8bad\u7ec3 \u521d\u7ea7', link:'https://m.bilibili.com/search?keyword=%E6%99%AE%E6%8B%89%E6%8F%90%E6%A0%B8%E5%BF%83%E8%AE%AD%E7%BB%83%E5%88%9D%E7%BA%A7' },
    { title:'\u7761\u524d\u666e\u62c9\u63d0\u62c9\u4f38 12 \u5206\u949f', link:'https://m.bilibili.com/search?keyword=%E7%9D%A1%E5%89%8D%E6%99%AE%E6%8B%89%E6%8F%90%E6%8B%89%E4%BC%B8' },
    { title:'\u5b55\u5987\u666e\u62c9\u63d0 \u7f13\u89e3\u8170\u80cc\u75bc\u75db', link:'https://m.bilibili.com/search?keyword=%E5%AD%95%E5%A6%87%E6%99%AE%E6%8B%89%E6%8F%90%E8%85%B0%E8%83%8C' },
    { title:'30 \u5929\u666e\u62c9\u63d0\u5851\u5f62 \u00b7 \u7b2c 1 \u5929', link:'https://m.bilibili.com/search?keyword=30%E5%A4%A9%E6%99%AE%E6%8B%89%E6%8F%90%E5%A1%91%E5%BD%A2' },
    { title:'\u666e\u62c9\u63d0\u547c\u5438\u6cd5\u7ec3\u4e60 5 \u5206\u949f', link:'https://m.bilibili.com/search?keyword=%E6%99%AE%E6%8B%89%E6%8F%90%E5%91%BC%E5%90%B8%E6%B3%95' }
  ],
  beauty: [
    { title:'\u5b55\u671f\u901a\u52e4\u7a7f\u642d 5 \u5957 LOOK', link:'https://www.xiaohongshu.com/search_result?keyword=%E5%AD%95%E6%9C%9F%E7%A9%BF%E6%90%AD%E9%80%9A%E5%8B%A4' },
    { title:'\u65b0\u624b\u5316\u5986\u6559\u7a0b \u4f2a\u7d20\u989c\u5986', link:'https://m.bilibili.com/search?keyword=%E6%96%B0%E6%89%8B%E5%8C%96%E5%A6%86%E6%95%99%E7%A8%8B' },
    { title:'\u68a8\u5f62\u8eab\u6750\u7a7f\u642d\u516c\u5f0f', link:'https://www.xiaohongshu.com/search_result?keyword=%E6%A2%A8%E5%BD%A2%E8%BA%AB%E6%9D%90%E7%A9%BF%E6%90%AD%E5%85%AC%E5%BC%8F' },
    { title:'\u5b55\u671f\u7a7f\u642d\u663e\u7626 10 \u4e2a\u6280\u5de7', link:'https://www.xiaohongshu.com/search_result?keyword=%E5%AD%95%E6%9C%9F%E7%A9%BF%E6%90%AD%E6%98%BE%E7%98%A6' },
    { title:'\u65e9\u516b\u5feb\u901f\u51fa\u95e8\u5986 5 \u5206\u949f', link:'https://m.bilibili.com/search?keyword=%E6%97%A9%E5%85%AB%E5%BF%AB%E9%80%9F%E5%87%BA%E9%97%A8%E5%A6%86' },
    { title:'\u5b55\u671f\u7a7f\u642d\u535a\u4e3b\u5408\u96c6\u63a8\u8350', link:'https://www.xiaohongshu.com/search_result?keyword=%E5%AD%95%E6%9C%9F%E7%A9%BF%E6%90%AD%E5%8D%9A%E4%B8%BB' },
    { title:'\u5355\u773c\u76ae\u773c\u5986\u6559\u7a0b \u81ea\u7136\u653e\u5927', link:'https://www.xiaohongshu.com/search_result?keyword=%E5%8D%95%E7%9C%BC%E7%9A%AE%E7%9C%BC%E5%A6%86%E6%95%99%E7%A8%8B' },
    { title:'\u57fa\u7840\u6b3e\u7a7f\u642d\u9ad8\u7ea7\u611f', link:'https://www.douyin.com/search/%E5%9F%BA%E7%A1%80%E6%AC%BE%E9%AB%98%E7%BA%A7%E6%84%9F%E7%A9%BF%E6%90%AD' }
  ],
  nutrition: [
    { title:'\u5b55\u671f\u63a7\u7cd6\u996e\u98df\u5168\u653b\u7565', link:'https://m.bilibili.com/search?keyword=%E5%AD%95%E6%9C%9F%E6%8E%A7%E7%B3%96%E9%A5%AE%E9%A3%9F' },
    { title:'\u4e2d\u56fd\u5c45\u6c11\u81b3\u98df\u6307\u5357\u89e3\u8bfb', link:'https://m.bilibili.com/search?keyword=%E4%B8%AD%E5%9B%BD%E5%B1%85%E6%B0%91%E8%86%B3%E9%A3%9F%E6%8C%87%E5%8D%97' },
    { title:'\u51cf\u8102\u671f\u86cb\u767d\u8d28\u600e\u4e48\u5403', link:'https://www.douyin.com/search/%E5%87%8F%E8%84%82%E6%9C%9F%E8%9B%8B%E7%99%BD%E8%B4%A8' },
    { title:'\u5b55\u671f\u8865\u94c1\u8865\u9499\u98df\u7269\u6e05\u5355', link:'https://www.xiaohongshu.com/search_result?keyword=%E5%AD%95%E6%9C%9F%E8%A1%A5%E9%93%81%E8%A1%A5%E9%92%99' },
    { title:'\u4f4e GI \u98df\u7269\u9009\u62e9\u6307\u5357', link:'https://m.bilibili.com/search?keyword=%E4%BD%8EGI%E9%A3%9F%E7%89%A9' },
    { title:'\u598a\u5a20\u671f\u7cd6\u5c3f\u75c5\u996e\u98df\u7ba1\u7406', link:'https://m.bilibili.com/search?keyword=%E5%A6%8A%E5%A8%A0%E6%9C%9F%E7%B3%96%E5%B0%BF%E7%97%85%E9%A5%AE%E9%A3%9F' },
    { title:'\u5b55\u671f\u8425\u517b\u8865\u5145\u5242\u600e\u4e48\u9009', link:'https://www.xiaohongshu.com/search_result?keyword=%E5%AD%95%E6%9C%9F%E8%90%A5%E5%85%BB%E8%A1%A5%E5%85%85%E5%89%82' },
    { title:'\u51cf\u8102\u671f\u4e00\u65e5\u4e09\u9910\u642d\u914d', link:'https://www.douyin.com/search/%E5%87%8F%E8%84%82%E6%9C%9F%E4%B8%80%E6%97%A5%E4%B8%89%E9%A4%90' }
  ],
  english: [
    { title:'\u65e5\u5e38\u82f1\u8bed\u53e3\u8bed 100 \u53e5', link:'https://m.bilibili.com/search?keyword=%E6%97%A5%E5%B8%B8%E8%8B%B1%E8%AF%AD%E5%8F%A3%E8%AF%AD100%E5%8F%A5' },
    { title:'\u673a\u573a\u901a\u5173\u82f1\u8bed\u5bf9\u8bdd', link:'https://m.bilibili.com/search?keyword=%E6%9C%BA%E5%9C%BA%E9%80%9A%E5%85%B3%E8%8B%B1%E8%AF%AD%E5%AF%B9%E8%AF%9D' },
    { title:'\u9910\u5385\u70b9\u9910\u82f1\u8bed \u5b9e\u7528\u53e5\u578b', link:'https://m.bilibili.com/search?keyword=%E9%A4%90%E5%8E%85%E7%82%B9%E9%A4%90%E8%8B%B1%E8%AF%AD' },
    { title:'\u8d2d\u7269\u82f1\u8bed \u8ba8\u4ef7\u8fd8\u4ef7', link:'https://m.bilibili.com/search?keyword=%E8%B4%AD%E7%89%A9%E8%8B%B1%E8%AF%AD%E8%AE%A8%E4%BB%B7%E8%BF%98%E4%BB%B7' },
    { title:'\u81ea\u6211\u4ecb\u7ecd\u82f1\u8bed 30 \u79d2\u7248', link:'https://m.bilibili.com/search?keyword=%E8%87%AA%E6%88%91%E4%BB%8B%E7%BB%8D%E8%8B%B1%E8%AF%AD30%E7%A7%92' },
    { title:'\u7535\u8bdd\u82f1\u8bed \u9884\u7ea6/\u53d6\u6d88', link:'https://m.bilibili.com/search?keyword=%E7%94%B5%E8%AF%9D%E8%8B%B1%E8%AF%AD%E9%A2%84%E7%BA%A6' },
    { title:'\u9152\u5e97\u5165\u4f4f\u82f1\u8bed\u5bf9\u8bdd', link:'https://m.bilibili.com/search?keyword=%E9%85%92%E5%BA%97%E5%85%A5%E4%BD%8F%E8%8B%B1%E8%AF%AD' },
    { title:'\u770b\u75c5\u5c31\u533b\u82f1\u8bed\u5e38\u7528\u8868\u8fbe', link:'https://m.bilibili.com/search?keyword=%E7%9C%8B%E7%97%85%E5%B0%B1%E5%8C%BB%E8%8B%B1%E8%AF%AD' }
  ]
};
const defaultData = {
  todos: [
    { id:1, text:'\u666e\u62c9\u63d0\u7ec3\u4e60 30 \u5206\u949f', time:'\u7075\u6d3b\u5b89\u6392', done:false, category:'pilates', note:'' },
    { id:2, text:'\u8425\u517b\u5b66\u77e5\u8bc6\u5b66\u4e60 30 \u5206\u949f', time:'\u7075\u6d3b\u5b89\u6392', done:false, category:'nutrition', note:'' },
    { id:3, text:'\u5316\u5986\u7a7f\u642d\u5b66\u4e60 30 \u5206\u949f', time:'\u7075\u6d3b\u5b89\u6392', done:false, category:'beauty', note:'' },
    { id:4, text:'\u82f1\u8bed\u7ec3\u4e60 30 \u5206\u949f', time:'\u7075\u6d3b\u5b89\u6392', done:false, category:'english', note:'' }
  ],
  weightRecords:[], poopRecords:[], babyRecords:[], checkupRecords:[], lmpDate:null, fetalRecords:[], bagItems:[], knowledgeFavs:[],
  todosDate:null,
  weeklyPlan:WEEKDAYS.reduce(function(acc,d){ acc[d]={}; MEAL_KEYS.forEach(function(k){ acc[d][k]=''; }); return acc; }, {}),
  interests:[], memos:[], reviews:[]
};
function migrateData(stored) {
  if (!stored) return Object.assign({}, defaultData);
  var merged = Object.assign({}, defaultData, stored);
  if (!merged.weeklyPlan) merged.weeklyPlan = defaultData.weeklyPlan;
  if (!merged.lmpDate) merged.lmpDate = null;
  WEEKDAYS.forEach(function(d){ if (!merged.weeklyPlan[d]) merged.weeklyPlan[d] = {}; MEAL_KEYS.forEach(function(k){ if (merged.weeklyPlan[d][k] === undefined) merged.weeklyPlan[d][k] = ''; }); });
  ['weightRecords','poopRecords','babyRecords','checkupRecords','fetalRecords','interests','memos','reviews','bagItems','knowledgeFavs'].forEach(function(k){ if (!merged[k]) merged[k] = []; });
  // \u517c\u5bb9\u65e7\u6570\u636e\uff1a\u786e\u4fdd todos \u4e2d\u6bcf\u9879\u6709 note \u5b57\u6bb5
  if (merged.todos) {
    merged.todos.forEach(function(t){ if (t.note === undefined) t.note = ''; });
  }
  return merged;
}
function loadData() { var stored = localStorage.getItem(STORAGE_KEY); if (stored) { try { return migrateData(JSON.parse(stored)); } catch(e){ return Object.assign({}, defaultData); } } return Object.assign({}, defaultData); }
function saveData() { localStorage.setItem(STORAGE_KEY, JSON.stringify(appData)); }
var appData = loadData();
function todayStr() { var d = new Date(); return d.getFullYear() + '\u5e74' + (d.getMonth()+1) + '\u6708' + d.getDate() + '\u65e5'; }
function weekdayStr() { return ['\u661f\u671f\u65e5','\u661f\u671f\u4e00','\u661f\u671f\u4e8c','\u661f\u671f\u4e09','\u661f\u671f\u56db','\u661f\u671f\u4e94','\u661f\u671f\u516d'][new Date().getDay()]; }
function todayISO() { var d = new Date(); return d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0'); }
function nowStr() { var d = new Date(); return d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0') + ' ' + String(d.getHours()).padStart(2,'0') + ':' + String(d.getMinutes()).padStart(2,'0'); }
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

/* ====== \u6bcf\u65e5\u4efb\u52a1 ====== */
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
    html += '<input class="todo-note-input" data-id="' + t.id + '" placeholder="\u5907\u6ce8\u7279\u6b8a\u60c5\u51b5..." value="' + escapeHtml(t.note || '') + '">';
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
    if (confirm('\u5220\u9664\u8fd9\u6761\u4efb\u52a1\uff1f')) { appData.todos = appData.todos.filter(function(t){ return t.id !== id; }); saveData(); renderTodos(); }
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
  if (/\u666e\u62c9\u63d0|pilates/i.test(text)) category = 'pilates';
  else if (/\u8425\u517b|nutrition|\u98df\u8c31|\u996e\u98df/i.test(text)) category = 'nutrition';
  else if (/\u5316\u5986|\u7a7f\u642d|\u642d\u914d|\u670d\u88c5|\u7f8e\u5986/i.test(text)) category = 'beauty';
  else if (/\u82f1\u8bed|english|\u53e3\u8bed|\u5355\u8bcd/i.test(text)) category = 'english';
  appData.todos.push({ id:newId(appData.todos), text:text, time:'\u81ea\u5b9a\u4e49', done:false, category:category, note:'' });
  saveData(); input.value = ''; renderTodos();
}

/* ====== \u5f85\u4ea7\u5305\u6e05\u5355 ====== */
var currentBagCat = 'all';
var currentKnowledgeCat = 'all';

function ensureBagDefaults() {
  if (appData.bagItems && appData.bagItems.length) return;
  appData.bagItems = [
    { id:1, name:'\u592b\u59bb\u53cc\u65b9\u8eab\u4efd\u8bc1', cat:'\u8bc1\u4ef6\u8d44\u6599', checked:false },
    { id:2, name:'\u533b\u4fdd\u5361/\u793e\u4fdd\u5361', cat:'\u8bc1\u4ef6\u8d44\u6599', checked:false },
    { id:3, name:'\u4ea7\u68c0\u6863\u6848/\u6bcd\u5b50\u5065\u5eb7\u624b\u518c', cat:'\u8bc1\u4ef6\u8d44\u6599', checked:false },
    { id:4, name:'\u7ed3\u5a5a\u8bc1', cat:'\u8bc1\u4ef6\u8d44\u6599', checked:false },
    { id:5, name:'\u6237\u53e3\u672c', cat:'\u8bc1\u4ef6\u8d44\u6599', checked:false },
    { id:6, name:'\u536b\u751f\u5dfe\uff08\u4ea7\u5987\u4e13\u7528\uff09', cat:'\u5988\u5988\u7528\u54c1', checked:false },
    { id:7, name:'\u4ea7\u5987\u8ba1\u91cf\u7eb8/\u62a4\u7406\u57ab', cat:'\u5988\u5988\u7528\u54c1', checked:false },
    { id:8, name:'\u4e00\u6b21\u6027\u7eaf\u68c9\u5185\u88e4', cat:'\u5988\u5988\u7528\u54c1', checked:false },
    { id:9, name:'\u54fa\u4e73\u6587\u80f8/\u9632\u6ea2\u4e73\u57ab', cat:'\u5988\u5988\u7528\u54c1', checked:false },
    { id:10, name:'\u4e73\u5934\u4fdd\u62a4\u971c', cat:'\u5988\u5988\u7528\u54c1', checked:false },
    { id:11, name:'\u62bd\u7eb8/\u5377\u7eb8', cat:'\u5988\u5988\u7528\u54c1', checked:false },
    { id:12, name:'\u6708\u5b50\u670d/\u7761\u8863\uff08\u524d\u5f00\u6263\uff09', cat:'\u5988\u5988\u7528\u54c1', checked:false },
    { id:13, name:'\u62d6\u978b\uff08\u9632\u6ed1\uff09', cat:'\u5988\u5988\u7528\u54c1', checked:false },
    { id:14, name:'\u5438\u7ba1\u676f/\u4fdd\u6e29\u676f', cat:'\u5988\u5988\u7528\u54c1', checked:false },
    { id:15, name:'\u6d17\u6f31\u7528\u54c1\uff08\u7259\u5237\u3001\u6bdb\u5dfe\u7b49\uff09', cat:'\u5988\u5988\u7528\u54c1', checked:false },
    { id:16, name:'\u51fa\u9662\u670d', cat:'\u5988\u5988\u7528\u54c1', checked:false },
    { id:17, name:'\u6536\u8179\u5e26', cat:'\u5988\u5988\u7528\u54c1', checked:false },
    { id:18, name:'\u5a74\u513f\u5305\u88ab\uff08\u8584\u539a\u5404\u4e00\uff09', cat:'\u5b9d\u5b9d\u7528\u54c1', checked:false },
    { id:19, name:'\u5a74\u513f\u8fde\u4f53\u8863\uff0852\u7801\uff09', cat:'\u5b9d\u5b9d\u7528\u54c1', checked:false },
    { id:20, name:'\u5a74\u513f\u53e3\u6c34\u5dfe/\u5c0f\u6bdb\u5dfe', cat:'\u5b9d\u5b9d\u7528\u54c1', checked:false },
    { id:21, name:'NB\u53f7\u7eb8\u5c3f\u88e4', cat:'\u5b9d\u5b9d\u7528\u54c1', checked:false },
    { id:22, name:'\u6e7f\u5dfe/\u68c9\u67d4\u5dfe', cat:'\u5b9d\u5b9d\u7528\u54c1', checked:false },
    { id:23, name:'\u5a74\u513f\u62a4\u81c0\u818f', cat:'\u5b9d\u5b9d\u7528\u54c1', checked:false },
    { id:24, name:'\u5976\u74f6+\u5976\u7c89\uff08\u5c0f\u7f50\u5907\u7528\uff09', cat:'\u5b9d\u5b9d\u7528\u54c1', checked:false },
    { id:25, name:'\u5a74\u513f\u5e3d/\u5c0f\u889c\u5b50', cat:'\u5b9d\u5b9d\u7528\u54c1', checked:false },
    { id:26, name:'\u624b\u673a+\u5145\u7535\u5668', cat:'\u5176\u4ed6', checked:false },
    { id:27, name:'\u4fdd\u6e29\u996d\u76d2/\u9910\u5177', cat:'\u5176\u4ed6', checked:false },
    { id:28, name:'\u73b0\u91d1/\u94f6\u884c\u5361', cat:'\u5176\u4ed6', checked:false },
    { id:29, name:'\u5438\u7ba1\uff08\u4ea7\u540e\u8eba\u7740\u559d\u6c34\u7528\uff09', cat:'\u5176\u4ed6', checked:false },
    { id:30, name:'\u5de7\u514b\u529b/\u7ea2\u725b\uff08\u8865\u5145\u4f53\u529b\uff09', cat:'\u5176\u4ed6', checked:false }
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

/* ====== \u5b55\u671f\u6307\u5357\u5b50\u5bfc\u822a\u5207\u6362 ====== */
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
    if (confirm('\u5220\u9664\u8fd9\u4e2a\u7269\u54c1\uff1f')) {
      appData.bagItems = appData.bagItems.filter(function(i){ return i.id !== did; });
      saveData(); renderBagList();
    }
  }
});
document.getElementById('add-bag-btn').addEventListener('click', function(){
  var name = document.getElementById('bag-name').value.trim();
  var cat = document.getElementById('bag-category').value;
  if (!name) { alert('\u8bf7\u586b\u5199\u7269\u54c1\u540d\u79f0'); return; }
  appData.bagItems.push({ id:newId(appData.bagItems), name:name, cat:cat, checked:false });
  saveData(); renderBagList();
  document.getElementById('bag-name').value = '';
});

/* ====== \u5b55\u671f\u77e5\u8bc6 ====== */
var KNOWLEDGE_DATA = [
  { id:1, cat:'\u5b55\u65e9\u671f', icon:'\ud83c\udfe5', title:'\u7b2c\u4e00\u6b21\u4ea7\u68c0\u653b\u7565', content:'\u5efa\u6863\u3001NT \u68c0\u67e5\u3001\u5404\u9879\u7b5b\u67e5\u2026\u2026\u7b2c\u4e00\u6b21\u6b63\u5f0f\u4ea7\u68c0\u8be5\u51c6\u5907\u4ec0\u4e48\uff1f\n1. \u5e26\u4e0a\u8eab\u4efd\u8bc1\u3001\u533b\u4fdd\u5361\u3001\u672b\u6b21\u6708\u7ecf\u65e5\u671f\n2. \u63d0\u524d\u9884\u7ea6\u4ea7\u68c0\u65f6\u95f4\uff0c\u9886\u53d6\u6bcd\u5b50\u5065\u5eb7\u624b\u518c\n3. \u7a7f\u5bbd\u677e\u8863\u7269\uff0c\u65b9\u4fbf\u68c0\u67e5\uff0c\u907f\u514d\u8fde\u8863\u88d9\n4. \u90e8\u5206\u9879\u76ee\uff08\u8840\u5e38\u89c4\u3001\u8840\u7cd6\uff09\u9700\u7a7a\u8179\uff0c\u8bb0\u5f97\u54a8\u8be2\u533b\u751f\n5. \u9884\u7559\u5145\u8db3\u65f6\u95f4\uff0c\u6bcf\u9879\u68c0\u67e5\u53ef\u80fd\u9700 1-2 \u5c0f\u65f6' },
  { id:2, cat:'\u5b55\u65e9\u671f', icon:'\ud83d\ude0a', title:'\u5b55\u671f\u60c5\u7eea\u7ba1\u7406', content:'\u8377\u5c14\u8499\u53d8\u5316\u5bfc\u81f4\u60c5\u7eea\u6ce2\u52a8\u5f88\u6b63\u5e38\uff0c\u5b66\u4f1a\u7ba1\u7406\u5b55\u671f\u60c5\u7eea\u3002\n1. \u4fdd\u6301\u5145\u8db3\u7761\u7720\uff0c\u6bcf\u5929 7-9 \u5c0f\u65f6\n2. \u9002\u5ea6\u8fd0\u52a8\uff0c\u5982\u6563\u6b65\u3001\u5b55\u5987\u745c\u4f3d\n3. \u4e0e\u5bb6\u4eba\u3001\u670b\u53cb\u5206\u4eab\u611f\u53d7\uff0c\u4e0d\u8981\u72ec\u81ea\u627f\u53d7\n4. \u9605\u8bfb\u6b63\u80fd\u91cf\u5185\u5bb9\uff0c\u8fdc\u79bb\u8d1f\u9762\u4fe1\u606f\n5. \u9700\u8981\u65f6\u53ef\u54a8\u8be2\u4e13\u4e1a\u5fc3\u7406\u533b\u751f' },
  { id:3, cat:'\u5b55\u4e2d\u671f', icon:'\ud83e\uddb4', title:'\u5b55\u671f\u8170\u80cc\u75db\u7f13\u89e3\u65b9\u6cd5', content:'\u968f\u7740\u809a\u5b50\u53d8\u5927\uff0c\u8170\u80cc\u75db\u662f\u5b55\u671f\u5e38\u89c1\u56f0\u6270\uff0c\u8bd5\u8bd5\u8fd9\u4e9b\u7f13\u89e3\u6280\u5de7\u3002\n1. \u4fdd\u6301\u6b63\u786e\u59ff\u52bf\uff1a\u7ad9\u5750\u65f6\u80cc\u90e8\u633a\u76f4\uff0c\u907f\u514d\u5f2f\u8170\u9a7c\u80cc\n2. \u4f7f\u7528\u5b55\u5987\u6795\u6216 U \u578b\u6795\u652f\u6491\u8170\u80cc\n3. \u6e29\u70ed\u6577\u7f13\u89e3\u6df1\u5c42\u808c\u8089\u9178\u75db\n4. \u907f\u514d\u957f\u65f6\u95f4\u7ad9\u7acb\u6216\u4e45\u5750\uff0c\u5b9a\u65f6\u53d8\u6362\u59ff\u52bf\n5. \u505a\u5b55\u5987\u666e\u62c9\u63d0\uff0c\u589e\u5f3a\u8170\u80cc\u808c\u8089\u529b\u91cf' },
  { id:4, cat:'\u5b55\u4e2d\u671f', icon:'\ud83d\udc63', title:'\u611f\u53d7\u80ce\u52a8\u7684\u7f8e\u597d\u65f6\u523b', content:'\u7b2c\u4e00\u6b21\u611f\u53d7\u80ce\u52a8\u662f\u5b55\u671f\u6700\u795e\u5947\u7684\u4f53\u9a8c\u4e4b\u4e00\uff0c\u4e86\u89e3\u80ce\u52a8\u89c4\u5f8b\u3002\n1. \u9996\u6b21\u80ce\u52a8\u591a\u53d1\u751f\u5728 18-20 \u5468\uff0c\u4e8c\u80ce\u5988\u5988\u53ef\u80fd\u66f4\u65e9\n2. \u521d\u671f\u80ce\u52a8\u7c7b\u4f3c\u9c7c\u6e38\u6c34\u3001\u8774\u8776\u6247\u7fc5\u3001\u8c46\u5b50\u8df3\u52a8\n3. \u80ce\u52a8\u6700\u6d3b\u8dc3\u65f6\u95f4\u4e3a\u665a\u4e0a 8-11 \u70b9\n4. \u5b55 28 \u5468\u540e\u5e94\u6bcf\u5929\u6570\u80ce\u52a8\uff0c\u6b63\u5e38\u6bcf\u5c0f\u65f6 3-5 \u6b21\n5. \u80ce\u52a8\u660e\u663e\u51cf\u5c11\u9700\u53ca\u65f6\u5c31\u533b' },
  { id:5, cat:'\u5b55\u665a\u671f', icon:'\ud83c\udf3a', title:'\u4e34\u4ea7\u4fe1\u53f7\u8bc6\u522b', content:'\u63a5\u8fd1\u9884\u4ea7\u671f\uff0c\u9700\u8981\u4e86\u89e3\u5404\u79cd\u4e34\u4ea7\u4fe1\u53f7\u4ee5\u4fbf\u53ca\u65f6\u5165\u9662\u3002\n1. \u89c4\u5f8b\u5bab\u7f29\uff1a\u6bcf 5 \u5206\u949f\u4e00\u6b21\u3001\u6bcf\u6b21\u6301\u7eed 1 \u5206\u949f\u3001\u6301\u7eed 1 \u5c0f\u65f6\n2. \u89c1\u7ea2\uff1a\u9634\u9053\u6709\u8840\u6027\u5206\u6ccc\u7269\uff0c\u53ef\u80fd 24-48 \u5c0f\u65f6\u540e\u5206\u5a29\n3. \u7834\u6c34\uff1a\u7f8a\u6c34\u6d41\u51fa\uff0c\u9700\u7acb\u5373\u5e73\u8eba\u5e76\u8d76\u5f80\u533b\u9662\n4. \u80ce\u5934\u4e0b\u964d\uff1a\u80ce\u5934\u5165\u76c6\uff0c\u51fa\u73b0\u4e0b\u5760\u611f\u3001\u5c3f\u9891\u52a0\u91cd\n5. \u51fa\u73b0\u4ee5\u4e0a\u4efb\u4e00\u4fe1\u53f7\uff0c\u53ca\u65f6\u8054\u7cfb\u533b\u9662' },
  { id:6, cat:'\u5b55\u665a\u671f', icon:'\ud83d\udcda', title:'\u5b55\u665a\u671f\u7761\u7720\u6539\u5584\u65b9\u6cd5', content:'\u5b55\u665a\u671f\u7761\u7720\u56f0\u96be\u662f\u5e38\u89c1\u95ee\u9898\uff0c\u8bd5\u8bd5\u8fd9\u4e9b\u5c0f\u6280\u5de7\u3002\n1. \u4f7f\u7528\u5b55\u5987\u6795\u652f\u6491\u8170\u80cc\u548c\u8179\u90e8\n2. \u5de6\u4fa7\u5367\u4f4d\u6700\u4f73\uff0c\u4fc3\u8fdb\u8840\u6db2\u5faa\u73af\n3. \u7761\u524d\u5c11\u559d\u6c34\uff0c\u51cf\u5c11\u591c\u8d77\u6b21\u6570\n4. \u7761\u524d\u907f\u514d\u9971\u98df\u548c\u5496\u5561\u56e0\uff0c\u53ef\u559d\u6e29\u725b\u5976\n5. \u4fdd\u6301\u5367\u5ba4\u51c9\u723d\u5b89\u9759\uff0c\u53ef\u7528\u8033\u585e\u773c\u7f69\u8f85\u52a9' },
  { id:7, cat:'\u5b55\u665a\u671f', icon:'\ud83d\udcb0', title:'\u5b55\u665a\u671f\u8425\u517b\u91cd\u70b9', content:'\u5b55\u665a\u671f\u662f\u80ce\u513f\u5feb\u901f\u751f\u957f\u9636\u6bb5\uff0c\u6ce8\u610f\u8425\u517b\u4f9b\u7ed9\u3002\n1. \u4f18\u8d28\u86cb\u767d\uff1a\u9c7c\u3001\u867e\u3001\u9e21\u8089\u3001\u9e21\u86cb\u3001\u4e73\u5236\u54c1\n2. \u8865\u9499\uff1a\u725b\u5976\u3001\u8c46\u8150\u3001\u829d\u9ebb\u9171\u3001\u867e\u76ae\n3. \u8865\u94c1\uff1a\u7ea2\u8089\u3001\u52a8\u7269\u809d\u810f\u3001\u83e0\u83dc\uff08\u914d\u7ef4C\u4fc3\u5438\u6536\uff09\n4. \u8865\u5145 DHA \u5e2e\u52a9\u80ce\u513f\u5927\u8111\u53d1\u80b2\n5. \u63a7\u5236\u7cd6\u5206\u548c\u7cbe\u5236\u78b3\u6c34\uff0c\u9884\u9632\u598a\u5a20\u671f\u7cd6\u5c3f\u75c5' },
  { id:8, cat:'\u5206\u5a29', icon:'\ud83c\udf8a', title:'\u81ea\u7136\u5206\u5a29\u4e0e\u5f85\u4ea7\u51c6\u5907', content:'\u4e86\u89e3\u5206\u5a29\u8fc7\u7a0b\uff0c\u505a\u597d\u5fc3\u7406\u548c\u7269\u54c1\u51c6\u5907\u3002\n1. \u672c\u4eba\u53ca\u5bb6\u5c5e\u8981\u4e86\u89e3\u5206\u5a29\u6d41\u7a0b\uff0c\u505a\u597d\u5fc3\u7406\u51c6\u5907\n2. \u9009\u62e9\u6709\u8d44\u8d28\u3001\u6709\u7ecf\u9a8c\u7684\u533b\u9662\u548c\u4ea7\u79d1\u533b\u751f\n3. \u63d0\u524d\u4e86\u89e3\u4ea7\u623f\u73af\u5883\uff0c\u719f\u6089\u5165\u9662\u6d41\u7a0b\n4. \u51c6\u5907\u597d\u5f85\u4ea7\u5305\uff0c\u4f34\u4ea7\u4eba\u5168\u7a0b\u966a\u4f34\n5. \u7ec3\u4e60\u62c9\u739b\u6cfd\u547c\u5438\u6cd5\uff0c\u5e2e\u52a9\u5e94\u5bf9\u5bab\u7f29\u75bc\u75db' },
  { id:9, cat:'\u4ea7\u540e', icon:'\ud83d\udcaf', title:'\u4ea7\u540e\u6062\u590d\u8981\u70b9', content:'\u4ea7\u540e 42 \u5929\u662f\u91cd\u8981\u7684\u6062\u590d\u671f\uff0c\u6ce8\u610f\u79d1\u5b66\u8c03\u517b\u3002\n1. \u5145\u8db3\u4f11\u606f\uff0c\u907f\u514d\u8fc7\u5ea6\u52b3\u7d2f\n2. \u8425\u517b\u5747\u8861\uff0c\u591a\u98df\u9ad8\u86cb\u767d\u3001\u5bcc\u542b\u94c1\u548c\u9499\u7684\u98df\u7269\n3. \u5173\u6ce8\u6076\u9732\u6392\u51fa\u60c5\u51b5\uff0c\u53d1\u73b0\u5f02\u5e38\u53ca\u65f6\u5c31\u533b\n4. \u8863\u7740\u5bbd\u677e\u900f\u6c14\uff0c\u6ce8\u610f\u4e2a\u4eba\u536b\u751f\n5. \u4fdd\u6301\u5fc3\u60c5\u8212\u7545\uff0c\u8b66\u60d5\u4ea7\u540e\u6291\u90c1\n6. \u4ea7\u540e 42 \u5929\u590d\u67e5\uff0c\u8bc4\u4f30\u6062\u590d\u60c5\u51b5' }
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

/* ====== \u6570\u80ce\u52a8 ====== */
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
    if (confirm('\u5df2\u8fbe\u5230 10 \u6b21\u80ce\u52a8\uff0c\u662f\u5426\u4fdd\u5b58\u4eca\u65e5\u8bb0\u5f55\uff1f')) {
      saveFetalRecord();
      fetalReset();
    }
  }
});
document.getElementById('fetal-reset').addEventListener('click', fetalReset);
function fetalReset() {
  if (fetalState.count > 0 && fetalState.startTime) {
    if (!confirm('\u5f53\u524d\u8ba1\u6570 ' + fetalState.count + ' \u6b21\u8981\u4e22\u5f03\u5417\uff1f')) return;
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
  var html = '<h4 style="font-size:14px;color:var(--text);margin:12px 0 8px;">\u6700\u8fd1\u8bb0\u5f55</h4>';
  if (!records.length) { html += '<div style="text-align:center;color:var(--text-light);font-size:13px;padding:12px;">\u8fd8\u6ca1\u6709\u8bb0\u5f55</div>'; list.innerHTML = html; return; }
  for (var i = 0; i < records.length; i++) {
    var r = records[i];
    html += '<div class="fetal-history-item"><span class="fetal-history-date">' + r.date + '</span><span class="fetal-history-count">' + r.count + ' \u6b21 / ' + (r.duration || '--') + ' \u5206\u949f</span></div>';
  }
  list.innerHTML = html;
}
updateFetalDisplay();

/* ====== \u4f53\u91cd\u8bb0\u5f55 ====== */
function renderWeightSection() { document.getElementById('weight-date').value = todayISO(); renderWeightChart(); renderWeightList(); }
document.getElementById('add-weight-btn').addEventListener('click', function(){
  var date = document.getElementById('weight-date').value;
  var weight = parseFloat(document.getElementById('weight-value').value);
  var week = document.getElementById('weight-week').value;
  var note = document.getElementById('weight-note').value.trim();
  if (!date || isNaN(weight)) { alert('\u8bf7\u586b\u5199\u65e5\u671f\u548c\u4f53\u91cd'); return; }
  appData.weightRecords.push({ id:newId(appData.weightRecords), date:date, weight:weight, week:week, note:note });
  saveData(); renderWeightSection();
  document.getElementById('weight-value').value = '';
  document.getElementById('weight-note').value = '';
});
function renderWeightList() {
  var list = document.getElementById('weight-list');
  var records = appData.weightRecords.slice().sort(function(a,b){ return a.date.localeCompare(b.date); }).reverse();
  var html = '';
  for (var i = 0; i < records.length; i++) {
    var r = records[i];
    html += '<div class="record-item">';
    html += '<div class="record-main"><span class="record-date">' + r.date + '</span><span class="record-value">' + r.weight + ' kg</span>' + (r.week ? '<span class="record-tag">\u5b55 ' + r.week + ' \u5468</span>' : '') + '</div>';
    if (r.note) html += '<div class="record-note">' + escapeHtml(r.note) + '</div>';
    html += '<button class="record-delete" data-id="' + r.id + '" data-type="weight">\u2715</button>';
    html += '</div>';
  }
  list.innerHTML = html;
}
function renderWeightChart() {
  var chart = document.getElementById('weight-chart');
  var records = appData.weightRecords.slice().sort(function(a,b){ return a.date.localeCompare(b.date); });
  if (records.length < 2) { chart.innerHTML = '<div class="chart-placeholder">\u8bb0\u5f55 2 \u6761\u4ee5\u4e0a\u4f53\u91cd\u540e\u751f\u6210\u66f2\u7ebf</div>'; return; }
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

/* ====== \u4fbf\u4fbf\u8bb0\u5f55 ====== */
function renderPoopSection() { document.getElementById('poop-date').value = todayISO(); renderPoopList(); }
document.getElementById('add-poop-btn').addEventListener('click', function(){
  var date = document.getElementById('poop-date').value;
  var status = document.getElementById('poop-status').value;
  var note = document.getElementById('poop-note').value.trim();
  if (!date || !status) { alert('\u8bf7\u586b\u5199\u65e5\u671f\u548c\u72b6\u6001'); return; }
  appData.poopRecords.push({ id:newId(appData.poopRecords), date:date, status:status, note:note });
  saveData(); renderPoopSection();
  document.getElementById('poop-status').value = '';
  document.getElementById('poop-note').value = '';
});
var POOP_LABELS = { normal:'\u6b63\u5e38', dry:'\u504f\u5e72', diarrhea:'\u504f\u7a00', difficult:'\u56f0\u96be', none:'\u672a\u6392\u4fbf' };
function renderPoopList() {
  var list = document.getElementById('poop-list');
  var records = appData.poopRecords.slice().sort(function(a,b){ return a.date.localeCompare(b.date); }).reverse();
  var html = '';
  for (var i = 0; i < records.length; i++) {
    var r = records[i];
    html += '<div class="record-item">';
    html += '<div class="record-main"><span class="record-date">' + r.date + '</span><span class="record-value">' + POOP_LABELS[r.status] + '</span></div>';
    if (r.note) html += '<div class="record-note">' + escapeHtml(r.note) + '</div>';
    html += '<button class="record-delete" data-id="' + r.id + '" data-type="poop">\u2715</button>';
    html += '</div>';
  }
  list.innerHTML = html;
}

/* ====== \u5b9d\u5b9d\u6210\u957f\u72b6\u6001 ====== */
var BABY_GROWTH_DATA = {
  4:  { length:0.4, weight:'--', baby:'\u53d7\u7cbe\u5375\u7740\u5e8a\uff0c\u5f00\u59cb\u5206\u88c2\u53d1\u80b2\uff0c\u50cf\u829d\u9ebb\u4e00\u6837\u5c0f\u3002', mom:'\u53ef\u80fd\u8fd8\u6ca1\u4ec0\u4e48\u611f\u89c9\uff0c\u6fc0\u7d20\u6c34\u5e73\u5f00\u59cb\u53d8\u5316\u3002' },
  5:  { length:0.6, weight:'--', baby:'\u80da\u80ce\u50cf\u82f9\u679c\u7c7d\uff0c\u795e\u7ecf\u7ba1\u5f00\u59cb\u5f62\u6210\u3002', mom:'\u53ef\u80fd\u51fa\u73b0\u8f7b\u5fae\u75b2\u52b3\u3001\u4e73\u623f\u80c0\u75db\u3002' },
  6:  { length:0.8, weight:'--', baby:'\u5fc3\u810f\u5f00\u59cb\u8df3\u52a8\uff0c\u56db\u80a2\u82bd\u51fa\u73b0\uff0c\u50cf\u6241\u8c46\u5927\u5c0f\u3002', mom:'\u65e9\u5b55\u53cd\u5e94\u53ef\u80fd\u51fa\u73b0\uff0c\u5bb9\u6613\u6076\u5fc3\u3001\u55dc\u7761\u3002' },
  7:  { length:1.0, weight:'--', baby:'\u5934\u90e8\u53d1\u80b2\u660e\u663e\uff0c\u773c\u775b\u3001\u9f3b\u5b50\u5f00\u59cb\u6210\u5f62\u3002', mom:'\u5b55\u5410\u53ef\u80fd\u52a0\u91cd\uff0c\u6ce8\u610f\u5c11\u98df\u591a\u9910\u3002' },
  8:  { length:1.6, weight:'1', baby:'\u521d\u5177\u4eba\u5f62\uff0c\u624b\u6307\u811a\u8dbe\u5f00\u59cb\u53d1\u80b2\uff0c\u50cf\u82b8\u8c46\u5927\u5c0f\u3002', mom:'\u5b50\u5bab\u5728\u6162\u6162\u589e\u5927\uff0c\u8179\u90e8\u8fd8\u6ca1\u660e\u663e\u53d8\u5316\u3002' },
  9:  { length:2.2, weight:'2', baby:'\u4e94\u5b98\u66f4\u6e05\u6670\uff0c\u5fc3\u810f\u5206\u6210\u56db\u4e2a\u8154\u5ba4\u3002', mom:'\u4e73\u623f\u80c0\u75db\u6301\u7eed\uff0c\u60c5\u7eea\u53ef\u80fd\u6ce2\u52a8\u8f83\u5927\u3002' },
  10: { length:3.1, weight:'4', baby:'\u6b63\u5f0f\u8fdb\u5165\u80ce\u513f\u671f\uff0c\u624b\u81c2\u53ef\u5f2f\u66f2\uff0c\u50cf\u91d1\u6854\u5927\u5c0f\u3002', mom:'\u65e9\u5b55\u53cd\u5e94\u53ef\u80fd\u51cf\u8f7b\uff0c\u7cbe\u529b\u7565\u6709\u6062\u590d\u3002' },
  11: { length:4.1, weight:'7', baby:'\u810a\u67f1\u5f00\u59cb\u9aa8\u5316\uff0c\u4f1a\u505a\u5438\u542e\u548c\u541e\u54bd\u52a8\u4f5c\u3002', mom:'\u8179\u90e8\u8f7b\u5fae\u9686\u8d77\uff0c\u88e4\u5b50\u53ef\u80fd\u53d8\u7d27\u3002' },
  12: { length:5.4, weight:'14', baby:'\u6240\u6709\u5668\u5b98\u57fa\u672c\u5f62\u6210\uff0cNT\u68c0\u67e5\u7684\u597d\u65f6\u673a\u3002', mom:'\u5b55\u5410\u660e\u663e\u51cf\u8f7b\uff0c\u98df\u6b32\u5f00\u59cb\u6062\u590d\u3002' },
  13: { length:7.4, weight:'23', baby:'\u6307\u7eb9\u5f62\u6210\uff0c\u80be\u810f\u5f00\u59cb\u4ea7\u751f\u5c3f\u6db2\u3002', mom:'\u8179\u90e8\u9686\u8d77\u66f4\u660e\u663e\uff0c\u6ce8\u610f\u8865\u5145\u8425\u517b\u3002' },
  14: { length:8.7, weight:'43', baby:'\u9762\u90e8\u7279\u5f81\u66f4\u660e\u663e\uff0c\u4f1a\u505a\u9b3c\u8138\u3002', mom:'\u7cbe\u529b\u6062\u590d\uff0c\u80ce\u76d8\u5f00\u59cb\u627f\u62c5\u66f4\u591a\u529f\u80fd\u3002' },
  15: { length:10.4, weight:'70', baby:'\u56db\u80a2\u7279\u522b\u6d3b\u8dc3\uff0c\u52a8\u4f5c\u53d8\u5f97\u9891\u7e41\uff0c\u4f46\u5988\u5988\u53ef\u80fd\u8fd8\u611f\u53d7\u4e0d\u5230\u3002', mom:'\u9f3b\u5b50\u5bb9\u6613\u5145\u8840\u751a\u81f3\u51fa\u8840\uff0c\u591a\u559d\u6c34\u591a\u5403\u679c\u852c\u3002' },
  16: { length:11.6, weight:'100', baby:'\u9aa8\u9abc\u53d8\u786c\uff0c\u542c\u89c9\u5f00\u59cb\u53d1\u80b2\u3002', mom:'\u8179\u90e8\u660e\u663e\u9686\u8d77\uff0c\u53ef\u80fd\u5f00\u59cb\u611f\u53d7\u5230\u8f7b\u5fae\u80ce\u52a8\u3002' },
  17: { length:13.0, weight:'140', baby:'\u76ae\u4e0b\u8102\u80aa\u5f00\u59cb\u79ef\u7d2f\uff0c\u4f1a\u5438\u542e\u62c7\u6307\u3002', mom:'\u98df\u6b32\u589e\u52a0\uff0c\u6ce8\u610f\u63a7\u5236\u4f53\u91cd\u589e\u957f\u3002' },
  18: { length:14.2, weight:'190', baby:'\u80ce\u52a8\u66f4\u660e\u663e\uff0c\u80fd\u542c\u5230\u5916\u754c\u58f0\u97f3\u3002', mom:'\u8170\u80cc\u90e8\u538b\u529b\u589e\u52a0\uff0c\u6ce8\u610f\u59ff\u52bf\u3002' },
  19: { length:15.3, weight:'240', baby:'\u611f\u89c9\u5668\u5b98\u8fc5\u901f\u53d1\u5c55\uff0c\u5927\u8111\u795e\u7ecf\u8fde\u63a5\u589e\u52a0\u3002', mom:'\u53ef\u80fd\u51fa\u73b0\u76ae\u80a4\u7619\u75d2\uff0c\u6ce8\u610f\u4fdd\u6e7f\u3002' },
  20: { length:16.4, weight:'300', baby:'\u56db\u80a2\u548c\u8eaf\u5e72\u6bd4\u4f8b\u66f4\u534f\u8c03\uff0c\u5927\u6392\u7578\u68c0\u67e5\u597d\u65f6\u673a\u3002', mom:'\u5b50\u5bab\u9876\u5230\u809a\u8110\uff0c\u80ce\u52a8\u50cf\u5c0f\u9c7c\u6e38\u3002' },
  21: { length:26.7, weight:'360', baby:'\u4f53\u91cd\u5feb\u901f\u589e\u52a0\uff0c\u7709\u6bdb\u548c\u776b\u6bdb\u5f00\u59cb\u751f\u957f\u3002', mom:'\u7cbe\u529b\u65fa\u76db\u671f\uff0c\u6ce8\u610f\u9002\u5f53\u8fd0\u52a8\u3002' },
  22: { length:27.8, weight:'430', baby:'\u76ae\u80a4\u5f00\u59cb\u6709\u76b1\u7eb9\uff0c\u542c\u89c9\u66f4\u654f\u9510\u3002', mom:'\u8179\u90e8\u7ee7\u7eed\u589e\u5927\uff0c\u53ef\u80fd\u51fa\u73b0\u598a\u5a20\u7eb9\u3002' },
  23: { length:28.9, weight:'501', baby:'\u80ba\u90e8\u5f00\u59cb\u53d1\u80b2\uff0c\u4e3a\u51fa\u751f\u540e\u547c\u5438\u505a\u51c6\u5907\u3002', mom:'\u80ce\u52a8\u89c4\u5f8b\uff0c\u6ce8\u610f\u4f11\u606f\u907f\u514d\u52b3\u7d2f\u3002' },
  24: { length:30.0, weight:'600', baby:'\u76ae\u80a4\u8584\u800c\u900f\u660e\uff0c\u80fd\u542c\u5230\u5988\u5988\u5fc3\u8df3\u548c\u80a0\u80c3\u8815\u52a8\u3002', mom:'\u53ef\u80fd\u51fa\u73b0\u8170\u9178\u80cc\u75db\uff0c\u9002\u5f53\u6309\u6469\u7f13\u89e3\u3002' },
  25: { length:34.6, weight:'680', baby:'\u76ae\u4e0b\u8102\u80aa\u589e\u591a\uff0c\u76ae\u80a4\u5f00\u59cb\u53d8\u5149\u6ed1\u3002', mom:'\u547c\u5438\u56f0\u96be\u53ef\u80fd\u52a0\u91cd\uff0c\u907f\u514d\u5e73\u8eba\u3002' },
  26: { length:35.6, weight:'760', baby:'\u773c\u775b\u5f00\u59cb\u7741\u5f00\uff0c\u5bf9\u5916\u754c\u5149\u7ebf\u6709\u53cd\u5e94\u3002', mom:'\u5c3f\u9891\u53ef\u80fd\u518d\u6b21\u51fa\u73b0\uff0c\u907f\u514d\u618b\u5c3f\u3002' },
  27: { length:36.6, weight:'875', baby:'\u5927\u8111\u5feb\u901f\u53d1\u80b2\uff0c\u7761\u7720\u65f6\u95f4\u89c4\u5f8b\u3002', mom:'\u8eab\u4f53\u91cd\u5fc3\u524d\u79fb\uff0c\u6ce8\u610f\u9632\u8dcc\u5012\u3002' },
  28: { length:37.6, weight:'1000', baby:'\u8fdb\u5165\u5b55\u665a\u671f\uff0c\u80ba\u90e8\u7ee7\u7eed\u6210\u719f\u3002', mom:'\u53ef\u80fd\u51fa\u73b0\u5047\u6027\u5bab\u7f29\uff0c\u6ce8\u610f\u4f11\u606f\u3002' },
  29: { length:38.6, weight:'1150', baby:'\u808c\u8089\u548c\u80ba\u90e8\u7ee7\u7eed\u53d1\u80b2\uff0c\u5934\u56f4\u589e\u5927\u3002', mom:'\u8179\u90e8\u6c89\u91cd\uff0c\u6ce8\u610f\u5de6\u4fa7\u5367\u4f4d\u4f11\u606f\u3002' },
  30: { length:39.9, weight:'1300', baby:'\u5934\u53d1\u5f00\u59cb\u751f\u957f\uff0c\u6307\u7532\u53d8\u957f\u3002', mom:'\u53ef\u80fd\u51fa\u73b0\u6c34\u80bf\uff0c\u6ce8\u610f\u63a7\u76d0\u3002' },
  31: { length:41.1, weight:'1500', baby:'\u76ae\u4e0b\u8102\u80aa\u8fdb\u4e00\u6b65\u589e\u52a0\uff0c\u4f53\u6e29\u8c03\u8282\u80fd\u529b\u53d1\u5c55\u3002', mom:'\u80ce\u52a8\u6709\u529b\uff0c\u6ce8\u610f\u6570\u80ce\u52a8\u3002' },
  32: { length:42.4, weight:'1700', baby:'\u76ae\u80a4\u53d8\u7c89\u7ea2\uff0c\u624b\u6307\u7532\u548c\u811a\u8dbe\u7532\u957f\u9f50\u3002', mom:'\u5b50\u5bab\u9876\u5230\u808b\u9aa8\u4e0b\u7f18\uff0c\u5c11\u98df\u591a\u9910\u3002' },
  33: { length:43.7, weight:'1900', baby:'\u80ba\u90e8\u63a5\u8fd1\u6210\u719f\uff0c\u9aa8\u9abc\u53d8\u786c\u4f46\u4ecd\u67d4\u8f6f\u3002', mom:'\u53ef\u80fd\u51fa\u73b0\u7761\u7720\u56f0\u96be\uff0c\u7528\u6795\u5934\u652f\u6491\u3002' },
  34: { length:45.0, weight:'2150', baby:'\u514d\u75ab\u7cfb\u7edf\u5f00\u59cb\u5de5\u4f5c\uff0c\u80fd\u8bc6\u522b\u5988\u5988\u58f0\u97f3\u3002', mom:'\u5047\u6027\u5bab\u7f29\u66f4\u9891\u7e41\uff0c\u6ce8\u610f\u533a\u5206\u771f\u5047\u4e34\u4ea7\u3002' },
  35: { length:46.2, weight:'2350', baby:'\u8eab\u4f53\u5404\u5668\u5b98\u57fa\u672c\u6210\u719f\uff0c\u6b63\u5728\u589e\u52a0\u4f53\u91cd\u3002', mom:'\u547c\u5438\u56f0\u96be\u53ef\u80fd\u7f13\u89e3\uff0c\u80ce\u513f\u4e0b\u964d\u5165\u76c6\u3002' },
  36: { length:47.5, weight:'2600', baby:'\u76ae\u4e0b\u8102\u80aa\u9971\u6ee1\uff0c\u50cf\u5c0f\u897f\u74dc\u5927\u5c0f\u3002', mom:'\u5c3f\u9891\u52a0\u91cd\uff0c\u51c6\u5907\u5f85\u4ea7\u5305\u3002' },
  37: { length:48.6, weight:'2850', baby:'\u8db3\u6708\uff0c\u80ba\u90e8\u548c\u5927\u8111\u5b8c\u5168\u6210\u719f\uff0c\u968f\u65f6\u53ef\u80fd\u51fa\u751f\u3002', mom:'\u53ef\u80fd\u6709\u4e0b\u5760\u611f\uff0c\u6ce8\u610f\u4e34\u4ea7\u5f81\u5146\u3002' },
  38: { length:49.8, weight:'3000', baby:'\u4f53\u91cd\u6301\u7eed\u589e\u52a0\uff0c\u5934\u53d1\u53d8\u6d53\u5bc6\u3002', mom:'\u8eab\u4f53\u51c6\u5907\u5206\u5a29\uff0c\u6ce8\u610f\u4f11\u606f\u4fdd\u5b58\u4f53\u529b\u3002' },
  39: { length:50.7, weight:'3150', baby:'\u7f8a\u6c34\u91cf\u53ef\u80fd\u51cf\u5c11\uff0c\u80ce\u52a8\u4ecd\u8981\u5173\u6ce8\u3002', mom:'\u968f\u65f6\u53ef\u80fd\u4e34\u4ea7\uff0c\u51c6\u5907\u597d\u5165\u9662\u7269\u54c1\u3002' },
  40: { length:51.2, weight:'3200', baby:'\u9884\u4ea7\u671f\u5230\u4e86\uff0c\u968f\u65f6\u51c6\u5907\u548c\u5988\u5988\u89c1\u9762\u3002', mom:'\u6ce8\u610f\u89c4\u5f8b\u5bab\u7f29\u3001\u7834\u6c34\u3001\u89c1\u7ea2\u7b49\u4e34\u4ea7\u4fe1\u53f7\u3002' }
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
  return (d.getMonth()+1) + '\u6708' + d.getDate() + '\u65e5';
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
    lengthLabel: isEarly ? '\u9876\u81c0\u957f' : '\u8eab\u957f',
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
    card.innerHTML = '<div class="baby-status-week">\u8bf7\u8bbe\u7f6e\u672b\u6b21\u6708\u7ecf\u65e5\u671f</div><div class="baby-status-due">\u6216\u624b\u52a8\u6dfb\u52a0\u6210\u957f\u8bb0\u5f55</div>';
    tips.style.display = 'none';
    return;
  }
  var growth = getBabyGrowth(currentWeekObj);
  var html = '';
  html += '<div class="baby-status-week">\u5b55 ' + formatWeek(currentWeekObj) + '</div>';
  if (dueDate && daysToDue !== null) {
    html += '<div class="baby-status-due">\u9884\u4ea7\u671f ' + formatDate(dueDate) + ' \u00b7 \u8ddd\u79bb\u9884\u4ea7\u671f ' + daysToDue + ' \u5929</div>';
  }
  if (growth) {
    html += '<div class="baby-status-size">';
    html += '<div class="baby-size-item"><div class="num">' + growth.length + '</div><div class="label">' + growth.lengthLabel + ' cm</div></div>';
    html += '<div class="baby-size-item"><div class="num">' + growth.weight + '</div><div class="label">\u4f53\u91cd g</div></div>';
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
  if (!lmp) { alert('\u8bf7\u9009\u62e9\u672b\u6b21\u6708\u7ecf\u65e5\u671f'); return; }
  appData.lmpDate = lmp;
  saveData();
  renderBabySection();
});

document.getElementById('add-baby-btn').addEventListener('click', function(){
  var weekStr = document.getElementById('baby-week').value.trim();
  var length = parseFloat(document.getElementById('baby-length').value);
  var weight = parseFloat(document.getElementById('baby-weight').value);
  var note = document.getElementById('baby-note').value.trim();
  var parsed = parseWeek(weekStr);
  if (!parsed || !parsed.week) { alert('\u8bf7\u586b\u5199\u5b55\u5468\uff0c\u5982 15+1'); return; }
  var growth = getBabyGrowth(parsed);
  if (!length && growth) length = growth.length;
  if (!weight && growth) weight = parseInt(growth.weight) || '';
  appData.babyRecords.push({ id:newId(appData.babyRecords), week:parsed.week, day:parsed.day, totalDays:parsed.totalDays, length:length || '', weight:weight || '', note:note });
  saveData(); renderBabySection();
  document.getElementById('baby-week').value = '';
  document.getElementById('baby-length').value = '';
  document.getElementById('baby-weight').value = '';
  document.getElementById('baby-note').value = '';
});
function renderBabyList() {
  var list = document.getElementById('baby-list');
  var records = appData.babyRecords.slice().sort(function(a,b){ return a.totalDays - b.totalDays; }).reverse();
  var html = '';
  for (var i = 0; i < records.length; i++) {
    var r = records[i];
    var weekText = r.day ? r.week + '+' + r.day : String(r.week);
    html += '<div class="record-item">';
    html += '<div class="record-main"><span class="record-value">\u5b55 ' + weekText + ' \u5468</span>' + (r.length ? '<span class="record-tag">' + (r.week <= 12 ? '\u9876\u81c0\u957f' : '\u8eab\u957f') + ' ' + r.length + ' cm</span>' : '') + (r.weight ? '<span class="record-tag">\u4f53\u91cd ' + r.weight + ' g</span>' : '') + '</div>';
    if (r.note) html += '<div class="record-note">' + escapeHtml(r.note) + '</div>';
    html += '<button class="record-delete" data-id="' + r.id + '" data-type="baby">\u2715</button>';
    html += '</div>';
  }
  list.innerHTML = html;
}

/* ====== \u5b55\u68c0\u8bb0\u5f55 ====== */
function renderCheckupSection() { document.getElementById('checkup-date').value = todayISO(); renderCheckupList(); }
document.getElementById('add-checkup-btn').addEventListener('click', function(){
  var date = document.getElementById('checkup-date').value;
  var item = document.getElementById('checkup-item').value.trim();
  var result = document.getElementById('checkup-result').value.trim();
  if (!date || !item) { alert('\u8bf7\u586b\u5199\u65e5\u671f\u548c\u9879\u76ee'); return; }
  appData.checkupRecords.push({ id:newId(appData.checkupRecords), date:date, item:item, result:result });
  saveData(); renderCheckupSection();
  document.getElementById('checkup-item').value = '';
  document.getElementById('checkup-result').value = '';
});
function renderCheckupList() {
  var list = document.getElementById('checkup-list');
  var records = appData.checkupRecords.slice().sort(function(a,b){ return a.date.localeCompare(b.date); }).reverse();
  var html = '';
  for (var i = 0; i < records.length; i++) {
    var r = records[i];
    html += '<div class="record-item">';
    html += '<div class="record-main"><span class="record-date">' + r.date + '</span><span class="record-value">' + escapeHtml(r.item) + '</span></div>';
    if (r.result) html += '<div class="record-note">\u7ed3\u679c\uff1a' + escapeHtml(r.result) + '</div>';
    html += '<button class="record-delete" data-id="' + r.id + '" data-type="checkup">\u2715</button>';
    html += '</div>';
  }
  list.innerHTML = html;
}
document.getElementById('diet').addEventListener('click', function(e){
  var btn = e.target.closest ? e.target.closest('.record-delete') : null;
  if (!btn) return;
  var id = btn.dataset.id, type = btn.dataset.type;
  var arr = type + 'Records';
  if (!appData[arr]) return;
  if (confirm('\u5220\u9664\u8fd9\u6761\u8bb0\u5f55\uff1f')) {
    appData[arr] = appData[arr].filter(function(r){ return r.id != id; });
    saveData();
    if (type === 'weight') renderWeightSection();
    if (type === 'poop') renderPoopSection();
    if (type === 'baby') renderBabySection();
    if (type === 'checkup') renderCheckupSection();
  }
});

/* ====== \u5174\u8da3\u6536\u85cf ====== */
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
  var TYPE_ICONS = { video:'\ud83c\udfac', article:'\ud83d\udcc4', recipe:'\ud83e\udd57', other:'\ud83d\udccc' };
  var TYPE_LABELS = { video:'\u89c6\u9891', article:'\u6587\u7ae0', recipe:'\u83dc\u8c31', other:'\u5176\u4ed6' };
  var html = '';
  if (!items.length) {
    list.innerHTML = '<div class="empty-state"><div class="empty-icon">\u2b50</div><p>' + (currentFavQuery ? '\u6ca1\u6709\u627e\u5230\u5339\u914d\u7684\u6536\u85cf' : '\u8fd8\u6ca1\u6709\u6536\u85cf\u5185\u5bb9') + '</p></div>';
    return;
  }
  for (var i = 0; i < items.length; i++) {
    var it = items[i];
    html += '<div class="favorite-item">';
    html += '<div class="fav-icon">' + (TYPE_ICONS[it.type] || '\ud83d\udccc') + '</div>';
    html += '<div class="fav-body">';
    html += '<div class="fav-title">' + escapeHtml(it.title) + '</div>';
    html += '<div class="fav-tags">' + (TYPE_LABELS[it.type] || '\u5176\u4ed6') + (it.ingredients ? ' \u00b7 ' + escapeHtml(it.ingredients) : '') + '</div>';
    if (it.link) html += '<a href="' + escapeHtml(it.link) + '" target="_blank" class="fav-link">' + escapeHtml(it.link) + '</a>';
    if (it.note) html += '<div class="fav-note">' + escapeHtml(it.note) + '</div>';
    html += '<div class="fav-meta">' + it.date + '</div>';
    html += '</div>';
    html += '<div class="fav-actions">';
    html += '<button class="fav-edit" data-id="' + it.id + '" title="\u7f16\u8f91">\u270e</button>';
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
document.getElementById('fav-search-btn').addEventListener('click', function(){
  doFavSearch(document.getElementById('fav-search-input').value);
});
document.getElementById('fav-search-input').addEventListener('keydown', function(e){
  if (e.key === 'Enter') doFavSearch(document.getElementById('fav-search-input').value);
});
document.getElementById('fav-search-clear').addEventListener('click', function(){
  document.getElementById('fav-search-input').value = '';
  doFavSearch('');
});
function resetFavForm() {
  document.getElementById('fav-title').value = '';
  document.getElementById('fav-link').value = '';
  document.getElementById('fav-ingredients').value = '';
  document.getElementById('fav-note').value = '';
  document.getElementById('fav-type').value = 'video';
  document.getElementById('save-favorite-btn').textContent = '\u4fdd\u5b58\u6536\u85cf';
  document.getElementById('save-favorite-btn').dataset.editingId = '';
}
document.getElementById('save-favorite-btn').addEventListener('click', function(){
  var btn = document.getElementById('save-favorite-btn');
  var title = document.getElementById('fav-title').value.trim();
  var link = document.getElementById('fav-link').value.trim();
  var type = document.getElementById('fav-type').value;
  var ingredients = document.getElementById('fav-ingredients').value.trim();
  var note = document.getElementById('fav-note').value.trim();
  if (!title) { alert('\u8bf7\u586b\u5199\u6807\u9898'); return; }
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
    var inputEl = document.getElementById('fav-search-input');
    if (inputEl.value) doFavSearch(inputEl.value);
  }
});
document.getElementById('favorite-list').addEventListener('click', function(e){
  var delBtn = e.target.closest ? e.target.closest('.fav-delete') : null;
  if (delBtn) {
    var id = parseInt(delBtn.dataset.id);
    if (confirm('\u5220\u9664\u8fd9\u4e2a\u6536\u85cf\uff1f')) { appData.interests = appData.interests.filter(function(i){ return i.id !== id; }); saveData(); renderFavorites(); }
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
    saveBtn.textContent = '\u66f4\u65b0\u6536\u85cf';
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
  var TYPE_ICONS = { video:'\ud83c\udfac', article:'\ud83d\udcc4', recipe:'\ud83e\udd57', other:'\ud83d\udccc' };
  var html = '<div class="weekly-fav-header">\u6211\u7684\u6536\u85cf\u4e2d\u542b\u300c' + escapeHtml(query) + '\u300d\u7684\u8bb0\u5f55</div>';
  if (!items.length) {
    html += '<div class="weekly-fav-empty">\u6682\u65e0\u5339\u914d\u8bb0\u5f55</div>';
  } else {
    html += '<div class="weekly-fav-list">';
    for (var i = 0; i < items.length; i++) {
      var it = items[i];
      html += '<div class="weekly-fav-item">';
      html += '<span class="weekly-fav-icon">' + (TYPE_ICONS[it.type] || '\ud83d\udccc') + '</span>';
      html += '<div class="weekly-fav-body">';
      html += '<div class="weekly-fav-title">' + escapeHtml(it.title) + '</div>';
      if (it.ingredients) html += '<div class="weekly-fav-tags">' + escapeHtml(it.ingredients) + '</div>';
      if (it.note) html += '<div class="weekly-fav-note">' + escapeHtml(it.note) + '</div>';
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
  if (!q) { alert('\u8bf7\u5148\u8f93\u5165\u98df\u6750'); return; }
  renderFavoriteResults('weekly-fav-results', q);
});

/* ====== \u4e00\u5468\u996e\u98df\u8ba1\u5212 ====== */
function renderWeeklyPlan() {
  var plan = document.getElementById('weekly-plan');
  var html = '<div class="weekly-table-wrap"><table class="weekly-table"><thead><tr><th>\u65e5\u671f</th>';
  for (var i = 0; i < MEAL_KEYS.length; i++) html += '<th>' + MEAL_LABELS[MEAL_KEYS[i]] + '</th>';
  html += '</tr></thead><tbody>';
  for (var d = 0; d < WEEKDAYS.length; d++) {
    var day = WEEKDAYS[d];
    html += '<tr><td class="day-label">' + WEEKDAY_LABELS[day] + '</td>';
    for (var m = 0; m < MEAL_KEYS.length; m++) {
      var meal = MEAL_KEYS[m];
      html += '<td><textarea data-day="' + day + '" data-meal="' + meal + '" placeholder="\u8ba1\u5212\u5403\u4ec0\u4e48...">' + escapeHtml(appData.weeklyPlan[day][meal] || '') + '</textarea></td>';
    }
    html += '</tr>';
  }
  html += '</tbody></table></div>';
  plan.innerHTML = html;
}
document.getElementById('weekly-plan').addEventListener('input', function(e){
  var day = e.target.dataset.day, meal = e.target.dataset.meal;
  if (day && meal) { appData.weeklyPlan[day][meal] = e.target.value; saveData(); }
});
function openRecipeSearch(platform) {
  var q = document.getElementById('recipe-search').value.trim() || '\u51cf\u8102\u9910';
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

/* ====== \u6bcf\u65e5\u89c6\u9891\u63a8\u9001 ====== */
function renderDailyVideos(containerId, category) {
  var container = document.getElementById(containerId);
  var videos = pickDailyVideos(category);
  var html = '<div class="daily-videos-grid">';
  for (var i = 0; i < videos.length; i++) {
    var v = videos[i];
    html += '<div class="daily-video-card">';
    html += '<div class="dv-num">' + (i+1) + '</div>';
    html += '<div class="dv-body"><h4>' + escapeHtml(v.title) + '</h4><a href="' + escapeHtml(v.link) + '" target="_blank">' + escapeHtml(v.link) + '</a></div>';
    html += '<button class="dv-fav" data-title="' + escapeHtml(v.title) + '" data-link="' + escapeHtml(v.link) + '">\u2b50</button>';
    html += '</div>';
  }
  html += '</div>';
  container.innerHTML = html;
}
document.querySelectorAll('.daily-videos').forEach(function(el){
  el.addEventListener('click', function(e){
    var btn = e.target.closest ? e.target.closest('.dv-fav') : null;
    if (!btn) return;
    appData.interests.unshift({ id:newId(appData.interests), title:btn.dataset.title, link:btn.dataset.link, type:'video', note:'\u6765\u81ea\u6bcf\u65e5\u63a8\u9001', date:nowStr() });
    saveData(); alert('\u5df2\u6536\u85cf\u5230\u300c\u5174\u8da3\u6536\u85cf\u300d');
  });
});

/* ====== \u5907\u5fd8\u5f55 ====== */
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
  recordStatus.textContent = '\u5f55\u97f3\u4e2d... ' + sec + 's \u677e\u624b\u7ed3\u675f';
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
      recordStatus.textContent = '\u5f55\u97f3\u5df2\u4fdd\u5b58';
      stream.getTracks().forEach(function(t){ t.stop(); });
    };
    recordStartTime = Date.now();
    mediaRecorder.start();
    recordBtn.classList.add('recording');
    recordStatus.textContent = '\u5f55\u97f3\u4e2d... \u677e\u624b\u7ed3\u675f';
    updateRecordTimer();
  }).catch(function(err){ alert('\u65e0\u6cd5\u5f55\u97f3\uff1a' + err.message); });
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
  if (!memos.length) { list.innerHTML = '<div class="empty-state"><div class="empty-icon">\ud83d\udcdd</div><p>\u8fd8\u6ca1\u6709\u5907\u5fd8\u5f55</p></div>'; return; }
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
          item.innerHTML = '<div class="memo-audio"><audio controls src="' + url + '"></audio><span>\ud83c\udf99\ufe0f ' + (m.duration || '?') + 's</span></div><div class="memo-meta">' + m.date + '<button class="memo-delete" data-id="' + m.id + '">\u5220\u9664</button></div>';
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

/* ====== \u521d\u59cb\u5316 ====== */
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
