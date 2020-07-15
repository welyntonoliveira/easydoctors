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
    }, 
    events: [
      {
        id: 'consulta-confirmada',
        title: 'Consulta Confirmada',
        start: '2020-07-15T17:00',
        end: '2020-07-15T17:30',
        url: 'consulta.html',
        backgroundColor: '#00C853',
        borderColor: '#00C853',
        extendedProps: {
          médico: 'João da Silva'
        },
      }, 
      {
        id: 'consulta-confirmada',
        title: 'Consulta Confirmada',
        start: '2020-07-15T17:00',
        end: '2020-07-15T17:30',
        url: 'consulta.html',
        backgroundColor: '#00C853',
        borderColor: '#00C853',
      }, 
      {
        id: 'consulta-ausencia',
        title: 'Ausência',
        start: '2020-07-15T17:30',
        end: '2020-07-15T18:00',
        url: 'consulta.html',
        backgroundColor: '#d50000',
        borderColor: '#d50000',
      }, 
      {
        id: 'consulta-cancelada',
        title: 'Consulta Cancelada',
        start: '2020-07-15T18:00',
        end: '2020-07-15T18:30',
        url: 'consulta.html',
        backgroundColor: '#d50000',
        borderColor: '#d50000',
      }, 
      {
        id: 'consulta-agendada',
        title: 'Consulta Agendada',
        start: '2020-07-15T18:30',
        end: '2020-07-15T19:00',
        url: 'consulta.html',
        backgroundColor: '#2962FF',
        borderColor: '#2962FF',
      }, 
      {
        id: 'horario-reservado',
        title: 'Horário Reservado',
        start: '2020-07-15T19:15',
        end: '2020-07-15T20:15',
        backgroundColor: '#616161',
        borderColor: '#616161',
      },
    ]
  });
  calendar.render();
});