// ============================================================
// Icon library — minimal inline SVG, currentColor, 24x24 viewBox
// ============================================================
const ICON = {
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>',
  cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1.3"/><circle cx="18" cy="21" r="1.3"/><path d="M2.5 3h2l2.4 12.2a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 2-1.6L21 7H6"/></svg>',
  back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>',
  chevRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></svg>',
  star: '<svg viewBox="0 0 20 20" fill="currentColor"><path d="M10 1.5l2.6 5.6 6 .7-4.5 4.1 1.2 6-5.3-3-5.3 3 1.2-6L1.4 7.8l6-.7z"/></svg>',
  starHalf: '<svg viewBox="0 0 20 20" fill="currentColor"><defs><linearGradient id="hg"><stop offset="50%" stop-color="currentColor"/><stop offset="50%" stop-color="transparent"/></linearGradient></defs><path fill="url(#hg)" stroke="currentColor" stroke-width="0.6" d="M10 1.5l2.6 5.6 6 .7-4.5 4.1 1.2 6-5.3-3-5.3 3 1.2-6L1.4 7.8l6-.7z"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
  minus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M5 12h14"/></svg>',
  gear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3.2"/><path d="M19.4 13.5a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1 1.55V19.5a2 2 0 1 1-4 0v-.09a1.7 1.7 0 0 0-1.1-1.55 1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.7 1.7 0 0 0 .34-1.87 1.7 1.7 0 0 0-1.55-1H3.5a2 2 0 1 1 0-4h.09a1.7 1.7 0 0 0 1.55-1.1 1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.7 1.7 0 0 0 1.87.34H9.6a1.7 1.7 0 0 0 1-1.55V3.5a2 2 0 1 1 4 0v.09a1.7 1.7 0 0 0 1 1.55 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.7 1.7 0 0 0-.34 1.87V9.6a1.7 1.7 0 0 0 1.55 1H20.5a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1.55 1z"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z"/></svg>',
  sort: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4v16M6 4l-3 3M6 4l3 3M18 20V4M18 20l3-3M18 20l-3-3"/></svg>',
  share: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="2.6"/><circle cx="6" cy="12" r="2.6"/><circle cx="18" cy="19" r="2.6"/><path d="M8.3 10.7l7.4-4.2M8.3 13.3l7.4 4.2"/></svg>',
  qr: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3h-3zM20 14v2M17 20h2M20 20v.01M14 20v.01"/></svg>',
  dice: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="8" cy="8" r="1.3" fill="currentColor" stroke="none"/><circle cx="16" cy="8" r="1.3" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none"/><circle cx="8" cy="16" r="1.3" fill="currentColor" stroke="none"/><circle cx="16" cy="16" r="1.3" fill="currentColor" stroke="none"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>',
  receipt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2h12v19l-2.5-1.5L13 21l-2.5-1.5L8 21l-2-1.5V2z"/><path d="M8.5 7h7M8.5 11h7M8.5 15h4"/></svg>',
  noodle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10h16l-1.4 9.2a2 2 0 0 1-2 1.8H7.4a2 2 0 0 1-2-1.8L4 10z"/><path d="M6 10c0-4 2.5-7 6-7s6 3 6 7M9 13v4M12 13v4M15 13v4"/></svg>',
  rice: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11c0-4.5 3.6-8 8-8s8 3.5 8 8"/><path d="M3 11h18l-1.2 7a2 2 0 0 1-2 1.7H6.2a2 2 0 0 1-2-1.7L3 11z"/></svg>',
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/></svg>',
  mapPin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="9" r="2.4"/></svg>',
  wallet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="18" height="13" rx="2.3"/><path d="M3 10h18M16.5 14.2h.01"/></svg>',
  cash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="6" width="19" height="12" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M6 9v.01M18 15v.01"/></svg>',
  card: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="5" width="19" height="14" rx="2.4"/><path d="M2.5 10h19M6 15h4"/></svg>',
  bank: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10l9-6 9 6"/><path d="M5 10v9M9.5 10v9M14.5 10v9M19 10v9M3 21h18"/></svg>',
  moto: '<svg viewBox="0 0 48 30" fill="none"><circle cx="10" cy="24" r="5" fill="#241C15"/><circle cx="35" cy="24" r="5" fill="#241C15"/><circle cx="10" cy="24" r="2" fill="#5B4C3B"/><circle cx="35" cy="24" r="2" fill="#5B4C3B"/><path d="M10 24 L18 14 L28 14 L35 24" stroke="#241C15" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 14 L22 7 L29 7" stroke="#241C15" stroke-width="2.6" fill="none" stroke-linecap="round"/><rect x="26" y="10" width="9" height="7" rx="2" fill="#C6362A"/><circle cx="21" cy="9" r="3.4" fill="#F3E9D6"/></svg>',
  sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.4"/><path d="M12 2v2.4M12 19.6V22M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M2 12h2.4M19.6 12H22M4.9 19.1l1.7-1.7M17.4 6.6l1.7-1.7"/></svg>',
  moon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.8 14.5A8.5 8.5 0 1 1 9.5 3.2a7 7 0 0 0 11.3 11.3z"/></svg>',
  monitor: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="4" width="19" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg>',
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v13M7 11l5 5 5-5"/><path d="M4 20h16"/></svg>',
  bell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M18 9a6 6 0 1 0-12 0c0 6-2.5 7-2.5 7h17S18 15 18 9z"/><path d="M10 19a2 2 0 0 0 4 0"/></svg>',
  flame: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c4.5 0 7-2.7 7-6.5 0-3-1.8-4.7-2.7-6.9-.4 1.6-1.4 2.6-2 2.2C15.2 8 15 4 12 2c.6 3.4-1 5-2.6 7C8 10.7 7 12.4 7 15c0 3.5 2.5 7 5 7z"/></svg>',
  offline: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5a10 10 0 0 1 4.2-3.4M19 12.5a10 10 0 0 0-3.5-3.1M8.5 16a5 5 0 0 1 7 0M12 19.5v.01"/><path d="M3 3l18 18"/></svg>',
  loc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="9" r="2.4"/></svg>',
  trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M9 7V4.5A1.5 1.5 0 0 1 10.5 3h3A1.5 1.5 0 0 1 15 4.5V7M18 7l-.8 12.2A2 2 0 0 1 15.2 21H8.8a2 2 0 0 1-2-1.8L6 7"/></svg>',
  copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"/></svg>',
  bag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8h12l1 12.2a2 2 0 0 1-2 1.8H7a2 2 0 0 1-2-1.8L6 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>',
  eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>',
  logo: '<svg viewBox="0 0 32 32" fill="none"><path d="M6 13c0-5 4.5-9 10-9s10 4 10 9" stroke="#F5EFDE" stroke-width="2.6" stroke-linecap="round"/><path d="M4 13h24l-1.6 11.5A2.6 2.6 0 0 1 23.8 27H8.2a2.6 2.6 0 0 1-2.6-2.5L4 13z" fill="#F5EFDE"/><path d="M11 17.5v4M16 17.5v4M21 17.5v4" stroke="#C6362A" stroke-width="1.8" stroke-linecap="round"/></svg>',
};
function icon(name, cls){ return `<span class="ico ${cls||''}">${ICON[name]||''}</span>`; }
// ============================================================
// QR code encoder — byte mode, versions 1-4, ECC level L, mask 0
// (verified via RS-syndrome, codeword round-trip and format-info
//  round-trip checks during development)
// ============================================================
function qrEncode(text){
  const bytes = Array.from(new TextEncoder().encode(text));
  const CAP = { 1:{total:26,ec:7,data:19}, 2:{total:44,ec:10,data:34}, 3:{total:70,ec:15,data:55}, 4:{total:100,ec:20,data:80} };
  let version = null;
  for(const v of [1,2,3,4]){
    const neededBytes = Math.ceil((12 + bytes.length*8)/8);
    if(neededBytes <= CAP[v].data){ version = v; break; }
  }
  if(!version) return null; // too long — caller should fall back

  const {data:dataCw, ec:ecCw} = CAP[version];
  const size = version*4 + 17;

  let bits = [];
  const pushBits = (val,len)=>{ for(let i=len-1;i>=0;i--) bits.push((val>>i)&1); };
  pushBits(0b0100,4); pushBits(bytes.length,8);
  for(const b of bytes) pushBits(b,8);
  let termLen = Math.min(4, dataCw*8 - bits.length);
  if(termLen>0) pushBits(0,termLen);
  while(bits.length%8!==0) bits.push(0);
  let codewords=[];
  for(let i=0;i<bits.length;i+=8){ let byte=0; for(let j=0;j<8;j++) byte=(byte<<1)|bits[i+j]; codewords.push(byte); }
  const padSeq=[0xEC,0x11]; let pi=0;
  while(codewords.length<dataCw){ codewords.push(padSeq[pi%2]); pi++; }

  const EXP=new Array(512), LOG=new Array(256);
  let xx=1;
  for(let i=0;i<255;i++){ EXP[i]=xx; LOG[xx]=i; xx<<=1; if(xx&0x100) xx^=0x11D; }
  for(let i=255;i<512;i++) EXP[i]=EXP[i-255];
  const gmul=(a,b)=> (a===0||b===0) ? 0 : EXP[LOG[a]+LOG[b]];

  let gen=[1];
  for(let i=0;i<ecCw;i++){
    let next=new Array(gen.length+1).fill(0);
    for(let j=0;j<gen.length;j++){ next[j]^=gen[j]; next[j+1]^=gmul(gen[j],EXP[i]); }
    gen=next;
  }
  let msg=codewords.slice(); for(let i=0;i<ecCw;i++) msg.push(0);
  for(let i=0;i<dataCw;i++){
    const coef=msg[i]; if(coef===0) continue;
    const factor=LOG[coef];
    for(let j=0;j<gen.length;j++) msg[i+j]^=gmul(gen[j],EXP[factor]);
  }
  const ecCodewords = msg.slice(dataCw, dataCw+ecCw);
  const allCodewords = codewords.concat(ecCodewords);

  const M = Array.from({length:size},()=>new Array(size).fill(0));
  const RES = Array.from({length:size},()=>new Array(size).fill(false));
  const setFn=(r,c,val)=>{ if(r<0||c<0||r>=size||c>=size) return; M[r][c]=val; RES[r][c]=true; };
  const placeFinder=(r0,c0)=>{
    for(let r=-1;r<=7;r++) for(let c=-1;c<=7;c++){
      const rr=r0+r, cc=c0+c; if(rr<0||cc<0||rr>=size||cc>=size) continue;
      let val;
      if(r>=0&&r<=6&&c>=0&&c<=6 && (r===0||r===6||c===0||c===6)) val=1;
      else if(r>=2&&r<=4&&c>=2&&c<=4) val=1; else val=0;
      setFn(rr,cc,val);
    }
  };
  placeFinder(0,0); placeFinder(0,size-7); placeFinder(size-7,0);
  for(let i=8;i<size-8;i++){ setFn(6,i,i%2===0?1:0); setFn(i,6,i%2===0?1:0); }
  if(version>=2){
    const X=size-7;
    for(let r=-2;r<=2;r++) for(let c=-2;c<=2;c++){
      let val; if(Math.abs(r)===2||Math.abs(c)===2) val=1; else if(r===0&&c===0) val=1; else val=0;
      setFn(X+r,X+c,val);
    }
  }
  setFn(size-8,8,1);
  for(let i=0;i<9;i++){ RES[8][i]=true; RES[i][8]=true; }
  for(let i=0;i<8;i++){ RES[8][size-1-i]=true; RES[size-1-i][8]=true; }

  let dataBits=[]; for(const cw of allCodewords) for(let i=7;i>=0;i--) dataBits.push((cw>>i)&1);
  let bitIdx=0; const nextBit=()=> bitIdx<dataBits.length ? dataBits[bitIdx++] : 0;
  let col=size-1, dirUp=true;
  while(col>0){
    if(col===6) col--;
    for(let k=0;k<size;k++){
      const row = dirUp ? size-1-k : k;
      for(const c of [col,col-1]){
        if(RES[row][c]) continue;
        const bit=nextBit();
        const maskCond=(row+c)%2===0;
        M[row][c]= bit ^ (maskCond?1:0);
      }
    }
    dirUp=!dirUp; col-=2;
  }

  const fmtData=(0b01<<3)|0; // ECC level L, mask 0
  let val15=fmtData<<10;
  for(let i=14;i>=10;i--){ if((val15>>i)&1) val15 ^= (0b10100110111 << (i-10)); }
  let fmtBits15=(fmtData<<10)|val15;
  fmtBits15 ^= 0b101010000010010;
  const copyA=[[0,8],[1,8],[2,8],[3,8],[4,8],[5,8],[7,8],[8,8],[8,7],[8,5],[8,4],[8,3],[8,2],[8,1],[8,0]];
  const copyB=[[8,size-1],[8,size-2],[8,size-3],[8,size-4],[8,size-5],[8,size-6],[8,size-7],[8,size-8],
               [size-7,8],[size-6,8],[size-5,8],[size-4,8],[size-3,8],[size-2,8],[size-1,8]];
  for(let i=0;i<15;i++){
    const bv=(fmtBits15>>(14-i))&1;
    M[copyA[i][0]][copyA[i][1]]=bv; M[copyB[i][0]][copyB[i][1]]=bv;
  }
  return {size, matrix:M};
}

