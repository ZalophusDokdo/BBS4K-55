/*
   Copyright 2023 Benjamin (BMK: Beommin Kim - 김범민)

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var hour = function() {
	var fname = "";
	var today = new Date();
	var yy = today.getFullYear()-2000;
	var mn = today.getMonth()+1;
	var dd = today.getDay();
	var hh = today.getHours();
	var mm = today.getMinutes();
	if (yy >= 25 && mn >= 7)
	{	location.href = './js/expired.html';		}
	if (dd >= 1 && dd < 6)
	{
		if (hh >= 8 && hh < 12)
		{	fname = "./content/media/image_03-00.jpg";	}
		else
		{	fname = "./content/media/image_04-00.jpg";	}
//		document.getElementById("time").src=fname;

//		if (hh >= 10 && hh < 11 && mm <10)
//		{	location.href = './breaktime-10h-flb1280x128x4r.html';		}
//		if (hh >= 12 && hh < 13)
//		{	location.href = './breaktime-lunch-flb1280x128x4r.html';	}
//		if (hh >= 15 && hh < 16 && mm < 10)
//		{	location.href = './breaktime-15h-flb1280x128x4r.html';		}

		if (hh >= 8 && hh <= 17 && mm < 59)
		{	bname = "./content/media/background_transparency.png";
			bcss = "position: relative;";
		}
		else
		{	bname = "./content/media/foreground_blacksky.png";
			bcss = "position: absolute;";
			location.href = './sleep-flb1280x128x4r.html';
		}
		document.getElementById("blank").src = bname;
		document.getElementById("blank").style = bcss;
	}
	else
	{	location.href = './sleep-flb1280x128x4r.html';		}
}
