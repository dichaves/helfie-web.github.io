function scrollTo(sectionId) {
  document.getElementById(sectionId).scrollIntoView(true);
}

document.addEventListener("DOMContentLoaded", function () {
  var upArrow = document.getElementById("up-arrow");
  var downArrow = document.getElementById("down-arrow");
  var sectionAnchors = document.getElementsByClassName('header-section-anchor');
  var sectionIds = Array.prototype.map.call(document.getElementsByClassName('section'), function (element) {
    return element.id;
  });

  var sectionIndex;

  setSectionIndex(0);

  upArrow.addEventListener("click", function () {
    setSectionIndex(Math.max(0, sectionIndex - 1));
    scrollTo(sectionIds[sectionIndex]);
  });

  downArrow.addEventListener("click", function () {
    setSectionIndex(Math.min(sectionIds.length - 1, sectionIndex + 1));
    scrollTo(sectionIds[sectionIndex]);
  });

  function showCurrentSectionInHeader() {
    for (var i = 0; i < sectionAnchors.length; i++) {
      if (i === sectionIndex) {
        sectionAnchors[i].style.display = '';
      } else {
        sectionAnchors[i].style.display = 'none';
      }
    }
  }

  function setSectionIndex(newSectionIndex) {
    sectionIndex = newSectionIndex;
    if (sectionIndex === 0) {
      hideArrow(upArrow);
    } else if (sectionIndex === sectionIds.length - 1) {
      hideArrow(downArrow);
    } else {
      showArrow(upArrow);
      showArrow(downArrow);
    }
    showCurrentSectionInHeader();
  }

  function hideArrow(arrow) {
    arrow.style.display = 'none';
  }

  function showArrow(arrow) {
    arrow.style.display = '';
  }
})
