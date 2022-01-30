document.title = "My School Timetable"
Timetable = {}
Timetable.day = {}
Timetable.Weekday = new Date().getDay()

Timetable.day[1] = {Day:"Monday",Homegroup:"Homegroup",Session1:"Work Related Skills",Session2:"Work Related Skills",Recess:"Recess",Session3:"Literacy",Session4:"VET",Lunch:"Lunch",Session5:"Pastoral Care",Session6:"Maths"}
Timetable.day[2] = {Day:"Tuesday",Homegroup:"Homegroup",Session1:"Parsonal Development Skills",Session2:"Parsonal Development Skills",Recess:"Recess",Session3:"VET",Session4:"VET",Lunch:"Lunch",Session5:"Maths",Session6:"Maths"}
Timetable.day[4] = {Day:"Thursday",Homegroup:"Homegroup",Session1:"Maths",Session2:"Maths",Recess:"Recess",Session3:"Literacy",Session4:"Literacy",Lunch:"Lunch",Session5:"Parsonal Development Skills",Session6:"Parsonal Development Skills"}
Timetable.day[5] = {Day:"Friday",Homegroup:"Homegroup",Session1:"Literacy",Session2:"Literacy",Recess:"Recess",Session3:"Work Related Skills",Session4:"Work Related Skills",Lunch:"Lunch",Session5:"VET",Session6:"VET"}

// Setting Up The Timetable
Timetable.SetTimetable=function ()
{
	if (Timetable.Weekday >= 1 && Timetable.Weekday <= 5) {
		document.getElementById("error").innerHTML = ""
		document.getElementById("weekday").innerHTML = Timetable.day[Timetable.Weekday].Day
		document.getElementById("homegroup").innerHTML = Timetable.day[Timetable.Weekday].Homegroup
		document.getElementById("session1").innerHTML = Timetable.day[Timetable.Weekday].Session1
		document.getElementById("session2").innerHTML = Timetable.day[Timetable.Weekday].Session2
		document.getElementById("recess").innerHTML = Timetable.day[Timetable.Weekday].Recess
		document.getElementById("session3").innerHTML = Timetable.day[Timetable.Weekday].Session3
		document.getElementById("session4").innerHTML = Timetable.day[Timetable.Weekday].Session4
		document.getElementById("lunch").innerHTML = Timetable.day[Timetable.Weekday].Lunch
		document.getElementById("session5").innerHTML = Timetable.day[Timetable.Weekday].Session5
		document.getElementById("session6").innerHTML = Timetable.day[Timetable.Weekday].Session6
	} else {
		document.getElementById("error").innerHTML = "Sorry, This Only Works On School Days"
	}
}
Timetable.SetTimetable()
