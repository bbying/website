/**
 * Created by caijunqi on 2016-06-20.
 */
/**
 * aqiData���洢�û�����Ŀ���ָ������
 * ʾ����ʽ��
 * aqiData = {
 *    "����": 90,
 *    "�Ϻ�": 40
 * };
 */
var aqiData = {};
var cityInput = document.getElementById("aqi-city-input");
var aqiInput = document.getElementById("aqi-value-input");

/**
 * ���û������л�ȡ���ݣ���aqiData������һ������
 * Ȼ����Ⱦaqi-list�б���������������
 */
function addAqiData() {
    var city = cityInput.value.trim();
    var aqi = aqiInput.value.trim();

    if(!city.match(/^[A-Za-z\u4E00-\u9FA5]+$/)){
        alert("����������Ϊ��Ӣ���ַ���")
        return;
    }
    if(!aqi.match(/^\d+$/)) {
        alert("��������ָ������Ϊ������")
        return;
    }
    aqiData[city] = aqi;
}

/**
 * ��Ⱦaqi-table���
 */
function renderAqiList() {
    var items = "<tr><td>����</td><td>��������</td><td>����</td></tr>";
    for(var city in aqiData){
        items += "<tr><td>"+city+"</td><td>"+aqiData[city]+"</td><td><button data-city='"+city+"'>ɾ��</button></td></tr>"
    }
    document.getElementById("aqi-table").innerHTML = city ? items : "";
}

/**
 * ���add-btnʱ�Ĵ����߼�
 * ��ȡ�û����룬�������ݣ�������ҳ����ֵĸ���
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * �������ɾ����ť��ʱ��Ĵ����߼�
 * ��ȡ�ĸ��������ݱ�ɾ��ɾ�����ݣ����±����ʾ
 */
function delBtnHandle(city) {
    // do sth.
    delete aqiData[city];
    renderAqiList();
}

function init() {

    // ���������add-btn��һ������¼������ʱ����addBtnHandle����
    document.getElementById("add-btn").addEventListener("click", addBtnHandle)
    // ��취��aqi-table�е�����ɾ����ť���¼�������delBtnHandle����
    document.getElementById("aqi-table").addEventListener("click", function(event){
        if(event.target.nodeName.toLowerCase() === 'button') delBtnHandle.call(null, event.target.dataset.city);
    })
}

init();