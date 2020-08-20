<template>
<body>
<div class='solar-syst'>
  <div class='sun'></div>
  <div class='mercury'></div>
  <div class='venus'></div>
  <div class='earth'></div>
  <div class='mars'></div>

</div>
</body>
</template>

<script>
export default {
}
</script>

<style scoped>
*, *:before, *:after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html, body {
  height: 100%;
  width: 100%;
}

body {
  font: normal 1em/1.45em "Helvetica Neue", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #fff;
  background: radial-gradient(ellipse at bottom, #1C2837 0%, #050608 100%);
  background-attachment: fixed;
}

.description {
  padding: 30px;
  position: absolute;
  top: 0;
  left: 0;
  width: 25%;
  z-index: 999;
}
.description p {
  font-size: .9em;
}

hr {
  margin: 26px 0;
  border: 0;
  border-top: 1px solid white;
  background: transparent;
  width: 25%;
  opacity: .1;
}

code {
  color: #ae94c0;
  font-family: Menlo, Monaco, Consolas, 'Courier New', monospace;
  font-size: .9em;
}

.solar-syst {
  margin: 0 auto;
  width: 100%;
  height: 100%;
  position: relative;
}
.solar-syst:after {
  content: "";
  position: absolute;
  height: 2px;
  width: 2px;
  top: -2px;
  background: white;
  box-shadow: 761px 1326px 0 0px rgba(255, 255, 255, 0.532) , 719px 1031px 0 0px rgba(255,255,255, 0.323) , 1280px 694px 0 0px rgba(255,255,255, 0.271) , 1634px 1387px 0 0px rgba(255,255,255, 0.628) , 1772px 20px 0 0px rgba(255,255,255, 0.702) , 584px 299px 0 0px rgba(255,255,255, 0.648) , 1647px 930px 0 0px rgba(255,255,255, 0.686) , 1103px 170px 0 0px rgba(255,255,255, 0.21) , 1236px 540px 0 0px rgba(255,255,255, 0.82) , 1216px 314px 0 0px rgba(255,255,255, 0.025) , 1023px 750px 0 0px rgba(255,255,255, 0.533) , 216px 589px 0 0px rgba(255,255,255, 0.474) , 721px 1021px 0 0px rgba(255,255,255, 0.422) , 1671px 413px 0 0px rgba(255,255,255, 0.854) , 283px 1766px 0 0px rgba(255,255,255, 0.943) , 1325px 935px 0 0px rgba(255,255,255, 0.321) , 255px 1054px 0 0px rgba(255,255,255, 0.497) , 1741px 126px 0 0px rgba(255,255,255, 0.189) , 99px 378px 0 0px rgba(255,255,255, 0.494) , 536px 1634px 0 0px rgba(255,255,255, 0.719) , 1028px 93px 0 0px rgba(255,255,255, 0.508) , 1248px 1684px 0 0px rgba(255,255,255, 0.198) , 1184px 419px 0 0px rgba(255,255,255, 0.827) , 33px 412px 0 0px rgba(255,255,255, 0.269) , 843px 902px 0 0px rgba(255,255,255, 0.884) , 1271px 1457px 0 0px rgba(255,255,255, 0.066) , 925px 359px 0 0px rgba(255,255,255, 0.772) , 461px 885px 0 0px rgba(255,255,255, 0.44) , 1496px 490px 0 0px rgba(255,255,255, 0.194) , 532px 474px 0 0px rgba(255,255,255, 0.703) , 713px 219px 0 0px rgba(255,255,255, 0.508) , 1757px 960px 0 0px rgba(255,255,255, 0.905) , 1205px 1489px 0 0px rgba(255,255,255, 0.658) , 1323px 26px 0 0px rgba(255,255,255, 0.981) , 983px 153px 0 0px rgba(255,255,255, 0.602) , 440px 862px 0 0px rgba(255,255,255, 0.681) , 1478px 605px 0 0px rgba(255,255,255, 0.566) , 1586px 1248px 0 0px rgba(255,255,255, 0.383) , 1765px 26px 0 0px rgba(255,255,255, 0.783) , 1649px 772px 0 0px rgba(255,255,255, 0.204) , 848px 1677px 0 0px rgba(255,255,255, 0.345) , 1457px 1595px 0 0px rgba(255,255,255, 0.682) , 81px 158px 0 0px rgba(255,255,255, 0.287) , 1523px 781px 0 0px rgba(255,255,255, 0.34) , 613px 839px 0 0px rgba(255,255,255, 0.027) , 276px 842px 0 0px rgba(255,255,255, 0.742) , 1330px 1618px 0 0px rgba(255,255,255, 0.368) , 863px 1686px 0 0px rgba(255,255,255, 0.78) , 125px 1485px 0 0px rgba(255,255,255, 0.534) , 1634px 1643px 0 0px rgba(255,255,255, 0.87) , 1695px 865px 0 0px rgba(255,255,255, 0.901) , 1390px 491px 0 0px rgba(255,255,255, 0.115) , 8px 992px 0 0px rgba(255,255,255, 0.234) , 1291px 51px 0 0px rgba(255,255,255, 0.107) , 45px 1344px 0 0px rgba(255,255,255, 0.966) , 305px 1285px 0 0px rgba(255,255,255, 0.758) , 563px 207px 0 0px rgba(255,255,255, 0.606) , 330px 1298px 0 0px rgba(255,255,255, 0.745) , 566px 1304px 0 0px rgba(255,255,255, 0.757) , 1559px 1425px 0 0px rgba(255,255,255, 0.988) , 1156px 485px 0 0px rgba(255,255,255, 0.486) , 1690px 1313px 0 0px rgba(255,255,255, 0.51) , 1507px 1631px 0 0px rgba(255,255,255, 0.031) , 283px 767px 0 0px rgba(255,255,255, 0.173) , 273px 1762px 0 0px rgba(255,255,255, 0.346) , 1462px 125px 0 0px rgba(255,255,255, 0.87) , 1450px 227px 0 0px rgba(255,255,255, 0.442) , 1554px 1694px 0 0px rgba(255,255,255, 0.47) , 261px 1439px 0 0px rgba(255,255,255, 0.615) , 875px 1751px 0 0px rgba(255,255,255, 0.632) , 330px 1644px 0 0px rgba(255,255,255, 0.655) , 273px 330px 0 0px rgba(255,255,255, 0.978) , 1731px 1382px 0 0px rgba(255,255,255, 0.818) , 1693px 188px 0 0px rgba(255,255,255, 0.499) , 935px 1709px 0 0px rgba(255,255,255, 0.872) , 635px 597px 0 0px rgba(255,255,255, 0.591) , 1506px 1362px 0 0px rgba(255,255,255, 0.671) , 819px 127px 0 0px rgba(255,255,255, 0.591) , 1799px 1187px 0 0px rgba(255,255,255, 0.495) , 1748px 583px 0 0px rgba(255,255,255, 0.149) , 422px 1058px 0 0px rgba(255,255,255, 0.896) , 1220px 462px 0 0px rgba(255,255,255, 0.762) , 913px 1006px 0 0px rgba(255,255,255, 0.113) , 1206px 823px 0 0px rgba(255,255,255, 0.735) , 1044px 926px 0 0px rgba(255,255,255, 0.853) , 587px 1759px 0 0px rgba(255,255,255, 0.71) , 491px 434px 0 0px rgba(255,255,255, 0.022) , 716px 1461px 0 0px rgba(255,255,255, 0.936) , 1341px 123px 0 0px rgba(255,255,255, 0.629) , 1240px 1351px 0 0px rgba(255,255,255, 0.008) , 930px 1147px 0 0px rgba(255,255,255, 0.094) , 58px 1106px 0 0px rgba(255,255,255, 0.874) , 196px 662px 0 0px rgba(255,255,255, 0.277) , 40px 994px 0 0px rgba(255,255,255, 0.269) , 336px 1530px 0 0px rgba(255,255,255, 0.488) , 1362px 270px 0 0px rgba(255,255,255, 0.976) , 1327px 1076px 0 0px rgba(255,255,255, 0.742) , 248px 262px 0 0px rgba(255,255,255, 0.022) , 1603px 1140px 0 0px rgba(255,255,255, 0.33) , 1607px 617px 0 0px rgba(255,255,255, 0.129) , 353px 791px 0 0px rgba(255,255,255, 0.884) , 244px 581px 0 0px rgba(255,255,255, 0.501) , 503px 1706px 0 0px rgba(255,255,255, 0.344) , 1649px 276px 0 0px rgba(255,255,255, 0.476) , 813px 240px 0 0px rgba(255,255,255, 0.974) , 47px 1720px 0 0px rgba(255,255,255, 0.511) , 812px 190px 0 0px rgba(255,255,255, 0.581) , 616px 115px 0 0px rgba(255,255,255, 0.989) , 1001px 1300px 0 0px rgba(255,255,255, 0.063) , 1065px 1056px 0 0px rgba(255,255,255, 0.364) , 1642px 499px 0 0px rgba(255,255,255, 0.863) , 735px 1347px 0 0px rgba(255,255,255, 0.714) , 1429px 72px 0 0px rgba(255,255,255, 0.302) , 298px 199px 0 0px rgba(255,255,255, 0.544) , 1622px 3px 0 0px rgba(255,255,255, 0.571) , 1704px 1198px 0 0px rgba(255,255,255, 0.071) , 618px 1552px 0 0px rgba(255,255,255, 0.164) , 1498px 1078px 0 0px rgba(255,255,255, 0.513) , 1365px 1164px 0 0px rgba(255,255,255, 0.676) , 238px 677px 0 0px rgba(255,255,255, 0.103) , 1317px 1182px 0 0px rgba(255,255,255, 0.879) , 872px 1050px 0 0px rgba(255,255,255, 0.776) , 398px 1192px 0 0px rgba(255,255,255, 0.739) , 424px 220px 0 0px rgba(255,255,255, 0.887) , 1209px 630px 0 0px rgba(255,255,255, 0.615) , 662px 393px 0 0px rgba(255,255,255, 0.53) , 475px 1338px 0 0px rgba(255,255,255, 0.943) , 357px 1131px 0 0px rgba(255,255,255, 0.687) , 952px 919px 0 0px rgba(255,255,255, 0.334) , 655px 411px 0 0px rgba(255,255,255, 0.601) , 1742px 56px 0 0px rgba(255,255,255, 0.253) , 1752px 1032px 0 0px rgba(255,255,255, 0.055) , 104px 505px 0 0px rgba(255,255,255, 0.048) , 300px 895px 0 0px rgba(255,255,255, 0.013) , 1715px 234px 0 0px rgba(255,255,255, 0.274) , 1672px 1117px 0 0px rgba(255,255,255, 0.229) , 544px 991px 0 0px rgba(255,255,255, 0.758) , 1800px 507px 0 0px rgba(255,255,255, 0.861) , 469px 155px 0 0px rgba(255,255,255, 0.239) , 779px 554px 0 0px rgba(255,255,255, 0.493) , 1650px 412px 0 0px rgba(255,255,255, 0.063) , 1062px 964px 0 0px rgba(255,255,255, 0.245) , 1644px 1572px 0 0px rgba(255,255,255, 0.152) , 892px 563px 0 0px rgba(255,255,255, 0.18) , 106px 421px 0 0px rgba(255,255,255, 0.77) , 1118px 1176px 0 0px rgba(255,255,255, 0.166) , 1595px 1234px 0 0px rgba(255,255,255, 0.734) , 324px 1482px 0 0px rgba(255,255,255, 0.255) , 1170px 279px 0 0px rgba(255,255,255, 0.722) , 934px 1576px 0 0px rgba(255,255,255, 0.388) , 813px 1317px 0 0px rgba(255,255,255, 0.55) , 590px 280px 0 0px rgba(255,255,255, 0.425) , 701px 279px 0 0px rgba(255,255,255, 0.048) , 1203px 518px 0 0px rgba(255,255,255, 0.325) , 683px 1437px 0 0px rgba(255,255,255, 0.106) , 405px 1252px 0 0px rgba(255,255,255, 0.607) , 399px 1537px 0 0px rgba(255,255,255, 0.097) , 1266px 1195px 0 0px rgba(255,255,255, 0.175) , 1698px 1537px 0 0px rgba(255,255,255, 0.799) , 1705px 731px 0 0px rgba(255,255,255, 0.369) , 115px 1515px 0 0px rgba(255,255,255, 0.844) , 1168px 756px 0 0px rgba(255,255,255, 0.65) , 1631px 1424px 0 0px rgba(255,255,255, 0.888) , 203px 136px 0 0px rgba(255,255,255, 0.758) , 1656px 131px 0 0px rgba(255,255,255, 0.078) , 1765px 1586px 0 0px rgba(255,255,255, 0.592) , 1240px 918px 0 0px rgba(255,255,255, 0.603) , 132px 573px 0 0px rgba(255,255,255, 0.464) , 1612px 470px 0 0px rgba(255,255,255, 0.072) , 251px 1545px 0 0px rgba(255,255,255, 0.446) , 1699px 259px 0 0px rgba(255,255,255, 0.218) , 1063px 730px 0 0px rgba(255,255,255, 0.251) , 436px 1048px 0 0px rgba(255,255,255, 0.532) , 397px 1219px 0 0px rgba(255,255,255, 0.51) , 1119px 1469px 0 0px rgba(255,255,255, 0.365) , 1009px 492px 0 0px rgba(255,255,255, 0.328) , 1450px 1716px 0 0px rgba(255,255,255, 0.937) , 1400px 207px 0 0px rgba(255,255,255, 0.762) , 1263px 577px 0 0px rgba(255,255,255, 0.356) , 180px 418px 0 0px rgba(255,255,255, 0.067) , 1599px 331px 0 0px rgba(255,255,255, 0.518) , 1576px 1003px 0 0px rgba(255,255,255, 0.75) , 496px 568px 0 0px rgba(255,255,255, 0.709) , 1206px 870px 0 0px rgba(255,255,255, 0.939) , 1702px 727px 0 0px rgba(255,255,255, 0.009) , 1766px 620px 0 0px rgba(255,255,255, 0.957) , 427px 391px 0 0px rgba(255,255,255, 0.614) , 817px 986px 0 0px rgba(255,255,255, 0.186) , 1144px 755px 0 0px rgba(255,255,255, 0.743) , 1384px 1584px 0 0px rgba(255,255,255, 0.012) , 570px 957px 0 0px rgba(255,255,255, 0.414) , 1497px 915px 0 0px rgba(255,255,255, 0.707) , 1374px 1354px 0 0px rgba(255,255,255, 0.414) , 964px 771px 0 0px rgba(255,255,255, 0.567) , 798px 1658px 0 0px rgba(255,255,255, 0.587) , 458px 176px 0 0px rgba(255,255,255, 0.248) , 725px 83px 0 0px rgba(255,255,255, 0.828) , 349px 949px 0 0px rgba(255,255,255, 0.568) , 897px 1403px 0 0px rgba(255,255,255, 0.46) , 1679px 908px 0 0px rgba(255,255,255, 0.02) , 111px 1008px 0 0px rgba(255,255,255, 0.613) , 1170px 1180px 0 0px rgba(255,255,255, 0.894) , 1733px 846px 0 0px rgba(255,255,255, 0.331) , 680px 1677px 0 0px rgba(255,255,255, 0.791) , 461px 69px 0 0px rgba(255,255,255, 0.9) , 20px 1245px 0 0px rgba(255,255,255, 0.735) , 278px 90px 0 0px rgba(255,255,255, 0.246) , 512px 493px 0 0px rgba(255,255,255, 0.15) , 1507px 1335px 0 0px rgba(255,255,255, 0.873) , 196px 630px 0 0px rgba(255,255,255, 0.365) , 412px 1488px 0 0px rgba(255,255,255, 0.018) , 785px 405px 0 0px rgba(255,255,255, 0.921) , 714px 914px 0 0px rgba(255,255,255, 0.891) , 11px 1401px 0 0px rgba(255,255,255, 0.319) , 841px 387px 0 0px rgba(255,255,255, 0.146) , 478px 1442px 0 0px rgba(255,255,255, 0.674) , 488px 62px 0 0px rgba(255,255,255, 0.901) , 1473px 1396px 0 0px rgba(255,255,255, 0.104) , 1569px 1234px 0 0px rgba(255,255,255, 0.798) , 237px 587px 0 0px rgba(255,255,255, 0.558) , 1715px 12px 0 0px rgba(255,255,255, 0.005) , 468px 1361px 0 0px rgba(255,255,255, 0.7) , 1753px 1198px 0 0px rgba(255,255,255, 0.103) , 1386px 692px 0 0px rgba(255,255,255, 0.835) , 1727px 1135px 0 0px rgba(255,255,255, 0.365) , 1594px 741px 0 0px rgba(255,255,255, 0.794) , 467px 478px 0 0px rgba(255,255,255, 0.101) , 320px 1254px 0 0px rgba(255,255,255, 0.763) , 1656px 1772px 0 0px rgba(255,255,255, 0.816) , 901px 1565px 0 0px rgba(255,255,255, 0.368) , 91px 1686px 0 0px rgba(255,255,255, 0.757) , 14px 262px 0 0px rgba(255,255,255, 0.123) , 1779px 1386px 0 0px rgba(255,255,255, 0.687) , 306px 1661px 0 0px rgba(255,255,255, 0.072) , 1418px 1193px 0 0px rgba(255,255,255, 0.118) , 778px 839px 0 0px rgba(255,255,255, 0.55) , 974px 201px 0 0px rgba(255,255,255, 0.625) , 1086px 1284px 0 0px rgba(255,255,255, 0.434) , 1327px 1208px 0 0px rgba(255,255,255, 0.286) , 41px 1222px 0 0px rgba(255,255,255, 0.959) , 1643px 91px 0 0px rgba(255,255,255, 0.75) , 1082px 1373px 0 0px rgba(255,255,255, 0.968) , 1335px 100px 0 0px rgba(255,255,255, 0.379) , 1763px 1193px 0 0px rgba(255,255,255, 0.201) , 1136px 41px 0 0px rgba(255,255,255, 0.459) , 297px 120px 0 0px rgba(255,255,255, 0.149) , 1136px 1415px 0 0px rgba(255,255,255, 0.67) , 1468px 1020px 0 0px rgba(255,255,255, 0.001) , 1465px 1062px 0 0px rgba(255,255,255, 0.308) , 345px 809px 0 0px rgba(255,255,255, 0.949) , 922px 1602px 0 0px rgba(255,255,255, 0.006) , 41px 814px 0 0px rgba(255,255,255, 0.927) , 1747px 803px 0 0px rgba(255,255,255, 0.48) , 1463px 940px 0 0px rgba(255,255,255, 0.577) , 1572px 1486px 0 0px rgba(255,255,255, 0.251) , 619px 882px 0 0px rgba(255,255,255, 0.425) , 718px 1439px 0 0px rgba(255,255,255, 0.735) , 1046px 724px 0 0px rgba(255,255,255, 0.759) , 700px 957px 0 0px rgba(255,255,255, 0.003) , 1414px 360px 0 0px rgba(255,255,255, 0.264) , 1599px 1382px 0 0px rgba(255,255,255, 0.981) , 183px 578px 0 0px rgba(255,255,255, 0.251) , 810px 76px 0 0px rgba(255,255,255, 0.652) , 510px 1527px 0 0px rgba(255,255,255, 0.919) , 547px 1422px 0 0px rgba(255,255,255, 0.834) , 568px 987px 0 0px rgba(255,255,255, 0.823) , 1733px 465px 0 0px rgba(255,255,255, 0.151) , 1641px 1467px 0 0px rgba(255,255,255, 0.84) , 867px 833px 0 0px rgba(255,255,255, 0.031) , 317px 176px 0 0px rgba(255,255,255, 0.561) , 129px 1422px 0 0px rgba(255,255,255, 0.832) , 1424px 1729px 0 0px rgba(255,255,255, 0.615) , 960px 1555px 0 0px rgba(255,255,255, 0.721) , 619px 696px 0 0px rgba(255,255,255, 0.109) , 923px 1103px 0 0px rgba(255,255,255, 0.156) , 920px 612px 0 0px rgba(255,255,255, 0.608) , 106px 1049px 0 0px rgba(255,255,255, 0.177) , 1632px 986px 0 0px rgba(255,255,255, 0.879) , 1377px 433px 0 0px rgba(255,255,255, 0.476) , 593px 89px 0 0px rgba(255,255,255, 0.84) , 1233px 1687px 0 0px rgba(255,255,255, 0.971) , 475px 805px 0 0px rgba(255,255,255, 0.157) , 1603px 1554px 0 0px rgba(255,255,255, 0.764) , 700px 823px 0 0px rgba(255,255,255, 0.471) , 512px 35px 0 0px rgba(255,255,255, 0.457) , 727px 1582px 0 0px rgba(255,255,255, 0.533) , 220px 326px 0 0px rgba(255,255,255, 0.696) , 1454px 1185px 0 0px rgba(255,255,255, 0.135) , 783px 92px 0 0px rgba(255,255,255, 0.195) , 27px 1578px 0 0px rgba(255,255,255, 0.328) , 1132px 8px 0 0px rgba(255,255,255, 0.689) , 1175px 1183px 0 0px rgba(255,255,255, 0.894) , 1229px 203px 0 0px rgba(255,255,255, 0.225) , 1748px 1626px 0 0px rgba(255,255,255, 0.158) , 731px 110px 0 0px rgba(255,255,255, 0.93) , 498px 1353px 0 0px rgba(255,255,255, 0.593) , 949px 685px 0 0px rgba(255,255,255, 0.727) , 446px 571px 0 0px rgba(255,255,255, 0.501) , 1527px 1742px 0 0px rgba(255,255,255, 0.512) , 603px 437px 0 0px rgba(255,255,255, 0.827) , 1001px 1068px 0 0px rgba(255,255,255, 0.608) , 1196px 682px 0 0px rgba(255,255,255, 0.907) , 505px 626px 0 0px rgba(255,255,255, 0.349) , 1333px 630px 0 0px rgba(255,255,255, 0.19) , 1560px 855px 0 0px rgba(255,255,255, 0.265) , 496px 159px 0 0px rgba(255,255,255, 0.304) , 1531px 640px 0 0px rgba(255,255,255, 0.16) , 1419px 1671px 0 0px rgba(255,255,255, 0.88) , 182px 54px 0 0px rgba(255,255,255, 0.483) , 714px 1307px 0 0px rgba(255,255,255, 0.018) , 1058px 1464px 0 0px rgba(255,255,255, 0.974) , 1411px 882px 0 0px rgba(255,255,255, 0.926) , 997px 1660px 0 0px rgba(255,255,255, 0.317) , 1447px 504px 0 0px rgba(255,255,255, 0.437) , 352px 598px 0 0px rgba(255,255,255, 0.092) , 1269px 1016px 0 0px rgba(255,255,255, 0.914) , 1199px 1139px 0 0px rgba(255,255,255, 0.217) , 1112px 230px 0 0px rgba(255,255,255, 0.983) , 823px 770px 0 0px rgba(255,255,255, 0.068) , 356px 97px 0 0px rgba(255,255,255, 0.795) , 720px 667px 0 0px rgba(255,255,255, 0.646) , 1092px 1237px 0 0px rgba(255,255,255, 0.79) , 1662px 1595px 0 0px rgba(255,255,255, 0.377) , 1186px 1491px 0 0px rgba(255,255,255, 0.806) , 997px 748px 0 0px rgba(255,255,255, 0.634) , 1312px 1586px 0 0px rgba(255,255,255, 0.229) , 1749px 1558px 0 0px rgba(255,255,255, 0.457) , 1337px 271px 0 0px rgba(255,255,255, 0.759) , 1202px 1781px 0 0px rgba(255,255,255, 0.411) , 325px 1550px 0 0px rgba(255,255,255, 0.171) , 408px 1194px 0 0px rgba(255,255,255, 0.878) , 121px 498px 0 0px rgba(255,255,255, 0.31) , 1472px 99px 0 0px rgba(255,255,255, 0.618) , 1313px 295px 0 0px rgba(255,255,255, 0.093) , 1063px 1711px 0 0px rgba(255,255,255, 0.458) , 387px 96px 0 0px rgba(255,255,255, 0.412) , 789px 335px 0 0px rgba(255,255,255, 0.764) , 1709px 250px 0 0px rgba(255,255,255, 0.707) , 1480px 335px 0 0px rgba(255,255,255, 0.18) , 817px 1308px 0 0px rgba(255,255,255, 0.124) , 3px 839px 0 0px rgba(255,255,255, 0.369) , 1204px 782px 0 0px rgba(255,255,255, 0.255) , 1260px 807px 0 0px rgba(255,255,255, 0.392) , 797px 721px 0 0px rgba(255,255,255, 0.177) , 1298px 1366px 0 0px rgba(255,255,255, 0.154) , 1281px 1114px 0 0px rgba(255,255,255, 0.579) , 531px 1380px 0 0px rgba(255,255,255, 0.012) , 297px 1326px 0 0px rgba(255,255,255, 0.962) , 302px 565px 0 0px rgba(255,255,255, 0.623) , 1190px 1167px 0 0px rgba(255,255,255, 0.235) , 751px 409px 0 0px rgba(255,255,255, 0.098) , 177px 1368px 0 0px rgba(255,255,255, 0.739) , 1260px 578px 0 0px rgba(255,255,255, 0.134) , 460px 823px 0 0px rgba(255,255,255, 0.617) , 798px 458px 0 0px rgba(255,255,255, 0.281) , 1056px 1477px 0 0px rgba(255,255,255, 0.867) , 280px 391px 0 0px rgba(255,255,255, 0.474) , 550px 302px 0 0px rgba(255,255,255, 0.343) , 1032px 491px 0 0px rgba(255,255,255, 0.833) , 656px 1557px 0 0px rgba(255,255,255, 0.723) , 893px 266px 0 0px rgba(255,255,255, 0.304) , 630px 1001px 0 0px rgba(255,255,255, 0.351) , 240px 1100px 0 0px rgba(255,255,255, 0.978) , 1303px 656px 0 0px rgba(255,255,255, 0.585) , 1068px 1774px 0 0px rgba(255,255,255, 0.909) , 608px 724px 0 0px rgba(255,255,255, 0.527) , 514px 998px 0 0px rgba(255,255,255, 0.132) , 606px 496px 0 0px rgba(255,255,255, 0.638) , 285px 998px 0 0px rgba(255,255,255, 0.571) , 1333px 1042px 0 0px rgba(255,255,255, 0.859) , 1222px 418px 0 0px rgba(255,255,255, 0.041) , 208px 489px 0 0px rgba(255,255,255, 0.81) , 1433px 284px 0 0px rgba(255,255,255, 0.646) , 1201px 1140px 0 0px rgba(255,255,255, 0.001) , 794px 548px 0 0px rgba(255,255,255, 0.442) , 1065px 1631px 0 0px rgba(255,255,255, 0.203) , 1046px 539px 0 0px rgba(255,255,255, 0.548) , 1798px 1710px 0 0px rgba(255,255,255, 0.59) , 513px 279px 0 0px rgba(255,255,255, 0.501) , 765px 343px 0 0px rgba(255,255,255, 0.168) , 981px 1191px 0 0px rgba(255,255,255, 0.189) , 47px 319px 0 0px rgba(255,255,255, 0.969) , 921px 1699px 0 0px rgba(255,255,255, 0.727) , 713px 1034px 0 0px rgba(255,255,255, 0.45) , 1157px 1291px 0 0px rgba(255,255,255, 0.302) , 831px 1092px 0 0px rgba(255,255,255, 0.532) , 960px 1537px 0 0px rgba(255,255,255, 0.218) , 992px 1373px 0 0px rgba(255,255,255, 0.204) , 436px 1727px 0 0px rgba(255,255,255, 0.605) , 107px 460px 0 0px rgba(255,255,255, 0.64) , 277px 93px 0 0px rgba(255,255,255, 0.785) , 459px 1483px 0 0px rgba(255,255,255, 0.587) , 688px 241px 0 0px rgba(255,255,255, 0.85) , 723px 689px 0 0px rgba(255,255,255, 0.338) , 1739px 1767px 0 0px rgba(255,255,255, 0.825) , 1287px 1117px 0 0px rgba(255,255,255, 0.985) , 1744px 1763px 0 0px rgba(255,255,255, 0.998) , 1168px 575px 0 0px rgba(255,255,255, 0.484) , 405px 869px 0 0px rgba(255,255,255, 0.189) , 151px 1332px 0 0px rgba(255,255,255, 0.286) , 1746px 69px 0 0px rgba(255,255,255, 0.287) , 1336px 805px 0 0px rgba(255,255,255, 0.099) , 1624px 1544px 0 0px rgba(255,255,255, 0.221) , 1098px 452px 0 0px rgba(255,255,255, 0.996) , 685px 856px 0 0px rgba(255,255,255, 0.482) , 98px 1281px 0 0px rgba(255,255,255, 0.034) , 765px 66px 0 0px rgba(255,255,255, 0.672) , 1604px 1145px 0 0px rgba(255,255,255, 0.508) , 892px 568px 0 0px rgba(255,255,255, 0.962) , 1674px 856px 0 0px rgba(255,255,255, 0.108) , 52px 684px 0 0px rgba(255,255,255, 0.768) , 1739px 1762px 0 0px rgba(255,255,255, 0.14) , 290px 513px 0 0px rgba(255,255,255, 0.002) , 882px 977px 0 0px rgba(255,255,255, 0.647) , 333px 382px 0 0px rgba(255,255,255, 0.945) , 84px 60px 0 0px rgba(255,255,255, 0.794) , 1448px 737px 0 0px rgba(255,255,255, 0.688) , 537px 77px 0 0px rgba(255,255,255, 0.004) , 1662px 1005px 0 0px rgba(255,255,255, 0.564) , 1759px 1521px 0 0px rgba(255,255,255, 0.508) , 604px 1764px 0 0px rgba(255,255,255, 0.351) , 120px 128px 0 0px rgba(255,255,255, 0.175) , 1628px 643px 0 0px rgba(255,255,255, 0.797) , 1462px 382px 0 0px rgba(255,255,255, 0.246) , 630px 1471px 0 0px rgba(255,255,255, 0.739) , 1301px 266px 0 0px rgba(255,255,255, 0.076) , 1017px 1687px 0 0px rgba(255,255,255, 0.364) , 1157px 615px 0 0px rgba(255,255,255, 0.834) , 1656px 117px 0 0px rgba(255,255,255, 0.497) , 807px 1323px 0 0px rgba(255,255,255, 0.502) , 387px 1739px 0 0px rgba(255,255,255, 0.663) , 90px 80px 0 0px rgba(255,255,255, 0.85) , 1791px 1262px 0 0px rgba(255,255,255, 0.738) , 1364px 697px 0 0px rgba(255,255,255, 0.507) , 653px 1202px 0 0px rgba(255,255,255, 0.065) , 788px 64px 0 0px rgba(255,255,255, 0.156) , 93px 1086px 0 0px rgba(255,255,255, 0.909) , 1590px 850px 0 0px rgba(255,255,255, 0.396) , 953px 589px 0 0px rgba(255,255,255, 0.157) , 1278px 1019px 0 0px rgba(255,255,255, 0.259) , 1365px 1140px 0 0px rgba(255,255,255, 0.892) , 1188px 799px 0 0px rgba(255,255,255, 0.346) , 577px 315px 0 0px rgba(255,255,255, 0.686) , 1308px 705px 0 0px rgba(255,255,255, 0.136) , 1760px 1066px 0 0px rgba(255,255,255, 0.425) , 523px 1120px 0 0px rgba(255,255,255, 0.167) , 1602px 1557px 0 0px rgba(255,255,255, 0.462) , 1465px 916px 0 0px rgba(255,255,255, 0.89) , 1517px 87px 0 0px rgba(255,255,255, 0.2) , 1172px 1531px 0 0px rgba(255,255,255, 0.501) , 1268px 383px 0 0px rgba(255,255,255, 0.174) , 1222px 479px 0 0px rgba(255,255,255, 0.193) , 1697px 789px 0 0px rgba(255,255,255, 0.583) , 897px 1367px 0 0px rgba(255,255,255, 0.399) , 1757px 1465px 0 0px rgba(255,255,255, 0.608) , 1197px 398px 0 0px rgba(255,255,255, 0.445) , 1744px 1374px 0 0px rgba(255,255,255, 0.434) , 1128px 784px 0 0px rgba(255,255,255, 0.799) , 1422px 1777px 0 0px rgba(255,255,255, 0.545) , 911px 1652px 0 0px rgba(255,255,255, 0.504) , 56px 319px 0 0px rgba(255,255,255, 0.411) , 458px 764px 0 0px rgba(255,255,255, 0.273) , 30px 378px 0 0px rgba(255,255,255, 0.586) , 705px 1185px 0 0px rgba(255,255,255, 0.843) , 1557px 643px 0 0px rgba(255,255,255, 0.811) , 868px 1528px 0 0px rgba(255,255,255, 0.729) , 1383px 684px 0 0px rgba(255,255,255, 0.017) , 330px 1316px 0 0px rgba(255,255,255, 0.828) , 1229px 1289px 0 0px rgba(255,255,255, 0.986) , 143px 968px 0 0px rgba(255,255,255, 0.986) , 941px 1035px 0 0px rgba(255,255,255, 0.199) , 1745px 581px 0 0px rgba(255,255,255, 0.075) , 232px 243px 0 0px rgba(255,255,255, 0.519) , 716px 160px 0 0px rgba(255,255,255, 0.555) , 901px 1177px 0 0px rgba(255,255,255, 0.499) , 730px 274px 0 0px rgba(255,255,255, 0.322) , 503px 178px 0 0px rgba(255,255,255, 0.597) , 835px 722px 0 0px rgba(255,255,255, 0.981) , 457px 1679px 0 0px rgba(255,255,255, 0.974) , 530px 505px 0 0px rgba(255,255,255, 0.823) , 119px 1398px 0 0px rgba(255,255,255, 0.155) , 99px 136px 0 0px rgba(255,255,255, 0.005) , 1291px 877px 0 0px rgba(255,255,255, 0.987) , 983px 725px 0 0px rgba(255,255,255, 0.705) , 630px 1579px 0 0px rgba(255,255,255, 0.918) , 1363px 1085px 0 0px rgba(255,255,255, 0.014) , 185px 1779px 0 0px rgba(255,255,255, 0.643) , 729px 82px 0 0px rgba(255,255,255, 0.982) , 760px 1348px 0 0px rgba(255,255,255, 0.373) , 1273px 1219px 0 0px rgba(255,255,255, 0.284) , 419px 1709px 0 0px rgba(255,255,255, 0.477) , 768px 1504px 0 0px rgba(255,255,255, 0.66) , 1428px 1472px 0 0px rgba(255,255,255, 0.814) , 461px 19px 0 0px rgba(255,255,255, 0.756) , 1289px 577px 0 0px rgba(255,255,255, 0.917) , 556px 1334px 0 0px rgba(255,255,255, 0.625) , 1278px 1713px 0 0px rgba(255,255,255, 0.684) , 1173px 497px 0 0px rgba(255,255,255, 0.553) , 1542px 992px 0 0px rgba(255,255,255, 0.848) , 1244px 1068px 0 0px rgba(255,255,255, 0.318);
  border-radius: 100px;
}
.solar-syst div {
  border-radius: 1000px;
  top: 50%;
  left: 50%;
  position: absolute;
  z-index: 999;
}
.solar-syst div:not(.sun) {
  border: 1px solid rgba(102, 166, 229, 0.12);
}
.solar-syst div:not(.sun):before {
  left: 50%;
  border-radius: 100px;
  content: "";
  position: absolute;
}
.solar-syst div:not(.asteroids-belt):before {
  box-shadow: inset 0 6px 0 -2px rgba(0, 0, 0, 0.25);
}

.sun {
  background: radial-gradient(ellipse at center, #ffd000 1%, #f9b700 39%, #f9b700 39%, #e06317 100%);
  height: 40px;
  width: 40px;
  margin-top: -20px;
  margin-left: -20px;
  background-clip: padding-box;
  border: 0 !important;
  background-position: -28px -103px;
  background-size: 175%;
  box-shadow: 0 0 10px 2px rgba(255, 107, 0, 0.4), 0 0 22px 11px rgba(255, 203, 0, 0.13);
}

.mercury {
  height: 70px;
  width: 70px;
  margin-top: -35px;
  margin-left: -35px;
  -webkit-animation: orb 7.1867343561s linear infinite;
          animation: orb 7.1867343561s linear infinite;
}
.mercury:before {
  height: 4px;
  width: 4px;
  background: #9f5e26;
  margin-top: -2px;
  margin-left: -2px;
}

.venus {
  height: 100px;
  width: 100px;
  margin-top: -50px;
  margin-left: -50px;
  -webkit-animation: orb 18.4555338265s linear infinite;
          animation: orb 18.4555338265s linear infinite;
}
.venus:before {
  height: 8px;
  width: 8px;
  background: #BEB768;
  margin-top: -4px;
  margin-left: -4px;
}

.earth {
  height: 145px;
  width: 145px;
  margin-top: -72.5px;
  margin-left: -72.5px;
  -webkit-animation: orb 30s linear infinite;
          animation: orb 30s linear infinite;
}
.earth:before {
  height: 6px;
  width: 6px;
  background: #11abe9;
  margin-top: -3px;
  margin-left: -3px;
}
.earth:after {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 50%;
  top: 0px;
  margin-left: -9px;
  margin-top: -9px;
  border-radius: 100px;
  box-shadow: 0 -10px 0 -8px grey;
  -webkit-animation: orb 2.2440352158s linear infinite;
          animation: orb 2.2440352158s linear infinite;
}

.mars {
  height: 190px;
  width: 190px;
  margin-top: -95px;
  margin-left: -95px;
  -webkit-animation: orb 56.4261314589s linear infinite;
          animation: orb 56.4261314589s linear infinite;
}
.mars:before {
  height: 6px;
  width: 6px;
  background: #cf3921;
  margin-top: -3px;
  margin-left: -3px;
}
.asteroids-belt {
  opacity: .7;
  border-color: transparent !important;
  height: 300px;
  width: 300px;
  margin-top: -150px;
  margin-left: -150px;
  -webkit-animation: orb 179.9558282773s linear infinite;
          animation: orb 179.9558282773s linear infinite;
  overflow: hidden;
}

.hide {
  display: none;
}

.links {
  margin-top: 5px !important;
  font-size: 1em !important;
}

@-webkit-keyframes orb {
  from {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(-360deg);
            transform: rotate(-360deg);
  }
}

@keyframes orb {
  from {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(-360deg);
            transform: rotate(-360deg);
  }
}

</style>
