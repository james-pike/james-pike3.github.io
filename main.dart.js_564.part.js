self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
bc_(d){return d.VertexMode},
bIR(d){var x,w,v,u=d.length,t=new Float32Array(u*2)
for(x=0;x<u;++x){w=2*x
v=d[x]
t[w]=v.a
t[w+1]=v.b}return t},
bsy(d,e,f,g,h){var x,w,v=null,u=e.length
if(f.length!==u)throw B.i(B.cN('"positions" and "colors" lengths must match.',v))
u=$.bqO()[d.a]
x=A.bIR(e)
w=B.bo2(f)
u=new A.Ii(u,x,v,w,v)
u.A6(v,y.U)
return u},
bAf(d){var x,w=d.length,v=new Int32Array(w)
for(x=0;x<w;++x)v[x]=d[x].a
return v},
bHX(d){var x,w,v,u=d.length,t=new Float32Array(u*2)
for(x=0,w=0;x<u;++x,w+=2){v=d[x]
t[w]=v.a
t[w+1]=v.b}return t},
Ii:function Ii(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=null},
a8f:function a8f(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ayB(d,e,f){var x,w,v=f.a,u=e.a,t=Math.pow(v[0]-u[0],2)+Math.pow(v[1]-u[1],2)
if(t===0)return e
x=d.aq(0,e)
w=f.aq(0,e)
return e.a2(0,w.zZ(B.L(x.Ej(w)/t,0,1)))},
bxw(d,e){var x,w,v,u,t,s,r,q=e.a,p=d.aq(0,q),o=e.b,n=o.aq(0,q),m=e.d,l=m.aq(0,q),k=p.Ej(n),j=n.Ej(n),i=p.Ej(l),h=l.Ej(l)
if(0<=k&&k<=j&&0<=i&&i<=h)return d
x=e.c
w=[A.ayB(d,q,o),A.ayB(d,o,x),A.ayB(d,x,m),A.ayB(d,m,q)]
v=B.bE("closestOverall")
for(q=d.a,u=1/0,t=0;t<4;++t){s=w[t]
o=s.a
r=Math.sqrt(Math.pow(q[0]-o[0],2)+Math.pow(q[1]-o[1],2))
if(r<u){v.b=s
u=r}}return v.aL()},
bAG(){var x=new B.bx(new Float64Array(16))
x.tT()
return new A.a8M(x,$.ac())},
bms(d,e){var x,w,v,u,t,s,r=new B.bx(new Float64Array(16))
r.qO(d)
r.xZ(r)
x=e.a
w=e.b
v=new B.cu(new Float64Array(3))
v.tI(x,w,0)
v=r.zV(v)
u=e.c
t=new B.cu(new Float64Array(3))
t.tI(u,w,0)
t=r.zV(t)
w=e.d
s=new B.cu(new Float64Array(3))
s.tI(u,w,0)
s=r.zV(s)
u=new B.cu(new Float64Array(3))
u.tI(x,w,0)
u=r.zV(u)
x=new B.cu(new Float64Array(3))
x.qO(v)
w=new B.cu(new Float64Array(3))
w.qO(t)
v=new B.cu(new Float64Array(3))
v.qO(s)
t=new B.cu(new Float64Array(3))
t.qO(u)
return new A.a5S(x,w,v,t)},
blR(d,e){var x,w,v,u,t,s,r=[e.a,e.b,e.c,e.d]
for(x=C.o,w=0;w<4;++w){v=r[w]
u=A.bxw(v,d).a
t=v.a
s=u[0]-t[0]
t=u[1]-t[1]
if(Math.abs(s)>Math.abs(x.a))x=new B.k(s,x.b)
if(Math.abs(t)>Math.abs(x.b))x=new B.k(x.a,t)}return A.beT(x)},
beT(d){return new B.k(B.alQ(C.d.oe(d.a,9)),B.alQ(C.d.oe(d.b,9)))},
bE_(d,e){if(d.m(0,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.a2:C.w},
Km:function Km(d,e,f,g,h,i){var _=this
_.e=d
_.r=e
_.as=f
_.ax=g
_.ch=h
_.a=i},
Rm:function Rm(d,e,f,g,h){var _=this
_.d=null
_.e=d
_.f=e
_.r=null
_.w=$
_.z=_.y=_.x=null
_.as=_.Q=0
_.at=null
_.ro$=f
_.a9$=g
_.a=null
_.b=h
_.c=null},
aXC:function aXC(){},
adG:function adG(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a8M:function a8M(d,e){var _=this
_.a=d
_.x1$=0
_.x2$=e
_.y1$=_.xr$=0
_.y2$=!1},
FA:function FA(d,e){this.a=d
this.b=e},
VP:function VP(){},
bAH(){return new A.tO(null)},
tO:function tO(d){this.a=d},
Uw:function Uw(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.w=$
_.x=null
_.ro$=g
_.a9$=h
_.a=null
_.b=i
_.c=null},
b5a:function b5a(d,e){this.a=d
this.b=e},
b5b:function b5b(d){this.a=d},
b5h:function b5h(d){this.a=d},
b5g:function b5g(d){this.a=d},
b5f:function b5f(d){this.a=d},
b5e:function b5e(d){this.a=d},
b5d:function b5d(d,e){this.a=d
this.b=e},
b5c:function b5c(d,e,f){this.a=d
this.b=e
this.c=f},
a9Y:function a9Y(d,e){this.b=d
this.a=e},
aOy:function aOy(d,e){this.a=d
this.b=e},
Wv:function Wv(){},
bbQ(d,e,f,g,h){var x=new A.XE(e,g,f,B.b([],y.g),h,B.b([],y.h))
x.amL(d,e,f,g,h)
return x},
XE:function XE(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
anz:function anz(d){this.a=d},
any:function any(d){this.a=d},
anx:function anx(d){this.a=d},
aOx:function aOx(d){this.a=d
this.c=this.b=null},
b0H:function b0H(d,e){this.a=d
this.b=e},
hi:function hi(d,e,f){this.a=d
this.b=e
this.c=f},
a9Z:function a9Z(){},
YK:function YK(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aoW:function aoW(d){this.a=d},
aoV:function aoV(d,e){this.a=d
this.b=e},
zB:function zB(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aQk:function aQk(d){this.a=d},
a0S:function a0S(d,e,f){this.c=d
this.d=e
this.a=f},
a5S:function a5S(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bAX(d,e,f){var x,w
if($.aR())return A.bsy(d,e,f,null,null)
x=A.bAf(f)
w=A.bHX(e)
if($.H8==null)$.H8=new B.ajH()
return new A.a8f(d,w,x,null)}},B,C,D,E,J,F
A=a.updateHolder(c[86],A)
B=c[0]
C=c[2]
D=c[127]
E=c[116]
J=c[1]
F=c[98]
A.Ii.prototype={
yM(){var x=this
return B.aa($.cJ.rM(),"MakeVertices",[x.b,x.c,x.d,x.e,x.f])},
AF(){return this.yM()},
wU(d){var x=this.a
if(x!=null)x.delete()}}
A.a8f.prototype={}
A.Km.prototype={
G(){var x=null,w=y.z
return new A.Rm(new B.ah(x,w),new B.ah(x,w),x,x,C.j)}}
A.Rm.prototype={
gM_(){var x=$.R.F$.z.i(0,this.e).gH()
x.toString
x=y.x.a(x).k3
x.toString
return this.a.e.Gx(new B.x(0,0,0+x.a,0+x.b))},
gNL(){var x=$.R.F$.z.i(0,this.f).gH()
x.toString
x=y.x.a(x).k3
return new B.x(0,0,0+x.a,0+x.b)},
MU(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a1.m(0,C.o)){x=new B.bx(new Float64Array(16))
x.qO(a0)
return x}d.a.toString
w=new B.bx(new Float64Array(16))
w.qO(a0)
w.oX(0,a1.a,a1.b)
v=A.bms(w,d.gNL())
x=d.gM_()
if(x.gact(x))return w
x=d.gM_()
u=d.as
t=new B.bx(new Float64Array(16))
t.tT()
s=x.c
r=x.a
q=s-r
p=x.d
x=x.b
o=p-x
t.oX(0,q/2,o/2)
t.Qd(u)
t.oX(0,-q/2,-o/2)
u=new B.cu(new Float64Array(3))
u.tI(r,x,0)
u=t.zV(u)
q=new B.cu(new Float64Array(3))
q.tI(s,x,0)
q=t.zV(q)
x=new B.cu(new Float64Array(3))
x.tI(s,p,0)
x=t.zV(x)
s=new B.cu(new Float64Array(3))
s.tI(r,p,0)
s=t.zV(s)
r=new Float64Array(3)
new B.cu(r).qO(u)
u=new Float64Array(3)
new B.cu(u).qO(q)
q=new Float64Array(3)
new B.cu(q).qO(x)
x=new Float64Array(3)
new B.cu(x).qO(s)
s=r[0]
p=u[0]
o=q[0]
n=x[0]
m=Math.min(s,Math.min(p,Math.min(o,n)))
r=r[1]
u=u[1]
q=q[1]
x=x[1]
l=Math.min(r,Math.min(u,Math.min(q,x)))
k=Math.max(s,Math.max(p,Math.max(o,n)))
j=Math.max(r,Math.max(u,Math.max(q,x)))
x=new B.cu(new Float64Array(3))
x.tI(m,l,0)
u=new B.cu(new Float64Array(3))
u.tI(k,l,0)
s=new B.cu(new Float64Array(3))
s.tI(k,j,0)
r=new B.cu(new Float64Array(3))
r.tI(m,j,0)
q=new B.cu(new Float64Array(3))
q.qO(x)
x=new B.cu(new Float64Array(3))
x.qO(u)
u=new B.cu(new Float64Array(3))
u.qO(s)
s=new B.cu(new Float64Array(3))
s.qO(r)
i=new A.a5S(q,x,u,s)
h=A.blR(i,v)
if(h.m(0,C.o))return w
x=w.QL().a
u=x[0]
x=x[1]
g=a0.La()
u-=h.a*g
x-=h.b*g
f=new B.bx(new Float64Array(16))
f.qO(a0)
s=new B.cu(new Float64Array(3))
s.tI(u,x,0)
f.a_T(s)
e=A.blR(i,A.bms(f,d.gNL()))
if(e.m(0,C.o))return f
s=e.a===0
if(!s&&e.b!==0){x=new B.bx(new Float64Array(16))
x.qO(a0)
return x}u=s?u:0
x=e.b===0?x:0
s=new B.bx(new Float64Array(16))
s.qO(a0)
r=new B.cu(new Float64Array(3))
r.tI(u,x,0)
s.a_T(r)
return s},
a5i(d,e){var x,w,v,u,t,s,r=this
if(e===1){x=new B.bx(new Float64Array(16))
x.qO(d)
return x}w=r.d.a.La()
x=r.gNL()
v=r.gM_()
u=r.gNL()
t=r.gM_()
s=B.L(Math.max(w*e,Math.max((x.c-x.a)/(v.c-v.a),(u.d-u.b)/(t.d-t.b))),r.a.as,2.5)
x=new B.bx(new Float64Array(16))
x.qO(d)
x.rr(0,s/w)
return x},
azG(d,e,f){var x,w,v,u
if(e===0){x=new B.bx(new Float64Array(16))
x.qO(d)
return x}w=this.d.zT(f)
x=new B.bx(new Float64Array(16))
x.qO(d)
v=w.a
u=w.b
x.oX(0,v,u)
x.Qd(-e)
x.oX(0,-v,-u)
return x},
Tj(d){switch(d){case D.ayU:return!1
case D.uV:this.a.toString
return!0
case D.mD:case null:this.a.toString
return!0}},
a3L(d){this.a.toString
if(Math.abs(d.d-1)>Math.abs(0))return D.uV
else return D.mD},
ayR(d){var x,w,v=this
v.a.ax.$1(d)
x=v.w
x===$&&B.c()
w=x.r
if(w!=null&&w.a!=null){x.tE(0)
x=v.w
x.sl(0,x.a)
x=v.r
if(x!=null)x.a.B(0,v.gN3())
v.r=null}v.x=v.at=null
v.z=v.d.a.La()
v.y=v.d.zT(d.b)
v.Q=v.as},
aAX(d){var x,w,v,u,t,s,r=this,q=r.d.a.La(),p=d.c,o=r.d.zT(p),n=r.at
if(n===D.mD)n=r.at=r.a3L(d)
else if(n==null){n=r.a3L(d)
r.at=n}if(!r.Tj(n)){r.a.toString
return}switch(r.at.a){case 1:n=r.z
n.toString
x=r.d
x.sl(0,r.a5i(x.a,n*d.d/q))
w=r.d.zT(p)
n=r.d
x=n.a
v=r.y
v.toString
n.sl(0,r.MU(x,w.aq(0,v)))
u=r.d.zT(p)
p=r.y
p.toString
if(!A.beT(p).m(0,A.beT(u)))r.y=u
break
case 2:n=d.r
if(n===0){r.a.toString
return}x=r.Q
x.toString
t=x+n
n=r.d
n.sl(0,r.azG(n.a,r.as-t,p))
r.as=t
break
case 0:if(d.d!==1){r.a.toString
return}if(r.x==null){n=r.y
n.toString
r.x=A.bE_(n,o)}n=r.y
n.toString
s=o.aq(0,n)
n=r.d
n.sl(0,r.MU(n.a,s))
r.y=r.d.zT(p)
break}r.a.toString},
aAT(d){var x,w,v,u,t,s,r,q,p=this
p.a.toString
p.y=p.Q=p.z=null
x=p.r
if(x!=null)x.a.B(0,p.gN3())
x=p.w
x===$&&B.c()
x.sl(0,x.a)
if(!p.Tj(p.at)){p.x=null
return}if(p.at!==D.mD||d.a.a.gtV()<50){p.x=null
return}x=p.d.a.QL().a
w=x[0]
x=x[1]
v=d.a.a
u=Math.log(0.0000135)
t=Math.log(0.0000135)
s=Math.log(10/v.gtV())
r=Math.log(135e-9)
u=new B.BJ(0.0000135,u,w,v.a,C.cz).gJF()
v=new B.BJ(0.0000135,t,x,v.b,C.cz).gJF()
t=y.L
q=B.aO(C.e0,p.w,null)
p.r=new B.I(q,new B.a8(new B.k(w,x),new B.k(u,v),t),t.h("I<a0.T>"))
p.w.e=B.ds(0,0,0,C.d.o9(s/r*1000),0,0)
q.a4(0,p.gN3())
p.w.oS(0)},
ayT(d){var x,w,v,u,t,s,r=this
if(y.C.b(d)){if(d.gHl().b===0)return
x=r.a.ax
w=d.gr3(d)
v=d.gvy()
x.$1(new B.Dp(w,v,0))
x=d.gHl()
r.a.toString
u=Math.exp(-x.b/200)
if(!r.Tj(D.uV)){r.a.toString
return}x=r.d
x.toString
t=x.zT(d.gvy())
x=r.d
x.sl(0,r.a5i(x.a,u))
x=r.d
x.toString
s=x.zT(d.gvy())
x=r.d
x.sl(0,r.MU(x.a,s.aq(0,t)))
r.a.toString}},
aAk(){var x,w,v,u,t=this,s=t.w
s===$&&B.c()
s=s.r
if(!(s!=null&&s.a!=null)){t.x=null
s=t.r
if(s!=null)s.a.B(0,t.gN3())
t.r=null
s=t.w
s.sl(0,s.a)
return}s=t.d.a.QL().a
x=s[0]
s=s[1]
w=t.d.zT(new B.k(x,s))
s=t.d
s.toString
x=t.r
v=x.b
x=x.a
u=s.zT(v.P(0,x.gl(x))).aq(0,w)
x=t.d
x.sl(0,t.MU(x.a,u))},
aBa(){this.D(new A.aXC())},
a3(){var x,w=this,v=null
w.ab()
x=w.a.ch
w.d=x
x.a4(0,w.gUq())
w.w=B.aX(C.u,v,v,v,1,v,w)},
aa(d){var x,w,v=this
v.am(d)
x=v.a
if(x.ch!==d.ch){x=v.gUq()
v.d.B(0,x)
w=v.a.ch
v.d=w
w.a4(0,x)}},
k(){var x=this,w=x.w
w===$&&B.c()
w.k()
x.d.B(0,x.gUq())
x.a.toString
x.alI()},
n(d){var x,w,v=this,u=null,t=v.a
t.toString
x=v.d.a
w=new A.adG(t.r,v.e,C.q,!0,x,u)
return B.a2A(C.eT,B.cC(C.aO,w,C.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,v.gaAS(),v.gayQ(),v.gaAW(),u,u,u,u,u,u,u),v.f,u,u,u,v.gayS(),u)}}
A.adG.prototype={
n(d){var x=this,w=B.m8(null,new B.fV(x.c,x.d),x.r,!0)
return B.jD(w,x.e,null)}}
A.a8M.prototype={
zT(d){var x=this.a,w=new B.bx(new Float64Array(16))
if(w.xZ(x)===0)B.Q(B.i0(x,"other","Matrix cannot be inverted"))
x=new B.cu(new Float64Array(3))
x.tI(d.a,d.b,0)
x=w.zV(x).a
return new B.k(x[0],x[1])}}
A.FA.prototype={
j(d){return"_GestureType."+this.b}}
A.VP.prototype={
p9(){this.qt()
this.pQ()
this.rQ()},
k(){var x=this,w=x.a9$
if(w!=null)w.B(0,x.grN())
x.a9$=null
x.Y()}}
A.tO.prototype={
G(){var x=null
return new A.Uw(new B.ah(x,y.z),A.bbQ(x,8,1,16,x),A.bAG(),x,x,C.j)}}
A.Uw.prototype={
aAl(){var x=this,w=x.r,v=w.b
w=w.a
x.f.sl(0,v.P(0,w.gl(w)))
w=x.w
w===$&&B.c()
w=w.r
if(!(w!=null&&w.a!=null)){w=x.r
if(w!=null)w.a.B(0,x.gUl())
x.r=null
w=x.w
w.sl(0,w.a)}},
aAV(d){var x,w=this,v=w.w
v===$&&B.c()
x=v.Q
x===$&&B.c()
if(x===C.ad){v.tE(0)
v=w.r
if(v!=null)v.a.B(0,w.gUl())
w.r=null
v=w.w
v.sl(0,v.a)}},
aB7(d){var x=this,w=x.f.zT(d.a.aq(0,B.dB(y.x.a($.R.F$.z.i(0,x.d).gH()).rH(0,null),C.o)))
x.D(new A.b5a(x,x.e.aPe(w)))},
a3(){var x=null
this.ab()
this.w=B.aX(C.u,x,x,x,1,x,this)},
n(d){var x=null,w=B.t(d)
return B.bW(B.cp(x,x,!1,x,x,x,1,x,x,x,!1,x,x,x,x,x,!0,x,x,x,x,x,x,B.r(B.u(d,C.h,y.s).gbc(),x,x,x,x,x,x,x,x),x,x,x,1,x),w.ay.b,B.X(x,new B.d0(new A.b5b(this),x),C.e,D.wy,x,x,x,x,x,x,x,x,x,x),x,x,!1,x,x,x,B.b([this.gaPT(),this.gaKE()],y.p),x)},
gaPT(){var x=null,w=this.c
w.toString
return B.c2(B.t(w).ay.cy,!0,x,D.a4Y,x,x,new A.b5h(this),C.I,x,"Reset")},
gaKE(){var x=null,w=this.c
w.toString
return B.c2(B.t(w).ay.cy,!0,x,E.oK,x,x,new A.b5f(this),C.I,x,"Edit")},
k(){var x=this.w
x===$&&B.c()
x.k()
this.amC()}}
A.a9Y.prototype={
aB(d,e){this.b.ac(0,new A.aOy(this,d))},
uF(d){return d.b!==this.b}}
A.Wv.prototype={
p9(){this.qt()
this.pQ()
this.rQ()},
k(){var x=this,w=x.a9$
if(w!=null)w.B(0,x.grN())
x.a9$=null
x.Y()}}
A.XE.prototype={
amL(d,e,f,g,h){var x,w,v,u,t,s=this,r=s.b,q=-r,p=r-s.c,o=Math.sqrt(3)/2*p
r=0+o
x=q+0.5*p
w=q+1.5*p
v=q+2*p
u=0-o
C.b.a8(s.d,B.b([new B.k(0,q),new B.k(r,x),new B.k(r,w),new B.k(r,w),new B.k(0,v),new B.k(0,v),new B.k(u,w),new B.k(u,w),new B.k(u,x)],y.g))
if(d!=null)C.b.a8(s.f,d)
else{t=s.a3P(null)
for(r=s.f;t!=null;){r.push(t)
t=s.a3P(t)}}},
god(d){return new A.aOx(this.f)},
a3T(d){var x=this.a,w=-x
if(d<=0)w-=d
else x-=d
return new A.b0H(w,x)},
a3P(d){var x,w,v,u=this
if(d==null)return new A.hi(-u.a,0,D.hV)
x=d.a
w=u.a3T(x)
if(x>=u.a&&d.b>=w.b)return null
v=d.b
if(v>=w.b){++x
return new A.hi(x,u.a3T(x).a,D.hV)}return new A.hi(x,v+1,D.hV)},
gut(d){var x=this.b,w=this.a
return new B.K((w*2+1)*(Math.sqrt(3)/2*x)*2,2*(x+w*1.5*x))},
aPe(d){var x=this,w=x.gut(x),v=d.b-x.gut(x).b/2,u=x.b,t=new A.hi(C.d.o9((Math.sqrt(3)/3*(d.a-w.a/2)-0.3333333333333333*v)/u),C.d.o9(0.6666666666666666*v/u),D.hV)
w=D.Pq.gaaD().a
v=t.gaaD().a
if(C.d.rh(Math.abs(w[0]-v[0])+Math.abs(w[1]-v[1])+Math.abs(w[2]-v[2]),2)>x.a)return null
return C.b.Gr(x.f,new A.anz(t))},
afn(d,e){var x=this,w=Math.sqrt(3),v=x.b,u=d.a,t=Math.sqrt(3),s=d.b,r=x.d,q=B.aj(r).h("aD<1,k>"),p=B.aB(new B.aD(r,new A.any(new B.t0(w*v*u+t/2*v*s+x.gut(x).a/2,1.5*v*s+x.gut(x).b/2,y.O)),q),!0,q.h("bM.E"))
return A.bAX(C.NU,p,B.bN(p.length,e,!1,y.G))},
aK1(d){var x=this
if(J.l(x.e,d))return x
return A.bbQ(x.f,x.a,x.c,x.b,d)},
aK0(d,e){var x,w,v=this,u=new A.hi(d.a,d.b,e),t=v.f,s=C.b.Pm(t,new A.anx(d))
if(J.l(v.rj(0,s),d)&&d.c.m(0,e))return v
x=B.hG(t,!0,y.X)
x[s]=u
w=v.e
if(d.m(0,w))w=u
return A.bbQ(x,v.a,v.c,v.b,w)},
$iF:1}
A.aOx.prototype={
C(){var x,w=this,v=w.b
v=v==null?w.b=0:w.b=v+1
x=w.a
if(v>=x.length){w.c=null
return!1}w.c=x[v]
return!0},
gV(d){return this.c}}
A.b0H.prototype={}
A.hi.prototype={
j(d){return"BoardPoint("+this.a+", "+this.b+", "+this.c.j(0)+")"},
m(d,e){if(e==null)return!1
if(J.ai(e)!==B.W(this))return!1
return e instanceof A.hi&&e.a===this.a&&e.b===this.b},
gI(d){return B.ad(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
gaaD(){var x=this.a,w=this.b,v=new B.cu(new Float64Array(3))
v.tI(x,w,-x-w)
return v}}
A.a9Z.prototype={}
A.YK.prototype={
n(d){var x=this.c,w=B.h(x).h("lx<1,zB>")
return B.as(B.aB(new B.lx(x,new A.aoW(this),w),!0,w.h("F.E")),C.l,null,C.a3,C.i,null)}}
A.zB.prototype={
n(d){var x=null,w=!this.d?x:D.a48
return B.X(x,B.bjk(!1,w,C.e,C.Qd,0,2,!0,this.c,x,4,x,8,x,4,x,x,new A.aQk(this),C.dM,x,x),C.e,x,x,x,x,60,x,x,D.a1i,x,x,60)}}
A.a0S.prototype={
n(d){var x=null,w=B.dU([C.m,C.nO,C.ny,C.wF,D.wy],y.G),v=this.c
return B.a9(B.b([B.r(""+v.a+", "+v.b,x,x,x,x,C.mo,C.ue,x,x),new A.YK(w,v.c,this.d,x)],y.p),C.aH,x,C.k,C.i,C.n)}}
A.a5S.prototype={}
var z=a.updateTypes(["~()","~(Dp)","M(hi)","~(N9)","~(Do)","~(kD)","~(jm)","~(hi?)","zB(j)"])
A.aXC.prototype={
$0(){},
$S:0}
A.b5a.prototype={
$0(){var x=this.a
x.e=x.e.aK1(this.b)},
$S:0}
A.b5b.prototype={
$2(d,e){var x,w,v,u=null,t=e.b,s=e.d,r=this.a
if(r.x==null){x=new B.bx(new Float64Array(16))
x.tT()
w=r.e
w=w.gut(w)
v=r.e
x.oX(0,t/2-w.a/2,s/2-v.gut(v).b/2)
r.x=x
r.f.sl(0,x)}x=r.e
x=x.gut(x)
return B.jD(B.dC(B.cC(C.aO,new A.Km(new B.Y(t,s,t,s),B.bdG(B.hA(u,u,u,new A.a9Y(r.e,u),x)),0.01,r.gaAU(),r.f,r.d),C.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,r.gaB6(),u,u,u),C.ah,u,u,u,u),C.q,u)},
$S:769}
A.b5h.prototype={
$0(){var x=this.a
x.D(new A.b5g(x))},
$S:0}
A.b5g.prototype={
$0(){var x,w,v=this.a,u=v.w
u===$&&B.c()
u.sl(0,u.a)
u=v.f.a
x=v.x
w=v.w
v.r=new B.I(w,new B.oM(u,x),y.d.h("I<a0.T>"))
w.e=C.i1
w.a4(0,v.gUl())
v.w.oS(0)},
$S:0}
A.b5f.prototype={
$0(){var x,w=this.a
if(w.e.e==null)return
x=w.c
x.toString
F.bfn(new A.b5e(w),x,y.l)},
$S:0}
A.b5e.prototype={
$1(d){var x=null,w=this.a,v=w.e.e
v.toString
return B.X(x,new A.a0S(v,new A.b5d(w,d),x),C.e,x,x,x,x,150,x,x,C.i4,x,x,1/0)},
$S:770}
A.b5d.prototype={
$1(d){var x=this.a
x.D(new A.b5c(x,d,this.b))},
$S:771}
A.b5c.prototype={
$0(){var x=this.a,w=x.e,v=w.e
v.toString
x.e=w.aK0(v,this.b)
B.bB(this.c,!1).tw(null)},
$S:0}
A.aOy.prototype={
$1(d){var x=d.c,w=this.a.b,v=w.afn(d,B.V(C.d.o9(255*(J.l(w.e,d)?0.7:1)),x.gl(x)>>>16&255,x.gl(x)>>>8&255,x.gl(x)&255))
x=$.aR()?B.aU():new B.aQ(new B.aT())
this.b.Bi(v,C.Po,x)},
$S:z+7}
A.anz.prototype={
$1(d){var x=this.a
return d.a===x.a&&d.b===x.b},
$S:z+2}
A.any.prototype={
$1(d){var x=this.a
return new B.k(d.a+x.a,d.b+x.b)},
$S:241}
A.anx.prototype={
$1(d){var x=this.a
return d.a===x.a&&d.b===x.b},
$S:z+2}
A.aoW.prototype={
$1(d){var x=this.a
return new A.zB(d,d.m(0,x.d),new A.aoV(x,d),null)},
$S:z+8}
A.aoV.prototype={
$0(){this.a.e.$1(this.b)},
$S:14}
A.aQk.prototype={
$0(){this.a.e.$0()},
$S:0};(function aliases(){var x=A.VP.prototype
x.alI=x.k
x=A.Wv.prototype
x.amC=x.k})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=A.Rm.prototype,"gayQ","ayR",1)
x(v,"gaAW","aAX",3)
x(v,"gaAS","aAT",4)
x(v,"gayS","ayT",5)
w(v,"gN3","aAk",0)
w(v,"gUq","aBa",0)
w(v=A.Uw.prototype,"gUl","aAl",0)
x(v,"gaAU","aAV",1)
x(v,"gaB6","aB7",6)})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.Ii,B.hI)
u(B.a2,[A.a8f,A.a9Z,A.b0H,A.hi,A.a5S])
u(B.z,[A.Km,A.tO])
u(B.D,[A.VP,A.Wv])
v(A.Rm,A.VP)
u(B.hy,[A.aXC,A.b5a,A.b5h,A.b5g,A.b5f,A.b5c,A.aoV,A.aQk])
u(B.q,[A.adG,A.YK,A.zB,A.a0S])
v(A.a8M,B.c1)
v(A.FA,B.pM)
v(A.Uw,A.Wv)
v(A.b5b,B.i5)
u(B.d4,[A.b5e,A.b5d,A.aOy,A.anz,A.any,A.anx,A.aoW])
v(A.a9Y,B.oe)
v(A.XE,A.a9Z)
v(A.aOx,B.Kr)
x(A.VP,B.cz)
x(A.Wv,B.cz)
w(A.a9Z,B.ja)})()
B.aZ(b.typeUniverse,JSON.parse('{"Ii":{"hI":["tB"],"fv":["tB"]},"Km":{"z":[],"d":[]},"Rm":{"D":["Km"]},"adG":{"q":[],"d":[]},"a8M":{"c1":["bx"],"af":[]},"FA":{"U":[]},"tO":{"z":[],"d":[]},"Uw":{"D":["tO"]},"a9Y":{"af":[]},"XE":{"ja":["hi?"],"F":["hi?"],"ja.E":"hi?"},"zB":{"q":[],"d":[]},"YK":{"q":[],"d":[]},"a0S":{"q":[],"d":[]}}'))
var y=(function rtii(){var x=B.a4
return{X:x("hi"),G:x("j"),s:x("B"),h:x("v<hi>"),g:x("v<k>"),p:x("v<d>"),z:x("ah<D<z>>"),d:x("oM"),O:x("t0<y>"),C:x("t3"),x:x("A"),U:x("tB"),L:x("a8<k>"),l:x("d")}})();(function constants(){D.hV=new B.j(4291677645)
D.Pq=new A.hi(0,0,D.hV)
D.wy=new B.j(4280756007)
D.a1i=new B.Y(2,0,2,0)
D.a2I=new B.av(57686,"MaterialIcons",null,!1)
D.a48=new B.bv(D.a2I,null,C.m,null,null)
D.a3n=new B.av(58659,"MaterialIcons",null,!1)
D.a4Y=new B.bv(D.a3n,null,null,null,null)
D.mD=new A.FA(0,"pan")
D.uV=new A.FA(1,"scale")
D.ayU=new A.FA(2,"rotate")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"bNM","bqO",()=>B.b([B.b3(A.bc_(B.b2()),"Triangles"),B.b3(A.bc_(B.b2()),"TrianglesStrip"),B.b3(A.bc_(B.b2()),"TriangleFan")],B.a4("v<m>")))})()}
$__dart_deferred_initializers__["1u4iyKhPBOv/eMrUmRaoPwhkEjQ="] = $__dart_deferred_initializers__.current
