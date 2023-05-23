const htmlToWiki = (html) => {
  let wikiText = html;
  
  // wikiText = wikiText.replace(/===([^=].*?)===/g, '<h3>$1</h3>');
  // // 제목 처리
  // wikiText = wikiText.replace(/==([^=].*?)==/g, '<h2>$1</h2>');

  // wikiText = wikiText.replace(/'''([^=].*?)'''/g, '<strong>$1</strong>');
  
  // // 강조 처리
  // wikiText = wikiText.replace(/''(.+?)''/g, '<em>$1</em>');
  
  // // 링크 처리
  // wikiText = wikiText.replace(/--(.+?)--/g, '<del>$1</del>');

  // 강조 처리
  wikiText = wikiText.replace(/<strong>(.*?)<\/strong>/g, "'''$1'''");
  wikiText = wikiText.replace(/<em>(.*?)<\/em>/g, "''$1''");

// 취소선 처리
  wikiText = wikiText.replace(/<del>(.*?)<\/del>/g, "--$1--");
  // 단락 처리
  wikiText = wikiText.replace(/<p>(.*?)<\/p>/g, '$1');
  wikiText = wikiText.replace(/<\/?span[^>]*>/g, '');
  wikiText = wikiText.replace(/<br>/g, '\n');
  wikiText = wikiText.replace(/&nbsp;/g, ' ');
  wikiText = wikiText.replace(/<\/?p[^>]*>/g, '');
  // wikiText = wikiText.replace(/<p>(.*?)<\/p>/g, '$1');
  // wikiText = wikiText.replace(/<p>(.*?)<\/p>/g, '$1');
  // wikiText = wikiText.replace(/<p>(.*?)<\/p>/g, '$1');

  return wikiText;
};


export default htmlToWiki