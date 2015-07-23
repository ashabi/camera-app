(function ($window, $document){


	var inputElem = $document.querySelector("#capture");
	var ul = $document.querySelector("#photos");

	inputElem.addEventListener("change", uploadFiles, false);

	function uploadFiles() {
		var fileList = this.files;

		var li = $document.createElement("li");
		var link = $document.createElement("a");
		var img = $document.createElement("img");

		link.appendChild(img);

		li.appendChild(link);

		ul.appendChild(li);

		for (var i = 0; i < fileList.length; i++) {
			var file = fileList[i];
			file.alt = fileList[i].name;
			var reader  = new FileReader();

			reader.onloadend = function () {
				img.src = reader.result;
			}

			if (file) {
				reader.readAsDataURL(file);
			} else {
				img.src = "";
			}

	      }
		}
	

}(window, window.document));