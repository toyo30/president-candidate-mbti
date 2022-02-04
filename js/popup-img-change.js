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
-  ‘민간 주도’ 재건축, 재개발

-  임기 내 주택 250만 호 공급

-  종합 부동산세 전면 재검토

-  임대기간 2년으로 재환원

-  재건축·재개발 규제 완화, 
   대출규제 완화, 종부세 완화
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

-  최악의 상황 시 ‘선제 타격론’

-  한미 동맹 강화  

-  “주적은 북한” “멸공”

-  압도적인 힘으로 도발 의지 무력화                
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

-  정부는 최대한의 지원만 할 뿐,
   개입은 최소화

-  불필요한 규제 혁파
   자유 시장 경제 구축

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
		<button class="sub-text">5. 방역 대책</button>
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
	<button class="sub-text">6.  정치개혁</button>
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
			<strong class="title">“공공과 민간의 균형”</strong>
			<p class="text">
-  공공과 민간의 균형잡힌 주택 신설

-  임기 내 주택 250만 호 공급

-  45년 초장기 주택담보대출

-  외국인의 부동산 취득 규제 강화

-  다주택자에 대한 보유세 강화							 
						</p>
			
			<div class='popup-linkbox'>
				<p class='link-sources'>[출처]</p>
				<p class="popup-link" onclick="window.open('https://www.newspim.com/news/view/20220111000920')">"5년 간 250만호 공급...”</p>
				<p class="popup-link" onclick="window.open('https://www.newspim.com/news/view/20220125000309')">선택2022·부동산..</p>
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
		<button class="sub-text">5. 방역 대책</button>
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
	<button class="sub-text">6. 정치개혁</button>
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
			<strong class="title">“강력한 증세로 복지 증대”</strong>
			<p class="text">
- 청년, 여성 등 세입자들의 
  안전 보장 및 주거급여 확대 


- 임기 내 주택 200만 호 공급

- 토지초과이득세 도입,
  부동산 보유세 강화, 대출 완화 x

- ‘탈수도권’
   수도권 인구 1/3 을 지방으로						  
						</p>
			
			<div class='popup-linkbox'>
				<p class='link-sources'>[출처]</p>
				<p class="popup-link" onclick="window.open('https://www.khan.co.kr/politics/election/article/202201272029005')">“공공주택 늘려 시장 안정”</p>
				<p class="popup-link" onclick="window.open('https://www.khan.co.kr/politics/election/article/202201241644001')">“청년 주거급여 늘리고..”</p>
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
		<strong class="title">“지방, 환경과 공존하는 나라”</strong>
		<p class="text">
-  수도권과 지방의 공존
   세대, 성별간의 공존

-  70개의 혁신도시, 인프라 성장 집중

-  그린노믹스, 녹색 일자리 집중 투자

-  지역 재생에너지 발전 등 그린 전환

-  주 4일 근무제 도입          
		</p>
		
		<div class='popup-linkbox'>
			<p class='link-sources'>[출처]</p>
			<p class="popup-link" onclick="window.open('http://www.gukjenews.com/news/articleView.html?idxno=2395560')">녹색 일자리 150만개 창출</p>
			<p class="popup-link" onclick="window.open('https://www.youtube.com/watch?v=yxheKxDmkU8')">"그린노믹스로 150만 개 일자리 창출"</p>
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
		<strong class="title">“여성가족부 강화”</strong>
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
		<button class="sub-text">5. 방역 대책</button>
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
	<button class="sub-text">6. 정치개혁</button>
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
			<strong class="title">“정부 주도 부동산 안정화”</strong>
			<p class="text">
- ‘정부 주도’ 재건축, 재개발

- 임기 내 주택 311만 호 공급

- ‘국토보유세’ 신설

- 취득세 최고세율 상향

- 재건축·재개발 규제 완화, 
  양도소득세 유예                   
						</p>
			
			<div class='popup-linkbox'>
				<p class='link-sources'>[출처]</p>
				<p class="popup-link" onclick="window.open('https://www.fnnews.com/news/202201261803232369')">李 '공공' 尹 '민간'이 주도</p>
				<p class="popup-link" onclick="window.open('https://newsis.com/view/?id=NISX20211230_0001707280&cID=10301&pID=10300')">"국토보유세 도입시..”</p>
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

