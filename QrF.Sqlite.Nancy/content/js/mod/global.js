define(function (require, exports, module) {

    var handleDataTable = function (options) {
        if ($().dataTable) {
            var table;
            var defaults = {
                "pageLength": 10,
                "searching": false,
                "ordering": false,
                "processing": true,
                "language": {
                    "sProcessing": "������...",
                    "sLengthMenu": "ÿҳ _MENU_ ����¼",
                    "sZeroRecords": "û��ƥ����",
                    "sInfo": "�� _PAGE_ ҳ ( �� _PAGES_ ҳ )",
                    "sInfoEmpty": "�޼�¼",
                    "sInfoFiltered": "(�� _MAX_ ����¼����)",
                    "sInfoPostFix": "",
                    "sSearch": "����:",
                    "sUrl": "",
                    "sEmptyTable": "��������Ϊ��",
                    "sLoadingRecords": "������...",
                    "sInfoThousands": ",",
                    "oPaginate": {
                        "sFirst": "��ҳ",
                        "sPrevious": "��ҳ",
                        "sNext": "��ҳ",
                        "sLast": "ĩҳ"
                    },
                    "oAria": {
                        "sSortAscending": ": ���������д���",
                        "sSortDescending": ": �Խ������д���"
                    }
                },
                serverSide: true,
                ajax: {
                    url: '',
                    type: 'GET',
                    cache: false,
                    contentType: "application/json; charset=UTF-8",
                    crossDomain: true,
                    dataType: "json"
                }
            };
            options = $.extend(true, defaults, options);
            if ($.fn.dataTable.isDataTable('.table-data')) {
                if (options.ajax) {
                    var url = options.ajax.url;
                    table = $('.table-data').DataTable().ajax.url(url).load();
                } else {
                    table = $('.table-data').dataTable(options);
                }
            }
            else {
                table = $('.table-data').dataTable(options);
            }
            //table.destroy();
        }
    };

    return {
        guid: (function () {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000)
                  .toString(16)
                  .substring(1);
            }
            return function () {
                return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                       s4() + '-' + s4() + s4() + s4();
            };
        })(),
        elementOrParentIsFixed: function (element) {
            var $element = $(element);
            var $checkElements = $element.add($element.parents());
            var isFixed = false;
            $checkElements.each(function () {
                if ($(this).css("position") === "fixed") {
                    isFixed = true;
                    return false;
                }
            });
            return isFixed;
        },
        initDataTable: function (options) {
            handleDataTable(options);
        },
        //�༭��ť
        btnEdit: function (url, id) {
            return '<a class="btn green btn-sm edit_btn" href="' + url + '?id=' + id + '"><i class="fa fa-edit"></i> �༭</a>';
        },
        //ɾ����ť
        btnDel: function (id) {
            return '<a class="btn red btn-sm delete_btn" href="' + Index.apiUrl('Delete') + '?id=' + id + '"><i class="fa fa-trash"></i> ɾ��</a>';
        },
    }
});