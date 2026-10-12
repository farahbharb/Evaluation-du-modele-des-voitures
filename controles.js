// 1
function verif1() {
    let np=document.getElementById('np').value;
    p1=np.substring(0,2)
    p2=np.substring(3)
    let err=''
    if (np.length!=8 || np[2]!="/" || num(p1)==false||num(p2)==false ){
        err=err+'<li> numero permis invalide</li>'
    }

    let no=document.getElementById('no').value;
    if ( no.length<3 || no.length>20 ||alph(no)==false || no.indexOf('  ')!=-1) {
        err=err+'<li>nom invalide</li>'  
    }

    let pr=document.getElementById('pr').value;
    if ( pr.length<3 || pr.length>20 ||alph(pr)==false || pr.indexOf('  ')!=-1) {
        err=err+'<li>prenom invalide</li>'  
    }

    let gn1=document.getElementById('gn1').checked
    let gn2=document.getElementById('gn2').checked
    if (gn1==gn2) {
        err=err+'<li>genre invalide</li>'  
    }

    let vl=document.getElementById('vl').selectedIndex
    if (vl<=0) {
        err=err+'<li>ville invalide</li>'  
    }

    if(err!='')
        {
        document.getElementById('erreurs').innerHTML="<ul>"+err+"</ul>" 
        document.getElementById('erreurs').style.border='2px solid #ff4d4d' 
        return false
        }
}
// 2
function verif2() {
    let err=''
    let np=document.getElementById('np').value;
    p1=np.substring(0,2)
    p2=np.substring(3)
    if (np.length!=8 || np[2]!="/" || num(p1)==false||num(p2)==false ){
        err=err+'<li> numero permis invalide</li>'
    }

    let mod=document.getElementById('md').selectedIndex
    if (mod<=0) {
        err=err+'<li>modele invalide</li>'  
    } 


    let s=document.getElementById('s').value
    if (s<'0' || s>'5') {
        err=err+'<li>securite invalide</li>'      
    }

    let cd=document.getElementById('cd').value
    if (cd<'0' || cd>'5') {
        err=err+'<li>conduit invalide</li>'      
    }

    let cf=document.getElementById('cf').value
    if (cf<'0' || cf>'5') {
        err=err+'<li>confort invalide</li>'      
    }

    let rb=document.getElementById('rb').checked
    if ((!rb) ) {
        err=err+'<li>robot invalide</li>'  
    }
    
    if(err!='')
        {
        document.getElementById('erreurs').innerHTML="<ul>"+err+"</ul>" 
        document.getElementById('erreurs').style.border='2px solid #ff4d4d' 
        return false
        }
}
// test numerique
function num(ch) {
    i=0
    tst=true
    while (i < ch.length && tst==true) {
        if(ch[i]<'0' || ch[i]>'9' )  {
            tst=false
        }
        i++
    }
 return tst
    
}
// test alphabetique
function alph(ch) {
    ch=ch.toUpperCase()
    i=0
    tst=true
    while (i < ch.length && tst==true) {
        if(( ch[i]<'A' || ch[i]>'z') && (ch[i]!=" " )) {
            tst=false
        }
        i++
    }
 return tst
    
}


