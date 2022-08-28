"use strict";
!(function () {
  if (
    !window.TradingView ||
    !window.TradingView.host ||
    window.TradingView.reoloadTvjs
  ) {
    var e,
      t,
      o,
      i,
      n,
      r,
      s,
      a = {
        "color-gull-gray": "#9db2bd",
        "color-brand": "#2962FF",
        "color-brand-hover": "#1E53E5",
        "color-brand-active": "#1848CC",
      },
      d =
        "-apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif",
      l = {
        host:
          null ==
          window.location.host.match(/tradingview\.com|pyrrosinvestment\.com/i)
            ? "https://s.tradingview.com"
            : "https://www.tradingview.com",
        ideasHost: "https://www.tradingview.com",
        chatHost: "https://www.tradingview.com",
        widgetHost: "https://www.tradingview-widget.com",
        getHost: function (e) {
          return e.useWidgetHost ? l.widgetHost : l.host;
        },
        embedStylesForCopyright: function () {
          const e = document.createElement("style");
          return (
            (e.innerHTML =
              ".tradingview-widget-copyright {font-size: 13px !important; line-height: 32px !important; text-align: center !important; vertical-align: middle !important; font-family: " +
              d +
              " !important; color: " +
              a["color-gull-gray"] +
              " !important;} .tradingview-widget-copyright .blue-text {color: " +
              a["color-brand"] +
              " !important;} .tradingview-widget-copyright a {text-decoration: none !important; color: " +
              a["color-gull-gray"] +
              " !important;} .tradingview-widget-copyright a:visited {color: " +
              a["color-gull-gray"] +
              " !important;} .tradingview-widget-copyright a:hover .blue-text {color: " +
              a["color-brand-hover"] +
              " !important;} .tradingview-widget-copyright a:active .blue-text {color: " +
              a["color-brand-active"] +
              " !important;} .tradingview-widget-copyright a:visited .blue-text {color: " +
              a["color-brand"] +
              " !important;}"),
            e
          );
        },
        embedStylesForFullHeight: function (e, t, o) {
          const i = t ? "calc(" + e + " - 32px)" : e,
            n = document.querySelector("#" + o);
          (n.parentElement.style.height = i), (n.style.height = "100%");
        },
        gId: function () {
          return (
            "tradingview_" +
            ((1048576 * (1 + Math.random())) | 0).toString(16).substring(1)
          );
        },
        isPersentHeight: function (e) {
          return "%" === e;
        },
        getSuffix: function (e) {
          const t = e.toString().match(/(%|px|em|ex)/);
          return t ? t[0] : "px";
        },
        hasCopyright: function (e) {
          const t = document.getElementById(e),
            o = t && t.parentElement;
          return !!o && !!o.querySelector(".tradingview-widget-copyright");
        },
        calculateWidgetHeight: function (e, t) {
          const o = parseInt(e),
            i = this.getSuffix(e),
            n = this.isPersentHeight(i),
            r = t && this.hasCopyright(t);
          return n && t && (this.embedStylesForFullHeight(o + i, r, t), r)
            ? 100 + i
            : r
            ? "calc(" + o + i + " - 32px)"
            : o + i;
        },
        onready: function (e) {
          window.addEventListener
            ? window.addEventListener("DOMContentLoaded", e, !1)
            : window.attachEvent("onload", e);
        },
        css: function (e) {
          let t,
            o = document.getElementsByTagName("head")[0],
            i = document.createElement("style");
          (i.type = "text/css"),
            i.styleSheet
              ? (i.styleSheet.cssText = e)
              : ((t = document.createTextNode(e)), i.appendChild(t)),
            o.appendChild(i);
        },
        bindEvent: function (e, t, o) {
          e.addEventListener
            ? e.addEventListener(t, o, !1)
            : e.attachEvent && e.attachEvent("on" + t, o);
        },
        unbindEvent: function (e, t, o) {
          e.removeEventListener
            ? e.removeEventListener(t, o, !1)
            : e.detachEvent && e.detachEvent("on" + t, o);
        },
        cloneSimpleObject: function (e) {
          if (null == e || "object" != typeof e) return e;
          const t = e.constructor();
          for (const o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
          return t;
        },
        isArray: function (e) {
          return "[object Array]" === Object.prototype.toString.call(e);
        },
        isMobileDevice:
          ((e = {
            Android: /Android/i.test(navigator.userAgent),
            BlackBerry: /BlackBerry/i.test(navigator.userAgent),
            iOS: /iPhone|iPad|iPod/i.test(navigator.userAgent),
            Opera: /Opera Mini/i.test(navigator.userAgent),
          }),
          (e.any = e.Android || e.BlackBerry || e.iOS || e.Opera),
          e),
        generateUtmForUrlParams: function (e) {
          return (
            "utm_source=" +
            encodeURI(window.location.hostname) +
            "&utm_medium=" +
            (l.hasCopyright(e.container) ? "widget_new" : "widget") +
            (e.type ? "&utm_campaign=" + e.type : "") +
            (e.type && "chart" === e.type
              ? "&utm_term=" + encodeURIComponent(e.symbol)
              : "")
          );
        },
        WidgetAbstract: function () {},
        MiniWidget: function (e) {
          (this.id = l.gId()),
            (this.options = {
              whitelabel: e.whitelabel || "",
              width: l.WidgetAbstract.prototype.fixSize(e.width) || 300,
              height: l.WidgetAbstract.prototype.fixSize(e.height) || 400,
              symbols: e.symbols,
              tabs: e.tabs || "",
              symbols_description: e.symbols_description || "",
              customer: e.customer || "",
              container: e.container_id || "",
              greyText: e.greyText || "",
              large_chart_url: e.large_chart_url || "",
              large_chart_target: e.large_chart_target || "",
              gridLineColor: e.gridLineColor || "",
              fontColor: e.fontColor || "",
              underLineColor: e.underLineColor || "",
              underLineBottomColor: e.underLineBottomColor || "",
              trendLineColor: e.trendLineColor || "",
              timeAxisBackgroundColor: e.timeAxisBackgroundColor || "",
              activeTickerBackgroundColor: e.activeTickerBackgroundColor || "",
              noGraph: e.noGraph || !1,
              locale: e.locale,
              styleTickerActiveBg: e.styleTickerActiveBg || "",
              styleTabActiveBorderColor: e.styleTabActiveBorderColor || "",
              styleTickerBodyFontSize: e.styleTickerBodyFontSize || "",
              styleTickerBodyFontWeight: e.styleTickerBodyFontWeight || "",
              styleTickerHeadFontSize: e.styleTickerHeadFontSize || "",
              styleTickerHeadFontWeight: e.styleTickerHeadFontWeight || "",
              styleTickerChangeDownColor: e.styleTickerChangeDownColor || "",
              styleTickerChangeUpColor: e.styleTickerChangeUpColor || "",
              styleTickerLastDownBg: e.styleTickerLastDownBg || "",
              styleTickerLastUpBg: e.styleTickerLastUpBg || "",
              styleTickerSymbolColor: e.styleTickerSymbolColor || "",
              styleTickerSymbolHoverTextDecoration:
                e.styleTickerSymbolHoverTextDecoration || "",
              styleTickerActiveSymbolTextDecoration:
                e.styleTickerActiveSymbolTextDecoration || "",
              styleTabsActiveBorderColor: e.styleTabsActiveBorderColor || "",
              styleTabsNoBorder: e.styleTabsNoBorder || "",
              styleWidgetNoBorder: e.styleWidgetNoBorder || "",
              useWidgetHost: Boolean(e.useWidgetHost),
            }),
            this.createWidget();
        },
        MediumWidget: function (e) {
          this.id = l.gId();
          const t = l.calculateWidgetHeight(e.height || 400, e.container_id);
          let o;
          switch (e.chartType) {
            case "candlesticks": {
              const {
                chartType: t,
                upColor: i,
                downColor: n,
                borderUpColor: r,
                borderDownColor: s,
                wickUpColor: a,
                wickDownColor: d,
              } = e;
              o = {
                chartType: t,
                upColor: i,
                downColor: n,
                borderUpColor: r,
                borderDownColor: s,
                wickUpColor: a,
                wickDownColor: d,
              };
              break;
            }
            case "bars": {
              const { chartType: t, upColor: i, downColor: n } = e;
              o = { chartType: t, upColor: i, downColor: n };
              break;
            }
            case "line": {
              const { chartType: t, color: i, lineWidth: n } = e;
              o = { chartType: t, color: i, lineWidth: n };
              break;
            }
            case "area":
            default: {
              const {
                chartType: t = "area",
                lineColor: i = e.trendLineColor || "",
                topColor: n = e.underLineColor || "",
                bottomColor: r = e.underLineBottomColor || "",
                lineWidth: s,
              } = e;
              o = {
                chartType: t,
                lineColor: i,
                topColor: n,
                bottomColor: r,
                lineWidth: s,
              };
              break;
            }
          }
          (this.options = {
            container: e.container_id || "",
            width: l.WidgetAbstract.prototype.fixSize(e.width) || "",
            height: l.WidgetAbstract.prototype.fixSize(t) || "",
            symbols: e.symbols,
            greyText: e.greyText || "",
            symbols_description: e.symbols_description || "",
            large_chart_url: e.large_chart_url || "",
            customer: e.customer || "",
            gridLineColor: e.gridLineColor || "",
            fontColor: e.fontColor || "",
            timeAxisBackgroundColor: e.timeAxisBackgroundColor || "",
            chartOnly: !!e.chartOnly,
            locale: e.locale,
            whitelabel: !!e.whitelabel || "",
            colorTheme: e.colorTheme,
            isTransparent: e.isTransparent,
            useWidgetHost: Boolean(e.useWidgetHost),
            showFloatingTooltip: e.showFloatingTooltip,
            valuesTracking: e.valuesTracking,
            showVolume: e.showVolume,
            hideDateRanges: e.hideDateRanges,
            scalePosition: e.scalePosition,
            scaleMode: e.scaleMode,
            fontFamily: e.fontFamily,
            noTimeScale: e.noTimeScale,
            ...o,
          }),
            this.createWidget();
        },
        widget: function (e) {
          this.id = e.id || l.gId();
          let t = l.getUrlParams(),
            o =
              e.tvwidgetsymbol ||
              t.tvwidgetsymbol ||
              t.symbol ||
              e.symbol ||
              "NASDAQ:AAPL",
            i = e.logo || "";
          i.src && (i = i.src), i && i.replace(".png", "");
          const n = l.calculateWidgetHeight(e.height || 500, e.container_id);
          (this.options = {
            whitelabel: e.whitelabel || "",
            width: e.width || 800,
            height: n,
            symbol: o,
            interval: e.interval || "1",
            range: e.range || "",
            timezone: e.timezone || "",
            autosize: e.autosize,
            hide_top_toolbar: e.hide_top_toolbar,
            hide_side_toolbar: e.hide_side_toolbar,
            hide_legend: e.hide_legend,
            allow_symbol_change: e.allow_symbol_change,
            save_image: void 0 === e.save_image || e.save_image,
            container: e.container_id || "",
            toolbar_bg: e.toolbar_bg || "f4f7f9",
            watchlist: e.watchlist || [],
            editablewatchlist: !!e.editablewatchlist,
            studies: e.studies || [],
            theme: e.theme || "",
            style: e.style || "",
            extended_hours:
              void 0 === e.extended_hours ? void 0 : +e.extended_hours,
            details: !!e.details,
            calendar: !!e.calendar,
            hotlist: !!e.hotlist,
            hideideas: !!e.hideideas,
            hideideasbutton: !!e.hideideasbutton,
            widgetbar_width: +e.widgetbar_width || void 0,
            withdateranges: e.withdateranges || "",
            customer: e.customer || i || "",
            venue: e.venue,
            symbology: e.symbology,
            logo: i,
            show_popup_button: !!e.show_popup_button,
            popup_height: e.popup_height || "",
            popup_width: e.popup_width || "",
            studies_overrides: e.studies_overrides,
            overrides: e.overrides,
            enabled_features: e.enabled_features,
            disabled_features: e.disabled_features,
            publish_source: e.publish_source || "",
            enable_publishing: e.enable_publishing,
            whotrades: e.whotrades || void 0,
            locale: e.locale,
            referral_id: e.referral_id,
            no_referral_id: e.no_referral_id,
            fundamental: e.fundamental,
            percentage: e.percentage,
            hidevolume: e.hidevolume,
            padding: e.padding,
            greyText: e.greyText || "",
            horztouchdrag: e.horztouchdrag,
            verttouchdrag: e.verttouchdrag,
            useWidgetHost: Boolean(e.useWidgetHost),
          }),
            e.cme && (this.options.customer = "cme"),
            isFinite(e.widgetbar_width) &&
              e.widgetbar_width > 0 &&
              (this.options.widgetbar_width = e.widgetbar_width),
            (this._ready_handlers = []),
            this.create();
        },
        chart: function (e) {
          (this.id = l.gId()),
            (this.options = {
              width: e.width || 640,
              height: e.height || 500,
              container: e.container_id || "",
              realtime: e.realtime,
              chart: e.chart,
              locale: e.locale,
              type: "chart",
              autosize: e.autosize,
              mobileStatic: e.mobileStatic,
            }),
            (this._ready_handlers = []),
            this.create();
        },
        stream: function (e) {
          (this.id = l.gId()),
            (this.options = {
              width: e.width || 640,
              height: e.height || 500,
              container: e.container_id || "",
              stream: e.stream,
              locale: e.locale,
              autosize: e.autosize,
            }),
            this.create();
        },
        EventsWidget: function (e) {
          (this.id = l.gId()),
            (this.options = {
              container: e.container_id || "",
              width: e.width || 486,
              height: e.height || 670,
              currency: e.currencyFilter || "",
              importance: e.importanceFilter || "",
              type: "economic-calendar",
            }),
            this.createWidget(e);
        },
        IdeasStreamWidget: function (e) {
          (this.id = l.gId()),
            (this.options = {
              container: e.container_id || "",
              width: e.width || 486,
              height: e.height || 670,
              symbol: e.symbol || "",
              username: e.username || "",
              mode: e.mode || "",
              publishSource: e.publishSource || "",
              sort: e.sort || "trending",
              stream: e.stream,
              waitSymbol: e.waitSymbol,
              hideDescription: e.hideDescription,
              startingCount: e.startingCount,
              bgColor: e.bgColor || "",
              headerColor: e.headerColor || "",
              borderColor: e.borderColor || "",
              locale: e.locale,
              type: "ideas-stream",
              useWidgetHost: Boolean(e.useWidgetHost),
            }),
            (this._ready_handlers = []),
            this.createWidget();
        },
        IdeaWidget: function (e) {
          (this.id = l.gId()),
            (this.options = {
              container: e.container_id || "",
              width: e.width || 486,
              height: e.height || 670,
              idea: e.idea || "",
              chartUrl: e.chartUrl || "",
              whotrades: e.whotrades || void 0,
              locale: e.locale,
              type: "idea",
            }),
            this.createWidget(e);
        },
        ChatWidgetEmbed: function (e) {
          (this.id = l.gId()),
            (this.options = {
              container: e.container_id || "",
              width: e.width || 400,
              height: e.height || 500,
              room: e.room || "",
              whotrades: e.whotrades || void 0,
              locale: e.locale,
              type: "chat-embed",
            }),
            this.createWidget(e);
        },
      };
    (l.WidgetAbstract.prototype = {
      fixSize: function (e) {
        return /^[0-9]+(\.|,[0-9])*$/.test(e) ? e + "px" : e;
      },
      width: function () {
        return this.options.autosize
          ? "100%"
          : l.WidgetAbstract.prototype.fixSize(this.options.width);
      },
      height: function () {
        return this.options.autosize
          ? "100%"
          : l.WidgetAbstract.prototype.fixSize(this.options.height);
      },
      addWrapperFrame: function (e, t, o) {
        const i = l.WidgetAbstract.prototype.height.call(this),
          n = l.WidgetAbstract.prototype.width.call(this);
        o = o || "transparent";
        return (
          '<div id="' +
          this.id +
          '-wrapper" style="position: relative;box-sizing: content-box;width: ' +
          n +
          ";height: " +
          i +
          ";margin: 0 auto !important;padding: 0 !important;font-family: " +
          d +
          ';"><div style="width: ' +
          n +
          ";height: " +
          i +
          ";background: " +
          o +
          ';padding: 0 !important;">' +
          e +
          "</div>" +
          (t || "") +
          "</div>"
        );
      },
      addFooterLogo: function (e, t) {
        const o = (t || {}).greyText || "powered by",
          i = (t || {}).linkText || "tradingview.com",
          n = (t || {}).href || "https://www.tradingview.com/";
        return l.WidgetAbstract.prototype.addWrapperFrame.call(
          this,
          e,
          '<div style="position:absolute;display: block;box-sizing: content-box;height: 24px;width: ' +
            l.WidgetAbstract.prototype.width.call(this) +
            ";bottom: 0;left: 0;margin: 0;padding: 0;font-family: " +
            d +
            ';"><div style="display: block;margin: 0 1px 1px 1px;line-height: 7px;box-sizing: content-box;height: 11px;padding: 6px 10px;text-align: right;background: #fff;"><a href="' +
            n +
            "?" +
            l.generateUtmForUrlParams(this.options) +
            '" target="_blank" style="color: #0099d4;text-decoration: none;font-size: 11px;"><span style="color: #b4b4b4;font-size: 11px;">' +
            o +
            "</span> " +
            i +
            "</a></div></div>",
          "#fff"
        );
      },
    }),
      (l.ChatWidgetEmbed.prototype = {
        createWidget: function () {
          let e = this.widgetCode();
          (e = l.WidgetAbstract.prototype.addFooterLogo.call(this, e)),
            h(e, this.options.container);
        },
        widgetCode: function () {
          const e = this.options.room
              ? "#" + encodeURIComponent(this.options.room)
              : "",
            t =
              "&" +
              l.createUrlParams({
                whotrades: this.options.whotrades,
                locale: this.options.locale,
              }),
            o = l.generateUtmForUrlParams(this.options, {
              type: "UserInfoWidget",
            });
          return (
            '<iframe src="' +
            (l.chatHost + "/chatwidgetembed/?" + o + t + e) +
            '"' +
            (this.options.width ? ' width="' + this.options.width + '"' : "") +
            (this.options.height
              ? ' height="' + this.options.height + '"'
              : "") +
            ' frameborder="0" allowTransparency="true" scrolling="no"></iframe>'
          );
        },
      }),
      (l.IdeaWidget.prototype = {
        createWidget: function () {
          const e = this.widgetCode();
          h(e, this.options.container);
          const t = this,
            o = document.getElementById(this.id);
          (this.postMessage = l.postMessageWrapper(o.contentWindow, this.id)),
            this.postMessage.on(
              "resize",
              function (e) {
                e.id === t.id && (o.style.height = e.height + "px");
              },
              !0
            );
        },
        widgetCode: function () {
          const e = l.createUrlParams({
            id: this.id,
            width: this.options.width,
            height: this.options.height,
            idea: this.options.idea,
            chart_url: this.options.chartUrl,
            whotrades: this.options.whotrades,
            locale: this.options.locale,
          });
          this.options.type = "idea";
          const t = "&" + l.generateUtmForUrlParams(this.options),
            o = l.ideasHost + "/idea-popup/?" + e + t;
          return (
            '<iframe id="' +
            this.id +
            '" src="' +
            o +
            '" width="' +
            this.options.width +
            '"' +
            (this.options.height
              ? ' height="' + this.options.height + '"'
              : "") +
            ' frameborder="0" allowTransparency="true" scrolling="no"></iframe>'
          );
        },
        getSymbol: function (e) {
          this.postMessage.on("symbolInfo", e);
        },
      }),
      (l.EventsWidget.prototype = {
        createWidget: function () {
          const e = this.widgetCode();
          h(e, this.options.container);
        },
        widgetCode: function () {
          const e = l.createUrlParams({
            currency: this.options.currency,
            importance: this.options.importance,
          });
          this.options.type = "events";
          const t = "&" + l.generateUtmForUrlParams(this.options);
          return (
            '<iframe src="' +
            (l.getHost(this.options) + "/eventswidgetembed/?" + e + t) +
            '" width="' +
            this.options.width +
            '"' +
            (this.options.height
              ? ' height="' + this.options.height + '"'
              : "") +
            ' frameborder="0" scrolling="no"></iframe>'
          );
        },
      }),
      (l.IdeasStreamWidget.prototype = {
        createWidget: function () {
          const e = this.widgetCode();
          h(e, this.options.container);
          const t = this,
            o = document.getElementById(this.id);
          (this.postMessage = l.postMessageWrapper(o.contentWindow, this.id)),
            l.bindEvent(o, "load", function () {
              t._ready = !0;
              for (let e = t._ready_handlers.length; e--; )
                t._ready_handlers[e].call(t);
            }),
            t.postMessage.on(
              "resize",
              function (e) {
                if (e.id === t.id) {
                  const i = Math.max(e.height, 450);
                  o.style.height = i + "px";
                }
              },
              !0
            );
        },
        widgetCode: function () {
          const e = this.options,
            t = l.createUrlParams({
              id: this.id,
              width: e.width,
              height: e.height,
              symbol: e.symbol,
              username: e.username,
              mode: e.mode,
              publish_source: e.publishSource,
              sort: e.sort,
              stream: e.stream,
              wait_symbol: e.waitSymbol,
              hide_desc: e.hideDescription,
              s_count: e.startingCount,
              bg_color: e.bgColor,
              h_color: e.headerColor,
              borderColor: e.borderColor,
              locale: e.locale,
              useWidgetHost: Boolean(e.useWidgetHost),
            }),
            o = l.generateUtmForUrlParams(this.options) + "&",
            i = l.getHost(e) + "/ideaswidgetembed/?" + o + t;
          return (
            '<iframe id="' +
            this.id +
            '" src="' +
            i +
            '" width="' +
            e.width +
            '"' +
            (e.height ? ' height="' + e.height + '"' : "") +
            ' frameborder="0" allowTransparency="true" scrolling="no"></iframe>'
          );
        },
        setSymbol: function (e) {
          const t = document.getElementById(this.id);
          this.postMessage.post(t.contentWindow, "setSymbol", e);
        },
        ready: function (e) {
          this._ready ? e.call(this) : this._ready_handlers.push(e);
        },
      }),
      (l.MiniWidget.prototype = {
        createWidget: function () {
          let e = this.widgetCode(),
            t = this.options;
          if (!t.noLogoOverlay && !t.whitelabel) {
            const o = this.options.greyText || "Quotes by";
            e = l.WidgetAbstract.prototype.addFooterLogo.call(this, e, {
              greyText: o,
              linkText: "TradingView",
            });
          }
          h(e, t.container);
        },
        widgetCode: function () {
          let e = "",
            t = "",
            o = "",
            i = "/miniwidgetembed/",
            n = this.options.width
              ? "&width=" + encodeURIComponent(this.options.width)
              : "",
            r = this.options.height
              ? "&height=" + encodeURIComponent(this.options.height)
              : "",
            s = this.options.noGraph
              ? "&noGraph=" + encodeURIComponent(this.options.noGraph)
              : "",
            a = this.options.locale
              ? "&locale=" + encodeURIComponent(this.options.locale)
              : "",
            d = this.options.whitelabel ? "&whitelabel=1" : "";
          this.options.type = "market-overview";
          for (
            var h = "&" + l.generateUtmForUrlParams(this.options),
              c = [
                "large_chart_url",
                "large_chart_target",
                "gridLineColor",
                "fontColor",
                "underLineColor",
                "underLineBottomColor",
                "trendLineColor",
                "activeTickerBackgroundColor",
                "timeAxisBackgroundColor",
                "locale",
                "styleTickerActiveBg",
                "styleTabActiveBorderColor",
                "styleTickerBodyFontSize",
                "styleTickerBodyFontWeight",
                "styleTickerHeadFontSize",
                "styleTickerHeadFontWeight",
                "styleTickerChangeDownColor",
                "styleTickerChangeUpColor",
                "styleTickerLastDownBg",
                "styleTickerLastUpBg",
                "styleTickerSymbolColor",
                "styleTickerSymbolHoverTextDecoration",
                "styleTickerActiveSymbolTextDecoration",
                "styleTabsActiveBorderColor",
                "styleTabsNoBorder",
                "styleWidgetNoBorder",
              ],
              p = "",
              g = c.length - 1;
            g >= 0;
            g--
          ) {
            const m = c[g],
              u = this.options[m];
            p += u ? "&" + m + "=" + encodeURIComponent(u) : "";
          }
          const y = function (e) {
            for (var t = [], i = 0; i < e.length; i++) {
              const n = e[i];
              if (l.isArray(n)) {
                const r = encodeURIComponent(n[0]),
                  s = encodeURIComponent(n[1]);
                t.push(r), (o += "&" + r + "=" + s);
              } else "string" == typeof n && t.push(encodeURIComponent(n));
            }
            return t.join(",");
          };
          if (this.options.tabs) {
            g = 0;
            for (let w = this.options.tabs.length; g < w; g++) {
              const b = this.options.tabs[g];
              this.options.symbols[b] &&
                (e +=
                  (e ? "&" : "") +
                  encodeURIComponent(b) +
                  "=" +
                  y(this.options.symbols[b]));
            }
            t = "&tabs=" + encodeURIComponent(this.options.tabs.join(","));
          } else
            this.options.symbols && (e = "symbols=" + y(this.options.symbols));
          if (this.options.symbols_description)
            for (const f in this.options.symbols_description)
              o +=
                "&" +
                encodeURIComponent(f) +
                "=" +
                encodeURIComponent(this.options.symbols_description[f]);
          this.options.customer && (i = "/" + this.options.customer + i);
          const v =
            l.getHost(this.options) +
            i +
            "?" +
            e +
            t +
            o +
            p +
            n +
            r +
            s +
            a +
            d +
            h;
          return (
            '<iframe id="' +
            this.id +
            '" src="' +
            v +
            '" width="' +
            this.options.width +
            '"' +
            (this.options.height
              ? ' height="' + this.options.height + '"'
              : "") +
            ' frameborder="0" allowTransparency="true" scrolling="no" style="margin: 0 !important; padding: 0 !important;"></iframe>'
          );
        },
        remove: function () {
          const e = document.getElementById("tradingview_widget");
          e.parentNode.removeChild(e);
        },
      }),
      (l.MediumWidget.prototype = {
        createWidget: function () {
          const e = this.widgetCode();
          h(e, this.options.container);
        },
        widgetCode: function () {
          let e = "",
            t =
              "symbols=" +
              (function (t) {
                for (var o = [], i = 0; i < t.length; i++) {
                  const n = t[i];
                  if (l.isArray(n)) {
                    const r = encodeURIComponent(n[0]),
                      s = encodeURIComponent(n[1]);
                    o.push(r), 2 === n.length && (e += "&" + r + "=" + s);
                  } else "string" == typeof n && o.push(encodeURIComponent(n));
                }
                return o.join(",");
              })(this.options.symbols),
            o = "&width=" + encodeURIComponent(this.options.width),
            i = "&height=" + encodeURIComponent(this.options.height),
            n = "&colorTheme=" + encodeURIComponent(this.options.colorTheme);
          this.options.type = "symbol-overview";
          const r = "&" + l.generateUtmForUrlParams(this.options);
          for (
            var s = [
                "gridLineColor",
                "fontColor",
                "underLineColor",
                "underLineBottomColor",
                "trendLineColor",
                "activeTickerBackgroundColor",
                "timeAxisBackgroundColor",
                "locale",
                "scalePosition",
                "scaleMode",
                "chartType",
                "color",
                "lineColor",
                "topColor",
                "bottomColor",
                "upColor",
                "downColor",
                "borderUpColor",
                "borderDownColor",
                "wickUpColor",
                "wickDownColor",
                "fontFamily",
                "noTimeScale",
                "valuesTracking",
                "lineWidth",
              ],
              a = "",
              d = s.length - 1;
            d >= 0;
            d--
          ) {
            const h = s[d],
              c = this.options[h];
            a += c ? "&" + h + "=" + encodeURIComponent(c) : "";
          }
          let p = this.options.chartOnly ? "&chartOnly=1" : "",
            g = this.options.whitelabel ? "&whitelabel=1" : "",
            m = this.options.isTransparent ? "&isTransparent=1" : "",
            u = this.options.showFloatingTooltip
              ? "&showFloatingTooltip=1"
              : "",
            y = this.options.showVolume ? "&showVolume=1" : "",
            w = this.options.hideDateRanges ? "&hideDateRanges=1" : "",
            b = "/mediumwidgetembed/";
          this.options.customer && (b = "/" + this.options.customer + b);
          const f =
            l.getHost(this.options) +
            b +
            "?" +
            t +
            e +
            a +
            p +
            g +
            o +
            i +
            n +
            m +
            r +
            u +
            y +
            w;
          return (
            '<iframe id="' +
            this.id +
            '" src="' +
            f +
            '" style="margin: 0 !important; padding: 0 !important; ' +
            (this.options.width ? "width: " + this.options.width + "; " : "") +
            (this.options.height
              ? "height: " + this.options.height + ";"
              : "") +
            '" frameborder="0" allowTransparency="true" scrolling="no"></iframe>'
          );
        },
        remove: function () {
          const e = document.getElementById("tradingview_widget");
          e.parentNode.removeChild(e);
        },
      }),
      (l.widget.prototype = {
        create: function () {
          this.options.type = this.options.fundamental
            ? "fundamental"
            : "chart";
          let e = this.render(),
            t = this;
          this.options.noLogoOverlay ||
            (e = l.WidgetAbstract.prototype.addWrapperFrame.call(this, e)),
            h(e, this.options.container);
          const o = document.getElementById("tradingview-copyright");
          o && o.parentElement && o.parentElement.removeChild(o),
            (this.iframe = document.getElementById(this.id)),
            (this.postMessage = l.postMessageWrapper(
              this.iframe.contentWindow,
              this.id
            )),
            l.bindEvent(this.iframe, "load", function () {
              t.postMessage.get("widgetReady", {}, function () {
                let e;
                for (t._ready = !0, e = t._ready_handlers.length; e--; )
                  t._ready_handlers[e].call(t);
              });
            }),
            t.postMessage.on("logoCreated", function (e) {
              if (e.left && e.bottom && e.width && e.height && e.href) {
                t._logoOverlay &&
                  (t._logoOverlay.parentNode.removeChild(t._logoOverlay),
                  delete t._logoOverlay);
                const o = document.createElement("a");
                e.text &&
                  ((o.textContent = e.text), (o.style.color = "transparent")),
                  (o.style.position = "absolute"),
                  (o.style.display = "inline-block"),
                  (o.style.left = e.left),
                  (o.style.bottom = e.bottom),
                  (o.style.width = e.width),
                  (o.style.height = e.height),
                  (o.style.backgroundColor = "transparent"),
                  (o.style.pointerEvents = "none"),
                  (o.href = e.href),
                  o.setAttribute("target", "_blank"),
                  (t._logoOverlay = o),
                  document.getElementById(t.id + "-wrapper").appendChild(o);
              }
            }),
            t.postMessage.on("setLogoOverlayVisibility", function (e) {
              t._logoOverlay &&
                e &&
                "boolean" == typeof e.visible &&
                (t._logoOverlay.style.display = e.visible
                  ? "inline-block"
                  : "none");
            }),
            t.postMessage.on("openChartInPopup", function (e) {
              for (
                var o = l.cloneSimpleObject(t.options),
                  i = ["symbol", "interval"],
                  n = i.length - 1;
                n >= 0;
                n--
              ) {
                const r = i[n],
                  s = e[r];
                s && (o[r] = s);
              }
              o.show_popup_button = !1;
              const a = t.options.popup_width || 900,
                d = t.options.popup_height || 600,
                h = (screen.width - a) / 2,
                c = (screen.height - d) / 2,
                p = window.open(
                  t.generateUrl(o),
                  "_blank",
                  "resizable=yes, top=" +
                    c +
                    ", left=" +
                    h +
                    ", width=" +
                    a +
                    ", height=" +
                    d
                );
              p && (p.opener = null);
            });
        },
        ready: function (e) {
          this._ready ? e.call(this) : this._ready_handlers.push(e);
        },
        render: function () {
          const e = this.generateUrl();
          return (
            '<iframe id="' +
            this.id +
            '" src="' +
            e +
            '" style="width: 100%; height: 100%; margin: 0 !important; padding: 0 !important;" frameborder="0" allowTransparency="true" scrolling="no" allowfullscreen></iframe>'
          );
        },
        generateUrl: function (e) {
          let t;
          function o(t, o) {
            return (
              (o = o || t),
              void 0 === e[t]
                ? ""
                : "&" + encodeURIComponent(o) + "=" + (e[t] ? "1" : "0")
            );
          }
          function i(t, o, i) {
            return (i = i || t), e[t] ? "&" + i + "=" + o : "";
          }
          function n(t, o, i) {
            return (
              (i = i || {}),
              "&" +
                t +
                "=" +
                (e[t]
                  ? encodeURIComponent(JSON.stringify(o))
                  : encodeURIComponent(JSON.stringify(i)))
            );
          }
          return (
            (t =
              "cme" === (e = e || this.options).customer
                ? "/cmewidgetembed/"
                : e.customer
                ? "/" + e.customer + "/widgetembed/"
                : "/widgetembed/"),
            (e.enable_publishing ? l.ideasHost : l.getHost(e)) +
              t +
              "?frameElementId=" +
              this.id +
              "&symbol=" +
              encodeURIComponent(e.symbol) +
              "&interval=" +
              encodeURIComponent(e.interval) +
              (e.range ? "&range=" + encodeURIComponent(e.range) : "") +
              (e.whitelabel ? "&whitelabel=1" : "") +
              (e.hide_top_toolbar ? "&hidetoptoolbar=1" : "") +
              (e.hide_legend ? "&hidelegend=1" : "") +
              o("hide_side_toolbar", "hidesidetoolbar") +
              o("allow_symbol_change", "symboledit") +
              o("save_image", "saveimage") +
              "&toolbarbg=" +
              e.toolbar_bg.replace("#", "") +
              (e.watchlist && e.watchlist.length && e.watchlist.join
                ? "&watchlist=" + encodeURIComponent(e.watchlist.join(""))
                : "") +
              i("editablewatchlist", "1") +
              i("details", "1") +
              i("calendar", "1") +
              i("hotlist", "1") +
              (e.studies && l.isArray(e.studies)
                ? "string" == typeof e.studies[0]
                  ? i("studies", encodeURIComponent(e.studies.join("")))
                  : n("studies", e.studies)
                : "") +
              o("horztouchdrag") +
              o("verttouchdrag") +
              i("widgetbar_width", e.widgetbar_width, "widgetbarwidth") +
              i("hideideas", "1") +
              i("theme", encodeURIComponent(e.theme)) +
              i("style", encodeURIComponent(e.style)) +
              (void 0 === e.extended_hours
                ? ""
                : "&extended_hours=" + e.extended_hours) +
              i("timezone", encodeURIComponent(e.timezone)) +
              i("hideideasbutton", "1") +
              i("withdateranges", "1") +
              i("hidevolume", "1") +
              (void 0 === e.padding ? "" : "&padding=" + e.padding) +
              i("show_popup_button", "1", "showpopupbutton") +
              n("studies_overrides", e.studies_overrides, {}) +
              n("overrides", e.overrides, {}) +
              n("enabled_features", e.enabled_features, []) +
              n("disabled_features", e.disabled_features, []) +
              (e.show_popup_button ? "&showpopupbutton=1" : "") +
              (e.publish_source
                ? "&publishsource=" + encodeURIComponent(e.publish_source)
                : "") +
              (e.enable_publishing
                ? "&enablepublishing=" + encodeURIComponent(e.enable_publishing)
                : "") +
              (e.venue ? "&venue=" + encodeURIComponent(e.venue) : "") +
              (e.symbology
                ? "&symbology=" + encodeURIComponent(e.symbology)
                : "") +
              (e.whotrades
                ? "&whotrades=" + encodeURIComponent(e.whotrades)
                : "") +
              (e.locale ? "&locale=" + e.locale : "") +
              (e.referral_id ? "&referral_id=" + e.referral_id : "") +
              (e.no_referral_id ? "&no_referral_id=1" : "") +
              (e.fundamental
                ? "&fundamental=" + encodeURIComponent(e.fundamental)
                : "") +
              (e.percentage
                ? "&percentage=" + encodeURIComponent(e.percentage)
                : "") +
              "&utm_source=" +
              encodeURI(window.location.hostname) +
              "&utm_medium=" +
              (l.hasCopyright(e.container) ? "widget_new" : "widget") +
              (e.type ? "&utm_campaign=" + e.type : "") +
              (e.type && "chart" === e.type
                ? "&utm_term=" + encodeURIComponent(e.symbol)
                : "")
          );
        },
        image: function (e) {
          this.postMessage.get("imageURL", {}, function (t) {
            const o = l.host + "/x/" + t + "/";
            e(o);
          });
        },
        subscribeToQuote: function (e) {
          const t = document.getElementById(this.id);
          this.postMessage.post(t.contentWindow, "quoteSubscribe"),
            this.postMessage.on("quoteUpdate", e);
        },
        getSymbolInfo: function (e) {
          this.postMessage.get("symbolInfo", {}, e);
        },
        remove: function () {
          const e = document.getElementById(this.id);
          e.parentNode.removeChild(e);
        },
        reload: function () {
          const e = document.getElementById(this.id),
            t = e.parentNode;
          t.removeChild(e), (t.innerHTML = this.render());
        },
      }),
      (l.chart.prototype = {
        create: function () {
          this.isMobile = l.isMobileDevice.any;
          let e,
            t = this.render(),
            o = this;
          l.chartCssAttached ||
            (l.css(this.renderCss()), (l.chartCssAttached = !0)),
            h(t, this.options.container),
            (e = document.getElementById(this.id)),
            l.bindEvent(e, "load", function () {
              let e;
              for (o._ready = !0, e = o._ready_handlers.length; e--; )
                o._ready_handlers[e].call(o);
            }),
            l.onready(function () {
              let t = !1;
              if (
                (document.querySelector &&
                  document.querySelector(
                    'a[href$="/v/' + o.options.chart + '/"]'
                  ) &&
                  (t = !0),
                !t)
              )
                for (
                  let i = document.getElementsByTagName("a"),
                    n = new RegExp("/v/" + o.options.chart + "/$"),
                    r = new RegExp(
                      "/chart/([0-9a-zA-Z:+*-/()]+)/" + o.options.chart
                    ),
                    s = 0;
                  s < i.length;
                  s++
                )
                  if (n.test(i[s].href) || r.test(i[s].href)) {
                    t = !0;
                    break;
                  }
              t && ((e.src += "#nolinks"), (e.name = "nolinks"));
            }),
            (this.postMessage = l.postMessageWrapper(e.contentWindow, this.id)),
            this.postMessage.on(
              "toggleFullscreen",
              function (t) {
                e.contentWindow === this.source && o.toggleFullscreen(t.value);
              },
              !0
            );
        },
        ready: l.widget.prototype.ready,
        renderCss: function () {
          return ".tradingview-widget {position: relative;}";
        },
        render: function () {
          const e =
              this.options.mobileStatic && this.isMobile
                ? l.host + "/embed-static/"
                : l.host + "/embed/",
            t =
              "?method=script" +
              (this.options.locale
                ? "&locale=" + encodeURIComponent(this.options.locale)
                : "");
          return (
            (this.options.type = "chart"),
            '<div class="tradingview-widget" ' +
              (this.options.autosize
                ? ' style="width: 100%; height: 100%; margin: 0 !important; padding: 0 !important;"'
                : ' style="width:' +
                  this.options.width +
                  "px; height:" +
                  this.options.height +
                  'px;"') +
              '><iframe id="' +
              this.id +
              '" src="' +
              e +
              this.options.chart +
              "/" +
              t +
              "&" +
              l.generateUtmForUrlParams(this.options) +
              '"' +
              (this.options.autosize
                ? ' style="width: 100%; height: 100%; margin: 0 !important; padding: 0 !important;"'
                : ' width="' +
                  this.options.width +
                  '" height="' +
                  this.options.height +
                  '"') +
              ' frameborder="0" allowTransparency="true" scrolling="no"></iframe></div>'
          );
        },
        toggleFullscreen: function (e) {
          const t = document.getElementById(this.id);
          e
            ? ((t.style.position = "fixed"),
              (t.style.width = "100vw"),
              (t.style.maxWidth = "100%"),
              (t.style.height = "100vh"),
              (t.style.maxHeight = "100%"),
              (t.style.left = "0px"),
              (t.style.top = "0px"),
              (t.style.zIndex = "1000000"),
              (t.style.backgroundColor = "#fff"))
            : ((t.style.position = "static"),
              this.options.autosize
                ? ((t.style.width = "100%"), (t.style.height = "100%"))
                : ((t.style.width = this.options.width + "px"),
                  (t.style.height = this.options.height + "px")),
              (t.style.maxWidth = "none"),
              (t.style.maxHeight = "none"),
              (t.style.zIndex = "auto"),
              (t.style.backgroundColor = "transparent"));
        },
        getSymbolInfo: function (e) {
          this.postMessage.get("symbolInfo", {}, e);
        },
      }),
      (l.stream.prototype = {
        create: function () {
          this.isMobile = l.isMobileDevice.any;
          const e = this.render();
          h(e, this.options.container);
        },
        render: function () {
          const e =
            "?" +
            (this.options.locale
              ? "&locale=" + encodeURIComponent(this.options.locale)
              : "");
          return (
            (this.options.type = "chart"),
            '<div class="tradingview-widget" ' +
              (this.options.autosize
                ? ' style="width: 100%; height: 100%; margin: 0 !important; padding: 0 !important;"'
                : ' style="width:' +
                  this.options.width +
                  "px; height:" +
                  this.options.height +
                  'px;"') +
              '><iframe id="' +
              this.id +
              '" src="' +
              l.host +
              this.options.stream +
              "/embed/" +
              e +
              "&" +
              l.generateUtmForUrlParams(this.options) +
              '"' +
              (this.options.autosize
                ? ' style="width: 100%; height: 100%; margin: 0 !important; padding: 0 !important;"'
                : ' width="' +
                  this.options.width +
                  '" height="' +
                  this.options.height +
                  '"') +
              ' frameborder="0" allowTransparency="true" scrolling="no"></iframe></div>'
          );
        },
      }),
      (l.postMessageWrapper =
        ((o = {}),
        (i = {}),
        (n = {}),
        (r = 0),
        (s = 0),
        window.addEventListener &&
          window.addEventListener("message", function (e) {
            let n;
            try {
              n = JSON.parse(e.data);
            } catch (e) {
              return;
            }
            if (n && n.provider && "TradingView" === n.provider)
              if (((n.source = e.source), "get" === n.type)) {
                if (!i[n.name]) return;
                i[n.name].forEach(function (e) {
                  "function" == typeof e &&
                    e.call(n, n.data, function (e) {
                      const o = {
                        id: n.id,
                        type: "on",
                        name: n.name,
                        client_id: n.client_id,
                        data: e,
                        provider: "TradingView",
                      };
                      t.postMessage(JSON.stringify(o), "*");
                    });
                });
              } else if ("on" === n.type)
                o[n.client_id] &&
                  o[n.client_id][n.id] &&
                  (o[n.client_id][n.id].call(n, n.data),
                  delete o[n.client_id][n.id]);
              else if ("post" === n.type) {
                if (!i[n.name]) return;
                i[n.name].forEach(function (e) {
                  "function" == typeof e && e.call(n, n.data, function () {});
                });
              }
          }),
        function (e, a) {
          return (
            (o[a] = {}),
            (n[a] = e),
            (t = e),
            {
              on: function (e, t, o) {
                (i[e] && o) || (i[e] = []), i[e].push(t);
              },
              off: function (e, t) {
                if (!i[e]) return !1;
                const o = i[e].indexOf(t);
                o > -1 && i[e].splice(o, 1);
              },
              get: function (e, t, i) {
                const s = {
                  id: r++,
                  type: "get",
                  name: e,
                  client_id: a,
                  data: t,
                  provider: "TradingView",
                };
                (o[a][s.id] = i), n[a].postMessage(JSON.stringify(s), "*");
              },
              post: function (e, t, o) {
                const i = {
                  id: s++,
                  type: "post",
                  name: t,
                  data: o,
                  provider: "TradingView",
                };
                e &&
                  "function" == typeof e.postMessage &&
                  e.postMessage(JSON.stringify(i), "*");
              },
            }
          );
        })),
      (l.getUrlParams = function () {
        for (
          var e = /\+/g,
            t = /([^&=]+)=?([^&]*)/g,
            o = window.location.search.substring(1),
            i = t.exec(o),
            n = function (t) {
              return decodeURIComponent(t.replace(e, " "));
            },
            r = {};
          i;

        )
          (r[n(i[1])] = n(i[2])), (i = t.exec(o));
        return r;
      }),
      (l.createUrlParams = function (e) {
        const t = [];
        for (const o in e)
          e.hasOwnProperty(o) &&
            null != e[o] &&
            t.push(encodeURIComponent(o) + "=" + encodeURIComponent(e[o]));
        return t.join("&");
      });
    var h = function (e, t) {
        const o = document.getElementById(t);
        if (o) {
          o.innerHTML = e;
          const i =
            o.parentElement &&
            o.parentElement.querySelector(".tradingview-widget-copyright");
          i && (i.style.width = o.querySelector("iframe").style.width);
        } else document.write(e);
        document.body.appendChild(l.embedStylesForCopyright());
      },
      c = function (e, t) {
        for (const o in t)
          "object" == typeof t[o] && e.hasOwnProperty(o)
            ? c(e[o], t[o])
            : (e[o] = t[o]);
        return e;
      };
    window.TradingView ? c(window.TradingView, l) : (window.TradingView = l);
  }
})();
