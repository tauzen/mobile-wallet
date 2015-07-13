'use strict';

/* globals ErrorView, addMixin, ObserverSubjectMixin */
/* exported AppView */

(function(exports) {
  var AppView = function(mainViewId, errorViewId) {
    this._mainEl = document.querySelector('#' + mainViewId);

    this._errorView = new ErrorView(errorViewId);
    this._errorView.addListener(this);

    var settingsBtn = this._mainEl.querySelector('#settings-edit');
    settingsBtn.addEventListener('click', () => this._settingsClicked());

    this._nfcIndicator = this._mainEl.querySelector('#indicator-nfc');

    addMixin(this, ObserverSubjectMixin);
  };

  AppView.prototype = {
    _mainEl: null,
    _errorView: null,
    _nfcIndicator: null,

    showMainView: function showMainView() {
      this._mainEl.classList.remove('hide');
      this._errorView.hide();
    },

    hideMainView: function hideMainView() {
      this._mainEl.classList.add('hide');
    },

    showErrorView: function showErrorView(error) {
      this._errorView.handleError(error);
      this.hideMainView();
    },

    hideErrorView: function hideErrorView() {
      this._errorView.hide();
    },

    showNfcDisabled: function showNfcDisabled() {
      var handler = () => {
        this._nfcIndicator.removeEventListener('animationend', handler);
        this._nfcIndicator.classList.remove('animation-blink');
      }

      if(!this._nfcIndicator.classList.contains('animation-blink')) {
        this._nfcIndicator.addEventListener('animationend', handler);
        this._nfcIndicator.classList.add('animation-blink');
      }
    },

    onEvent: function onEvent(id, data) {
      if(data.action === 'open-settings') {
        this._settingsClicked();
      }
    },

    _settingsClicked: function _settingsClicked() {
      this._notify({ action: 'open-settings' });
    },
  },

  exports.AppView = AppView;
}((typeof exports === 'undefined') ? window : exports));
