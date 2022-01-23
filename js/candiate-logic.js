var num = 1;
        
        var q = {
            1: {"title": "부동산 문제에 대한 해결 정책 중 자신의 생각과 가장 가까운 것을 고르세요.", "type": "estate", "A": ["정부가 적극적으로 개입하여 부동산 정책 규제 강화에 힘을 쏟아야 한다.", [0, 3, 5, 5]], "B": ["시장의 역할을 살리기 위해 대출 규제를 완화하고 복지에 힘써야 한다.", [5, 3, 0, 0]], "C": ["잘 모르겠다.", [0, 0, 0, 0]], "length": 3},
            2: {"title": "북한에 대한 대응에 대하여 어떻게 생각하십니까?", "type": "north", "A": ["강경한 태도로 일관하고 북한의 공격 조짐이 보일 시 선제공격으로 맞대응 해야 한다.", [3, 1, -3, -3]], "B": ["잦은 협상을 통해 관계를 진척시키고 평화적으로 대응해야 한다.", [-3, -1, 3, 3]], "C": ["잘 모르겠다.", [0, 0, 0, 0]], "length": 3},
            3: {"title": "다음은 후보들의 경제 성장 공약입니다. 당신의 견해와 가장 가까운 공약은 무엇입니까?", "type": "financial", "A": ["민간과 기업에 대한 복지 유치로 경제 생태계를 복원하고 개개인의 삶의 질에 신경쓰는게 우선이다.", [5, 0, 0, 0]], "B": ["디지털, 에너지 신산업 중심으로 한 사회서비스 대전환으로 수많은 일자리를 만들어야 한다.", [0, 0, 0, 5]], "C": ["2차전지, 수소산업, 시스템반도체, 콘텐츠, 바이오 등 향후 큰 성장이 기대되는 5대 사업에 집중 성장을 유도한다.", [0, 5, 0, 0]], "D": ["갈수록 심해지는 환경 문제에 대하여 정부 주도의 재생에너지 산업에 주력한 정책을 펼치고 주 4일 근무제를 도입한다.", [0, 0, 5, 0]], "E": ["잘 모르겠다.", [0, 0, 0, 0]], "length": 5},
            4: {"title": "여성가족부 폐지에 대해 어떻게 생각하십니까?", "type": "mog ", "A": ["여성가족부를 폐지해야 한다.", [3, 1, -3, -1]], "B": ["개편이 필요하다고 본다.", [1, 0, -1, 0]], "C": ["잘 모르겠다", [0, 0, 0, 0]], "D": ["여성 가족부는 유지되어야 한다.", [-1, 0, 1, 0]], "E": ["여성가족부를 강화해야 한다.", [-3, -1, 3, 1]], "length": 5},
            5: {"title": "대통령 후보의 도덕성이 중요하다고 생각하십니까?", "type": "moral", "A": ["지도자로서 도덕성은 중요하지 않다.", [0, 0, 0, 0]], "B": ["지도자로서 도덕성은 중요하다.", [-1, 0, 0, -3]], "length": 2},
            6: {"title": "정권 교체의 필요성에 대해 어떻게 생각하시나요?", "type": "regime", "A": ["정권교체가 필요하다.", [0, 0, 0, -1]], "B": ["정권 교체보다는 후보자의 역량이 중요하다.", [0, 0, 0, 0]], "length": 2},
            7: {"title": "코로나에 관한 방역 대책 중 자신의 생각과 가장 가까운 것을 고르세요.", "type": "covid", "A": ["방역패스를 철회하고 새로운 방안을 찾아야 한다.", [5, 3, 5, 0]], "B": ["현재의 방역 방침을 개편하여 이어가야 한다.", [0, 0, 0, 5]], "C": ["잘 모르겠다.", [0, 0, 0, 0]], "length": 3},
            8: {"title": "다음은 후보들의 검찰 개혁과 공수처(고위 공직자 범죄 수사처)에 관한 공약입니다. 자신의 생각과 가장 가까운 것을 고르세요.", "type": "prosecution", "A": ["공수처는 정권의 흥신소로 전락했기에 즉시 폐지하고 새로운 검찰 개혁이 필요하다.", [0, 3, 3, 0]], "B": ["검찰보다는 실권을 쥐고 있는 청와대의 권력을 제한하고 검찰 권력을 강화하여 대형 비리를 수사하게 해야 한다.", [3, 0, 0, 0]], "C": ["현 정부의 수사권과 기소권을 분리하는 검찰개혁 방향을 유지하고 기소 여부를 배심원에게 결정시키며 검찰의 권한을 견제해야 한다.", [0, 0, 0, 3]], "D": ["잘 모르겠다.", [0, 0, 0, 0]], "length": 4},
            9: {"title": "후보 개인의 역량이 중요하다고 생각하십니까?", "type": "cap", "A": ["대통령은 최종 결정권자이기 때문에 개인의 역량은 매우 중요하다.", [-2, 1, 0, 2]], "B": ["후보의 역량이 부족해도 각 분야의 능력있는 사람들을 적재적소에 기용하면 훌륭한 지도자가 될 수 있다.", [0, 0, 0, 0]], "length": 2},
        }
        var result = {
            "yoon": {"animal": "국민의힘<br> <strong>윤석열</strong>", "explain": "후보자 공략<br><br>(윤석열 공략)", "img": "yoon.jpeg", "img-small": "yoon-small.png"},
            "ahn": {"animal": "국민의당<br> <strong>안철수</strong>", "explain": "후보자 공략<br><br>(안철수 공략)", "img": "ahn.jpeg", "img-small": "ahn-small.jpeg"},
            "sim": {"animal": "정의당<br> <strong>심상정</strong>", "explain": "후보자 공략<br><br>(심상정 공략)", "img": "sim.jpeg", "img-small": "sim-small.jpeg"},
            "lee": {"animal": "더불어민주당<br> <strong>이재명</strong>", "explain": "후보자 공략<br><br>(이재명 공략)", "img": "lee.jpeg", "img-small": "lee-small.jpeg"}
        }

        function start() {
            $(".start").hide();
            $(".question").show();
            next();
        }


        $("#A").click(function(){
            calScore(num, this);
            next();
        });

        $("#B").click(function(){
            calScore(num, this);
            next();
        });
        $("#C").click(function(){
            calScore(num, this);
            next();
        });
        $("#D").click(function(){
            calScore(num, this);
            next();
        });
        $("#E").click(function(){
            calScore(num, this);
            next();
        });

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


        let rank = [0, 0, 0, 0]
        let arrange = [0, 0, 0, 0]
        function next() {
            if (num == 10) {
                
                $('body').append(`
                <div class="loading">
                    <svg class="loading-circle">
                        <circle cx="50%" cy="50%" r="25"></circle>
                        <p>결과 분석 중</p>
                    </svg>
                </div>`)
                document.body.classList.add('before-load');

                setTimeout(() => {
                    document.body.classList.remove('before-load');
                    document.querySelector('.loading').addEventListener('transitionend', (e) => {
                        document.body.removeChild(e.currentTarget);
                    });
                }, 5000);

                $(".question").hide();
                $(".result").show();

                rank[0] = parseInt($('#yoon').val());
                rank[1] = parseInt($('#ahn').val());
                rank[2] = parseInt($('#sim').val());
                rank[3] = parseInt($('#lee').val());

                rank.sort(function(a, b) {
                    return b - a;
                });


                let cdt = $('.score');

                for(let i = 0; i < cdt.length; i++) {
                    if(rank[0] == parseInt(cdt.eq(i).val())) {
                        console.log(rank[0], '1등');
                        console.log(cdt.eq(i))
                        $('#animal').html(result[cdt.eq(i).data("name")]["animal"]);
                        $('#explain').html(result[cdt.eq(i).data("name")]["explain"]);
                        $("#img").attr("src","img/"+ result[cdt.eq(i).data("name")]["img"]);
                    }

                    if(rank[1] == parseInt(cdt.eq(i).val())) {
                        console.log(rank[1], '2등');
                        console.log(cdt.eq(i))
                        $('.name').eq(0).html(result[cdt.eq(i).data("name")]["animal"]);
                        $('.add-explain').eq(0).html(result[cdt.eq(i).data("name")]["explain"]);
                        $(".small-img").eq(0).attr("src","img/"+ result[cdt.eq(i).data("name")]["img-small"]);
                    }

                    if(rank[2] == parseInt(cdt.eq(i).val())) {
                        console.log(rank[2], '3등');
                        console.log(cdt.eq(i))
                        $('.name').eq(1).html(result[cdt.eq(i).data("name")]["animal"]);
                        $('.add-explain').eq(1).html(result[cdt.eq(i).data("name")]["explain"]);
                        $(".small-img").eq(1).attr("src","img/"+ result[cdt.eq(i).data("name")]["img-small"]);
                    }

                    if(rank[3] == parseInt(cdt.eq(i).val())) {
                        console.log(rank[2], '3등');
                        console.log(cdt.eq(i))
                        $('.name').eq(2).html(result[cdt.eq(i).data("name")]["animal"]);
                        $('.add-explain').eq(2).html(result[cdt.eq(i).data("name")]["explain"]);
                        $(".small-img").eq(2).attr("src","img/"+ result[cdt.eq(i).data("name")]["img-small"]);
                    }
                }

                

                // var mbti = "";
                // ($("#EI").val() < 2) ? mbti+="I" : mbti+="E";
                // ($("#SN").val() < 2) ? mbti+="N" : mbti+="S";
                // ($("#TF").val() < 2) ? mbti+="F" : mbti+="T";
                // ($("#JP").val() < 2) ? mbti+="P" : mbti+="J";
                
                // $("#animal").html(result[mbti]["animal"]);
                // $("#explain").html(result[mbti]["explain"]);
            } else {
                $(".progress-bar").attr('style','width: calc(100/9*'+num+'%)');
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