function renderQRtoCanvas(canvas, text, opts){
  opts = opts||{};
  const q = qrEncode(text);
  const ctx = canvas.getContext('2d');
  if(!q){ ctx.font='12px sans-serif'; ctx.fillText('QR unavailable', 10, 20); return; }
  const quiet = 4;
  const modules = q.size + quiet*2;
  const px = Math.max(4, Math.floor((opts.size||240) / modules));
  const dim = modules*px;
  canvas.width = dim; canvas.height = dim;
  ctx.fillStyle = opts.light || '#ffffff';
  ctx.fillRect(0,0,dim,dim);
  ctx.fillStyle = opts.dark || '#1B1712';
  for(let r=0;r<q.size;r++) for(let c=0;c<q.size;c++){
    if(q.matrix[r][c]===1) ctx.fillRect((c+quiet)*px,(r+quiet)*px,px,px);
  }
}
// ============================================================
// State + persistence
// ============================================================
const LS_KEY = 'fsvn_state_v1';

function detectSystemLang(){
  const nav = (navigator.language||'vi').toLowerCase();
  if(nav.startsWith('vi')) return 'vi';
  if(nav.startsWith('zh')) return 'zh';
  if(nav.startsWith('ja')) return 'ja';
  if(nav.startsWith('ko')) return 'ko';
  if(nav.startsWith('en')) return 'en';
  return 'vi';
}

function defaultState(){
  return {
    settings:{
      theme:'system', font:'system', fontSize:1, language:detectSystemLang(),
      sort:'default', installDismissed:false, installed:false,
    },
    cart:[],       // {uid, dishId, qty, spiceIds:[], sideIds:[], selected, addedAt}
    drafts:[],     // {uid, items:[...cart items...], savedAt}
    orders:[],     // {code, items:[{dishId,qty,spiceIds,sideIds,unitPrice}], total, address, payment, status, createdAt, etaMinutes, statusAt:{}, }
    recentlyViewed:[], // {dishId, viewedAt}
  };
}

let STATE = loadState();

function loadState(){
  try{
    const raw = localStorage.getItem(LS_KEY);
    if(!raw) return defaultState();
    const parsed = JSON.parse(raw);
    const d = defaultState();
    return {
      settings:Object.assign(d.settings, parsed.settings||{}),
      cart:parsed.cart||[],
      drafts:parsed.drafts||[],
      orders:parsed.orders||[],
      recentlyViewed:parsed.recentlyViewed||[],
    };
  }catch(e){
    return defaultState();
  }
}

let saveTimer=null;
function saveState(){
  clearTimeout(saveTimer);
  saveTimer = setTimeout(()=>{
    try{ localStorage.setItem(LS_KEY, JSON.stringify(STATE)); }catch(e){ /* storage full/unavailable — app still works this session */ }
  }, 80);
}

function uid(){ return 'x'+Date.now().toString(36)+Math.random().toString(36).slice(2,8); }

function genOrderCode(){
  const chars='ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let s='FS-';
  for(let i=0;i<3;i++) s+=chars[Math.floor(Math.random()*chars.length)];
  s+='-';
  for(let i=0;i<4;i++) s+=chars[Math.floor(Math.random()*chars.length)];
  return s;
}

// ---------- dish lookup ----------
const DISH_BY_ID = {};
DISHES.forEach(d=>DISH_BY_ID[d.id]=d);

function getDish(id){ return DISH_BY_ID[id]; }

// ---------- currency ----------
const FX = { vi:{rate:1, symbol:'₫', pos:'after', decimals:0}, en:{rate:1/25400, symbol:'$', pos:'before', decimals:2},
             zh:{rate:1/3500, symbol:'¥', pos:'before', decimals:2}, ja:{rate:1/163, symbol:'¥', pos:'before', decimals:0},
             ko:{rate:1/18.2, symbol:'₩', pos:'before', decimals:0} };

function formatPrice(vnd, lang){
  lang = lang || STATE.settings.language;
  const fx = FX[lang]||FX.vi;
  if(lang==='vi'){
    return '₫' + Math.round(vnd).toLocaleString('vi-VN');
  }
  const val = vnd*fx.rate;
  const rounded = fx.decimals===0 ? Math.round(val) : Math.round(val*100)/100;
  const numStr = fx.decimals===0 ? rounded.toLocaleString('en-US') : rounded.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
  return fx.pos==='before' ? fx.symbol+numStr : numStr+fx.symbol;
}
function approxNote(vnd, lang){
  lang = lang || STATE.settings.language;
  if(lang==='vi') return '';
  return '≈ ₫'+Math.round(vnd).toLocaleString('vi-VN');
}

// ---------- cart helpers ----------
function cartAdd(dishId, qty, spiceIds, sideIds){
  const existing = STATE.cart.find(it=>it.dishId===dishId && sameSet(it.spiceIds,spiceIds) && sameSet(it.sideIds,sideIds));
  if(existing){ existing.qty += qty; }
  else{ STATE.cart.push({uid:uid(), dishId, qty, spiceIds:spiceIds||[], sideIds:sideIds||[], selected:true, addedAt:Date.now()}); }
  saveState();
}
function sameSet(a,b){ a=a||[]; b=b||[]; if(a.length!==b.length) return false; const sa=[...a].sort(), sb=[...b].sort(); return sa.every((v,i)=>v===sb[i]); }
function cartRemove(cartUid){ STATE.cart = STATE.cart.filter(it=>it.uid!==cartUid); saveState(); }
function cartSetQty(cartUid, qty){
  const it = STATE.cart.find(i=>i.uid===cartUid); if(!it) return;
  it.qty = Math.max(1, qty); saveState();
}
function cartToggleSelect(cartUid){ const it=STATE.cart.find(i=>i.uid===cartUid); if(it){ it.selected=!it.selected; saveState(); } }
function cartSelectAll(val){ STATE.cart.forEach(it=>it.selected=val); saveState(); }
function cartCount(){ return STATE.cart.reduce((s,it)=>s+it.qty,0); }
function cartItemUnitPrice(it){
  const d = getDish(it.dishId); if(!d) return 0;
  let p = d.price;
  (it.spiceIds||[]).forEach(sid=>{ const sp=d.spices.find(s=>s.vi===sid); if(sp) p+=sp.price; });
  (it.sideIds||[]).forEach(sid=>{ const sd=d.sides.find(s=>s.vi===sid); if(sd) p+=sd.price; });
  return p;
}
function cartLineTotal(it){ return cartItemUnitPrice(it)*it.qty; }
function cartSelectedTotal(){ return STATE.cart.filter(it=>it.selected).reduce((s,it)=>s+cartLineTotal(it),0); }
function cartSelectedItems(){ return STATE.cart.filter(it=>it.selected); }
function cartSelectedCount(){ return cartSelectedItems().reduce((s,it)=>s+it.qty,0); }

// ---------- recently viewed ----------
function trackView(dishId){
  STATE.recentlyViewed = STATE.recentlyViewed.filter(v=>v.dishId!==dishId);
  STATE.recentlyViewed.unshift({dishId, viewedAt:Date.now()});
  STATE.recentlyViewed = STATE.recentlyViewed.slice(0,24);
  saveState();
}

// ---------- orders ----------
function placeOrder(items, address, payment, lang){
  const code = genOrderCode();
  const orderItems = items.map(it=>({dishId:it.dishId, qty:it.qty, spiceIds:it.spiceIds, sideIds:it.sideIds, unitPrice:cartItemUnitPrice(it)}));
  const total = orderItems.reduce((s,it)=>s+it.unitPrice*it.qty,0);
  const etaMinutes = 18 + Math.floor(Math.random()*23); // 18-40 min, feels real
  const order = {
    code, items:orderItems, total, address, payment, status:'confirming',
    createdAt:Date.now(), etaMinutes, statusAt:{confirming:Date.now()},
  };
  STATE.orders.unshift(order);
  saveState();
  return order;
}
function getOrder(code){ return STATE.orders.find(o=>o.code===code); }
function advanceOrderStatus(code, status){
  const o = getOrder(code); if(!o) return;
  o.status = status; o.statusAt[status]=Date.now(); saveState();
}

