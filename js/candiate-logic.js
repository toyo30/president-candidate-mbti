var num = 1;



var q = {
    1: {"subject": "1. 부동산", "title": "다음은 부동산 정책입니다.<br>선택지를 고르세요.", "type": "estate", "A": ["정부가 적극적으로 개입하여<br>많은 정책 조정으로 가격 안정화에<br>힘을 쏟아야 한다.", [0, 1, 2, 2]], "B": ["시장의 역할을 살리기 위해<br> 대출 규제를 완화하고 복지에 힘써야 한다.", [2, 1, 0, 0]], "C": ["잘 모르겠다.", [0, 0, 0, 0]], "length": 3},
    2: {"subject": "2. 대북", "title": "다음은 대북 정책입니다.<br>선택지를 고르세요.", "type": "north", "A": ["강경 대응하고 긴급상황시<br> 선제공격도 감수한다.", [4, 2, 0, 0]], "B": ["잦은 협상으로 관계를 평화적으로 이끈다.", [0, 0, 4, 4]], "C": ["잘 모르겠다.", [0, 0, 0, 0]], "length": 3},
    3: {"subject": "3. 경제", "title": "경제 성장 공약입니다.<br>선택지를 고르세요.", "type": "financial", "A": ["민간과 기업에 대한 복지 유치로<br>경제 생태계를 복원하고<br>개개인의 삶의 질 상승에 초점을 맞춘다.", [3, 0, 0, 0]], "B": ["디지털, 에너지 신산업 중심으로 한<br>사회서비스 대전환으로<br> 수많은 일자리를 창출한다.", [0, 0, 0, 3]], "C": ["2차전지, 수소산업, 시스템반도체, 콘텐츠,<br>바이오 등 향후 큰 성장이 기대되는<br>5대 사업에 집중 성장을 유도한다.", [0, 3, 0, 0]], "D": ["주 4일 근무제를 도입하고<br> 지역균형, 국토균형 발전과 함께<br>재생 에너지 산업에 주력한다.", [0, 0, 3, 0]], "E": ["잘 모르겠다.", [0, 0, 0, 0]], "length": 5},
    4: {"subject": "4. 여성가족부", "title": "여성가족부 폐지 여부에 대해서<br>선택지를 고르세요.", "type": "mog ", "A": ["여성가족부를 폐지해야 한다.", [5, 3, 1, 1]], "B": ["대대적인 개편이 필요하다고 본다.", [2, 2, 0, 0]], "C": ["잘 모르겠다", [0, 0, 0, 0]], "D": ["여성 가족부는 개편할 부분이 있다.", [0, 0, 2, 2]], "E": ["여성가족부를 강화해야 한다.", [0, 0, 5, 3]], "length": 5},
    5: {"subject": "5. 논란", "title": "후보 관련 논란에 대해<br>어떻게 생각하시나요?", "type": "moral", "A": ["후보의 지지를 철회할 정도는 아니다.", [0, 0, 0, 0]], "B": ["지도자로서 관련 논란은 매우 중요하다.", [-2, 0, 0, -5]], "length": 2},
    6: {"subject": "6. 방역 대책", "title": "일상을 되찾을 때까지 모두 힘내세요!<br>방역 대책에 대해 어떻게 생각하시나요?", "type": "covid", "A": ["방역패스를 철회하고<br> 새로운 방안을 찾아야 한다.", [5, 3, 3, 0]], "B": ["현재의 방역 방침을<br>개편하여 이어가야 한다.", [0, 0, 0, 5]], "C": ["잘 모르겠다.", [0, 0, 0, 0]], "length": 3},
    7: {"subject": "7. 정치 개혁", "title": "정치 개혁 관련 공약입니다.<br>선택지를 고르세요.", "type": "prosecution", "A": ["정파와 연령에 관계없이 인재를<br>등용하여 완전히 새로운 내각으로<br> 통합된 정부를 만든다.", [0, 0, 0, 3]], "B": ["분야별로 정예화된 위원회와<br> 참모진을 구성하여 전문성을 높이고<br> 권력의 집중도를 낮춘다.", [3, 0, 0, 0]], "C": ["대통령의 권한을 대폭 축소시키고<br> 정파를 가리지 않는 ‘연합정치’ 를 시행한다.", [0, 3, 0, 0]], "D": ["청와대의 각 수석 제도를<br> 즉각 폐지하고 의회 중심제로 전환한다.", [0, 0, 3, 0]], "E": ["중간이거나 잘 모르겠다.", [0, 0, 0, 0]], "length": 5},
    8: {"subject": "8. 정권 교체", "title": "정권 교체의 필요성에 대해<br> 선택지를 고르세요.", "type": "regime", "A": ["정권 교체에 초점을 맞추지는 않는다.", [0, 0, 0, 0]], "B": ["현 정부는 정권교체가 절실히 필요하다.", [0, 0, 0, -15]], "length": 2},
    9: {"subject": "9. 후보의 역량", "title": "후보 개인 역량의 중요성에 대해<br> 선택지를 고르세요.", "type": "cap", "A": ["대통령은 최종 결정권자이기 때문에<br> 개인의 역량은 매우 중요하다.", [-15, 0, 0, 0]], "B": ["후보의 역량이 부족해도<br> 각 분야의 인재들을 적재적소에 기용하면<br> 훌륭한 지도자가 될 수 있다.", [0, 0, 0, 0]], "length": 2},
    10: {"subject": "10. 지지율", "title": "지지율이 투표에 미치는 영향에 대해<br>선택지를 고르세요.", "type": "approval-rating", "A": ["지지율에 상관없이<br>내가 원하는 후보자에 투표할 것이다.", [0, -15, -15, 0]], "B": ["지지율이 낮은 후보들은 당선되기가<br>어렵기 때문에 투표할 생각이 별로 없다.", [0, 0, 0, 0]], "length": 2},
}
var result = {
    "yoon": {"candidate": "국민의힘 <strong><윤석열></strong>", "explain": "공정과 상식으로, 국민과 함께 만드는 미래 대한민국", "img": "result-box-yoon.png", "img-small": "ranking-yoon-photo.png", 'target': 'yoon'},
    "ahn": {"candidate": "국민의당 <strong><안철수></strong>", "explain": "5·5·5 신성장 전략,  G5 경제 강국 대한민국을 위하여", "img": "result-box-ahn.png", "img-small": "ranking-ahn-photo.png", 'target': 'ahn'},
    "sim": {"candidate": "정의당 <strong><심상정></strong>", "explain": "정의로운 나라, 정의로운 대한민국을 위해 뛰겠습니다.", "img": "result-box-sim.png", "img-small": "ranking-sim-photo.png", 'target': 'sim'},
    "lee": {"candidate": "더불어민주당 <strong><이재명></strong>", "explain": "앞으로 제대로, 나를 위해 이재명", "img": "result-box-lee.png", "img-small": "ranking-lee-photo.png", 'target': 'lee'}
}

