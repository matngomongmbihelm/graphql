            var port = chrome.runtime.connect();
            var userid, __dyn, __csr, jazoest, fbdtsg, relay, lsd, hs, hsi, req, rev, es, pin_r, pin_t, friendly_name, doc_id;
            var sukses = 0, gagal = 0;
            window.addEventListener("message", (event) => {
                    if (event.source != window)
                        return;
                    if (event.data.jazoest && (event.data.jazoest !== "undefined")) {
                        userid = event.data.sendav, __dyn = event.data.send_dy, __csr = event.data.send_csr, jazoest = event.data.jazoest, fbdtsg = decodeURIComponent(event.data.send_fbdtsg), relay = event.data.send_relay, lsd = event.data.send_lsd, hs = decodeURIComponent(event.data.send_hs), hsi = event.data.send_hsi, req = event.data.send_req, rev = event.data.send_rev, es = decodeURIComponent(event.data.send_s), pin_r = event.data.send_spin_r, pin_t = event.data.send_spin_t;
                        $('.bib').text('ON').css('color', 'green');
                        port.postMessage(event.data);
                    }
             }, false);
            if ($('input[name="email"], input[name="pass"], button[name="login"]').length > 0) {
                $('select.pilehpost').attr('disabled', 'disabled').css('background-color', '#f0f2f5');
                $('select.pilehget').attr('disabled', 'disabled').css('background-color', '#f0f2f5');
                $('input[type="number"]').attr('disabled', 'disabled').css('background-color', '#f0f2f5');
                $('input.inputlink').attr('disabled', 'disabled').css('background-color', '#f0f2f5');
                $('button.mulai').attr('disabled', 'disabled').css('background-color', '#fb0b0b');
                $('textarea').attr('disabled', 'disabled').css('background-color', '#f0f2f5');
                $('.learn').text('Urong login').css('color', 'red');
            }
            $(document).on('change', '.post', function(e) {
                var getclass = $("option:selected", this),
                    valueid = this.value;
                $("[class*='graphQL'], [class*='unfriendtemanbaru'], [class*='oldEndpoint'], [class*='uidinbox'], [class*='uidgroup']").removeClass(function(index, className) {
                    return (className.match(/graphQL|unfriendtemanbaru|oldEndpoint|uidinbox|uidgroup/g) || []).join('');
                });
                if (valueid == "graphQL") {
                    getclass.addClass("graphQL");
                    doc_id = '4737302532970903';
                    friendly_name = 'FriendingCometFriendRequestSendMutation';
                }
                if (valueid == "unfriendtemanbaru") {
                    getclass.addClass("unfriendtemanbaru");
                    doc_id = '4092953427497208';
                    friendly_name = 'FriendingCometUnfriendMutation';
                }
                if (valueid == "oldEndpoint") {
                    getclass.addClass("oldEndpoint");
                }
                if (valueid == "uidinbox") {
                    if (document.location.origin === 'https://mobile.facebook.com' || document.location.origin === 'https://m.facebook.com') {
                        getclass.addClass("uidinbox");
                        return true;
                    } else {
                        alert('untuk inbox uid gunakan mobile facebook');
                        window.location = 'https://mobile.facebook.com';
                    }
                }
                if (valueid == "uidgroup") {
                    if (document.location.origin === 'https://mobile.facebook.com' || document.location.origin === 'https://m.facebook.com') {
                        getclass.addClass("uidgroup");
                        return true;
                    } else {
                        alert('untuk inbox group gunakan mobile facebook');
                        window.location = 'https://mobile.facebook.com';
                    }
                }
            });
    
            $(document).on('change', '.get', function(e) {
                var getclass = $("option:selected", this),
                    valueid = this.value;
                $("[class*='recent'], [class*='getall']").removeClass(function(index, className) {
                    return (className.match(/recent|getall/g) || []).join('');
                });
                if (valueid == "recent") {
                    getclass.addClass("recent");
                }
                if (valueid == "getall") {
                    getclass.addClass("getall");
                    doc_id = '6585351584871987';
                    friendly_name = 'ProfileCometAppCollectionListRendererPaginationQuery';
                }
            });
    
            $(document).on('input', '.uidinput', function() {
                var lines = $(this).val().split('\n'),
                    hitung = lines.length;
                $('.itong').text(hitung);
            });
    
            $(document).on('click', 'button.mulai', function() {
                var uid = $('.uidinput').val().split('\n'),
                    delayed = $('.inputdelayed').val(),
                    countme = $('.inputnjok').val(),
                    u_id = $('.inputuid').val(),
                    linkout = $('.inputlink').val(),
                    graphQl_old = document.location.origin + '/ajax/add_friend/action.php',
                    graphQl = document.location.origin + '/api/graphql/',
                    bleachmobile = document.location.origin + '/messages/send/?icm=1&ifcd=1',
                    classed;
                if (!delayed) delayed = 1;
                delayed = delayed * 1000;
                if ($('select.post').find('option.graphQL').length > 0) {
                    var last = uid[countme];
                    detect();
                    $.each(uid, function(i, v) {
                        var y = true,
                            lastindex = i == uid.length - 1;
                        setTimeout(function() {
                            if (v === last || lastindex) {
                                $.ajax({
                                    url: graphQl,
                                    type: 'post',
                                    headers: {
                                        'content-type': 'application/x-www-form-urlencoded',
                                        'x-fb-friendly-name': friendly_name,
                                        'x-fb-lsd': lsd
                                    },
                                    beforeSend: function() {
                                        $('.learn').text('Get Uid Terakhir').css('color', 'blue');
                                    },
                                    xhrFields: {
                                        withCredentials: true
                                    },
                                    data: {
                                        'av': userid,
                                        '__user': userid,
                                        '__a': 1,
                                        '__dyn': get_csdy(Math.floor(Math.random() * 100) + 200),
                                        '__csr': get_csdy(Math.floor(Math.random() * 100) + 500),
                                        '__req': req,
                                        '__hs': hs,
                                        'dpr': 1,
                                        '__ccg': 'GOOD',
                                        '__rev': pin_r,
                                        '__s': es,
                                        '__hsi': hsi,
                                        '__comet_req': 1,
                                        'fb_dtsg': fbdtsg,
                                        'jazoest': jazoest,
                                        'lsd': lsd,
                                        '__spin_r': pin_r,
                                        '__spin_b': "trunk",
                                        '__spin_t': pin_t,
                                        'fb_api_caller_class': "RelayModern",
                                        'fb_api_req_friendly_name': friendly_name,
                                        'variables': JSON.stringify({
                                            "input": {
                                                "friend_requestee_ids": [v],
                                                "refs": [null],
                                                "source": "profile_friends",
                                                "warn_ack_for_ids": [],
                                                "actor_id": userid,
                                                "client_mutation_id": Math.floor(Math.random() * 5) + 1
                                            },
                                            "scale": 1
                                        }),
                                        'server_timestamps': 'true',
                                        'doc_id': doc_id,
                                        'fb_api_analytics_tags': "[qpl_active_flow_ids=30605361]"
                                    },
                                    success: function(result, io, po) {
                                        var abuse = JSON.parse(result);
                                        if (abuse.data.friend_request_send !== null) {
                                            sukses++;
                                            $('.good').text(sukses);
                                            $('.learn').text('Wes Mari..').css('color', 'green');
                                            $('button.mulai').text('start');
                                        } else {
                                            gagal++;
                                            $('.fail').text(gagal);
                                            $('.learn').text('Wes Mari..').css('color', 'red');
                                            $('button.mulai').text('start');
                                        }
                                    }
                                });
                            } else {
                                $.ajax({
                                    url: graphQl,
                                    type: 'post',
                                    headers: {
                                        'content-type': 'application/x-www-form-urlencoded',
                                        'x-fb-friendly-name': friendly_name,
                                        'x-fb-lsd': lsd
                                    },
                                    beforeSend: function() {
                                        $('.learn').text('Get Uid').css('color', 'blue');
                                    },
                                    xhrFields: {
                                        withCredentials: true
                                    },
                                    data: {
                                        'av': userid,
                                        '__user': userid,
                                        '__a': 1,
                                        '__dyn': get_csdy(Math.floor(Math.random() * 100) + 200),
                                        '__csr': get_csdy(Math.floor(Math.random() * 100) + 500),
                                        '__req': req,
                                        '__hs': hs,
                                        'dpr': 1,
                                        '__ccg': 'GOOD',
                                        '__rev': pin_r,
                                        '__s': es,
                                        '__hsi': hsi,
                                        '__comet_req': 1,
                                        'fb_dtsg': fbdtsg,
                                        'jazoest': jazoest,
                                        'lsd': lsd,
                                        '__spin_r': pin_r,
                                        '__spin_b': "trunk",
                                        '__spin_t': pin_t,
                                        'fb_api_caller_class': "RelayModern",
                                        'fb_api_req_friendly_name': friendly_name,
                                        'variables': JSON.stringify({
                                            "input": {
                                                "friend_requestee_ids": [v],
                                                "refs": [null],
                                                "source": "profile_friends",
                                                "warn_ack_for_ids": [],
                                                "actor_id": userid,
                                                "client_mutation_id": Math.floor(Math.random() * 5) + 1
                                            },
                                            "scale": 1
                                        }),
                                        'server_timestamps': 'true',
                                        'doc_id': doc_id,
                                        'fb_api_analytics_tags': "[qpl_active_flow_ids=30605361]"
                                    },
                                    success: function(result, io, po) {
                                        var abuse = JSON.parse(result);
                                        if (abuse.data.friend_request_send !== null) {
                                            sukses++;
                                            $('.good').text(sukses);
                                            $('.learn').text("Success Add").css('color', 'green');
                                        } else {
                                            var desti = abuse.errors[0].description;
                                            gagal++;
                                            $('.fail').text(gagal);
                                            $('.learn').text(desti).css('color', 'red');
                                        }
                                    }
                                });
                            }
                        }, (i + 1) * delayed);
                        if (v === last || lastindex) {
                            y = false;
                            return false;
                        }
                        return y;
                    });
                } else if ($('select.post').find('option.unfriendtemanbaru').length > 0) {
                    $.ajax({
                        url: document.location.origin + '/me/friends_recent',
                        type: 'get',
                        headers: {
                            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9'
                        },
                        xhrFields: {
                            withCredentials: true
                        },
                        beforeSend: function() {
                            $('.learn').text('Fetch Uid').css('color', 'blue');
                            $('button.mulai').text('wes mlaku');
                        }
                    }).done(function(dataye) {
                        window.dataye = dataye;
                        var matches = getMatches(dataye, /restrictable_profile_owner":{"__typename":"User","id":"(.*?[^\\])"/g, 1);
                        if (!matches.length) {
                            $('.learn').text('Gak Duwe Recent Friend').css('color', 'blue');
                            $('button.mulai').text('start');
                            return false;
                        } else {
                            var cursor = dataye.split('}],"page_info":{"end_cursor":')[1].split('"')[1].split('"')[0];
                            var id_friend_hash = dataye.split('"TimelineAppCollectionListRenderer","collection":{"id":')[1].split('"')[1].split('"')[0];
                            var paging = dataye.split('"has_next_page":')[1].split('}')[0];
                            classed = cursor;
                            $.each(matches, function(i, v) {
                                var ur = true,
                                    terakhir = i == matches.length - 1;
                                setTimeout(function() {
                                    if (terakhir) {
                                        $.ajax({
                                            url: graphQl,
                                            type: 'post',
                                            xhrFields: {
                                                withCredentials: true
                                            },
                                            headers: {
                                                'content-type': 'application/x-www-form-urlencoded',
                                                'x-fb-friendly-name': friendly_name,
                                                'x-fb-lsd': lsd
                                            },
                                            beforeSend: function() {
                                                $('.learn').text('Get Uid').css('color', 'blue');
                                            },
                                            data: {
                                                'av': userid,
                                                '__user': userid,
                                                '__a': 1,
                                                '__dyn': get_csdy(Math.floor(Math.random() * 100) + 200),
                                                '__csr': get_csdy(Math.floor(Math.random() * 100) + 500),
                                                '__req': req,
                                                '__hs': hs,
                                                'dpr': 1,
                                                '__ccg': 'EXCELLENT',
                                                '__rev': pin_r,
                                                '__s': es,
                                                '__hsi': hsi,
                                                '__comet_req': 1,
                                                'fb_dtsg': fbdtsg,
                                                'jazoest': jazoest,
                                                'lsd': lsd,
                                                '__spin_r': pin_r,
                                                '__spin_b': "trunk",
                                                '__spin_t': pin_t,
                                                'fb_api_caller_class': "RelayModern",
                                                'fb_api_req_friendly_name': friendly_name,
                                                'variables': JSON.stringify({
                                                    "friendID": v,
                                                    "shouldShowActivityLogDialog": false,
                                                    "input": {
                                                        "source": "bd_profile_button",
                                                        "unfriended_user_id": v,
                                                        "actor_id": userid,
                                                        "client_mutation_id": Math.floor(Math.random() * 5) + 1
                                                    },
                                                    "scale": 1
                                                }),
                                                'server_timestamps': 'true',
                                                'doc_id': doc_id,
                                                'fb_api_analytics_tags': "[qpl_active_flow_ids=30605361]"
                                            }
                                        }).done(function(loggi) {
                                            var bias = JSON.parse(loggi);
                                            if (bias.data.friend_remove !== null) {
                                                sukses++;
                                                $('.good').text(sukses);
                                                if (paging === 'true') {
                                                    daur();
                                                } else {
                                                    $('.learn').text("Success Remove " + v + " Terakhir").css('color', 'green');
                                                    $('button.mulai').text('start');
                                                }
                                            } else {
                                                var desti = bias.errors[0].description;
                                                gagal++;
                                                $('.fail').text(gagal);
                                                $('.learn').text(desti).css('color', 'red');
                                            }
                                        });
                                    } else {
                                        $.ajax({
                                            url: graphQl,
                                            type: 'post',
                                            xhrFields: {
                                                withCredentials: true
                                            },
                                            headers: {
                                                'content-type': 'application/x-www-form-urlencoded',
                                                'x-fb-friendly-name': friendly_name,
                                                'x-fb-lsd': lsd
                                            },
                                            beforeSend: function() {
                                                $('.learn').text('Get Uid').css('color', 'blue');
                                            },
                                            data: {
                                                'av': userid,
                                                '__user': userid,
                                                '__a': 1,
                                                '__dyn': get_csdy(Math.floor(Math.random() * 100) + 200),
                                                '__csr': get_csdy(Math.floor(Math.random() * 100) + 500),
                                                '__req': req,
                                                '__hs': hs,
                                                'dpr': 1,
                                                '__ccg': 'EXCELLENT',
                                                '__rev': pin_r,
                                                '__s': es,
                                                '__hsi': hsi,
                                                '__comet_req': 1,
                                                'fb_dtsg': fbdtsg,
                                                'jazoest': jazoest,
                                                'lsd': lsd,
                                                '__spin_r': pin_r,
                                                '__spin_b': "trunk",
                                                '__spin_t': pin_t,
                                                'fb_api_caller_class': "RelayModern",
                                                'fb_api_req_friendly_name': friendly_name,
                                                'variables': JSON.stringify({
                                                    "friendID": v,
                                                    "shouldShowActivityLogDialog": false,
                                                    "input": {
                                                        "source": "bd_profile_button",
                                                        "unfriended_user_id": v,
                                                        "actor_id": userid,
                                                        "client_mutation_id": Math.floor(Math.random() * 5) + 1
                                                    },
                                                    "scale": 1
                                                }),
                                                'server_timestamps': 'true',
                                                'doc_id': doc_id,
                                                'fb_api_analytics_tags': "[qpl_active_flow_ids=30605361]"
                                            }
                                        }).done(function(mrik) {
                                            var bias = JSON.parse(mrik);
                                            if (bias.data.friend_remove !== null) {
                                                sukses++;
                                                $('.good').text(sukses);
                                                $('.learn').text("Success Remove " + v).css('color', 'green');
                                            } else {
                                                var desti = bias.errors[0].description;
                                                gagal++;
                                                $('.fail').text(gagal);
                                                $('.learn').text(desti).css('color', 'red');
                                            }
                                        });
                                    }
                                }, (i + 1) * delayed);
                                if (terakhir) {
                                    ur = false;
                                    return false;
                                }
                                return ur;
                            });
                        }
    
                        function daur() {
                            $.ajax({
                                url: graphQl,
                                type: 'post',
                                xhrFields: {
                                    withCredentials: true
                                },
                                headers: {
                                    'content-type': 'application/x-www-form-urlencoded',
                                    'x-fb-friendly-name': friendly_name,
                                    'x-fb-lsd': lsd
                                },
                                beforeSend: function() {
                                    $('.learn').text('Enteni seg').css('color', 'blue');
                                },
                                data: {
                                    'av': userid,
                                    '__user': userid,
                                    '__a': 1,
                                    '__dyn': get_csdy(Math.floor(Math.random() * 100) + 200),
                                    '__csr': get_csdy(Math.floor(Math.random() * 100) + 500),
                                    '__req': req,
                                    '__hs': hs,
                                    'dpr': 1,
                                    '__ccg': 'EXCELLENT',
                                    '__rev': pin_r,
                                    '__s': es,
                                    '__hsi': hsi,
                                    '__comet_req': 1,
                                    'fb_dtsg': fbdtsg,
                                    'jazoest': jazoest,
                                    'lsd': lsd,
                                    '__spin_r': pin_r,
                                    '__spin_b': "trunk",
                                    '__spin_t': pin_t,
                                    'fb_api_caller_class': "RelayModern",
                                    'fb_api_req_friendly_name': friendly_name,
                                    'variables': JSON.stringify({
                                        "count": 8,
                                        "cursor": classed,
                                        "scale": 1,
                                        "search": null,
                                        "id": id_friend_hash
                                    }),
                                    'server_timestamps': 'true',
                                    'doc_id': doc_id,
                                }
                            }).done(function(oep) {
                                var ter = JSON.parse(oep);
                                var pullout = ter.data.node.pageItems.edges;
                                var cursoor = ter.data.node.pageItems.page_info.end_cursor;
                                var more = ter.data.node.pageItems.page_info.has_next_page;
                                classed = cursoor;
                                $.each(pullout, function(i, v) {
                                    var ur = true,
                                        terakhir = i == pullout.length - 1;
                                    setTimeout(function() {
                                        if (terakhir) {
                                            $.ajax({
                                                url: graphQl,
                                                type: 'post',
                                                xhrFields: {
                                                    withCredentials: true
                                                },
                                                headers: {
                                                    'content-type': 'application/x-www-form-urlencoded',
                                                    'x-fb-friendly-name': friendly_name,
                                                    'x-fb-lsd': lsd
                                                },
                                                beforeSend: function() {
                                                    $('.learn').text('Get Uid').css('color', 'blue');
                                                },
                                                data: {
                                                    'av': userid,
                                                    '__user': userid,
                                                    '__a': 1,
                                                    '__dyn': get_csdy(Math.floor(Math.random() * 100) + 200),
                                                    '__csr': get_csdy(Math.floor(Math.random() * 100) + 500),
                                                    '__req': req,
                                                    '__hs': hs,
                                                    'dpr': 1,
                                                    '__ccg': 'EXCELLENT',
                                                    '__rev': pin_r,
                                                    '__s': es,
                                                    '__hsi': hsi,
                                                    '__comet_req': 1,
                                                    'fb_dtsg': fbdtsg,
                                                    'jazoest': jazoest,
                                                    'lsd': lsd,
                                                    '__spin_r': pin_r,
                                                    '__spin_b': "trunk",
                                                    '__spin_t': pin_t,
                                                    'fb_api_caller_class': "RelayModern",
                                                    'fb_api_req_friendly_name': friendly_name,
                                                    'variables': JSON.stringify({
                                                        "friendID": v,
                                                        "shouldShowActivityLogDialog": false,
                                                        "input": {
                                                            "source": "bd_profile_button",
                                                            "unfriended_user_id": v.node.node.id,
                                                            "actor_id": userid,
                                                            "client_mutation_id": Math.floor(Math.random() * 5) + 1
                                                        },
                                                        "scale": 1
                                                    }),
                                                    'server_timestamps': 'true',
                                                    'doc_id': doc_id,
                                                    'fb_api_analytics_tags': "[qpl_active_flow_ids=30605361]"
                                                }
                                            }).done(function(loggi) {
                                                var bias = JSON.parse(loggi);
                                                if (bias.data.friend_remove !== null) {
                                                    sukses++;
                                                    $('.good').text(sukses);
                                                    if (more === true) {
                                                        daur();
                                                    } else {
                                                        $('.learn').text("Success Remove " + v.node.node.id + " Terakhir").css('color', 'green');
                                                        $('button.mulai').text('start');
                                                    }
                                                } else {
                                                    var desti = bias.errors[0].description;
                                                    gagal++;
                                                    $('.fail').text(gagal);
                                                    $('.learn').text(desti).css('color', 'red');
                                                }
                                            });
                                        } else {
                                            $.ajax({
                                                url: graphQl,
                                                type: 'post',
                                                xhrFields: {
                                                    withCredentials: true
                                                },
                                                headers: {
                                                    'content-type': 'application/x-www-form-urlencoded',
                                                    'x-fb-friendly-name': friendly_name,
                                                    'x-fb-lsd': lsd
                                                },
                                                beforeSend: function() {
                                                    $('.learn').text('Get Uid').css('color', 'blue');
                                                },
                                                data: {
                                                    'av': userid,
                                                    '__user': userid,
                                                    '__a': 1,
                                                    '__dyn': get_csdy(Math.floor(Math.random() * 100) + 200),
                                                    '__csr': get_csdy(Math.floor(Math.random() * 100) + 500),
                                                    '__req': req,
                                                    '__hs': hs,
                                                    'dpr': 1,
                                                    '__ccg': 'EXCELLENT',
                                                    '__rev': pin_r,
                                                    '__s': es,
                                                    '__hsi': hsi,
                                                    '__comet_req': 1,
                                                    'fb_dtsg': fbdtsg,
                                                    'jazoest': jazoest,
                                                    'lsd': lsd,
                                                    '__spin_r': pin_r,
                                                    '__spin_b': "trunk",
                                                    '__spin_t': pin_t,
                                                    'fb_api_caller_class': "RelayModern",
                                                    'fb_api_req_friendly_name': friendly_name,
                                                    'variables': JSON.stringify({
                                                        "friendID": v,
                                                        "shouldShowActivityLogDialog": false,
                                                        "input": {
                                                            "source": "bd_profile_button",
                                                            "unfriended_user_id": v.node.node.id,
                                                            "actor_id": userid,
                                                            "client_mutation_id": Math.floor(Math.random() * 5) + 1
                                                        },
                                                        "scale": 1
                                                    }),
                                                    'server_timestamps': 'true',
                                                    'doc_id': doc_id,
                                                    'fb_api_analytics_tags': "[qpl_active_flow_ids=30605361]"
                                                }
                                            }).done(function(mrik) {
                                                var bias = JSON.parse(mrik);
                                                if (bias.data.friend_remove !== null) {
                                                    sukses++;
                                                    $('.good').text(sukses);
                                                    $('.learn').text("Success Remove " + v.node.node.id).css('color', 'green');
                                                } else {
                                                    var desti = bias.errors[0].description;
                                                    gagal++;
                                                    $('.fail').text(gagal);
                                                    $('.learn').text(desti).css('color', 'red');
                                                }
                                            });
                                        }
                                    }, (i + 1) * delayed);
                                    if (terakhir) {
                                        ur = false;
                                        return false;
                                    }
                                    return ur;
                                });
                            });
                        }
                    })
                } else if ($('select.post').find('option.oldEndpoint').length > 0) {
                    var last = uid[countme];
                    detect();
                    $.each(uid, function(i, v) {
                        var y = true,
                            lastindex = i == uid.length - 1;
                        setTimeout(function() {
                            if (v === last || lastindex) {
                                $.ajax({
                                    url: graphQl_old,
                                    type: 'post',
                                    headers: {
                                        'content-type': 'application/x-www-form-urlencoded'
                                    },
                                    beforeSend: function() {
                                        $('.learn').text('Get Uid Terakhir').css('color', 'blue');
                                    },
                                    xhrFields: {
                                        withCredentials: true
                                    },
                                    data: {
                                        'to_friend': v,
                                        'action': 'add_friend',
                                        'how_found': 'friend_browser_s',
                                        'ref_param': 'none',
                                        'outgoing_id': '',
                                        'logging_location': 'search',
                                        'no_flyout_on_click': true,
                                        'ego_log_data': '',
                                        'http_referer': '',
                                        '__user': userid,
                                        '__a': '1',
                                        '__dyn': get_csdy(Math.floor(Math.random() * 100) + 200),
                                        '__req': req,
                                        'fb_dtsg': fbdtsg,
                                        'phstamp': ''
                                    }
                                }).done(function(result, io, po) {
                                    var abuse = JSON.parse(JSON.stringify(result)),
                                        pay_load = abuse.payload,
                                        teyr = abuse.errorSummary;
                                    if (pay_load !== null) {
                                        sukses++;
                                        $('.good').text(sukses);
                                        $('.learn').text('Wes Mari..').css('color', 'green');
                                        $('button.mulai').text('start');
                                    } else {
                                        gagal++;
                                        $('.fail').text(gagal);
                                        $('.learn').text(teyr).css('color', 'red');
                                        $('button.mulai').text('start');
                                    }
                                });
                            } else {
                                $.ajax({
                                    url: graphQl_old,
                                    type: 'post',
                                    headers: {
                                        'content-type': 'application/x-www-form-urlencoded'
                                    },
                                    beforeSend: function() {
                                        $('.learn').text('Get Uid').css('color', 'blue');
                                    },
                                    xhrFields: {
                                        withCredentials: true
                                    },
                                    data: {
                                        'to_friend': v,
                                        'action': 'add_friend',
                                        'how_found': 'friend_browser_s',
                                        'ref_param': 'none',
                                        'outgoing_id': '',
                                        'logging_location': 'search',
                                        'no_flyout_on_click': true,
                                        'ego_log_data': '',
                                        'http_referer': '',
                                        '__user': userid,
                                        '__a': '1',
                                        '__dyn': get_csdy(Math.floor(Math.random() * 100) + 200),
                                        '__req': req,
                                        'fb_dtsg': fbdtsg,
                                        'phstamp': ''
                                    }
                                }).done(function(result, io, po) {
                                    var abuse = JSON.parse(JSON.stringify(result)),
                                        pay_load = abuse.payload,
                                        teyr = abuse.errorSummary;
                                    if (pay_load !== null) {
                                        sukses++;
                                        $('.good').text(sukses);
                                        $('.learn').text("Success Add").css('color', 'green');
                                    } else {
                                        gagal++;
                                        $('.fail').text(gagal);
                                        $('.learn').text(teyr).css('color', 'red');
                                    }
                                });
                            }
                        }, (i + 1) * delayed);
                        if (v === last || lastindex) {
                            y = false;
                            return false;
                        }
                        return y;
                    });
                } else if ($('select.post').find('option.uidinbox').length > 0) {
                    if (!uid || uid < 1) {
                        alert('Isi UID ?? Lali Ta?');
                        return false;
                    } else if (!linkout || linkout < 1) {
                        alert('endi link e?');
                        return false;
                    } else {
                        $('.learn').text("Enteni Seg").css('color', 'blue');
                        $('button.mulai').text('wes mlaku');
                    }
                    $.each(uid, function(i, v) {
                        var er = true, poew = i == uid.length - 1;
                        setTimeout(function() {
                            let datae = new URLSearchParams("fb_dtsg=" + fbdtsg + "&jazoest=" + jazoest + "&body=" + linkout + "&photo=&waterfall_source=message&ids[0]=" + v + "");
                            if (poew) {
                                fetch(bleachmobile, {
                                    method: 'post',
                                    credentials: 'include',
                                    mode: 'cors',
                                    headers: {
                                        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                                        'content-type': 'application/x-www-form-urlencoded'
                                    },
                                    body: datae
                                }).then((response) => {
                                    if (response.redirected) {
                                        sukses++;
                                        $('.good').text(sukses);
                                        $('.learn').text("wes entek").css('color', 'green');
                                        $('button.mulai').text('start');
                                        return response.blob();
                                    } else {
                                        gagal++;
                                        $('.fail').text(gagal);
                                        $('.learn').text("wes entek").css('color', 'red');
                                        $('button.mulai').text('start');
                                    }
                                    response.blob();
                                });
                            } else {
                                fetch(bleachmobile, {
                                    method: 'post',
                                    credentials: 'include',
                                    mode: 'cors',
                                    headers: {
                                        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                                        'content-type': 'application/x-www-form-urlencoded'
                                    },
                                    body: datae
                                }).then((response) => {
                                    if (response.redirected) {
                                        sukses++;
                                        $('.good').text(sukses);
                                        $('.learn').text("Success inbox " + v + "").css('color', 'green');
                                        return response.blob();
                                    } else {
                                        gagal++;
                                        $('.fail').text(gagal);
                                        $('.learn').text("gagal inbox " + v + "").css('color', 'red');
                                    }
                                    response.blob();
                                });
                            }
                        }, (i + 1) * Math.floor(Math.random() * 1000) + 100);
                        if (poew) {
                            var er = false;
                            return false;
                        }
                        return er;
                    });
                } else if ($('select.post').find('option.uidgroup').length > 0) {
    
                } else if ($('select.get').find('option.recent').length > 0) {
                    $.ajax({
                        url: document.location.origin + '/me/friends_recent',
                        type: 'get',
                        headers: {
                            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9'
                        },
                        xhrFields: {
                            withCredentials: true
                        },
                        beforeSend: function() {
                            $('button.mulai').text('wes mlaku');
                            $('.learn').text('Fetch Uid').css('color', 'blue');
                        }
                    }).done(function(dataye) {
                        window.dataye = dataye;
                        var matches = getMatches(dataye, /restrictable_profile_owner":{"__typename":"User","id":"(.*?[^\\])"/g, 1);
                        if (!matches.length) {
                            $('.learn').text('Gak Duwe Recent Friend').css('color', 'blue');
                            $('button.mulai').text('start');
                            return false;
                        } else {
                            var cursor = dataye.split('}],"page_info":{"end_cursor":')[1].split('"')[1].split('"')[0];
                            var id_friend_hash = dataye.split('"TimelineAppCollectionListRenderer","collection":{"id":')[1].split('"')[1].split('"')[0];
                            var paging = dataye.split('"has_next_page":')[1].split('}')[0];
                            classed = cursor;
                            $.each(matches, function(i, v) {
                                $('.uidinput').sendkeys(v + "\n");
                            });
                            if (paging === 'true') {
                                $.ajax({
                                    url: graphQl,
                                    type: 'post',
                                    xhrFields: {
                                        withCredentials: true
                                    },
                                    headers: {
                                        'accept': '*/*',
                                        'content-type': 'application/x-www-form-urlencoded',
                                        'x-fb-friendly-name': friendly_name,
                                        'x-fb-lsd': lsd
                                    },
                                    beforeSend: function() {
                                        $('.learn').text('Enteni seg').css('color', 'blue');
                                    },
                                    data: {
                                        'av': userid,
                                        '__user': userid,
                                        '__a': 1,
                                        '__dyn': get_csdy(Math.floor(Math.random() * 100) + 200),
                                        '__csr': get_csdy(Math.floor(Math.random() * 100) + 500),
                                        '__req': req,
                                        '__hs': hs,
                                        'dpr': 1,
                                        '__ccg': 'EXCELLENT',
                                        '__rev': pin_r,
                                        '__s': es,
                                        '__hsi': hsi,
                                        '__comet_req': 1,
                                        'fb_dtsg': fbdtsg,
                                        'jazoest': jazoest,
                                        'lsd': lsd,
                                        '__spin_r': pin_r,
                                        '__spin_b': "trunk",
                                        '__spin_t': pin_t,
                                        'fb_api_caller_class': "RelayModern",
                                        'fb_api_req_friendly_name': friendly_name,
                                        'variables': JSON.stringify({
                                            "count": 8,
                                            "cursor": classed,
                                            "scale": 1,
                                            "search": null,
                                            "id": id_friend_hash
                                        }),
                                        'server_timestamps': 'true',
                                        'doc_id': doc_id,
                                    }
                                }).done(function(oep) {
                                    var ter = JSON.parse(oep);
                                    var pullout = ter.data.node.pageItems.edges;
                                    var cursoor = ter.data.node.pageItems.page_info.end_cursor;
                                    var more = ter.data.node.pageItems.page_info.has_next_page;
                                    classed = cursoor;
                                    $.each(pullout, function(i, v) {
                                        $('.uidinput').sendkeys(v.node.node.id + "\n");
                                    });
                                    if (more === true) {
                                        var loopuid = setInterval(function() {
                                            $.ajax({
                                                url: graphQl,
                                                type: 'post',
                                                xhrFields: {
                                                    withCredentials: true
                                                },
                                                headers: {
                                                    'accept': '*/*',
                                                    'content-type': 'application/x-www-form-urlencoded',
                                                    'x-fb-friendly-name': friendly_name,
                                                    'x-fb-lsd': lsd
                                                },
                                                beforeSend: function() {
                                                    $('.learn').text('Enteni seg').css('color', 'blue');
                                                },
                                                data: {
                                                    'av': userid,
                                                    '__user': userid,
                                                    '__a': 1,
                                                    '__dyn': get_csdy(Math.floor(Math.random() * 100) + 200),
                                                    '__csr': get_csdy(Math.floor(Math.random() * 100) + 500),
                                                    '__req': req,
                                                    '__hs': hs,
                                                    'dpr': 1,
                                                    '__ccg': 'EXCELLENT',
                                                    '__rev': pin_r,
                                                    '__s': es,
                                                    '__hsi': hsi,
                                                    '__comet_req': 1,
                                                    'fb_dtsg': fbdtsg,
                                                    'jazoest': jazoest,
                                                    'lsd': lsd,
                                                    '__spin_r': pin_r,
                                                    '__spin_b': "trunk",
                                                    '__spin_t': pin_t,
                                                    'fb_api_caller_class': "RelayModern",
                                                    'fb_api_req_friendly_name': friendly_name,
                                                    'variables': JSON.stringify({
                                                        "count": 8,
                                                        "cursor": classed,
                                                        "scale": 1,
                                                        "search": null,
                                                        "id": id_friend_hash
                                                    }),
                                                    'server_timestamps': 'true',
                                                    'doc_id': doc_id,
                                                }
                                            }).done(function(bissed) {
                                                var terier = JSON.parse(bissed);
                                                var puljom = terier.data.node.pageItems.edges;
                                                var bie = terier.data.node.pageItems.page_info.end_cursor;
                                                var mock = terier.data.node.pageItems.page_info.has_next_page;
                                                classed = bie;
                                                if (mock === false) {
                                                    $('.learn').text('Wes Entek').css("color", "green");
                                                    $('button.mulai').text('start');
                                                    clearInterval(loopuid);
                                                } else {
                                                    $.each(puljom, function(i, v) {
                                                        $('.uidinput').sendkeys(v.node.node.id + "\n");
                                                    });
                                                }
                                            }).fail(function() {
                                                $('.learn').text('Wes Limit').css("color", "red");
                                                $('button.mulai').text('start');
                                                clearInterval(loopuid);
                                            })
                                        }, 1000);
                                    }
                                });
                            } else {
                                $('.learn').text('Tidak Ada Lagi Teman').css('color', 'blue');
                                $('button.mulai').text('start');
                                return false;
                            }
                        }
                    })
                } else if ($('select.get').find('option.getall').length > 0) {
                    if (!u_id || u_id < 1) {
                        alert('Endi Uid te seng pek tek grab?');
                        return false;
                    } else {
                        $('button.mulai').text('wes mlaku');
                        $.ajax({
                            url: document.location.origin + '/' + u_id + '/friends',
                            type: 'get',
                            xhrFields: {
                                withCredentials: true
                            },
                            headers: {
                                'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9'
                            },
                            beforeSend: function() {
                                $('.learn').text('Enteni seg').css('color', 'blue');
                            }
                        }).done(function(pert) {
                            window.pert = pert;
                            var first_fetch = getMatches(pert, /restrictable_profile_owner":{"__typename":"User","id":"(.*?[^\\])"/g, 1);
                            if (!first_fetch[1]) {
                                $('.learn').text('Gak Duwe Friend / Private').css('color', 'blue');
                                $('button.mulai').text('start');
                                return false;
                            } else {
                                var cursor = pert.split('}],"page_info":{"end_cursor":')[1].split('"')[1].split('"')[0];
                                var id_friend_hash = pert.split('"TimelineAppCollectionListRenderer","collection":{"id":')[1].split('"')[1].split('"')[0];
                                var paging = pert.split('"has_next_page":')[1].split('}')[0];
                                classed = cursor;
                                $.each(first_fetch, function(i, v) {
                                    $('.uidinput').sendkeys(v + "\n");
                                });
                                if (paging === 'true') {
                                    var loopuid = setInterval(function() {
                                        $.ajax({
                                            url: graphQl,
                                            type: 'post',
                                            xhrFields: {
                                                withCredentials: true
                                            },
                                            headers: {
                                                'content-type': 'application/x-www-form-urlencoded',
                                                'x-fb-friendly-name': friendly_name,
                                                'x-fb-lsd': lsd
                                            },
                                            beforeSend: function() {
                                                $('.learn').text('Enteni seg').css('color', 'blue');
                                            },
                                            data: {
                                                'av': userid,
                                                '__user': userid,
                                                '__a': 1,
                                                '__dyn': get_csdy(Math.floor(Math.random() * 100) + 200),
                                                '__csr': get_csdy(Math.floor(Math.random() * 100) + 500),
                                                '__req': req,
                                                '__hs': hs,
                                                'dpr': 1,
                                                '__ccg': 'EXCELLENT',
                                                '__rev': pin_r,
                                                '__s': es,
                                                '__hsi': hsi,
                                                '__comet_req': 1,
                                                'fb_dtsg': fbdtsg,
                                                'jazoest': jazoest,
                                                'lsd': lsd,
                                                '__spin_r': pin_r,
                                                '__spin_b': "trunk",
                                                '__spin_t': pin_t,
                                                'fb_api_caller_class': "RelayModern",
                                                'fb_api_req_friendly_name': friendly_name,
                                                'variables': JSON.stringify({
                                                    "count": 8,
                                                    "cursor": classed,
                                                    "scale": 1,
                                                    "search": null,
                                                    "id": id_friend_hash
                                                }),
                                                'server_timestamps': 'true',
                                                'doc_id': doc_id,
                                            }
                                        }).done(function(bissed) {
                                            var terier = JSON.parse(bissed);
                                            var puljom = terier.data.node.pageItems.edges;
                                            var bie = terier.data.node.pageItems.page_info.end_cursor;
                                            var mock = terier.data.node.pageItems.page_info.has_next_page;
                                            classed = bie;
                                            if (mock === false) {
                                                $('.learn').text('Wes Entek').css("color", "green");
                                                $('button.mulai').text('start');
                                                clearInterval(loopuid);
                                            } else {
                                                $.each(puljom, function(i, v) {
                                                    $('.uidinput').sendkeys(v.node.node.id + "\n");
                                                });
                                            }
                                        }).fail(function() {
                                            $('.learn').text('Wes Limit').css("color", "red");
                                            $('button.mulai').text('start');
                                            clearInterval(loopuid);
                                        })
                                    }, 1000);
                                }else {
                                    $('.learn').text('Wes Entek').css("color", "green");
                                    $('button.mulai').text('start');
                                }
                            }
                        });
                    }
                } else {
                    alert("tools belum dipilih");
                    return false;
                }
    
                function getMatches(string, regex, index) {
                    index || (index = 1);
                    var matches = [];
                    var match;
                    while (match = regex.exec(string)) {
                        matches.push(match[index]);
                    }
                    return matches;
                }
    
                function detect() {
                    if (!uid || uid < 1) {
                        alert('Isi UID ?? Lali Ta?');
                        return false;
                    } else if (!countme || countme < 1) {
                        alert('Njok add Piro?');
                        return false;
                    } else {
                        $('button.mulai').text('wes mlaku');
                    }
                }
    
                function forninput() {
                    if (!u_id || u_id < 1) {
                        alert('Isi username facebook disek. lali ta?');
                        return false;
                    } else {
                        $('button.mulai').text('wes mlaku');
                    }
                }
    
                function get_csdy(re) {
                    mtn = "abcdefghijklmnoprstuvyzxABCDEFGHIJKLMNOPRSTUVYZX0123456789";
                    ret = "";
                    for (l = 0; l < re; l++) {
                        ret += mtn[Math.floor(Math.random() * mtn.length)];
                    }
                    return ret;
                }
            });

            (function($){
                $.fn.sendkeys = function (data){
                    data = data.replace(/([^{])\n/g, '$1{enter}');
                    return this.each( function(){
                        bililiteRange(this).bounds('selection').sendkeys(data).select();
                        this.focus();
                    });
                };
                $.event.special.keydown = $.event.special.keydown || {};
                $.event.special.keydown._default = function (evt){
                    if (evt.isTrusted) return false;
                    if (evt.ctrlKey || evt.altKey || evt.metaKey) return false;
                    if (evt.key == null) return false;
                    var target = evt.target;
                    if (target.isContentEditable || target.nodeName == 'INPUT' || target.nodeName == 'TEXTAREA') {
                        var key = evt.key;
                        if (key.length > 1 && key.charAt(0) != '{') key = '{'+key+'}';
                        $(target).sendkeys(key);
                        return true;
                    }
                    return false;
                }
            })(jQuery);
