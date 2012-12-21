var Render = function (data) {
    try {
        var out = '',
            line = 0;
        out += html[0];
        out += this.title();
        line += 1;
        out += html[1];
        for (var i = 0, tl = data.trs.length, tr; i < tl; i++) {
            line += 1;
            out += html[2];
            tr = data.trs[i];
            if (tr.sex === "男") {
                line += 1;
                out += html[3];
                out += tr.name;
                line += 1;
                out += html[4];
                out += tr.age;
                line += 1;
                out += html[5];
                out += tr.sex || "男";
                line += 1;
                out += html[6];
            }
            line += 1;
            out += html[7];
        }
        line += 1;
        out += html[8];
        out += data.href;
        line += 1;
        out += html[9];
        this.tpl = out;
    } catch (e) {
        ice.log('rend error : ', line, 'line');
        ice.log('invalid statement : ', js[line - 1]);
        throw e;
    }
};
var proto = Render.prototype = iExtend(iHelper);
for (key in options) {
    if (options.hasOwnhasOwnProperty(key)) {
        proto[key] = options[key];
    }
}
return function (data) {
    return new Render(data);
};