var eggResult = {
    "huh": {"title": "그렇다면..?", "candidate": "국가혁명당 <strong><허경영></strong>", "explain": "긴급 생계 지원금, 18세 이상 국민께 1억씩 지급", "img": "result-box-huh.png", "img-small": "ranking-huh-photo.png", 'target': 'huh'}
}




function start() {
    $(this).css({'transform':'translateY(-5px)'});

    setTimeout(() => {
        next();
        $(this).css({'transform':'translateY(0px)'});
    }, 600);

    setTimeout(() => {
        $(".start").hide();
        $(".question").show(); 
    }, 800);
}

function egg() {
    $(this).css({'transform':'translateY(-5x)'});

    setTimeout(() => {
        next();
        $(this).css({'transform':'translateY(0px)'});
    }, 600);

    huh();
}

$(document).on('click', '.btn-start', start);
$(document).on('click', '.btn-egg', egg);


let clickOne = false;

$("#A").click(function(){
    if(clickOne == false) {
        clickOne = true;
        calScore(num, this);
        setNext(num, this);    
    }
});

$("#B").click(function(){
    if(clickOne == false) {
        clickOne = true;
        calScore(num, this);
        setNext(num, this);
    }
});
$("#C").click(function(){
    if(clickOne == false) {
        clickOne = true;
        calScore(num, this);
        setNext(num, this);
    }
});
$("#D").click(function(){
    if(clickOne == false) {
        clickOne = true;
        calScore(num, this);
        setNext(num, this);
    }
});

$("#E").click(function(){
    if(clickOne == false) {
        clickOne = true;
        calScore(num, this);
        setNext(num, this);
    }
});


