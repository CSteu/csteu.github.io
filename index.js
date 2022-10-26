window.onload = () => {
    let assignments = Number(localStorage.getItem('assignments')) || 1000000;
    let loc = Number(localStorage.getItem('loc')) || 100000000;
    let cps = Number(localStorage.getItem('cps')) || 0;
    let aps = Number(localStorage.getItem('aps')) || 0;
    let assMult = Number(localStorage.getItem('assMult')) || 1;
    let mult = Number(localStorage.getItem('mult')) || 1;

    let autoCost = 1000;
    let upgrade1Cost = 2000;
    let upgrade2Cost = 100000;
    let upgrade3Cost = 1000000;
    let upgrade4Cost = 30000000;
    let upgrade5Cost = 100000000;
    let upgrade6Cost = 1500;

    let people1Cost = 500;
    let people2Cost = 5000;
    let people3Cost = 50000;
    let people4Cost = 50000;
    let people5Cost = 90000;

    let maxStudents = Number(localStorage.getItem('maxStudents')) || 1000;

    let eastHallPeople = Number(localStorage.getItem('eastHallPeople')) || 0;
    let maxEHPeople = Number(localStorage.getItem('maxEHPeople')) || 0;
    let beacomPeople = Number(localStorage.getItem('beacomPeople')) || 0;
    let maxBeacomPeople = Number(localStorage.getItem('maxBeacomPeople')) || 0;
    let madLabsPeople = Number(localStorage.getItem('madLabsPeople')) || 0;
    let maxMadLabsPeople = Number(localStorage.getItem('maxMadLabsPeople')) || 0;
    let dsuPeople = Number(localStorage.getItem('dsuPeople')) || 0;
    let maxDsuPeople = Number(localStorage.getItem('maxDsuPeople')) || 0;
    let usaPeople = Number(localStorage.getItem('usaPeople')) || 0;
    let maxUsaPeople = Number(localStorage.getItem('maxUsaPeople')) || 0;

    //save button
    document.getElementById("save").onclick = (event) => {
        event.preventDefault();
        localStorage.setItem('loc', loc.toString());
        localStorage.setItem('assignments', assignments.toString());
        localStorage.setItem('cps', cps.toString());
        localStorage.setItem('aps', aps.toString());
        localStorage.setItem('assMult', assMult.toString());
        localStorage.setItem('mult', mult.toString());

        localStorage.setItem('maxStudents', maxStudents.toString());

        localStorage.setItem('eastHallPeople', eastHallPeople.toString());
        localStorage.setItem('maxEHPeople', maxEHPeople.toString());
        localStorage.setItem('beacomPeople', beacomPeople.toString());
        localStorage.setItem('maxBeacomPeople', maxBeacomPeople.toString());
        localStorage.setItem('madLabsPeople', madLabsPeople.toString());
        localStorage.setItem('maxMadLabsPeople', maxMadLabsPeople.toString());
        localStorage.setItem('dsuPeople', dsuPeople.toString());
        localStorage.setItem('maxDsuPeople', maxDsuPeople.toString());
        localStorage.setItem('usaPeople', usaPeople.toString());
        localStorage.setItem('maxUsaPeople', maxUsaPeople.toString());
    }

    function autoSave() {
        localStorage.setItem('loc', loc.toString());
        localStorage.setItem('assignments', assignments.toString());
        localStorage.setItem('cps', cps.toString());
        localStorage.setItem('aps', aps.toString());
        localStorage.setItem('assMult', assMult.toString());
        localStorage.setItem('mult', mult.toString());

        localStorage.setItem('maxStudents', maxStudents.toString());

        localStorage.setItem('eastHallPeople', eastHallPeople.toString());
        localStorage.setItem('maxEHPeople', maxEHPeople.toString());
        localStorage.setItem('beacomPeople', beacomPeople.toString());
        localStorage.setItem('maxBeacomPeople', maxBeacomPeople.toString());
        localStorage.setItem('madLabsPeople', madLabsPeople.toString());
        localStorage.setItem('maxMadLabsPeople', maxMadLabsPeople.toString());
        localStorage.setItem('dsuPeople', dsuPeople.toString());
        localStorage.setItem('maxDsuPeople', maxDsuPeople.toString());
        localStorage.setItem('usaPeople', usaPeople.toString());
        localStorage.setItem('maxUsaPeople', maxUsaPeople.toString());
    }
    setInterval(autoSave, 60000);


    //hide locations
    if (maxEHPeople < 1) {
        document.getElementById('ehPeople').style.display = 'none';
        document.getElementById('ehPic').style.display = 'none';
        document.getElementById('numProfs').style.display = 'none';
    }
    if (maxBeacomPeople < 1) {
        document.getElementById('beacomPeople').style.display = 'none';
        document.getElementById('beacomPic').style.display = 'none';
        document.getElementById('numGrad').style.display = 'none';
    }
    if (maxMadLabsPeople < 1) {
        document.getElementById('madLabsPeople').style.display = 'none';
        document.getElementById('madLabsPic').style.display = 'none';
        document.getElementById('numProj').style.display = 'none';
    }
    if (maxDsuPeople < 1) {
        document.getElementById('dsuPeople').style.display = 'none';
        document.getElementById('dsuPic').style.display = 'none';
        document.getElementById('numJobs').style.display = 'none';
    }
    if (maxDsuPeople < 1) {
        document.getElementById('usaPeople').style.display = 'none';
        document.getElementById('usaPic').style.display = 'none';
        document.getElementById('numOrgs').style.display = 'none';
    }
    //check if player can afford and highlight if so
    function checkPrice() {
        if (loc > autoCost && cps != maxStudents)
        {
            document.getElementById('autoclick').style.backgroundColor = "#025993bd";
            document.getElementById('autoclick').style.color = "antiquewhite";
        }
        else{
            document.getElementById('autoclick').style.backgroundColor = "#3d3b3c";
        }
        if (loc > upgrade1Cost){
            document.getElementById('upgrade1').style.backgroundColor = "#025993bd";
            document.getElementById('upgrade1').style.color = "antiquewhite";
        }
        else
            document.getElementById('upgrade1').style.backgroundColor = "#3d3b3c";
        if (loc > upgrade2Cost){
            document.getElementById('upgrade2').style.backgroundColor = "#025993bd";
            document.getElementById('upgrade2').style.color = "antiquewhite";
        }
        else
            document.getElementById('upgrade2').style.backgroundColor = "#3d3b3c";
        if (loc > upgrade3Cost){
            document.getElementById('upgrade3').style.backgroundColor = "#025993bd";
            document.getElementById('upgrade3').style.color = "antiquewhite";
        }
        else
            document.getElementById('upgrade3').style.backgroundColor = "#3d3b3c";
        if (loc > upgrade4Cost){
            document.getElementById('upgrade4').style.backgroundColor = "#025993bd";
            document.getElementById('upgrade4').style.color = "antiquewhite";
        }
        else
            document.getElementById('upgrade4').style.backgroundColor = "#3d3b3c";
        if (loc > upgrade5Cost){
            document.getElementById('upgrade5').style.backgroundColor = "#025993bd";
            document.getElementById('upgrade5').style.color = "antiquewhite";
        }
        else
            document.getElementById('upgrade5').style.backgroundColor = "#3d3b3c";


        if (loc > people1Cost && eastHallPeople < maxEHPeople){
            document.getElementById('ehPeople').style.backgroundColor = "#025993bd";
            document.getElementById('ehPeople').style.color = "antiquewhite";
        }
        else
            document.getElementById('ehPeople').style.backgroundColor = "#3d3b3c";
        if (loc > people2Cost && beacomPeople < maxBeacomPeople){
            document.getElementById('beacomPeople').style.backgroundColor = "#025993bd";
            document.getElementById('beacomPeople').style.color = "antiquewhite";
        }
        else
            document.getElementById('beacomPeople').style.backgroundColor = "#3d3b3c";
        if (loc > people3Cost && madLabsPeople < maxMadLabsPeople){
            document.getElementById('madLabsPeople').style.backgroundColor = "#025993bd";
            document.getElementById('madLabsPeople').style.color = "antiquewhite";
        }
        else
            document.getElementById('madLabsPeople').style.backgroundColor = "#3d3b3c";
        if (loc > people4Cost && dsuPeople < maxDsuPeople){
            document.getElementById('dsuPeople').style.backgroundColor = "#025993bd";
            document.getElementById('dsuPeople').style.color = "antiquewhite";
        }
        else
            document.getElementById('dsuPeople').style.backgroundColor = "#3d3b3c";
        
        if (loc > people5Cost && usaPeople < maxUsaPeople){
            document.getElementById('usaPeople').style.backgroundColor = "#025993bd";
            document.getElementById('usaPeople').style.color = "antiquewhite";
        }
        else
            document.getElementById('usaPeople').style.backgroundColor = "#3d3b3c";

    }
    setInterval(checkPrice, 1);


    //display unlock if not already unlocked
    if (maxEHPeople == 0)
        document.getElementById('unlockU2').style.display = 'none';
    if (maxBeacomPeople > 0)
        document.getElementById("unlockU2").style.display = 'none';
    else {
        document.getElementById("upgrade2").style.display = 'none';
        document.getElementById("unlockU3").style.display = 'none';
    }
    if (maxMadLabsPeople > 0)
        document.getElementById("unlockU3").style.display = 'none';
    else {
        document.getElementById("upgrade3").style.display = 'none';
        document.getElementById("unlockU4").style.display = 'none';
    }
    if (maxDsuPeople > 0)
        document.getElementById("unlockU4").style.display = 'none';
    else {
        document.getElementById("upgrade4").style.display = 'none';
        document.getElementById("unlockU5").style.display = 'none';
    }
    if (maxDsuPeople > 0)
        document.getElementById("unlockU5").style.display = 'none';
    else {
        document.getElementById("upgrade5").style.display = 'none';
        document.getElementById("unlockU6").style.display = 'none';
    }
/*    if (maxBeacomPeople > 0)
        document.getElementById("unlockU6").style.display = 'none';
    else
        document.getElementById("upgrade6").style.display = 'none';
*/

    //update changing values on screen
    function updateloc() {
        let nloc = loc.toFixed(0);
        if (assignments < 0)
            assignments = 0;
        let nassignments = assignments.toFixed(0);
        let ncps = cps * 5.4;
        ncps = ncps.toFixed(1);
        let naps = aps.toFixed(1);
        let arrow = 0
        let rate1 = (eastHallPeople*.4).toFixed(1);
        let rate2 = (beacomPeople*4.4).toFixed(1);
        let rate3 = (madLabsPeople*13.8).toFixed(1);
        let rate4 = (dsuPeople*83.2).toFixed(1);
        let rate5 = (dsuPeople*152).toFixed(1);
        if (cps > aps)
            arrow = '⇩';
        else
            arrow = '⇧';

        // document.getElementById("rate").innerHTML = `Rate: ${score.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}A/click`
        document.getElementById("assPerSec").innerHTML = `${naps.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} A/sec`
        document.getElementById("locPerSec").innerHTML = `${ncps.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} L/sec`
        document.getElementById("score").innerHTML = `${arrow}${nassignments.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}A`;
        document.getElementById("lines").innerHTML = `${nloc.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}L`;
        document.getElementById("numStudents").innerHTML = `Students:<br> ${cps}/${maxStudents.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}`;
        document.getElementById("numProfs").innerHTML = `Professors: <br> ${eastHallPeople}/${maxEHPeople}<br> ${rate1}A/sec`;
        document.getElementById("numGrad").innerHTML = `Grad<br>Classes: <br> ${beacomPeople}/${maxBeacomPeople}<br> ${rate2}A/sec`;
        document.getElementById("numProj").innerHTML = `Projects: <br> ${madLabsPeople}/${maxMadLabsPeople}<br> ${rate3}A/sec`;
        document.getElementById("numJobs").innerHTML = `Jobs: <br> ${dsuPeople}/${maxDsuPeople} <br> ${rate4}A/sec`;
        document.getElementById("numJobs").innerHTML = `Government <br> Organizations: <br> ${usaPeople}/${maxUsaPeople} <br> ${rate5}A/sec`;
    }
    if (assignments >= 0)
        setInterval(updateloc, 4);

    document.getElementById("tomClick").onclick = (event) => {
        event.preventDefault();
        assignments = assignments + (1 * assMult);
    }

    document.getElementById("codeClick").onclick = (event) => {
        event.preventDefault();
        if (assignments >= 1) {
            assignments = assignments - 1;
            loc = loc + (20);
        }
    }


    //upgrade1
    document.getElementById("upgrade1").onclick = (event) => {
        event.preventDefault();
        if (loc >= upgrade1Cost) {
            maxEHPeople += 5;
            loc -= upgrade1Cost;
            if(maxBeacomPeople == 0)
                document.getElementById('unlockU2').style.display = 'block';
            document.getElementById('ehPeople').style.display = 'block';
            document.getElementById('ehPic').style.display = 'block';
            document.getElementById('numProfs').style.display = 'block';
        }
    }

    //unlock upgrade 2
    let uu2 = document.getElementById("unlockU2");
    uu2.addEventListener('click', hideshow, false);

    function hideshow() {
        if (loc >= 100000) {
            loc -= 100000
            maxBeacomPeople += 10;
            document.getElementById('unlockU2').style.display = 'none';
            document.getElementById('upgrade2').style.display = 'block';
            if(maxMadLabsPeople == 0)
                document.getElementById('unlockU3').style.display = 'block';
            document.getElementById('beacomPeople').style.display = 'block';
            document.getElementById('beacomPic').style.display = 'block';
            document.getElementById('numGrad').style.display = 'block';
        }
    }

    //upgrade 2
    document.getElementById("upgrade2").onclick = (event) => {
        event.preventDefault();
        if (loc >= upgrade2Cost) {
            loc -= upgrade2Cost
            maxBeacomPeople += 10;
        }
    }

    //unlock upgrade 3
    let uu3 = document.getElementById("unlockU3");
    uu3.addEventListener('click', hideshow2, false);

    function hideshow2() {
        if (loc >= 1000000) {
            loc -= 1000000
            maxMadLabsPeople += 30;
            document.getElementById('unlockU3').style.display = 'none';
            document.getElementById('upgrade3').style.display = 'block';
            if(maxDsuPeople == 0)
                document.getElementById('unlockU4').style.display = 'block';
            document.getElementById('madLabsPeople').style.display = 'block';
            document.getElementById('madLabsPic').style.display = 'block';
            document.getElementById('numProj').style.display = 'block';
        }
    }

    //upgrade 3
    document.getElementById("upgrade3").onclick = (event) => {
        event.preventDefault();
        if (loc >= upgrade3Cost) {
            loc -= upgrade3Cost
            maxMadLabsPeople += 30;
        }
    }

    //unlock upgrade 4
    let uu4 = document.getElementById("unlockU4");
    uu4.addEventListener('click', hideshow3, false);

    function hideshow3() {
        if (loc >= 30000000) {
            loc -= 30000000
            maxDsuPeople += 40;
            document.getElementById('unlockU4').style.display = 'none';
            document.getElementById('upgrade4').style.display = 'block';
            document.getElementById('unlockU5').style.display = 'block';
            document.getElementById('dsuPeople').style.display = 'block';
            document.getElementById('dsuPic').style.display = 'block';
            document.getElementById('numJobs').style.display = 'block';
        }
    }

    //upgrade 4
    document.getElementById("upgrade4").onclick = (event) => {
        event.preventDefault();
        if (loc >= upgrade4Cost) {
            maxDsuPeople += 40;
            loc -= upgrade4Cost
        }
    }

    //unlock upgrade 5
    let uu5 = document.getElementById("unlockU5");
    uu5.addEventListener('click', hideshow4, false);

    function hideshow4() {
        if (loc >= 100000000) {
            loc -= 100000000
            document.getElementById('unlockU5').style.display = 'none';
            document.getElementById('upgrade5').style.display = 'block';
            document.getElementById('unlockU6').style.display = 'block';
            document.getElementById('usaPeople').style.display = 'block';
            document.getElementById('usaPic').style.display = 'block';
            document.getElementById('numOrgs').style.display = 'block';
        }
    }

    //upgrade 5
    document.getElementById("upgrade5").onclick = (event) => {
        event.preventDefault();
        if (loc >= upgrade5Cost) {
            loc -= upgrade5Cost
            maxUsaPeople += 45;
        }
    }

    //unlock upgrade 6
    let uu6 = document.getElementById("unlockU6");
    uu6.addEventListener('click', hideshow5, false);

    function hideshow5() {
        if (loc >= 1100) {
            loc -= 1100
            document.getElementById('unlockU6').style.display = 'none';
            document.getElementById('upgrade6').style.display = 'block';
        }
    }

    //upgrade 6
    document.getElementById("upgrade6").onclick = (event) => {
        event.preventDefault();
        if (loc >= upgrade6Cost) {
            assMult *= 2.5
            loc -= upgrade6Cost
            upgrade4Cost *= 2;
            document.getElementById("upgrade6").innerHTML = `Upgrade: x2.5 <br> Cost: ${upgrade6Cost}L`

        }
    }

    //autoclicker button for LOC
    function autoclick() {
        if (assignments >= 1) {
            assignments -= cps;
            loc += (5.4 * cps);
        }
    }
    document.getElementById("autoclick").onclick = (event) => {
        event.preventDefault();
        if (loc >= autoCost && cps < maxStudents) {
            loc -= autoCost;
            cps++;
        }
    }
    setInterval(autoclick, 1000);
    // assignments autoclicker
    function assignmentClick() {
        assignments += aps;
    }
    setInterval(assignmentClick, 1000);


    //east hall button
    document.getElementById('ehPeople').onclick = (event) => {
        event.preventDefault();
        if ((loc >= people1Cost) && (eastHallPeople < maxEHPeople)) {
            loc -= people1Cost;
            eastHallPeople++;
            aps += .4
        }
    }
    //beacom button
    document.getElementById('beacomPeople').onclick = (event) => {
        event.preventDefault();
        if ((loc >= people2Cost) && (beacomPeople < maxBeacomPeople)) {
            loc -= people2Cost;
            beacomPeople++;
            aps += 4.4
        }
    }
    //madlabs button
    document.getElementById('madLabsPeople').onclick = (event) => {
        event.preventDefault();
        if ((loc >= people3Cost) && (madLabsPeople < maxMadLabsPeople)) {
            loc -= people3Cost;
            madLabsPeople++;
            aps += 13.8;
        }
    }
    // DSU button
    document.getElementById('dsuPeople').onclick = (event) => {
        event.preventDefault();
        if ((loc >= people4Cost) && (dsuPeople < maxDsuPeople)) {
            loc -= people4Cost;
            dsuPeople++;
            aps += 83.2;
        }
    }
    // USA button
    document.getElementById('usaPeople').onclick = (event) => {
        event.preventDefault();
        if ((loc >= people5Cost) && (usaPeople < maxUsaPeople)) {
            loc -= people5Cost;
            usaPeople++;
            aps += 152;
        }
    }
}
