/* ====== \u80e1\u789f\u7684\u5de5\u4f5c\u53f0 2.0 ====== */
const STORAGE_KEY = 'hudie_workbench_v3';
const WEEKDAYS = ['mon','tue','wed','thu','fri','sat','sun'];
const WEEKDAY_LABELS = { mon:'\u5468\u4e00', tue:'\u5468\u4e8c', wed:'\u5468\u4e09', thu:'\u5468\u56db', fri:'\u5468\u4e94', sat:'\u5468\u516d', sun:'\u5468\u65e5' };
const MEAL_KEYS = ['breakfast','morningSnack','lunch','afternoonSnack','dinner','eveningSnack'];
const MEAL_LABELS = { breakfast:'\u65e9\u9910', morningSnack:'\u65e9\u52a0\u9910', lunch:'\u5348\u9910', afternoonSnack:'\u5348\u52a0\u9910', dinner:'\u665a\u9910', eveningSnack:'\u665a\u52a0\u9910' };
const DIET_MEALS = ['breakfast','lunch','dinner','snack'];
const DIET_MEAL_LABELS = { breakfast:'\u65e9\u9910', lunch:'\u5348\u9910', dinner:'\u665a\u9910', snack:'\u52a0\u9910/\u6c34\u679c' };
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
const FOOD_CALORIES = {
  '\u7c73\u996d':116,'\u7cd9\u7c73':111,'\u71d5\u9ea6':377,'\u5168\u9ea6\u9762\u5305':247,'\u9992\u5934':223,'\u7ea2\u85af':86,'\u7389\u7c73':112,'\u7d2b\u85af':70,'\u5c0f\u7c73\u7ca5':46,'\u9762\u6761':137,
  '\u9e21\u86cb':140,'\u6c34\u716e\u86cb':140,'\u9e21\u80f8\u8089':133,'\u9e21\u817f':181,'\u725b\u8089':125,'\u732a\u8089':143,'\u9c7c\u8089':100,'\u867e':93,'\u8c46\u8150':84,'\u8c46\u6d46':31,
  '\u725b\u5976':54,'\u9178\u5976':72,'\u65e0\u7cd6\u9178\u5976':60,'\u5976\u916a':328,'\u575a\u679c':560,'\u82f9\u679c':52,'\u68a8':50,'\u6a59\u5b50':47,'\u8349\u8393':32,'\u8461\u8404':69,
  '\u897f\u74dc':30,'\u9999\u8549':89,'\u756a\u8304':18,'\u9ec4\u74dc':16,'\u897f\u5170\u82b1':34,'\u83e0\u83dc':23,'\u751f\u83dc':15,'\u80e1\u841d\u535c':41,'\u571f\u8c46':77,'\u5357\u74dc':23,
  '\u8377\u5170\u8c46':27,'\u6728\u8033':21,'\u6d77\u5e26':12,'\u7d2b\u83dc':207,'\u6a44\u6984\u6cb9':884,'\u82b1\u751f\u6cb9':899,'\u829d\u9ebb\u6cb9':899,'\u9171\u6cb9':63,'\u76d0':0,
  '\u8001\u5e72\u5988':598,'\u6c99\u62c9\u9171':680,'\u82b1\u751f\u9171':600,'\u829d\u9ebb\u9171':630,'\u5976\u8336':40,'\u53ef\u4e50':45,'\u679c\u6c41':45,'\u9ed1\u5496\u5561':2,'\u7eff\u8336':0
};
const defaultData = {
  todos: [
    { id:1, text:'\u666e\u62c9\u63d0\u7ec3\u4e60 30 \u5206\u949f', time:'\u7075\u6d3b\u5b89\u6392', done:false, category:'pilates' },
    { id:2, text:'\u8425\u517b\u5b66\u77e5\u8bc6\u5b66\u4e60 30 \u5206\u949f', time:'\u7075\u6d3b\u5b89\u6392', done:false, category:'nutrition' },
    { id:3, text:'\u5316\u5986\u7a7f\u642d\u5b66\u4e60 30 \u5206\u949f', time:'\u7075\u6d3b\u5b89\u6392', done:false, category:'beauty' },
    { id:4, text:'\u82f1\u8bed\u7ec3\u4e60 30 \u5206\u949f', time:'\u7075\u6d3b\u5b89\u6392', done:false, category:'english' }
  ],
  dietMode:'pregnancy',
  meals:{ breakfast:{text:'',photos:[],calories:0}, lunch:{text:'',photos:[],calories:0}, dinner:{text:'',photos:[],calories:0}, snack:{text:'',photos:[],calories:0} },
  weightRecords:[], poopRecords:[], babyRecords:[], checkupRecords:[],
  weeklyPlan:WEEKDAYS.reduce(function(acc,d){ acc[d]={}; MEAL_KEYS.forEach(function(k){ acc[d][k]=''; }); return acc; }, {}),
  interests:[], memos:[], reviews:[]
};
function migrateData(stored) {
  if (!stored) return Object.assign({}, defaultData);
  var merged = Object.assign({}, defaultData, stored);
  if (!merged.meals || typeof merged.meals !== 'object') merged.meals = defaultData.meals;
  DIET_MEALS.forEach(function(k){ if (!merged.meals[k] || typeof merged.meals[k] !== 'object') merged.meals[k] = { text:'', photos:[], calories:0 }; });
  if (!merged.weeklyPlan) merged.weeklyPlan = defaultData.weeklyPlan;
  WEEKDAYS.forEach(function(d){ if (!merged.weeklyPlan[d]) merged.weeklyPlan[d] = {}; MEAL_KEYS.forEach(function(k){ if (merged.weeklyPlan[d][k] === undefined) merged.weeklyPlan[d][k] = ''; }); });
  ['weightRecords','poopRecords','babyRecords','checkupRecords','interests','memos','reviews'].forEach(function(k){ if (!merged[k]) merged[k] = []; });
  return merged;
}
function loadData() { var stored = localStorage.getItem(STORAGE_KEY); if (stored) { try { return migrateData(JSON.parse(stored)); } catch(e){ return Object.assign({}, defaultData); } } return Object.assign({}, defaultData); }
function saveData() { localStorage.setItem(STORAGE_KEY, JSON.stringify(appData)); }
var appData = loadData();
function todayStr() { var d = new Date(); return d.getFullYear() + '\u5e74' + (d.getMonth()+1) + '\u6708' + d.getDate() + '\u65e5'; }
function weekdayStr() { return ['\u661f\u671f\u65e5','\u661f\u671f\u4e00','\u661f\u671f\u4e8c','\u661f\u671f\u4e09','\u661f\u671f\u56db','\u661f\u671f\u4e94','\u661f\u671f\u516d'][new Date().getDay()]; }
function todayISO() { var d = new Date(); return d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0'); }
function nowStr() { var d = new Date(); return d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0') + ' ' + String(d.getHours()).padStart(2,'0') + ':' + String(d.getMinutes()).padStart(2,'0'); }
function escapeHtml(str) { if (!str) return ''; return str.replace(/[&<>"']/g, function(m){ return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[m]; }); }
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
function renderTodos() {
  var list = document.getElementById('todo-list');
  var html = '';
  for (var i = 0; i < appData.todos.length; i++) {
    var t = appData.todos[i];
    html += '<div class="todo-item ' + (t.done ? 'completed' : '') + '">';
    html += '<div class="todo-checkbox ' + (t.done ? 'checked' : '') + '" data-id="' + t.id + '"></div>';
    html += '<span class="todo-text">' + escapeHtml(t.text) + '</span>';
    html += '<span class="todo-time">' + escapeHtml(t.time || '') + '</span>';
    html += '<button class="todo-delete" data-id="' + t.id + '">\u2715</button>';
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
  appData.todos.push({ id:newId(appData.todos), text:text, time:'\u81ea\u5b9a\u4e49', done:false, category:category });
  saveData(); input.value = ''; renderTodos();
}

function renderMealGrid() {
  var grid = document.getElementById('meal-grid');
  var html = '';
  for (var i = 0; i < DIET_MEALS.length; i++) {
    var key = DIET_MEALS[i];
    var m = appData.meals[key];
    html += '<div class="meal-card" data-meal="' + key + '">';
    html += '<div class="meal-header"><h4>' + DIET_MEAL_LABELS[key] + '</h4><span class="meal-cal">' + (m.calories || 0) + ' kcal</span></div>';
    html += '<textarea placeholder="\u5403\u4e86\u4ec0\u4e48..." data-meal-text="' + key + '">' + escapeHtml(m.text || '') + '</textarea>';
    html += '<div class="meal-tools">';
    html += '<div class="calculator">';
    html += '<input type="text" class="food-search" data-food-search="' + key + '" placeholder="\u98df\u7269\u5982\uff1a\u7c73\u996d" list="food-list-' + key + '">';
    html += '<input type="number" class="food-gram" data-food-gram="' + key + '" placeholder="\u514b" min="0">';
    html += '<button class="btn-add-cal" data-meal-cal="' + key + '">+</button>';
    html += '<input type="number" class="manual-cal" data-manual-cal="' + key + '" placeholder="kcal" min="0" value="' + (m.calories || '') + '">';
    html += '</div>';
    html += '<label class="meal-photo-btn"><input type="file" accept="image/*" capture="environment" data-meal-photo="' + key + '" style="display:none"><span>\ud83d\udcf7</span></label>';
    html += '</div>';
    html += '<div class="meal-photos" id="photos-' + key + '"></div>';
    html += '</div>';
  }
  grid.innerHTML = html;
  for (var j = 0; j < DIET_MEALS.length; j++) createFoodDatalist(DIET_MEALS[j]);
  loadMealPhotos();
  updateTodayCalories();
}
function createFoodDatalist(key) {
  var existing = document.getElementById('food-list-' + key);
  if (existing) existing.remove();
  var dl = document.createElement('datalist');
  dl.id = 'food-list-' + key;
  var foods = Object.keys(FOOD_CALORIES);
  var opts = '';
  for (var i = 0; i < foods.length; i++) opts += '<option value="' + foods[i] + '">';
  dl.innerHTML = opts;
  document.body.appendChild(dl);
}
function updateTodayCalories() {
  var total = 0;
  for (var i = 0; i < DIET_MEALS.length; i++) total += parseFloat(appData.meals[DIET_MEALS[i]].calories) || 0;
  document.getElementById('today-calories').textContent = Math.round(total);
}
function loadMealPhotos() {
  var promises = [];
  for (var i = 0; i < DIET_MEALS.length; i++) {
    (function(key){
      var container = document.getElementById('photos-' + key);
      if (!container) return;
      container.innerHTML = '';
      var ids = appData.meals[key].photos || [];
      for (var j = 0; j < ids.length; j++) {
        (function(pid){
          promises.push(dbGet('hudie_photos', 'meal_photos', pid).then(function(blob){
            if (!blob) return;
            var url = URL.createObjectURL(blob);
            var wrap = document.createElement('div');
            wrap.className = 'meal-photo-wrap';
            wrap.innerHTML = '<img src="' + url + '" class="meal-photo-thumb"><button class="photo-del" data-pid="' + pid + '" data-meal="' + key + '">\u00d7</button>';
            container.appendChild(wrap);
          }).catch(function(){}));
        })(ids[j]);
      }
    })(DIET_MEALS[i]);
  }
  return Promise.all(promises);
}
document.getElementById('meal-grid').addEventListener('input', function(e){
  var key = e.target.dataset.mealText;
  if (key) { appData.meals[key].text = e.target.value; saveData(); }
});
document.getElementById('meal-grid').addEventListener('change', function(e){
  var key = e.target.dataset.mealPhoto;
  if (key && e.target.files && e.target.files[0]) {
    var file = e.target.files[0];
    var pid = 'photo_' + Date.now() + '_' + Math.random().toString(36).slice(2,8);
    dbPut('hudie_photos', 'meal_photos', pid, file).then(function(){
      appData.meals[key].photos.push(pid);
      saveData(); renderMealGrid();
    });
  }
  var manual = e.target.closest ? e.target.closest('[data-manual-cal]') : null;
  if (manual) {
    var mk = manual.dataset.manualCal;
    var val = parseFloat(manual.value);
    if (!isNaN(val) && val >= 0) { appData.meals[mk].calories = val; saveData(); updateTodayCalories(); }
  }
});
document.getElementById('meal-grid').addEventListener('click', function(e){
  var btn = e.target.closest ? e.target.closest('.btn-add-cal') : null;
  if (btn) {
    var key = btn.dataset.mealCal;
    var foodInput = document.querySelector('[data-food-search="' + key + '"]');
    var gramInput = document.querySelector('[data-food-gram="' + key + '"]');
    var food = foodInput.value.trim();
    var gram = parseFloat(gramInput.value);
    if (!food || !gram) return;
    var calPer100 = FOOD_CALORIES[food];
    if (!calPer100) { alert('\u672a\u627e\u5230\u8be5\u98df\u7269\u70ed\u91cf\uff0c\u8bf7\u76f4\u63a5\u8f93\u5165 kcal'); return; }
    appData.meals[key].calories = (parseFloat(appData.meals[key].calories) || 0) + Math.round(calPer100 * gram / 100);
    saveData(); renderMealGrid(); return;
  }
  var delBtn = e.target.closest ? e.target.closest('.photo-del') : null;
  if (delBtn) {
    var pid = delBtn.dataset.pid, meal = delBtn.dataset.meal;
    if (confirm('\u5220\u9664\u8fd9\u5f20\u7167\u7247\uff1f')) {
      appData.meals[meal].photos = appData.meals[meal].photos.filter(function(p){ return p !== pid; });
      dbDelete('hudie_photos', 'meal_photos', pid).catch(function(){});
      saveData(); renderMealGrid();
    }
  }
});
document.querySelectorAll('.diet-tab').forEach(function(tab){
  tab.addEventListener('click', function(){
    document.querySelectorAll('.diet-tab').forEach(function(t){ t.classList.remove('active'); });
    tab.classList.add('active');
    appData.dietMode = tab.dataset.mode;
    saveData(); renderDietMode();
  });
});
function renderDietMode() {
  var isPreg = appData.dietMode === 'pregnancy';
  document.getElementById('diet-title').textContent = isPreg ? '\u5b55\u671f\u996e\u98df' : '\u51cf\u8102\u671f\u996e\u98df';
  document.querySelectorAll('.pregnancy-only').forEach(function(el){ el.style.display = isPreg ? 'block' : 'none'; });
}
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
function renderBabySection() { renderBabyList(); }
document.getElementById('add-baby-btn').addEventListener('click', function(){
  var week = parseInt(document.getElementById('baby-week').value);
  var length = parseFloat(document.getElementById('baby-length').value);
  var weight = parseFloat(document.getElementById('baby-weight').value);
  var note = document.getElementById('baby-note').value.trim();
  if (!week) { alert('\u8bf7\u586b\u5199\u5b55\u5468'); return; }
  appData.babyRecords.push({ id:newId(appData.babyRecords), week:week, length:length || '', weight:weight || '', note:note });
  saveData(); renderBabySection();
  document.getElementById('baby-week').value = '';
  document.getElementById('baby-length').value = '';
  document.getElementById('baby-weight').value = '';
  document.getElementById('baby-note').value = '';
});
function renderBabyList() {
  var list = document.getElementById('baby-list');
  var records = appData.babyRecords.slice().sort(function(a,b){ return a.week - b.week; }).reverse();
  var html = '';
  for (var i = 0; i < records.length; i++) {
    var r = records[i];
    html += '<div class="record-item">';
    html += '<div class="record-main"><span class="record-value">\u5b55 ' + r.week + ' \u5468</span>' + (r.length ? '<span class="record-tag">\u80ce\u957f ' + r.length + ' cm</span>' : '') + (r.weight ? '<span class="record-tag">\u80ce\u91cd ' + r.weight + ' g</span>' : '') + '</div>';
    if (r.note) html += '<div class="record-note">' + escapeHtml(r.note) + '</div>';
    html += '<button class="record-delete" data-id="' + r.id + '" data-type="baby">\u2715</button>';
    html += '</div>';
  }
  list.innerHTML = html;
}
function renderCheckupSection() { document.getElementById('checkup-date').value = todayISO(); renderCheckupList(); }
document.getElementById('add-checkup-btn').addEventListener('click', function(){
  var date = document.getElementById('checkup-date').value;
  var item = document.getElementById('checkup-item').value.trim();
  var result = document.getElementById('checkup-result').value.trim();
  var nextDate = document.getElementById('checkup-next').value;
  if (!date || !item) { alert('\u8bf7\u586b\u5199\u65e5\u671f\u548c\u9879\u76ee'); return; }
  appData.checkupRecords.push({ id:newId(appData.checkupRecords), date:date, item:item, result:result, nextDate:nextDate });
  saveData(); renderCheckupSection();
  document.getElementById('checkup-item').value = '';
  document.getElementById('checkup-result').value = '';
  document.getElementById('checkup-next').value = '';
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
    if (r.nextDate) html += '<div class="record-note">\u4e0b\u6b21\u9884\u7ea6\uff1a' + r.nextDate + '</div>';
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
function init() {
  document.getElementById('today-date').textContent = todayStr();
  document.getElementById('today-weekday').textContent = weekdayStr();
  renderTodos();
  renderDietMode();
  renderMealGrid();
  renderWeightSection();
  renderPoopSection();
  renderBabySection();
  renderCheckupSection();
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