// ---------- drafts ----------
function saveCartAsDraft(){
  if(STATE.cart.length===0) return null;
  const draft = {uid:uid(), items:JSON.parse(JSON.stringify(STATE.cart)), savedAt:Date.now()};
  STATE.drafts.unshift(draft);
  STATE.cart = [];
  saveState();
  return draft;
}
function deleteDraft(draftUid){ STATE.drafts = STATE.drafts.filter(d=>d.uid!==draftUid); saveState(); }
function restoreDraftToCart(draftUid){
  const d = STATE.drafts.find(x=>x.uid===draftUid); if(!d) return;
  d.items.forEach(it=>STATE.cart.push(Object.assign({},it,{uid:uid(), selected:true})));
  deleteDraft(draftUid);
}
// ============================================================
// i18n helpers
// ============================================================
function t(key, params){
  const lang = STATE.settings.language;
  const entry = UI_I18N[key];
  if(!entry) return key;
  let str = entry[lang] || entry.vi || key;
  if(params){ Object.keys(params).forEach(k=>{ str = str.replace('{'+k+'}', params[k]); }); }
  return str;
}
function dishName(d, lang){
  lang = lang || STATE.settings.language;
  if(lang==='vi') return d.name_vi;
  return (d.name && d.name[lang]) || d.name_vi;
}
function dishShort(d, lang){
  lang = lang || STATE.settings.language;
  if(lang==='vi') return null; // vi uses full desc_vi instead
  return (d.short && d.short[lang]) || d.short.en;
}
function ingName(viName, lang){
  lang = lang || STATE.settings.language;
  if(lang==='vi') return viName;
  const e = ING_I18N[viName];
  return e ? (e[lang]||viName) : viName;
}
function catName(catId, lang){
  return t('cat_'+catId);
}

const FLAGS = { vi:'🇻🇳', en:'🇺🇸', zh:'🇨🇳', ja:'🇯🇵', ko:'🇰🇷' };
const LANG_LABELS = { vi:'Tiếng Việt', en:'English', zh:'中文', ja:'日本語', ko:'한국어' };

function relTime(ts, lang){
  lang = lang || STATE.settings.language;
  const diffSec = Math.max(0, Math.floor((Date.now()-ts)/1000));
  const units = [
    [60,'sec'], [3600,'min'], [86400,'hr'], [86400*30,'day'], [86400*365,'mo'],
  ];
  const LABELS = {
    vi:{sec:'giây',min:'phút',hr:'giờ',day:'ngày',mo:'tháng', ago:'trước', now:'Vừa xong'},
    en:{sec:'s',min:'m',hr:'h',day:'d',mo:'mo', ago:'ago', now:'Just now'},
    zh:{sec:'秒',min:'分钟',hr:'小时',day:'天',mo:'个月', ago:'前', now:'刚刚'},
    ja:{sec:'秒',min:'分',hr:'時間',day:'日',mo:'ヶ月', ago:'前', now:'たった今'},
    ko:{sec:'초',min:'분',hr:'시간',day:'일',mo:'개월', ago:'전', now:'방금'},
  };
  const L = LABELS[lang]||LABELS.vi;
  if(diffSec<45) return L.now;
  if(diffSec<3600){ const m=Math.floor(diffSec/60); return `${m} ${L.min} ${L.ago}`; }
  if(diffSec<86400){ const h=Math.floor(diffSec/3600); return `${h} ${L.hr} ${L.ago}`; }
  if(diffSec<86400*30){ const dd=Math.floor(diffSec/86400); return `${dd} ${L.day} ${L.ago}`; }
  const mo=Math.floor(diffSec/(86400*30)); return `${mo} ${L.mo} ${L.ago}`;
}

function formatClock(ts, lang){
  const d = new Date(ts);
  const localeMap = {vi:'vi-VN', en:'en-US', zh:'zh-CN', ja:'ja-JP', ko:'ko-KR'};
  return d.toLocaleTimeString(localeMap[lang]||localeMap[STATE.settings.language]||'vi-VN', {hour:'2-digit',minute:'2-digit'});
}