function setNext(idx, pitem) {
    $(pitem).css({'transform':'translateY(-5px)'});
    setTimeout(() => {
        $(pitem).css({'transform':'translateY(0px)'});
    }, 600);
    

    setTimeout(() => {
        next(idx, pitem); 
    }, 800);
    

};

function calScore(idx, point) {
    let target = $(point).data("target");
    let preValue = $('.score');
    for(let i = 0; i < preValue.length; i++) {
        let scoreValue = parseInt($('.score').eq(i).val());
        let qValue = parseInt(q[num - 1][target][1][i]);
        scoreValue += qValue
        $('.score').eq(i).val(scoreValue);
    }
}



// function scrollDown() {
//     $('html, body').animate({scrollTop: $(document).height()}, 500)
// };

function scrollUp() {
    $('html, body').animate({scrollTop: 0}, 500)
};

function scrollControl() {
    if($(window).innerHeight() < $(document).height()) {
        $('.arrow').fadeIn();
    } else {
        $('.arrow').fadeOut(10);
    }

    let windowBottom = $(window).scrollTop() + $(window).height();
    // console.log(windowBottom);
    // console.log($(document).height());
    // if((windowBottom) == $(document).height()){
    //     $('.arrow').fadeOut(10);
    // } 
}

function goBottom() {
    $('html, body').animate({scrollTop: `${$(document).height()}`}, 1000)
}

$(document).on('click', '.arrow', goBottom);


let rank = [0, 0, 0, 0]
let arrange = [0, 0, 0, 0]
function next(idx, pitem) {
    if (num == 11) {
        scrollUp();
        $(pitem).off('click');

        $('body').append(`
        <div class="loading">
            <svg class="loading-circle">
                <circle cx="50%" cy="50%" r="25"></circle>
                <p>잠시만 기다리시오..</p>
            </svg>
        </div>`)
        document.body.classList.add('before-load');

        setTimeout(() => {
            document.body.classList.remove('before-load');
        }, 4000);

        setTimeout(() => {
            $(document).find('.loading').remove();
        }, 5000);

        $(".question").hide();
        $(".result").show();

        rank[0] = parseInt($('#yoon').val());
        rank[1] = parseInt($('#ahn').val());
        rank[2] = parseInt($('#sim').val());
        rank[3] = parseInt($('#lee').val());

        if(rank[0] == rank[1] == rank[2] == rank[3]) {
            return huh()
        }
        

        rank.sort(function(a, b) {
            return b - a;
        });


        let cdt = $('.score');
        let idx = 0
        

        for(let i = 0; i < cdt.length; i++) {
            console.log(rank[0])
            if(rank[0] == parseInt(cdt.eq(i).val())) {
                $('#candidate').html(result[cdt.eq(i).data("name")]["candidate"]);
                $('#explain').html(result[cdt.eq(i).data("name")]["explain"]);
                $("#img").attr("src","img/"+ result[cdt.eq(i).data("name")]["img"]);
                $(".result-img-box").attr("data-target", result[cdt.eq(i).data("name")]["target"]);
                idx = i
            }
        }
        let anotherInx = 0;
        let anotherList = [];
        let saveInx = [];
        for(let i = 0; i < cdt.length; i++) {
            for(let j = 0; j < 4; j++) {
                if (i == idx || saveInx.includes(i)) {
                    break;
                }
                console.log('saveInx', saveInx);
                console.log('small-img', $('.small-img'));
                console.log('rankig-area', $('.rankig-area'));
                
                if(rank[j] == parseInt(cdt.eq(i).val())) {
                    // $('.ranking-area').eq(anotherInx).html(j+1);
                    $(".small-img").eq(anotherInx).attr("src","img/"+ result[cdt.eq(i).data("name")]["img-small"]);
                    $(".small-img").eq(anotherInx).attr('data-target', result[cdt.eq(i).data("name")]["target"]);
                    saveInx.push(i);
                    anotherInx ++; 
                    break;
                }
                
                
            }
        }

        // for(let j = 0; j < 4; j++) {
        //     for(let i = 0; i < cdt.length; i++) {
        //         if(i == idx || saveInx.includes(i)) {
        //             break;
        //         }
        //         if(rank[j] == parseInt(cdt.eq(i).val())) {
        //             $('.ranking-area').eq(anotherInx).html(j+1);
        //             $(".small-img").eq(anotherInx).attr("src","img/"+ result[cdt.eq(i).data("name")]["img-small"]);
        //             $(".small-img").eq(anotherInx).attr('data-target', result[cdt.eq(i).data("name")]["target"]);
        //             saveInx.push(i);
        //             anotherInx ++; 
        //             break;
        //         }

        //     } 
        // }
            
    

    } else {
        $('.arrow').fadeOut(10);
        scrollUp();
        $('.arrow').fadeIn();
        $('#subject').html(q[num]["subject"]);
        $("#title").html(q[num]["title"]);
        $("#type").val(q[num]["type"]);
        if(q[num]["length"] == 2) {
            $("#A").show();
            $("#B").show();
            $("#C").hide();
            $("#D").hide();
            $("#E").hide();
            $("#A").html(q[num]["A"][0]);
            $("#B").html(q[num]["B"][0]);
        }
        if(q[num]["length"] == 3) {
            $("#A").show();
            $("#B").show();
            $("#C").show();
            $("#D").hide();
            $("#E").hide();
            $("#A").html(q[num]["A"][0]);
            $("#B").html(q[num]["B"][0]);
            $("#C").html(q[num]["C"][0]);
        }
        if(q[num]["length"] == 4) {
            $("#A").show();
            $("#B").show();
            $("#C").show();
            $("#D").show();
            $("#E").hide();
            $("#A").html(q[num]["A"][0]);
            $("#B").html(q[num]["B"][0]);
            $("#C").html(q[num]["C"][0]);
            $("#D").html(q[num]["D"][0]);
        }
        if(q[num]["length"] == 5) {
            $("#A").show();
            $("#B").show();
            $("#C").show();
            $("#D").show();
            $("#E").show();
            $("#A").html(q[num]["A"][0]);
            $("#B").html(q[num]["B"][0]);
            $("#C").html(q[num]["C"][0]);
            $("#D").html(q[num]["D"][0]);
            $("#E").html(q[num]["E"][0]);
        }       
        num++;
        clickOne = false;
    }
}



    


