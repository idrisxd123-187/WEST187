(function () {
    'use strict';

    const _0x9a1f = window.WebSocket;
    let _0x3f2d = null;
    let _0x7b4e = {};      // items
    let _0x1c8a = {};      // players
    let _0x6d9f = { x: 0, y: 0 };

    let _0x4e2b = true;    // AntiKick
    let _0x8f7c = true;    // AutoLoot
    let _0x2a3d = true;    // AimBot

    let _0x5c1e = {};

    window.WebSocket = function (_0x9d4a, _0x1f8b) {
        const _0x7e9a = _0x1f8b ? new _0x9a1f(_0x9d4a, _0x1f8b) : new _0x9a1f(_0x9d4a);
        _0x3f2d = _0x7e9a;

        _0x7e9a.addEventListener('open', () => {
            _0x4b9f();
            _0x8e2c();
            _0x3d7a();
        });

        _0x7e9a.addEventListener('message', (_0x6f1d) => {
            if (!(_0x6f1d.data instanceof ArrayBuffer)) return;
            try {
                const _0x2e9f = new Uint8Array(_0x6f1d.data);
                const _0x9c4d = _0x2e9f[0];

                if (_0x9c4d === 0x01) {
                    _0x6d9f.x = (_0x2e9f[1] << 8) | _0x2e9f[2];
                    _0x6d9f.y = (_0x2e9f[3] << 8) | _0x2e9f[4];
                }
                else if (_0x9c4d === 0x02 || _0x9c4d === 0x03) {
                    _0x7f3a(_0x2e9f);
                }
            } catch (e) {}
        });

        _0x7e9a.addEventListener('close', _0x1a7b);
        _0x7e9a.addEventListener('error', _0x1a7b);

        return _0x7e9a;
    };

    window.WebSocket.prototype = _0x9a1f.prototype;

    function _0x7f3a(_0x4f2e) {
        if (_0x4f2e.length < 8) return;
        const id = (_0x4f2e[1] << 8) | _0x4f2e[2];
        const type = _0x4f2e[3];
        const x = (_0x4f2e[4] << 8) | _0x4f2e[5];
        const y = (_0x4f2e[6] << 8) | _0x4f2e[7];

        if (type >= 0x50) _0x1c8a[id] = { x, y };
        else _0x7b4e[id] = { x, y };
    }

    // Anti-Kick
    function _0x4b9f() {
        if (_0x5c1e._p) clearInterval(_0x5c1e._p);
        _0x5c1e._p = setInterval(() => {
            if (!_0x4e2b || !_0x3f2d || _0x3f2d.readyState !== WebSocket.OPEN) return;
            try {
                const buf = new ArrayBuffer(1);
                new Uint8Array(buf)[0] = 0x00;
                _0x3f2d.send(buf);
            } catch (e) {}
        }, 8500);
    }

    // Auto Loot
    function _0x8e2c() {
        if (_0x5c1e._l) clearInterval(_0x5c1e._l);
        _0x5c1e._l = setInterval(() => {
            if (!_0x8f7c) return;
            if (!_0x3f2d || _0x3f2d.readyState !== WebSocket.OPEN) return;

            Object.keys(_0x7b4e).forEach(id => {
                _0x9f3d(parseInt(id));
                delete _0x7b4e[id];
            });
        }, 180);
    }

    function _0x9f3d(id) {
        try {
            const buf = new ArrayBuffer(3);
            const v = new Uint8Array(buf);
            v[0] = 0x06; v[1] = (id >> 8) & 0xFF; v[2] = id & 0xFF;
            _0x3f2d.send(buf);
        } catch (e) {}
    }

    // AimBot Max
    function _0x3d7a() {
        if (_0x5c1e._a) clearInterval(_0x5c1e._a);
        _0x5c1e._a = setInterval(() => {
            if (!_0x2a3d || !_0x6d9f) return;
            const t = _0x2f8c();
            if (!t) return;
            const a = Math.atan2(t.y - _0x6d9f.y, t.x - _0x6d9f.x);
            _0x7c4e(a);
        }, 45);
    }

    function _0x2f8c() {
        let n = null, d = Infinity;
        Object.values(_0x1c8a).forEach(p => {
            const dist = Math.hypot(p.x - _0x6d9f.x, p.y - _0x6d9f.y);
            if (dist < d && dist < 1300) { 
                d = dist; 
                n = p; 
            }
        });
        return n;
    }

    function _0x7c4e(angle) {
        try {
            const buf = new ArrayBuffer(3);
            const v = new Uint8Array(buf);
            v[0] = 0x08;
            const deg = Math.round(angle * 180 / Math.PI * 100);
            v[1] = (deg >> 8) & 0xFF;
            v[2] = deg & 0xFF;
            _0x3f2d.send(buf);
        } catch (e) {}
    }

    function _0x1a7b() {
        Object.values(_0x5c1e).forEach(clearInterval);
        _0x5c1e = {};
        _0x7b4e = {};
        _0x1c8a = {};
    }

    // UI Max (بدون Heal)
    function _0x9e1f() {
        const p = document.createElement('div');
        p.style.cssText = `position:fixed;top:5px;right:5px;background:rgba(0,0,0,0.92);color:#0f0;font-family:monospace;font-size:11px;padding:5px 9px;border-radius:5px;z-index:99999;border:1px solid #0f0;user-select:none;opacity:0.8;`;
        p.innerHTML = `<div style="color:#0f0;margin-bottom:3px;font-size:10px;">M</div>`;

        const items = [
            ['K', () => _0x4e2b, v => _0x4e2b = v],
            ['L', () => _0x8f7c, v => _0x8f7c = v],
            ['A', () => _0x2a3d, v => _0x2a3d = v]
        ];

        items.forEach(([n, g, s]) => {
            const e = document.createElement('div');
            e.style.cssText = 'cursor:pointer;padding:1px 0;';
            const u = () => {
                e.textContent = `${n}:${g()?'1':'0'}`;
                e.style.color = g() ? '#0f0' : '#f44';
            };
            u();
            e.onclick = () => { s(!g()); u(); };
            p.appendChild(e);
        });

        document.body.appendChild(p);
    }

    if (document.body) _0x9e1f();
    else window.addEventListener('DOMContentLoaded', _0x9e1f);

})();
