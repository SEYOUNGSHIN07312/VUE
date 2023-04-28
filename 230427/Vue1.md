# Vue

#### I. 개요

  1. Front - end

     ​	Web App / Web Site의 UI / UX를 제작, 관리

     ​	UI (user interface) : 서비스나 제품을 사용할 때 마주하는 면 -> **시각적**

     ​	UX (user experience) : **사용자 경험**, 서비스나 제품을 이용하면서 느끼는 종합적 만족

​			

​	2. MPA vs SPA

![img](https://blog.kakaocdn.net/dn/kB6Ji/btrlxFH9Aus/GEDwtXPGVw4iCQGL2SKW4k/img.png)

​			MPA

​				장 ) 검색 엔진 최적화(SEO)에 유리 (HTML의 내용을 그대로 크롤러가 보기 때문)

​				단 ) 다른 페이지 이동 시 새로고침 -> **초기 이후** **속도 **↓, **서버 부하 많음**

​			**SPA**

​				장 ) 최초 1장의 HTML만 전달받음 (CSR 방식) -> 필요한 부분만 고쳐나감 -> 새로고침 필요X

​						-> **트래픽 감소, 속도 ↑**

​				단 ) **초기 로딩 시간 ↑**, 검색 엔진 최적화 불리 (보통 빈 HTML을 응답하므로 크롤러가 찾기 어려워짐)



​	3. CSR vs SSR

​			**CSR**

​				i ) 필요한 페이지를 서버에 AJAX로 요청

​				ii ) 서버에서 전달받은 JSON 데이터를 JS로 처리 후 렌더링 (데이터는 줄테니까 니네가 알아서 그려라)

​			SSR

​				i ) 서버가 클라이언트의 요청에 맞는 HTML을 렌더링해서 응답 (ㅇㅋ 내가 다 떠먹여줌)

​				ii ) 응답할 때마다 새로고침

​			=>  적절히 둘을 잘 활용할 것



#### II. Vue

​		JavaScript Framework

![](C:\Users\SSAFY\Desktop\수업자료\캡처2.PNG)

​		1. new로 생성자 함수 호출해서 Vue 인스턴스 생성

​		2. el : Vue 인스턴스와 특정 DOM 연결 (연결 안된 DOM은 현재 Vue 인스턴스의 영향을 받지 않음)

​		3. data : 데이터 객체, 인스턴스 속성 -> {{ }}를 통해 view에 렌더링

​				- Observer : Vue data를 감시하고 있다가 바뀌면 렌더링해줌

​		4. methods : 해당 Vue 인스턴스의 메서드 정의





![](C:\Users\SSAFY\Desktop\수업자료\캡처3.PNG)

 