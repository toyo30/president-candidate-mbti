var num = 1;
        
var q = {
    1: {"subject": "1. 부동산", "title": "부동산 문제에 대한 정책입니다.<br>선택지를 고르세요.", "type": "estate", "A": ["정부가 적극적으로 개입하여<br> 부동산 정책 규제 강화에 힘을 쏟아야 한다.", [0, 3, 5, 5]], "B": ["시장의 역할을 살리기 위해<br> 대출 규제를 완화하고 복지에 힘써야 한다.", [5, 3, 0, 0]], "C": ["잘 모르겠다.", [0, 0, 0, 0]], "length": 3},
    2: {"subject": "2. 대북", "title": "북한에 대한 대응 정책입니다.<br>선택지를 고르세요.", "type": "north", "A": ["강경 대응하고 긴급상황시<br> 선제공격도 감수한다.", [3, 1, -3, -3]], "B": ["잦은 협상으로 관계를 평화적으로 이끈다.", [-3, -1, 3, 3]], "C": ["잘 모르겠다.", [0, 0, 0, 0]], "length": 3},
    3: {"subject": "3. 경제", "title": "경제 성장 공약입니다.<br>선택지를 고르세요.", "type": "financial", "A": [" 민간과 기업에 대한 복지 유치로<br> 경제 생태계를 복원하고<br> 개개인의 삶의 질 상승에 초점을 맞춘다.", [5, 0, 0, 0]], "B": ["디지털, 에너지 신산업 중심으로 한<br> 사회서비스 대전환으로<br> 수많은 일자리를 만들어야 한다.", [0, 0, 0, 5]], "C": ["2차전지, 수소산업, 시스템반도체, 콘텐츠,<br> 바이오 등 향후 큰 성장이 기대되는<br> 5대 사업에 집중 성장을 유도한다.", [0, 5, 0, 0]], "D": ["주 4일 근무제를 도입하고<br> 극심한 환경 문제를 해결하기 위해<br> 재생에너지 산업에 주력한다.", [0, 0, 5, 0]], "E": ["잘 모르겠다.", [0, 0, 0, 0]], "length": 5},
    4: {"subject": "4. 여성가족부", "title": "여성가족부 폐지 여부에 대해<br>선택지를 고르세요.", "type": "mog ", "A": ["여성가족부를 폐지해야 한다.", [3, 1, -3, -1]], "B": ["개편이 필요하다고 본다.", [1, 0, -1, 0]], "C": ["잘 모르겠다", [0, 0, 0, 0]], "D": ["여성 가족부는 유지되어야 한다.", [-1, 0, 1, 0]], "E": ["여성가족부를 강화해야 한다.", [-3, -1, 3, 1]], "length": 5},
    5: {"subject": "5. 논란", "title": "후보 관련 논란의 유무에 대해서<br> 선택지를 고르세요.", "type": "moral", "A": ["지도자로서 관련 논란은 중요하지 않다.", [0, 0, 0, 0]], "B": ["지도자로서 관련 논란은 중요하다.", [-1, 0, 0, -3]], "length": 2},
    6: {"subject": "6. 방역 대책", "title": "일상을 되찾을 때까지 모두 힘내세요!<br> 선택지를 고르세요.", "type": "covid", "A": ["방역패스를 철회하고<br> 새로운 방안을 찾아야 한다.", [5, 3, 5, 0]], "B": ["현재의 방역 방침을<br> 개편하여 이어가야 한다.", [0, 0, 0, 5]], "C": ["잘 모르겠다.", [0, 0, 0, 0]], "length": 3},
    7: {"subject": "7. 정치 개혁", "title": "정치 개혁 관련 공약입니다.<br> 선택지를 고르세요.", "type": "prosecution", "A": ["정파와 연령에 관계없이 인재를<br> 등용하여 완전히 새로운 내각으로<br> 통합된 정부를 만든다.", [0, 3, 3, 0]], "B": ["분야별로 정예화된<br> 위원회와 참모진을 구성하여<br> 전문성을 높이고<br> 권력의 집중도를 낮춘다.", [3, 0, 0, 0]], "C": ["대통령의 권한을 대폭 축소시키고<br> 정파를 가리지 않는 ‘연합정치’ 를 시행한다.", [0, 0, 0, 3]], "D": ["청와대의 각 수석 제도를<br> 즉각 폐지하고 의회 중심제로 전환한다.", [0, 0, 0, 0]], "E": ["잘 모르겠다.", [0, 0, 0, 0]], "length": 5},
    8: {"subject": "8. 정권 교체", "title": "정권 교체의 필요성에 대해<br> 선택지를 고르세요.", "type": "regime", "A": ["정권 교체에 초점을 맞추지는 않는다.", [0, 0, 0, -1]], "B": ["현 정부는 정권교체가 절실히 필요하다.", [0, 0, 0, 0]], "length": 2},
    9: {"subject": "9. 후보의 역량", "title": "후보 개인 역량의 중요성에 대해<br> 선택지를 고르세요.", "type": "cap", "A": ["대통령은 최종 결정권자이기 때문에<br> 개인의 역량은 매우 중요하다.", [-2, 1, 0, 2]], "B": ["후보의 역량이 부족해도<br> 각 분야의 능력있는 사람들을<br> 적재적소에 기용하면<br> 훌륭한 지도자가 될 수 있다.", [0, 0, 0, 0]], "length": 2},
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

    hun();
}