// ---------- apply static data-i18n text across the DOM ----------
function applyStaticI18n(root){
  root = root || document;
  root.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
  root.querySelectorAll('[data-i18n-ph]').forEach(el=>{
    el.setAttribute('placeholder', t(el.getAttribute('data-i18n-ph')));
  });
  document.documentElement.lang = STATE.settings.language;
}
// ============================================================
// Lightweight markdown renderer for the sourced Vietnamese descriptions
// Supports: **bold**, ## heading, blank-indent * bullets (2 levels), > blockquote, paragraphs
// ============================================================
function escapeHtml(s){
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function inlineMd(s){
  return s.replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');
}
function renderMarkdownVi(raw){
  const lines = raw.split('\n');
  let html = '';
  let listStack = []; // stack of {level, html}
  let inQuote = false; let quoteBuf = [];
  let para = [];

  function flushPara(){
    if(para.length){ html += `<p>${inlineMd(escapeHtml(para.join(' ')))}</p>`; para=[]; }
  }
  function closeLists(){
    while(listStack.length){ const top=listStack.pop(); html += top.close; }
  }
  function flushQuote(){
    if(quoteBuf.length){ html += `<blockquote>${inlineMd(escapeHtml(quoteBuf.join(' ')))}</blockquote>`; quoteBuf=[]; }
    inQuote=false;
  }

  // Since bullets need proper nested <ul>, do a two-pass: build a simple tree by tracking indent levels via a stack of <ul> open tags.
  let ulOpen = []; // depths currently open, values = indent-level

  function closeULsTo(level){
    while(ulOpen.length && ulOpen[ulOpen.length-1] >= level){ html += '</li></ul>'; ulOpen.pop(); }
    if(ulOpen.length){ html += '</li>'; }
  }

  for(let raw_line of lines){
    const line = raw_line;
    const trimmed = line.trim();

    const bulletMatch = line.match(/^(\s*)\*\s+(.*)$/);
    const quoteMatch = trimmed.match(/^>\s?(.*)$/);
    const headMatch = trimmed.match(/^##\s+(.*)$/);

    if(bulletMatch){
      flushPara(); flushQuote();
      const indent = bulletMatch[1].length;
      const level = indent >= 2 ? 1 : 0;
      const text = bulletMatch[2];
      if(ulOpen.length===0 || level > ulOpen[ulOpen.length-1]){
        html += '<ul>';
        html += `<li>${inlineMd(escapeHtml(text))}`;
        ulOpen.push(level);
      } else {
        // close deeper/equal levels first
        while(ulOpen.length && ulOpen[ulOpen.length-1] > level){ html += '</li></ul>'; ulOpen.pop(); }
        if(ulOpen.length && ulOpen[ulOpen.length-1] === level){
          html += `</li><li>${inlineMd(escapeHtml(text))}`;
        } else {
          html += '<ul>'; html += `<li>${inlineMd(escapeHtml(text))}`; ulOpen.push(level);
        }
      }
      continue;
    } else if(ulOpen.length){
      while(ulOpen.length){ html += '</li></ul>'; ulOpen.pop(); }
    }

    if(quoteMatch){
      flushPara();
      if(trimmed === '>' || quoteMatch[1]===''){ /* blank quote line = end of blockquote paragraph, ignore */ continue; }
      quoteBuf.push(quoteMatch[1]);
      inQuote = true;
      continue;
    } else if(inQuote){
      flushQuote();
    }

    if(headMatch){
      flushPara(); flushQuote();
      html += `<h3>${inlineMd(escapeHtml(headMatch[1]))}</h3>`;
      continue;
    }

    if(trimmed===''){
      flushPara();
      continue;
    }

    para.push(trimmed);
  }
  flushPara(); flushQuote();
  while(ulOpen.length){ html += '</li></ul>'; ulOpen.pop(); }
  return html;
}

// ============================================================
// Star rating renderer
// ============================================================
function starsHtml(rating){
  let s='';
  for(let i=1;i<=5;i++){
    if(rating >= i-0.25) s += ICON.star;
    else if(rating >= i-0.75) s += ICON.starHalf;
    else s += `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1" opacity="0.35"><path d="M10 1.5l2.6 5.6 6 .7-4.5 4.1 1.2 6-5.3-3-5.3 3 1.2-6L1.4 7.8l6-.7z"/></svg>`;
  }
  return `<span class="stars">${s}</span>`;
}

// ============================================================
// Dish card template
// ============================================================
function dishCardHtml(d){
  const name = dishName(d);
  return `
  <button class="dish-card" data-goto="detail" data-id="${d.id}">
    <div class="dish-thumb">
      <img src="${d.image}" alt="${escapeHtml(name)}" loading="lazy">
      <span class="dish-rating-badge">${ICON.star}${d.rating.toFixed(1)}</span>
      <span class="dish-origin-flag">🇻🇳</span>
    </div>
    <div class="dish-body">
      <div class="dish-name">${escapeHtml(name)}</div>
      <div class="dish-price-row">
        <span class="dish-price">${formatPrice(d.price)}</span>
        <span class="dish-add-btn" data-quickadd="${d.id}" aria-label="${t('add_to_cart')}">${ICON.plus}</span>
      </div>
    </div>
  </button>`;
}

function rvCardHtml(v){
  const d = getDish(v.dishId); if(!d) return '';
  return `
  <div class="rv-card" data-goto="detail" data-id="${d.id}">
    <div class="rv-thumb"><img src="${d.image}" alt="" loading="lazy"></div>
    <div class="rv-name">${escapeHtml(dishName(d))}</div>
    <div class="rv-meta">${t('viewed_label')} · ${relTime(v.viewedAt)}</div>
  </div>`;
}

const CATS = ['noodle','rice','roll','cake','porridge','skewer','mains','hotpot','veggie','dessert'];
const CAT_EMOJI = { noodle:'🍜', rice:'🍚', roll:'🥖', cake:'🫓', porridge:'🥣', skewer:'🍢', mains:'🍗', hotpot:'🍲', veggie:'🥬', dessert:'🍧' };

function toastShow(msg, iconName){
  const stack = document.getElementById('toastStack');
  const el = document.createElement('div');
  el.className='toast';
  el.innerHTML = `${ICON[iconName||'check']}<span>${escapeHtml(msg)}</span>`;
  stack.appendChild(el);
  setTimeout(()=>{ el.classList.add('leaving'); setTimeout(()=>el.remove(), 260); }, 2200);
}
// ============================================================
// Router — simple stack-based navigation with back support
// ============================================================
let NAV_STACK = [{view:'home', params:{}}];
let CURRENT_CATEGORY = 'all';
let CURRENT_SEARCH = '';
let CURRENT_SORT = 'default';
let DETAIL_STATE = {}; // per-open-detail transient selection state, keyed by dishId

function currentView(){ return NAV_STACK[NAV_STACK.length-1]; }

function navigateTo(view, params, opts){
  params = params||{}; opts = opts||{};
  if(!opts.replace){ NAV_STACK.push({view, params}); }
  else { NAV_STACK[NAV_STACK.length-1] = {view, params}; }
  try{ history.pushState({depth:NAV_STACK.length}, '', '#'+view); }catch(e){}
  renderCurrentView();
  window.scrollTo({top:0, behavior:'instant' in window ? 'instant':'auto'});
}

function goBack(){
  if(NAV_STACK.length>1){ NAV_STACK.pop(); renderCurrentView(); window.scrollTo(0,0); }
  else{ /* already at root */ }
}

window.addEventListener('popstate', ()=>{
  if(NAV_STACK.length>1){ NAV_STACK.pop(); renderCurrentView(); }
});

function renderCurrentView(){
  const {view, params} = currentView();
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  const el = document.getElementById('page-'+view);
  if(el) el.classList.add('active');

  closeAllSheets();

  if(view==='home') renderHome();
  else if(view==='category') renderCategoryPage(params.cat);
  else if(view==='detail') renderDetailPage(params.id);
  else if(view==='cart') renderCartPage();
  else if(view==='checkout') renderCheckoutPage();
  else if(view==='tracking') renderTrackingPage(params.code);
  else if(view==='orders') renderOrdersPage(params.tab);
  else if(view==='recent') renderRecentPage();

  refreshHeaderBadges();
}

function refreshHeaderBadges(){
  document.querySelectorAll('.js-cart-badge').forEach(b=>{
    const n = cartCount();
    b.textContent = n>99?'99+':n;
    b.style.display = n>0 ? 'flex':'none';
  });
}
// ============================================================
// Home page rendering
// ============================================================
function getFilteredSortedDishes(cat, search, sort){
  let list = DISHES.slice();
  if(cat && cat!=='all') list = list.filter(d=>d.cat===cat);
  if(search && search.trim()){
    const q = search.trim().toLowerCase();
    list = list.filter(d=>{
      const n1 = d.name_vi.toLowerCase();
      const n2 = (dishName(d)||'').toLowerCase();
      return n1.includes(q) || n2.includes(q);
    });
  }
  if(sort==='price_desc') list.sort((a,b)=>b.price-a.price);
  else if(sort==='price_asc') list.sort((a,b)=>a.price-b.price);
  else if(sort==='rating_desc') list.sort((a,b)=>b.rating-a.rating);
  return list;
}

function renderHome(){
  applyStaticI18n(document.getElementById('page-home'));
  document.getElementById('heroDesc').innerHTML =
    `${escapeHtml(t('hero_intro'))} <b>${escapeHtml(t('hero_bold1'))}</b> ${escapeHtml(t('hero_connector'))} <b>${escapeHtml(t('hero_bold2'))}</b> ${escapeHtml(t('hero_rest'))}`;
  document.getElementById('chipLanguageLabel').textContent = FLAGS[STATE.settings.language] + ' ' + LANG_LABELS[STATE.settings.language];
  renderInstallRibbon();
  renderHeroStats();
  renderRecentlyViewedStrip();
  renderCategoryRail();
  renderFilterRail();
  const list = getFilteredSortedDishes(CURRENT_CATEGORY, CURRENT_SEARCH, CURRENT_SORT);
  renderDishGrid('homeGrid', list);
  document.getElementById('searchInput').value = CURRENT_SEARCH;
  updateSortChipLabel();
}

function renderDishGrid(elId, list){
  const grid = document.getElementById(elId);
  if(list.length===0){
    grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1;">
      <div class="empty-emoji">🍽️</div>
      <div class="empty-title">${t('no_results')}</div>
    </div>`;
    return;
  }
  grid.innerHTML = list.map(dishCardHtml).join('');
}

function renderRecentlyViewedStrip(){
  const wrap = document.getElementById('rvSection');
  const items = STATE.recentlyViewed.slice(0,10);
  if(items.length===0){ wrap.style.display='none'; return; }
  wrap.style.display='';
  document.getElementById('rvStrip').innerHTML = items.map(rvCardHtml).join('');
}

function renderCategoryRail(){
  const rail = document.getElementById('catRail');
  rail.innerHTML = CATS.map(c=>`
    <button class="cat-tile ${CURRENT_CATEGORY===c?'is-active':''}" data-cat="${c}">
      <span class="cat-tile-icon">${CAT_EMOJI[c]}</span>
      <span class="cat-tile-label">${catName(c)}</span>
    </button>`).join('');
}

function renderFilterRail(){
  const rail = document.getElementById('filterRail');
  const cats = ['all', ...CATS];
  rail.innerHTML = cats.map(c=>`
    <button class="filter-chip ${CURRENT_CATEGORY===c?'is-active':''}" data-cat="${c}">${c==='all'?t('cat_all'):catName(c)}</button>
  `).join('');
}

function updateSortChipLabel(){
  const map = {default:'sort_label', price_desc:'sort_price_desc', price_asc:'sort_price_asc', rating_desc:'sort_rating_desc'};
  document.getElementById('sortChipLabel').textContent = t(map[CURRENT_SORT]||'sort_label');
}

function renderHeroStats(){
  document.getElementById('dishCountNum').textContent = animatedCountTarget(DISHES.length);
  const flag = document.getElementById('offlinePillWrap');
  flag.innerHTML = `${ICON.offline}<span>${t('offline_ready')}</span>`;
}

let countAnimated = false;
function animatedCountTarget(target){
  if(countAnimated) return target;
  countAnimated = true;
  const el = ()=>document.getElementById('dishCountNum');
  let cur = 0;
  const step = ()=>{
    cur += Math.max(1, Math.ceil(target/24));
    if(cur>=target){ if(el()) el().textContent = target; return; }
    if(el()) el().textContent = cur;
    requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
  return 0;
}

function renderInstallRibbon(){
  const ribbon = document.getElementById('installRibbon');
  if(!ribbon) return;
  if(STATE.settings.installed || STATE.settings.installDismissed){ ribbon.style.display='none'; return; }
  ribbon.style.display='';
}

// ---------- category sub-page (used for 🧾/🍜/🍚 quick nav & filter-rail taps deep dive) ----------
function renderCategoryPage(cat){
  const page = document.getElementById('page-category');
  applyStaticI18n(page);
  page.querySelector('.pagebar-title').textContent = cat==='all' ? t('all_dishes') : catName(cat);
  const list = getFilteredSortedDishes(cat, '', CURRENT_SORT);
  renderDishGrid('categoryGrid', list);
}

function renderRecentPage(){
  const page = document.getElementById('page-recent');
  applyStaticI18n(page);
  const list = STATE.recentlyViewed.map(v=>getDish(v.dishId)).filter(Boolean);
  renderDishGrid('recentGrid', list);
}
// ============================================================
// Detail page rendering
// ============================================================
function ensureDetailState(id){
  if(!DETAIL_STATE[id]){
    DETAIL_STATE[id] = { qty:1, spiceIds:[], sideIds:[], activeImg:0, descOpen:false };
  }
  return DETAIL_STATE[id];
}

function renderDetailPage(id){
  const d = getDish(id);
  const page = document.getElementById('page-detail');
  if(!d){ page.innerHTML = ''; return; }
  trackView(id);
  const ds = ensureDetailState(id);
  const lang = STATE.settings.language;
  const name = dishName(d);
  const short = dishShort(d);

  const gallery = [d.image, d.image, d.image]; // single source image; thumbnails reuse it as a filmstrip per spec's "small images" requirement
  page.innerHTML = `
    <div class="pagebar" id="detailBar">
      <button class="back-btn" data-back>${ICON.back}</button>
      <span class="pagebar-title">${escapeHtml(name)}</span>
      <button class="icon-btn" data-goto-cart>${ICON.cart}<span class="badge-count js-cart-badge">${cartCount()}</span></button>
    </div>
    <div class="detail-layout">
      <div class="detail-gallery">
        <div class="detail-gallery-main"><img id="detailMainImg" src="${d.image}" alt="${escapeHtml(name)}"></div>
        <div class="detail-thumbs">
          ${gallery.map((g,i)=>`<div class="detail-thumb ${i===0?'is-active':''}" data-thumb="${i}"><img src="${g}" alt=""></div>`).join('')}
        </div>
      </div>
      <div>
        <div class="detail-body" style="padding-top:14px;">
          <div class="detail-origin-row">
            <span class="origin-tag">🇻🇳 ${escapeHtml(d.origin)}</span>
          </div>
          <h1 class="detail-name">${escapeHtml(name)}</h1>
          ${lang!=='vi' ? `<div class="detail-name-vi">${escapeHtml(d.name_vi)}</div>` : ''}
          <div class="detail-meta-row">
            ${starsHtml(d.rating)}<span class="rating-num">${d.rating.toFixed(1)}</span>
          </div>
          <div class="detail-price">${formatPrice(d.price)}${lang!=='vi'?`<span class="vnd-approx">${approxNote(d.price)}</span>`:''}</div>

          ${short ? `<p style="margin-top:14px;font-size:.86rem;color:var(--ink-soft);line-height:1.6;">${escapeHtml(short)}</p>` : ''}

          <div class="detail-section">
            <div class="desc-toggle-card ${ds.descOpen?'open':''}" id="descToggle">
              <span style="display:flex;align-items:center;gap:8px;font-weight:700;font-size:.88rem;">${ICON.receipt}${t('description_label')}</span>
              <span class="chev">${ICON.chevRight}</span>
            </div>
            <div class="desc-body ${ds.descOpen?'open':''}" id="descBody">${renderMarkdownVi(d.desc_vi)}</div>
          </div>

          ${d.spices.length ? `
          <div class="detail-section">
            <div class="detail-section-title">${t('spices_label')}</div>
            <div class="chip-row" id="spiceChips">
              ${spiceChipHtml('none', t('none_option'), 0, ds.spiceIds.includes('none'))}
              ${d.spices.map(s=>spiceChipHtml(s.vi, ingName(s.vi), s.price, ds.spiceIds.includes(s.vi))).join('')}
            </div>
          </div>` : ''}

          ${d.sides.length ? `
          <div class="detail-section">
            <div class="detail-section-title">${t('sides_label')}</div>
            <div class="chip-row" id="sideChips">
              ${spiceChipHtml('none', t('none_option'), 0, ds.sideIds.includes('none'))}
              ${d.sides.map(s=>spiceChipHtml(s.vi, ingName(s.vi), s.price, ds.sideIds.includes(s.vi))).join('')}
            </div>
          </div>` : ''}

          <div class="detail-section" style="margin-top:26px;">
            <div class="detail-section-title">${t('quantity_label')}</div>
            <div class="stepper" id="detailStepper">
              <button data-step="-1">${ICON.minus}</button>
              <span class="qty" id="detailQty">${ds.qty}</span>
              <button data-step="1">${ICON.plus}</button>
            </div>
          </div>

          <div class="btn-row" style="margin-top:24px;" id="detailBuyRowDesktop">
            <button class="btn btn-secondary" data-action="add-cart">${ICON.cart}${t('add_to_cart')}</button>
            <button class="btn btn-primary" data-action="buy-now">${t('buy_now')}</button>
          </div>
        </div>
      </div>
    </div>
    <div class="sticky-buybar" id="detailStickyBar">
      <div class="sticky-buybar-pricerow">
        <span class="sticky-buybar-pricelabel">${t('total_label')}</span>
        <span class="sticky-buybar-price" id="stickyPrice">${formatPrice(d.price*ds.qty)}</span>
      </div>
      <div class="sticky-buybar-row">
        <div class="stepper" id="detailStepperMobile">
          <button data-step="-1">${ICON.minus}</button>
          <span class="qty" id="detailQtyMobile">${ds.qty}</span>
          <button data-step="1">${ICON.plus}</button>
        </div>
        <div class="btn-row">
          <button class="btn btn-secondary" data-action="add-cart">${ICON.cart}</button>
          <button class="btn btn-primary" data-action="buy-now">${t('buy_now')}</button>
        </div>
      </div>
    </div>
  `;
  wireDetailPage(d, ds);
}

function detailUnitPrice(d, ds){
  let p = d.price;
  ds.spiceIds.filter(x=>x!=='none').forEach(id=>{ const s=d.spices.find(x=>x.vi===id); if(s) p+=s.price; });
  ds.sideIds.filter(x=>x!=='none').forEach(id=>{ const s=d.sides.find(x=>x.vi===id); if(s) p+=s.price; });
  return p;
}

function spiceChipHtml(id, label, price, selected){
  return `<button class="chip ${selected?'is-selected':''}" data-chip="${escapeHtml(id)}">
    <span class="chip-tick">${ICON.check}</span>
    <span>${escapeHtml(label)}</span>
    ${price>0?`<span class="chip-price">+${formatPrice(price)}</span>`:''}
  </button>`;
}

function wireDetailPage(d, ds){
  const page = document.getElementById('page-detail');
  // back + cart-nav buttons use [data-back]/[data-goto-cart] which are handled by
  // the global document-level delegation in wireGlobalDelegation() — do not
  // attach page-specific listeners here too, or clicks fire twice.

  page.querySelectorAll('.detail-thumb').forEach(th=>{
    th.addEventListener('click', ()=>{
      page.querySelectorAll('.detail-thumb').forEach(x=>x.classList.remove('is-active'));
      th.classList.add('is-active');
    });
  });

  const descToggle = page.querySelector('#descToggle');
  if(descToggle){
    descToggle.addEventListener('click', ()=>{
      ds.descOpen = !ds.descOpen;
      descToggle.classList.toggle('open', ds.descOpen);
      page.querySelector('#descBody').classList.toggle('open', ds.descOpen);
    });
  }

  function toggleChip(group, id){
    const isNone = id==='none';
    if(isNone){ group.length = 0; group.push('none'); }
    else{
      const noneIdx = group.indexOf('none'); if(noneIdx>-1) group.splice(noneIdx,1);
      const idx = group.indexOf(id);
      if(idx>-1) group.splice(idx,1); else group.push(id);
    }
  }
  const spiceWrap = page.querySelector('#spiceChips');
  if(spiceWrap){
    spiceWrap.addEventListener('click', (e)=>{
      const chip = e.target.closest('[data-chip]'); if(!chip) return;
      toggleChip(ds.spiceIds, chip.dataset.chip);
      spiceWrap.querySelectorAll('.chip').forEach(c=>c.classList.remove('is-selected'));
      spiceWrap.querySelectorAll('.chip').forEach(c=>{
        const cid = c.dataset.chip;
        if(ds.spiceIds.includes(cid)) c.classList.add('is-selected');
      });
      syncPrice();
    });
  }
  const sideWrap = page.querySelector('#sideChips');
  if(sideWrap){
    sideWrap.addEventListener('click', (e)=>{
      const chip = e.target.closest('[data-chip]'); if(!chip) return;
      toggleChip(ds.sideIds, chip.dataset.chip);
      sideWrap.querySelectorAll('.chip').forEach(c=>{
        const cid = c.dataset.chip;
        c.classList.toggle('is-selected', ds.sideIds.includes(cid));
      });
      syncPrice();
    });
  }

  function syncQty(){
    page.querySelectorAll('#detailQty,#detailQtyMobile').forEach(e=>e.textContent=ds.qty);
    syncPrice();
  }
  function syncPrice(){
    const priceEl = page.querySelector('#stickyPrice');
    if(priceEl) priceEl.textContent = formatPrice(detailUnitPrice(d, ds) * ds.qty);
  }
  page.querySelectorAll('[data-step]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const delta = parseInt(btn.dataset.step,10);
      ds.qty = Math.max(1, Math.min(99, ds.qty+delta));
      syncQty();
    });
  });

  function currentSelection(){
    const spiceIds = ds.spiceIds.filter(x=>x!=='none');
    const sideIds = ds.sideIds.filter(x=>x!=='none');
    return {spiceIds, sideIds};
  }

  page.querySelectorAll('[data-action="add-cart"]').forEach(btn=>btn.addEventListener('click', ()=>{
    const {spiceIds, sideIds} = currentSelection();
    cartAdd(d.id, ds.qty, spiceIds, sideIds);
    refreshHeaderBadges();
    toastShow(t('added_to_cart_toast'), 'cart');
  }));
  page.querySelectorAll('[data-action="buy-now"]').forEach(btn=>btn.addEventListener('click', ()=>{
    const {spiceIds, sideIds} = currentSelection();
    cartAdd(d.id, ds.qty, spiceIds, sideIds);
    // select only this line, deselect rest for a focused "buy now" checkout
    const line = STATE.cart[STATE.cart.length-1];
    STATE.cart.forEach(it=>it.selected = (it===line));
    saveState();
    navigateTo('checkout');
  }));
}
// ============================================================
// Cart page rendering
// ============================================================
function cartItemOptsLabel(it){
  const d = getDish(it.dishId); if(!d) return '';
  const parts = [];
  (it.spiceIds||[]).forEach(id=>{ const s=d.spices.find(x=>x.vi===id); if(s) parts.push(ingName(s.vi)); });
  (it.sideIds||[]).forEach(id=>{ const s=d.sides.find(x=>x.vi===id); if(s) parts.push(ingName(s.vi)); });
  return parts.join(', ');
}

function cartItemHtml(it){
  const d = getDish(it.dishId); if(!d) return '';
  const opts = cartItemOptsLabel(it);
  return `
  <div class="cart-item" data-uid="${it.uid}">
    <div class="cart-item-check">
      <div class="check-red ${it.selected?'is-selected':''}" data-select="${it.uid}">${ICON.check}</div>
    </div>
    <div class="cart-thumb" data-goto="detail" data-id="${d.id}"><img src="${d.image}" alt=""></div>
    <div class="cart-item-body">
      <div class="cart-item-name">${escapeHtml(dishName(d))}</div>
      ${opts ? `<div class="cart-item-opts">${escapeHtml(opts)}</div>` : ''}
      <div class="cart-item-bottom">
        <span class="cart-item-price">${formatPrice(cartLineTotal(it))}</span>
        <div class="stepper stepper-sm">
          <button data-cartstep="-1" data-uid="${it.uid}">${ICON.minus}</button>
          <span class="qty">${it.qty}</span>
          <button data-cartstep="1" data-uid="${it.uid}">${ICON.plus}</button>
        </div>
      </div>
    </div>
    <button class="cart-remove" data-remove="${it.uid}">${ICON.trash}</button>
  </div>`;
}

function renderCartPage(){
  const page = document.getElementById('page-cart');
  applyStaticI18n(page);
  page.querySelector('.pagebar-title').textContent = `${t('cart')} (${cartCount()})`;

  const listEl = document.getElementById('cartList');
  const emptyEl = document.getElementById('cartEmpty');
  const summaryEl = document.getElementById('cartSummaryBar');

  if(STATE.cart.length===0){
    listEl.style.display='none'; summaryEl.style.display='none'; emptyEl.style.display='';
    emptyEl.innerHTML = `
      <div class="empty-emoji">🛒</div>
      <div class="empty-title">${t('empty_cart')}</div>
      <div class="empty-sub">${t('empty_cart_sub')}</div>
      <button class="btn btn-primary" id="cartExploreBtn">${t('explore_now')}</button>`;
    document.getElementById('cartExploreBtn').addEventListener('click', ()=>navigateTo('home'));
    return;
  }
  listEl.style.display=''; summaryEl.style.display=''; emptyEl.style.display='none';

  listEl.innerHTML = `
    <div class="select-all-row">
      <div class="check-red ${STATE.cart.every(i=>i.selected)?'is-selected':''}" id="selectAllChk">${ICON.check}</div>
      <span style="font-size:.86rem;font-weight:600;">${t('select_all')}</span>
      <button class="link-more" id="saveDraftBtn" style="margin-left:auto;">${t('save_draft')}</button>
    </div>
    ${STATE.cart.map(cartItemHtml).join('')}
  `;

  const total = cartSelectedTotal();
  const selCount = cartSelectedCount();
  summaryEl.innerHTML = `
    <div class="cart-summary-row">
      <span style="font-size:.82rem;color:var(--ink-faint);">${t('total_label')}</span>
      <span class="cart-summary-total">${formatPrice(total)}</span>
    </div>
    <button class="btn btn-primary" id="cartBuyBtn">${t('buy_button')} (${selCount})</button>
  `;

  wireCartPage();
}

function wireCartPage(){
  const page = document.getElementById('page-cart');
  page.querySelectorAll('[data-goto="detail"]').forEach(el=>{
    el.addEventListener('click', (e)=>{ e.stopPropagation(); navigateTo('detail', {id:parseInt(el.dataset.id,10)}); });
  });
  page.querySelectorAll('[data-select]').forEach(el=>{
    el.addEventListener('click', ()=>{ cartToggleSelect(el.dataset.select); renderCartPage(); });
  });
  const selAll = document.getElementById('selectAllChk');
  if(selAll){
    selAll.addEventListener('click', ()=>{
      const allSelected = STATE.cart.every(i=>i.selected);
      cartSelectAll(!allSelected);
      renderCartPage();
    });
  }
  page.querySelectorAll('[data-cartstep]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const it = STATE.cart.find(i=>i.uid===btn.dataset.uid); if(!it) return;
      const delta = parseInt(btn.dataset.cartstep,10);
      cartSetQty(it.uid, it.qty+delta);
      renderCartPage();
    });
  });
  page.querySelectorAll('[data-remove]').forEach(btn=>{
    btn.addEventListener('click', ()=>{ cartRemove(btn.dataset.remove); refreshHeaderBadges(); renderCartPage(); });
  });
  const draftBtn = document.getElementById('saveDraftBtn');
  if(draftBtn){
    draftBtn.addEventListener('click', ()=>{
      saveCartAsDraft();
      refreshHeaderBadges();
      toastShow(t('draft_saved_toast'), 'receipt');
      renderCartPage();
    });
  }
  const buyBtn = document.getElementById('cartBuyBtn');
  if(buyBtn){
    buyBtn.addEventListener('click', ()=>{
      if(cartSelectedItems().length===0){ openConfirmModal(t('empty_cart_selection_msg')); return; }
      navigateTo('checkout');
    });
  }
}

function openConfirmModal(message){
  const overlay = document.getElementById('confirmModalOverlay');
  document.getElementById('confirmModalMsg').textContent = message;
  overlay.classList.add('open');
}
// ============================================================
// Checkout page
// ============================================================
let CHECKOUT_PAYMENT = 'cod';

function checkoutItemRow(it){
  const d = getDish(it.dishId); if(!d) return '';
  return `<div class="checkout-item-row">
    <img src="${d.image}" alt="">
    <span class="ci-name">${escapeHtml(dishName(d))}</span>
    <span class="ci-qty">x${it.qty}</span>
    <span class="ci-price">${formatPrice(cartLineTotal(it))}</span>
  </div>`;
}

const PAY_METHODS = [
  {id:'cod', icon:'cash', labelKey:'cod'},
  {id:'ewallet', icon:'wallet', labelKey:'pay_ewallet'},
  {id:'card', icon:'card', labelKey:'pay_card'},
  {id:'transfer', icon:'bank', labelKey:'pay_transfer'},
];

function renderCheckoutPage(){
  const page = document.getElementById('page-checkout');
  applyStaticI18n(page);
  const items = cartSelectedItems();
  if(items.length===0){ navigateTo('cart', {}, {replace:true}); return; }
  const total = items.reduce((s,it)=>s+cartLineTotal(it),0);

  document.getElementById('checkoutBody').innerHTML = `
    <div class="checkout-layout">
      <div>
        <div class="section-card">
          <div class="section-card-head">
            <span class="section-card-title">${ICON.mapPin}${t('delivery_address_label')}</span>
          </div>
          <div class="address-block">
            <div class="address-icon">${ICON.home}</div>
            <div>
              <div class="address-name">${t('my_home')}</div>
              <div class="address-note">${t('address_note')}</div>
            </div>
          </div>
        </div>

        <div class="section-card">
          <div class="section-card-head"><span class="section-card-title">${ICON.receipt}${t('checkout_title')}</span></div>
          ${items.map(checkoutItemRow).join('')}
        </div>

        <div class="section-card">
          <div class="section-card-head"><span class="section-card-title">${ICON.wallet}${t('payment_method_label')}</span></div>
          <div id="payMethodList">
            ${PAY_METHODS.map(pm=>`
              <div class="radio-row" data-pay="${pm.id}">
                <div class="radio-icon">${ICON[pm.icon]}</div>
                <span class="radio-text">${t(pm.labelKey)}</span>
                <div class="check-red ${CHECKOUT_PAYMENT===pm.id?'is-selected':''}">${ICON.check}</div>
              </div>`).join('')}
          </div>
        </div>
      </div>

      <div>
        <div class="section-card">
          <div class="total-line" style="border-top:none;padding-top:0;margin-top:0;">
            <span class="tl-label">${t('total_label')}</span>
            <span class="tl-value">${formatPrice(total)}</span>
          </div>
        </div>
        <button class="btn btn-primary" id="placeOrderBtn" style="margin-top:4px;">${t('place_order')}</button>
      </div>
    </div>
  `;
  wireCheckoutPage(items, total);
}

function wireCheckoutPage(items, total){
  const page = document.getElementById('page-checkout');
  page.querySelectorAll('[data-pay]').forEach(row=>{
    row.addEventListener('click', ()=>{
      CHECKOUT_PAYMENT = row.dataset.pay;
      page.querySelectorAll('[data-pay] .check-red').forEach(c=>c.classList.remove('is-selected'));
      row.querySelector('.check-red').classList.add('is-selected');
    });
  });
  document.getElementById('placeOrderBtn').addEventListener('click', ()=>{
    const order = placeOrder(items, t('my_home'), CHECKOUT_PAYMENT);
    // remove purchased items from cart
    const purchasedUids = new Set(items.map(i=>i.uid));
    STATE.cart = STATE.cart.filter(it=>!purchasedUids.has(it.uid));
    saveState();
    refreshHeaderBadges();
    navigateTo('tracking', {code:order.code}, {replace:true});
  });
}
// ============================================================
// Order tracking — signature moment: animated moto on a city map
// Route verified analytically to stay within street corridors
// (never crosses a building rect) — see design notes.
// ============================================================
const SIM_MS = { confirming: 3000, picking: 4000, delivering: 24000 };
const ROUTE_D = "M 8 8 L 8 77 L 108 77 L 108 148 L 212 148 L 212 216 L 312 216";

function computeOrderProgress(order){
  if(order.status==='delivered') return {status:'delivered', frac:1};
  const elapsed = Date.now() - order.createdAt;
  const t1 = SIM_MS.confirming, t2 = t1+SIM_MS.picking, t3 = t2+SIM_MS.delivering;
  if(elapsed < t1) return {status:'confirming', frac:elapsed/t1};
  if(elapsed < t2) return {status:'picking', frac:(elapsed-t1)/SIM_MS.picking};
  if(elapsed < t3) return {status:'delivering', frac:(elapsed-t2)/SIM_MS.delivering};
  return {status:'delivered', frac:1};
}

function cityMapSvg(){
  return `
  <svg viewBox="0 0 320 224" preserveAspectRatio="xMidYMid meet">
    <rect x="0" y="0" width="320" height="224" fill="var(--cream-2)"/>
    ${[[16,16,80,50],[120,16,80,50],[224,16,80,50],[16,87,80,50],[224,87,80,50],[16,158,80,50],[120,158,80,50],[224,158,80,50]]
      .map(([x,y,w,h])=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="var(--line)" opacity="0.85"/>`).join('')}
    <circle cx="160" cy="112" r="20" fill="var(--herb-tint)"/>
    <circle cx="152" cy="106" r="3.2" fill="var(--herb)"/>
    <circle cx="166" cy="110" r="3.6" fill="var(--herb)"/>
    <circle cx="158" cy="120" r="3" fill="var(--herb)"/>
    <path id="routePath" d="${ROUTE_D}" fill="none" stroke="var(--gold)" stroke-width="2.5" stroke-dasharray="1 7" stroke-linecap="round" opacity="0.9"/>
    <g transform="translate(8,8)">
      <circle r="9" fill="var(--chili)"/>
      <g fill="#fff" transform="scale(0.55) translate(-12,-12)">${ICON.receipt.replace(/<svg[^>]*>|<\/svg>/g,'')}</g>
    </g>
    <g transform="translate(312,216)">
      <circle r="9" fill="var(--herb)"/>
      <g fill="#fff" transform="scale(0.55) translate(-12,-12)">${ICON.home.replace(/<svg[^>]*>|<\/svg>/g,'')}</g>
    </g>
    <g id="motoGroup" class="moto-icon" transform="translate(8,8)">
      <g transform="scale(0.72) translate(-24,-15)">${ICON.moto.replace(/<svg[^>]*>|<\/svg>/g,'')}</g>
    </g>
  </svg>`;
}

let TRACK_TIMER = null;
let TRACK_CODE = null;

function renderTrackingPage(code){
  TRACK_CODE = code;
  const page = document.getElementById('page-tracking');
  applyStaticI18n(page);
  const order = getOrder(code);
  if(!order){ page.querySelector('#trackBody').innerHTML = ''; return; }
  page.querySelector('#trackBody').innerHTML = trackBodyHtml(order);
  wireTrackingPage(order);
  updateTrackingUI(order, true);
  if(TRACK_TIMER) clearInterval(TRACK_TIMER);
  TRACK_TIMER = setInterval(()=>{
    const o = getOrder(TRACK_CODE); if(!o) return;
    updateTrackingUI(o, false);
  }, 400);
}

function trackBodyHtml(order){
  const items = order.items.map(it=>{
    const d = getDish(it.dishId); if(!d) return '';
    return `<div class="checkout-item-row"><img src="${d.image}"><span class="ci-name">${escapeHtml(dishName(d))}</span><span class="ci-qty">x${it.qty}</span><span class="ci-price">${formatPrice(it.unitPrice*it.qty)}</span></div>`;
  }).join('');

  return `
    <div id="trackStatusTitle" class="track-status-title"></div>
    <div id="trackEta" class="track-eta"></div>

    <div class="track-steps">
      <div class="track-steps-fill" id="trackFill" style="width:0%"></div>
      ${['confirming','picking','delivering','delivered'].map(s=>`
        <div class="track-step" data-step="${s}">
          <div class="track-step-dot">${ICON.check}</div>
          <div class="track-step-label">${t('status_'+s)}</div>
        </div>`).join('')}
    </div>

    <div class="map-card">
      <div class="map-svg-wrap" id="mapSvgWrap">${cityMapSvg()}</div>
      <div class="map-caption">
        <span>${t('order_code_label')}: <span class="code">${order.code}</span></span>
        <span id="mapEtaLabel"></span>
      </div>
    </div>

    <div id="successBlock" style="display:none;">
      <div class="track-success-badge">
        <div class="success-tick">${ICON.check}</div>
      </div>
    </div>

    <div class="receipt-card grain">
      <div class="receipt-row"><span class="rr-label">${t('order_code_label')}</span><span class="rr-value">${order.code}</span></div>
      <div class="receipt-row"><span class="rr-label">${t('delivery_address_label')}</span><span class="rr-value">${escapeHtml(order.address)}</span></div>
      <div class="receipt-divider"></div>
      ${items}
      <div class="receipt-divider"></div>
      <div class="receipt-row"><span class="rr-label" style="font-weight:700;">${t('total_label')}</span><span class="rr-value" style="color:var(--chili);font-size:1rem;">${formatPrice(order.total)}</span></div>
    </div>

    <button class="btn btn-outline" id="trackCopyBtn" style="margin-top:18px;">${ICON.copy}${t('copy_order')}</button>
  `;
}

function wireTrackingPage(order){
  const page = document.getElementById('page-tracking');
  page.querySelector('[data-back-orders]')?.addEventListener('click', ()=>{ navigateTo('orders'); });
  document.getElementById('trackCopyBtn').addEventListener('click', ()=>{
    const summary = orderShareText(order);
    copyToClipboard(summary);
    toastShow(t('copied'), 'copy');
  });
}

const STEP_ORDER = ['confirming','picking','delivering','delivered'];
function updateTrackingUI(order, isInit){
  const prog = computeOrderProgress(order);
  if(order.status !== prog.status){
    advanceOrderStatus(order.code, prog.status);
    if(prog.status==='delivered'){ fireDeliveredNotification(order); }
  }
  const page = document.getElementById('page-tracking');
  if(!page.classList.contains('active')) return;

  const idx = STEP_ORDER.indexOf(prog.status);
  page.querySelectorAll('.track-step').forEach((el,i)=>{
    el.classList.toggle('is-done', i<idx || (i===idx && prog.status==='delivered'));
    el.classList.toggle('is-active', i===idx && prog.status!=='delivered');
  });
  const fillPct = idx<=0 ? 0 : (idx/(STEP_ORDER.length-1))*100;
  const fillEl = document.getElementById('trackFill');
  if(fillEl) fillEl.style.width = (prog.status==='delivered'?100: (idx/(STEP_ORDER.length-1))*100 ) + '%';

  const titleEl = document.getElementById('trackStatusTitle');
  if(titleEl) titleEl.textContent = t('status_'+prog.status);

  const etaEl = document.getElementById('trackEta');
  const mapEtaEl = document.getElementById('mapEtaLabel');
  if(prog.status==='delivered'){
    if(etaEl) etaEl.textContent = '';
    if(mapEtaEl) mapEtaEl.textContent = '✓ ' + t('status_delivered');
    document.getElementById('successBlock').style.display='';
  } else {
    const remainMin = Math.max(1, Math.round(order.etaMinutes * (1-prog.frac)));
    if(etaEl) etaEl.textContent = `${t('eta_label')}: ~${remainMin} ${t('item_count_suffix')==='items'?'min':''}`.trim();
    if(mapEtaEl) mapEtaEl.textContent = `~${remainMin} min`;
  }

  // move moto along path once delivering
  const pathEl = document.getElementById('routePath');
  const motoEl = document.getElementById('motoGroup');
  if(pathEl && motoEl){
    let travelFrac = 0;
    if(prog.status==='delivering') travelFrac = prog.frac;
    else if(prog.status==='delivered' || idx>STEP_ORDER.indexOf('delivering')) travelFrac = 1;
    else travelFrac = 0;
    try{
      const len = pathEl.getTotalLength();
      const pt = pathEl.getPointAtLength(len*travelFrac);
      const pt2 = pathEl.getPointAtLength(Math.min(len, len*travelFrac+1));
      const angle = Math.atan2(pt2.y-pt.y, pt2.x-pt.x) * 180/Math.PI;
      motoEl.setAttribute('transform', `translate(${pt.x},${pt.y}) rotate(${angle})`);
    }catch(e){ /* path metrics unavailable on very old browsers — icon stays at start */ }
  }
}

function fireDeliveredNotification(order){
  const body = t('notif_delivered_body', {code:order.code});
  if('Notification' in window){
    if(Notification.permission === 'granted'){
      try{ new Notification(t('notif_delivered_title'), {body, icon:''}); }catch(e){}
    } else if(Notification.permission !== 'denied'){
      Notification.requestPermission().then(p=>{
        if(p==='granted'){ try{ new Notification(t('notif_delivered_title'), {body}); }catch(e){} }
      });
    }
  }
  toastShow(t('notif_delivered_title'), 'check');
}

function orderShareText(order){
  const first = getDish(order.items[0]?.dishId);
  return t('share_order_text', {dish: first ? dishName(first) : ''});
}

function copyToClipboard(text){
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(text).catch(()=>{ fallbackCopy(text); });
  } else fallbackCopy(text);
}
function fallbackCopy(text){
  const ta = document.createElement('textarea');
  ta.value = text; ta.style.position='fixed'; ta.style.opacity='0';
  document.body.appendChild(ta); ta.select();
  try{ document.execCommand('copy'); }catch(e){}
  document.body.removeChild(ta);
}
// ============================================================
// Orders page — tabs: incoming / purchased / history / drafts
// ============================================================
let ORDERS_TAB = 'incoming';

function renderOrdersPage(tab){
  if(tab) ORDERS_TAB = tab;
  const page = document.getElementById('page-orders');
  applyStaticI18n(page);
  const tabs = [
    {id:'incoming', key:'orders_incoming'},
    {id:'purchased', key:'orders_purchased'},
    {id:'history', key:'orders_history'},
    {id:'draft', key:'orders_draft'},
  ];
  document.getElementById('ordersTabs').innerHTML = tabs.map(tb=>
    `<button class="tab-chip ${ORDERS_TAB===tb.id?'is-active':''}" data-tab="${tb.id}">${t(tb.key)}</button>`
  ).join('');

  const listEl = document.getElementById('ordersList');
  let html = '';
  if(ORDERS_TAB==='draft'){
    if(STATE.drafts.length===0){ html = ordersEmptyHtml(); }
    else{ html = STATE.drafts.map(draftCardHtml).join(''); }
  } else {
    let orders = STATE.orders.slice();
    if(ORDERS_TAB==='incoming') orders = orders.filter(o=>o.status!=='delivered');
    else if(ORDERS_TAB==='purchased') orders = orders.filter(o=>o.status==='delivered');
    // history = all
    if(orders.length===0){ html = ordersEmptyHtml(); }
    else{ html = orders.map(orderCardHtml).join(''); }
  }
  listEl.innerHTML = html;
  wireOrdersPage();
}

function ordersEmptyHtml(){
  return `<div class="empty-state"><div class="empty-emoji">🧾</div><div class="empty-title">${t('orders_empty')}</div></div>`;
}

function orderCardHtml(order){
  const imgs = order.items.map(it=>getDish(it.dishId)).filter(Boolean).map(d=>`<img src="${d.image}" alt="">`).join('');
  const prog = computeOrderProgress(order);
  return `
  <div class="order-card" data-order="${order.code}">
    <div class="order-card-top">
      <span class="order-code">${order.code} · ${formatClock(order.createdAt)}</span>
      <span class="status-pill ${prog.status}">${t('status_'+prog.status)}</span>
    </div>
    <div class="order-items-preview">${imgs}</div>
    <div class="order-card-bottom">
      <span class="order-total">${formatPrice(order.total)}</span>
      <span class="order-date">${order.items.reduce((s,i)=>s+i.qty,0)} ${t('item_count_suffix')}</span>
    </div>
  </div>`;
}

function draftCardHtml(draft){
  const imgs = draft.items.map(it=>getDish(it.dishId)).filter(Boolean).map(d=>`<img src="${d.image}" alt="">`).join('');
  const total = draft.items.reduce((s,it)=>s+cartItemUnitPrice(it)*it.qty,0);
  return `
  <div class="order-card" data-draft="${draft.uid}">
    <div class="order-card-top">
      <span class="order-code">${formatClock(draft.savedAt)}</span>
      <span class="status-pill draft">${t('orders_draft')}</span>
    </div>
    <div class="order-items-preview">${imgs}</div>
    <div class="order-card-bottom">
      <span class="order-total">${formatPrice(total)}</span>
      <button class="btn btn-sm btn-secondary" data-restore="${draft.uid}">${t('reorder')}</button>
    </div>
  </div>`;
}

function wireOrdersPage(){
  const page = document.getElementById('page-orders');
  page.querySelectorAll('[data-tab]').forEach(btn=>{
    btn.addEventListener('click', ()=>{ ORDERS_TAB = btn.dataset.tab; renderOrdersPage(); });
  });
  page.querySelectorAll('[data-order]').forEach(card=>{
    card.addEventListener('click', ()=>navigateTo('tracking', {code:card.dataset.order}));
  });
  page.querySelectorAll('[data-restore]').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      e.stopPropagation();
      restoreDraftToCart(btn.dataset.restore);
      refreshHeaderBadges();
      toastShow(t('added_to_cart_toast'), 'cart');
      renderOrdersPage();
    });
  });
}
// ============================================================
// Sheets: appearance/font, language, sort
// ============================================================
function closeAllSheets(){
  document.querySelectorAll('.sheet').forEach(s=>s.classList.remove('open'));
  document.querySelectorAll('.sheet-overlay').forEach(o=>o.classList.remove('open'));
}
function openSheet(id){
  closeAllSheets();
  document.getElementById(id).classList.add('open');
  document.getElementById(id+'Overlay').classList.add('open');
}

