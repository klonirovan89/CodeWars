function abbrevName(name){
    a=name.split(" ")
    i=a.length
    b=a[i-2]
    c = Array.from(b)
    e=c.length
    d=a[i-1]
    f=Array.from(d)
    g=c[0]+"."+f[0]
    h=g.toUpperCase()
    
return h
}
abbrevName("Паша щербаченко")