/* ==========================================================================
   轮播配置文件 —— 以后只需要改这个文件
   ==========================================================================

   在 articles 里加一行即可。三种写法（任选）：

   1) 只写链接（标题自动取链接最后一段，图片用彩色占位）
      "https://example.com/my-article",

   2) 链接 + 标题
      { url: "https://example.com/my-article", title: "文章标题" },

   3) 链接 + 标题 + 图片（图片放在 asset/image/ 文件夹，只写文件名；也可写完整 http 地址）
      { url: "https://example.com/my-article", title: "文章标题", image: "cover.jpg" },
*/

const G = "https://sites.google.com/schools.nyc.gov/yiwuyishi-chinese-website/%E6%96%87%E7%AB%A0%E6%95%99%E8%82%B2/";

window.SITE_CONFIG = {
  shuffle: true,   // 每次打开页面是否随机打乱顺序（true / false）

  articles: [
    { url: G + "%E6%89%80%E8%B0%93%E7%9A%84%E8%87%AA%E7%94%B1%E4%BE%BF%E6%98%AF%E6%9C%89%E8%A2%AB%E8%AE%A8%E5%8E%8C%E7%9A%84%E5%8B%87%E6%B0%94",
      title: "“所谓的自由，便是有被讨厌的勇气”", image: "Caourage.jpg" },

    { url: G + "%E4%B8%8D%E8%A6%81%E9%9D%A2%E5%8C%85%E8%A6%81%E5%90%8D%E7%89%87-%E6%8A%9B%E5%BC%80%E7%9C%BC%E5%89%8D%E7%9F%AD%E6%9A%82%E7%9A%84%E5%88%A9%E7%9B%8A%E4%BD%A0%E6%9B%B4%E8%83%BD%E5%BE%97%E5%88%B0%E4%BD%A0%E6%89%80%E6%B8%B4%E6%9C%9B%E7%9A%84",
      title: "“不要面包要名片”", image: "Bread.png" },

    { url: G + "%E7%94%9F%E6%B4%BB%E9%9A%8F%E7%AC%94-%E5%86%99%E4%BD%9C%E8%B6%A3%E5%91%B3",
      title: "生活随笔--写作趣味", image: "Live'.jpg" },

    { url: G + "%E5%AD%94%E4%B9%99%E5%B7%B1%E8%84%B1%E4%B8%8D%E4%B8%8B%E7%9A%84%E9%95%BF%E8%A1%AB%E4%BD%A0%E4%B9%9F%E4%BC%9A%E8%84%B1%E4%B8%8D%E4%B8%8B%E5%90%97",
      title: "孔乙己脱不下的“长衫”,你也会脱不下吗?", image: "long-gown.png" },

    { url: G + "%E7%9F%AD%E7%AF%87%E5%B0%8F%E8%AF%B4-%E7%94%B5%E8%AF%9D",
      title: "短篇小说--电话", image: "Call.jpg" },

    { url: G + "%E8%AF%AD%E8%A8%80%E6%9C%89%E6%84%9F",
      title: "语言有感", image: "Language.jpg" },

    { url: G + "%E5%BF%86%E5%BC%83%E8%A1%A3",
      title: "忆弃衣", image: "Uniform.png" },

    { url: G + "%E6%88%91%E7%9C%8B%E5%85%AD%E4%B9%A6",
      title: "我看六书", image: "liushu.jpg" },

    // ↓↓↓ 添加模版 ↓↓↓
    { url: "网页的链接",
      title: "标题名字", image: "图片名字.jpg" },
  ]
};