function applyTheme(){
  document.documentElement.setAttribute('data-theme', STATE.settings.theme);
}
function applyFont(){
  document.body.classList.remove('font-system','font-rounded','font-serif','font-mono');
  if(STATE.settings.font!=='display') document.body.classList.add('font-'+STATE.settings.font);
}
function applyFontSize(){
  document.documentElement.style.setProperty('--fs-scale', STATE.settings.fontSize);
}

function renderSettingsSheet(){
  const wrap = document.getElementById('settingsSheetBody');
  const themes = [{id:'light',icon:'sun'},{id:'dark',icon:'moon'},{id:'system',icon:'monitor'}];
  const fonts = [{id:'system',key:'font_system'},{id:'display',key:'font_system'},{id:'rounded',key:'font_rounded'},{id:'serif',key:'font_serif'},{id:'mono',key:'font_mono'}];
  wrap.innerHTML = `
    <div class="sheet-group">
      <div class="sheet-group-label">${t('interface_label')}</div>
      ${themes.map(th=>`
        <div class="opt-row ${STATE.settings.theme===th.id?'is-selected':''}" data-theme-opt="${th.id}">
          <span class="opt-label">${ICON[th.icon]} ${t('theme_'+th.id)}</span>
          <span class="check-red">${ICON.check}</span>
        </div>`).join('')}
    </div>
    <div class="sheet-group">
      <div class="sheet-group-label">${t('change_font')}</div>
      ${fonts.filter(f=>f.id!=='display').map(f=>`
        <div class="opt-row ${STATE.settings.font===f.id?'is-selected':''}" data-font-opt="${f.id}">
          <span class="opt-label" style="font-family:${f.id==='system'?'inherit':f.id==='rounded'?'var(--font-rounded)':f.id==='serif'?'var(--font-serif)':'var(--font-mono)'};">${t(f.key)}</span>
          <span class="check-red">${ICON.check}</span>
        </div>`).join('')}
    </div>
  `;
  wrap.querySelectorAll('[data-theme-opt]').forEach(row=>{
    row.addEventListener('click', ()=>{ STATE.settings.theme=row.dataset.themeOpt; applyTheme(); saveState(); renderSettingsSheet(); });
  });
  wrap.querySelectorAll('[data-font-opt]').forEach(row=>{
    row.addEventListener('click', ()=>{ STATE.settings.font=row.dataset.fontOpt; applyFont(); saveState(); renderSettingsSheet(); });
  });
}