-  최근에는 미사일에 대한 강한 비판
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
		<strong class="title">“사회 서비스 대전환”</strong>
		<p class="text">
-  디지털에 135조 투자 
   일자리 200만개 신설

-  정부의 대대적인 투자
   창의·혁신의 성장, 규제 합리화

-  메타버스, 디지털 정부

-  코스피 5000, 국민소득 5만 달러       
		</p>
		
		<div class='popup-linkbox'>
			<p class='link-sources'>[출처]</p>
			<p class="popup-link" onclick="window.open('https://www.chosun.com/politics/election2022/2022/01/12/LUIXDHZWRBCKVGFSC2TRCAPEQU/?utm_source=naver&utm_medium=referral&utm_campaign=naver-news')">“디지털에 135조 투자”</p>
			<p class="popup-link" onclick="window.open('https://www.youtube.com/watch?v=GKXhHpLKfVY')">“디지털에 135조 투자 (영상)”</p>
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
- '성평등가족부'로 개선

- 문제가 있으면 시정을 해야 한다
  남녀 간의 갈라치기는 옳지 않다

- 한국은 OECD 회원국 중에서
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
		<button class="sub-text">5. 방역 대책</button>
		<div class="text-box">
			<strong class="title">“합리적 개선”</strong>
			<p class="text">
- 현 정부의 정책 기조 유지

- 3차 접종자에 한해서
  영업시간 제한을 완화

- 경제 방역 > 피해 보상에 집중

- 임차 상인 임대료 부담 완화			 
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
	<button class="sub-text">6.  정치개혁</button>
	<div class="text-box">
		<strong class="title">“국민 내각, 통합 정부”</strong>
		<p class="text">
- 정파와 연령에 상관없이 국민에게                 
  꼭 필요한 인재라면 즉시 등용

- 역사상 가장 젊은 국민 내각 구성

- 대변화, 대혁신

