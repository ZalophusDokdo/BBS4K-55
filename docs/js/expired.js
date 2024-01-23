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
	import { expyy, expmn } from './js/expired.js';
*/

var fname = "";
var today = new Date();
var yy = today.getFullYear()-2000;
var mn = today.getMonth()+1;
var dd = today.getDay();
var hh = today.getHours();
var mm = today.getMinutes();
expyy = yy+0;
expmn = mn+0;

var hour = function() {
}