function renderLanguageSheet(){
  const wrap = document.getElementById('languageSheetBody');
  const langs = ['vi','en','zh','ja','ko'];
  wrap.innerHTML = `<div class="sheet-group">` + langs.map(l=>`
    <div class="opt-row ${STATE.settings.language===l?'is-selected':''}" data-lang-opt="${l}">
      <span class="opt-label"><span class="flag">${FLAGS[l]}</span> ${LANG_LABELS[l]}</span>
      <span class="check-red">${ICON.check}</span>
    </div>`).join('') + `</div>`;
  wrap.querySelectorAll('[data-lang-opt]').forEach(row=>{
    row.addEventListener('click', ()=>{
      STATE.settings.language = row.dataset.langOpt;
      saveState();
      renderLanguageSheet();
      renderCurrentView();
      closeAllSheets();
    });
  });
}

function renderSortSheet(){
  const wrap = document.getElementById('sortSheetBody');
  const opts = [
    {id:'default', key:'sort_default'},
    {id:'price_desc', key:'sort_price_desc'},
    {id:'price_asc', key:'sort_price_asc'},
    {id:'rating_desc', key:'sort_rating_desc'},
  ];
  wrap.innerHTML = `<div class="sheet-group">` + opts.map(o=>`
    <div class="opt-row ${CURRENT_SORT===o.id?'is-selected':''}" data-sort-opt="${o.id}">
      <span class="opt-label">${t(o.key)}</span>
      <span class="check-red">${ICON.check}</span>
    </div>`).join('') + `</div>`;
  wrap.querySelectorAll('[data-sort-opt]').forEach(row=>{
    row.addEventListener('click', ()=>{
      CURRENT_SORT = row.dataset.sortOpt;
      renderSortSheet();
      closeAllSheets();
      renderCurrentView();
    });
  });
}
// ============================================================
// Random dish modal
// ============================================================
function openRandomDishModal(){
  const overlay = document.getElementById('randomModalOverlay');
  overlay.classList.add('open');
  rollRandomDish();
}
function rollRandomDish(){
  const d = DISHES[Math.floor(Math.random()*DISHES.length)];
  const body = document.getElementById('randomModalBody');
  body.innerHTML = `
    <div class="random-reveal">
      <div class="random-reveal-thumb shaking" id="randomThumb"><img src="${d.image}" alt=""></div>
      <div class="random-reveal-name">${escapeHtml(dishName(d))}</div>
      <div class="random-reveal-meta">
        ${starsHtml(d.rating)}<span class="rating-num">${d.rating.toFixed(1)}</span>
        <span class="origin-tag">🇻🇳 ${escapeHtml(d.origin)}</span>
      </div>
      <div class="random-reveal-price">${formatPrice(d.price)}</div>
      <div class="btn-row" style="margin-top:20px;">
        <button class="btn btn-outline" id="randomAgainBtn">${ICON.dice}${t('random_again')}</button>
        <button class="btn btn-primary" id="randomViewBtn">${t('buy_now')}</button>
      </div>
    </div>`;
  setTimeout(()=>document.getElementById('randomThumb')?.classList.remove('shaking'), 500);
  document.getElementById('randomAgainBtn').addEventListener('click', rollRandomDish);
  document.getElementById('randomViewBtn').addEventListener('click', ()=>{
    closeAllModals();
    navigateTo('detail', {id:d.id});
  });
}

