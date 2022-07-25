const mainTabs = () => {

  const tabsButtons = document.querySelectorAll('.tabs-header__item');
  const tabs = document.querySelectorAll('.tab');
  const tabHeader = document.querySelector('.tabs-header');

  const hideContent = () => {
    tabsButtons.forEach((button) => {
      button.classList.remove('is-active');
    });

    tabs.forEach((tab) => {
      tab.classList.remove('is-active');
      tab.classList.add('is-hidden');
      tab.classList.remove('show');
    });
  };

  const showContent = (i) => {
    tabsButtons[i].classList.add('is-active');
    tabs[i].classList.add('is-active');
    tabs[i].classList.add('show');
    tabs[i].classList.remove('is-hidden');
  };

  hideContent();
  showContent(0);

  tabHeader.addEventListener('click', (evt) => {
    const target = evt.target.closest('.tabs-header__item');

    if (target && target.classList.contains('tabs-header__item')) {
      tabsButtons.forEach((button, i) => {
        if (target === button) {
          hideContent();
          showContent(i);
        }
      });
    }
  });


};

export {mainTabs};