$(document).on('click', '.btn-start', start);
$(document).on('click', '.btn-egg', egg);

$("#A").click(function(){
    calScore(num, this);
    setNext(num, this);
});

$("#B").click(function(){
    calScore(num, this);
    setNext(num, this);
});
$("#C").click(function(){
    calScore(num, this);
    setNext(num, this);
});
$("#D").click(function(){
    calScore(num, this);
    setNext(num, this);
});

$("#E").click(function(){
    calScore(num, this);
    setNext(num, this);
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
    console.log($(window).innerHeight());
        console.log($(document).height());
    if($(window).innerHeight() < $(document).height()) {
        $('.arrow').fadeIn();
    } else {
        $('.arrow').fadeOut(10);
    }

    let windowBottom = $(window).scrollTop() + $(window).height();
    if((windowBottom) == $(document).height()){
        $('.to-top-btn').fadeIn();
        $('.arrow').fadeOut(10);
    } else {
        $('.to-top-btn').fadeOut(10);
    }
}



let rank = [0, 0, 0, 0]
let arrange = [0, 0, 0, 0]
function next(idx, pitem) {
    if (num == 10) {
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
            // document.querySelector('.loading').addEventListener('transitionend', (e) => {
            //     document.body.removeChild(e.currentTarget);
            // });
        }, 5000);

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
            return hun()
        }
        

        rank.sort(function(a, b) {
            return b - a;
        });


        let cdt = $('.score');
        let idx = 0
        let saveInx = 0

        for(let i = 0; i < cdt.length; i++) {
            if(rank[0] == parseInt(cdt.eq(i).val())) {
                $('#candidate').html(result[cdt.eq(i).data("name")]["candidate"]);
                $('#explain').html(result[cdt.eq(i).data("name")]["explain"]);
                $("#img").attr("src","img/"+ result[cdt.eq(i).data("name")]["img"]);
                $(".result-img-box").attr("data-target", result[cdt.eq(i).data("name")]["target"]);
                idx = i
            }
        }

        for(let i = 0; i < cdt.length; i++) {

            
            for(let j = 0; j < 4; j++) {
                console.log('h1')
                if (i == idx) {
                    break;
                }

                if(rank[j] == parseInt(cdt.eq(i).val())) {
                    $('.ranking-area').eq(saveInx).html(j+1);
                    // $('.name').eq(saveInx).html(result[cdt.eq(i).data("name")]["candidate"]);
                    // $('.add-explain').eq(saveInx).html(result[cdt.eq(i).data("name")]["explain"]);
                    $(".small-img").eq(saveInx).attr("src","img/"+ result[cdt.eq(i).data("name")]["img-small"]);
                    $(".small-img").eq(saveInx).attr('data-target', result[cdt.eq(i).data("name")]["target"]);
                    saveInx++;
                    break;
                }
                
                
            }
        }
            
    

    } else {
        

        

        $(".progress-bar").attr('style','width: calc(100/9*'+num+'%)');
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

function hun() {
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
        }, 5000);

        setTimeout(() => {
            $(document).find('.loading').remove();
        }, 6000);
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
    <div class="add-des">
        <p><span class="ranking-area">2</span>위</p>
    </div>
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