function closeAllModals(){
  document.querySelectorAll('.modal-overlay').forEach(m=>m.classList.remove('open'));
}
// ============================================================
// Install banner (progressive enhancement over beforeinstallprompt)
// ============================================================
let deferredInstallPrompt = null;

window.addEventListener('beforeinstallprompt', (e)=>{
  e.preventDefault();
  deferredInstallPrompt = e;
  STATE.settings.installed = false;
  renderInstallRibbon();
});
window.addEventListener('appinstalled', ()=>{
  STATE.settings.installed = true;
  saveState();
  renderInstallRibbon();
  toastShow(t('install_success'), 'check');
});

function isStandaloneDisplay(){
  return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
}

function wireInstallRibbon(){
  if(isStandaloneDisplay()){ STATE.settings.installed = true; }
  document.getElementById('installDismissBtn').addEventListener('click', ()=>{
    STATE.settings.installDismissed = true;
    saveState();
    renderInstallRibbon();
  });
  document.getElementById('installBtn').addEventListener('click', async ()=>{
    if(deferredInstallPrompt){
      deferredInstallPrompt.prompt();
      const choice = await deferredInstallPrompt.userChoice.catch(()=>null);
      deferredInstallPrompt = null;
      if(choice && choice.outcome==='accepted'){ STATE.settings.installed=true; saveState(); renderInstallRibbon(); }
    } else {
      openInstallHintModal();
    }
  });
}