- <3040대 장관의 기용>
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
			]
		},

		{
			//5 test-contents
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
			textList: [
				`
<div class="swiper-slide">
	<div class="slide-box">
		<button class="sub-text">혁명공약 33조</button>
		<div class="text-box huh">
			<p class="text huh">
<strong>1. 정치혁명</strong>

1) 국회의원 100명으로 축소하고
무보수 명예직으로 전환
2) 정당지원금을 폐지하여 
국민배당금으로 국민에게 환수
3) 지자체 선거를 폐지하고 
의원들의 급여를 국민배당금으로
국민에게 환수

+ 국회의원 전원 정신교육대

<strong>2.  정당혁명</strong>

무소속 출마를 원칙으로 정당
제도를 폐지하여 패거리 정치를
완전 청산                 
						</p>
		</div>
	</div>
</div>				
				`,
				`
<div class="swiper-slide">
	<div class="slide-box">
		<button class="sub-text">혁명공약 33조</button>
		<div class="text-box huh">
			<p class="text huh">
<strong>3. 결혼혁명</strong>

결혼수당 1억원 지원, 
주택자금 2억원 무이자 지원

<strong>4. 출산혁명</strong>

출산 시 3000만원 출산수당지급. 
주부수당 월 100만원 지급 

<strong>5. 노후혁명</strong>

65세 이상 노인 월 70만원 지급

<strong>6. 부채혁명</strong>

1300조 부채 무이자융자로 전환
						</p>
		</div>
	</div>
</div>				
				`,
				`
<div class="swiper-slide">
	<div class="slide-box">
		<button class="sub-text">혁명공약 33조</button>
		<div class="text-box huh">
			<p class="text huh">
<strong>7. 배당혁명</strong>

국가 1년 예산의 절반을
국민전체의 통장으로 배분

<strong>8. 소득혁명</strong>

재벌과 기업들의 소득중 일부를
국민전체의 통장으로 배분

<strong>9. 세금혁명</strong>

1)  36가지 세금을 1가지로 
통일하여 탈세를 완전 차단
2)  자동차 관련 세금 모두 제거
3) 세금 포인트제도 실시
→ 세금 납부실적을 포인트로 적립
						</p>
		</div>
	</div>
</div>				
				`,
				`
<div class="swiper-slide">
	<div class="slide-box">
		<button class="sub-text">혁명공약 33조</button>
		<div class="text-box huh">
			<p class="text huh">
<strong>10. 신불혁명</strong>

신용불량자 재기를 위해 20년 
무이자, 무담보대출 지원 (단 1회)

<strong>11. 교육혁명</strong>

본인이 잘하는 한 과목만 
시험 실시, 수능은 폐지

<strong>12. 사법혁명</strong>

강력범 제외 모든 범죄는 재산비례
벌금형으로, 교도소는 한 곳만 
남기고 모두 폐쇄하여 절감된 
죄수 관리비, 인건비를 국민 
전체에게 국민 배당금으로 분배
						</p>
		</div>
	</div>
</div>				
				`,
				`
<div class="swiper-slide">
	<div class="slide-box">
		<button class="sub-text">혁명공약 33조</button>
		<div class="text-box huh">
			<p class="text huh">
<strong>13. 뉴딜혁명</strong>

천여 개의 농업뉴딜단지를 조성,
매월 급여와 숙식을 제공하고 
식량을 완전 자급자족한다.

<strong>14. 금융혁명</strong>

금융실명제 완전 폐지

<strong>15. 취업혁명</strong>

중소기업 취업자에게 매월 
백만원을 3년간 지원, 5년 이상 
근무자가 창업시 3억원을 지원,
청년 취업을 국가 책임제로 하여 
취업까지 생계비를 지원한다.
						</p>
		</div>
	</div>
</div>				
				`,
				`
<div class="swiper-slide">
	<div class="slide-box">
		<button class="sub-text">혁명공약 33조</button>
		<div class="text-box huh">
			<p class="text huh">
<strong>16. 유엔혁명</strong>

유엔본부 한국으로 이전. 
국방비 절감과 한국 주도의 
세계통일을 추진

<strong>17. 화폐혁명</strong>

돈의 그림만 바꾸는 화폐변경
으로 지하자금을 완전 회수하여 
국민 전체에게 배당

<strong>18. 지역혁명</strong>

전남+경남=전경도, 경북+전북= 
경전도, 충청+강원= 충강도, 
경기도+서울=서울, 전국을 4개도
로 통합하여 지역감정 제거
						</p>
		</div>
	</div>
</div>				
				`,
				`
<div class="swiper-slide">
	<div class="slide-box">
		<button class="sub-text">혁명공약 33조</button>
		<div class="text-box huh">
			<p class="text huh">
<strong>19. 징병혁명</strong>

1달의 기본 군사 훈련만 받고 전역 
사병은 모병제로 변경 

<strong>20. 농지혁명</strong>

주말 농업 활동 활성화, 농업을 1차
산업으로 제 2의 새마을 운동 시작

<strong>21. 농약혁명</strong>

모든 작물에 무공해 농약 사용

<strong>22. 부패혁명</strong>

뇌물 준 자 처벌 x, 받은 자만 처벌
</p>
		</div>
	</div>
</div>				
				`,
				`
<div class="swiper-slide">
	<div class="slide-box">
		<button class="sub-text">혁명공약 33조</button>
		<div class="text-box huh">
			<p class="text huh">
<strong>23. 어음혁명</strong>

기업으로 받은 어음은 
어음보험공사에 즉시 현금화 가능

<strong>24. 생활혁명</strong>

이혼, 전과기록 호적 기재 금지하여
국민의 사생활을 보호 등등

<strong>25. 보훈혁명</strong>

월남, 6.25 참전 용사 5억원 지급,
참전수당 월 3백만원씩 지급
		</div>
	</div>
</div>				
				`,
				`
<div class="swiper-slide">
	<div class="slide-box">
		<button class="sub-text">혁명공약 33조</button>
		<div class="text-box huh">
			<p class="text huh">
<strong>26. 노동혁명</strong>

노동자와 경영자라는 이분법을 
기업가족협의회로 통일

<strong>27. 장기혁명</strong>

국가에서 장기를 구매하여 지급

<strong>28. 도덕혁명</strong>

생일 축하금 10만원과 생일케이크, 
생일선물을 각 가정으로 배달하며
가족 사망시에는 대통령의 조화와
1000만원의 금일봉을 전달한다.
</p>
		</div>
	</div>
</div>				
				`,
				`
<div class="swiper-slide">
	<div class="slide-box">
		<button class="sub-text">혁명공약 33조</button>
		<div class="text-box huh">
			<p class="text huh">
<strong>29. 장애혁명</strong>

장애인의 재활수당 현실화, 보행권
지원과 3급 이상 장애자에게 국가가
취업 우선 순위 배분

<strong>30. 주택혁명</strong>

소형 서민 임대아파트를 대량 건립,
모든 기존 아파트 관리비는 구별로
통폐합 관리

<strong>31. 벌금혁명</strong>

재산비례형 벌금으로 서민들의 교통
위반은 1만원으로 감소, 중산층이상
은 재산 정도에 따라 증가
</p>
		</div>
	</div>
</div>				
				`,
				`
<div class="swiper-slide">
	<div class="slide-box">
		<button class="sub-text">혁명공약 33조</button>
		<div class="text-box huh">
			<p class="text huh">
<strong>32. 카드혁명</strong>

현금보다는 카드 사용을 활성화 
하여 매년 100조원 정도의 
탈루세금을 줄인다.

<strong>33. 식수혁명</strong>

4대강과 수원지의 수질을 지키기
위해 농약을 미생물농약으로 
바꾸고 공장폐수를 완전 차단한다.
</p>
			<div class='popup-linkbox'>
				<p class='link-sources'>[출처]</p>
				<p class="popup-link huh" onclick="window.open('http://www.daehansinbo.com/bbs/board.php?bo_table=62&wr_id=575')">허경영 혁명공약 33조</p>
			</div>
		</div>
	</div>
</div>				
				`,
			]		
		},
		{
			//5 test-contents
			type: 'kim',
			target: 'kim',
			urlLength: 9,
			backColor: '#9CFFA6',
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
			<strong class="title">“심리가 잡히면 부동산 해결”</strong>
			<p class="text">
- 1년 내에 부동산 심리 안정화

-  1. 공급 
    다른 후보들의 공약은  현실성 x
    싸고 신속하고 지속적인 공급

-  2. 투기 억제, 규제
    가구 수에 따른 완전한 차별화
    1가구, 무주택자 > 대출, 세금 급감
    다주택자 > 투기억제책, 규제 강화

-  3. 국가 균형 발전
     모든 측면에서 지방 균형 발전
						</p>
			
			<div class='popup-linkbox'>
				<p class='link-sources'>[출처]</p>
				<p class="popup-link" onclick="window.open('https://blog.naver.com/dyvision2030/222633508399')">김동연의 3가지 처방</p>
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
		<strong class="title">“언제까지 눈치만 볼 것인가”</strong>
		<p class="text">
-  평화는 ‘안보’ 속에서.
하루 빨리 실질적인 대응 추진

-  정부는 지금이라도 
‘규탄’ 메시지 전달 

-  할 말은 하면서도 가능한 단계의 
교류를 확대하는 균형잡힌 정책 필요          
		</p>
		
		<div class='popup-linkbox'>
			<p class='link-sources'>[출처]</p>
			<p class="popup-link" onclick="window.open('https://blog.naver.com/PostView.naver?blogId=dyvision2030&logNo=222634936780&categoryNo=27&parentCategoryNo=0&viewDate=&currentPage=1&postListTopCurrentPage=1&from=postList&userTopListOpen=true&userTopListCount=5&userTopListManageOpen=false&userTopListCurrentPage=1')">"북한의 무력시위를 규탄한다"</p>
			<p class="popup-link" onclick="window.open('https://blog.naver.com/PostView.naver?blogId=dyvision2030&logNo=222626737672&categoryNo=27&parentCategoryNo=0&viewDate=&currentPage=2&postListTopCurrentPage=&from=postList&userTopListOpen=true&userTopListCount=5&userTopListManageOpen=false&userTopListCurrentPage=2')">“제대로 대응하라”</p>
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
		<strong class="title">“5개의 서울”</strong>
		<p class="text">
-  서경, 부울경, 대구경북, 광주호남,   
   대전충청 > 메가 시티 구축

-  “재정 연방제” 지방 권한 대폭 확대

-  기업이 가야 경제가 산다
   → 지방 이주 기업 대폭 과세,
   지역개발권 부여

-  인재 균형
   → 사립대 지방이전 인센티브 확대
   지역 거점 대학 서울대 수준 육성         
		</p>
		
		<div class='popup-linkbox'>
			<p class='link-sources'>[출처]</p>
			<p class="popup-link" onclick="window.open('https://blog.naver.com/PostView.naver?blogId=dyvision2030&logNo=222570002912&categoryNo=13&parentCategoryNo=0&viewDate=&currentPage=1&postListTopCurrentPage=1&from=postList&userTopListOpen=true&userTopListCount=5&userTopListManageOpen=false&userTopListCurrentPage=1')">" 5개의 서울 만들기 "</p>
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
		<strong class="title">“어떻게 청년들을 나누나”</strong>
		<p class="text">
-  어떻게 이대남, 이대녀 등 그룹으로
   청년 세대를 특정지을 수 있는가?

-  어떤 한 부처를 폐지한다는 것은
   정부 조직의 구조를 모르는 것

-  여가부가 성과가 없는 건 사실이나
   복지, 청소년, 가족 등 여러 문제를 
   보고 신중하게 결정해야 할 문제.
		</p>
		
		<div class='popup-linkbox'>
			<p class='link-sources'>[출처]</p>
			<p class="popup-link" onclick="window.open('https://blog.naver.com/dyvision2030/222635987494')">"여가부 폐지, 김동연의 생각은?"</p>
		</div>
	</div>
</div>
</div>	
				`,
				`
<div class="swiper-slide">
	<div class="slide-box">
		<button class="sub-text">5. 방역 대책</button>
		<div class="text-box">
			<strong class="title">"과감·신속한 지원 원칙 적용"</strong>
			<p class="text">
-  지금의 백신패스와 거리두기 변화

-  빠른 시간 내에 소상 공인들을 위한
   구체적인 대안 희망 - 손실보상금

-  코로나 19 경제 위기 극복을 위한 
   원탁회의 제안				 
						</p>
			
			<div class='popup-linkbox'>
				<p class='link-sources'>[출처]</p>
				<p class="popup-link" onclick="window.open('http://www.joseilbo.com/news/htmls/2022/02/20220202445396.html')">불꽃튀는 정책토론</p>
				<p class="popup-link" onclick="window.open('https://blog.naver.com/PostList.naver?blogId=dyvision2030&from=postList&categoryNo=13')">"코로나19  손실보상금"</p>
			</div>
		</div>
	</div>
</div>				
				`,
				`
<div class="swiper-slide">
<div class="slide-box">
	<button class="sub-text">6. 정치개혁</button>
	<div class="text-box">
		<strong class="title">“권력구조 대개혁”</strong>
		<p class="text">
-  “분권형 대통령제” 
   5년 단임제 → 4년 중임제

-  “국회 기득권 개혁”
   비례성, 다양성을 보장하는
   연동형 비례대표제 도입

-  3선 초과 금지, 국민소환제 도입
		</p>
		
		<div class='popup-linkbox'>
			<p class='link-sources'>[출처]</p>
			<p class="popup-link" onclick="window.open('https://blog.naver.com/PostView.naver?blogId=dyvision2030&logNo=222583080060&categoryNo=13&parentCategoryNo=0&viewDate=&currentPage=1&postListTopCurrentPage=&from=postList&userTopListOpen=true&userTopListCount=5&userTopListManageOpen=false&userTopListCurrentPage=1')">“권력 구조 대개혁”</p>
		</div>
	</div>
</div>
</div>	
				`,
			]
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


		openPopup();
		
		
		urlInput();
		// changeColor();
		// urlInput();
		// changeValue();
		// startSwiper();
		startSwiper();
		$('.close-btn').css('background-img', 'url(../img/close-btn.png)');

	})

	$(document).on('click', '.img-area', function() {
		let target = $(this).data('target');

		if(target == "yoon"){ currentClick = 0}
		else if(target == "ahn"){ currentClick = 1}
		else if(target == "sim"){ currentClick = 2}
		else if(target == "lee"){ currentClick = 3}
		else if(target == "huh"){ currentClick = 4}
		else if(target == "kim"){ currentClick = 5}

		
		openPopup();
		
		
		urlInput();
		
		// changeColor();
		startSwiper();

		$('.close-btn').css('background-img', 'url(../img/close-btn.png)');
		
		// urlInput();
		// changeValue();
		// startSwiper();
		

	});


	
	
	// $(window).resize(function() {
	// 	breakPoint = $(window).width();
	// 	changeValue();
	// 	startSwiper();
	// })

	// $(window).resize(startSwiper);

	window.swiper = null;
	
})();
