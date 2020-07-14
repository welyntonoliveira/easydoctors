$(document).ready(function () {
  $("#sidebar").mCustomScrollbar({
      theme: "minimal"
  });

  $('#sidebarCollapse').on('click', function () {
      $('#sidebar, #content').toggleClass('active');
      $('.collapse.in').toggleClass('in');
      $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  });
});

$(function () {
  $('#mini-calendar').datetimepicker({
      inline: true,
      sideBySide: false,
      locale: 'pt-br'
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'timeGridDay',
    themeSystem: 'bootstrap',
    timeZone: 'America/Sao_Paulo',
    locale: 'pt-br',
    showNonCurrentDates:false,
    fixedWeekCount:false,
    contentHeight:"auto",
    handleWindowResize:true,
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'timeGridDay,dayGridWeek,dayGridMonth,listWeek'
    }

  });
  calendar.render();
});