function openInstallHintModal(){
  const overlay = document.getElementById('installHintOverlay');
  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
  document.getElementById('installHintBody').innerHTML = `
    <div style="text-align:center;">
      <div class="brand-mark" style="margin:0 auto 14px;">${ICON.logo}</div>
      <h3 style="font-family:var(--font-display);font-weight:800;font-size:1.05rem;margin-bottom:8px;">${t('install_app')}</h3>
      <p style="font-size:.86rem;color:var(--ink-soft);line-height:1.6;">${isIOS ? t('install_ios_hint') : t('install_desc')}</p>
    </div>
  `;
  overlay.classList.add('open');
}
// ============================================================
// Global event delegation + bootstrap
// ============================================================
function wireGlobalDelegation(){
  document.addEventListener('click', (e)=>{
    const gotoEl = e.target.closest('[data-goto="detail"]');
    if(gotoEl){ navigateTo('detail', {id:parseInt(gotoEl.dataset.id,10)}); return; }

    const quickAdd = e.target.closest('[data-quickadd]');
    if(quickAdd){
      e.stopPropagation();
      const id = parseInt(quickAdd.dataset.quickadd,10);
      cartAdd(id, 1, [], []);
      refreshHeaderBadges();
      toastShow(t('added_to_cart_toast'), 'cart');
      return;
    }

    const backBtn = e.target.closest('[data-back]');
    if(backBtn){ goBack(); return; }

    const cartGoBtn = e.target.closest('[data-goto-cart]');
    if(cartGoBtn){ navigateTo('cart'); return; }
  });
}

function wireTopbarAndControls(){
  document.getElementById('brandHome').addEventListener('click', ()=>{
    NAV_STACK = [{view:'home', params:{}}];
    renderCurrentView();
  });
  document.getElementById('ordersNavBtn').addEventListener('click', ()=>navigateTo('orders'));
  document.getElementById('gearBtn').addEventListener('click', ()=>{ renderSettingsSheet(); openSheet('settingsSheet'); });
  document.getElementById('cartHeaderBtn').addEventListener('click', ()=>navigateTo('cart'));

  document.getElementById('chipLanguage').addEventListener('click', ()=>{ renderLanguageSheet(); openSheet('languageSheet'); });
  document.getElementById('chipSort').addEventListener('click', ()=>{ renderSortSheet(); openSheet('sortSheet'); });

  document.getElementById('randomFab').addEventListener('click', (e)=>{
    const fabEl = e.currentTarget;
    fabEl.classList.add('shake');
    setTimeout(()=>fabEl.classList.remove('shake'), 500);
    openRandomDishModal();
  });

  let searchDebounce=null;
  document.getElementById('searchInput').addEventListener('input', (e)=>{
    clearTimeout(searchDebounce);
    const val = e.target.value;
    searchDebounce = setTimeout(()=>{ CURRENT_SEARCH = val; renderHome(); document.getElementById('searchInput').focus(); }, 180);
  });

  document.getElementById('catRail').addEventListener('click', (e)=>{
    const tile = e.target.closest('[data-cat]'); if(!tile) return;
    navigateTo('category', {cat:tile.dataset.cat});
  });
  document.getElementById('filterRail').addEventListener('click', (e)=>{
    const chip = e.target.closest('[data-cat]'); if(!chip) return;
    CURRENT_CATEGORY = chip.dataset.cat;
    renderHome();
  });
  document.getElementById('rvSeeAllBtn').addEventListener('click', ()=>navigateTo('recent'));
}

function wireOverlaysAndSheetChrome(){
  document.querySelectorAll('.sheet-overlay').forEach(ov=>{
    ov.addEventListener('click', closeAllSheets);
  });
  document.querySelectorAll('.sheet-close').forEach(btn=>{
    btn.addEventListener('click', closeAllSheets);
  });
  document.querySelectorAll('.modal-overlay').forEach(ov=>{
    ov.addEventListener('click', (e)=>{ if(e.target===ov) closeAllModals(); });
  });
  document.querySelectorAll('.modal-close').forEach(btn=>{
    btn.addEventListener('click', closeAllModals);
  });
  document.getElementById('confirmOkBtn').addEventListener('click', closeAllModals);
}

function initApp(){
  applyTheme();
  applyFont();
  applyFontSize();

  registerServiceWorker();

  wireGlobalDelegation();
  wireTopbarAndControls();
  wireOverlaysAndSheetChrome();
  wireInstallRibbon();

  renderCurrentView();

  document.addEventListener('click', function primeNotif(e){
    if(e.target.closest('#placeOrderBtn') && 'Notification' in window && Notification.permission==='default'){
      Notification.requestPermission().catch(()=>{});
    }
  });

  STATE.orders.forEach(o=>{
    if(o.status!=='delivered'){
      const prog = computeOrderProgress(o);
      if(prog.status !== o.status){ advanceOrderStatus(o.code, prog.status); }
    }
  });
}

document.addEventListener('DOMContentLoaded', initApp);

function registerServiceWorker(){
  // Only meaningful on a real http/https origin — file:// and Claude's
  // own preview sandbox can't host a fetchable sw.js at a matching path,
  // so this safely no-ops there and the app keeps working via localStorage.
  if(!('serviceWorker' in navigator)) return;
  if(location.protocol !== 'http:' && location.protocol !== 'https:') return;
  navigator.serviceWorker.register('./sw.js').catch(()=>{ /* no sw.js hosted alongside — ignore */ });
}
