
// 关闭tab
export function closeTab(targetKey,self){
    // 优先关闭父页面tab，其次关闭自己的tab(需要在iframe中)
    if (window.self != window.top){
        window.parent.postMessage({
            type:"closeIframeTab",
            tabName: targetKey},"*");
    } else {
        self.GLOBAL.closeCurrentTab(targetKey);
    }
}

export function addTab(data,self){
    if (window.self != window.top){
        var tokenAlias = window.sessionStorage.getItem("tokenAlias")
        var token =  window.sessionStorage.getItem(tokenAlias?tokenAlias:"tokenAlias");
        let url = window.location.origin + window.location.pathname + '#' + data.url  + '&XAuthToken='+token + '&XAuthTokenAlias=' + tokenAlias;
        data.url = url;
        window.parent.postMessage({
            type:"addIframeTab",
            tabItem: data},"*");

    } else {
        self.GLOBAL.addTab(data);
    }

}

// 自定义el-tree节点过滤，支持5级树，主要解决官网中节点过滤只加载当前节点和其父节点，不会加载对应的子节点的问题。
export function treeFilterNode(value, data, node) {
    if (!value) {
        return true;
    }
    let result_one = false
    let result_two = false
    let result_three = false
    let result_four = false
    let result_five = false
    let result_six = false
    let result_seven = false
    let result_eight = false
    let result_nine = false
    let result_ten = false
    let if_one;
    let if_two;
    let if_three;
    let if_four;
    let if_five;
    let if_six;
    let if_seven;
    let if_eight;
    let if_nine;
    let if_ten;

    if (node.level === 1) {
        if_one = data.name.indexOf(value) !== -1 || data.spell.indexOf(value) !== -1
        result_one = if_one
    } else if (node.level === 2) {
        if_one = data.name.indexOf(value) !== -1 || data.spell.indexOf(value) !== -1
        if_two = node.parent.data.name.indexOf(value) !== -1
        result_two = if_one || if_two
    } else if (node.level === 3) {
        if_one = data.name.indexOf(value) !== -1 || data.spell.indexOf(value) !== -1
        if_two = node.parent.data.name.indexOf(value) !== -1 || node.parent.data.spell.indexOf(value) !== -1
        if_three = node.parent.parent.data.name.indexOf(value) !== -1
        result_three = if_one || if_two || if_three
    } else if (node.level === 4) {
        if_one = data.name.indexOf(value) !== -1 || data.spell.indexOf(value) !== -1
        if_two = node.parent.data.name.indexOf(value) !== -1 || node.parent.data.spell.indexOf(value) !== -1
        if_three = node.parent.parent.data.name.indexOf(value) !== -1 || node.parent.parent.data.spell.indexOf(value) !== -1
        if_four = node.parent.parent.parent.data.name.indexOf(value) !== -1
        result_four = if_one || if_two || if_three || if_four
    } else if (node.level === 5) {
        if_one = data.name.indexOf(value) !== -1 || data.spell.indexOf(value) !== -1
        if_two = node.parent.data.name.indexOf(value) !== -1 || node.parent.data.spell.indexOf(value) !== -1
        if_three = node.parent.parent.data.name.indexOf(value) !== -1 || node.parent.parent.data.spell.indexOf(value) !== -1
        if_four = node.parent.parent.parent.data.name.indexOf(value) !== -1 || node.parent.parent.parent.data.spell.indexOf(value) !== -1
        if_five = node.parent.parent.parent.parent.data.name.indexOf(value) !== -1
        result_five = if_one || if_two || if_three || if_four || if_five
    } else if (node.level === 6) {
        if_one = data.name.indexOf(value) !== -1 || data.spell.indexOf(value) !== -1
        if_two = node.parent.data.name.indexOf(value) !== -1 || node.parent.data.spell.indexOf(value) !== -1
        if_three = node.parent.parent.data.name.indexOf(value) !== -1 || node.parent.parent.data.spell.indexOf(value) !== -1
        if_four = node.parent.parent.parent.data.name.indexOf(value) !== -1 || node.parent.parent.parent.data.spell.indexOf(value) !== -1
        if_five = node.parent.parent.parent.parent.data.name.indexOf(value) !== -1 || node.parent.parent.parent.parent.data.spell.indexOf(value) !== -1
        if_six = node.parent.parent.parent.parent.parent.data.name.indexOf(value) !== -1
        result_six = if_one || if_two || if_three || if_four || if_five || if_six
    } else if (node.level === 7) {
        if_one = data.name.indexOf(value) !== -1 || data.spell.indexOf(value) !== -1
        if_two = node.parent.data.name.indexOf(value) !== -1 || node.parent.data.spell.indexOf(value) !== -1
        if_three = node.parent.parent.data.name.indexOf(value) !== -1 || node.parent.parent.data.spell.indexOf(value) !== -1
        if_four = node.parent.parent.parent.data.name.indexOf(value) !== -1 || node.parent.parent.parent.data.spell.indexOf(value) !== -1
        if_five = node.parent.parent.parent.parent.data.name.indexOf(value) !== -1 || node.parent.parent.parent.parent.data.spell.indexOf(value) !== -1
        if_six = node.parent.parent.parent.parent.parent.data.name.indexOf(value) !== -1 || node.parent.parent.parent.parent.parent.data.spell.indexOf(value) !== -1
        if_seven = node.parent.parent.parent.parent.parent.parent.data.name.indexOf(value) !== -1 || data.spell.indexOf(value) !== -1
        result_seven = if_one || if_two || if_three || if_four || if_five || if_six || if_seven
    } else if (node.level === 8) {
        if_one = data.name.indexOf(value) !== -1 || data.spell.indexOf(value) !== -1
        if_two = node.parent.data.name.indexOf(value) !== -1 || node.parent.data.spell.indexOf(value) !== -1
        if_three = node.parent.parent.data.name.indexOf(value) !== -1 || node.parent.parent.data.spell.indexOf(value) !== -1
        if_four = node.parent.parent.parent.data.name.indexOf(value) !== -1 || node.parent.parent.parent.data.spell.indexOf(value) !== -1
        if_five = node.parent.parent.parent.parent.data.name.indexOf(value) !== -1 || node.parent.parent.parent.parent.data.spell.indexOf(value) !== -1
        if_six = node.parent.parent.parent.parent.parent.data.name.indexOf(value) !== -1 || node.parent.parent.parent.parent.parent.data.spell.indexOf(value) !== -1
        if_seven = node.parent.parent.parent.parent.parent.parent.data.name.indexOf(value) !== -1 || node.parent.parent.parent.parent.parent.parent.data.spell.indexOf(value) !== -1
        if_eight = node.parent.parent.parent.parent.parent.parent.parent.data.name.indexOf(value) !== -1
        result_eight = if_one || if_two || if_three || if_four || if_five || if_six || if_seven || if_eight
    } else if (node.level === 9) {
        if_one = data.name.indexOf(value) !== -1 || data.spell.indexOf(value) !== -1
        if_two = node.parent.data.name.indexOf(value) !== -1 || node.parent.data.spell.indexOf(value) !== -1
        if_three = node.parent.parent.data.name.indexOf(value) !== -1 || node.parent.parent.data.spell.indexOf(value) !== -1
        if_four = node.parent.parent.parent.data.name.indexOf(value) !== -1 || node.parent.parent.parent.data.spell.indexOf(value) !== -1
        if_five = node.parent.parent.parent.parent.data.name.indexOf(value) !== -1 || node.parent.parent.parent.parent.data.spell.indexOf(value) !== -1
        if_six = node.parent.parent.parent.parent.parent.data.name.indexOf(value) !== -1 || node.parent.parent.parent.parent.parent.data.spell.indexOf(value) !== -1
        if_seven = node.parent.parent.parent.parent.parent.parent.data.name.indexOf(value) !== -1 || node.parent.parent.parent.parent.parent.parent.data.spell.indexOf(value) !== -1
        if_eight = node.parent.parent.parent.parent.parent.parent.parent.data.name.indexOf(value) !== -1 || node.parent.parent.parent.parent.parent.parent.parent.data.spell.indexOf(value) !== -1
        if_nine = node.parent.parent.parent.parent.parent.parent.parent.parent.data.name.indexOf(value) !== -1
        result_nine = if_one || if_two || if_three || if_four || if_five || if_six || if_seven || if_eight || if_nine
    } else if (node.level === 10) {
        if_one = data.name.indexOf(value) !== -1 || data.spell.indexOf(value) !== -1
        if_two = node.parent.data.name.indexOf(value) !== -1 || node.parent.data.spell.indexOf(value) !== -1
        if_three = node.parent.parent.data.name.indexOf(value) !== -1 || node.parent.parent.data.spell.indexOf(value) !== -1
        if_four = node.parent.parent.parent.data.name.indexOf(value) !== -1 || node.parent.parent.parent.data.spell.indexOf(value) !== -1
        if_five = node.parent.parent.parent.parent.data.name.indexOf(value) !== -1 || node.parent.parent.parent.parent.data.spell.indexOf(value) !== -1
        if_six = node.parent.parent.parent.parent.parent.data.name.indexOf(value) !== -1 || node.parent.parent.parent.parent.parent.data.spell.indexOf(value) !== -1
        if_seven = node.parent.parent.parent.parent.parent.parent.data.name.indexOf(value) !== -1 || node.parent.parent.parent.parent.parent.parent.data.spell.indexOf(value) !== -1
        if_eight = node.parent.parent.parent.parent.parent.parent.parent.data.name.indexOf(value) !== -1 || node.parent.parent.parent.parent.parent.parent.parent.data.spell.indexOf(value) !== -1
        if_nine = node.parent.parent.parent.parent.parent.parent.parent.parent.data.name.indexOf(value) !== -1 || node.parent.parent.parent.parent.parent.parent.parent.parent.data.spell.indexOf(value) !== -1
        if_ten = node.parent.parent.parent.parent.parent.parent.parent.parent.parent.data.name.indexOf(value) !== -1
        result_ten = if_one || if_two || if_three || if_four || if_five || if_six || if_seven || if_eight || if_nine || if_ten
    }
    return result_one || result_two || result_three || result_four || result_five || result_six || result_seven || result_eight || result_nine || result_ten
}