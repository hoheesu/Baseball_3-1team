// 구동 알고리즘

// 1. 랜덤으로 3자리 숫자(string) 생성 (각 자리의 숫자가 겹치지 않도록)
// 2. 사용자에게 입력값을 받는다 (HTML UI 사용)
// 3. 받아온 입력값(세자리 숫자, string)를 검증한다 - for문
// 3-1. string의 인덱스 자리를 확인해서 각 자리에 생성됨 숫자가 포함되어 있는지 검사
// 3-2. 모두 일치하면 S, 값만 일치하면 B 출력 - if문
// 4. 최종적으로 몇번 시도했는지 표시
// 5. 숫자 3개를 모두 맞춘 후 "게임 종료" 표시

let PlayCnt = 0;

let answer = "";
while (answer.length < 3) {
  const randomNumber = Math.floor(Math.random() * 10);
  if (!answer.includes(randomNumber)) {
    answer += randomNumber;
  } else {
    continue;
  }
}
console.log(answer);

function addprompt() {
  let UserNum = prompt("세자리 숫자를 입력하세요.");
  if (UserNum.length !== 3) {
    // 세자리가 아닌 숫자를 입력했을 때 재입력하게끔 alert를 띄워 줌
    alert("세자리 숫자가 아닙니다, 다시 입력하세요.");
    addprompt();
  } else {
    // 세자리 숫자가 정상입력 되었다면 정상적인 게임 시작
    let StrikeCnt = 0;
    let BallCnt = 0;
    PlayCnt++;
    for (const i in UserNum) {
      // Ball, Strike를 확인
      if (UserNum[i] === answer[i]) {
        StrikeCnt++;
      } else if (answer.includes(UserNum[i])) {
        BallCnt++;
      }
    }
    if (StrikeCnt !== 3) {
      alert (`${BallCnt}Ball${StrikeCnt}Strike`)
      // Ball, Strike를 UI상에 표시
      addprompt();
    } else alert (`${PlayCnt}번만에 맞히셨습니다.`)
  }
}
addprompt();


