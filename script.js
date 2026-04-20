// 获取表单和容器
const catForm = document.getElementById('catForm');
const catContainer = document.getElementById('catContainer');

// 用于存储猫猫数据
const cats = [];

// 显示猫猫卡片
function displayCats() {
  catContainer.innerHTML = '';  // 清空现有内容
  cats.forEach(cat => {
    const catCard = document.createElement('div');
    catCard.className = 'cat-card';
    catCard.innerHTML = `
      <img src="${cat.image}" alt="${cat.name}">
      <div class="cat-name">${cat.name}</div>
      <div class="cat-info">${cat.breed} | ${cat.age}</div>
      <p>${cat.description}</p>
    `;
    catContainer.appendChild(catCard);
  });
}

// 处理表单提交
catForm.addEventListener('submit', (e) => {
  e.preventDefault(); // 防止页面刷新

  const name = document.getElementById('catName').value;
  const breed = document.getElementById('catBreed').value;
  const age = document.getElementById('catAge').value;
  const image = document.getElementById('catImage').value;
  const description = document.getElementById('catDescription').value;

  // 创建新的猫猫对象
  const newCat = { name, breed, age, image, description };

  // 将新的猫猫信息添加到数组中
  cats.push(newCat);

  // 重新显示猫猫卡片
  displayCats();

  // 清空表单
  catForm.reset();
});

// 初始加载时显示空的猫猫图鉴
displayCats();