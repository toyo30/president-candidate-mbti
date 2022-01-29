//전역 변수 사용을 피하기 위해서 함수 안에서 설정함. 

( () => {



	let currentClick = 0;
	
	const popInfo = [
		{
			//0 test-contents
			type: 'yoon',
			target: 'yoon',
			urlLength: 9,
			backColor: '#FF7474',
			objs: {
				//각 섹션을 담는 요소 
				subText: $('.sub-text'),
				title: $('.text-box .title'),
				text: $('.text_box .text'),
				colorBox: $('.m-contents-img-box'),
			},
			textList: [
				`
<div class="swiper-slide">
	<div class="slide-box">
		<button class="sub-text">1. 부동산</button>
		<div class="text-box">
			<strong class="title">“시장의 자정 역할 복기”</strong>
			<p class="text">
-  현 정부와 반대되는 정책 기조

-  임기 내 주택 250만 호 공급

-  종합 부동산세 전면 재검토

-  임대기간 2년으로 재환원

-  대출규제 완화                    
						</p>
			
			<div class='popup-linkbox'>
				<p class='link-sources'>[출처]</p>
				<p class="popup-link" onclick="window.open('https://www.youtube.com/watch?v=6jTG90PTl8Y')">윤석열, 1호 공약은 부동산</p>
				<p class="popup-link" onclick="window.open('https://https://www.etnews.com/20220124000142')">윤석열, "재개발 활성화"</p>
			</div>
		</div>
	</div>
</div>				
				`,
				`
<div class="swiper-slide">
<div class="slide-box">
	<button class="sub-text">2. 대북</button>
	<div class="text-box">
		<strong class="title">“힘을 통한 평화 구축”</strong>
		<p class="text">
-  북한의 핵, 미사일 억제

-  한미 동맹 강화  

-  “주적은 북한” “멸공”                  
		</p>
		
		<div class='popup-linkbox'>
			<p class='link-sources'>[출처]</p>
			<p class="popup-link" onclick="window.open('https://www.khan.co.kr/politics/politics-general/article/202201241723001')">힘을 통한 평화 구축할 것 …</p>
			<p class="popup-link" onclick="window.open('https://www.youtube.com/watch?v=WljGCfXXpyM')">주적은 북한 …</p>
		</div>
	</div>
</div>
</div>	
				`,
				`
<div class="swiper-slide">
<div class="slide-box">
	<button class="sub-text">3. 경제</button>
	<div class="text-box">
		<strong class="title">“작은 정부”</strong>
		<p class="text">
-  민간이 중심이 되는 경제생태계

-  정부는 돕기만, 개입 최소화

-  불필요한 규제 혁파

-  자유 시장 경제 구축

-  민간주도의 일자리 창출 지원               
		</p>
		
		<div class='popup-linkbox'>
			<p class='link-sources'>[출처]</p>
			<p class="popup-link" onclick="window.open('https://www.dailian.co.kr/news/view/1068209/?sc=Naver')">민간이 중심이 되는 경제생태계</p>
			<p class="popup-link" onclick="window.open('https://www.youtube.com/watch?v=UF9P8iCwU4g')">국민행복시대는 일자리부터 시작</p>
		</div>
	</div>
</div>
</div>	
				`,
				`
<div class="swiper-slide">
<div class="slide-box">
	<button class="sub-text">4. 여성가족부</button>
	<div class="text-box">
		<strong class="title">“여성가족부 폐지”</strong>
		<p class="text">
-  남녀를 나누지 않고 
아동, 가족, 인구감소 문제를 
종합적으로 다룰 부처를 신설

-  성범죄, 무고죄 처벌 강화               
		</p>
		
		<div class='popup-linkbox'>
			<p class='link-sources'>[출처]</p>
			<p class="popup-link" onclick="window.open('http://www.segye.com/newsView/20220121509168?OutUrl=naver')">폐지 공약, 반드시 관철될 것</p>
			<p class="popup-link" onclick="window.open('https://www.youtube.com/watch?v=kY-5AivxfSw')">“여성가족부 폐지”</p>
		</div>
	</div>
</div>
</div>	
				`,
				`
<div class="swiper-slide">
<div class="slide-box">
	<button class="sub-text">5. 논란</button>
	<div class="text-box">
		<strong class="title"></strong>
		<p class="text">
-  샤머니즘, 무속 논란

-  장모 요양급여 부정 수급 혐의

-  김건희 허위 이력 위조 의혹            
		</p>
		
		<div class='popup-linkbox'>
			<p class='link-sources'>[출처]</p>
			<p class="popup-link" onclick="window.open('https://www.donga.com/news/article/all/20220118/111300346/2')">“무속 논란”</p>
			<p class="popup-link" onclick="window.open('https://www.yna.co.kr/view/AKR20220125128451004?input=1195m')">'요양급여 불법 수급'</p>
			<p class="popup-link" onclick="window.open('https://imnews.imbc.com/news/2022/society/article/6336292_35673.html')">'허위 이력 논란'</p>
		</div>
	</div>
</div>
</div>	
				`,
				`
<div class="swiper-slide">
	<div class="slide-box">
		<button class="sub-text">6. 방역 대책</button>
		<div class="text-box">
			<strong class="title">“비과학적 방역패스 철회”</strong>
			<p class="text">
-  비과학적 방역패스 철회

-  9시 영업제한 철회

-  임산부 방역패스 철회

-  아동청소년 강제접종 반대

-  자영업자, 소상공인 대상 
   50조 원+ α조 지원                  
						</p>
			
			<div class='popup-linkbox'>
				<p class='link-sources'>[출처]</p>
				<p class="popup-link" onclick="window.open('https://www.mk.co.kr/news/politics/view/2022/01/23629/')">"주먹구구식 방역패스 폐기해야"</p>
				<p class="popup-link" onclick="window.open('https://www.seoul.co.kr/news/newsView.php?id=20220121004002&wlog_tag3=naver')">후보별 방역 패스 정책 정리</p>
			</div>
		</div>
	</div>
</div>				
				`,
				`
<div class="swiper-slide">
<div class="slide-box">
	<button class="sub-text">7.  정치개혁</button>
	<div class="text-box">
		<strong class="title">“기존 청와대 해체”</strong>
		<p class="text">
-  권력 독점 가득한 청와대 철폐

-  ‘분야별 민관합동 위원회’ 개설
	권력의 분할과 분야별 전문성

-  정예화된 참모들 강화

-  새로운 대통령실은 광화문
	국민들과 소통하는 대통령
		</p>
		
		<div class='popup-linkbox'>
			<p class='link-sources'>[출처]</p>
			<p class="popup-link" onclick="window.open('https://www.joongang.co.kr/article/25044206')">"윤석열이 꺼낸 카드"</p>
			<p class="popup-link" onclick="window.open('https://www.youtube.com/watch?v=uYHpNtriOP0')">"기존 청와대 해체"</p>
		</div>
	</div>
</div>
</div>	
				`,
				`
<div class="swiper-slide">
<div class="slide-box">
	<button class="sub-text">8. 정권 교체</button>
	<div class="text-box">
		<strong class="title">22.01.27기준 정권 교체 여론</strong>
		<p class="text">   
문화일보·엠브레인퍼블릭
-  정권교체론 55.3%

-  정권유지론 35.4%

세계일보
-  정권교체론 52%

-  정권재창출 37.1%	
		</p>
		
		<div class='popup-linkbox'>
			<p class='link-sources'>[출처]</p>
			<p class="popup-link" onclick="window.open('http://www.munhwa.com/news/view.html?no=2022012701070321302001')">설 민심 대선 여론조사</p>
			<p class="popup-link" onclick="window.open('http://www.segye.com/newsView/20220127517344?OutUrl=naver')">정권교체 국민 여론</p>
		</div>
	</div>
</div>
</div>	
				`,
				`
<div class="swiper-slide">
<div class="slide-box">
	<button class="sub-text">9. 개인의 역량</button>
	<div class="text-box">
		<strong class="title"></strong>
		<p class="text">   
국민의 힘 경선 토론회 중 자질 논란
- 대북 전시 작전계획 질문에
  말끝을 흐림 

-  재건출관련 질문에 당황

기조 연설 도중 2분 침묵
-  대본을 보여주는 프롬프터가 
   작동하지 않자 연설을 시작하지 않고
   침묵		          
		</p>

		<div class='popup-linkbox'>
			<!-- <p class='link-sources'>[출처]</p> -->
			<p class="popup-link" onclick="window.open('https://www.youtube.com/watch?v=HOqPCH-CXU4')">자질 논란</p>
			<p class="popup-link" onclick="window.open('https://www.youtube.com/watch?v=UIc2iGyt-Y4')">2분 침묵 사건</p>
		</div>
	</div>
</div>
</div>	
				`,
			]
		},

		{
			//1 test-contents
			type: 'ahn',
			target: 'ahn',
			urlLength: 9,
			backColor: '#FFB077',
			objs: {
				//각 섹션을 담는 요소 
				subText: $('.sub-text'),
				title: $('.text-box .title'),
				text: $('.text_box .text'),
				colorBox: $('.m-contents-img-box'),
			},
			textList: [
				`
<div class="swiper-slide">
	<div class="slide-box">
		<button class="sub-text">1. 부동산</button>
		<div class="text-box">
			<strong class="title">“시장의 자정 역할 복기”</strong>
			<p class="text">
-  현 정부와 반대되는 정책 기조

-  임기 내 주택 250만 호 공급

-  종합 부동산세 전면 재검토

-  임대기간 2년으로 재환원

-  대출규제 완화                    
						</p>
			
			<div class='popup-linkbox'>
				<p class='link-sources'>[출처]</p>
				<p class="popup-link" onclick="window.open('https://www.youtube.com/watch?v=6jTG90PTl8Y')">윤석열, 1호 공약은 부동산</p>
				<p class="popup-link" onclick="window.open('https://https://www.etnews.com/20220124000142')">윤석열, "재개발 활성화"</p>
			</div>
		</div>
	</div>
</div>				
				`,
				`
<div class="swiper-slide">
<div class="slide-box">
	<button class="sub-text">2. 대북</button>
	<div class="text-box">
		<strong class="title">“선 비핵화, 후 종전”</strong>
		<p class="text">
-  비핵화가 없다면 종전 선언도 없다

-  文 정부의 굴욕적 태도, 강한 비판

-  인도적 지원 노력은 계속하되
	북한의 억지 주장, 도발엔 매우 강경

-  남북 합의는 북한이 파기
		</p>
		
		<div class='popup-linkbox'>
			<p class='link-sources'>[출처]</p>
			<p class="popup-link" onclick="window.open('http://www.segye.com/newsView/20220117510347?OutUrl=naver')">윤석열·안철수 “단호히 대응”</p>
			<p class="popup-link" onclick="window.open('https://www.youtube.com/watch?v=eWeSxlhZQgk')">文 정부, 제 2의 삼전도 굴욕</p>
		</div>
	</div>
</div>
</div>	
				`,
				`
<div class="swiper-slide">
<div class="slide-box">
	<button class="sub-text">3. 경제</button>
	<div class="text-box">
		<strong class="title">“대한민국 5·5·5 신성장 전략”</strong>
		<p class="text">
-  5개 초격차 기술 확보
5개 글로벌 선도 기업 육성
5개 경제 강국 클럽 진입

-  디스플레이, 2차 전지, 차세대 원전,
수소에너지, 바이오 산업 등
5개 산업에 집중 성장

-  초격차 기술로 세계 제패

-  혁신적 과학 기술 지원 체계 구축            
		</p>
		
		<div class='popup-linkbox'>
			<p class='link-sources'>[출처]</p>
			<p class="popup-link" onclick="window.open('https://www.youtube.com/watch?v=lxm3wDr9QlA')">안철수 '1호 공약' 발표</p>
			<p class="popup-link" onclick="window.open('https://www.newstomato.com/ReadNews.aspx?no=1099818&inflow=N')">안철수 차별화 키워드는 '과학'</p>
		</div>
	</div>
</div>
</div>	
				`,
				`
<div class="swiper-slide">
<div class="slide-box">
	<button class="sub-text">4. 여성가족부</button>
	<div class="text-box">
		<strong class="title">“국민 통합”</strong>
		<p class="text">
-  여가부의 기능과 역할, 한계 도달

-  성평등인권부로 전면 개편

-  분열과 갈등 x 성별 갈라치기보다 
	국민적 통합 지향		  
		</p>
		
		<div class='popup-linkbox'>
			<p class='link-sources'>[출처]</p>
			<p class="popup-link" onclick="window.open('https://www.mk.co.kr/news/politics/view/2022/01/24819/')">안철수, ‘국민 통합’ 차별화</p>
			<p class="popup-link" onclick="window.open('https://www.youtube.com/watch?v=V_5eFksfopw')">4인 4색 여성가족부 존폐 논란</p>
		</div>
	</div>
</div>
</div>	
				`,
				`
<div class="swiper-slide">
	<div class="slide-box">
		<button class="sub-text">5. 논란</button>
		<div class="text-box">
			<strong class="title">“의사 안철수”</strong>
			<p class="text">
-  거짓 독일 유학 논란


-  천안함 유족 자리 양보 요구 
	및 고소 협박			 
						</p>
			
			<div class='popup-linkbox'>
				<p class='link-sources'>[출처]</p>
				<p class="popup-link" onclick="window.open('https://www.ajunews.com/view/20180822083215165#PL2')">왜 안철수는 비상계단으로...</p>
				<p class="popup-link" onclick="window.open('https://www.seoul.co.kr/news/newsView.php?id=20170418500085')">‘천안함 유족 몰아낸 일’</p>
			</div>
		</div>
	</div>
</div>				
				`,
				`
<div class="swiper-slide">
	<div class="slide-box">
		<button class="sub-text">6. 방역 대책</button>
		<div class="text-box">
			<strong class="title">“의사 안철수”</strong>
			<p class="text">
-  “방역은 정치가 아닌 과학”

-  백신패스 폐지, 
	도입한다 해도 영업제한 폐지

-  ‘국민참여형 방역’ 어플 사용

-  정당을 가리지 않고 모여 대책 강구

-  대출 만기 연장과 상환유예				 
						</p>
			
			<div class='popup-linkbox'>
				<p class='link-sources'>[출처]</p>
				<p class="popup-link" onclick="window.open('https://www.seoul.co.kr/news/newsView.php?id=20220121004002&wlog_tag3=naver')">후보별 방역 패스 정책 정리 1</p>
				<p class="popup-link" onclick="window.open('https://www.khan.co.kr/politics/election/article/202201252128005')">후보별 방역 패스 정책 정리 2</p>
			</div>
		</div>
	</div>
</div>				
				`,
				`
<div class="swiper-slide">
<div class="slide-box">
	<button class="sub-text">7. 정치개혁</button>
	<div class="text-box">
		<strong class="title">“연합 정치”</strong>
		<p class="text">
-  정파를 가리지 않는 ‘연합정치’
   → ‘국민 통합 내각’ 구성

-  대통령의 권한 대폭 감소,
정부가 아닌 행정부, 삼권 분립

-  교육, 노동, 연금 강력한 개혁

-  광화문 대통령 시대. 
국민과 소통하는 대통령
		</p>
		
		<div class='popup-linkbox'>
			<p class='link-sources'>[출처]</p>
			<p class="popup-link" onclick="window.open('https://www.yna.co.kr/view/AKR20220125083300001?input=1195m')">"광화문 대통령 시대 열겠다"</p>
			<p class="popup-link" onclick="window.open('https://www.youtube.com/watch?v=pqT13GGBlZQ')">"국민 통합 내각 구성.."</p>
		</div>
	</div>
</div>
</div>	
				`,
				`
<div class="swiper-slide">
<div class="slide-box">
	<button class="sub-text">8. 정권 교체</button>
	<div class="text-box">
		<strong class="title"></strong>
		<p class="text">   
22.01.27기준 정권 교체 여론

문화일보·엠브레인퍼블릭
-  정권교체론 55.3%

-  정권유지론 35.4%

세계일보
-  정권교체론 52%

-  정권재창출 37.1%	
		</p>
		
		<div class='popup-linkbox'>
			<p class='link-sources'>[출처]</p>
			<p class="popup-link" onclick="window.open('http://www.munhwa.com/news/view.html?no=2022012701070321302001')">설 민심 대선 여론조사</p>
			<p class="popup-link" onclick="window.open('http://www.segye.com/newsView/20220127517344?OutUrl=naver')">정권교체 국민 여론</p>
		</div>
	</div>
</div>
</div>	
				`,
			]
		},

		{
			//2 test-contents
			type: 'sim',
			target: 'sim',
			urlLength: 9,
			backColor: '#FFFB9C',
			objs: {
				//각 섹션을 담는 요소 
				subText: $('.sub-text'),
				title: $('.text-box .title'),
				text: $('.text_box .text'),
				colorBox: $('.m-contents-img-box'),
			},
			textList: [
				`
<div class="swiper-slide">
	<div class="slide-box">
		<button class="sub-text">1. 부동산</button>
		<div class="text-box">
			<strong class="title">“시장의 자정 역할 복기”</strong>
			<p class="text">
-  현 정부와 반대되는 정책 기조

-  임기 내 주택 250만 호 공급

-  종합 부동산세 전면 재검토

-  임대기간 2년으로 재환원

-  대출규제 완화                    
						</p>
			
			<div class='popup-linkbox'>
				<p class='link-sources'>[출처]</p>
				<p class="popup-link" onclick="window.open('https://www.youtube.com/watch?v=6jTG90PTl8Y')">윤석열, 1호 공약은 부동산</p>
				<p class="popup-link" onclick="window.open('https://https://www.etnews.com/20220124000142')">윤석열, "재개발 활성화"</p>
			</div>
		</div>
	</div>
</div>				
				`,
				`
<div class="swiper-slide">
<div class="slide-box">
	<button class="sub-text">2. 대북</button>
	<div class="text-box">
		<strong class="title">“대화로 여는 신뢰”</strong>
		<p class="text">
-  북한 비핵화건, 적대시 정책 철회건 
어떤 조건도 내걸지 않는 대화 촉구

-  남북 합의로 인한 3년간의 평화
	파기할 이유 x

-  종전선언은 비핵화와 평화 체제로 
	가는 입구로서의 의미

-  北의 미사일, 무모함에 개탄스럽다           
		</p>
		
		<div class='popup-linkbox'>
			<p class='link-sources'>[출처]</p>
			<p class="popup-link" onclick="window.open('http://www.segye.com/newsView/20220117510347?OutUrl=naver')">이재명·심상정 “남북합의 계승”</p>
			<p class="popup-link" onclick="window.open('https://newsis.com/view/?id=NISX20220120_0001731837&cID=10301&pID=10300')">北 무모함에 개탄…</p>
		</div>
	</div>
</div>
</div>	
				`,
				`
<div class="swiper-slide">
<div class="slide-box">
	<button class="sub-text">3. 경제</button>
	<div class="text-box">
		<strong class="title">“작은 정부”</strong>
		<p class="text">
-  민간이 중심이 되는 경제생태계

-  정부는 돕기만, 개입 최소화

-  불필요한 규제 혁파

-  자유 시장 경제 구축

-  민간주도의 일자리 창출 지원               
		</p>
		
		<div class='popup-linkbox'>
			<p class='link-sources'>[출처]</p>
			<p class="popup-link" onclick="window.open('https://www.dailian.co.kr/news/view/1068209/?sc=Naver')">민간이 중심이 되는 경제생태계</p>
			<p class="popup-link" onclick="window.open('https://www.youtube.com/watch?v=UF9P8iCwU4g')">국민행복시대는 일자리부터 시작</p>
		</div>
	</div>
</div>
</div>	
				`,
				`
<div class="swiper-slide">
<div class="slide-box">
	<button class="sub-text">4. 여성가족부</button>
	<div class="text-box">
		<strong class="title"> “여성가족부 강화”</strong>
		<p class="text">
-  여성가족부 → 성평등부로 개편

-  다른 후보들의 여가부 폐지는 혐오에
	탑승하여 표를 얻으려는 행위

-  현재의 여성가족부는 제한,수동적
	→ 강화와 개편

-  박살내야 할 건 여가부 아닌 성차별			  
		</p>
		
		<div class='popup-linkbox'>
			<p class='link-sources'>[출처]</p>
			<p class="popup-link" onclick="window.open('https://news.sbs.co.kr/news/endPage.do?news_id=N1006597885&plink=ORI&cooper=NAVER')">"여가부 강화"</p>
			<p class="popup-link" onclick="window.open('https://www.youtube.com/watch?v=kapqGAtSoPQ')">"여성가족부를 성평등부로"</p>
		</div>
	</div>
</div>
</div>	
				`,
				`
<div class="swiper-slide">
<div class="slide-box">
	<button class="sub-text">5. 논란</button>
	<div class="text-box">
		<strong class="title"></strong>
		<p class="text">
-  메갈리아 옹호 논란      
		</p>
		
		<div class='popup-linkbox'>
			<p class='link-sources'>[출처]</p>
			<p class="popup-link" onclick="window.open('http://news.heraldcorp.com/view.php?ud=20160805000755')">‘정의당, 메갈 후폭풍’</p>
		</div>
	</div>
</div>
</div>	
				`,
				`
<div class="swiper-slide">
	<div class="slide-box">
		<button class="sub-text">6. 방역 대책</button>
		<div class="text-box">
			<strong class="title">“대통령 사과할 것”</strong>
			<p class="text">
-  백신패스,
   페널티가 아닌 인센티브 활용

-  청소년 방역 패스는 학습권 침해

-  재택치료는 주거 취약 확진자를 방치		 
						</p>
			
			<div class='popup-linkbox'>
				<p class='link-sources'>[출처]</p>
				<p class="popup-link" onclick="window.open('https://news.kbs.co.kr/news/view.do?ncd=5365697&ref=A')">‘청소년 방역 패스’ 학습권 침해</p>
				<p class="popup-link" onclick="window.open('https://www.khan.co.kr/politics/election/article/202201252128005')">후보별 방역 패스 정책 정리</p>
			</div>
		</div>
	</div>
</div>				
				`,
				`
<div class="swiper-slide">
<div class="slide-box">
	<button class="sub-text">7. 정치개혁</button>
	<div class="text-box">
		<strong class="title">“혁신가형 정부”</strong>
		<p class="text">
-  청와대 수석제 폐지 → 의회 중심제

-  대통령 권력 분산 → 내각 강화

-  다양성과 비례성을 강화하는 
	선거 제도 개혁

-  남녀 동수 내각, 세대 연대 내각

-  다원주의 연합정치
		</p>
		
		<div class='popup-linkbox'>
			<p class='link-sources'>[출처]</p>
			<p class="popup-link" onclick="window.open('https://view.asiae.co.kr/article/2022012015350907067')">청와대 수석제 폐지…</p>
			<p class="popup-link" onclick="window.open('https://www.youtube.com/watch?v=tH7cItdC89s')">정치 대개혁 토론회</p>
		</div>
	</div>
</div>
</div>	
				`,
				`
<div class="swiper-slide">
<div class="slide-box">
	<button class="sub-text">8. 정권 교체</button>
	<div class="text-box">
		<strong class="title"></strong>
		<p class="text">   
22.01.27기준 정권 교체 여론

문화일보·엠브레인퍼블릭
-  정권교체론 55.3%

-  정권유지론 35.4%

세계일보
-  정권교체론 52%

-  정권재창출 37.1%	
		</p>
		
		<div class='popup-linkbox'>
			<p class='link-sources'>[출처]</p>
			<p class="popup-link" onclick="window.open('http://www.munhwa.com/news/view.html?no=2022012701070321302001')">설 민심 대선 여론조사</p>
			<p class="popup-link" onclick="window.open('http://www.segye.com/newsView/20220127517344?OutUrl=naver')">정권교체 국민 여론</p>
		</div>
	</div>
</div>
</div>	
				`,
			]
		},

		{
			//3 test-contents
			type: 'lee',
			target: 'lee',
			urlLength: 9,
			backColor: '#77B6FF',
			objs: {
				//각 섹션을 담는 요소 
				subText: $('.sub-text'),
				title: $('.text-box .title'),
				text: $('.text_box .text'),
				colorBox: $('.m-contents-img-box'),
			},
			textList: [
				`
<div class="swiper-slide">
	<div class="slide-box">
		<button class="sub-text">1. 부동산</button>
		<div class="text-box">
			<strong class="title">“시장의 자정 역할 복기”</strong>
			<p class="text">
-  현 정부와 반대되는 정책 기조

-  임기 내 주택 250만 호 공급

-  종합 부동산세 전면 재검토

-  임대기간 2년으로 재환원

-  대출규제 완화                    
						</p>
			
			<div class='popup-linkbox'>
				<p class='link-sources'>[출처]</p>
				<p class="popup-link" onclick="window.open('https://www.youtube.com/watch?v=6jTG90PTl8Y')">윤석열, 1호 공약은 부동산</p>
				<p class="popup-link" onclick="window.open('https://https://www.etnews.com/20220124000142')">윤석열, "재개발 활성화"</p>
			</div>
		</div>
	</div>
</div>				
				`,
				`
<div class="swiper-slide">
<div class="slide-box">
	<button class="sub-text">2. 대북</button>
	<div class="text-box">
		<strong class="title">“남북 상생”</strong>
		<p class="text">
-  금강산, DMZ 관광 추진

-  실용적 외교, 할 말은 할 것

-  선제타격론 비판,
	가장 중요한 것은 안보

-  文 정부와는 차별화              
		</p>
		
		<div class='popup-linkbox'>
			<p class='link-sources'>[출처]</p>
			<p class="popup-link" onclick="window.open('https://www.edaily.co.kr/news/read?newsId=01840086632198376&mediaCodeNo=257&OutLnkChk=Y')">"화약고 속 불장난하는 어린이”</p>
			<p class="popup-link" onclick="window.open('https://www.youtube.com/watch?v=CWNQLZyaf_I')">강원서 “평화” 행보</p>
		</div>
	</div>
</div>
</div>	
				`,
				`
<div class="swiper-slide">
<div class="slide-box">
	<button class="sub-text">3. 경제</button>
	<div class="text-box">
		<strong class="title">“작은 정부”</strong>
		<p class="text">
-  민간이 중심이 되는 경제생태계

-  정부는 돕기만, 개입 최소화

-  불필요한 규제 혁파

-  자유 시장 경제 구축

-  민간주도의 일자리 창출 지원               
		</p>
		
		<div class='popup-linkbox'>
			<p class='link-sources'>[출처]</p>
			<p class="popup-link" onclick="window.open('https://www.dailian.co.kr/news/view/1068209/?sc=Naver')">민간이 중심이 되는 경제생태계</p>
			<p class="popup-link" onclick="window.open('https://www.youtube.com/watch?v=UF9P8iCwU4g')">국민행복시대는 일자리부터 시작</p>
		</div>
	</div>
</div>
</div>	
				`,
				`
<div class="swiper-slide">
<div class="slide-box">
	<button class="sub-text">4. 여성가족부</button>
	<div class="text-box">
		<strong class="title">“기능 조정”</strong>
		<p class="text">
-   '성평등가족부'로 개선

-  문제가 있으면 시정을 해야 한다
	남녀 간의 갈라치기는 옳지 않다

-  한국은 OECD 회원국 중에서 
	성별 임금 격차가 가장 큰 나라				  
		</p>
		
		<div class='popup-linkbox'>
			<p class='link-sources'>[출처]</p>
			<p class="popup-link" onclick="window.open('https://imnews.imbc.com/replay/2022/nwdesk/article/6334004_35744.html')">성평등 정책 차이는?</p>
			<p class="popup-link" onclick="window.open('https://www.youtube.com/watch?v=V_5eFksfopw')">4인 4색 여성가족부 존폐 논란</p>
		</div>
	</div>
</div>
</div>	
				`,
				`
<div class="swiper-slide">
<div class="slide-box">
	<button class="sub-text">5. 논란</button>
	<div class="text-box">
		<strong class="title"></strong>
		<p class="text">
-  형수 막말 논란

-  대장동 개발 특혜 의혹

-  음주운전 논란

-  조폭 유착 의혹         
		</p>
		
		<div class='popup-linkbox'>
			<p class='link-sources'>[출처]</p>
			<p class="popup-link" onclick="window.open('http://news.kmib.co.kr/article/view.asp?arcid=0016719573&code=61111111&cp=nv')">‘이재명 형수, 소송 예고’</p>
			<p class="popup-link" onclick="window.open('https://www.youtube.com/watch?v=lDmu9APO4JU&t=80s')">'대장동 개발 특혜 의혹'</p>
			<p class="popup-link" onclick="window.open('https://www.youtube.com/watch?v=8z41xw9VVFA')">'음주 운전'</p>
			<p class="popup-link" onclick="window.open('https://www.youtube.com/watch?v=nSsAVAOipgc')">'조폭 유착 의혹 보도'</p>
		</div>
	</div>
</div>
</div>	
				`,
				`
<div class="swiper-slide">
	<div class="slide-box">
		<button class="sub-text">6. 방역 대책</button>
		<div class="text-box">
			<strong class="title">“합리적 개선”</strong>
			<p class="text">
-  현 정부의 정책 기조 유지

-  3차 접종자에 한해서
	영업시간 제한을 완화

-  경제 방역 > 피해 보상에 집중

-  임차 상인 임대료 부담 완화			 
						</p>
			
			<div class='popup-linkbox'>
				<p class='link-sources'>[출처]</p>
				<p class="popup-link" onclick="window.open('https://www.seoul.co.kr/news/newsView.php?id=20220121004002&wlog_tag3=naver')">후보별 방역 패스 정책 정리 1</p>
				<p class="popup-link" onclick="window.open('https://www.khan.co.kr/politics/election/article/202201252128005')">후보별 방역 패스 정책 정리 2</p>
			</div>
		</div>
	</div>
</div>				
				`,
				`
<div class="swiper-slide">
<div class="slide-box">
	<button class="sub-text">7.  정치개혁</button>
	<div class="text-box">
		<strong class="title">“국민 내각, 통합 정부”</strong>
		<p class="text">
-  정파와 연령에 상관없이 국민에게                 
꼭 필요한 인재라면 즉시 등용

-  역사상 가장 젊은 국민 내각 구성

-  대변화, 대혁신

-  <3040대 장관의 기용>
   과학기술, 미래환경, 에너지, AI
		</p>
		
		<div class='popup-linkbox'>
			<p class='link-sources'>[출처]</p>
			<p class="popup-link" onclick="window.open('https://view.asiae.co.kr/article/2022012610203835205')">"국민 내각, 통합 정부 만들 것"</p>
			<p class="popup-link" onclick="window.open('https://www.youtube.com/watch?v=TfVVoc3NqCo')">"여의도 정치 확 바꾸겠다"</p>
		</div>
	</div>
</div>
</div>	
				`,
				`
<div class="swiper-slide">
<div class="slide-box">
	<button class="sub-text">8. 정권 교체</button>
	<div class="text-box">
		<strong class="title"></strong>
		<p class="text">   
22.01.27기준 정권 교체 여론

문화일보·엠브레인퍼블릭
-  정권교체론 55.3%

-  정권유지론 35.4%

세계일보
-  정권교체론 52%

-  정권재창출 37.1%	
		</p>
		
		<div class='popup-linkbox'>
			<p class='link-sources'>[출처]</p>
			<p class="popup-link" onclick="window.open('http://www.munhwa.com/news/view.html?no=2022012701070321302001')">설 민심 대선 여론조사</p>
			<p class="popup-link" onclick="window.open('http://www.segye.com/newsView/20220127517344?OutUrl=naver')">정권교체 국민 여론</p>
		</div>
	</div>
</div>
</div>	
				`,
			]
		},

		{
			//4 test-contents
			type: 'huh',
			target: 'huh',
			urlLength: 9,
			backColor: '#C50000',
			objs: {
				//각 섹션을 담는 요소 
				subText: $('.sub-text'),
				title: $('.text-box .title'),
				text: $('.text_box .text'),
				colorBox: $('.m-contents-img-box'),
			},
			values: {
				subText_content1: `1. 부동산`,
				title_content1:`"시장의 자정 역할 복기"`,

				text_content1: `
-  현 정부와 반대되는 정책 기조

-  임기 내 주택 250만 호 공급

-  종합 부동산세 전면 재검토

-  임대기간 2년으로 재환원

-  대출규제 완화    
`,
				text_width1: [177],
				text_height1: [194],

				subText_content2: `2. 대북`,
				title_content2:`“힘을 통한 평화 구축”`,
				text_content2: `
-  북한의 핵, 미사일 억제

-  한미 동맹 강화  

-  “주적은 북한” “멸공”   
`,
				text_width2: [177],
				text_height2: [194],

				subText_content3: `3. 경제`,
				title_content3:`“작은 정부”`,
				text_content3: `
-  민간이 중심이 되는 경제생태계

-  정부는 돕기만, 개입 최소화

-  불필요한 규제 혁파

-  자유 시장 경제 구축

-  민간주도의 일자리 창출 지원  
`,
				text_width3: [177],
				text_height3: [194],
				
				subText_content4: `4. 여성가족부`,
				title_content4:`“여성가족부 폐지”`,
				text_content4: `
-  남녀를 나누지 않고 
아동, 가족, 인구감소 문제를 
종합적으로 다룰 부처를 신설

-  성범죄, 무고죄 처벌 강화 
`,
				text_width4: [177],
				text_height4: [194],

				subText_content5: `5. 논란`,
				title_content5:``,
				text_content5: `
-  샤머니즘, 무속 논란

-  장모 요양급여 부정 수급 혐의

-  김건희 허위 이력 위조 의혹
`,
				text_width5: [177],
				text_height5: [194],

				subText_content6: `6. 방역 대책`,
				title_content6:`“비과학적 방역패스 철회”`,
				text_content6: `
-  비과학적 방역패스 철회

-  9시 영업제한 철회

-  임산부 방역패스 철회

-  아동청소년 강제접종 반대

-  자영업자, 소상공인 대상 
	50조 원+ α조 지원
`,
				text_width6: [177],
				text_height6: [194],

				subText_content7: `7.  정치개혁`,
				title_content7:`“기존 청와대 해체”`,
				text_content7: `
-  권력 독점 가득한 청와대 철폐

-  ‘분야별 민관합동 위원회’ 개설
	권력의 분할과 분야별 전문성

-  정예화된 참모들 강화

-  새로운 대통령실은 광화문
	국민들과 소통하는 대통령
`,
				text_width7: [177],
				text_height7: [194],

				subText_content8: `8. 정권 교체`,
				title_content8:`22. 01. 27 기준`,
				text_content8: `

`,
				text_width8: [177],
				text_height8: [194],

				subText_content9: `9. 개인의 역량`,
				title_content9:``,
				text_content9: `

`,
				text_width9: [177],
				text_height9: [194],

			},
		},

		
	];

	function changeColor() {
		let backColor = popInfo[currentClick].backColor;
		console.log(backColor);
		$('.m-contents-img-box').css('background', backColor);
		
	}

	function changeValue() {

		


		let objs = popInfo[currentClick].objs;
		let values = popInfo[currentClick].values;

		objs.subTextA.text(values.subText_contents);
		objs.titleA.text(values.title_Contents);
		objs.textA.html(values.text_Contents);

		
		if(breakPoint < 768) {
			objs.textA.css('width', `${values.text_width}`);
			objs.textA.css('height', `${values.text_height}`);
		} else if(breakPoint >=768) {
			console.log('786rem')
			objs.textA.css('width', `${values.text_width_pc}rem`);
			objs.textA.css('height', `${values.text_height_pc}rem`);
		}

		// objs.val();

		// var swiper = new Swiper(".mySwiper", {
		// 	pagination: {
		// 	el: ".swiper-pagination"
		// 	}
		// });
	}


	function startSwiper() {
		if(window.swiper != null){
			window.swiper.destroy();
		}

		window.swiper = new Swiper(".mySwiper", {
			pagination: {
			loop: true,
			el: ".swiper-pagination",
			clickable: true,
			}
		});

		let backColor = popInfo[currentClick].backColor;
		console.log(backColor);
		$('.m-contents-img-box').css('background', backColor);
	}








	// urLPoint를 하나하나 popup-layer의 pop


	function urlInput() {
		//버튼을 처음으로 초기화 
		$('.popup .swiper-wrapper').children().remove();
		for(let i = 0; i < popInfo[currentClick].textList.length; i++){
			let addLink = popInfo[currentClick].textList[i];

			$('.popup .swiper-wrapper').append(addLink);
		}
	}



	//popup 열기 
	function openPopup() {
		$('.popup').fadeIn();
	}

	//popup 닫기 

	function closePopup(){
		$('.popup').fadeOut();
	}
	$(document).on('click', '.close-btn', closePopup);



//currentClick을 지정하기 
	$(document).on('click', '.result-img-box', function() {
		let target = $(this).data('target');

		if(target == "yoon"){ currentClick = 0}
		else if(target == "ahn"){ currentClick = 1}
		else if(target == "sim"){ currentClick = 2}
		else if(target == "lee"){ currentClick = 3}
		else if(target == "huh"){ currentClick = 4}

		console.log(target);
		console.log(currentClick);
		openPopup();
		
		
		urlInput();
		// changeColor();
		// urlInput();
		// changeValue();
		// startSwiper();
		startSwiper();

	})

	$(document).on('click', '.small-img', function() {
		let target = $(this).data('target');

		if(target == "yoon"){ currentClick = 0}
		else if(target == "ahn"){ currentClick = 1}
		else if(target == "sim"){ currentClick = 2}
		else if(target == "lee"){ currentClick = 3}
		else if(target == "huh"){ currentClick = 4}

		console.log(target);
		console.log(currentClick);
		
		openPopup();
		
		
		urlInput();
		
		// changeColor();
		startSwiper();
		// urlInput();
		// changeValue();
		// startSwiper();
		

	})


	
	
	// $(window).resize(function() {
	// 	breakPoint = $(window).width();
	// 	changeValue();
	// 	startSwiper();
	// })

	// $(window).resize(startSwiper);

	window.swiper = null;
	
})();
