
t = '헬로월드'
console.log(t)


    let num_remember = 0;
    let letter_count = 0;

    $(document).ready(function () {
        // index.html 로드가 완료되면 자동으로 호출합니다.
        // letterCalc();
        // return 0

    });
    // $(document).load(function() {
    // window.onload=function(){
    //     save()
    // }

    function letterCalc() {
        document.getElementById('letterNum').value = document.getElementById('main_text').value.length;
    }

    function letterTrim(){
        let temp_text = document.getElementById('main_text').value
        console.log(temp_text)
        temp_text= temp_text.replace(/\s+/g,"")
        // temp_text.replace('\n',"")
        console.log(temp_text)
        document.getElementById('letterNum_trimmed').value = temp_text.length;
    }

    function if_changed() {
        if (num_remember < document.getElementById('main_text').value.length) {
            letter_count = letter_count + (document.getElementById('main_text').value.length - num_remember);
            let temp_text = `${letter_count}`
            $('#lc').empty()
            $('#lc').append(temp_text)
        }
        num_remember = document.getElementById('main_text').value.length
    }

    function num_reset() {
        letter_count = 0;
        num_remember = 0;
        window.location.reload();
        return 0;

    }

    function page_reset() {
        document.getElementById('main_text').textContent = ''
        // $('#main_text').value.empty();
        // $('#main_text').empty();
        // num_reset();

        window.location.reload();
        return 0;
    }

    function save() {
        // var temp_list =new Array();
        // temp_list[0]=letter_count;
        // temp_list[1]=document.getElementById('main_text').value
        // console.log(temp_list)

        // var temp_dict= {};
        //
        // temp_dict['letter_count']=letter_count;
        // temp_dict['main_text']=document.getElementById('main_text').value;

        let temp_dict= {'lc': letter_count,'main_title':document.getElementById('main_title').value ,'main_text':document.getElementById('main_text').value}

        $.ajax({
            type: "POST",
            url: "/poster",
            data: {'lc': letter_count,'main_title':document.getElementById('main_title').value ,'main_text':document.getElementById('main_text').value},
            success: function (response) {
                if (response['result'] === 'success') {
                    console.log('save작동')
                    console.log(temp_dict)
                } else {
                    console.log('save작동 실패')
                }
            }
        })
    }


