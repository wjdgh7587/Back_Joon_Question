/*
상근이는 요즘 설탕공장에서 설탕을 배달하고 있다. 상근이는 지금 사탕가게에 설탕을 정확하게 N킬로그램을 배달해야 한다. 설탕공장에서 만드는 설탕은 봉지에 담겨져 있다. 봉지는 3킬로그램 봉지와 5킬로그램 봉지가 있다.

상근이는 귀찮기 때문에, 최대한 적은 봉지를 들고 가려고 한다. 예를 들어, 18킬로그램 설탕을 배달해야 할 때, 3킬로그램 봉지 6개를 가져가도 되지만, 5킬로그램 3개와 3킬로그램 1개를 배달하면, 더 적은 개수의 봉지를 배달할 수 있다.

상근이가 설탕을 정확하게 N킬로그램 배달해야 할 때, 봉지 몇 개를 가져가면 되는지 그 수를 구하는 프로그램을 작성하시오.

입력
첫째 줄에 N이 주어진다. (3 ≤ N ≤ 5000)

사용가능한 변수는 3kg, 5kg 

18kg > 3kg * 6 > 6개
	 > 5kg * 3 + 3kg > 4개

문제풀이 접근 : 
소인수분해로 알고리즘 구성하면되겠다.
나누어 떨어지는 값과 나머지만 계속해서 처리하면 될듯

풀이방법 생각 정리
# 먼저 5로 나누어서 나머지들을 정리하는건?
# 그다음 3으로 나누는 방법은?

경우의 수 :
1. 나머지가 나누어 떨어져 처리가 가능한 경우
2. 나머지가 나누어 떨어지지 않았을 경우에 3, 5 일 경우
3. 나머지가 나누어 떨어지지 않았을 경우 3보다 작을 경우
4. 3이나 5를 오버하여 담을수 없는 경우 -1로 값 반환 한다.

풀이정리
1. 3과 5로 나누어서 / 값이 큰쪽으로 사용되게 진행한다.
2. 다시한번 3과 5로 % 진행한다. 
3. 나머지의 값이 0이면 상관없지만, 0이 아닐 경우가 있을 수 있다.
4. 0이 아닐경우 나머지의 값 저장 (나머지의 값이 3이하면 1 카운트/나머지의 갑이 5이하면??? 일단 된다는 가정으로 진행)

만약 5로 접근할 경우 다음과 같은 오류가 발생할것으로 판단
1. 가장먼저 5로 나눈다고 한다면 3으로 나누었을때의 문제가 발생한다.
2. 그렇다면 3으로 나눈다면? 차근차근 진행하는 진행이 가능해짐
3. 그러면 나머지가 아닌 3으로 나누어 처리후 애초에 진행하는 값을 하나씩 뺀다고 생각하면?
(이풀이 결론 : 3과 5로 나누어 동시에 진행하게 되면 인수분해가 실패하게된다. 어떻게든 5와 3으로 나누어 떨이지게 되어있음)

풀이결론
1. 3과 5를 소인수 분해한다는 생각으로 다시 접근하였다.
2. 5를 나누어 처리하고 나누어 떨어지면 반환시켜 설탕봉지의 수로 확정
3. 아닐경우는 설탕 무게를 3kg씩 빼서 처리하였다.
4. 처음과 같이 작은 수부터 하게 되면 3이 바로 나누어 떨어지는 경우가 발생하였다. 
따라서 쉽게 나누어 떨어지지 않은 5로 나누기 로직을 준비하였고 하나씩 감소하게 만들었다
또한 설탕이 0보다 작은 경우를 모두 -1로 반환하게 하여 무게가 측정되지 않은 부분도 감안하여 생각함

*/

//seperate 3 or 5
function findValue(number) {
	let result = 0;
	let sugar = number;
	
	//console.log(sugar);
	
	while(true){
		if(sugar%5==0){
			result = result + (sugar/5);
			break;
		}else if(sugar<0){
			result = -1;
			break;
		}
		sugar = sugar - 3;
		result = result + 1;
		//console.log(sugar);
	}
	return result;
}

var number2 = [18, 4, 6, 9, 11];

for(var i=0; i<number2.length; i++){
    if(number2[i]>=3 && number2[i]<=5000){
        var answer = findValue(number2[i]);
        console.log((i+1)+" 번쨰 반환 값은 : "+answer+'입니다');
    }else console.log("out of value");
}


