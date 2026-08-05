/* ====== \u80e1\u789f\u7684\u5de5\u4f5c\u53f0 2.0 ====== */
const STORAGE_KEY = 'hudie_workbench_v3';
const WEEKDAYS = ['mon','tue','wed','thu','fri','sat','sun'];
const WEEKDAY_LABELS = { mon:'\u5468\u4e00', tue:'\u5468\u4e8c', wed:'\u5468\u4e09', thu:'\u5468\u56db', fri:'\u5468\u4e94', sat:'\u5468\u516d', sun:'\u5468\u65e5' };
const MEAL_KEYS = ['breakfast','morningSnack','lunch','afternoonSnack','dinner','eveningSnack'];
const MEAL_LABELS = { breakfast:'\u65e9\u9910', morningSnack:'\u65e9\u52a0\u9910', lunch:'\u5348\u9910', afternoonSnack:'\u5348\u52a0\u9910', dinner:'\u665a\u9910', eveningSnack:'\u665a\u52a0\u9910' };
const DAILY_VIDEOS = {
  pilates: [
    { title:'\u5b55\u671f\u666e\u62c9\u63d0 20 \u5206\u949f\uff08\u5b89\u5168\u8212\u7f13\uff09', link:'https://search.bilibili.com/all?keyword=%E5%AD%95%E6%9C%9F%E6%99%AE%E6%8B%89%E6%8F%90' },
    { title:'\u5c45\u5bb6\u666e\u62c9\u63d0 10 \u5206\u949f\u5165\u95e8', link:'https://search.bilibili.com/all?keyword=%E5%B1%85%E5%AE%B6%E6%99%AE%E6%8B%89%E6%8F%90%E5%85%A5%E9%97%A8' },
    { title:'\u4ea7\u540e\u6062\u590d\u666e\u62c9\u63d0 15 \u5206\u949f', link:'https://search.bilibili.com/all?keyword=%E4%BA%A7%E5%90%8E%E6%99%AE%E6%8B%89%E6%8F%90%E6%81%A2%E5%A4%8D' },
    { title:'\u666e\u62c9\u63d0\u6838\u5fc3\u8bad\u7ec3 \u521d\u7ea7', link:'https://search.bilibili.com/all?keyword=%E6%99%AE%E6%8B%89%E6%8F%90%E6%A0%B8%E5%BF%83%E8%AE%AD%E7%BB%83%E5%88%9D%E7%BA%A7' },
    { title:'\u7761\u524d\u666e\u62c9\u63d0\u62c9\u4f38 12 \u5206\u949f', link:'https://search.bilibili.com/all?keyword=%E7%9D%A1%E5%89%8D%E6%99%AE%E6%8B%89%E6%8F%90%E6%8B%89%E4%BC%B8' },
    { title:'\u5b55\u5987\u666e\u62c9\u63d0 \u7f13\u89e3\u8170\u80cc\u75bc\u75db', link:'https://search.bilibili.com/all?keyword=%E5%AD%95%E5%A6%87%E6%99%AE%E6%8B%89%E6%8F%90%E8%85%B0%E8%83%8C' },
    { title:'30 \u5929\u666e\u62c9\u63d0\u5851\u5f62 \u00b7 \u7b2c 1 \u5929', link:'https://search.bilibili.com/all?keyword=30%E5%A4%A9%E6%99%AE%E6%8B%89%E6%8F%90%E5%A1%91%E5%BD%A2' },
    { title:'\u666e\u62c9\u63d0\u547c\u5438\u6cd5\u7ec3\u4e60 5 \u5206\u949f', link:'https://search.bilibili.com/all?keyword=%E6%99%AE%E6%8B%89%E6%8F%90%E5%91%BC%E5%90%B8%E6%B3%95' }
  ],
  beauty: [
    { title:'\u5b55\u671f\u901a\u52e4\u7a7f\u642d 5 \u5957 LOOK', link:'https://www.xiaohongshu.com/search_result?keyword=%E5%AD%95%E6%9C%9F%E7%A9%BF%E6%90%AD%E9%80%9A%E5%8B%A4' },
    { title:'\u65b0\u624b\u5316\u5986\u6559\u7a0b \u4f2a\u7d20\u989c\u5986', link:'https://search.bilibili.com/all?keyword=%E6%96%B0%E6%89%8B%E5%8C%96%E5%A6%86%E6%95%99%E7%A8%8B' },
    { title:'\u68a8\u5f62\u8eab\u6750\u7a7f\u642d\u516c\u5f0f', link:'https://www.xiaohongshu.com/search_result?keyword=%E6%A2%A8%E5%BD%A2%E8%BA%AB%E6%9D%90%E7%A9%BF%E6%90%AD%E5%85%AC%E5%BC%8F' },
    { title:'\u5b55\u671f\u7a7f\u642d\u663e\u7626 10 \u4e2a\u6280\u5de7', link:'https://www.xiaohongshu.com/search_result?keyword=%E5%AD%95%E6%9C%9F%E7%A9%BF%E6%90%AD%E6%98%BE%E7%98%A6' },
    { title:'\u65e9\u516b\u5feb\u901f\u51fa\u95e8\u5986 5 \u5206\u949f', link:'https://search.bilibili.com/all?keyword=%E6%97%A9%E5%85%AB%E5%BF%AB%E9%80%9F%E5%87%BA%E9%97%A8%E5%A6%86' },
    { title:'\u5b55\u671f\u7a7f\u642d\u535a\u4e3b\u5408\u96c6\u63a8\u8350', link:'https://www.xiaohongshu.com/search_result?keyword=%E5%AD%95%E6%9C%9F%E7%A9%BF%E6%90%AD%E5%8D%9A%E4%B8%BB' },
    { title:'\u5355\u773c\u76ae\u773c\u5986\u6559\u7a0b \u81ea\u7136\u653e\u5927', link:'https://www.xiaohongshu.com/search_result?keyword=%E5%8D%95%E7%9C%BC%E7%9A%AE%E7%9C%BC%E5%A6%86%E6%95%99%E7%A8%8B' },
    { title:'\u57fa\u7840\u6b3e\u7a7f\u642d\u9ad8\u7ea7\u611f', link:'https://www.douyin.com/search/%E5%9F%BA%E7%A1%80%E6%AC%BE%E9%AB%98%E7%BA%A7%E6%84%9F%E7%A9%BF%E6%90%AD' }
  ],
  nutrition: [
    { title:'\u5b55\u671f\u63a7\u7cd6\u996e\u98df\u5168\u653b\u7565', link:'https://search.bilibili.com/all?keyword=%E5%AD%95%E6%9C%9F%E6%8E%A7%E7%B3%96%E9%A5%AE%E9%A3%9F' },
    { title:'\u4e2d\u56fd\u5c45\u6c11\u81b3\u98df\u6307\u5357\u89e3\u8bfb', link:'https://search.bilibili.com/all?keyword=%E4%B8%AD%E5%9B%BD%E5%B1%85%E6%B0%91%E8%86%B3%E9%A3%9F%E6%8C%87%E5%8D%97' },
    { title:'\u51cf\u8102\u671f\u86cb\u767d\u8d28\u600e\u4e48\u5403', link:'https://www.douyin.com/search/%E5%87%8F%E8%84%82%E6%9C%9F%E8%9B%8B%E7%99%BD%E8%B4%A8' },
    { title:'\u5b55\u671f\u8865\u94c1\u8865\u9499\u98df\u7269\u6e05\u5355', link:'https://www.xiaohongshu.com/search_result?keyword=%E5%AD%95%E6%9C%9F%E8%A1%A5%E9%93%81%E8%A1%A5%E9%92%99' },
    { title:'\u4f4e GI \u98df\u7269\u9009\u62e9\u6307\u5357', link:'https://search.bilibili.com/all?keyword=%E4%BD%8EGI%E9%A3%9F%E7%89%A9' },
    { title:'\u598a\u5a20\u671f\u7cd6\u5c3f\u75c5\u996e\u98df\u7ba1\u7406', link:'https://search.bilibili.com/all?keyword=%E5%A6%8A%E5%A8%A0%E6%9C%9F%E7%B3%96%E5%B0%BF%E7%97%85%E9%A5%AE%E9%A3%9F' },
    { title:'\u5b55\u671f\u8425\u517b\u8865\u5145\u5242\u600e\u4e48\u9009', link:'https://www.xiaohongshu.com/search_result?keyword=%E5%AD%95%E6%9C%9F%E8%90%A5%E5%85%BB%E8%A1%A5%E5%85%85%E5%89%82' },
    { title:'\u51cf\u8102\u671f\u4e00\u65e5\u4e09\u9910\u642d\u914d', link:'https://www.douyin.com/search/%E5%87%8F%E8%84%82%E6%9C%9F%E4%B8%80%E6%97%A5%E4%B8%89%E9%A4%90' }
  ],
  english: [
    { title:'\u65e5\u5e38\u82f1\u8bed\u53e3\u8bed 100 \u53e5', link:'https://search.bilibili.com/all?keyword=%E6%97%A5%E5%B8%B8%E8%8B%B1%E8%AF%AD%E5%8F%A3%E8%AF%AD100%E5%8F%A5' },
    { title:'\u673a\u573a\u901a\u5173\u82f1\u8bed\u5bf9\u8bdd', link:'https://search.bilibili.com/all?keyword=%E6%9C%BA%E5%9C%BA%E9%80%9A%E5%85%B3%E8%8B%B1%E8%AF%AD%E5%AF%B9%E8%AF%9D' },
    { title:'\u9910\u5385\u70b9\u9910\u82f1\u8bed \u5b9e\u7528\u53e5\u578b', link:'https://search.bilibili.com/all?keyword=%E9%A4%90%E5%8E%85%E7%82%B9%E9%A4%90%E8%8B%B1%E8%AF%AD' },
    { title:'\u8d2d\u7269\u82f1\u8bed \u8ba8\u4ef7\u8fd8\u4ef7', link:'https://search.bilibili.com/all?keyword=%E8%B4%AD%E7%89%A9%E8%8B%B1%E8%AF%AD%E8%AE%A8%E4%BB%B7%E8%BF%98%E4%BB%B7' },
    { title:'\u81ea\u6211\u4ecb\u7ecd\u82f1\u8bed 30 \u79d2\u7248', link:'https://search.bilibili.com/all?keyword=%E8%87%AA%E6%88%91%E4%BB%8B%E7%BB%8D%E8%8B%B1%E8%AF%AD30%E7%A7%92' },
    { title:'\u7535\u8bdd\u82f1\u8bed \u9884\u7ea6/\u53d6\u6d88', link:'https://search.bilibili.com/all?keyword=%E7%94%B5%E8%AF%9D%E8%8B%B1%E8%AF%AD%E9%A2%84%E7%BA%A6' },
    { title:'\u9152\u5e97\u5165\u4f4f\u82f1\u8bed\u5bf9\u8bdd', link:'https://search.bilibili.com/all?keyword=%E9%85%92%E5%BA%97%E5%85%A5%E4%BD%8F%E8%8B%B1%E8%AF%AD' },
    { title:'\u770b\u75c5\u5c31\u533b\u82f1\u8bed\u5e38\u7528\u8868\u8fbe', link:'https://search.bilibili.com/all?keyword=%E7%9C%8B%E7%97%85%E5%B0%B1%E5%8C%BB%E8%8B%B1%E8%AF%AD' }
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
  height:170, preWeight:null,
  petBig:{ info:{name:'',birth:'',cls:''}, suppliesChecked:{}, learning:[], learningCompleted:{}, learningCustom:{}, health:[], memo:[] },
  petSmall:{ info:{name:'',birth:''}, earlyEduChecked:{}, earlyEduStreak:{} },
  todosDate:null,
  weeklyPlan:{},
  interests:[], memos:[], reviews:[]
};
function deepClone(obj) { return JSON.parse(JSON.stringify(obj)); }
function migrateData(stored) {
  if (!stored) return deepClone(defaultData);
  var merged = deepClone(defaultData);
  // \u628a stored \u7684\u5b57\u6bb5\u5408\u5e76\u5230 merged\uff08\u6df1\u5408\u5e76\uff09
  for (var key in stored) {
    if (stored.hasOwnProperty(key) && stored[key] !== undefined && stored[key] !== null) {
      merged[key] = stored[key];
    }
  }
  if (!merged.weeklyPlan) merged.weeklyPlan = {};
  if (!merged.lmpDate) merged.lmpDate = null;
  // \u65e7 weeklyPlan \u6309 mon/tue \u5b58\u50a8\uff0c\u8fc1\u79fb\u5230\u6309 ISO \u65e5\u671f\u5b58\u50a8
  var hasOldKeys = false;
  for (var i = 0; i < WEEKDAYS.length; i++) {
    if (merged.weeklyPlan[WEEKDAYS[i]] && typeof merged.weeklyPlan[WEEKDAYS[i]] === 'object' && Object.keys(merged.weeklyPlan[WEEKDAYS[i]]).length > 0) { hasOldKeys = true; break; }
  }
  if (hasOldKeys && (!merged.weeklyPlanMigrated)) {
    var today = new Date();
    var todayDow = (today.getDay() + 6) % 7;
    var monday = new Date(today);
    monday.setDate(today.getDate() - todayDow);
    for (var w = 0; w < WEEKDAYS.length; w++) {
      var wd = WEEKDAYS[w];
      var oldCell = merged.weeklyPlan[wd];
      if (!oldCell) continue;
      var dateObj = new Date(monday);
      dateObj.setDate(monday.getDate() + w);
      var iso = dateObj.getFullYear() + '-' + ('0' + (dateObj.getMonth() + 1)).slice(-2) + '-' + ('0' + dateObj.getDate()).slice(-2);
      if (!merged.weeklyPlan[iso]) merged.weeklyPlan[iso] = {};
      for (var k = 0; k < MEAL_KEYS.length; k++) {
        var mk = MEAL_KEYS[k];
        var val = oldCell[mk];
        if (val !== undefined && val !== null) {
          if (typeof val === 'string') { merged.weeklyPlan[iso][mk] = { content:val, meat:'', veg:'', staple:'', fruit:'', others:'', tags:[] }; }
          else if (val.content || val.tags) { merged.weeklyPlan[iso][mk] = val; }
        }
      }
      delete merged.weeklyPlan[wd];
    }
    merged.weeklyPlanMigrated = true;
  }
  ['weightRecords','poopRecords','babyRecords','checkupRecords','fetalRecords','interests','memos','reviews','bagItems','knowledgeFavs'].forEach(function(k){ if (!merged[k]) merged[k] = []; });
  ['petBig','petSmall'].forEach(function(k){
    if (!merged[k]) merged[k] = {};
    if (k === 'petBig') {
      if (!merged[k].info) merged[k].info = {name:'',birth:'',cls:''};
      if (!merged[k].suppliesChecked) merged[k].suppliesChecked = {};
      if (!merged[k].learning || !merged[k].learning.length) merged[k].learning = deepClone(DEFAULT_LEARNING_MODULES);
      else {
        // \u4fdd\u8bc1 id:7(\u82f1\u8bed\u542f\u8499) \u548c id:8(\u7ed8\u672c\u9605\u8bfb) \u5728\u5b66\u4e60\u6570\u636e\u4e2d\uff0c\u5e76\u4e14 id \u8981\u4e0e DEFAULT_LEARNING_MODULES \u4e2d\u7684\u4e00\u81f4
        var hasEnglish = false; var hasPictureBook = false;
        for (var li = 0; li < merged[k].learning.length; li++) {
          var ln = merged[k].learning[li];
          if (ln.name === '\u82f1\u8bed\u542f\u8499') { ln.id = 7; hasEnglish = true; }
          else if (ln.name === '\u7ed8\u672c\u9605\u8bfb') { ln.id = 8; hasPictureBook = true; }
        }
        if (!hasEnglish) merged[k].learning.push({ id:7, icon:'\ud83c\udf10', name:'\u82f1\u8bed\u542f\u8499', desc:'\u82f1\u6589\u513f\u6b4c\u3001\u52a8\u753b\u7247\u3001\u53e3\u8bed' });
        if (!hasPictureBook) merged[k].learning.push({ id:8, icon:'\ud83d\udcda', name:'\u7ed8\u672c\u9605\u8bfb', desc:'3-6\u5c81\u7ed8\u672c\u3001\u7eaa\u5f55\u7247\u3001\u81ea\u6211\u4fdd\u62a4' });
      }
      if (!merged[k].learningCompleted) merged[k].learningCompleted = {};
      if (!merged[k].learningCustom) merged[k].learningCustom = {};
      if (!merged[k].health) merged[k].health = [];
      if (!merged[k].memo) merged[k].memo = [];
    } else {
      if (!merged[k].info) merged[k].info = {name:'',birth:''};
      if (!merged[k].earlyEduChecked) merged[k].earlyEduChecked = {};
      if (!merged[k].earlyEduStreak) merged[k].earlyEduStreak = {};
    }
  });
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
      // JSON \u89e3\u6790\u5931\u8d25\uff0c\u5c1d\u8bd5\u4ece\u5907\u4efd\u6062\u590d
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
  // \u5148\u5907\u4efd\uff0c\u518d\u4fdd\u5b58\uff0c\u9632\u6b62\u6570\u636e\u4e22\u5931
  try {
    localStorage.setItem(STORAGE_KEY + '_backup', localStorage.getItem(STORAGE_KEY) || JSON.stringify(appData));
  } catch(e) {}
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
}
var appData = loadData();
function todayStr() { var d = new Date(); return d.getFullYear() + '\u5e74' + (d.getMonth()+1) + '\u6708' + d.getDate() + '\u65e5'; }
function weekdayStr() { return ['\u661f\u671f\u65e5','\u661f\u671f\u4e00','\u661f\u671f\u4e8c','\u661f\u671f\u4e09','\u661f\u671f\u56db','\u661f\u671f\u4e94','\u661f\u671f\u516d'][new Date().getDay()]; }
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
      weekday: ['\u5468\u4e00','\u5468\u4e8c','\u5468\u4e09','\u5468\u56db','\u5468\u4e94','\u5468\u516d','\u5468\u65e5'][i]
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
  { id:1, cat:'\u5b55\u65e9\u671f', icon:'\u1f3e5', title:'\u7b2c\u4e00\u6b21\u4ea7\u68c0\u653b\u7565', content:'\u5efa\u6863\u3001NT \u68c0\u67e5\u3001\u5404\u9879\u7b5b\u67e5\u2026\u2026\u7b2c\u4e00\u6b21\u6b63\u5f0f\u4ea7\u68c0\u8be5\u51c6\u5907\u4ec0\u4e48\uff1f\n1. \u5e26\u4e0a\u8eab\u4efd\u8bc1\u3001\u533b\u4fdd\u5361\u3001\u672b\u6b21\u6708\u7ecf\u65e5\u671f\n2. \u63d0\u524d\u9884\u7ea6\u4ea7\u68c0\u65f6\u95f4\uff0c\u9886\u53d6\u6bcd\u5b50\u5065\u5eb7\u624b\u518c\n3. \u7a7f\u5bbd\u677e\u8863\u7269\uff0c\u65b9\u4fbf\u68c0\u67e5\uff0c\u907f\u514d\u8fde\u8863\u88d9\n4. \u90e8\u5206\u9879\u76ee\uff08\u8840\u5e38\u89c4\u3001\u8840\u7cd6\uff09\u9700\u7a7a\u8179\uff0c\u8bb0\u5f97\u54a8\u8be2\u533b\u751f\n5. \u9884\u7559\u5145\u8db3\u65f6\u95f4\uff0c\u6bcf\u9879\u68c0\u67e5\u53ef\u80fd\u9700 1-2 \u5c0f\u65f6' },
  { id:2, cat:'\u5b55\u65e9\u671f', icon:'\u1f60a', title:'\u5b55\u671f\u60c5\u7eea\u7ba1\u7406', content:'\u8377\u5c14\u8499\u53d8\u5316\u5bfc\u81f4\u60c5\u7eea\u6ce2\u52a8\u5f88\u6b63\u5e38\uff0c\u5b66\u4f1a\u7ba1\u7406\u5b55\u671f\u60c5\u7eea\u3002\n1. \u4fdd\u6301\u5145\u8db3\u7761\u7720\uff0c\u6bcf\u5929 7-9 \u5c0f\u65f6\n2. \u9002\u5ea6\u8fd0\u52a8\uff0c\u5982\u6563\u6b65\u3001\u5b55\u5987\u745c\u4f3d\n3. \u4e0e\u5bb6\u4eba\u3001\u670b\u53cb\u5206\u4eab\u611f\u53d7\uff0c\u4e0d\u8981\u72ec\u81ea\u627f\u53d7\n4. \u9605\u8bfb\u6b63\u80fd\u91cf\u5185\u5bb9\uff0c\u8fdc\u79bb\u8d1f\u9762\u4fe1\u606f\n5. \u9700\u8981\u65f6\u53ef\u54a8\u8be2\u4e13\u4e1a\u5fc3\u7406\u533b\u751f' },
  { id:3, cat:'\u5b55\u4e2d\u671f', icon:'\u1f9b4', title:'\u5b55\u671f\u8170\u80cc\u75db\u7f13\u89e3\u65b9\u6cd5', content:'\u968f\u7740\u809a\u5b50\u53d8\u5927\uff0c\u8170\u80cc\u75db\u662f\u5b55\u671f\u5e38\u89c1\u56f0\u6270\uff0c\u8bd5\u8bd5\u8fd9\u4e9b\u7f13\u89e3\u6280\u5de7\u3002\n1. \u4fdd\u6301\u6b63\u786e\u59ff\u52bf\uff1a\u7ad9\u5750\u65f6\u80cc\u90e8\u633a\u76f4\uff0c\u907f\u514d\u5f2f\u8170\u9a7c\u80cc\n2. \u4f7f\u7528\u5b55\u5987\u6795\u6216 U \u578b\u6795\u652f\u6491\u8170\u80cc\n3. \u6e29\u70ed\u6577\u7f13\u89e3\u6df1\u5c42\u808c\u8089\u9178\u75db\n4. \u907f\u514d\u957f\u65f6\u95f4\u7ad9\u7acb\u6216\u4e45\u5750\uff0c\u5b9a\u65f6\u53d8\u6362\u59ff\u52bf\n5. \u505a\u5b55\u5987\u666e\u62c9\u63d0\uff0c\u589e\u5f3a\u8170\u80cc\u808c\u8089\u529b\u91cf' },
  { id:4, cat:'\u5b55\u4e2d\u671f', icon:'\u1f463', title:'\u611f\u53d7\u80ce\u52a8\u7684\u7f8e\u597d\u65f6\u523b', content:'\u7b2c\u4e00\u6b21\u611f\u53d7\u80ce\u52a8\u662f\u5b55\u671f\u6700\u795e\u5947\u7684\u4f53\u9a8c\u4e4b\u4e00\uff0c\u4e86\u89e3\u80ce\u52a8\u89c4\u5f8b\u3002\n1. \u9996\u6b21\u80ce\u52a8\u591a\u53d1\u751f\u5728 18-20 \u5468\uff0c\u4e8c\u80ce\u5988\u5988\u53ef\u80fd\u66f4\u65e9\n2. \u521d\u671f\u80ce\u52a8\u7c7b\u4f3c\u9c7c\u6e38\u6c34\u3001\u8774\u8776\u6247\u7fc5\u3001\u8c46\u5b50\u8df3\u52a8\n3. \u80ce\u52a8\u6700\u6d3b\u8dc3\u65f6\u95f4\u4e3a\u665a\u4e0a 8-11 \u70b9\n4. \u5b55 28 \u5468\u540e\u5e94\u6bcf\u5929\u6570\u80ce\u52a8\uff0c\u6b63\u5e38\u6bcf\u5c0f\u65f6 3-5 \u6b21\n5. \u80ce\u52a8\u660e\u663e\u51cf\u5c11\u9700\u53ca\u65f6\u5c31\u533b' },
  { id:5, cat:'\u5b55\u665a\u671f', icon:'\u1f33a', title:'\u4e34\u4ea7\u4fe1\u53f7\u8bc6\u522b', content:'\u63a5\u8fd1\u9884\u4ea7\u671f\uff0c\u9700\u8981\u4e86\u89e3\u5404\u79cd\u4e34\u4ea7\u4fe1\u53f7\u4ee5\u4fbf\u53ca\u65f6\u5165\u9662\u3002\n1. \u89c4\u5f8b\u5bab\u7f29\uff1a\u6bcf 5 \u5206\u949f\u4e00\u6b21\u3001\u6bcf\u6b21\u6301\u7eed 1 \u5206\u949f\u3001\u6301\u7eed 1 \u5c0f\u65f6\n2. \u89c1\u7ea2\uff1a\u9634\u9053\u6709\u8840\u6027\u5206\u6ccc\u7269\uff0c\u53ef\u80fd 24-48 \u5c0f\u65f6\u540e\u5206\u5a29\n3. \u7834\u6c34\uff1a\u7f8a\u6c34\u6d41\u51fa\uff0c\u9700\u7acb\u5373\u5e73\u8eba\u5e76\u8d76\u5f80\u533b\u9662\n4. \u80ce\u5934\u4e0b\u964d\uff1a\u80ce\u5934\u5165\u76c6\uff0c\u51fa\u73b0\u4e0b\u5760\u611f\u3001\u5c3f\u9891\u52a0\u91cd\n5. \u51fa\u73b0\u4ee5\u4e0a\u4efb\u4e00\u4fe1\u53f7\uff0c\u53ca\u65f6\u8054\u7cfb\u533b\u9662' },
  { id:6, cat:'\u5b55\u665a\u671f', icon:'\u1f4da', title:'\u5b55\u665a\u671f\u7761\u7720\u6539\u5584\u65b9\u6cd5', content:'\u5b55\u665a\u671f\u7761\u7720\u56f0\u96be\u662f\u5e38\u89c1\u95ee\u9898\uff0c\u8bd5\u8bd5\u8fd9\u4e9b\u5c0f\u6280\u5de7\u3002\n1. \u4f7f\u7528\u5b55\u5987\u6795\u652f\u6491\u8170\u80cc\u548c\u8179\u90e8\n2. \u5de6\u4fa7\u5367\u4f4d\u6700\u4f73\uff0c\u4fc3\u8fdb\u8840\u6db2\u5faa\u73af\n3. \u7761\u524d\u5c11\u559d\u6c34\uff0c\u51cf\u5c11\u591c\u8d77\u6b21\u6570\n4. \u7761\u524d\u907f\u514d\u9971\u98df\u548c\u5496\u5561\u56e0\uff0c\u53ef\u559d\u6e29\u725b\u5976\n5. \u4fdd\u6301\u5367\u5ba4\u51c9\u723d\u5b89\u9759\uff0c\u53ef\u7528\u8033\u585e\u773c\u7f69\u8f85\u52a9' },
  { id:7, cat:'\u5b55\u665a\u671f', icon:'\u1f4b0', title:'\u5b55\u665a\u671f\u8425\u517b\u91cd\u70b9', content:'\u5b55\u665a\u671f\u662f\u80ce\u513f\u5feb\u901f\u751f\u957f\u9636\u6bb5\uff0c\u6ce8\u610f\u8425\u517b\u4f9b\u7ed9\u3002\n1. \u4f18\u8d28\u86cb\u767d\uff1a\u9c7c\u3001\u867e\u3001\u9e21\u8089\u3001\u9e21\u86cb\u3001\u4e73\u5236\u54c1\n2. \u8865\u9499\uff1a\u725b\u5976\u3001\u8c46\u8150\u3001\u829d\u9ebb\u9171\u3001\u867e\u76ae\n3. \u8865\u94c1\uff1a\u7ea2\u8089\u3001\u52a8\u7269\u809d\u810f\u3001\u83e0\u83dc\uff08\u914d\u7ef4C\u4fc3\u5438\u6536\uff09\n4. \u8865\u5145 DHA \u5e2e\u52a9\u80ce\u513f\u5927\u8111\u53d1\u80b2\n5. \u63a7\u5236\u7cd6\u5206\u548c\u7cbe\u5236\u78b3\u6c34\uff0c\u9884\u9632\u598a\u5a20\u671f\u7cd6\u5c3f\u75c5' },
  { id:8, cat:'\u5206\u5a29', icon:'\u1f38a', title:'\u81ea\u7136\u5206\u5a29\u4e0e\u5f85\u4ea7\u51c6\u5907', content:'\u4e86\u89e3\u5206\u5a29\u8fc7\u7a0b\uff0c\u505a\u597d\u5fc3\u7406\u548c\u7269\u54c1\u51c6\u5907\u3002\n1. \u672c\u4eba\u53ca\u5bb6\u5c5e\u8981\u4e86\u89e3\u5206\u5a29\u6d41\u7a0b\uff0c\u505a\u597d\u5fc3\u7406\u51c6\u5907\n2. \u9009\u62e9\u6709\u8d44\u8d28\u3001\u6709\u7ecf\u9a8c\u7684\u533b\u9662\u548c\u4ea7\u79d1\u533b\u751f\n3. \u63d0\u524d\u4e86\u89e3\u4ea7\u623f\u73af\u5883\uff0c\u719f\u6089\u5165\u9662\u6d41\u7a0b\n4. \u51c6\u5907\u597d\u5f85\u4ea7\u5305\uff0c\u4f34\u4ea7\u4eba\u5168\u7a0b\u966a\u4f34\n5. \u7ec3\u4e60\u62c9\u739b\u6cfd\u547c\u5438\u6cd5\uff0c\u5e2e\u52a9\u5e94\u5bf9\u5bab\u7f29\u75bc\u75db' },
  { id:9, cat:'\u4ea7\u540e', icon:'\u1f4af', title:'\u4ea7\u540e\u6062\u590d\u8981\u70b9', content:'\u4ea7\u540e 42 \u5929\u662f\u91cd\u8981\u7684\u6062\u590d\u671f\uff0c\u6ce8\u610f\u79d1\u5b66\u8c03\u517b\u3002\n1. \u5145\u8db3\u4f11\u606f\uff0c\u907f\u514d\u8fc7\u5ea6\u52b3\u7d2f\n2. \u8425\u517b\u5747\u8861\uff0c\u591a\u98df\u9ad8\u86cb\u767d\u3001\u5bcc\u542b\u94c1\u548c\u9499\u7684\u98df\u7269\n3. \u5173\u6ce8\u6076\u9732\u6392\u51fa\u60c5\u51b5\uff0c\u53d1\u73b0\u5f02\u5e38\u53ca\u65f6\u5c31\u533b\n4. \u8863\u7740\u5bbd\u677e\u900f\u6c14\uff0c\u6ce8\u610f\u4e2a\u4eba\u536b\u751f\n5. \u4fdd\u6301\u5fc3\u60c5\u8212\u7545\uff0c\u8b66\u60d5\u4ea7\u540e\u6291\u90c1\n6. \u4ea7\u540e 42 \u5929\u590d\u67e5\uff0c\u8bc4\u4f30\u6062\u590d\u60c5\u51b5' }
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
function getWeightUnit() { return appData.weightUnit || 'kg'; }
function weightUnitLabel(unit) { return unit === 'jin' ? '\u65a4' : '\u516c\u65a4'; }
function formatWeight(weight, unit) {
  unit = unit || getWeightUnit();
  if (unit === 'jin') return (weight * 2).toFixed(1) + ' \u65a4';
  return weight.toFixed(1) + ' \u516c\u65a4';
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
  if (btn) btn.textContent = unit === 'jin' ? '\u5207\u6362\u4e3a\u516c\u65a4' : '\u5207\u6362\u4e3a\u65a4';
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
  document.getElementById('add-weight-btn').textContent = '\u6dfb\u52a0';
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
  if (!date || isNaN(weightKg)) { alert('\u8bf7\u586b\u5199\u65e5\u671f\u548c\u4f53\u91cd'); return; }
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
    html += '<div class="record-main"><span class="record-date">' + r.date + '</span><span class="record-value">' + formatWeight(r.weight, unit) + '</span>' + (r.week ? '<span class="record-tag">\u5b55 ' + r.week + ' \u5468</span>' : '') + '</div>';
    if (r.note) html += '<div class="record-note">' + escapeHtml(r.note) + '</div>';
    html += '<button class="record-edit" data-id="' + r.id + '" data-type="weight" title="\u7f16\u8f91">\u270e</button>';
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
  document.getElementById('add-weight-btn').textContent = '\u4fdd\u5b58\u4fee\u6539';
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

/* ====== \u5b55\u671f\u4f53\u91cd\u589e\u957f\u53c2\u8003\u8868 ====== */
var PREGNANCY_WEIGHT_GUIDE = {
  bmi_low: {
    label: '\u504f\u7626\uff08BMI < 18.5\uff09', totalRange: [12.5, 18],
    phases: [
      { phase: '\u5b55\u65e9\u671f', weeks: '1-12 \u5468', total: '0.5-2 kg', weekly: '0-0.2 kg', note: '\u589e\u957f\u7f13\u6162\uff0c\u6ce8\u610f\u53f6\u9178\u8865\u5145' },
      { phase: '\u5b55\u4e2d\u671f', weeks: '13-27 \u5468', total: '\u7d2f\u8ba1 5-7 kg', weekly: '0.5-0.6 kg', note: '\u8fdb\u5165\u5feb\u901f\u589e\u957f\u671f\uff0c\u91cd\u70b9\u8865\u86cb\u767d' },
      { phase: '\u5b55\u665a\u671f', weeks: '28-40 \u5468', total: '\u7d2f\u8ba1 5-7 kg', weekly: '0.5-0.6 kg', note: '\u7a33\u5b9a\u589e\u957f\uff0c\u5c11\u98df\u591a\u9910' }
    ]
  },
  bmi_standard: {
    label: '\u6807\u51c6\uff08BMI 18.5-24.0\uff09', totalRange: [11.5, 16],
    phases: [
      { phase: '\u5b55\u65e9\u671f', weeks: '1-12 \u5468', total: '1-2 kg', weekly: '0-0.2 kg', note: '\u589e\u957f\u7f13\u6162\uff0c\u6ce8\u610f\u53f6\u9178' },
      { phase: '\u5b55\u4e2d\u671f', weeks: '13-27 \u5468', total: '\u7d2f\u8ba1 4-6 kg', weekly: '0.4-0.5 kg', note: '\u7a33\u5b9a\u589e\u957f\uff0c\u8865\u9499\u8865\u94c1' },
      { phase: '\u5b55\u665a\u671f', weeks: '28-40 \u5468', total: '\u7d2f\u8ba1 4-6 kg', weekly: '0.4-0.5 kg', note: '\u7ee7\u7eed\u589e\u957f\uff0c\u63a7\u7cd6\u63a7\u76d0' }
    ]
  },
  bmi_high: {
    label: '\u504f\u80d6\uff08BMI \u2265 24.0\uff09', totalRange: [7, 11.5],
    phases: [
      { phase: '\u5b55\u65e9\u671f', weeks: '1-12 \u5468', total: '0.5-1.5 kg', weekly: '0-0.1 kg', note: '\u63a7\u5236\u589e\u957f\uff0c\u4f4e\u7cd6\u4f4e\u8102' },
      { phase: '\u5b55\u4e2d\u671f', weeks: '13-27 \u5468', total: '\u7d2f\u8ba1 3-4 kg', weekly: '0.25-0.3 kg', note: '\u6ce8\u610f\u996e\u98df\u7ed3\u6784' },
      { phase: '\u5b55\u665a\u671f', weeks: '28-40 \u5468', total: '\u7d2f\u8ba1 3-4 kg', weekly: '0.25-0.3 kg', note: '\u6301\u7eed\u63a7\u5236\uff0c\u76d1\u6d4b\u8840\u538b' }
    ]
  }
};
var DIET_SUGGESTIONS = {
  '\u5b55\u65e9\u671f': {
    title: '\u1f957 \u996e\u98df\u5efa\u8bae\uff08\u5b55\u65e9\u671f\uff09',
    food: '\u53f6\u9178\u4e30\u5bcc\uff1a\u83e0\u83dc\u3001\u82a6\u7b0b\u3001\u52a8\u7269\u809d\u810f\u3001\u8c46\u7c7b\uff1b\u7f13\u89e3\u5b55\u5410\uff1a\u9999\u8549\u3001\u71d5\u9ea6\u3001\u575a\u679c\u3001\u82cf\u6253\u997c\u5e72',
    nutrition: '\u53f6\u9178 400-600 \u03bcg/\u5929\u3001\u7ef4\u751f\u7d20 B6\u3001\u94c1 20mg',
    tips: '\u5c11\u98df\u591a\u9910\uff0c\u907f\u514d\u6cb9\u817b\u548c\u6c14\u5473\u91cd\u7684\u98df\u7269\uff1b\u6668\u8d77\u5148\u5403\u51e0\u7247\u997c\u5e72\u7f13\u89e3\u5b55\u5410'
  },
  '\u5b55\u4e2d\u671f': {
    title: '\u1f957 \u996e\u98df\u5efa\u8bae\uff08\u5b55\u4e2d\u671f\uff09',
    food: '\u4f18\u8d28\u86cb\u767d\uff1a\u9e21\u86cb\u3001\u725b\u5976\u3001\u9c7c\u3001\u7626\u8089\uff08\u6bcf\u5929 200g\uff09\uff1b\u8865\u9499\uff1a\u5976\u5236\u54c1\u3001\u8c46\u8150\u3001\u6df1\u7eff\u852c\u83dc\uff1bDHA\uff1a\u6df1\u6d77\u9c7c\u6bcf\u5468 2-3 \u6b21\u3001\u6838\u6843',
    nutrition: '\u86cb\u767d\u8d28 70-80g/\u5929\u3001\u9499 1000mg\u3001\u94c1 28mg\u3001DHA 200-300mg',
    tips: '\u6bcf\u5929\u52a0\u9910 1-2 \u6b21\uff08\u9178\u5976+\u575a\u679c/\u6c34\u679c\uff09\uff1b\u4e3b\u98df\u7c97\u7ec6\u642d\u914d\uff0c\u63a7\u5236\u7cbe\u5236\u7cd6'
  },
  '\u5b55\u665a\u671f': {
    title: '\u1f957 \u996e\u98df\u5efa\u8bae\uff08\u5b55\u665a\u671f\uff09',
    food: '\u9ad8\u86cb\u767d\uff1a\u9c7c\u79bd\u86cb\u7626\u8089\uff1b\u81b3\u98df\u7ea4\u7ef4\u9632\u4fbf\u79d8\uff1a\u5168\u8c37\u7269\u3001\u82b9\u83dc\u3001\u706b\u9f99\u679c\uff1b\u8865\u94c1\uff1a\u7ea2\u8089\u3001\u52a8\u7269\u8840',
    nutrition: '\u86cb\u767d\u8d28 80-100g/\u5929\u3001\u9499 1200mg\u3001\u94c1 28mg\u3001\u81b3\u98df\u7ea4\u7ef4 25-30g',
    tips: '\u5c11\u98df\u591a\u9910\u907f\u514d\u80c3\u53cd\u6d41\uff1b\u7761\u524d 2 \u5c0f\u65f6\u4e0d\u8fdb\u98df\uff1b\u63a7\u5236\u76d0\u5206\u9632\u6c34\u80bf'
  }
};
var EXERCISE_SUGGESTIONS = {
  '\u5b55\u65e9\u671f': {
    title: '\u1f3c3 \u8fd0\u52a8\u5efa\u8bae\uff08\u5b55\u65e9\u671f\uff09',
    content: '\u6563\u6b65 20-30 \u5206\u949f/\u5929\uff1b\u5b55\u5987\u745c\u4f3d\uff08\u907f\u514d\u8df3\u8dc3\u548c\u626d\u8f6c\u52a8\u4f5c\uff09\uff1b\u51ef\u683c\u5c14\u8fd0\u52a8\u6bcf\u5929 3 \u7ec4\u6bcf\u7ec4 10 \u6b21',
    tips: '\u907f\u514d\u5267\u70c8\u8fd0\u52a8\u548c\u8179\u90e8\u53d7\u538b\uff1b\u6709\u51fa\u8840\u6216\u5148\u5146\u6d41\u4ea7\u9700\u5367\u5e8a\u4f11\u606f'
  },
  '\u5b55\u4e2d\u671f': {
    title: '\u1f3c3 \u8fd0\u52a8\u5efa\u8bae\uff08\u5b55\u4e2d\u671f\uff09',
    content: '\u5feb\u6b65\u8d70 30-45 \u5206\u949f/\u5929\uff1b\u5b55\u5987\u666e\u62c9\u63d0\uff08\u5f3a\u5316\u6838\u5fc3\u548c\u76c6\u5e95\u808c\uff09\uff1b\u6e38\u6cf3\uff08\u7f13\u89e3\u8170\u80cc\u75db\uff09\uff1b\u51ef\u683c\u5c14\u8fd0\u52a8',
    tips: '\u6700\u4f73\u8fd0\u52a8\u671f\uff0c\u53ef\u9002\u5f53\u589e\u52a0\u5f3a\u5ea6\uff1b\u907f\u514d\u4ef0\u5367\u4f4d\u8fc7\u4e45\uff08\u9632\u6b62\u538b\u8feb\u4e0b\u8154\u9759\u8109\uff09'
  },
  '\u5b55\u665a\u671f': {
    title: '\u1f3c3 \u8fd0\u52a8\u5efa\u8bae\uff08\u5b55\u665a\u671f\uff09',
    content: '\u6162\u8d70 30 \u5206\u949f/\u5929\uff1b\u76d8\u817f\u5750\u62c9\u4f38\u6253\u5f00\u9aa8\u76c6\uff1b\u6df1\u8e72\u7ec3\u4e60\uff08\u6276\u5899\uff0c\u4e3a\u5206\u5a29\u505a\u51c6\u5907\uff09\uff1b\u4f1a\u9634\u6309\u6469\uff1b\u51ef\u683c\u5c14\u8fd0\u52a8',
    tips: '\u907f\u514d\u5267\u70c8\u8fd0\u52a8\u548c\u957f\u65f6\u95f4\u7ad9\u7acb\uff1b\u51fa\u73b0\u89c4\u5f8b\u5bab\u7f29\u3001\u7834\u6c34\u3001\u89c1\u7ea2\u7acb\u5373\u505c\u6b62\u8fd0\u52a8\u5c31\u533b'
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
  var currentPhase = weekNum < 13 ? '\u5b55\u65e9\u671f' : (weekNum < 28 ? '\u5b55\u4e2d\u671f' : '\u5b55\u665a\u671f');
  var summaryHtml = '';
  summaryHtml += '<div class="wgs-item"><div class="wgs-label">BMI \u5206\u7c7b</div><div class="wgs-value">' + bmi.toFixed(1) + '</div><div class="wgs-sub">' + guide.label + '</div></div>';
  summaryHtml += '<div class="wgs-item"><div class="wgs-label">\u63a8\u8350\u603b\u589e\u91cd</div><div class="wgs-value">' + guide.totalRange[0] + '-' + guide.totalRange[1] + ' kg</div><div class="wgs-sub">\u6574\u4e2a\u5b55\u671f</div></div>';
  if (preWeight) {
    var gainStatus = '', gainClass = '';
    if (gained > guide.totalRange[1]) { gainStatus = '\u5df2\u8d85\u6807'; gainClass = 'alarm'; }
    else if (gained < guide.totalRange[0] * (weekNum / 40)) { gainStatus = '\u504f\u6162'; gainClass = 'warn'; }
    else { gainStatus = '\u6b63\u5e38'; }
    summaryHtml += '<div class="wgs-item ' + gainClass + '"><div class="wgs-label">\u5df2\u589e\u91cd</div><div class="wgs-value">' + gained.toFixed(1) + ' kg</div><div class="wgs-sub">' + gainStatus + '</div></div>';
  } else {
    summaryHtml += '<div class="wgs-item warn"><div class="wgs-label">\u5df2\u589e\u91cd</div><div class="wgs-value">--</div><div class="wgs-sub">\u8bf7\u5148\u8bb0\u5f55\u4f53\u91cd</div></div>';
  }
  if (week) {
    summaryHtml += '<div class="wgs-item"><div class="wgs-label">\u5f53\u524d\u5b55\u5468</div><div class="wgs-value">' + weekNum + ' \u5468</div><div class="wgs-sub">' + currentPhase + '</div></div>';
  } else {
    summaryHtml += '<div class="wgs-item warn"><div class="wgs-label">\u5f53\u524d\u5b55\u5468</div><div class="wgs-value">\u672a\u8bbe\u7f6e</div><div class="wgs-sub">\u8bf7\u8bbe\u7f6e\u672b\u6b21\u6708\u7ecf</div></div>';
  }
  summaryEl.innerHTML = summaryHtml;
  var tableHtml = '<table class="weight-guide-table"><thead><tr><th>\u9636\u6bb5</th><th>\u5b55\u5468</th><th>\u7d2f\u8ba1\u589e\u91cd</th><th>\u6bcf\u5468\u589e\u957f</th><th>\u8bf4\u660e</th></tr></thead><tbody>';
  for (var i = 0; i < guide.phases.length; i++) {
    var p = guide.phases[i];
    var isCurrent = p.phase === currentPhase;
    tableHtml += '<tr class="' + (isCurrent ? 'wg-current' : '') + '">';
    tableHtml += '<td class="wg-phase">' + p.phase + (isCurrent ? '<span class="wg-tag wg-tag-current">\u5f53\u524d</span>' : '') + '</td>';
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
  var suggHtml = '<h5>\u1f4cb ' + currentPhase + ' \u4e2a\u6027\u5316\u5efa\u8bae</h5>';
  suggHtml += '<div class="wgs-section"><span class="wgs-section-title">' + diet.title + '</span>';
  suggHtml += '<strong>\u63a8\u8350\u98df\u7269\uff1a</strong>' + diet.food + '<br>';
  suggHtml += '<strong>\u8425\u517b\u7d20\uff1a</strong>' + diet.nutrition + '<br>';
  suggHtml += '<strong>\u5c0f\u8d34\u58eb\uff1a</strong>' + diet.tips + '</div>';
  suggHtml += '<div class="wgs-section"><span class="wgs-section-title">' + exer.title + '</span>';
  suggHtml += exer.content + '<br>';
  suggHtml += '<strong>\u6ce8\u610f\uff1a</strong>' + exer.tips + '</div>';
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
  document.getElementById('add-poop-btn').textContent = '\u6dfb\u52a0';
  document.getElementById('cancel-poop-edit').style.display = 'none';
}
document.getElementById('add-poop-btn').addEventListener('click', function(){
  var date = document.getElementById('poop-date').value;
  var status = document.getElementById('poop-status').value;
  var note = document.getElementById('poop-note').value.trim();
  var editId = document.getElementById('poop-edit-id').value;
  if (!date || !status) { alert('\u8bf7\u586b\u5199\u65e5\u671f\u548c\u72b6\u6001'); return; }
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
    html += '<button class="record-edit" data-id="' + r.id + '" data-type="poop" title="\u7f16\u8f91">\u270e</button>';
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
  document.getElementById('add-poop-btn').textContent = '\u4fdd\u5b58\u4fee\u6539';
  document.getElementById('cancel-poop-edit').style.display = 'inline-block';
  window.scrollTo({ top:0, behavior:'smooth' });
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
function parseISO(s) {
  var parts = s.split('-');
  return new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
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
  var editId = document.getElementById('baby-edit-id').value;
  var parsed = parseWeek(weekStr);
  if (!parsed || !parsed.week) { alert('\u8bf7\u586b\u5199\u5b55\u5468\uff0c\u5982 15+1'); return; }
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
  document.getElementById('add-baby-btn').textContent = '\u6dfb\u52a0';
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
    html += '<div class="record-main"><span class="record-value">\u5b55 ' + weekText + ' \u5468</span>' + (r.length ? '<span class="record-tag">' + (r.week <= 12 ? '\u9876\u81c0\u957f' : '\u8eab\u957f') + ' ' + r.length + ' cm</span>' : '') + (r.weight ? '<span class="record-tag">\u4f53\u91cd ' + r.weight + ' g</span>' : '') + '</div>';
    if (r.note) html += '<div class="record-note">' + escapeHtml(r.note) + '</div>';
    html += '<button class="record-edit" data-id="' + r.id + '" data-type="baby" title="\u7f16\u8f91">\u270e</button>';
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
  document.getElementById('add-baby-btn').textContent = '\u4fdd\u5b58\u4fee\u6539';
  document.getElementById('cancel-baby-edit').style.display = 'inline-block';
  window.scrollTo({ top:0, behavior:'smooth' });
}

/* ====== \u5b55\u68c0\u8bb0\u5f55 ====== */
function renderCheckupSection() { document.getElementById('checkup-date').value = todayISO(); renderCheckupList(); }
function resetCheckupForm() {
  document.getElementById('checkup-date').value = todayISO();
  document.getElementById('checkup-item').value = '';
  document.getElementById('checkup-result').value = '';
  document.getElementById('checkup-next').value = '';
  document.getElementById('checkup-edit-id').value = '';
  document.getElementById('add-checkup-btn').textContent = '\u6dfb\u52a0';
  document.getElementById('cancel-checkup-edit').style.display = 'none';
}
document.getElementById('add-checkup-btn').addEventListener('click', function(){
  var date = document.getElementById('checkup-date').value;
  var item = document.getElementById('checkup-item').value.trim();
  var result = document.getElementById('checkup-result').value.trim();
  var nextDate = document.getElementById('checkup-next').value;
  var editId = document.getElementById('checkup-edit-id').value;
  if (!date || !item) { alert('\u8bf7\u586b\u5199\u65e5\u671f\u548c\u9879\u76ee'); return; }
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
    if (r.result) html += '<div class="record-note">\u7ed3\u679c\uff1a' + escapeHtml(r.result) + '</div>';
    if (r.nextDate) html += '<div class="record-note">\u4e0b\u6b21\u4ea7\u68c0\uff1a' + r.nextDate + '</div>';
    html += '<button class="record-edit" data-id="' + r.id + '" data-type="checkup" title="\u7f16\u8f91">\u270e</button>';
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
  document.getElementById('add-checkup-btn').textContent = '\u4fdd\u5b58\u4fee\u6539';
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
  var TYPE_ICONS = { video:'\u1f3ac', article:'\u1f4c4', recipe:'\u1f957', other:'\u1f4cc' };
  var TYPE_LABELS = { video:'\u89c6\u9891', article:'\u6587\u7ae0', recipe:'\u83dc\u8c31', other:'\u5176\u4ed6' };
  var html = '';
  if (!items.length) {
    list.innerHTML = '<div class="empty-state"><div class="empty-icon">\u2b50</div><p>' + (currentFavQuery ? '\u6ca1\u6709\u627e\u5230\u5339\u914d\u7684\u6536\u85cf' : '\u8fd8\u6ca1\u6709\u6536\u85cf\u5185\u5bb9') + '</p></div>';
    return;
  }
  for (var i = 0; i < items.length; i++) {
    var it = items[i];
    html += '<div class="favorite-item">';
    html += '<div class="fav-icon">' + (TYPE_ICONS[it.type] || '\u1f4cc') + '</div>';
    html += '<div class="fav-body">';
    html += '<div class="fav-title">' + escapeHtml(it.title) + '</div>';
    html += '<div class="fav-tags">' + (TYPE_LABELS[it.type] || '\u5176\u4ed6') + (it.ingredients ? ' \u00b7 ' + escapeHtml(it.ingredients) : '') + '</div>';
    if (it.link) html += '<a href="' + escapeHtml(it.link) + '" target="_blank" class="fav-link">' + escapeHtml(it.link) + '</a>';
    if (it.note) html += '<div class="fav-note collapsed" data-collapsed="1">' + escapeHtml(it.note) + '</div><button class="fav-note-toggle" data-action="toggle-note">\u5c55\u5f00 \u25be</button>';
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
      noteBtn.textContent = isCollapsed ? '\u5c55\u5f00 \u25be' : '\u6536\u8d77 \u25b4';
    }
    return;
  }
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
  var TYPE_ICONS = { video:'\u1f3ac', article:'\u1f4c4', recipe:'\u1f957', other:'\u1f4cc' };
  var html = '<div class="weekly-fav-header">\u6211\u7684\u6536\u85cf\u4e2d\u542b\u300c' + escapeHtml(query) + '\u300d\u7684\u8bb0\u5f55</div>';
  if (!items.length) {
    html += '<div class="weekly-fav-empty">\u6682\u65e0\u5339\u914d\u8bb0\u5f55</div>';
  } else {
    html += '<div class="weekly-fav-list">';
    for (var i = 0; i < items.length; i++) {
      var it = items[i];
      html += '<div class="weekly-fav-item">';
      html += '<span class="weekly-fav-icon">' + (TYPE_ICONS[it.type] || '\u1f4cc') + '</span>';
      html += '<div class="weekly-fav-body">';
      html += '<div class="weekly-fav-title">' + escapeHtml(it.title) + '</div>';
      if (it.ingredients) html += '<div class="weekly-fav-tags">' + escapeHtml(it.ingredients) + '</div>';
      if (it.note) html += '<div class="weekly-fav-note collapsed">' + escapeHtml(it.note) + '</div><button class="fav-note-toggle">\u5c55\u5f00 \u25be</button>';
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
document.getElementById('weekly-fav-results').addEventListener('click', function(e){
  var noteBtn = e.target.closest ? e.target.closest('.fav-note-toggle') : null;
  if (noteBtn) {
    var card = noteBtn.previousElementSibling;
    if (card && card.classList.contains('weekly-fav-note')) {
      var isCollapsed = card.classList.toggle('collapsed');
      noteBtn.textContent = isCollapsed ? '\u5c55\u5f00 \u25be' : '\u6536\u8d77 \u25b4';
    }
  }
});

/* ====== \u4e00\u5468\u996e\u98df\u8ba1\u5212 ====== */
var currentWeekOffset = 0;
var currentExpandedCell = null;

function getWeeklyPlan(dateIso, meal) {
  if (!appData.weeklyPlan[dateIso]) appData.weeklyPlan[dateIso] = {};
  if (!appData.weeklyPlan[dateIso][meal] || typeof appData.weeklyPlan[dateIso][meal] !== 'object') {
    appData.weeklyPlan[dateIso][meal] = { content:'', meat:'', veg:'', staple:'', fruit:'', others:'', tags:[] };
  }
  return appData.weeklyPlan[dateIso][meal];
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
  html += '<button class="week-nav-btn" id="week-next">\u203a</button>';
  html += '<button class="week-today-btn" id="week-today">\u4eca\u5929</button>';
  html += '</div>';
  html += '<div class="weekly-table-wrap"><table class="weekly-table"><thead><tr><th>\u65e5\u671f</th>';
  for (var i = 0; i < MEAL_KEYS.length; i++) html += '<th>' + MEAL_LABELS[MEAL_KEYS[i]] + '</th>';
  html += '</tr></thead><tbody>';
  for (var d = 0; d < WEEKDAYS.length; d++) {
    var dateInfo = weekDates[d];
    var iso = dateInfo.iso;
    var isToday = iso === todayISO();
    html += '<tr><td class="day-label ' + (isToday ? 'today' : '') + '"><div class="day-date">' + dateInfo.short + '</div><div class="day-week">' + dateInfo.weekday + '</div></td>';
    for (var m = 0; m < MEAL_KEYS.length; m++) {
      var meal = MEAL_KEYS[m];
      var data = getWeeklyPlan(iso, meal);
      html += '<td class="meal-cell">';
      html += '<div class="meal-cell-header">';
      html += '<button class="meal-detail-toggle" data-iso="' + iso + '" data-meal="' + meal + '">\u22ef</button>';
      html += '</div>';
      html += '<textarea data-iso="' + iso + '" data-meal="' + meal + '" data-field="content" placeholder="\u8ba1\u5212\u5403\u4ec0\u4e48...">' + escapeHtml(data.content || '') + '</textarea>';
      html += '<div class="meal-tags-preview">' + (data.tags && data.tags.length ? data.tags.map(function(t){ return '<span class="mtp-tag">' + escapeHtml(t) + '</span>'; }).join('') : '') + '</div>';
      html += '</td>';
    }
    html += '</tr>';
  }
  html += '</tbody></table></div>';
  html += '<div class="diet-analysis-section">';
  html += '<h3>\u1f957 \u4eca\u65e5\u996e\u98df\u5206\u6790</h3>';
  html += '<button id="analyze-diet-btn" class="analyze-btn">\u5206\u6790\u4eca\u65e5\u996e\u98df</button>';
  html += '<div id="diet-analysis-result" class="diet-analysis-result"></div>';
  html += '</div>';
  plan.innerHTML = html;
  bindWeeklyEvents();
}

function autoResizeWeeklyTextareas() {
  document.querySelectorAll('#weekly-plan textarea').forEach(function(ta){
    ta.style.height = '';
  });
}
function autoResizeTextarea(el) {
  el.style.height = '';
}

function bindWeeklyEvents() {
  document.getElementById('week-prev').addEventListener('click', function(){ currentWeekOffset--; renderWeeklyPlan(); });
  document.getElementById('week-next').addEventListener('click', function(){ currentWeekOffset++; renderWeeklyPlan(); });
  document.getElementById('week-today').addEventListener('click', function(){ currentWeekOffset = 0; renderWeeklyPlan(); });
  document.getElementById('analyze-diet-btn').addEventListener('click', analyzeTodayDiet);
  document.querySelectorAll('.meal-detail-toggle').forEach(function(btn){
    btn.addEventListener('click', function(e){ e.stopPropagation(); openMealDetail(btn.dataset.iso, btn.dataset.meal); });
  });
}

document.getElementById('weekly-plan').addEventListener('input', function(e){
  var iso = e.target.dataset.iso, meal = e.target.dataset.meal, field = e.target.dataset.field;
  if (iso && meal && field) {
    var data = getWeeklyPlan(iso, meal);
    data[field] = e.target.value;
    saveData();
  }
// \u8f93\u5165\u65f6\u5b9e\u65f6\u66f4\u65b0\u6807\u7b7e\uff08\u9ad8\u5ea6\u56fa\u5b9a\uff0c\u4e0d\u9700\u8981\u81ea\u9002\u5e94\uff09
});

/* ====== \u98df\u6750\u63a8\u8350\u4e0e\u81ea\u52a8\u6807\u7b7e ====== */
var FOOD_SUGGESTIONS = {
  meat: ['\u9e21\u86cb','\u9e21\u80f8\u8089','\u725b\u8089','\u732a\u8089','\u867e\u4ec1','\u4e09\u6587\u9c7c','\u732a\u809d','\u732a\u8840','\u9e2d\u8840','\u7f8a\u8089','\u9e21\u817f','\u9c88\u9c7c'],
  veg: ['\u83e0\u83dc','\u897f\u5170\u82b1','\u756a\u8304','\u80e1\u841d\u535c','\u9ec4\u74dc','\u82b9\u83dc','\u6cb9\u9ea6\u83dc','\u83b4\u7b0b','\u5357\u74dc','\u8611\u83c7','\u6d77\u5e26'],
  staple: ['\u6742\u7cae\u996d','\u7ea2\u85af','\u5168\u9ea6\u9762\u5305','\u71d5\u9ea6','\u7389\u7c73','\u7d2b\u85af','\u7cd9\u7c73','\u835e\u9ea6\u9762','\u5357\u74dc'],
  fruit: ['\u84dd\u8393','\u82f9\u679c','\u7315\u7334\u6843','\u6a59\u5b50','\u897f\u67da','\u8349\u8393','\u756a\u8304','\u897f\u6885','\u68a8','\u6843\u5b50'],
  others: ['\u725b\u5976','\u9178\u5976','\u575a\u679c','\u6838\u6843','\u829d\u9ebb','\u8c46\u8150','\u8c46\u6d46','\u71d5\u7a9d']
};
var FOOD_TAG_RULES = {
  '\u8865\u94c1': ['\u732a\u809d','\u732a\u8840','\u9e2d\u8840','\u725b\u8089','\u7f8a\u8089','\u7626\u8089','\u83e0\u83dc','\u6d77\u5e26','\u9ed1\u6728\u8033','\u7ea2\u67a3'],
  '\u8865\u9499': ['\u725b\u5976','\u9178\u5976','\u8c46\u8150','\u829d\u9ebb','\u867e\u76ae','\u5976\u916a','\u6df1\u7eff\u53f6\u83dc','\u6d77\u5e26','\u8c46\u6d46'],
  '\u8865\u53f6\u9178': ['\u83e0\u83dc','\u82a6\u7b0b','\u897f\u5170\u82b1','\u751f\u83dc','\u725b\u6cb9\u679c','\u6a59\u5b50','\u8349\u8393','\u8c46\u7c7b',' liver','\u809d'],
  '\u8865DHA': ['\u4e09\u6587\u9c7c','\u9cd5\u9c7c','\u9c88\u9c7c','\u867e','\u6d77\u9c7c','\u6df1\u6d77\u9c7c','\u6838\u6843','\u85fb\u6cb9','\u4e9a\u9ebb\u7c7d'],
  '\u8865\u86cb\u767d\u8d28': ['\u9e21\u86cb','\u9e21\u80f8\u8089','\u725b\u8089','\u732a\u8089','\u9c7c','\u867e','\u8c46\u8150','\u725b\u5976','\u9178\u5976','\u575a\u679c'],
  '\u8865\u7ef4\u751f\u7d20': ['\u6a59\u5b50','\u7315\u7334\u6843','\u8349\u8393','\u84dd\u8393','\u756a\u8304','\u80e1\u841d\u535c','\u897f\u5170\u82b1','\u83e0\u83dc','\u5f69\u6912'],
  '\u8865\u81b3\u98df\u7ea4\u7ef4': ['\u71d5\u9ea6','\u7ea2\u85af','\u7389\u7c73','\u7cd9\u7c73','\u5168\u9ea6','\u82b9\u83dc','\u83e0\u83dc','\u82f9\u679c','\u68a8','\u6728\u8033'],
  '\u8865\u950c': ['\u725b\u8089','\u732a\u8089','\u7f8a\u8089','\u7261\u86ce','\u867e','\u5357\u74dc\u5b50','\u829d\u9ebb','\u6838\u6843','\u86cb\u9ec4']
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
      // \u66f4\u65b0\u81ea\u52a8\u6807\u7b7e
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

function openMealDetail(iso, meal) {
  currentExpandedCell = { iso:iso, meal:meal };
  var data = getWeeklyPlan(iso, meal);
  var mealName = MEAL_LABELS[meal];
  var dateObj = parseISO(iso);
  var month = dateObj.getMonth() + 1, day = dateObj.getDate();
  var dayLabel = month + '.' + day;
  var weekdayNames = ['\u5468\u65e5','\u5468\u4e00','\u5468\u4e8c','\u5468\u4e09','\u5468\u56db','\u5468\u4e94','\u5468\u516d'];
  var weekdayLabel = weekdayNames[dateObj.getDay()];
  var panel = document.createElement('div');
  panel.className = 'meal-detail-panel-overlay';
  panel.id = 'meal-detail-panel';
  var tags = ['\u8865\u94c1','\u8865\u9499','\u8865\u53f6\u9178','\u8865DHA','\u8865\u86cb\u767d\u8d28','\u8865\u7ef4\u751f\u7d20','\u8865\u81b3\u98df\u7ea4\u7ef4','\u8865\u950c'];
  // \u5148\u6839\u636e\u5df2\u6709\u5185\u5bb9\u81ea\u52a8\u68c0\u6d4b\u6807\u7b7e
  var allContent = [data.content, data.meat, data.veg, data.staple, data.fruit, data.others].join(' ');
  var detectedTags = autoDetectTags(allContent);
  var mergedTags = data.tags ? data.tags.slice() : [];
  detectedTags.forEach(function(t){ if (mergedTags.indexOf(t) < 0) mergedTags.push(t); });
  data.tags = mergedTags;
  var html = '';
  html += '<div class="meal-detail-panel">';
  html += '<div class="meal-detail-header">';
  html += '<h4>' + dayLabel + ' ' + weekdayLabel + ' \u00b7 ' + mealName + '</h4>';
  html += '<button class="meal-detail-close">\u2715</button>';
  html += '</div>';
  html += '<div class="meal-detail-body">';
  html += '<div class="meal-detail-row"><label>\u4e3b\u8981\u9910\u98df</label><textarea data-field="content" placeholder="\u5982\uff1a\u71d5\u9ea6\u9e21\u86cb\u7897\u3001\u4e94\u9ed1\u996e">' + escapeHtml(data.content || '') + '</textarea></div>';
  html += '<div class="meal-detail-row"><label>\u8089\u7c7b/\u86cb\u7c7b</label><input type="text" data-field="meat" placeholder="\u5982\uff1a\u9e21\u86cb\u3001\u9e21\u80f8\u8089\u3001\u725b\u8089" value="' + escapeHtml(data.meat || '') + '">' + renderFoodSuggestions(panel, 'meat') + '</div>';
  html += '<div class="meal-detail-row"><label>\u852c\u83dc</label><input type="text" data-field="veg" placeholder="\u5982\uff1a\u83e0\u83dc\u3001\u897f\u5170\u82b1\u3001\u756a\u8304" value="' + escapeHtml(data.veg || '') + '">' + renderFoodSuggestions(panel, 'veg') + '</div>';
  html += '<div class="meal-detail-row"><label>\u4e3b\u98df/\u8c37\u7269</label><input type="text" data-field="staple" placeholder="\u5982\uff1a\u6742\u7cae\u996d\u3001\u7ea2\u85af\u3001\u5168\u9ea6\u9762\u5305" value="' + escapeHtml(data.staple || '') + '">' + renderFoodSuggestions(panel, 'staple') + '</div>';
  html += '<div class="meal-detail-row"><label>\u6c34\u679c</label><input type="text" data-field="fruit" placeholder="\u5982\uff1a\u84dd\u8393\u3001\u82f9\u679c\u3001\u7315\u7334\u6843" value="' + escapeHtml(data.fruit || '') + '">' + renderFoodSuggestions(panel, 'fruit') + '</div>';
  html += '<div class="meal-detail-row"><label>\u5176\u4ed6</label><input type="text" data-field="others" placeholder="\u5982\uff1a\u725b\u5976\u3001\u575a\u679c\u3001\u9178\u5976" value="' + escapeHtml(data.others || '') + '">' + renderFoodSuggestions(panel, 'others') + '</div>';
  html += '<div class="meal-detail-row"><label>\u8425\u517b\u6807\u7b7e <small>\uff08\u4f1a\u6839\u636e\u98df\u6750\u81ea\u52a8\u52fe\u9009\uff09</small></label><div class="tag-options">';
  for (var i = 0; i < tags.length; i++) {
    var checked = (data.tags || []).indexOf(tags[i]) >= 0 ? 'checked' : '';
    html += '<label class="tag-option ' + checked + '"><input type="checkbox" value="' + tags[i] + '" ' + checked + '> ' + tags[i] + '</label>';
  }
  html += '</div></div>';
  html += '</div>';
  html += '<div class="meal-detail-footer"><button class="save-meal-detail">\u4fdd\u5b58</button></div>';
  html += '</div>';
  panel.innerHTML = html;
  document.body.appendChild(panel);
  // \u521d\u59cb\u5316 textarea \u9ad8\u5ea6
  panel.querySelectorAll('textarea[data-field]').forEach(function(el){
    el.style.height = 'auto';
    el.style.height = Math.max(60, el.scrollHeight) + 'px';
  });
  panel.querySelector('.meal-detail-close').addEventListener('click', closeMealDetail);
  panel.addEventListener('click', function(e){ if (e.target === panel) closeMealDetail(); });
  bindFoodSuggestions(panel, data);
  // \u8f93\u5165\u65f6\u5b9e\u65f6\u66f4\u65b0\u6807\u7b7e + textarea \u81ea\u52a8\u8c03\u6574\u9ad8\u5ea6
  panel.querySelectorAll('input[data-field], textarea[data-field]').forEach(function(el){
    el.addEventListener('input', function(){
      updateAutoTags(panel, data);
      if (el.tagName === 'TEXTAREA') {
        el.style.height = 'auto';
        el.style.height = Math.max(60, el.scrollHeight) + 'px';
      }
    });
  });
  // \u6807\u7b7e\u70b9\u51fb\u5207\u6362\u6837\u5f0f
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
  var iso = todayISO();
  var meals = [];
  MEAL_KEYS.forEach(function(meal){
    var data = getWeeklyPlan(iso, meal);
    if (data && (data.content || data.meat || data.veg || data.staple || data.fruit || (data.tags && data.tags.length))) {
      meals.push({ name:MEAL_LABELS[meal], data:data });
    }
  });
  var result = document.getElementById('diet-analysis-result');
  if (!meals.length) { result.innerHTML = '<div class="analysis-empty">\u4eca\u5929\u8fd8\u6ca1\u6709\u8bb0\u5f55\u996e\u98df\uff0c\u5148\u586b\u5199\u4eca\u65e5\u9910\u98df\u5427\uff5e</div>'; return; }
  var summary = [], allMeat = [], allVeg = [], allStaple = [], allFruit = [], allOthers = [], allTags = [];
  meals.forEach(function(m){
    if (m.data.content) summary.push('<b>' + m.name + '</b>\uff1a' + escapeHtml(m.data.content));
    if (m.data.meat) allMeat.push(m.data.meat);
    if (m.data.veg) allVeg.push(m.data.veg);
    if (m.data.staple) allStaple.push(m.data.staple);
    if (m.data.fruit) allFruit.push(m.data.fruit);
    if (m.data.others) allOthers.push(m.data.others);
    if (m.data.tags) allTags = allTags.concat(m.data.tags);
  });
  var html = '';
  html += '<div class="analysis-block"><h5>\u1f4cb \u4eca\u65e5\u9910\u98df\u8bb0\u5f55</h5><p>' + summary.join('<br>') + '</p></div>';
  html += '<div class="analysis-block"><h5>\u1f969 \u8089\u7c7b/\u86cb\u7c7b</h5><p>' + (allMeat.length ? escapeHtml(allMeat.join('\u3001')) : '\u672a\u8bb0\u5f55') + '</p></div>';
  html += '<div class="analysis-block"><h5>\u1f96c \u852c\u83dc</h5><p>' + (allVeg.length ? escapeHtml(allVeg.join('\u3001')) : '\u672a\u8bb0\u5f55') + '</p></div>';
  html += '<div class="analysis-block"><h5>\u1f35a \u4e3b\u98df/\u8c37\u7269</h5><p>' + (allStaple.length ? escapeHtml(allStaple.join('\u3001')) : '\u672a\u8bb0\u5f55') + '</p></div>';
  html += '<div class="analysis-block"><h5>\u1f34e \u6c34\u679c</h5><p>' + (allFruit.length ? escapeHtml(allFruit.join('\u3001')) : '\u672a\u8bb0\u5f55') + '</p></div>';
  html += '<div class="analysis-block"><h5>\u1f95b \u5176\u4ed6</h5><p>' + (allOthers.length ? escapeHtml(allOthers.join('\u3001')) : '\u672a\u8bb0\u5f55') + '</p></div>';
  html += '<div class="analysis-block"><h5>\u1f3f7\ufe0f \u8425\u517b\u6807\u7b7e</h5><p>' + (allTags.length ? allTags.map(function(t){ return '<span class="analysis-tag">' + escapeHtml(t) + '</span>'; }).join(' ') : '\u672a\u52fe\u9009') + '</p></div>';

  // \u6539\u5584\u5efa\u8bae
  var suggestions = [];
  if (!allMeat.length || !/(\u732a|\u725b|\u7f8a|\u9e21|\u9c7c|\u867e|\u86cb|\u8089)/.test(allMeat.join(''))) suggestions.push('\u4eca\u65e5\u86cb\u767d\u8d28\u6444\u5165\u4e0d\u8db3\uff0c\u5efa\u8bae\u665a\u9910\u8865\u5145\u7626\u8089\u3001\u9e21\u86cb\u6216\u9c7c\u867e\u3002');
  if (!allVeg.length) suggestions.push('\u852c\u83dc\u6444\u5165\u504f\u5c11\uff0c\u5efa\u8bae\u4e0b\u4e00\u9910\u589e\u52a0\u6df1\u8272\u852c\u83dc\uff0c\u5982\u83e0\u83dc\u3001\u897f\u5170\u82b1\u3001\u756a\u8304\u3002');
  if (!allFruit.length) suggestions.push('\u4eca\u5929\u8fd8\u6ca1\u5403\u6c34\u679c\uff0c\u53ef\u9002\u91cf\u8865\u5145\u4f4e\u7cd6\u6c34\u679c\u5982\u84dd\u8393\u3001\u82f9\u679c\u3001\u7315\u7334\u6843\u3002');
  if (allTags.indexOf('\u8865\u94c1') < 0 && !/(\u732a|\u725b|\u7f8a|\u52a8\u7269|\u8840|\u809d)/.test((allMeat.join('') + allOthers.join('')))) suggestions.push('\u5b55\u671f\u5bb9\u6613\u7f3a\u94c1\uff0c\u53ef\u9002\u5f53\u6444\u5165\u7ea2\u8089\u3001\u52a8\u7269\u809d\u810f\u6216\u8840\u5236\u54c1\u3002');
  if (allTags.indexOf('\u8865\u9499') < 0 && !/(\u5976|\u8c46\u8150|\u829d\u9ebb|\u867e|\u6df1\u7eff)/.test((allOthers.join('') + allVeg.join('')))) suggestions.push('\u6ce8\u610f\u8865\u9499\uff0c\u53ef\u559d\u725b\u5976\u3001\u5403\u8c46\u8150\u6216\u829d\u9ebb\u9171\u3002');
  if (allTags.indexOf('\u8865\u53f6\u9178') < 0 && !/(\u83e0|\u82a6|\u83dc|\u809d|\u8c46)/.test((allVeg.join('') + allOthers.join('')))) suggestions.push('\u53f6\u9178\u5bf9\u5b55\u671f\u5f88\u91cd\u8981\uff0c\u591a\u5403\u6df1\u7eff\u8272\u852c\u83dc\u548c\u8c46\u7c7b\u3002');
  if (allTags.indexOf('\u8865DHA') < 0 && !/(\u9c7c|\u867e|\u6d77|\u85fb|\u6838\u6843)/.test((allMeat.join('') + allOthers.join('')))) suggestions.push('DHA \u6709\u52a9\u4e8e\u80ce\u513f\u5927\u8111\u53d1\u80b2\uff0c\u53ef\u6bcf\u5468\u5403 2-3 \u6b21\u6df1\u6d77\u9c7c\u6216\u6838\u6843\u3002');
  if (!suggestions.length) suggestions.push('\u4eca\u65e5\u996e\u98df\u7ed3\u6784\u8f83\u5747\u8861\uff0c\u7ee7\u7eed\u4fdd\u6301\uff01\u6ce8\u610f\u591a\u559d\u6c34\u3001\u9002\u91cf\u8fd0\u52a8\u3002');

  html += '<div class="analysis-block suggestions"><h5>\u1f4a1 \u6539\u5584\u5efa\u8bae</h5><ul>';
  suggestions.forEach(function(s){ html += '<li>' + s + '</li>'; });
  html += '</ul></div>';
  result.innerHTML = html;
}

function openRecipeSearch(platform) {
  var q = document.getElementById('recipe-search').value.trim() || '\u51cf\u8102\u9910';
  var urls = {
    bilibili:'https://search.bilibili.com/all?keyword=' + encodeURIComponent(q),
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
/* ====== \u5927\u5b9d\uff08\u5e7c\u513f\u56ed\uff09 & \u5c0f\u5b9d\uff080-1\u5c81\uff09 ====== */
var KINDERGARTEN_SUPPLIES = [
  { cat:'\u8863\u7269\u7c7b\uff08\u5fc5\u5907\uff09', items:[
    { name:'\u6362\u6d17\u8863\u7269\u5957\u88c5\uff08\u5185\u8863+\u88e4\u5b50+\u889c\u5b50\uff09', qty:'2\u5957', note:'\u51fa\u6c57\u3001\u5c3f\u6e7f\u5907\u7528\uff0c\u6240\u6709\u7269\u54c1\u5fc5\u987b\u7ee3/\u8d34\u59d3\u540d\u6807\u8bc6' },
    { name:'\u8584\u6b3e\u9632\u98ce\u5916\u5957/\u9a6c\u7532', qty:'1\u4ef6', note:'\u5e94\u5bf9\u65e9\u665a\u6e29\u5dee\uff0c\u4f18\u5148\u9009\u62e9\u65b9\u4fbf\u7a7f\u8131\u7684\u6b3e\u5f0f' },
    { name:'\u5907\u7528\u5185\u88e4', qty:'2\u6761', note:'\u4e2d\u73ed\u5c0f\u670b\u53cb\u5076\u5c14\u4f1a\u618b\u5c3f\u3001\u73a9\u6c34\u5f04\u6e7f\uff0c\u989d\u5916\u5907\u7528' },
    { name:'\u5ba4\u5185\u8f6f\u5e95\u978b', qty:'1\u53cc', note:'\u5305\u8ddf\u9632\u6ed1\u5e06\u5e03\u978b/\u8fd0\u52a8\u978b\uff0c\u4e25\u7981\u7a7f\u6d1e\u6d1e\u978b\u3001\u62d6\u978b' },
    { name:'\u5ba4\u5916\u8fd0\u52a8\u978b', qty:'1\u53cc', note:'\u65b9\u4fbf\u6237\u5916\u6d3b\u52a8\uff0c\u8d34\u5408\u811a\u578b\u4e0d\u6613\u8131\u843d' }
  ]},
  { cat:'\u5bdd\u5177\u7c7b\uff08\u5348\u4f11\u7528\u54c1\uff09', items:[
    { name:'\u5348\u7761\u5c0f\u88ab\u5b50/\u8584\u590f\u88ab', qty:'1\u5957', note:'\u6839\u636e\u5b63\u8282\u66f4\u6362\uff0c\u9075\u5faa\u5e7c\u513f\u56ed\u5c3a\u5bf8\u8981\u6c42' },
    { name:'\u6795\u5934+\u6795\u5957', qty:'1\u5957', note:'\u4f18\u5148\u9009\u62e9\u5c0f\u670b\u53cb\u719f\u6089\u7684\u6795\u5934\uff0c\u63d0\u5347\u5348\u4f11\u9002\u5e94\u5ea6' },
    { name:'\u5e8a\u57ab/\u57ab\u88ab\u5957', qty:'1\u5957', note:'\u90e8\u5206\u5e7c\u513f\u56ed\u7edf\u4e00\u914d\u5907\uff0c\u63d0\u524d\u786e\u8ba4\u56ed\u6240\u8981\u6c42' }
  ]},
  { cat:'\u4e2a\u4eba\u536b\u751f\u7528\u54c1', items:[
    { name:'\u7eaf\u68c9\u6bdb\u5dfe', qty:'1-2\u6761', note:'\u64e6\u624b\u64e6\u6c57\uff0c\u5fc5\u987b\u6807\u8bb0\u59d3\u540d' },
    { name:'\u76f4\u996e\u4fdd\u6e29\u676f/\u6c34\u676f', qty:'1\u4e2a', note:'\u9075\u5faa\u56ed\u6240\u8981\u6c42\uff0c\u4f18\u5148\u76f4\u996e\u6b3e\uff0c\u4e0d\u5efa\u8bae\u5438\u7ba1\u676f' },
    { name:'\u62bd\u7eb8/\u968f\u8eab\u5c0f\u5305\u7eb8\u5dfe', qty:'1\u5305', note:'\u65e5\u5e38\u6e05\u6d01\u4f7f\u7528' },
    { name:'\u65e0\u9152\u7cbe\u5a74\u513f\u6e7f\u5dfe', qty:'1\u5305', note:'\u6e05\u6d01\u624b\u90e8\u3001\u9910\u5177\u3001\u684c\u9762\u4f7f\u7528' },
    { name:'\u7259\u5237\u7259\u818f', qty:'1\u5957', note:'\u90e8\u5206\u4e2d\u73ed\u5f00\u8bbe\u5348\u95f4\u5237\u7259\uff0c\u6309\u73ed\u7ea7\u901a\u77e5\u51c6\u5907' }
  ]},
  { cat:'\u5b66\u4e60&\u6d3b\u52a8\u7528\u54c1', items:[
    { name:'\u7f8e\u672f\u56f4\u88d9/\u53cd\u7a7f\u8863', qty:'1\u4ef6', note:'\u753b\u753b\u3001\u624b\u5de5\u8bfe\u9632\u810f\uff0c\u4f18\u5148\u9009\u62e9\u9632\u6c34\u6b3e' },
    { name:'\u810f\u8863\u6536\u7eb3\u888b', qty:'1\u4e2a', note:'\u88c5\u6e7f\u8863\u670d\u3001\u810f\u6bdb\u5dfe\uff0c\u907f\u514d\u6c61\u67d3\u5176\u4ed6\u7269\u54c1' },
    { name:'\u9632\u6c34\u59d3\u540d\u8d34', qty:'1\u5957', note:'\u5927\u91cf\u5907\u7528\uff0c\u8d34\u5728\u6240\u6709\u7269\u54c1\u4e0a\u9632\u6b62\u6df7\u6dc6' }
  ]},
  { cat:'\u7279\u6b8a&\u836f\u54c1\u7528\u54c1', items:[
    { name:'\u8fc7\u654f/\u5e38\u5907\u836f\u7269', qty:'\u6309\u9700', note:'\u5fc5\u987b\u586b\u5199\u670d\u836f\u59d4\u6258\u4e66\u4ea4\u7ed9\u8001\u5e08\uff0c\u4e25\u7981\u81ea\u884c\u653e\u4e66\u5305' },
    { name:'\u8fc7\u654f\u5e94\u6025\u8bf4\u660e', qty:'1\u4efd', note:'\u8fc7\u654f\u5c0f\u670b\u53cb\u9700\u63d0\u524d\u51c6\u5907\uff0c\u660e\u786e\u8fc7\u654f\u539f\u548c\u5e94\u6025\u65b9\u6848' }
  ]},
  { cat:'\u7981\u6b62\u643a\u5e26\u7269\u54c1', items:[
    { name:'\u96f6\u98df\u3001\u7cd6\u679c\u3001\u996e\u6599', qty:'\u4e25\u7981', note:'\u907f\u514d\u5c0f\u670b\u53cb\u95f4\u5206\u4eab\u5f15\u53d1\u8fc7\u654f\u3001\u545b\u54b3\u98ce\u9669' },
    { name:'\u786c\u5e01\u3001\u5c0f\u73e0\u5b50\u3001\u5c16\u9510\u73a9\u5177', qty:'\u4e25\u7981', note:'\u9632\u6b62\u8bef\u98df\u3001\u5212\u4f24\u3001\u7a92\u606f\u7b49\u5b89\u5168\u4e8b\u6545' },
    { name:'\u8d35\u91cd\u9996\u9970\u3001\u7535\u5b50\u4ea7\u54c1', qty:'\u4e25\u7981', note:'\u907f\u514d\u4e22\u5931\u3001\u635f\u574f\uff0c\u5206\u6563\u5c0f\u670b\u53cb\u6ce8\u610f\u529b' }
  ]}
];

var BABY_GROWTH_GUIDE = [
  { stage:'0-1\u6708', label:'\u65b0\u751f\u513f\u671f', growth:'\u4f53\u91cd\u8f83\u51fa\u751f\u589e\u957f1-1.5kg\uff0c\u8eab\u9ad8\u589e\u957f3-5cm\uff0c\u5934\u56f4\u589e\u957f2-3cm\uff1b\u4fef\u5367\u65f6\u80fd\u62ac\u59341-2\u79d2\uff1b\u5c0f\u624b\u63e1\u62f3\u6709\u6293\u63e1\u53cd\u5c04\uff1b\u80fd\u53d1\u51fa\u7ec6\u5c0f\u5589\u97f3\uff1b\u80fd\u6ce8\u89c6\u4eba\u8138\u5bf9\u5b89\u629a\u6709\u53cd\u5e94',
    feeding:'\u4f18\u5148\u7eaf\u6bcd\u4e73\u5582\u517b\uff0c\u6309\u9700\u5582\u517b\u6bcf\u65e58-12\u6b21\u6bcf\u6b2115-30\u5206\u949f\uff1b\u914d\u65b9\u5976\u6bcf\u65e5600-800ml\u6bcf3-4\u5c0f\u65f6\u4e00\u6b21\uff1b\u51fa\u751f15\u5929\u8d77\u8865\u5145\u7ef4D3\u6bcf\u65e5400IU\u6301\u7eed\u81f31\u5c81\uff1b\u65e0\u9700\u989d\u5916\u5582\u6c34',
    care:'\u8110\u90e8\u62a4\u7406\u6bcf\u65e5\u7898\u4f0f\u6d88\u6bd2\u4fdd\u6301\u5e72\u71e5\uff1b\u6bcf\u65e5\u7761\u772016-20\u5c0f\u65f6\u4ef0\u5367\u4f4d\uff1b\u6bcf\u65e5\u6e29\u6c34\u6d17\u6fa1\u8936\u76b1\u5904\u91cd\u70b9\u6e05\u6d01\uff1b\u591a\u5bf9\u89c6\u8bf4\u8bdd\u7528\u9ed1\u767d\u5361\u8ffd\u89c6\u8bad\u7ec3',
    caution:'\u8b66\u60d5\u65b0\u751f\u513f\u9ec4\u75b82-3\u5929\u51fa\u73b07-10\u5929\u6d88\u9000\u6301\u7eed\u4e0d\u9000\u9700\u5c31\u533b\uff1b\u907f\u514d\u6447\u6643\u5b9d\u5b9d\u5934\u90e8\uff1b\u4e0d\u8981\u7ed1\u817f\u88f9\u8721\u70db\u5305\uff1b42\u5929\u505a\u7b2c\u4e00\u6b21\u4f53\u68c0' },
  { stage:'2-3\u6708', label:'\u5a74\u513f\u65e9\u671f', growth:'\u4f53\u91cd\u6bcf\u6708\u589e\u957f0.8-1.2kg\u8eab\u9ad8\u6bcf\u67082-3cm\u5934\u56f4\u6bcf\u67081.5-2cm\uff1b\u4fef\u5367\u62ac\u593445-90\u5ea6\u80fd\u8f6c\u5934\u8ffd\u89c6180\u5ea6\uff1b\u5c0f\u624b\u5f20\u5f00\u6293\u63e1\u73a9\u5177\u80fd\u6447\u6643\u62e8\u6d6a\u9f13\uff1b\u53d1\u51faa/o/e\u5143\u97f3\u4f1a\u7b11\u51fa\u58f0\uff1b\u8ba4\u51fa\u5988\u5988\u4f1a\u5fae\u7b11',
    feeding:'\u7eaf\u6bcd\u4e73\u6309\u9700\u6bcf\u65e56-8\u6b21\uff1b\u914d\u65b9\u5976\u6bcf\u65e5800-1000ml\u6bcf4\u5c0f\u65f6\u4e00\u6b21\uff1b\u7ee7\u7eed\u7ef4D3\u6bcf\u65e5400IU\uff1b\u53ef\u7ec3\u4e60\u7528\u52fa\u5b50\u559d\u6c34\u4e3a\u8f85\u98df\u505a\u51c6\u5907',
    care:'\u6bcf\u65e5\u7761\u772014-16\u5c0f\u65f6\u767d\u59292-3\u6b21\u5c0f\u7761\uff1b\u591a\u4e92\u52a8\u8bf4\u8bdd\u7528\u5f69\u8272\u73a9\u5177\u8ffd\u89c6\u8bad\u7ec3\u7ec3\u4e60\u4fef\u5367\u62ac\u5934\uff1b\u591a\u505a\u629a\u89e6\u6309\u6469\u589e\u5f3a\u5b89\u5168\u611f\uff1b\u5582\u5976\u540e\u5582\u5c11\u91cf\u6e29\u6c34\u6e05\u6d01\u53e3\u8154',
    caution:'\u907f\u514d\u542b\u7740\u4e73\u5934/\u5976\u74f6\u5165\u7761\u9632\u9f8b\u9f7f\u7a92\u606f\uff1b\u4e0d\u8981\u8fc7\u65e9\u7ad6\u62b1\u9700\u6258\u4f4f\u5934\u9888\uff1b\u73a9\u5177\u9700\u5b9a\u671f\u6d88\u6bd2\uff1b3\u4e2a\u6708\u505a\u7b2c\u4e8c\u6b21\u4f53\u68c0' },
  { stage:'4-6\u6708', label:'\u5a74\u513f\u4e2d\u671f', growth:'\u4f53\u91cd\u6bcf\u6708\u589e\u957f0.6-0.8kg\u8eab\u9ad8\u6bcf\u67082-2.5cm\u5934\u56f4\u6bcf\u67081-1.5cm\uff1b\u80fd\u719f\u7ec3\u7ffb\u8eab\u4fef\u5367\u7528\u624b\u652f\u6491\u4e0a\u534a\u8eab\u72ec\u5750\u7247\u523b\uff1b\u4f38\u624b\u6293\u63e1\u73a9\u5177\u4e24\u624b\u4f20\u9012\u80fd\u6495\u7eb8\uff1b\u53d1\u51fa\u8fde\u7eed\u5143\u97f3\u6a21\u4eff\u53d1\u97f3\uff1b\u533a\u5206\u719f\u4eba\u751f\u4eba\u7528\u7b11\u58f0\u54ed\u58f0\u8868\u8fbe\u60c5\u7eea',
    feeding:'4-6\u6708\u662f\u8f85\u98df\u6dfb\u52a0\u7a97\u53e3\u671f\u4f18\u5148\u9ad8\u94c1\u7c73\u7c89\u4ece1\u52fa\u5f00\u59cb\u9010\u6e10\u52a0\u91cf\uff1b\u7531\u5c11\u5230\u591a\u7531\u7a00\u5230\u7a20\u7531\u7ec6\u5230\u7c97\u9010\u6837\u6dfb\u52a0\u89c2\u5bdf3-5\u5929\u65e0\u8fc7\u654f\u518d\u52a0\u4e0b\u4e00\u79cd\uff1b\u5976\u91cf\u4ecd\u9700\u6bcf\u65e5800-1000ml\u8f85\u98df\u4e3a\u8865\u5145\uff1b\u7ee7\u7eed\u7ef4D3\u6bcf\u65e5400IU\uff1b\u53ef\u6dfb\u52a0\u83dc\u6ce5\u679c\u6ce5\u8089\u6ce56\u6708\u8bd5\u86cb\u9ec4',
    care:'\u6bcf\u65e5\u7761\u772013-15\u5c0f\u65f6\u767d\u59292\u6b21\u5c0f\u7761\u591c\u95f4\u8fde\u7eed6-8\u5c0f\u65f6\uff1b\u7ec3\u4e60\u72ec\u5750\u7ffb\u8eab\u7528\u73a9\u5177\u5f15\u5bfc\u722c\u884c\u591a\u8bf4\u8bdd\u8bfb\u7ed8\u672c\uff1b\u7528\u6307\u5957\u7259\u5237\u6e05\u6d01\u7259\u9f88\u840c\u7259\u540e\u5f00\u59cb\u5237\u7259\uff1b\u7528\u7845\u80f6\u9910\u5177\u9f13\u52b1\u81ea\u4e3b\u8fdb\u98df\u5f04\u810f\u4e0d\u8981\u6279\u8bc4',
    caution:'\u8f85\u98df\u6dfb\u52a0\u8fc7\u65e9(<4\u6708)\u6216\u8fc7\u665a(>6\u6708)\u5f71\u54cd\u53d1\u80b2\uff1b1\u5c81\u5185\u8f85\u98df\u4e0d\u80fd\u52a0\u76d0\u7cd6\u8702\u871c\uff1b\u4e0d\u7ed9\u6574\u9897\u575a\u679c\u8461\u8404\u679c\u51bb\u7b49\u6613\u7a92\u606f\u98df\u7269\uff1b\u5b9a\u671f\u4f53\u68c0\u76d1\u6d4b\u8eab\u9ad8\u4f53\u91cd\u5934\u56f4' },
  { stage:'7-9\u6708', label:'\u5a74\u513f\u665a\u671f', growth:'\u4f53\u91cd\u6bcf\u6708\u589e\u957f0.5-0.6kg\u8eab\u9ad8\u6bcf\u67081.5-2cm\u5934\u56f4\u6bcf\u67080.8-1cm\uff1b\u719f\u7ec3\u72ec\u5750\u4f1a\u530d\u5310\u722c\u884c\u6276\u7269\u7ad9\u7acb\uff1b\u7528\u62c7\u6307\u98df\u6307\u634f\u5c0f\u7269\u4f53\u4f1a\u62cd\u624b\u6325\u624b\u80fd\u5f00\u62bd\u5c49\uff1b\u53d1\u51faba/ma/da\u8f85\u97f3\u6a21\u4eff\u52a8\u4f5c\u58f0\u97f3\uff1b\u4f1a\u8ba4\u751f\u542c\u61c2\u81ea\u5df1\u540d\u5b57\u7528\u52a8\u4f5c\u8868\u8fbe\u9700\u6c42',
    feeding:'\u5976\u91cf\u6bcf\u65e5600-800ml\u8f85\u98df\u6bcf\u65e52\u6b21\uff1b\u8d28\u5730\u4ece\u6ce5\u7cca\u8fc7\u6e21\u5230\u672b\u72b6\u5c0f\u9897\u7c92\u953b\u70bc\u5480\u56bc\uff1b\u53ef\u6dfb\u52a0\u788e\u83dc\u8089\u672b\u70c2\u7ca5\u70c2\u9762\u6761\u5c1d\u8bd5\u624b\u6307\u98df\u7269\uff08\u84b8\u7cd5\u80e1\u841d\u535c\u6761\uff09\uff1b\u7ee7\u7eed\u7ef4D3\u6bcf\u65e5400IU\uff1b\u53ef\u8bd5\u9178\u5976\u5976\u916a\u8865\u9499\u548c\u86cb\u767d\u8d28',
    care:'\u6bcf\u65e5\u7761\u772012-14\u5c0f\u65f6\u767d\u59291-2\u6b21\u5c0f\u7761\u591c\u95f4\u8fde\u7eed8-10\u5c0f\u65f6\uff1b\u7ec3\u4e60\u722c\u884c\u6276\u7ad9\u7528\u79ef\u6728\u953b\u70bc\u624b\u773c\u534f\u8c03\u591a\u4e92\u52a8\u6e38\u620f\uff1b\u505a\u597d\u5b89\u5168\u9632\u62a4\u63d2\u5ea7\u76d6\u9632\u62a4\u5c16\u9510\u7269\u54c1\u6536\u8d77\uff1b\u7528\u8f6f\u6bdb\u7259\u5237\u5237\u7259\u65e9\u665a\u5404\u4e00\u6b21\u996d\u540e\u6f31\u53e3',
    caution:'\u4f1a\u722c\u540e\u5fc5\u987b\u5168\u7a0b\u4e13\u4eba\u770b\u62a4\u907f\u514d\u5760\u5e8a\u8bef\u98df\u5f02\u7269\uff1b\u4e0d\u7528\u5b66\u6b65\u8f66\u5f71\u54cd\u817f\u90e8\u53d1\u80b2\u548c\u5e73\u8861\u611f\uff1b\u907f\u514d\u957f\u65f6\u95f4\u770b\u7535\u89c6\u624b\u673a\u5f71\u54cd\u89c6\u529b\uff1b9\u6708\u4f53\u68c0\u8bc4\u4f30\u53d1\u80b2\u5fc5\u8981\u65f6\u67e5\u8840\u5e38\u89c4\u770b\u662f\u5426\u8d2b\u8840' },
  { stage:'10-12\u6708', label:'\u5e7c\u513f\u524d\u671f', growth:'\u4f53\u91cd\u6bcf\u6708\u589e\u957f0.3-0.5kg\u8eab\u9ad8\u6bcf\u67081-1.5cm\u5934\u56f4\u6bcf\u67080.5cm\uff1b\u6276\u7269\u8d70\u72ec\u7ad9\u7247\u523b12\u6708\u5de6\u53f3\u80fd\u72ec\u8d70\u51e0\u6b65\u4f1a\u8e72\u7ad9\uff1b\u80fd\u6d82\u9e26\u7ffb\u4e66\u628a\u79ef\u6728\u653e\u8fdb\u76d2\u5b50\u4f1a\u7528\u52fa\u5b50\u5403\u996d\uff1b\u80fd\u8bf41-2\u4e2a\u6709\u610f\u4e49\u7684\u8bcd\uff08\u7238\u7238/\u5988\u5988\uff09\u542c\u61c2\u7b80\u5355\u6307\u4ee4\uff1b\u548c\u5c0f\u670b\u53cb\u4e92\u52a8\u5206\u4eab\u73a9\u5177\u8868\u8fbe\u559c\u6012\u54c0\u4e50',
    feeding:'\u5976\u91cf\u6bcf\u65e5500-600ml\u8f85\u98df\u6bcf\u65e53\u6b21\u9010\u6e10\u5411\u6210\u4eba\u996e\u98df\u8fc7\u6e21\uff1b\u8d28\u5730\u8fc7\u6e21\u5230\u5c0f\u4e01\u72b6\u5757\u72b6\u953b\u70bc\u5480\u56bc\u541e\u54bd\uff1b\u53ef\u6dfb\u52a0\u8f6f\u996d\u9762\u6761\u5207\u788e\u83dc\u8089\u8bd5\u5168\u86cb\u9c7c\u867e\uff1b\u7ee7\u7eed\u7ef4D3\u6bcf\u65e5400IU\u53ef\u8865\u9499\u5242\uff1b\u9f13\u52b1\u81ea\u4e3b\u8fdb\u98df\u7ec3\u4e60\u7528\u52fa\u5b50\u676f\u5b50\u559d\u6c34',
    care:'\u6bcf\u65e5\u7761\u772011-13\u5c0f\u65f6\u767d\u59291\u6b21\u5c0f\u7761\u591c\u95f4\u8fde\u7eed10-12\u5c0f\u65f6\uff1b\u7ec3\u4e60\u8d70\u8def\u8e72\u7ad9\u7528\u7ed8\u672c\u79ef\u6728\u953b\u70bc\u8ba4\u77e5\u624b\u773c\u534f\u8c03\u591a\u8bf4\u8bdd\uff1b\u505a\u597d\u5b89\u5168\u9632\u62a4\u907f\u514d\u63a5\u89e6\u70ed\u6c34\u7535\u6e90\u5c16\u9510\u7269\u54c1\uff1b\u5efa\u7acb\u7b80\u5355\u89c4\u5219\u5f15\u5bfc\u7528\u8bed\u8a00\u8868\u8fbe\u9700\u6c42\u4e0d\u8981\u7528\u54ed\u95f9\u89e3\u51b3\u95ee\u9898',
    caution:'1\u5c81\u5185\u5976\u91cf\u4e0d\u80fd\u4f4e\u4e8e500ml\u907f\u514d\u8f85\u98df\u8fc7\u591a\u5f71\u54cd\u5976\u91cf\uff1b\u4e0d\u7ed9\u6cb9\u70b8\u814c\u5236\u8f9b\u8fa3\u98df\u7269\u996e\u98df\u6e05\u6de1\uff1b\u9f13\u52b1\u591a\u722c\u884c\u8d70\u8def\u953b\u70bc\u5927\u8fd0\u52a8\uff1b1\u5c81\u5fc5\u987b\u4f53\u68c0\u8bc4\u4f30\u751f\u957f\u53d1\u80b2\u63a5\u79cd\u75ab\u82d7' }
];

var EARLY_EDU_CARDS = [
  { icon:'\u1f440', title:'\u9ed1\u767d\u5361\u8ffd\u89c6', desc:'0-3\u6708\uff1a\u5728\u5b9d\u5b9d\u773c\u524d20-30cm\u79fb\u52a8\u9ed1\u767d\u5361\uff0c\u8bad\u7ec3\u89c6\u89c9\u8ffd\u8e2a', age:'0-3\u6708' },
  { icon:'\u1f932', title:'\u6293\u63e1\u7ec3\u4e60', desc:'2-4\u6708\uff1a\u628a\u6447\u94c3/\u5c0f\u73a9\u5177\u653e\u8fdb\u5b9d\u5b9d\u624b\u5fc3\uff0c\u7ec3\u4e60\u6293\u63e1\u548c\u677e\u5f00', age:'2-4\u6708' },
  { icon:'\u1f5e3\ufe0f', title:'\u9762\u5bf9\u9762\u8bf4\u8bdd', desc:'0-6\u6708\uff1a\u591a\u548c\u5b9d\u5b9d\u8bf4\u8bdd\u3001\u6a21\u4eff\u4ed6\u7684\u58f0\u97f3\uff0c\u4fc3\u8fdb\u8bed\u8a00\u53d1\u80b2', age:'0-6\u6708' },
  { icon:'\u1f931', title:'\u629a\u89e6\u6309\u6469', desc:'0-6\u6708\uff1a\u6bcf\u5929\u629a\u89e610-15\u5206\u949f\uff0c\u589e\u5f3a\u5b89\u5168\u611f\u548c\u4eb2\u5b50\u8054\u7ed3', age:'0-6\u6708' },
  { icon:'\u1f3cb\ufe0f', title:'\u4fef\u5367\u62ac\u5934', desc:'1-4\u6708\uff1a\u6bcf\u5929\u8ba9\u5b9d\u5b9d\u8db4\u77402-3\u6b21\uff0c\u6bcf\u6b211-5\u5206\u949f\uff0c\u953b\u70bc\u9888\u90e8\u80cc\u90e8', age:'1-4\u6708' },
  { icon:'\u1f3b5', title:'\u542c\u89c9\u523a\u6fc0', desc:'0-12\u6708\uff1a\u6447\u94c3\u3001\u97f3\u4e50\u76d2\u3001\u81ea\u7136\u58f0\u97f3\uff0c\u8bad\u7ec3\u542c\u89c9\u8fa8\u522b', age:'0-12\u6708' },
  { icon:'\u1f4d6', title:'\u7ed8\u672c\u9605\u8bfb', desc:'4-12\u6708\uff1a\u6bcf\u5929\u8bfb\u7ed8\u672c10\u5206\u949f\uff0c\u57f9\u517b\u9605\u8bfb\u5174\u8da3\u548c\u8bed\u8a00\u80fd\u529b', age:'4-12\u6708' },
  { icon:'\u1fa80', title:'\u7ffb\u8eab\u7ec3\u4e60', desc:'4-7\u6708\uff1a\u7528\u73a9\u5177\u5f15\u5bfc\u5b9d\u5b9d\u7ffb\u8eab\uff0c\u4ece\u4ef0\u5367\u5230\u4fef\u5367', age:'4-7\u6708' },
  { icon:'\u1f9f8', title:'\u4f20\u9012\u73a9\u5177', desc:'5-8\u6708\uff1a\u5f15\u5bfc\u5b9d\u5b9d\u4e24\u624b\u95f4\u4f20\u9012\u73a9\u5177\uff0c\u7ec3\u4e60\u53cc\u624b\u534f\u8c03', age:'5-8\u6708' },
  { icon:'\u1f445', title:'\u5c1d\u5473\u6e38\u620f', desc:'6-12\u6708\uff1a\u8f85\u98df\u65f6\u8ba9\u5b9d\u5b9d\u95fb\u3001\u6478\u3001\u5c1d\u4e0d\u540c\u98df\u6750\u5473\u9053', age:'6-12\u6708' },
  { icon:'\u1faf3', title:'\u634f\u53d6\u7ec3\u4e60', desc:'8-12\u6708\uff1a\u8ba9\u5b9d\u5b9d\u7528\u62c7\u6307\u98df\u6307\u634f\u5c0f\u6eb6\u8c46/\u9992\u5934\u4e01\uff0c\u7ec3\u4e60\u7cbe\u7ec6\u52a8\u4f5c', age:'8-12\u6708' },
  { icon:'\u1f9e9', title:'\u5bb9\u5668\u6e38\u620f', desc:'9-12\u6708\uff1a\u628a\u73a9\u5177\u653e\u8fdb\u62ff\u51fa\u5bb9\u5668\uff0c\u7406\u89e3"\u91cc\u5916"\u6982\u5ff5', age:'9-12\u6708' },
  { icon:'\u1f44b', title:'\u6325\u624b\u518d\u89c1', desc:'9-12\u6708\uff1a\u6559\u5b9d\u5b9d\u6325\u624b\u3001\u62cd\u624b\uff0c\u5efa\u7acb\u624b\u52bf\u6c9f\u901a', age:'9-12\u6708' },
  { icon:'\u1f6b6', title:'\u6276\u8d70\u7ec3\u4e60', desc:'10-12\u6708\uff1a\u6276\u7740\u5b9d\u5b9d\u814b\u4e0b\u6216\u624b\uff0c\u7ec3\u4e60\u7ad9\u7acb\u548c\u8fc8\u6b65', age:'10-12\u6708' }
];

var BABY_MUSIC_REC = [
  { icon:'\u1f319', title:'\u767d\u566a\u97f3\u00b7\u96e8\u58f0', desc:'\u6a21\u62df\u5b50\u5bab\u73af\u5883\uff0c\u5e2e\u52a90-3\u6708\u5b9d\u5b9d\u5b89\u9759\u5165\u7761', source:'\u641c\u7d22\u300c\u767d\u566a\u97f3\u96e8\u58f0\u300d' },
  { icon:'\u1f30a', title:'\u767d\u566a\u97f3\u00b7\u6d77\u6d6a', desc:'\u89c4\u5f8b\u7684\u6f6e\u6c50\u58f0\uff0c\u5b89\u629a\u54ed\u95f9\uff0c\u9002\u5408\u54c4\u7761', source:'\u641c\u7d22\u300cbaby ocean sound\u300d' },
  { icon:'\u1f525', title:'\u767d\u566a\u97f3\u00b7\u7bdd\u706b', desc:'\u6e29\u6696\u7684\u567c\u556a\u58f0\uff0c\u8425\u9020\u5b89\u5168\u611f', source:'\u641c\u7d22\u300cfireplace white noise\u300d' },
  { icon:'\u1f3b5', title:'\u83ab\u624e\u7279\u6548\u5e94', desc:'\u83ab\u624e\u7279\u594f\u9e23\u66f2\uff0c\u7814\u7a76\u8868\u660e\u6709\u52a9\u4e8e\u5927\u8111\u53d1\u80b2', source:'\u641c\u7d22\u300cMozart for babies\u300d' },
  { icon:'\u1f3bb', title:'\u53e4\u5178\u6447\u7bee\u66f2', desc:'\u52c3\u62c9\u59c6\u65af\u3001\u8096\u90a6\u6447\u7bee\u66f2\uff0c\u7ecf\u5178\u54c4\u7761\u97f3\u4e50', source:'\u641c\u7d22\u300cbaby lullaby classical\u300d' },
  { icon:'\u1f941', title:'\u81ea\u7136\u6253\u51fb\u4e50', desc:'\u6728\u9c7c\u3001\u6c99\u9524\u7b49\u67d4\u548c\u6253\u51fb\u4e50\uff0c\u8282\u594f\u611f\u542f\u8499', source:'\u641c\u7d22\u300cbaby percussion\u300d' },
  { icon:'\u1f3b6', title:'\u7ae5\u58f0\u5408\u5531', desc:'\u7eaf\u51c0\u7684\u7ae5\u58f0\u6f14\u5531\uff0c\u57f9\u517b\u97f3\u4e50\u611f\u53d7\u529b', source:'\u641c\u7d22\u300cchildren choir\u300d' },
  { icon:'\u1f3b9', title:'\u94a2\u7434\u8f7b\u97f3\u4e50', desc:'\u8212\u7f13\u94a2\u7434\u66f2\uff0c\u9002\u5408\u73a9\u800d\u548c\u9605\u8bfb\u65f6\u80cc\u666f', source:'\u641c\u7d22\u300cbaby piano music\u300d' }
];

var BABY_FOOD_PLAN = [
  { stage:'4-6\u6708', label:'\u8f85\u98df\u521d\u671f\uff08\u7b2c1-5\u5929\uff09', items:[
    { day:'\u7b2c1\u5929', food:'\u9ad8\u94c1\u7c73\u7c89\uff081\u52fa\u5151\u6210\u7a00\u7cca\uff09', note:'\u4e0a\u5348\u5582\uff0c\u89c2\u5bdf\u8fc7\u654f' },
    { day:'\u7b2c2\u5929', food:'\u9ad8\u94c1\u7c73\u7c89\uff082\u52fa\uff09', note:'\u65e0\u8fc7\u654f\u53ef\u52a0\u91cf' },
    { day:'\u7b2c3\u5929', food:'\u9ad8\u94c1\u7c73\u7c89\uff083\u52fa\u7a0d\u7a20\uff09', note:'\u9010\u6e10\u52a0\u7a20\u5ea6' },
    { day:'\u7b2c4\u5929', food:'\u7c73\u7c89+\u80e1\u841d\u535c\u6ce5\uff081\u5c0f\u52fa\uff09', note:'\u65b0\u98df\u6750\u4e0a\u5348\u52a0\u89c2\u5bdf3\u5929' },
    { day:'\u7b2c5\u5929', food:'\u7c73\u7c89+\u80e1\u841d\u535c\u6ce5\uff08\u52a0\u91cf\uff09', note:'\u65e0\u8fc7\u654f\u7ee7\u7eed' }
  ]},
  { stage:'4-6\u6708', label:'\u8f85\u98df\u521d\u671f\uff08\u7b2c6-10\u5929\uff09', items:[
    { day:'\u7b2c6\u5929', food:'\u7c73\u7c89+\u5357\u74dc\u6ce5', note:'\u65b0\u98df\u6750\u66ff\u6362\u80e1\u841d\u535c' },
    { day:'\u7b2c7\u5929', food:'\u7c73\u7c89+\u5357\u74dc\u6ce5', note:'\u89c2\u5bdf\u8fc7\u654f\u53cd\u5e94' },
    { day:'\u7b2c8\u5929', food:'\u7c73\u7c89+\u82f9\u679c\u6ce5', note:'\u6c34\u679c\u6ce5\u521d\u6b21\u5c1d\u8bd5' },
    { day:'\u7b2c9\u5929', food:'\u7c73\u7c89+\u82f9\u679c\u6ce5', note:'\u65e0\u8fc7\u654f\u7ee7\u7eed' },
    { day:'\u7b2c10\u5929', food:'\u7c73\u7c89+\u68a8\u6ce5', note:'\u66f4\u6362\u6c34\u679c' }
  ]},
  { stage:'6-8\u6708', label:'\u8f85\u98df\u4e2d\u671f', items:[
    { day:'\u6bcf\u65e52\u9910', food:'\u7c73\u7c89/\u7ca5+\u83dc\u6ce5+\u679c\u6ce5+\u86cb\u9ec4', note:'\u4ece\u6ce5\u8fc7\u6e21\u5230\u672b\u72b6' },
    { day:'\u8089\u7c7b\u6dfb\u52a0', food:'\u9e21\u80f8\u8089\u6ce5\u2192\u732a\u8089\u6ce5\u2192\u732a\u809d\u6ce5', note:'\u6bcf\u79cd\u89c2\u5bdf3\u5929\u8865\u94c1\u8865\u86cb\u767d' },
    { day:'\u852c\u83dc\u7c7b', food:'\u83e0\u83dc\u3001\u897f\u5170\u82b1\u3001\u571f\u8c46\u3001\u7ea2\u85af\u6ce5', note:'\u8f6e\u6362\u642d\u914d' },
    { day:'\u6c34\u679c\u7c7b', food:'\u9999\u8549\u3001\u82f9\u679c\u3001\u68a8\u3001\u725b\u6cb9\u679c\u6ce5', note:'\u4e0d\u8fc7\u654f\u53ef\u6df7\u642d' },
    { day:'\u4e3b\u98df\u7c7b', food:'\u5f3a\u5316\u94c1\u7c73\u7c89\u3001\u70c2\u7ca5\u3001\u8f6f\u70c2\u9762\u6761', note:'\u9010\u6e10\u589e\u52a0\u7a20\u5ea6' }
  ]},
  { stage:'8-10\u6708', label:'\u8f85\u98df\u540e\u671f', items:[
    { day:'\u6bcf\u65e52-3\u9910', food:'\u8f6f\u996d+\u788e\u83dc\u8089\u672b+\u86cb\u9ec4+\u6c34\u679c', note:'\u4ece\u672b\u72b6\u8fc7\u6e21\u5230\u5c0f\u9897\u7c92' },
    { day:'\u624b\u6307\u98df\u7269', food:'\u84b8\u7cd5\u6761\u3001\u80e1\u841d\u535c\u6761\u3001\u9992\u5934\u7247', note:'\u953b\u70bc\u81ea\u4e3b\u8fdb\u98df' },
    { day:'\u86cb\u767d\u8d28', food:'\u5168\u86cb\u3001\u9c7c\u8089\u3001\u9e21\u8089\u672b\u3001\u8c46\u8150', note:'\u6ce8\u610f\u9c7c\u523a\u548c\u8fc7\u654f' },
    { day:'\u4e3b\u98df\u7c7b', food:'\u8f6f\u996d\u3001\u70c2\u9762\u6761\u3001\u5c0f\u9984\u9968', note:'\u63a5\u8fd1\u6210\u4eba\u8d28\u5730' },
    { day:'\u5976\u91cf', food:'\u6bcf\u65e5600-800ml', note:'\u5976\u4ecd\u662f\u4e3b\u98df' }
  ]},
  { stage:'10-12\u6708', label:'\u8f85\u98df\u672b\u671f', items:[
    { day:'\u6bcf\u65e53\u9910', food:'\u8f6f\u996d+\u83dc\u8089+\u6c34\u679c', note:'\u5411\u6210\u4eba\u996e\u98df\u8fc7\u6e21' },
    { day:'\u4e3b\u98df', food:'\u8f6f\u996d\u3001\u9762\u6761\u3001\u5c0f\u997a\u5b50\u3001\u9992\u5934', note:'\u5757\u72b6\u953b\u70bc\u5480\u56bc' },
    { day:'\u83dc\u54c1', food:'\u7092\u788e\u83dc\u3001\u84b8\u86cb\u7fb9\u3001\u8089\u4e38\u3001\u9c7c\u6bb5', note:'\u5c11\u76d0\u5c11\u7cd6\u6e05\u6de1' },
    { day:'\u52a0\u9910', food:'\u9178\u5976\u3001\u6c34\u679c\u5757\u3001\u5c0f\u997c\u5e72', note:'2\u6b21\u52a0\u9910' },
    { day:'\u5976\u91cf', food:'\u6bcf\u65e5500-600ml', note:'\u4e0d\u80fd\u4f4e\u4e8e500ml' }
  ]}
];

var DEFAULT_LEARNING_MODULES = [
  { id:1, icon:'\u1f524', name:'\u8bc6\u5b57\u542f\u8499', desc:'\u5e38\u7528\u5b57\u3001\u8c61\u5f62\u5b57\u3001\u751f\u6d3b\u5b57' },
  { id:2, icon:'\u1f522', name:'\u6570\u5b66\u601d\u7ef4', desc:'\u6570\u6570\u3001\u5206\u7c7b\u3001\u7b80\u5355\u52a0\u51cf' },
  { id:3, icon:'\u1f3a8', name:'\u7f8e\u672f\u521b\u610f', desc:'\u6d82\u9e26\u3001\u624b\u5de5\u3001\u8272\u5f69' },
  { id:4, icon:'\u1f3b5', name:'\u97f3\u4e50\u5f8b\u52a8', desc:'\u5531\u6b4c\u3001\u8282\u594f\u3001\u5f8b\u52a8' },
  { id:5, icon:'\u1f3c3', name:'\u8fd0\u52a8\u4f53\u80fd', desc:'\u8dd1\u6b65\u3001\u8df3\u8dc3\u3001\u5e73\u8861' },
  { id:6, icon:'\u1f9e9', name:'\u903b\u8f91\u601d\u7ef4', desc:'\u62fc\u56fe\u3001\u79ef\u6728\u3001\u627e\u89c4\u5f8b' },
  { id:7, icon:'\u1f310', name:'\u82f1\u8bed\u542f\u8499', desc:'\u82f1\u6587\u513f\u6b4c\u3001\u52a8\u753b\u7247\u3001\u53e3\u8bed' },
  { id:8, icon:'\u1f4da', name:'\u7ed8\u672c\u9605\u8bfb', desc:'3-6\u5c81\u7ed8\u672c\u3001\u7eaa\u5f55\u7247\u3001\u81ea\u6211\u4fdd\u62a4' }
];

var LEARNING_RESOURCES = {
  1: [
    { type:'\u7ee8\u672c', title:'\u300a\u5c0f\u8c61\u6c49\u5b57\u300b\u5b57\u5361', desc:'3-6\u5c81\u5fc5\u5907\u8ba4\u5b57\u5361\uff0c\u4ece\u751f\u6d3b\u5e38\u89c1\u5b57\u5f00\u59cb', tag:'\u5fc5\u5165', link:'https://www.xiaohongshu.com/search_result?keyword=%E5%B0%8F%E8%B1%A1%E6%B1%89%E5%AD%97%E5%8D%A1' },
    { type:'\u7ee8\u672c', title:'\u300a\u56db\u4e94\u5feb\u8bfb\u300b', desc:'4-5\u5c81\u7ecf\u5178\u8bc6\u5b57\u6559\u6750\uff0c\u5faa\u5e8f\u6e10\u8fdb', link:'https://www.xiaohongshu.com/search_result?keyword=%E5%9B%9B%E4%BA%94%E5%BF%AB%E8%AF%BB' },
    { type:'\u7ee8\u672c', title:'\u300a\u5b66\u524d600\u5b57\u300b', desc:'\u751f\u6d3b\u5e38\u7528\u5b57600\u4e2a\uff0c\u5206\u4e3b\u9898\u5b66\u4e60', link:'https://www.xiaohongshu.com/search_result?keyword=%E5%AD%A6%E5%89%8D600%E5%AD%97' },
    { type:'\u73a9\u6cd5', title:'\u8def\u4e0a\u8bc6\u5b57\u6e38\u620f', desc:'\u8d70\u5728\u8def\u4e0a\u6307\u7740\u62db\u724c\u3001\u8f66\u724c\u3001\u5e97\u540d\u8ba4\u5b57', link:'https://www.xiaohongshu.com/search_result?keyword=%E8%B7%AF%E4%B8%8A%E8%AF%86%E5%AD%97%E6%B8%B8%E6%88%8F' },
    { type:'\u73a9\u6cd5', title:'\u8d34\u5b57\u6e38\u620f', desc:'\u628a\u5b57\u5361\u8d34\u5728\u5bf9\u5e94\u7269\u54c1\u4e0a\uff08\u95e8\u3001\u684c\u3001\u5e8a\uff09', link:'https://www.xiaohongshu.com/search_result?keyword=%E8%B4%B4%E5%AD%97%E6%B8%B8%E6%88%8F%E5%AD%A9%E5%AD%90' },
    { type:'APP', title:'\u6d2a\u6069\u8bc6\u5b57', desc:'\u514d\u8d39\u7248\u591f\u7528\uff0c\u8c61\u5f62\u5b57\u52a8\u753b\u5f62\u8c61\u751f\u52a8', link:'https://www.xiaohongshu.com/search_result?keyword=%E6%B4%AA%E6%81%A9%E8%AF%86%E5%AD%97' },
    { type:'APP', title:'\u609f\u7a7a\u8bc6\u5b57', desc:'\u897f\u6e38\u8bb0\u95f7\u5173\u8bb0\u5b57\uff0c\u8da3\u5473\u6027\u5f3a', link:'https://www.xiaohongshu.com/search_result?keyword=%E6%82%9F%E7%A9%BA%E8%AF%86%E5%AD%97' },
    { type:'\u513f\u6b4c', title:'\u300a\u5b66\u5b57\u6b4c\u300b', desc:'\u201c\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u201d\uff0c\u8fb9\u5531\u8fb9\u8ba4\u6570', link:'https://search.bilibili.com/all?keyword=%E5%AD%A6%E5%AD%97%E6%AD%8C%E5%84%BF%E7%AB%A5' }
  ],
  2: [
    { type:'\u7ee8\u672c', title:'\u300a\u597d\u73a9\u7684\u6570\u5b66\u7ee8\u672c\u300b', desc:'\u4ece\u751f\u6d3b\u4e2d\u53d1\u73b0\u6570\u5b66\uff1a\u6570\u82f9\u679c\u3001\u5206\u997c\u5e72', link:'https://www.xiaohongshu.com/search_result?keyword=%E5%A5%BD%E7%8E%A9%E7%9A%84%E6%95%B0%E5%AD%A6%E7%BB%98%E6%9C%AC' },
    { type:'\u7ee8\u672c', title:'\u300a\u8d70\u8fdb\u5947\u5999\u7684\u6570\u5b66\u4e16\u754c\u300b', desc:'\u5b89\u91ce\u5149\u96c5\u7ecf\u5178\uff0c\u7528\u6e38\u620f\u7406\u89e3\u6570\u5b66', link:'https://www.xiaohongshu.com/search_result?keyword=%E5%AE%89%E9%87%8E%E5%85%89%E9%9B%85%E6%95%B0%E5%AD%A6%E4%B8%96%E7%95%8C' },
    { type:'\u73a9\u6cd5', title:'\u6570\u697c\u68af', desc:'\u4e0a\u4e0b\u697c\u68af\u65f6\u6570\u53f0\u9636\uff0c\u5efa\u7acb\u6570\u5b57\u6982\u5ff5', link:'https://www.xiaohongshu.com/search_result?keyword=%E6%95%B0%E6%A5%BC%E6%A2%AF%E5%AD%A9%E5%AD%90%E6%95%B0%E5%AD%A6' },
    { type:'\u73a9\u6cd5', title:'\u5206\u7c7b\u6e38\u620f', desc:'\u628a\u73a9\u5177\u6309\u989c\u8272/\u5f62\u72b6/\u5927\u5c0f\u5206\u7c7b', link:'https://www.xiaohongshu.com/search_result?keyword=%E5%88%86%E7%B1%BB%E6%B8%B8%E6%88%8F%E5%AD%A9%E5%AD%90' },
    { type:'\u73a9\u6cd5', title:'\u6bd4\u5927\u5c0f\u591a\u5c11', desc:'\u7528\u79ef\u6728\u3001\u997c\u5e72\u6bd4\u8f83\u591a\u548c\u5c11\u3001\u9ad8\u548c\u77ee', link:'https://www.xiaohongshu.com/search_result?keyword=%E6%AF%94%E5%A4%A7%E5%B0%8F%E5%A4%9A%E5%B0%91%E6%95%B0%E5%AD%A6' },
    { type:'\u73a9\u5177', title:'\u6570\u68d2\uff081-10\uff09', desc:'\u8499\u53f0\u68ad\u5229\u7ecf\u5178\u6559\u5177\uff0c\u7406\u89e3\u6570\u5b57\u548c\u6570\u91cf', link:'https://www.xiaohongshu.com/search_result?keyword=%E6%95%B0%E6%A3%92%E8%92%99%E5%8F%B0%E6%A2%AD%E5%88%A9' },
    { type:'\u73a9\u5177', title:'\u6570\u5b57\u62fc\u56fe', desc:'\u6728\u8d28\u6570\u5b57\u62fc\u56fe\uff0c1-10\u6570\u5b57\u4e0e\u56fe\u5f62\u5bf9\u5e94', link:'https://www.xiaohongshu.com/search_result?keyword=%E6%95%B0%E5%AD%97%E6%8B%BC%E5%9B%BE%E6%9C%A8%E8%B4%A8' },
    { type:'APP', title:'\u90fd\u90fd\u6570\u5b66', desc:'\u6bcf\u592910\u5206\u949f\uff0c\u5206\u7ea7\u6570\u5b66\u542f\u8499', link:'https://www.xiaohongshu.com/search_result?keyword=%E9%83%BD%E9%83%BD%E6%95%B0%E5%AD%A6' }
  ],
  3: [
    { type:'\u7ee8\u672c', title:'\u300a\u5c0f\u84dd\u548c\u5c0f\u9ec4\u300b', desc:'\u674e\u6b27\u00b7\u674e\u5965\u5c3c\u7ecf\u5178\uff0c\u8ba4\u8bc6\u8272\u5f69\u548c\u53cb\u8c0a', link:'https://www.xiaohongshu.com/search_result?keyword=%E5%B0%8F%E8%93%9D%E5%92%8C%E5%B0%8F%E9%BB%84%E7%BB%98%E6%9C%AC' },
    { type:'\u7ee8\u672c', title:'\u300a\u70b9\u70b9\u70b9\u300b', desc:'\u4f1a\u53d8\u9b54\u672f\u7684\u7ee8\u672c\uff0c\u6fc0\u53d1\u521b\u9020\u529b', link:'https://www.xiaohongshu.com/search_result?keyword=%E7%82%B9%E7%82%B9%E7%82%B9%E7%BB%98%E6%9C%AC' },
    { type:'\u73a9\u6cd5', title:'\u624b\u6307\u753b', desc:'\u7528\u624b\u6307\u8638\u989c\u6599\u753b\u5706\u70b9\u3001\u7ebf\u6761\u3001\u56fe\u6848', link:'https://www.xiaohongshu.com/search_result?keyword=%E6%89%8B%E6%8C%87%E7%94%BB%E5%AD%A9%E5%AD%90' },
    { type:'\u73a9\u6cd5', title:'\u6495\u7eb8\u62fc\u8d34', desc:'\u628a\u5f69\u8272\u7eb8\u6495\u6210\u5404\u79cd\u5f62\u72b6\u7c98\u8d34\u6210\u753b', link:'https://www.xiaohongshu.com/search_result?keyword=%E6%92%95%E7%BA%B8%E6%8B%BC%E8%B4%B4%E5%AD%A9%E5%AD%90' },
    { type:'\u73a9\u6cd5', title:'\u81ea\u7136\u7d20\u6750\u753b', desc:'\u7528\u6811\u53f6\u3001\u6811\u679d\u3001\u77f3\u5934\u6446\u753b', link:'https://www.xiaohongshu.com/search_result?keyword=%E8%87%AA%E7%84%B6%E7%B4%A0%E6%9D%90%E7%94%BB%E5%AD%A9%E5%AD%90' },
    { type:'\u73a9\u5177', title:'\u6c34\u5f69\u7b14\u5957\u88c5', desc:'12\u8272\u53ef\u6c34\u6d17\u6c34\u5f69\u7b14\uff0c\u5b89\u5168\u4e0d\u810f\u624b', link:'https://www.xiaohongshu.com/search_result?keyword=%E5%8F%AF%E6%B0%B4%E6%B4%97%E6%B0%B4%E5%BD%A9%E7%AC%94%E5%84%BF%E7%AB%A5' },
    { type:'\u73a9\u5177', title:'\u5f69\u8272\u9ecf\u571f', desc:'\u6a61\u76ae\u6ce5/\u8d85\u8f7b\u9ecf\u571f\uff0c\u953b\u70bc\u624b\u90e8\u7cbe\u7ec6\u52a8\u4f5c', link:'https://www.xiaohongshu.com/search_result?keyword=%E8%B6%85%E8%BD%BB%E9%BB%8F%E5%9C%9F%E5%84%BF%E7%AB%A5' },
    { type:'\u73a9\u5177', title:'\u513f\u7ae5\u5b89\u5168\u526a\u5200\u5957\u88c5', desc:'\u7ec3\u4e60\u526a\u7eb8\uff0c\u953b\u70bc\u624b\u773c\u534f\u8c03', link:'https://www.xiaohongshu.com/search_result?keyword=%E5%84%BF%E7%AB%A5%E5%AE%89%E5%85%A8%E5%89%AA%E5%88%80' }
  ],
  4: [
    { type:'\u513f\u6b4c', title:'\u300a\u5c0f\u661f\u661f\u300b', desc:'\u5168\u4e16\u754c\u6700\u7ecf\u5178\u7684\u7ae5\u8c23\uff0c\u7b80\u5355\u4e0a\u53e3', link:'https://search.bilibili.com/all?keyword=%E5%B0%8F%E6%98%9F%E6%98%9F%E5%84%BF%E6%AD%8C' },
    { type:'\u513f\u6b4c', title:'\u300a\u4e24\u53ea\u8001\u864e\u300b', desc:'\u8282\u594f\u611f\u5f3a\uff0c\u9002\u5408\u6253\u51fb\u4e50\u4f34\u594f', link:'https://search.bilibili.com/all?keyword=%E4%B8%A4%E5%8F%AA%E8%80%81%E8%99%8E%E5%84%BF%E6%AD%8C' },
    { type:'\u513f\u6b4c', title:'\u300a\u8309\u8389\u82b1\u300b', desc:'\u4e2d\u56fd\u4f20\u7edf\u6c11\u6b4c\uff0c\u4f18\u7f8e\u52a8\u542c', link:'https://search.bilibili.com/all?keyword=%E8%8C%89%E8%8E%89%E8%8A%B1%E5%84%BF%E6%AD%8C' },
    { type:'\u513f\u6b4c', title:'\u300a\u4e0a\u5b66\u6b4c\u300b', desc:'\u201c\u592a\u9633\u5f53\u7a7a\u7167\uff0c\u82b1\u513f\u5bf9\u6211\u7b11\u201d', link:'https://search.bilibili.com/all?keyword=%E4%B8%8A%E5%AD%A6%E6%AD%8C%E5%84%BF%E7%AB%A5' },
    { type:'\u73a9\u6cd5', title:'\u6572\u51fb\u8282\u594f', desc:'\u8ddf\u7740\u6b4c\u66f2\u62cd\u624b\u3001\u6572\u7897\u3001\u6572\u79ef\u6728', link:'https://www.xiaohongshu.com/search_result?keyword=%E6%95%B2%E5%87%BB%E8%8A%82%E5%A5%8F%E5%AD%A9%E5%AD%90' },
    { type:'\u73a9\u6cd5', title:'\u97f3\u4e50\u5f8b\u52a8', desc:'\u542c\u97f3\u4e50\u6a21\u4eff\u52a8\u4f5c\uff1a\u5c0f\u9e1f\u98de\u3001\u5c0f\u9c7c\u6cf3', link:'https://www.xiaohongshu.com/search_result?keyword=%E9%9F%B3%E4%B9%90%E5%BE%8B%E5%8A%A8%E5%AD%A9%E5%AD%90' },
    { type:'\u73a9\u5177', title:'\u513f\u7ae5\u6253\u51fb\u4e50\u5668', desc:'\u6c99\u9524\u3001\u6728\u9c7c\u3001\u5c0f\u9f13\u3001\u6447\u94c3\u7ec4\u5408', link:'https://www.xiaohongshu.com/search_result?keyword=%E5%84%BF%E7%AB%A5%E6%89%93%E5%87%BB%E4%B9%90%E5%99%A8' },
    { type:'\u73a9\u5177', title:'\u516b\u97f3\u7434', desc:'\u6728\u7434/\u94dd\u677f\u7434\uff0c\u6572\u51fa\u7b80\u5355\u65cb\u5f8b', link:'https://www.xiaohongshu.com/search_result?keyword=%E5%85%AB%E9%9F%B3%E7%90%B4%E5%84%BF%E7%AB%A5' }
  ],
  5: [
    { type:'\u73a9\u6cd5', title:'\u8df3\u623f\u5b50', desc:'\u7528\u7c89\u7b14\u5728\u5730\u4e0a\u753b\u623f\u5b50\uff0c\u5355\u811a\u53cc\u811a\u8df3', link:'https://www.xiaohongshu.com/search_result?keyword=%E8%B7%B3%E6%88%BF%E5%AD%90%E5%AD%A9%E5%AD%90' },
    { type:'\u73a9\u6cd5', title:'\u8001\u9e70\u6349\u5c0f\u9e21', desc:'\u7ecf\u5178\u6237\u5916\u6e38\u620f\uff0c\u953b\u70bc\u53cd\u5e94\u548c\u4f53\u80fd', link:'https://www.xiaohongshu.com/search_result?keyword=%E8%80%81%E9%B9%B0%E6%8D%89%E5%B0%8F%E9%B8%A1' },
    { type:'\u73a9\u6cd5', title:'\u5e73\u8861\u6728\u884c\u8d70', desc:'\u7528\u7c89\u7b14\u6216\u7ef3\u5b50\u753b\u7ebf\uff0c\u6cbf\u7740\u8d70\u76f4\u7ebf', link:'https://www.xiaohongshu.com/search_result?keyword=%E5%B9%B3%E8%A1%A1%E6%9C%A8%E8%A1%8C%E8%B5%B0%E5%AD%A9%E5%AD%90' },
    { type:'\u73a9\u6cd5', title:'\u62cd\u7403\u7ec3\u4e60', desc:'3-4\u5c81\u62cd\u5927\u7403\uff0c5-6\u5c81\u62cd\u5c0f\u7403', link:'https://www.xiaohongshu.com/search_result?keyword=%E6%8B%8D%E7%90%83%E5%AD%A9%E5%AD%90%E7%BB%83%E4%B9%A0' },
    { type:'\u73a9\u6cd5', title:'\u969c\u788d\u8dd1', desc:'\u5bb6\u91cc\u8bbe\u7f6e\u969c\u788d\uff08\u6795\u5934\u3001\u6905\u5b50\uff09\u8dd1\u8df3', link:'https://www.xiaohongshu.com/search_result?keyword=%E9%9A%9C%E7%A2%8D%E8%B7%91%E5%AD%A9%E5%AD%90' },
    { type:'\u73a9\u6cd5', title:'\u52a8\u7269\u6a21\u4eff', desc:'\u5b66\u5c0f\u9752\u86d9\u8df3\u3001\u5c0f\u87f9\u87f9\u6a2a\u8d70\u3001\u5c0f\u9e1f\u98de', link:'https://www.xiaohongshu.com/search_result?keyword=%E5%8A%A8%E7%89%A9%E6%A8%A1%E4%BB%BF%E5%AD%A9%E5%AD%90' },
    { type:'\u73a9\u5177', title:'\u8df3\u7ef3', desc:'5-6\u5c81\u5f00\u59cb\u7ec3\uff0c\u5927\u4eba\u5e26\u7740\u8df3', link:'https://www.xiaohongshu.com/search_result?keyword=%E5%84%BF%E7%AB%A5%E8%B7%B3%E7%BB%B3' },
    { type:'\u73a9\u5177', title:'\u513f\u7ae5\u81ea\u884c\u8f66', desc:'\u5e73\u8861\u8f66\u8fc7\u6e21\u5230\u81ea\u884c\u8f66\uff0c\u953b\u70bc\u5e73\u8861\u611f', link:'https://www.xiaohongshu.com/search_result?keyword=%E5%84%BF%E7%AB%A5%E5%B9%B3%E8%A1%A1%E8%BD%A6' }
  ],
  6: [
    { type:'\u73a9\u5177', title:'\u62fc\u56fe\uff08\u6e10\u8fdb\u96be\u5ea6\uff09', desc:'\u4ece6\u7247\u523060\u7247\uff0c\u6839\u636e\u5e74\u9f84\u9009\u96be\u5ea6', link:'https://www.xiaohongshu.com/search_result?keyword=%E5%84%BF%E7%AB%A5%E6%8B%BC%E5%9B%BE' },
    { type:'\u73a9\u5177', title:'\u4e50\u9ad8Duplo\u5927\u9897\u7c92', desc:'3-4\u5c81\u5927\u9897\u7c92\uff0c5-6\u5c81\u5c0f\u9897\u7c92', link:'https://www.xiaohongshu.com/search_result?keyword=%E4%B9%90%E9%AB%98Duplo%E5%A4%A7%E9%A2%97%E7%B2%92' },
    { type:'\u73a9\u5177', title:'\u78c1\u529b\u7247', desc:'\u767e\u53d8\u78c1\u6027\u6784\u5efa\u7247\uff0c\u642d\u5efa\u5404\u79cd\u9020\u578b', link:'https://www.xiaohongshu.com/search_result?keyword=%E7%A3%81%E5%8A%9B%E7%89%87%E5%AD%A9%E5%AD%90' },
    { type:'\u73a9\u6cd5', title:'\u627e\u89c4\u5f8b\u6e38\u620f', desc:'\u6309\u989c\u8272/\u5f62\u72b6/\u5927\u5c0f\u627e\u89c4\u5f8b\u586b\u7a7a', link:'https://www.xiaohongshu.com/search_result?keyword=%E6%89%BE%E8%A7%84%E5%BE%8B%E6%B8%B8%E6%88%8F%E5%AD%A9%E5%AD%90' },
    { type:'\u73a9\u6cd5', title:'\u914d\u5bf9\u6e38\u620f', desc:'\u627e\u76f8\u540c\u56fe\u6848/\u989c\u8272/\u5f62\u72b6', link:'https://www.xiaohongshu.com/search_result?keyword=%E9%85%8D%E5%AF%B9%E6%B8%B8%E6%88%8F%E5%AD%A9%E5%AD%90' },
    { type:'\u73a9\u6cd5', title:'\u8ff0\u5bab\u4e66', desc:'\u8d70\u8ff0\u5bab\u8bad\u7ec3\u7a7a\u95f4\u611f\u548c\u89c4\u5212\u80fd\u529b', link:'https://www.xiaohongshu.com/search_result?keyword=%E8%BF%B7%E5%AE%AB%E4%B9%A6%E5%AD%A9%E5%AD%90' },
    { type:'\u7ee8\u672c', title:'\u300a\u795e\u5947\u7684\u903b\u8f91\u601d\u7ef4\u6e38\u620f\u4e66\u300b', desc:'\u65e5\u672c\u7ecf\u5178\u601d\u7ef4\u8bad\u7ec3\u6e38\u620f\u4e66', link:'https://www.xiaohongshu.com/search_result?keyword=%E9%80%BB%E8%BE%91%E6%80%9D%E7%BB%B4%E6%B8%B8%E6%88%8F%E4%B9%A6' },
    { type:'APP', title:'Khan Academy Kids', desc:'\u53ef\u6c57\u5b66\u9662\u513f\u7ae5\u7248\uff0c\u601d\u7ef4\u8bad\u7ec3+\u82f1\u6587', link:'https://www.xiaohongshu.com/search_result?keyword=Khan%20Academy%20Kids' }
  ],
  7: [
    { type:'\u82f1\u6589\u6b4c', title:'Twinkle Twinkle Little Star', desc:'\u4e00\u657c\u578b\u661f\u661f\uff0c\u5168\u4e16\u754c\u6700\u7ecf\u5178\u7684\u82f1\u6589\u513f\u6b4c\u4e4b\u4e00', tag:'\u5fc5\u542c', link:'https://search.bilibili.com/all?keyword=Twinkle%20Twinkle%20Little%20Star%20%E5%84%BF%E6%AD%8C' },
    { type:'\u82f1\u6589\u6b4c', title:'Down by the Bay', desc:'\u53ef\u7231\u7684\u91cd\u590d\u53e3\u8bed\u5151\u73a9\u6b4c\uff0c\u91cd\u8c03\u62fc\u8bcd\u73a9\u6cd5', link:'https://search.bilibili.com/all?keyword=Down%20by%20the%20Bay%20%E5%84%BF%E6%AD%8C' },
    { type:'\u82f1\u6589\u6b4c', title:'One Little Finger', desc:'\u201c\u4e00\u6839\u5c0f\u624b\u6307\u201d\uff0c\u8eab\u4f53\u52a8\u4f5c\u5151\u73a9\u6b4c', link:'https://search.bilibili.com/all?keyword=One%20Little%20Finger%20%E5%84%BF%E6%AD%8C' },
    { type:'\u82f1\u6589\u6b4c', title:'The Hokey Pokey', desc:'\u8eab\u4f53\u52a8\u4f5c\u5151\u73a9\u6b4c\uff0c\u52a0\u6df1\u8eab\u4f53\u5404\u90e8\u540d\u8bcd\u8bb0\u5fc6', link:'https://search.bilibili.com/all?keyword=The%20Hokey%20Pokey%20%E5%84%BF%E6%AD%8C' },
    { type:'\u82f1\u6589\u6b4c', title:'Ten Little Fingers', desc:'\u5341\u4e2a\u5c0f\u624b\u6307\uff0c\u8ba1\u6570\u52a8\u4f5c\u5151\u73a9\u6b4c', link:'https://search.bilibili.com/all?keyword=Ten%20Little%20Fingers%20%E5%84%BF%E6%AD%8C' },
    { type:'\u82f1\u6589\u6b4c', title:'Apples and Bananas', desc:'\u53d8\u8c03\u5151\u73a9\u6b4c\uff0c\u5e2e\u52a9\u5b69\u5b50\u7406\u89e3\u5143\u97f3\u53d8\u5316', link:'https://search.bilibili.com/all?keyword=Apples%20and%20Bananas%20%E5%84%BF%E6%AD%8C' },
    { type:'\u52a8\u753b', title:'\u300a\u840c\u9e21\u5c0f\u961f\u300b', desc:'\u597d\u7b11\u5168\u96c6\uff0c\u80b2\u513f\u52a8\u753b\u00b7\u793e\u4ea4\u00b7\u6c83\u91ce\u52a7\u52a8', tag:'\u63a8\u8350', link:'https://search.bilibili.com/all?keyword=%E8%90%8C%E9%B8%A1%E5%B0%8F%E9%98%9F%20%E5%85%A8%E5%9B%BD%E8%AF%9D' },
    { type:'\u52a8\u753b', title:'\u300a\u72ee\u5b50\u738b\u300b', desc:'1994\u5e74\u540d\u8457\uff0c\u53ef\u7231\u52a8\u753b\u7248\uff0c\u7ed9\u5b69\u5b50\u5165\u95e8\u82f1\u6587', link:'https://search.bilibili.com/all?keyword=%E7%8B%AE%E5%AD%90%E7%8E%8B%20%E5%8A%A8%E7%94%BB%E7%89%87%20%E5%85%A8%E5%9B%BD%E8%AF%9D' },
    { type:'\u52a8\u753b', title:'\u300a\u4e50\u667a\u5c0f\u5929\u5730\u300b', desc:'\u5b69\u5b50\u7231\u770b\u7684\u52a8\u753b\uff0c\u542b\u601d\u654f\u4e0e\u751f\u6d3b\u5e38\u8bc6', link:'https://search.bilibili.com/all?keyword=%E4%B9%90%E6%99%BA%E5%B0%8F%E5%A4%A9%E5%9C%B0%20%E5%85%A8%E5%9B%BD%E8%AF%9D' },
    { type:'\u52a8\u753b', title:'\u300a\u7231\u5192\u9669\u7684\u6735\u62c9\u300b', desc:'\u53cc\u8bed\u52a8\u753b\uff0c\u73a9\u4e2d\u5b66\u82f1\u6589', link:'https://search.bilibili.com/all?keyword=%E7%88%B1%E5%86%92%E9%99%A9%E7%9A%84%E6%9C%B5%E6%8B%89%20%E5%85%A8%E5%9B%BD%E8%AF%9D' },
    { type:'\u52a8\u753b', title:'\u300a\u5e03\u9c81\u4f0a\u300b', desc:'\u8c0a\u8bdd\u793e\u4ea4\u52a8\u753b\uff0c\u5e26\u5b69\u5b50\u4e0a\u52a8\u624b\u80fd\u529b', link:'https://search.bilibili.com/all?keyword=%E5%B8%83%E9%B2%81%E4%BC%8A%20%E5%85%A8%E5%9B%BD%E8%AF%9D' },
    { type:'\u52a8\u753b', title:'\u300a\u5b57\u6bcd\u79ef\u6728\u300b', desc:'\u5b57\u6bcd\u8c79\u73a9\u6cd5\u52a8\u753b\uff0cBBC\u7ecf\u5178\u8bcd\u8bcd\u52a8\u753b', tag:'\u63a8\u8350', link:'https://search.bilibili.com/all?keyword=%E5%AD%97%E6%AF%8D%E7%A7%AF%E6%9C%A8%20Alphablock%20%E5%85%A8%E5%9B%BD%E8%AF%9D' },
    { type:'\u52a8\u753b', title:'\u300aWow%20English\u300b', desc:'\u82f1\u8bed\u542f\u8499YouTuber\uff0c\u52a8\u753b\u6d3b\u8dc3\u751f\u52a8', link:'https://search.bilibili.com/all?keyword=Wow%20English%20%E5%8A%A8%E7%94%BB' },
    { type:'\u52a8\u753b', title:'\u300aSSS\u513f\u6b4c\u300b', desc:'\u5168\u7403\u53d7\u6b22\u8fce\u7684\u82f1\u6589\u513f\u6b4c\u9891\u9053\uff0c\u4f34\u8eab\u52a8\u4f5c', tag:'\u5fc5\u542c', link:'https://search.bilibili.com/all?keyword=Super%20Simple%20Songs%20%E5%85%A8%E5%9B%BD%E8%AF%9D' },
    { type:'\u52a8\u753b', title:'\u300aLittle%20Fox\u300b', desc:'\u7ea7\u522b\u82f1\u8bed\u52a8\u753b\uff0c\u9002\u5408\u5b69\u5b50\u542c\u8bfb\u4e0e\u542c\u529b', link:'https://search.bilibili.com/all?keyword=Little%20Fox%20%E5%85%A8%E5%9B%BD%E8%AF%9D' },
    { type:'\u52a8\u753b', title:'\u300aDidi%27s%20Day\u300b', desc:'\u5b9d\u8d1d\u4e1c\u7c73\u82f1\u8bed\u52a8\u753b\uff0c\u751f\u6d3b\u4e2d\u5b66\u4e60\u53e3\u8bed', link:'https://search.bilibili.com/all?keyword=Didi%27s%20Day%20%E5%85%A8%E5%9B%BD%E8%AF%9D' },
    { type:'\u52a8\u753b', title:'\u300a\u731c\u731c\u6211\u6709\u591a\u7231\u4f60\u300b', desc:'\u52a8\u753b\u7248\uff0c\u6e29\u99a8\u4e3b\u9898\u00b7\u7231\u4e0e\u88ab\u7231', link:'https://search.bilibili.com/all?keyword=%E7%8C%9C%E7%8C%9C%E6%88%91%E6%9C%89%E5%A4%9A%E7%88%B1%E4%BD%A0%20%E5%8A%A8%E7%94%BB' },
    { type:'APP', title:'Khan Academy Kids', desc:'\u82f1\u8bed\u5e7c\u513f\u514d\u8d39\u52a8\u753bAPP\uff0c\u542b\u9605\u8bfb\u3001\u8bcd\u6c47\u3001\u8ba1\u7b97', link:'https://search.bilibili.com/all?keyword=Khan%20Academy%20Kids%20%E5%85%A8%E5%9B%BD%E8%AF%9D' }
  ],
  8: [
    { type:'\u7ed8\u672c', title:'\u300a\u731c\u731c\u6211\u6709\u591a\u7231\u4f60\u300b', desc:'\u5168\u7403\u9500\u91cf30\u4e07+\uff0c\u6e29\u99a8\u4e3b\u9898\u00b7\u7231\u4e0e\u88ab\u7231', tag:'\u5fc5\u8bfb', link:'https://www.xiaohongshu.com/search_result?keyword=%E7%8C%9C%E7%8C%9C%E6%88%91%E6%9C%89%E5%A4%9A%E7%88%B1%E4%BD%A0%20%E7%BB%98%E6%9C%AC' },
    { type:'\u7ed8\u672c', title:'\u300a\u5c0f\u8c61\u6c49\u5b57\u300b\u5b57\u5361', desc:'3-6\u5c81\u8ba4\u5b57\u5fc5\u5907\uff0c\u8c61\u5f62\u8bb0\u5fc6\u5b57', link:'https://www.xiaohongshu.com/search_result?keyword=%E5%B0%8F%E8%B1%A1%E6%B1%89%E5%AD%97%20%E7%BB%98%E6%9C%AC' },
    { type:'\u7ed8\u672c', title:'\u300a\u5c0f\u84dd\u548c\u5c0f\u9ec4\u300b', desc:'\u674e\u6b27\u00b7\u674e\u5965\u5c3c\u7ecf\u5178\uff0c\u5c0f\u53cb\u8c0a\u00b7\u8272\u5f69', link:'https://www.xiaohongshu.com/search_result?keyword=%E5%B0%8F%E8%93%9D%E5%92%8C%E5%B0%8F%E9%BB%84%20%E7%BB%98%E6%9C%AC' },
    { type:'\u7ed8\u672c', title:'\u300a\u4e94\u51e0\u5feb\u8bfb\u300b', desc:'\u8bc6\u5b57\u7ecf\u5178\u6559\u6750\uff0c\u8fb9\u6545\u4e8b\u8fb9\u8bc6\u5b57', link:'https://www.xiaohongshu.com/search_result?keyword=%E5%9B%9B%E4%BA%94%E5%BF%AB%E8%AF%BB%20%E7%BB%98%E6%9C%AC' },
    { type:'\u7ed8\u672c', title:'\u300a\u90a3\u4e2a\u5230\u5e95\u5982\u4f55\u300b\u7cfb\u5217', desc:'\u4e2d\u6587\u7248\u7248\u00b7\u5170\u67ef\u59cb\u00b7\u673a\u68b0\u9053\u00b7\u533b\u751f\u00b7\u5e08\u5fb7\u00b7\u6cd5\u5f8b', link:'https://www.xiaohongshu.com/search_result?keyword=%E9%82%A3%E4%B8%AA%E5%88%B0%E5%BA%95%E5%A6%82%E4%BD%95%20%E7%BB%98%E6%9C%AC' },
    { type:'\u7ed8\u672c', title:'\u300a\u6d3e\u4e2d\u83b1\u00b7\u54ea\u5412\u513f\u300b', desc:'\u6d3e\u4e2d\u83b1\u5973\u738b\u00b7\u5973\u5b69\u4e3b\u4e49\u52f8\u91cf\u00b7\u53cd\u5377\u601d\u8003', link:'https://www.xiaohongshu.com/search_result?keyword=%E6%B4%BE%E4%B8%AD%E8%8E%B1%20%E5%93%AA%E5%90%91%E5%84%BF%20%E7%BB%98%E6%9C%AC' },
    { type:'\u7ed8\u672c', title:'\u300a\u51ef\u8fea\u00b7\u53ef\u8c14\u00b7\u7ed8\u672c\u300b', desc:'\u521b\u610f\u52a8\u8111\u52f8\u91cf\u00b7\u4e0d\u53ef\u601d\u8bae\u00b7\u80b2\u513f\u624b\u6728\u753b', link:'https://www.xiaohongshu.com/search_result?keyword=%E5%87%AF%E8%BF%AA%20%E5%8F%AF%E8%AE%B6%20%E7%BB%98%E6%9C%AC' },
    { type:'\u7ed8\u672c', title:'\u300a\u7c73\u9f0e\u00b7\u963f\u67ef\u5fb7\u00b7\u5947\u8c34\u7ed8\u672c\u300b', desc:'\u793e\u4f1a\u5165\u5fc3\u00b7\u9ad8\u54c1\u8d28\u7ed8\u672c\u00b7\u751f\u6d3b\u91cd\u70b9', link:'https://www.xiaohongshu.com/search_result?keyword=%E7%B1%B3%E9%BC%8E%20%E9%98%BF%E6%9F%AF%E5%BE%B7%20%E7%BB%98%E6%9C%AC' },
    { type:'\u7ed8\u672c', title:'\u300a\u6613\u9ed1\u4e0a\u53c9\u7684\u5154\u5b50\u300b', desc:'\u5168\u4e16\u754c\u9500\u91cf\u6700\u9ad8\u7684\u7ed8\u672c\u4e4b\u4e00\uff0c\u667a\u80fd\u542f\u8499', tag:'\u5fc5\u8bfb', link:'https://www.xiaohongshu.com/search_result?keyword=%E6%98%93%E9%BB%91%E4%B8%8A%E5%8F%89%E7%9A%84%E5%85%94%E5%AD%90%20%E7%BB%98%E6%9C%AC' },
    { type:'\u7ed8\u672c', title:'\u300a\u8d64\u978f\u4e0e\u96f7\u5fb7\u300b', desc:'\u9707\u60e8\u4e16\u754c\u00b7\u6697\u9ed1\u4e0e\u5fc5\u8bfb\u00b7\u54c8\u5229\u6ce2\u7279', link:'https://www.xiaohongshu.com/search_result?keyword=%E8%B5%A4%E9%B9%8F%E4%B8%8E%E9%9B%B7%E5%BE%B7%20%E7%BB%98%E6%9C%AC' },
    { type:'\u7ed8\u672c', title:'\u300a\u5fc3\u7075\u8c31\u753b\u4e66\u300b', desc:'\u5fc3\u7406\u00b7\u4e0d\u5b89\u00b7\u5e76\u8c03\u00b7\u60c5\u7eea\u00b7\u542f\u8499\u00b7\u5fc3\u667a\u5ea6', link:'https://www.xiaohongshu.com/search_result?keyword=%E5%BF%83%E7%81%B5%E8%B0%B1%E7%94%BB%E4%B9%A6%20%E7%BB%98%E6%9C%AC' },
    { type:'\u7ed8\u672c', title:'\u300a\u8c01\u80ce\u00b7\u5341\u4e07\u4e2a\u4e3a\u4ec0\u4e48\u300b', desc:'\u53e4\u5fb7\u62c9\u00b7\u53d1\u95ee\u00b7\u5b69\u5b50\u7231\u95ee\u4e3a\u4ec0\u4e48', link:'https://www.xiaohongshu.com/search_result?keyword=%E5%8F%A4%E5%BE%B7%E6%8B%89%20%E5%8D%81%E4%B8%87%E4%B8%AA%E4%B8%BA%E4%BB%80%E4%B9%88%20%E7%BB%98%E6%9C%AC' },
    { type:'\u81ea\u6211\u4fdd\u62a4', title:'\u300a\u4e0d\u7ed9\u9694\u751f\u4eba\u5f00\u95e8\u300b', desc:'\u513f\u7ae5\u793e\u4ea4\u5b89\u5168\u00b7\u5fc5\u8bfb\u00b7\u9694\u79bb\u5c0f\u9b3c', link:'https://www.xiaohongshu.com/search_result?keyword=%E4%B8%8D%E7%BB%99%E9%9A%94%E7%94%9F%E4%BA%BA%E5%BC%80%E9%97%A8%20%E7%BB%98%E6%9C%AC' },
    { type:'\u81ea\u6211\u4fdd\u62a4', title:'\u300a\u4e0d\u8ddf\u9694\u751f\u4eba\u8d70\u300b', desc:'\u9694\u79bb\u5c0f\u9b3c\u00b7\u5b89\u5168\u77e5\u8bc6\u00b7\u52a8\u624b\u52a8\u8111', link:'https://www.xiaohongshu.com/search_result?keyword=%E4%B8%8D%E8%B7%9F%E9%9A%94%E7%94%9F%E4%BA%BA%E8%B5%B0%20%E7%BB%98%E6%9C%AC' },
    { type:'\u81ea\u6211\u4fdd\u62a4', title:'\u300a\u4e0d\u751f\u6c14\uff0c\u597d\u597d\u5730\u8bf4\u300b', desc:'\u60c5\u7eea\u7ba1\u7406\u00b7\u8868\u8fbe\u80fd\u529b\u00b7\u542c\u5165\u68d2', link:'https://www.xiaohongshu.com/search_result?keyword=%E4%B8%8D%E7%94%9F%E6%B0%94%20%E5%A5%BD%E5%A5%BD%E5%9C%B0%E8%AF%B4%20%E7%BB%98%E6%9C%AC' },
    { type:'\u81ea\u6211\u4fdd\u62a4', title:'\u300a\u4e0d\u8981\u968f\u4fbf\u6478\u6211\u300b', desc:'\u8eab\u4f53\u4e3b\u6743\u00b7\u9632\u6027\u4fb5\u00b7\u544a\u8bc9\u5b69\u5b50\u8eab\u4f53\u662f\u81ea\u5df1\u7684', link:'https://www.xiaohongshu.com/search_result?keyword=%E4%B8%8D%E8%A6%81%E9%9A%8F%E4%BE%BF%E6%91%B8%E6%88%91%20%E7%BB%98%E6%9C%AC' },
    { type:'\u81ea\u6211\u4fdd\u62a4', title:'\u300a\u5403\u996d\u4e0d\u6311\u98df\u300b', desc:'\u5065\u5eb7\u996e\u98df\u00b7\u4e0d\u504f\u98df\u00b7\u80fd\u5403\u662f\u798f', link:'https://www.xiaohongshu.com/search_result?keyword=%E5%90%83%E9%A5%AD%E4%B8%8D%E6%8C%91%E9%A3%9F%20%E7%BB%98%E6%9C%AC' },
    { type:'\u81ea\u6211\u4fdd\u62a4', title:'\u300a\u7535\u8001\u864e\uff0c\u597d\u53ef\u6015\u300b', desc:'\u7528\u7535\u5b89\u5168\u00b7\u63a5\u89e6\u7535\u6e90\u00b7\u70b9\u8bc6\u513f\u7ae5', link:'https://www.xiaohongshu.com/search_result?keyword=%E7%94%B5%E8%80%81%E8%99%8E%20%E5%A5%BD%E5%8F%AF%E6%80%95%20%E7%BB%98%E6%9C%AC' },
    { type:'\u81ea\u6211\u4fdd\u62a4', title:'\u300a\u591a\u8fd0\u52a8\uff0c\u5c11\u751f\u75c5\u300b', desc:'\u8fd0\u52a8\u00b7\u4f53\u80fd\u00b7\u5065\u5eb7\u751f\u6d3b\u4e60\u60ef', link:'https://www.xiaohongshu.com/search_result?keyword=%E5%A4%9A%E8%BF%90%E5%8A%A8%20%E5%B0%91%E7%94%9F%E7%97%85%20%E7%BB%98%E6%9C%AC' },
    { type:'\u81ea\u6211\u4fdd\u62a4', title:'\u300a\u7ea2\u706f\u505c\uff0c\u7eff\u706f\u884c\u300b', desc:'\u4ea4\u901a\u5b89\u5168\u00b7\u8fc7\u9a6c\u8def\u00b7\u7ea2\u7eff\u706f', link:'https://www.xiaohongshu.com/search_result?keyword=%E7%BA%A2%E7%81%AF%E5%81%9C%20%E7%BB%BF%E7%81%AF%E8%A1%8C%20%E7%BB%98%E6%9C%AC' },
    { type:'\u81ea\u6211\u4fdd\u62a4', title:'\u300a\u52e4\u6d17\u6f74\uff0c\u7231\u536b\u751f\u300b', desc:'\u4e2a\u4eba\u536b\u751f\u00b7\u6d17\u624b\u00b7\u4e60\u60ef\u00b7\u5fc5\u8bfb', link:'https://www.xiaohongshu.com/search_result?keyword=%E5%8B%A4%E6%B4%97%E6%A5%9A%20%E7%88%B1%E5%8D%AB%E7%94%9F%20%E7%BB%98%E6%9C%AC' },
    { type:'\u81ea\u6211\u4fdd\u62a4', title:'\u300a\u4e0b\u96e8\u5929\uff0c\u9632\u96f7\u7535\u300b', desc:'\u9632\u96f7\u00b7\u9632\u7535\u00b7\u9632\u6d2a\u00b7\u5b89\u5168\u5fc5\u8bfb', link:'https://www.xiaohongshu.com/search_result?keyword=%E4%B8%8B%E9%9B%A8%E5%A4%A9%20%E9%98%B2%E9%9B%B7%E7%94%B5%20%E7%BB%98%E6%9C%AC' },
    { type:'\u7eaa\u5f55\u7247', title:'\u300a\u5b87\u5b99\u7684\u5947\u8ff9\u300b', desc:'\u8ba9\u5b69\u5b50\u611f\u53d7\u5b87\u5b99\u7684\u5947\u5999\u00b7BBC\u7ecf\u5178', link:'https://search.bilibili.com/all?keyword=%E5%AE%87%E5%AE%99%E7%9A%84%E5%A5%87%E8%BF%B9%20%E7%BA%AA%E5%BD%95%E7%89%87%20%E5%85%A8%E5%9B%BD%E8%AF%9D' },
    { type:'\u7eaa\u5f55\u7247', title:'\u300a\u5b8c\u7f8e\u7684\u4e16\u754c\u300b', desc:'\u540d\u8457\u8bb0\u5f55\u7247\u00b7\u793e\u4f1a\u00b7\u81ea\u7136\u00b7\u542f\u8499', link:'https://search.bilibili.com/all?keyword=%E5%AE%8C%E7%BE%8E%E7%9A%84%E4%B8%96%E7%95%8C%20%E7%BA%AA%E5%BD%95%E7%89%87' },
    { type:'\u7eaa\u5f55\u7247', title:'\u300a\u8702\u72e8\u751f\u6d3b\u8bb0\u300b', desc:'\u52a8\u7269\u00b7\u751f\u6001\u00b7\u8ba9\u5b69\u5b50\u7231\u4e0a\u5927\u81ea\u7136', link:'https://search.bilibili.com/all?keyword=%E5%B0%8F%E8%9C%82%E8%9C%88%20%E7%BA%AA%E5%BD%95%E7%89%87' },
    { type:'\u7eaa\u5f55\u7247', title:'\u300a\u5947\u5999\u7684\u6c34\u6c96\u300b', desc:'\u81ea\u7136\u00b7\u52a8\u7269\u00b7\u751f\u6001\u00b7\u8ba9\u5b69\u5b50\u7231\u4e0a\u5927\u81ea\u7136', link:'https://search.bilibili.com/all?keyword=%E5%A5%87%E5%A6%99%E7%9A%84%E6%B0%B4%E6%B3%B3%20%E7%BA%AA%E5%BD%95%E7%89%87' },
    { type:'\u7eaa\u5f55\u7247', title:'\u300a\u679c\u5236\u4e16\u754c\u300b', desc:'\u51e0\u4f55\u00b7\u6570\u5b66\u00b7\u9002\u5408\u5b69\u5b50\u770b\u7684\u8bb0\u5f55\u7247', link:'https://search.bilibili.com/all?keyword=%E6%9E%9C%E5%88%B6%E4%B8%96%E7%95%8C%20%E7%BA%AA%E5%BD%95%E7%89%87' }
  ]
};

function renderBig() {
  var d = appData.petBig || {};
  if (!d.info) d.info = {name:'',birth:'',cls:''};
  if (!d.suppliesChecked) d.suppliesChecked = {};
  if (!d.learning) d.learning = deepClone(DEFAULT_LEARNING_MODULES);
  if (!d.learningCompleted) d.learningCompleted = {};
  if (!d.learningCustom) d.learningCustom = {};
  if (!d.health) d.health = [];
  if (!d.memo) d.memo = [];
  document.getElementById('pet-big-name').value = d.info.name || '';
  document.getElementById('pet-big-birth').value = d.info.birth || '';
  var clsInput = document.getElementById('pet-big-class');
  if (clsInput) clsInput.value = d.info.cls || '';
  renderBigSupplies();
  renderBigLearning();
  renderBigHealth();
  renderBigMemo();
}
function renderBigSupplies() {
  var checked = (appData.petBig && appData.petBig.suppliesChecked) || {};
  var total = 0, done = 0;
  var html = '';
  for (var i = 0; i < KINDERGARTEN_SUPPLIES.length; i++) {
    var group = KINDERGARTEN_SUPPLIES[i];
    html += '<div style="font-size:13px;font-weight:600;color:var(--primary-dark);margin:10px 0 6px;">' + group.cat + '</div>';
    for (var j = 0; j < group.items.length; j++) {
      var item = group.items[j];
      var key = i + '_' + j;
      var isChecked = checked[key];
      total++;
      if (isChecked) done++;
      html += '<div class="bag-item">';
      html += '<div class="bag-checkbox ' + (isChecked ? 'checked' : '') + '" data-supply-key="' + key + '">' + (isChecked ? '\u2713' : '') + '</div>';
      html += '<div class="bag-item-body"><div class="bag-item-name ' + (isChecked ? 'completed' : '') + '">' + escapeHtml(item.name) + '</div>';
      html += '<div style="font-size:11px;color:var(--text-light);">' + escapeHtml(item.qty) + ' \u00b7 ' + escapeHtml(item.note) + '</div></div>';
      html += '</div>';
    }
  }
  document.getElementById('big-supplies-list').innerHTML = html;
  document.getElementById('big-supplies-count').textContent = done + ' / ' + total;
  document.getElementById('big-supplies-progress').style.width = (total ? (done / total * 100) : 0) + '%';
}
var currentLearningModuleId = null;
function renderBigLearning() {
  if (currentLearningModuleId !== null) { renderLearningDetail(currentLearningModuleId); return; }
  var modules = (appData.petBig && appData.petBig.learning) || DEFAULT_LEARNING_MODULES;
  var completed = (appData.petBig && appData.petBig.learningCompleted) || {};
  var html = '';
  for (var i = 0; i < modules.length; i++) {
    var m = modules[i];
    var resCount = (LEARNING_RESOURCES[m.id] ? LEARNING_RESOURCES[m.id].length : 0)
      + ((appData.petBig.learningCustom && appData.petBig.learningCustom[m.id]) ? appData.petBig.learningCustom[m.id].length : 0);
    var doneCount = 0;
    if (completed[m.id]) {
      for (var k in completed[m.id]) { if (completed[m.id][k]) doneCount++; }
    }
    html += '<div class="learning-card" data-learn-module="' + m.id + '">';
    html += '<button class="lc-delete" data-learn-id="' + m.id + '">\u2715</button>';
    html += '<div class="lc-icon">' + m.icon + '</div>';
    html += '<div class="lc-name">' + escapeHtml(m.name) + '</div>';
    html += '<div class="lc-count">' + doneCount + ' / ' + resCount + ' \u5df2\u5b8c\u6210</div>';
    html += '</div>';
  }
  html += '<div class="learning-add-card" data-action="add-learning">+ \u6dfb\u52a0\u7c7b\u76ee</div>';
  document.getElementById('big-learning-modules').innerHTML = html;
  document.getElementById('big-learning-add-form').style.display = '';
}
function renderLearningDetail(moduleId) {
  var modules = (appData.petBig && appData.petBig.learning) || DEFAULT_LEARNING_MODULES;
  var mod = null;
  for (var i = 0; i < modules.length; i++) { if (modules[i].id == moduleId) { mod = modules[i]; break; } }
  if (!mod) { currentLearningModuleId = null; renderBigLearning(); return; }
  if (!appData.petBig.learningCompleted) appData.petBig.learningCompleted = {};
  if (!appData.petBig.learningCompleted[moduleId]) appData.petBig.learningCompleted[moduleId] = {};
  var completed = appData.petBig.learningCompleted[moduleId];
  if (!appData.petBig.learningCustom) appData.petBig.learningCustom = {};
  var customRes = appData.petBig.learningCustom[moduleId] || [];
  var presetRes = LEARNING_RESOURCES[moduleId] || [];
  var allRes = presetRes.concat(customRes);
  var doneCount = 0;
  for (var k in completed) { if (completed[k]) doneCount++; }
  var html = '';
  html += '<div class="learning-detail-header">';
  html += '<button class="learning-back-btn" data-action="back-to-modules">\u2190 \u8fd4\u56de\u7c7b\u76ee</button>';
  html += '<div class="learning-detail-title"><span class="ldt-icon">' + mod.icon + '</span><span class="ldt-name">' + escapeHtml(mod.name) + '</span></div>';
  html += '<div class="learning-detail-progress">' + doneCount + ' / ' + allRes.length + ' \u5df2\u5b8c\u6210</div>';
  html += '</div>';
  var typeColors = { '\u7ee8\u672c':'#ff6b6b', '\u73a9\u6cd5':'#4ecdc4', '\u73a9\u5177':'#45b7d1', 'APP':'#96ceb4', '\u513f\u6b4c':'#ffe66d' };
  for (var j = 0; j < allRes.length; j++) {
    var r = allRes[j];
    var resKey = 'res_' + j;
    var isDone = completed[resKey] ? true : false;
    var isCustom = j >= presetRes.length;
    var tc = typeColors[r.type] || '#999';
    html += '<div class="resource-item' + (isDone ? ' completed' : '') + '" data-res-key="' + resKey + '">';
    html += '<label class="resource-check"><input type="checkbox" data-res-check="' + resKey + '"' + (isDone ? ' checked' : '') + '><span class="checkmark"></span></label>';
    html += '<div class="resource-body">';
    html += '<div class="resource-top"><span class="resource-type-badge" style="background:' + tc + '">' + escapeHtml(r.type) + '</span><span class="resource-title">' + escapeHtml(r.title) + '</span>';
    if (r.tag) html += '<span class="resource-tag">' + escapeHtml(r.tag) + '</span>';
    if (isCustom) html += '<button class="resource-delete" data-res-delete="' + resKey + '">\u2715</button>';
    html += '</div>';
    if (r.desc) html += '<div class="resource-desc">' + escapeHtml(r.desc) + '</div>';
    if (r.link) html += '<a class="resource-link" href="' + r.link + '" target="_blank">\u67e5\u770b\u89c6\u9891 \u2192</a>';
    html += '</div>';
    html += '</div>';
  }
  html += '<div class="resource-add-form">';
  html += '<h4>\u2795 \u6dfb\u52a0\u81ea\u5b9a\u4e49\u8d44\u6e90</h4>';
  html += '<div class="raf-row"><select id="custom-res-type">';
  var types = ['\u7ee8\u672c','\u73a9\u6cd5','\u73a9\u5177','APP','\u513f\u6b4c'];
  for (var t = 0; t < types.length; t++) {
    html += '<option value="' + types[t] + '">' + types[t] + '</option>';
  }
  html += '</select><input type="text" id="custom-res-title" placeholder="\u8d44\u6e90\u540d\u79f0\uff08\u5982\uff1a\u300a\u5c0f\u732b\u9493\u9c7c\u300b\uff09"></div>';
  html += '<input type="text" id="custom-res-desc" placeholder="\u63cf\u8ff0\uff08\u53ef\u9009\uff09">';
  html += '<input type="text" id="custom-res-link" placeholder="\u94fe\u63a5\uff08\u53ef\u9009\uff09">';
  html += '<button id="add-custom-res-btn">\u6dfb\u52a0</button>';
  html += '</div>';
  document.getElementById('big-learning-modules').innerHTML = html;
  var form = document.getElementById('big-learning-add-form');
  if (form) form.style.display = 'none';
}
function renderBigHealth() {
  var records = (appData.petBig && appData.petBig.health) || [];
  var list = document.getElementById('pet-big-health-list');
  if (!records.length) { list.innerHTML = '<div class="empty-state"><p>\u6682\u65e0\u8bb0\u5f55</p></div>'; return; }
  var sorted = records.slice().sort(function(a,b){ return (b.date||'').localeCompare(a.date||''); });
  var html = '';
  for (var i = 0; i < sorted.length; i++) {
    var r = sorted[i];
    html += '<div class="record-item"><div class="record-main"><span class="record-date">' + r.date + '</span><span class="record-value">' + escapeHtml(r.item) + '</span></div>';
    if (r.note) html += '<div class="record-note">' + escapeHtml(r.note) + '</div>';
    html += '<button class="record-delete" data-big-health-id="' + r.id + '">\u2715</button></div>';
  }
  list.innerHTML = html;
}
function renderBigMemo() {
  var records = (appData.petBig && appData.petBig.memo) || [];
  var list = document.getElementById('pet-big-memo-list');
  if (!records.length) { list.innerHTML = '<div class="empty-state"><p>\u6682\u65e0\u8bb0\u5f55</p></div>'; return; }
  var sorted = records.slice().sort(function(a,b){ return (b.date||'').localeCompare(a.date||''); });
  var html = '';
  for (var i = 0; i < sorted.length; i++) {
    var r = sorted[i];
    html += '<div class="record-item"><div class="record-main"><span class="record-date">' + r.date + '</span></div>';
    if (r.text) html += '<div class="record-note">' + escapeHtml(r.text) + '</div>';
    html += '<button class="record-delete" data-big-memo-id="' + r.id + '">\u2715</button></div>';
  }
  list.innerHTML = html;
}

function renderSmall() {
  var d = appData.petSmall || {};
  if (!d.info) d.info = {name:'',birth:''};
  document.getElementById('pet-small-name').value = d.info.name || '';
  document.getElementById('pet-small-birth').value = d.info.birth || '';
  renderSmallGrowth();
  renderSmallEarlyEdu();
  renderSmallMusic();
  renderSmallFood();
}
function renderSmallGrowth() {
  var stagesEl = document.getElementById('small-growth-stages');
  var detailEl = document.getElementById('small-growth-detail');
  var html = '';
  for (var i = 0; i < BABY_GROWTH_GUIDE.length; i++) {
    html += '<button class="stage-btn ' + (i === 0 ? 'active' : '') + '" data-growth-idx="' + i + '">' + BABY_GROWTH_GUIDE[i].stage + '</button>';
  }
  stagesEl.innerHTML = html;
  renderSmallGrowthDetail(0);
}
function renderSmallGrowthDetail(idx) {
  var g = BABY_GROWTH_GUIDE[idx];
  if (!g) return;
  var html = '<h4 style="margin:0 0 12px;font-size:16px;color:var(--primary-dark);">' + g.stage + ' \u00b7 ' + g.label + '</h4>';
  html += '<div class="gd-section"><h5>\u1f4ca \u751f\u957f\u53d1\u80b2</h5><p>' + escapeHtml(g.growth) + '</p></div>';
  html += '<div class="gd-section"><h5>\u1f37c \u5582\u517b\u996e\u98df</h5><p>' + escapeHtml(g.feeding) + '</p></div>';
  html += '<div class="gd-section"><h5>\u1f6c1 \u62a4\u7406\u5efa\u8bae</h5><p>' + escapeHtml(g.care) + '</p></div>';
  html += '<div class="gd-section"><h5>\u26a0\ufe0f \u6ce8\u610f\u4e8b\u9879</h5><p>' + escapeHtml(g.caution) + '</p></div>';
  document.getElementById('small-growth-detail').innerHTML = html;
}
function renderSmallEarlyEdu() {
  var checked = (appData.petSmall && appData.petSmall.earlyEduChecked) || {};
  var streak = (appData.petSmall && appData.petSmall.earlyEduStreak) || {};
  var today = todayISO();
  var html = '';
  for (var i = 0; i < EARLY_EDU_CARDS.length; i++) {
    var c = EARLY_EDU_CARDS[i];
    var key = String(i);
    var isChecked = checked[key + '_' + today];
    var streakCount = streak[key] || 0;
    html += '<div class="earlyedu-card">';
    html += '<div class="ee-icon">' + c.icon + '</div>';
    html += '<div class="ee-title">' + escapeHtml(c.title) + '</div>';
    html += '<div class="ee-desc">' + escapeHtml(c.desc) + '</div>';
    html += '<button class="ee-check ' + (isChecked ? 'checked' : '') + '" data-ee-idx="' + i + '">' + (isChecked ? '\u2713 \u5df2\u6253\u5361' : '\u6253\u5361') + '</button>';
    if (streakCount > 0) html += '<div class="ee-streak">\u8fde\u7eed ' + streakCount + ' \u5929 \u1f525</div>';
    html += '</div>';
  }
  document.getElementById('small-earlyedu-cards').innerHTML = html;
}
function renderSmallMusic() {
  var html = '';
  for (var i = 0; i < BABY_MUSIC_REC.length; i++) {
    var m = BABY_MUSIC_REC[i];
    html += '<div class="music-card">';
    html += '<div class="mc-icon">' + m.icon + '</div>';
    html += '<div class="mc-title">' + escapeHtml(m.title) + '</div>';
    html += '<div class="mc-desc">' + escapeHtml(m.desc) + '</div>';
    html += '<div class="mc-link" data-music-search="' + escapeHtml(m.source) + '">' + escapeHtml(m.source) + '</div>';
    html += '</div>';
  }
  document.getElementById('small-music-list').innerHTML = html;
}
function renderSmallFood() {
  var stagesEl = document.getElementById('small-food-stages');
  var html = '';
  for (var i = 0; i < BABY_FOOD_PLAN.length; i++) {
    html += '<button class="stage-btn ' + (i === 0 ? 'active' : '') + '" data-food-idx="' + i + '">' + BABY_FOOD_PLAN[i].label + '</button>';
  }
  stagesEl.innerHTML = html;
  renderSmallFoodDetail(0);
}
function renderSmallFoodDetail(idx) {
  var f = BABY_FOOD_PLAN[idx];
  if (!f) return;
  var html = '<h4 style="margin:0 0 12px;font-size:16px;color:var(--primary-dark);">' + f.label + '</h4>';
  html += '<div style="font-size:12px;color:var(--text-light);margin-bottom:10px;">\u6708\u9f84\u9636\u6bb5\uff1a' + f.stage + '</div>';
  for (var i = 0; i < f.items.length; i++) {
    var item = f.items[i];
    html += '<div style="background:var(--bg);border-radius:10px;padding:10px 12px;margin-bottom:8px;">';
    html += '<div style="font-size:13px;font-weight:600;color:var(--primary);margin-bottom:4px;">' + escapeHtml(item.day) + '</div>';
    html += '<div style="font-size:13px;color:var(--text);">' + escapeHtml(item.food) + '</div>';
    html += '<div style="font-size:12px;color:var(--text-light);margin-top:4px;">' + escapeHtml(item.note) + '</div>';
    html += '</div>';
  }
  document.getElementById('small-food-detail').innerHTML = html;
}

// \u5927\u5b9d\u4fe1\u606f\u4fdd\u5b58
document.getElementById('save-pet-big-btn').addEventListener('click', function(){
  if (!appData.petBig) appData.petBig = { info:{}, suppliesChecked:{}, learning:deepClone(DEFAULT_LEARNING_MODULES), learningCompleted:{}, learningCustom:{}, health:[], memo:[] };
  appData.petBig.info.name = document.getElementById('pet-big-name').value.trim();
  appData.petBig.info.birth = document.getElementById('pet-big-birth').value;
  var clsInput = document.getElementById('pet-big-class');
  if (clsInput) appData.petBig.info.cls = clsInput.value.trim();
  saveData(); alert('\u5df2\u4fdd\u5b58');
});
// \u5927\u5b9d\u5065\u5eb7\u8bb0\u5f55
document.getElementById('add-pet-big-health-btn').addEventListener('click', function(){
  var date = document.getElementById('pet-big-health-date').value || todayISO();
  var item = document.getElementById('pet-big-health-item').value.trim();
  var note = document.getElementById('pet-big-health-note').value.trim();
  if (!item) { alert('\u8bf7\u586b\u5199\u5065\u5eb7\u4e8b\u9879'); return; }
  if (!appData.petBig.health) appData.petBig.health = [];
  appData.petBig.health.push({ id:newId(appData.petBig.health), date:date, item:item, note:note });
  saveData(); renderBigHealth();
  document.getElementById('pet-big-health-item').value = '';
  document.getElementById('pet-big-health-note').value = '';
});
// \u5927\u5b9d\u6210\u957f\u8bb0\u5f55
document.getElementById('add-pet-big-memo-btn').addEventListener('click', function(){
  var date = document.getElementById('pet-big-memo-date').value || todayISO();
  var text = document.getElementById('pet-big-memo-text').value.trim();
  if (!text) { alert('\u8bf7\u586b\u5199\u5185\u5bb9'); return; }
  if (!appData.petBig.memo) appData.petBig.memo = [];
  appData.petBig.memo.push({ id:newId(appData.petBig.memo), date:date, text:text });
  saveData(); renderBigMemo();
  document.getElementById('pet-big-memo-text').value = '';
});
// \u5927\u5b9d\u5b66\u4e60\u7c7b\u76ee\u6dfb\u52a0
document.getElementById('add-big-learning-btn').addEventListener('click', function(){
  var name = document.getElementById('big-learning-name').value.trim();
  var icon = document.getElementById('big-learning-icon').value;
  if (!name) { alert('\u8bf7\u586b\u5199\u7c7b\u76ee\u540d\u79f0'); return; }
  if (!appData.petBig.learning) appData.petBig.learning = deepClone(DEFAULT_LEARNING_MODULES);
  appData.petBig.learning.push({ id:newId(appData.petBig.learning), icon:icon, name:name, desc:'\u81ea\u5b9a\u4e49\u7c7b\u76ee' });
  saveData(); renderBigLearning();
  document.getElementById('big-learning-name').value = '';
});
// \u5927\u5b9d\u533a\u57df\u70b9\u51fb\u59d4\u6258
document.getElementById('pet-big').addEventListener('click', function(e){
  var supplyBox = e.target.closest ? e.target.closest('[data-supply-key]') : null;
  if (supplyBox) {
    var key = supplyBox.dataset.supplyKey;
    if (!appData.petBig.suppliesChecked) appData.petBig.suppliesChecked = {};
    appData.petBig.suppliesChecked[key] = !appData.petBig.suppliesChecked[key];
    saveData(); renderBigSupplies();
    return;
  }
  var learnDel = e.target.closest ? e.target.closest('[data-learn-id]') : null;
  if (learnDel) {
    var lid = parseInt(learnDel.dataset.learnId);
    appData.petBig.learning = appData.petBig.learning.filter(function(m){ return m.id !== lid; });
    if (appData.petBig.learningCompleted && appData.petBig.learningCompleted[lid]) delete appData.petBig.learningCompleted[lid];
    if (appData.petBig.learningCustom && appData.petBig.learningCustom[lid]) delete appData.petBig.learningCustom[lid];
    saveData(); renderBigLearning();
    return;
  }
  var learnModule = e.target.closest ? e.target.closest('[data-learn-module]') : null;
  if (learnModule && !e.target.classList.contains('lc-delete')) {
    currentLearningModuleId = parseInt(learnModule.dataset.learnModule);
    renderBigLearning();
    return;
  }
  var backBtn = e.target.closest ? e.target.closest('[data-action="back-to-modules"]') : null;
  if (backBtn) {
    currentLearningModuleId = null;
    renderBigLearning();
    return;
  }
  var resCheck = e.target.closest ? e.target.closest('[data-res-check]') : null;
  if (resCheck) {
    var key = resCheck.dataset.resCheck;
    var mid = currentLearningModuleId;
    if (!appData.petBig.learningCompleted) appData.petBig.learningCompleted = {};
    if (!appData.petBig.learningCompleted[mid]) appData.petBig.learningCompleted[mid] = {};
    appData.petBig.learningCompleted[mid][key] = resCheck.checked;
    saveData();
    var item = resCheck.closest('.resource-item');
    if (item) item.classList.toggle('completed', resCheck.checked);
    renderLearningDetail(mid);
    return;
  }
  var resDel = e.target.closest ? e.target.closest('[data-res-delete]') : null;
  if (resDel) {
    var rkey = resDel.dataset.resDelete;
    var dmid = currentLearningModuleId;
    var presetCount = (LEARNING_RESOURCES[dmid] || []).length;
    var customIdx = parseInt(rkey.replace('res_','')) - presetCount;
    if (appData.petBig.learningCustom && appData.petBig.learningCustom[dmid] && customIdx >= 0 && customIdx < appData.petBig.learningCustom[dmid].length) {
      appData.petBig.learningCustom[dmid].splice(customIdx, 1);
      if (appData.petBig.learningCompleted && appData.petBig.learningCompleted[dmid]) {
        var newCompleted = {};
        for (var ck in appData.petBig.learningCompleted[dmid]) {
          var ci = parseInt(ck.replace('res_',''));
          if (ci < presetCount + customIdx) newCompleted[ck] = appData.petBig.learningCompleted[dmid][ck];
          else if (ci > presetCount + customIdx) newCompleted['res_' + (ci - 1)] = appData.petBig.learningCompleted[dmid][ck];
        }
        appData.petBig.learningCompleted[dmid] = newCompleted;
      }
      saveData(); renderLearningDetail(dmid);
    }
    return;
  }
  var addResBtn = e.target.closest ? e.target.closest('#add-custom-res-btn') : null;
  if (addResBtn) {
    var rtype = document.getElementById('custom-res-type').value;
    var rtitle = document.getElementById('custom-res-title').value.trim();
    var rdesc = document.getElementById('custom-res-desc').value.trim();
    var rlink = document.getElementById('custom-res-link').value.trim();
    if (!rtitle) { alert('\u8bf7\u586b\u5199\u8d44\u6e90\u540d\u79f0'); return; }
    var amId = currentLearningModuleId;
    if (!appData.petBig.learningCustom) appData.petBig.learningCustom = {};
    if (!appData.petBig.learningCustom[amId]) appData.petBig.learningCustom[amId] = [];
    var newRes = { type:rtype, title:rtitle, desc:rdesc };
    if (rlink) newRes.link = rlink;
    appData.petBig.learningCustom[amId].push(newRes);
    saveData(); renderLearningDetail(amId);
    return;
  }
  var addCard = e.target.closest ? e.target.closest('[data-action="add-learning"]') : null;
  if (addCard) {
    document.getElementById('big-learning-name').focus();
    window.scrollTo({ top:document.getElementById('big-learning-name').getBoundingClientRect().top + window.scrollY - 80, behavior:'smooth' });
    return;
  }
  var healthDel = e.target.closest ? e.target.closest('[data-big-health-id]') : null;
  if (healthDel) {
    var hid = parseInt(healthDel.dataset.bigHealthId);
    appData.petBig.health = appData.petBig.health.filter(function(r){ return r.id !== hid; });
    saveData(); renderBigHealth();
    return;
  }
  var memoDel = e.target.closest ? e.target.closest('[data-big-memo-id]') : null;
  if (memoDel) {
    var mid = parseInt(memoDel.dataset.bigMemoId);
    appData.petBig.memo = appData.petBig.memo.filter(function(r){ return r.id !== mid; });
    saveData(); renderBigMemo();
    return;
  }
  var tab = e.target.closest ? e.target.closest('.pet-tab') : null;
  if (tab && tab.dataset.cat) {
    var cat = tab.dataset.cat;
    document.querySelectorAll('#pet-big-tabs .pet-tab').forEach(function(t){ t.classList.remove('active'); });
    tab.classList.add('active');
    document.querySelectorAll('#pet-big .pet-panel').forEach(function(p){ p.classList.remove('active'); });
    document.querySelector('#pet-big .pet-panel[data-panel="big-' + cat + '"]').classList.add('active');
  }
});

// \u5c0f\u5b9d\u4fe1\u606f\u4fdd\u5b58
document.getElementById('save-pet-small-btn').addEventListener('click', function(){
  if (!appData.petSmall) appData.petSmall = { info:{}, earlyEduChecked:{}, earlyEduStreak:{} };
  appData.petSmall.info.name = document.getElementById('pet-small-name').value.trim();
  appData.petSmall.info.birth = document.getElementById('pet-small-birth').value;
  saveData(); alert('\u5df2\u4fdd\u5b58');
});
// \u5c0f\u5b9d\u533a\u57df\u70b9\u51fb\u59d4\u6258
document.getElementById('pet-small').addEventListener('click', function(e){
  var growthBtn = e.target.closest ? e.target.closest('[data-growth-idx]') : null;
  if (growthBtn) {
    var idx = parseInt(growthBtn.dataset.growthIdx);
    document.querySelectorAll('#small-growth-stages .stage-btn').forEach(function(b){ b.classList.remove('active'); });
    growthBtn.classList.add('active');
    renderSmallGrowthDetail(idx);
    return;
  }
  var foodBtn = e.target.closest ? e.target.closest('[data-food-idx]') : null;
  if (foodBtn) {
    var fidx = parseInt(foodBtn.dataset.foodIdx);
    document.querySelectorAll('#small-food-stages .stage-btn').forEach(function(b){ b.classList.remove('active'); });
    foodBtn.classList.add('active');
    renderSmallFoodDetail(fidx);
    return;
  }
  var eeBtn = e.target.closest ? e.target.closest('[data-ee-idx]') : null;
  if (eeBtn) {
    var eidx = eeBtn.dataset.eeIdx;
    var today = todayISO();
    var key = eidx + '_' + today;
    if (!appData.petSmall.earlyEduChecked) appData.petSmall.earlyEduChecked = {};
    if (!appData.petSmall.earlyEduStreak) appData.petSmall.earlyEduStreak = {};
    if (appData.petSmall.earlyEduChecked[key]) {
      appData.petSmall.earlyEduChecked[key] = false;
    } else {
      appData.petSmall.earlyEduChecked[key] = true;
      var streakKey = String(eidx);
      appData.petSmall.earlyEduStreak[streakKey] = (appData.petSmall.earlyEduStreak[streakKey] || 0) + 1;
    }
    saveData(); renderSmallEarlyEdu();
    return;
  }
  var musicLink = e.target.closest ? e.target.closest('[data-music-search]') : null;
  if (musicLink) {
    var q = musicLink.dataset.musicSearch;
    window.open('https://www.bilibili.com/search?keyword=' + encodeURIComponent(q), '_blank');
    return;
  }
  var tab = e.target.closest ? e.target.closest('.pet-tab') : null;
  if (tab && tab.dataset.cat) {
    var cat2 = tab.dataset.cat;
    document.querySelectorAll('#pet-small-tabs .pet-tab').forEach(function(t){ t.classList.remove('active'); });
    tab.classList.add('active');
    document.querySelectorAll('#pet-small .pet-panel').forEach(function(p){ p.classList.remove('active'); });
    document.querySelector('#pet-small .pet-panel[data-panel="small-' + cat2 + '"]').classList.add('active');
  }
});

// \u6210\u957f\u677f\u5757 sub-nav \u5207\u6362
document.querySelectorAll('.growth-nav-btn').forEach(function(btn){
  btn.addEventListener('click', function(){
    var panel = btn.dataset.panel;
    document.querySelectorAll('.growth-nav-btn').forEach(function(b){ b.classList.remove('active'); });
    btn.classList.add('active');
    document.querySelectorAll('.growth-panel').forEach(function(p){ p.classList.remove('active'); });
    document.querySelector('.growth-panel[data-panel="' + panel + '"]').classList.add('active');
  });
});

function renderMemos() {
  var list = document.getElementById('memo-list');
  var memos = (appData.memos || []).slice().sort(function(a,b){ return new Date(b.date) - new Date(a.date); });
  if (!memos.length) { list.innerHTML = '<div class="empty-state"><div class="empty-icon">\u1f4dd</div><p>\u8fd8\u6ca1\u6709\u5907\u5fd8\u5f55</p></div>'; return; }
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
          item.innerHTML = '<div class="memo-audio"><audio controls src="' + url + '"></audio><span>\u1f399\ufe0f ' + (m.duration || '?') + 's</span></div><div class="memo-meta">' + m.date + '<button class="memo-delete" data-id="' + m.id + '">\u5220\u9664</button></div>';
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

/* ====== \u6570\u636e\u5bfc\u51fa/\u5bfc\u5165 ====== */
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
      if (confirm('\u786e\u8ba4\u5bfc\u5165\uff1f\u8fd9\u5c06\u8986\u76d6\u5f53\u524d\u6570\u636e\u3002')) {
        appData = migrateData(imported);
        saveData();
        alert('\u5bfc\u5165\u6210\u529f\uff01\u9875\u9762\u5c06\u5237\u65b0\u3002');
        location.reload();
      }
    } catch(err) {
      alert('\u6587\u4ef6\u683c\u5f0f\u9519\u8bef\uff0c\u65e0\u6cd5\u5bfc\u5165');
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
  renderBig();
  renderSmall();
  renderMemos();
}
init();
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function(){
    navigator.serviceWorker.register('./sw.js').then(function(){ console.log('SW registered'); }).catch(function(err){ console.log('SW error', err); });
  });
}
