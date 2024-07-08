let inchsizes = ["1/8", "1/4", "3/8", "1/2", "5/8", "3/4", "7/8", "1",   "1 1/8", "1 1/4", "1 3/8", "1 1/2", "1 3/4", "2",   "2 1/4", "2 1/2", "2 3/4", "3"];
let inchext   = [ 9.73,  13.16, 16.66, 20.96, 22.91, 26.24, 30.20, 33.25, 37.90,   41.91,   44.32,   47.80,   53.75,   59.61, 65.71,   75.19,   81.54,   87.89];
let inchstep =  [ 0.907, 1.337, 1.337, 1.814, 1.814, 1.814, 1.814, 2.309, 2.309,   2.309,   2.309,   2.309,   2.309,   2.309, 2.309,   2.309,   2.309,   2.309];

        function calcthread()
        {
        firstsvg=`
<?xml version="1.0" encoding="utf-8"?>
<svg width="260" height="220" viewBox="0 0 260 220" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <style>
.sall{stroke:#000;fill:#fff;stroke-width:2;stroke-linejoin:round;stroke-linecap:round;}
.plus{stroke:#d3b416;fill:none;stroke-width:4;stroke-linejoin:round;stroke-linecap:round;}
.pf{stroke:#d3b416;fill:#d3b416;stroke-width:4;stroke-linejoin:round;stroke-linecap:round;}
.minus{stroke:#ef2929;fill:none;stroke-width:4;stroke-linejoin:round;stroke-linecap:round;}
.mf{stroke:#ef2929;fill:#ef2929;stroke-width:4;stroke-linejoin:round;stroke-linecap:round;}
.dim{stroke:#000;fill:none;stroke-width:2;stroke-linejoin:round;stroke-linecap:round;}
.da{stroke:#000;fill:#000;stroke-width:2;stroke-linejoin:round;stroke-linecap:round;}
</style>
  <defs>
    <g id="arrow">
      <path d="M0,0l6 -18l6 18l-6-3l-6 3" class="da"/>
    </g>
  </defs>
<path d="M10,100v-60l100 40v40l-100 40z" class="plus"/>
<circle cx="10" cy="100" r="6" class="pf" />
<circle cx="210" cy="158" r="6" class="pf" />
<path d="M4,76l12 -12m-12 80l12 -12m36 17l8 -14m0 10l8 -14m-14 -66l16 -10m-8 12l16 -10" class="dim"/>
<path d="M10,160v48v-6h220h-220v-18m200 0 v-24v18h-200m-0-162v24m100 -24v63v-57h-100m100 58h24m0 40h-24h20v28v-94m-84 2q-38 40 0 87" class="dim"/>
<use href="#arrow" x="28" y="208" transform="rotate(-90 28 208)"/>
<use href="#arrow" x="28" y="184" transform="rotate(-90 28 184)"/>
<use href="#arrow" x="190" y="172" transform="rotate(90 190 172)"/>
<use href="#arrow" x="28" y="28" transform="rotate(-90 28 28)"/>
<use href="#arrow" x="90" y="16" transform="rotate(90 90 16)"/>
<use href="#arrow" x="136" y="60" transform="rotate(180 136 60)"/>
<use href="#arrow" x="124" y="140" />
<use href="#arrow" x="30" y="66" transform="rotate(40 30 66)"/>
<use href="#arrow" x="41" y="126" transform="rotate(144 41 126)"/>`;
firstsvg1 = `
<?xml version="1.0" encoding="utf-8"?>
<svg width="260" height="220" viewBox="0 0 260 220" version="1.1" xmlns="http://www.w3.org/2000/svg">
<path d="M110,117v-66l-100 50l100 50z" class="minus"/>
<circle cx="110" cy="100" r="6" class="mf" />
<circle cx="210" cy="152" r="6" class="mf" />
<path d="M104,80l12 -12m-12 68l12 -12m-64 -39l8 -14m0 10l8 -14m-22 63l16 -10m-8 12l16 -10" class="dim"/>
<path d="M110,152v48v-6h120h-120v-18
m100 0 v-24v18h-100m-100-144v72m100 -50v-24v8h-100m70 35q34 34 0 70" class="dim"/>
<use href="#arrow" x="128" y="176" transform="rotate(-90 128 176)"/>
<use href="#arrow" x="128" y="200" transform="rotate(-90 128 200)"/>
<use href="#arrow" x="190" y="164" transform="rotate(90 190 164)"/>
<use href="#arrow" x="28" y="38" transform="rotate(-90 28 38)"/>
<use href="#arrow" x="90" y="26" transform="rotate(90 90 26)"/>
<use href="#arrow" x="87" y="85" transform="rotate(-40 87 85)"/>
<use href="#arrow" x="96" y="125" transform="rotate(-144 96 125)"/>
`;
firstsvg2 = `
<?xml version="1.0" encoding="utf-8"?>
<svg width="260" height="220" viewBox="0 0 260 220" version="1.1" xmlns="http://www.w3.org/2000/svg">
<path d="M100,100v-60l100 40v40l-100 40z" class="plus"/>
<circle cx="100" cy="100" r="6" class="pf" />
<circle cx="10" cy="158" r="6" class="pf" />
<path d="M94,76l12 -12m-12 80l12 -12m36 17l8 -14m0 10l8 -14m-14 -66l16 -10m-8 12l16 -10" class="dim"/>
<path d="M10,160v24m90 0 v-24v48v-8h-100h100v-40v18h-90m90-162v24m100 -24v63v-57h-100m100 58h24m0 40h-24h20v28v-94m-84 2q-38 40 0 87" class="dim"/>
<use href="#arrow" x="28" y="184" transform="rotate(-90 28 184)"/>
<use href="#arrow" x="80" y="172" transform="rotate(90 80 172)"/>
<use href="#arrow" x="80" y="194" transform="rotate(90 80 194)"/>
<use href="#arrow" x="118" y="28" transform="rotate(-90 118 28)"/>
<use href="#arrow" x="180" y="16" transform="rotate(90 180 16)"/>
<use href="#arrow" x="226" y="60" transform="rotate(180 226 60)"/>
<use href="#arrow" x="214" y="140" />
<use href="#arrow" x="120" y="66" transform="rotate(40 120 66)"/>
<use href="#arrow" x="131" y="126" transform="rotate(144 131 126)"/>
`;
firstsvg3 = `
<?xml version="1.0" encoding="utf-8"?>
<svg width="260" height="220" viewBox="0 0 260 220" version="1.1" xmlns="http://www.w3.org/2000/svg">
<path d="M210,117v-66l-100 50l100 50z" class="minus"/>
<circle cx="210" cy="102" r="6" class="mf" />
<circle cx="10" cy="152" r="6" class="mf" />
<path d="M204,80l12 -12m-12 68l12 -12m-64 -39l8 -14m0 10l8 -14m-22 63l16 -10m-8 12l16 -10" class="dim"/>
<path d="M10,152v24m200 0 v-24v48v-8h-220h220v-40
v18h-200m100-144v72m100 -50v-24v8h-100m70 35q34 34 0 70" class="dim"/>
<use href="#arrow" x="28" y="176" transform="rotate(-90 28 176)"/>
<use href="#arrow" x="190" y="164" transform="rotate(90 190 164)"/>
<use href="#arrow" x="190" y="186" transform="rotate(90 190 186)"/>
<use href="#arrow" x="128" y="38" transform="rotate(-90 128 38)"/>
<use href="#arrow" x="190" y="26" transform="rotate(90 190 26)"/>
<use href="#arrow" x="187" y="85" transform="rotate(-40 187 85)"/>
<use href="#arrow" x="196" y="125" transform="rotate(-144 196 125)"/>
`;
        lastsvg = '</svg><p>Nut, adding</p>';
        lastsvg1 = '</svg><p>Nut, cutting</p>';
        lastsvg2 = '</svg><p>Bolt, adding</p>';
        lastsvg3 = '</svg><p>Bolt, cutting</p>';
        size = Number((document.getElementById("size").value).replace(",","."));
        step = Number((document.getElementById("step").value).replace(",","."));
        
        middlesvg = '<text x="80" y="174" font-size="14px" >' + (size/2 + 0.1082 * step).toFixed(2) + ' mm</text>';
        middlesvg = middlesvg + '<text x="80" y="196" font-size="14px" > ⌀' + (size + 0.2164 * step).toFixed(2) + ' mm</text>';
        middlesvg = middlesvg + '<text font-size="14px" transform="translate(150, 130) rotate(-90)">' + (0.25*step).toFixed(2) + ' mm</text>';
        middlesvg = middlesvg + '<text x="30" y="14" font-size="14px" >' + (0.6494*step - 0.02).toFixed(2) + ' mm</text>';
        middlesvg = middlesvg + '<text font-size="14px" transform="translate(46, 110) rotate(-90)">60°</text>';        
        middlesvg1 = '<text x="130" y="162" font-size="14px" >' + (size/2 - 0.5412 * step).toFixed(2) + ' mm</text>';
        middlesvg1 = middlesvg1 + '<text x="130" y="188" font-size="14px" > ⌀' + (size - 1.0824 * step).toFixed(2) + ' mm</text>';
        middlesvg1 = middlesvg1 + '<text x="30" y="20" font-size="14px" >' + (0.6494 * step).toFixed(2) + ' mm</text>';
        middlesvg1 = middlesvg1 + '<text font-size="14px" transform="translate(76, 90) rotate(90)">60°</text>';       
        middlesvg2 = '<text x="20" y="170" font-size="14px" >' + (size/2 - 0.7577*step).toFixed(2) + ' mm</text>';
        middlesvg2 = middlesvg2 + '<text x="10" y="194" font-size="14px" > ⌀' + (size - 1.5154*step).toFixed(2) + ' mm</text>';
        middlesvg2 = middlesvg2 + '<text font-size="14px" transform="translate(240, 130) rotate(-90)">' + (0.125*step).toFixed(2) + ' mm</text>';
        middlesvg2 = middlesvg2 + '<text x="120" y="14" font-size="14px" >' + (0.7577*step - 0.02).toFixed(2) + ' mm</text>';
        middlesvg2 = middlesvg2 + '<text font-size="14px" transform="translate(136, 110) rotate(-90)">60°</text>';  
        middlesvg3 = '<text x="80" y="162" font-size="14px" >' + (size/2).toFixed(2) + ' mm</text>';
        middlesvg3 = middlesvg3 + '<text x="80" y="186" font-size="14px" > ⌀' + (size).toFixed(2) + ' mm</text>';
        middlesvg3 = middlesvg3 + '<text x="130" y="20" font-size="14px" >' + (0.7577 * step).toFixed(2) + ' mm</text>';
        middlesvg3 = middlesvg3 + '<text font-size="14px" transform="translate(176, 90) rotate(90)">60°</text>';        
        document.getElementById("img1").innerHTML = firstsvg + middlesvg + lastsvg
        + firstsvg1 + middlesvg1 + lastsvg1;
        document.getElementById("img2").innerHTML =  firstsvg2 + middlesvg2 + lastsvg2 + firstsvg3 + middlesvg3 + lastsvg3;
        }
        function sizechange()
        {
          rsize = Number((document.getElementById("volsize").value).replace(",","."));
          document.getElementById("size").value = rsize;
        }
        function stepchange()
        {
          rstep = Number((document.getElementById("volstep").value).replace(",","."));
          document.getElementById("step").value = rstep;
        }
        function mansize()
        {
           msize = Number((document.getElementById("size").value).replace(",","."));
          document.getElementById("volsize").value = msize; 
        }
        function sdec()
        {
            s = Number((document.getElementById("volsize").value).replace(",","."));
            if (s > 6)
            {
                s--;
                document.getElementById("volsize").value = s;
                document.getElementById("size").value = s;
            }
        }
        function tdec()
        {
            st = Number((document.getElementById("volstep").value).replace(",","."));
            if (st > 0.5)
            {
                st = st - 0.5;
                document.getElementById("volstep").value = st;
                document.getElementById("step").value = st;
            }    
        }
        function sinc()
        {
            s = Number((document.getElementById("volsize").value).replace(",","."));
            if (s < 60)
            {
                s++;
                document.getElementById("volsize").value = s;
                document.getElementById("size").value = s;
            }
        }
        function tinc()
        {
            st = Number((document.getElementById("volstep").value).replace(",","."));
            if (st < 6)
            {
                st = st + 0.5;
                document.getElementById("volstep").value = st;
                document.getElementById("step").value = st;
            }
        }
        //inch
        function isizechange()
        {
          irsize = Number((document.getElementById("ivolsize").value).replace(",","."));
          document.getElementById("isize").value = inchsizes[irsize];
          document.getElementById("isizemm").value = inchext[irsize];
                document.getElementById("stepi").value = inchstep[irsize];
        }
        function isearchpos(val)
        {
             for (i=0; i < inchsizes.length; i++)
                  {
                        if (val == inchsizes[i])
                        {
                                return i;
                                break;
                        }
                  }
             //return -1;
             alert (val);
             alert (i);
        }
        function isinc()
        {
            is = Number((document.getElementById("ivolsize").value).replace(",","."));
            if (is < 17)
            {
                is++;
                document.getElementById("ivolsize").value = is;
                document.getElementById("isize").value = inchsizes[is];
                document.getElementById("isizemm").value = inchext[is];
                document.getElementById("stepi").value = inchstep[is];
            }
        }
        function isdec()
        {
            is = Number((document.getElementById("ivolsize").value).replace(",","."));
            if (is > 0)
            {
                is--;
                document.getElementById("ivolsize").value = is;
                document.getElementById("isize").value = inchsizes[is];
                document.getElementById("isizemm").value = inchext[is];
                document.getElementById("stepi").value = inchstep[is];
            }
        }
                function icalcthread()
        {
        firstsvg=`
<?xml version="1.0" encoding="utf-8"?>
<svg width="260" height="220" viewBox="0 0 260 220" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <style>
.sall{stroke:#000;fill:#fff;stroke-width:2;stroke-linejoin:round;stroke-linecap:round;}
.plus{stroke:#d3b416;fill:none;stroke-width:4;stroke-linejoin:round;stroke-linecap:round;}
.pf{stroke:#d3b416;fill:#d3b416;stroke-width:4;stroke-linejoin:round;stroke-linecap:round;}
.minus{stroke:#ef2929;fill:none;stroke-width:4;stroke-linejoin:round;stroke-linecap:round;}
.mf{stroke:#ef2929;fill:#ef2929;stroke-width:4;stroke-linejoin:round;stroke-linecap:round;}
.dim{stroke:#000;fill:none;stroke-width:2;stroke-linejoin:round;stroke-linecap:round;}
.da{stroke:#000;fill:#000;stroke-width:2;stroke-linejoin:round;stroke-linecap:round;}
</style>
  <defs>
    <g id="arrow">
      <path d="M0,0l6 -18l6 18l-6-3l-6 3" class="da"/>
    </g>
  </defs>
<path d="M10,100v-60l100 40v40l-100 40z" class="plus"/>
<circle cx="10" cy="100" r="6" class="pf" />
<circle cx="210" cy="158" r="6" class="pf" />
<path d="M4,76l12 -12m-12 80l12 -12m36 17l8 -14m0 10l8 -14m-14 -66l16 -10m-8 12l16 -10" class="dim"/>
<path d="M10,160v48v-6h220h-220v-18m200 0 v-24v18h-200m-0-162v24m100 -24v63v-57h-100m100 58h24m0 40h-24h20v28v-94m-84 2q-38 40 0 87" class="dim"/>
<use href="#arrow" x="28" y="208" transform="rotate(-90 28 208)"/>
<use href="#arrow" x="28" y="184" transform="rotate(-90 28 184)"/>
<use href="#arrow" x="190" y="172" transform="rotate(90 190 172)"/>
<use href="#arrow" x="28" y="28" transform="rotate(-90 28 28)"/>
<use href="#arrow" x="90" y="16" transform="rotate(90 90 16)"/>
<use href="#arrow" x="136" y="60" transform="rotate(180 136 60)"/>
<use href="#arrow" x="124" y="140" />
<use href="#arrow" x="30" y="66" transform="rotate(40 30 66)"/>
<use href="#arrow" x="41" y="126" transform="rotate(144 41 126)"/>`;
firstsvg1 = `
<?xml version="1.0" encoding="utf-8"?>
<svg width="260" height="220" viewBox="0 0 260 220" version="1.1" xmlns="http://www.w3.org/2000/svg">
<path d="M110,117v-66l-100 50l100 50z" class="minus"/>
<circle cx="110" cy="100" r="6" class="mf" />
<circle cx="210" cy="152" r="6" class="mf" />
<path d="M104,80l12 -12m-12 68l12 -12m-64 -39l8 -14m0 10l8 -14m-22 63l16 -10m-8 12l16 -10" class="dim"/>
<path d="M110,152v48v-6h120h-120v-18
m100 0 v-24v18h-100m-100-144v72m100 -50v-24v8h-100m70 35q34 34 0 70" class="dim"/>
<use href="#arrow" x="128" y="176" transform="rotate(-90 128 176)"/>
<use href="#arrow" x="128" y="200" transform="rotate(-90 128 200)"/>
<use href="#arrow" x="190" y="164" transform="rotate(90 190 164)"/>
<use href="#arrow" x="28" y="38" transform="rotate(-90 28 38)"/>
<use href="#arrow" x="90" y="26" transform="rotate(90 90 26)"/>
<use href="#arrow" x="87" y="85" transform="rotate(-40 87 85)"/>
<use href="#arrow" x="96" y="125" transform="rotate(-144 96 125)"/>
`;
firstsvg2 = `
<?xml version="1.0" encoding="utf-8"?>
<svg width="260" height="220" viewBox="0 0 260 220" version="1.1" xmlns="http://www.w3.org/2000/svg">
<path d="M100,100v-60l100 40v40l-100 40z" class="plus"/>
<circle cx="100" cy="100" r="6" class="pf" />
<circle cx="10" cy="158" r="6" class="pf" />
<path d="M94,76l12 -12m-12 80l12 -12m36 17l8 -14m0 10l8 -14m-14 -66l16 -10m-8 12l16 -10" class="dim"/>
<path d="M10,160v24m90 0 v-24v48v-8h-100h100v-40v18h-90m90-162v24m100 -24v63v-57h-100m100 58h24m0 40h-24h20v28v-94m-84 2q-38 40 0 87" class="dim"/>
<use href="#arrow" x="28" y="184" transform="rotate(-90 28 184)"/>
<use href="#arrow" x="80" y="172" transform="rotate(90 80 172)"/>
<use href="#arrow" x="80" y="194" transform="rotate(90 80 194)"/>
<use href="#arrow" x="118" y="28" transform="rotate(-90 118 28)"/>
<use href="#arrow" x="180" y="16" transform="rotate(90 180 16)"/>
<use href="#arrow" x="226" y="60" transform="rotate(180 226 60)"/>
<use href="#arrow" x="214" y="140" />
<use href="#arrow" x="120" y="66" transform="rotate(40 120 66)"/>
<use href="#arrow" x="131" y="126" transform="rotate(144 131 126)"/>
`;
firstsvg3 = `
<?xml version="1.0" encoding="utf-8"?>
<svg width="260" height="220" viewBox="0 0 260 220" version="1.1" xmlns="http://www.w3.org/2000/svg">
<path d="M210,117v-66l-100 50l100 50z" class="minus"/>
<circle cx="210" cy="102" r="6" class="mf" />
<circle cx="10" cy="152" r="6" class="mf" />
<path d="M204,80l12 -12m-12 68l12 -12m-64 -39l8 -14m0 10l8 -14m-22 63l16 -10m-8 12l16 -10" class="dim"/>
<path d="M10,152v24m200 0 v-24v48v-8h-220h220v-40
v18h-200m100-144v72m100 -50v-24v8h-100m70 35q34 34 0 70" class="dim"/>
<use href="#arrow" x="28" y="176" transform="rotate(-90 28 176)"/>
<use href="#arrow" x="190" y="164" transform="rotate(90 190 164)"/>
<use href="#arrow" x="190" y="186" transform="rotate(90 190 186)"/>
<use href="#arrow" x="128" y="38" transform="rotate(-90 128 38)"/>
<use href="#arrow" x="190" y="26" transform="rotate(90 190 26)"/>
<use href="#arrow" x="187" y="85" transform="rotate(-40 187 85)"/>
<use href="#arrow" x="196" y="125" transform="rotate(-144 196 125)"/>
`;
        lastsvg = '</svg><p>Nut, adding</p>';
        lastsvg1 = '</svg><p>Nut, cutting</p>';
        lastsvg2 = '</svg><p>Bolt, adding</p>';
        lastsvg3 = '</svg><p>Bolt, cutting</p>';
        isize = Number((document.getElementById("isizemm").value).replace(",","."));
        istep = Number((document.getElementById("stepi").value).replace(",","."));
        ih = 1.920 * istep;
        middlesvg = '<text x="80" y="174" font-size="14px" >' + (isize/2 + ih / 12).toFixed(2) + ' mm</text>';
        middlesvg = middlesvg + '<text x="80" y="198" font-size="14px" > ⌀' + (isize + ih / 6).toFixed(2) + ' mm</text>';
        middlesvg = middlesvg + '<text font-size="14px" transform="translate(150, 130) rotate(-90)">' + (0.1539 * ih / 2).toFixed(2) + ' mm</text>';
        middlesvg = middlesvg + '<text x="30" y="14" font-size="14px" >' + (3 * ih / 8).toFixed(2) + ' mm</text>';
        middlesvg = middlesvg + '<text font-size="14px" transform="translate(46, 110) rotate(-90)">55°</text>';        
        middlesvg1 = '<text x="130" y="162" font-size="14px" >' + (isize/2 + ih / 12 - 3 * ih / 8).toFixed(2) + ' mm</text>';
        middlesvg1 = middlesvg1 + '<text x="130" y="188" font-size="14px" >⌀' + (isize + ih / 6 - 3 * ih / 4).toFixed(2) + ' mm</text>';
        middlesvg1 = middlesvg1 + '<text x="30" y="20" font-size="14px" >' + (0.425 * ih ).toFixed(2) + ' mm</text>';
        middlesvg1 = middlesvg1 + '<text font-size="14px" transform="translate(76, 90) rotate(90)">55°</text>';       
        middlesvg2 = '<text x="20" y="170" font-size="14px" >' + (isize/2 - 3*ih/8).toFixed(2) + ' mm</text>';
        middlesvg2 = middlesvg2 + '<text x="10" y="194" font-size="14px" > ⌀' + (isize - 3*ih/4).toFixed(2) + ' mm</text>';
        middlesvg2 = middlesvg2 + '<text font-size="14px" transform="translate(240, 130) rotate(-90)">' + (0.1539 * ih / 2).toFixed(2) + ' mm</text>';
        middlesvg2 = middlesvg2 + '<text x="120" y="14" font-size="14px" >' + (3 * ih / 8).toFixed(2) + ' mm</text>';
        middlesvg2 = middlesvg2 + '<text font-size="14px" transform="translate(136, 110) rotate(-90)">55°</text>';  
        middlesvg3 = '<text x="80" y="162" font-size="14px" >' + (isize/2).toFixed(2) + ' mm</text>';
        middlesvg3 = middlesvg3 + '<text x="80" y="186" font-size="14px" > ⌀' + (isize).toFixed(2) + ' mm</text>'; 
        middlesvg3 = middlesvg3 + '<text x="130" y="20" font-size="14px" >' + (0.425 * ih).toFixed(2) + ' mm</text>';
        middlesvg3 = middlesvg3 + '<text font-size="14px" transform="translate(176, 90) rotate(90)">55°</text>';        
        document.getElementById("img3").innerHTML = firstsvg + middlesvg + lastsvg
        + firstsvg1 + middlesvg1 + lastsvg1;
        document.getElementById("img4").innerHTML =  firstsvg2 + middlesvg2 + lastsvg2 + firstsvg3 + middlesvg3 + lastsvg3;
        }