/* 링크복사*/
function clip(){

	var url = '';
	var textarea = document.createElement("textarea");
	document.body.appendChild(textarea);
	url = window.document.location.href;
	textarea.value = url;
	textarea.select();
	document.execCommand("copy");
	document.body.removeChild(textarea);
	alert("URL이 복사되었습니다.")
}



/* huh function*/

function huh() {
    scrollUp();

        $('body').append(`
        <div class="loading">
            <svg class="loading-circle">
                <circle cx="50%" cy="50%" r="25"></circle>
                <p>잠시만 기다리시오..</p>
            </svg>
        </div>`)
        document.body.classList.add('before-load');

        setTimeout(() => {
            document.body.classList.remove('before-load');
            // document.querySelector('.loading').addEventListener('transitionend', (e) => {
            //     document.body.removeChild(e.currentTarget);
            // });
        }, 4000);

        setTimeout(() => {
            $(document).find('.loading').remove();
        }, 5000);
        $(".start").hide();
        $(".question").hide();
        $(".result").show();
        $('#candidate').html(eggResult["huh"]["candidate"]);
        $(".result-text").html(eggResult["huh"]["title"]);
        $('#explain').html(eggResult["huh"]["explain"]);
        $("#img").attr("src","img/"+ eggResult["huh"]["img"]);
        $(".result-img-box").attr('data-target', eggResult["huh"]["target"]);


   
   

    $(document).find('.ranking-box').remove();

    let content = `
<div class="ranking-box-huh">
    <!-- <div class="add-des">
        <p><span class="ranking-area">2</span>위</p>
    </div> -->
    <div class="img-area">
        <img class="rounded-circle mt-5 small-img" src="img/ranking-lee-photo.png" alt="candidate" data-target='lee'>
        <p class="name"></p>
    </div>
    
    <div class="img-area">
        <img class="rounded-circle mt-5 small-img" src="img/ranking-ahn-photo.png" alt="candidate" data-target='ahn'>
        <p class="name"></p>
    </div>

    <div class="img-area">
        <img class="rounded-circle mt-5 small-img" src="img/ranking-yoon-photo.png" alt="candidate" data-target='yoon'>
        <p class="name"></p>
    </div>

    <div class="img-area">
        <img class="rounded-circle mt-5 small-img" src="img/ranking-sim-photo.png" alt="candidate" data-target='sim'>
        <p class="name"></p>
    </div>
</div>
    `
    $(document).find('.rank-wrap').append(content);

}



$(document).on('click', '.reload', function() {
    location.reload();
});