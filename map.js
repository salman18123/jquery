var myFeed ={
             "data": [
    {
      "story": "Salman Ahmed shared UNILAD's video.",
      "created_time": "2017-02-28T01:24:12+0000",
      "id": "1547233938824844_1842373122644256"
    },
    {
      "story": "Salman Ahmed shared IlmFeed's post.",
      "created_time": "2017-02-09T10:45:20+0000",
      "id": "1547233938824844_1833912000157035"
    },
    {
      "message": "A night to be remembered #Broism",
      "story": "Afzan Ahmed with Shafiq Ahmed Shaik and 2 others at Yum Yum Tree.",
      "created_time": "2016-12-29T06:55:36+0000",
      "id": "1604178676522323_1798605637079625"
    },
    {
      "message": "Bromance with Afzan Ahmed and Aejaz Ahmed",
      "story": "Salman Ahmed updated his cover photo.",
      "created_time": "2016-07-13T16:20:13+0000",
      "id": "1547233938824844_1745780402303529"
    },
    {
      "story": "Salman Ahmed shared Omar Suleiman's video.",
      "created_time": "2016-06-04T07:54:09+0000",
      "id": "1547233938824844_1731890017025901"
    },
    {
      "story": "Salman Ahmed shared Yasir Qadhi's photo.",
      "created_time": "2016-05-10T13:20:31+0000",
      "id": "1547233938824844_1723140794567490"
    },
    {
      "message": "Šometimeš ßelfie is the beßt waÿ ţo exprêşș yourßelf",
      "story": "Salman Ahmed updated his profile picture.",
      "created_time": "2016-05-04T08:00:34+0000",
      "id": "1547233938824844_1720838234797746"
    },
    {
      "story": "Salman Ahmed shared Tazkiyah Academy's video.",
      "created_time": "2015-12-12T02:48:39+0000",
      "id": "1547233938824844_1672713996276837"
    },
    {
      "story": "Salman Ahmed shared Tazkiyah Academy's photo.",
      "created_time": "2015-12-12T02:43:14+0000",
      "id": "1547233938824844_1672713519610218"
    },
    {
      "story": "Salman Ahmed shared Perak Today's video.",
      "created_time": "2015-08-24T10:13:05+0000",
      "id": "1547233938824844_1645479672333603"
    },
    {
      "story": "Salman Ahmed shared Shaykh Hasan Ali's photo.",
      "created_time": "2015-08-17T01:59:53+0000",
      "id": "1547233938824844_1643531132528457"
    },
    {
      "created_time": "2015-06-21T04:28:00+0000",
      "id": "1547233938824844_1628363327378571"
    },
    {
      "story": "Salman Ahmed shared The Muslim Vibe's photo.",
      "created_time": "2015-06-17T13:48:13+0000",
      "id": "1547233938824844_1627485067466397"
    },
    {
      "created_time": "2015-06-16T00:45:14+0000",
      "id": "1547233938824844_1627147440833493"
    },
    {
      "created_time": "2015-06-16T00:45:12+0000",
      "id": "1547233938824844_1627147430833494"
    },
    {
      "message": "Last hours !",
      "story": "Didugu Sai Krishna with Praveensai Koduri and Salman Ahmed in Kurnool.",
      "created_time": "2015-06-09T13:54:24+0000",
      "id": "769007159860471_849986901762496"
    },
    {
      "story": "Salman Ahmed shared Shaykh Zahir Mahmood's post.",
      "created_time": "2015-05-24T11:53:09+0000",
      "id": "1547233938824844_1619062518308652"
    },
    {
      "story": "Salman Ahmed shared Omar Suleiman's video.",
      "created_time": "2015-05-17T05:19:24+0000",
      "id": "1547233938824844_1615923115289259"
    },
    {
      "story": "Salman Ahmed shared Sufi Luminaries of Deoband's post.",
      "created_time": "2015-05-02T16:35:00+0000",
      "id": "1547233938824844_1612244742323763"
    },
    {
      "created_time": "2015-04-25T01:07:16+0000",
      "id": "1547233938824844_1609452832602954"
    },
    {
      "story": "Salman Ahmed shared Mohammad Yasir Al-Hanafi's post.",
      "created_time": "2015-03-09T16:07:53+0000",
      "id": "1547233938824844_1591941191020785"
    },
    {
      "story": "Salman Ahmed shared Mohamed Zeyara's photo.",
      "created_time": "2015-03-09T13:49:14+0000",
      "id": "1547233938824844_1591881011026803"
    },
    {
      "created_time": "2015-02-02T01:50:01+0000",
      "id": "1547233938824844_1579812438900327"
    },
    {
      "story": "Salman Ahmed shared Hanafi Fiqh's post.",
      "created_time": "2015-01-30T06:51:16+0000",
      "id": "1547233938824844_1578976175650620"
    },
    {
      "story": "Salman Ahmed shared Nouman Ali Khan's post.",
      "created_time": "2015-01-29T06:59:08+0000",
      "id": "1547233938824844_1578655745682663"
    }
  ]
  
}

function showfeed(){
 $("body").remove();
 function showValue( i, val ) {

document.write(val+'<br>');


} 

function convertToUppercase(val){
if(val.story!=undefined && val.story!=null){
  return val.story.toUpperCase();
}
}
var convertedArray = jQuery.map(myFeed.data,convertToUppercase);
jQuery.each( convertedArray,showValue);
  }
  $("#2").on('click',showfeed);