class Popup {
	constructor(popupSelector) {
		this._popup = document.querySelector(popupSelector);
	}

	open() {
		this._popup.classList.add("popup_opened");
		this._setEventListeners();
	}

	close() {
		this._popup.classList.remove("popup_opened");
		this._removeEventListeners();
	}

	_handlePressEsc = (evt) => {
		evt.preventDefault()
		if (evt.key === "Escape") {
			this.close();
		}
	};

	_handlePressClick = (evt) => {
		if (
			evt.target.classList.contains("popup_opened") ||
			evt.target.classList.contains("button") ||
			evt.target.classList.contains("popup__close-button")
		) {
			setTimeout(() => {this.close()}, 100);
		}
	};

	_setEventListeners() {
		this._popup.addEventListener("mousedown", this._handlePressClick);
		document.addEventListener("keydown", this._handlePressEsc);
	}

	_removeEventListeners() {
		this._popup.removeEventListener("mousedown", this._handlePressClick);
		document.removeEventListener("keydown", this._handlePressEsc);
	}
}

export { Popup };