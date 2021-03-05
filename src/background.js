
const menuId = 'creatMdHref';

chrome.runtime.onInstalled.addListener(function () {

  chrome.contextMenus.create({
    id: menuId,
    title: '生成Markdown格式的超链接',
    contexts: ['selection']
  });
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId == menuId) {
    chrome.tabs.executeScript({ file: 'contentScript.js' });
  }
});