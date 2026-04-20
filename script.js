const catsFile = "cats.json"; // JSON 文件路径

// 加载并渲染猫咪数据
async function loadCats() {
    const response = await fetch(catsFile); // 从 GitHub 加载 cats.json
    const cats = await response.json(); // 解析 JSON 数据
    const list = document.getElementById("list");
    list.innerHTML = ""; // 清空现有内容

    // 渲染猫咪数据
    cats.forEach(cat => {
        list.innerHTML += `
        <div class="card">
            <img src="${cat.img}" alt="猫咪图片">
            <div class="name">${cat.name}</div>
            <div class="desc">${cat.desc}</div>
        </div>`;
    });
}

// 添加新猫咪（这里只是一个简单示例，假设你会手动更新 JSON 文件）
function addCat() {
    const name = document.getElementById("name").value;
    const desc = document.getElementById("desc").value;
    const file = document.getElementById("img").files[0];

    if (!name || !file) {
        alert("请填写名字并上传图片！");
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const newCat = {
            name: name,
            desc: desc,
            img: e.target.result
        };

        // 你可以将 newCat 添加到 GitHub 仓库中的 cats.json 文件
        alert("新猫咪已添加！你需要手动更新 GitHub 仓库中的 cats.json 文件。");

        loadCats(); // 重新加载猫咪数据
    };

    reader.readAsDataURL(file); // 读取文件内容
}

loadCats(); // 加载猫咪数据