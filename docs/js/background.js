/*
   Copyright 2023 Benjamin Kim (BMK: Beommin Kim - 김범민)

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

   ################################################
   배경 색깔 자동 변경
   ################################################
*/
var number = 0; // 특정 갯수만큼 반복하고 멈춤
function change() {
	const roop = setTimeout(change, 36000); // 36초에 한번씩 실행

	// 자동색상코드 생성 코드 이건 인터넷에서 가져온거
	const randomColor = Math.floor(Math.random()*16777215).toString(16);
	document.body.style.backgroundColor = "#" + randomColor;

	if(number >= 10000){ // 10,000번까지만 변경
		clearTimeout(roop);
	}
	number++;
};

change(); // clearTimeout 조건이 될떄까지 반복