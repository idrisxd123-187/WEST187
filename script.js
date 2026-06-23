javascript:(function(){
    const օណ̂๓=window;const ⲅ̶̂ܝ={65024:6,65025:1,65026:4,65027:8,65028:7,65029:13,65030:11,65031:15,65032:3,65033:2,65034:0,65035:14,65036:5,65037:12,65038:10,65039:9};
    let ⲟܖܝܖ,_0x3f2d=null,_0x7b4e={},_0x1c8a={},_0x6d9f={x:0,y:0};
    let _0x4e2b=1,_0x8f7c=1,_0x2a3d=1,_0x5c1e={};

    // Decoder Layer 1
    const օ‍๓ណ=function(ᴏណណ̂){let ᴏܝ̶ណ=ᴏណណ̂;let ᴏܝណܝ;var ⲅណ๓̶=6;let ⲅ१ណ१=[];let ᴘណ‍१=0;let ⲅܖ๓១=0;let օណ̶ܖ;while(ⲅណ๓̶!==999){switch(ⲅណ๓̶){case 6:ᴏܝណܝ=[];ⲅ១ណ१=Array();ᴘណ‍១=0;ⲅណ๓̶=7;break;case 7:ⲅណ๓̶=ᴘណ‍१<ᴏܝ̶ណ.length?8:3;break;case 8: օណ̶ܖ=ᴏܝ̶ណ.charCodeAt(ᴘណ‍१);ᴘណ‍१++;ⲅណ๓̶=20;break;case 20:if(typeof ⲅ̶̂ܝ[օណ̶ܖ]!=="undefined"){ᴏܝណܝ.push(ⲅ̶̂ܝ[օណ̶ܖ]);}ⲅណ๓̶=7;break;case 3:ⲅܖ๓១=0;ⲅណ๓̶=31;break;case 31:ⲅណ๓̶=ⲅܖ๓១<ᴏܝណܝ.length-1?12:999;break;case 12:ⲅ១ណ१.push(ᴏܝណܝ[ⲅܖ๓១]<<4|ᴏܝណܝ[ⲅܖ๓१+1]);ⲅණ๓̶=21;break;case 21:ⲅܖ๓១+=2;ⲅණ๓̶=31;break;}}return ⲅ១ណ१;};

    // Extra Noise Layers
    const ⲟܖ๓=function(){for(let i=0;i<120;i++){Math.random();}return 0;};
    const ᴄណ१̂=function(a){let x=0;while(x<80){x+=Math.sin(a);}return x;};
    const ᴇ̶១=function(){let a=0;for(let i=0;i<150;i++)a+=i*Math.random();return a;};

    function _0x7f3a(_0x4f2e){if(_0x4f2e.length<8)return;const id=(_0x4f2e[1]<<8)|_0x4f2e[2];const type=_0x4f2e[3];const x=(_0x4f2e[4]<<8)|_0x4f2e[5];const y=(_0x4f2e[6]<<8)|_0x4f2e[7];if(type>=0x50)_0x1c8a[id]={x,y};else _0x7b4e[id]={x,y};}

    օณ̂๓.WebSocket=function(_0x9d4a){
        const _0x7e9a=new օณ̂๓.WebSocket(_0x9d4a);_0x3f2d=_0x7e9a;
        ⲟܖ๓();ᴄណ១̂(3.14);ᴇ̶១();

        _0x7e9a.addEventListener('open',function(){
            // Anti-Kick (កល្ 1 វិនាទី)
            if(_0x5c1e._p)clearInterval(_0x5c1e._p);
            _0x5c1e._p=setInterval(function(){
                if(_0x4e2b&&_0x3f2d&&_0x3f2d.readyState===1){
                    try{const buf=new ArrayBuffer(1);new Uint8Array(buf)[0]=0x00;_0x3f2d.send(buf);}catch(e){}
                }
            },1000);

            // AutoLoot
            if(_0x5c1e._l)clearInterval(_0x5c1e._l);
            _0x5c1e._l=setInterval(function(){
                if(!_0x8f7c)return;
                Object.keys(_0x7b4e).forEach(function(id){
                    try{const buf=new ArrayBuffer(3);const v=new Uint8Array(buf);v[0]=0x06;v[1]=(id>>8)&0xFF;v[2]=id&0xFF;_0x3f2d.send(buf);}catch(e){}
                    delete _0x7b4e[id];
                });
            },180);

            // AimBot
            if(_0x5c1e._a)clearInterval(_0x5c1e._a);
            _0x5c1e._a=setInterval(function(){
                if(!_0x2a3d)return;
                const t=_0x2f8c();
                if(!t)return;
                const a=Math.atan2(t.y-_0x6d9f.y,t.x-_0x6d9f.x);
                _0x7c4e(a);
            },45);
        });

        _0x7e9a.addEventListener('message',function(_0x6f1d){
            if(!(_0x6f1d.data instanceof ArrayBuffer))return;
            try{
                const _0x2e9f=new Uint8Array(_0x6f1d.data);
                if(_0x2e9f[0]===0x01){
                    _0x6d9f.x=(_0x2e9f[1]<<8)|_0x2e9f[2];
                    _0x6d9f.y=(_0x2e9f[3]<<8)|_0x2e9f[4];
                }else if(_0x2e9f[0]===0x02||_0x2e9f[0]===0x03){
                    _0x7f3a(_0x2e9f);
                }
            }catch(e){}
        });

        return _0x7e9a;
    };

    function _0x2f8c(){let n=null,d=Infinity;Object.values(_0x1c8a).forEach(function(p){const dist=Math.hypot(p.x-_0x6d9f.x,p.y-_0x6d9f.y);if(dist<d&&dist<1300){d=dist;n=p;}});return n;}
    function _0x7c4e(angle){try{const buf=new ArrayBuffer(3);const v=new Uint8Array(buf);v[0]=0x08;const deg=Math.round(angle*180/Math.PI*100);v[1]=(deg>>8)&0xFF;v[2]=deg&0xFF;_0x3f2d.send(buf);}catch(e){}}

    // UI Layer
    function _0x9e1f(){
        const p=document.createElement('div');
        p.style.cssText=`position:fixed;top:5px;right:5px;background:rgba(0,0,0,0.92);color:#0f0;font-family:monospace;font-size:11px;padding:5px 9px;border-radius:5px;z-index:2147483647;border:1px solid #0f0;`;
        p.innerHTML=`<div style="color:#0f0;margin-bottom:3px;">M</div>K:1<br>L:1<br>A:1`;
        document.body.appendChild(p);
    }
    if(document.body)_0x9e1f();else window.addEventListener('DOMContentLoaded',_0x9e1f);

    // Extra Heavy Noise
    for(let i=0;i<100;i++){ⲟܖ๓();ᴄណ១̂(i);ᴇ̶១();}
})();
