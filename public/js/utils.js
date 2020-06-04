
let showMessgae = function (message, buttonEvent, buttonText, data) {

    $(".message_wrap_jq").remove();

    let template = String.raw`<div class="message_wrap_jq">
                                    <div class="message_wrap">
                                        <div class="message_container">
                                            <div class="message">
                                                <p>${message}</p>
                                            </div>
                                            <div class="message_button">
                                                <div data-event="${buttonEvent}" class="button">
                                                    <p>${buttonText}</p>
                                                </div>
                                                <div class="button close">
                                                    <p>Закрыть</p>
                                                </div>
                                            </div>
                                         </div>
                                     </div> 
                              </div>`;
    $("body").append(template);

    let buttons = $(".message_wrap_jq .message_button .button");
    (buttons[0]).addEventListener("click", function () {
        closeMessage($(this)[0], data);
    });
    buttons[1].addEventListener("click", () => {
        $(".message_wrap_jq").last().fadeOut(1000);
        window.location.reload();
    });
    $(".message_wrap_jq").fadeIn(1000);
};

let closeMessage = function (elem, data) {
    let event = elem.getAttribute("data-event");
    if (event === "add_event") {
        $(".message_wrap_jq").last().fadeOut(1000);
        window.location.reload();
    }
};