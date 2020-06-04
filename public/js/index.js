window.onload = function () {
    let add_button = document.getElementById("add_button");

    add_button.addEventListener('click', function (e) {
        e.preventDefault();

        let data = {
            engQ: document.getElementById("question_engQ").value,
            rusQ: document.getElementById("question_rusQ").value,
            ansE: document.getElementById("question_ansE").value,
            ansR: document.getElementById("question_ansR").value
        };
        $.ajax({
            type: "post",
            url: "/api/add",
            dataType: "json",
            contentType: "application/json; charset=UTF-8",
            data: JSON.stringify(data, null, 2)
        }).success(function (data) {
            if (data.ok) {
                showMessgae(data.message, "add_event", "Ок", data);
            } else {
                showMessgae(data.message, "add_event", "Ок", data);
            }
        });
    });

/*
        <div class="question">
            <p>Английский вопрос: PFpfpfpfpf</p>
            <p>Русский вопрос: кпукпкупукппкупкуп</p>
            <p>Ответ по английски: </p>
            <p>Ответ по русски: </p>
        </div>
 */
    let getQuests = function () {
        $(".container:first").find(".question").remove();
        $.ajax({
            type: "get",
            url: "/api/get",
            dataType: "json",
            contentType: "application/json; charset=UTF-8",
        }).success(function (data) {
            console.log(data);
            if (data.ok) {
                data.quests.reverse().forEach(function (item) {
                    let template = String.raw`
                                <div class="question">
                                <p>Вопрос номер: ${item._id} </p>
                                <p>Английский вопрос: ${item.engQ}</p>
                                <p>Русский вопрос: ${item.rusQ}</p>
                                <p>Английский ответ: ${item.ansE}</p>
                                <p>Русский ответ: ${item.ansR}</p>
                                </div>`;
                    $(".container").append(template)
                });
            } else {
                showMessgae(data.message, "add_event", "Ок", data);
            }
        });
    };
    getQuests();
};
