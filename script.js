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

  $(window).on('activate.bs.scrollspy', function () {
    var currentSectionIndex = sectionIds.findIndex((id) => "#" + id === arguments[1].relatedTarget);
    setSectionIndex(currentSectionIndex);
  })

  Array.prototype.forEach.call(sectionAnchors, function (anchor) {
    anchor.addEventListener("click", function (event) {
      event.preventDefault();

      scrollTo(event.target.hash.substring(1))
    })
  })

  upArrow.addEventListener("click", function () {
    setSectionIndex(Math.max(0, sectionIndex - 1));
    scrollTo(sectionIds[sectionIndex]);
  });

  downArrow.addEventListener("click", function () {
    setSectionIndex(Math.min(sectionIds.length - 1, sectionIndex + 1));
    scrollTo(sectionIds[sectionIndex]);
  });

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
  }

  function hideArrow(arrow) {
    arrow.style.display = 'none';
  }

  function showArrow(arrow) {
    arrow.style.display = '';
  }
})
