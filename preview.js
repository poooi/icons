const gallery = document.getElementById('gallery');
const category = document.getElementById('category');
const status = document.getElementById('status');
const search = document.getElementById('search');
const size = document.getElementById('size');

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function imageCell(src, label, linkText) {
  const cell = element('div', 'cell');
  const large = element('img', 'large');
  large.src = src;
  large.alt = label;
  const actual = element('div', 'actual');
  const small = element('img');
  small.src = src;
  small.alt = label + '，实际尺寸';
  actual.append(small, element('span', 'size-label', '24 px'));
  const link = element('a', 'asset-link', linkText);
  link.href = src;
  cell.append(large, actual, link);
  return {cell, large, small, link};
}

for (const name of new Set(icons.map(icon => icon.category))) {
  const option = element('option', '', name);
  option.value = name;
  category.append(option);
}

const entries = icons.map(icon => {
  const row = element('article', 'row');
  const identity = element('div', 'identity');
  identity.append(
    element('span', 'id', icon.category + ' / ' + icon.id),
    element('h2', '', icon.name),
    element('span', 'status' + (icon.status === '待描摹' ? ' pending' : ''), icon.status),
    element('p', 'description', icon.description),
  );
  const original = imageCell(icon.sources[0].src, icon.name + ' PNG', '打开 PNG');
  if (icon.sources.length > 1) {
    const variants = element('select', 'variant');
    variants.setAttribute('aria-label', icon.name + ' 原图版本');
    for (const source of icon.sources) {
      const option = element('option', '', source.label);
      option.value = source.src;
      variants.append(option);
    }
    variants.onchange = () => {
      original.large.src = variants.value;
      original.small.src = variants.value;
      original.link.href = variants.value;
    };
    original.cell.append(variants);
  }
  const svg = icon.svg || icon.referenceSvg;
  const result = svg
    ? imageCell(svg, icon.name + ' SVG', icon.referenceSvg ? '现有 SVG 参考（未重绘）' : '打开 SVG').cell
    : element('div', 'cell missing', '待描摹');
  row.append(identity, original.cell, result);
  gallery.append(row);
  return {icon, row, query: [icon.key, icon.name, icon.group, icon.description].join(' ').toLowerCase()};
});

function filter() {
  const query = search.value.trim().toLowerCase();
  let count = 0;
  for (const entry of entries) {
    entry.row.hidden = Boolean(
      (category.value && entry.icon.category !== category.value) ||
      (status.value && entry.icon.status !== status.value) ||
      (query && !entry.query.includes(query)),
    );
    if (!entry.row.hidden) count++;
  }
  document.getElementById('count').textContent = count + ' 个条目';
  document.getElementById('empty').hidden = count !== 0;
}
category.onchange = filter;
status.onchange = filter;
search.oninput = filter;
size.onchange = () => {
  document.documentElement.style.setProperty('--size', size.value + 'px');
  document.querySelectorAll('.size-label').forEach(node => node.textContent = size.value + ' px');
};
for (const theme of ['dark', 'light']) {
  document.getElementById(theme).onclick = () => {
    document.body.classList.toggle('light', theme === 'light');
    for (const name of ['dark', 'light']) {
      document.getElementById(name).setAttribute('aria-pressed', String(name === theme));
    }
  };
}
document.getElementById('summary').textContent = ['新描摹', '已有 SVG', '待描摹']
  .map(label => label + ' ' + icons.filter(icon => icon.status === label).length)
  .join(' · ');
filter();
