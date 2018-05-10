;

var vkwin = $(".vkwin");
var winners = $(".winners")
var vkwinBTN = $(".vkwin-button");
var vkwinTimeNow = $(".vkwin-time-now");
var vkwinTimeLater = $(".vkwin-time-later");
var vkwinTimeInput = $(".vkwin-time-input");
var slider = $(".vkwin-slider");


vkwinTimeInput.hide();
winners.hide();

vkwinBTN.on("mousedown", function () {
  $(this).css("background-position", "bottom")
})

vkwinBTN.on("mouseup", function () {
  $(this).css("background-position", "top")
})

vkwinBTN.on("click", function () {
  var val = slider.val();
  if (val == 3) {
    setTimeout(function () {
      vkwin.hide();
      winners.show();
      $(".vkwin-title").text("Результаты розыгрыша:");
      $(".vkwin-pretitle").hide();
      $(".winners-result-time").text(getCurrentTime())
    }, 850)
  }
  else {
    alert("Ошибка сервера!")
  }
})


slider.on("input", function () {
  var val = $(this).val();
  var str = "1 победитель";

  if (val > 1) {
    str = val + " победителя";
    if (val > 4) {
      str = val + " победителей";
    }
  }

  $(".vkwin-winners-count").text(str);
})


vkwinTimeNow.on("click", function () {
  vkwinTimeLater.attr("checked", false)
  vkwinTimeInput.hide();
})

vkwinTimeLater.on("click", function () {
  vkwinTimeNow.attr("checked", false)
  vkwinTimeInput.show();
})


function getCurrentTime() {
  let date = Date.now();
  let dateNow = new Date(date);
  let monthName = " апреля ";
  if (dateNow.getMonth() == 4) { monthName = " мая " }
  let time  = dateNow.getMonth()+monthName
                  //+dateNow.getMonth()+"."
                  +dateNow.getFullYear()+" в "
                  +dateNow.getHours()+":"
                  +dateNow.getMinutes();
  return time
}
