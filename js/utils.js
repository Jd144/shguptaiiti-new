function generateId(){return Date.now()+'_'+Math.random().toString(36).slice(2,7)}
function getFromStorage(k){try{const v=localStorage.getItem(k);return v?JSON.parse(v):null}catch{return null}}
function saveToStorage(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){console.warn(e)}}
function removeFromStorage(k){try{localStorage.removeItem(k)}catch{}}
function formatDate(v){if(!v)return '';const d=new Date(v);return Number.isNaN(d.getTime())?v:d.toLocaleDateString('en-IN',{year:'numeric',month:'short',day:'numeric'})}
function slugify(v){return String(v||'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'')}
function truncate(v,n=100){v=String(v||'');return v.length>n?v.slice(0,n)+'…':v}
function clone(v){return JSON.parse(JSON.stringify(v))}