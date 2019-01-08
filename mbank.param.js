(function($, undefined) {
	$.mbank = $.mbank || {};
	$.mbank.param = $.mbank.param || {};
	$.extend($.mbank.param, {
		IF_FLAG: {
			'0': '否',
			'1': '是'
		},
		//关注类型
		ATTENTION_TYPE: {
			'1': '普通',
			'2': '重点'
		},
		//客户类型 DM0001 
		DM0001: {
			'1': '公司',
			'6': '零售'
		},
		//客户状态
		XD000081: {
			'0': '潜在',
			'1': '正式',
			'2': '已转正'
		},
		//性别
		XD000016: {
			'1': '男',
			'2': '女',
			'9': '未知性别'
		},
		//CRM-机构类型
		XD000272: {
			'1': '主办',
			'2': '协办'
		},
		//性别
		ibdOperationType: {
			'1': '领用',
			'2': '上缴'
		},
		
		//证件类型
		DM0008: {
			'0001': '居民身份证',
			'0002': '临时身份证',
			'0003': '护照',
			'0004': '户口簿',
			'0005': '军人身份证',
			'0006': '武装警察身份证',
			'0007': '港澳台居民往来内地通行证',
			'0008': '外交人员身份证',
			'0009': '外国人永久居留证',
			'0010': '边民出入境通行证',
			'0011': '其它（个人）',
			'0021': '企业法人营业执照',
			'0022': '企业营业执照',
			'0023': '政府人事部门或编制委员会批文',
			'0024': '事业单位法人登记证书',
			'0025': '财政部门同意其开户的证明',
			'0026': '社会团体登记证书',
			'0027': '上级主管部门批文或证明',
			'0028': '工会法人资格证书',
			'0029': '民办非企业登记证书',
			'0030': '驻华机构登记证',
			'0031': '个体工商户营业执照',
			'0032': '企业名称预先核准通知书',
			'0033': '组织机构代码证',
			'0034': '国税登记证',
			'0035': '地税登记证',
			'0036': '批准证明',
			'0037': '进出口业务资格证书',
			'0038': '外贸经营者备案登记表',
			'0039': '金融许可证',
			'0040': '外汇业务核准证',
			'0041': '外汇登记证',
			'0042': '开户许可证',
			'0043': '办学许可证',
			'0044': '其它（单位）'
		},
		//关键人类型
		KEYMAN_TYPE: {
			'01': '法人',
			'02': '财务代表',
			'03': '其他联系人',
			'04': '实际控制人'
		},
		//客户级别
		DM0017: {
			'1': '总行战略级',
			'2': '总行重点级',
			'3': '支行战略级',
			'4': '支行重点级',
			'5': '普通级',
			'6': '限制级客户',
			'7': '淘汰级客户'
		},
		//关联关系 0016
		CUS0100038: {
			'102': '父子',
			'103': '母子',
			'104': '夫妻',
			'105': '朋友',
			'106': '同事',
			'107': '师生',
			'108': '同学',
			'109': '兄弟',
			'110': '姐妹',
			'111': '兄妹',
			'112': '旁系亲属',
			'201': '法定代表人',
			'202': '实际经营人',
			'203': '董事长',
			'204': '总经理',
			'205': '财务总监',
			'206': '董事会成员',
			'207': '股东会成员',
			'208': '银行业务联系人',
			'301': '控股',
			'302': '合营',
			'303': '联营',
			'304': '控制',
			'305': '集团关联',
			'306': '投资企业',
			'307': '供求关系',
			'308': '互保关系',
			'309': '集团内企业'
		},
		//反馈类型 
		FEEDBACK_TYPE: {
			'1': '投诉',
			'2': '咨询',
			'3': '意见',
			'4': '建议'
		},
		//反馈渠道
		FEEDBACK_CHAN: {
			'1': '客户经理',
			'2': '网银',
			'3': '柜面',
			'4': 'CC'
		},
		//称谓
		CUST_TITLE_CD: {
			'00': '未知',
			'01': '先生',
			'02': '小姐'
		},
		//职业、职位
		POSITION: {
			'01': '市场营销',
			'02': '媒体广告',
			'03': '商务',
			'04': '软件网络',
			'05': '后勤文秘',
			'06': '企业高管',
			'07': '生产质检',
			'08': '机械工程',
			'09': '财会审计',
			'10': '金融投资',
			'11': '房产物业',
			'12': '交通物流',
			'13': '劳动家政',
			'14': '店员导购',
			'15': '教育教练',
			'16': '资讯情报',
			'17': '学术科研',
			'18': '法律产权',
			'19': '艺术设计',
			'20': '影视新闻',
			'21': '餐饮娱乐',
			'22': '化工资源',
			'23': '医疗保健',
			'24': '语言翻译',
			'25': '公务员',
			'26': '环保园林',
			'27': '农林牧渔',
			'28': '学生',
			'99': '其他'
		},
		//CRM-流失度预警等级
		CUST_LOST_LEVEL: {
			'A': '增长',
			'B': '稳定',
			'C': '下降',
			'D': '流失'
		},
		//对公CRM-中间业务-种类
		MID_BUSI_CD: {
			'G31': '贷款咨询评估费',
			'G30': '贷款额度授信管理费',
			'G28': '贷款资料工本费',
			'G27': '抵质押品保管费',
			'G26': '柜台多笔业务手续费',
			'G24': '个人网银年费',
			'G23': '企业网银年费',
			'G22': '保管箱配匙费',
			'G20': '咨询顾问业务手续费',
			'G19': '结算资信证明业务手续费',
			'G18': '汇票申请书手续费',
			'G17': '签发银行汇票手续费',
			'G16': '汇票查询手续费',
			'G15': '兑付现金汇票手续费',
			'G14': '解付银行汇票手续费',
			'G11': '其他外汇业务手续费-英镑',
			'G10': '其他外汇业务手续费-欧元',
			'G09': '其他外汇业务手续费-日元',
			'G08': '其他外汇业务手续费-美元',
			'G07': '其他外汇业务手续费-港币',
			'G06': '其他外汇业务手续费-人民币',
			'G05': '光票托收手续费-美元',
			'G04': '光票托收手续费-港币',
			'G03': '光票托收手续费-人民币',
			'G02': '外币支票(售卖)手续费',
			'G01': '外币支票(售卖)工本费',
			'F99': '代发工资手续费',
			'F98': '票据交换手续费',
			'F97': '验资证明手续费',
			'F96': '夜间金库超时保管费',
			'F95': '夜间金库钱包使用费',
			'F94': '夜间金库租金',
			'F93': '补打税票手续费',
			'F92': '贷款证明手续费',
			'F91': '银行承兑汇票贴现手续费',
			'F90': '消费按揭提前还款手续费',
			'F89': '银行卡对账簿工本费',
			'F88': '电子回单箱IC卡工本费',
			'F87': '人工回单柜租箱费(年费)',
			'F86': '电子回单柜租箱费(年费)',
			'F85': '保管箱凿锁/换锁手续费',
			'F84': '保管箱钥匙挂失手续费',
			'F83': '保管箱密码挂失手续费',
			'F82': '保管箱租箱费',
			'F81': '资金托管业务手续费',
			'F80': '一年以上未发生收付活动结算账户维护手续费',
			'F79': '开户证明手续费',
			'F78': '支票止付手续费',
			'F77': '零钞清点手续费',
			'F76': '补制对账单手续费',
			'F74': '补制回单手续费',
			'F72': '贴现凭证工本费',
			'F71': '托收凭证工本费',
			'F69': '其他资信证明手续费',
			'F68': '对公大额提现手续费',
			'F67': '贷款业务手续费',
			'F65': '网银证书工本费',
			'F64': '网银口令卡工本费',
			'F63': '网银动态令牌工本费',
			'F62': '网银UKEY工本费',
			'F61': '印鉴变更手续费',
			'F59': '单位账户管理费',
			'F58': '单位账户开户费',
			'F57': '信用证担保费',
			'F56': '保函担保费',
			'F55': '银团贷款代理管理费',
			'F54': '社团贷款代理管理费',
			'F53': '委托贷款代理管理费',
			'F52': '打印账户明细手续费',
			'F51': '委托收款/托收承付手续费',
			'F47': '现金大额结算手续费',
			'F46': '小额通存通兑手续费',
			'F45': '电子联行汇划费用',
			'F44': '转账大额结算手续费',
			'F43': '借记卡卡年费',
			'F42': '异地通存通兑业务费',
			'F36': '其它中间业务手续费',
			'F35': '其它代理业务手续费',
			'F25': '批量业务手续费',
			'F24': '批量业务手续费(待转手续费)',
			'F22': '电汇手续费',
			'F21': '对公印鉴挂失手续费',
			'F20': '印鉴挂失手续费',
			'F19': '本票挂失手续费',
			'F18': '票据挂失手续费',
			'F17': '本票手续费',
			'F16': '本票工本费',
			'F15': '银行承兑汇票手续费',
			'F14': '银行承兑汇票工本费',
			'F13': '汇票申请书工本费',
			'F12': '汇票工本费',
			'F11': '现金缴费单工本费',
			'F10': '电汇凭证工本费',
			'F09': '进帐单工本费',
			'F08': '磁码支票工本费',
			'F07': '支票(售卖)工本费',
			'F06': '卡工本费',
			'F05': '磁码支票手续费',
			'F04': '支票(售卖)手续费',
			'F02': '卡挂失手续费',
			'F01': '存折/单挂失手续费',
			'AA03': '对私账户管理费',
			'AA02': '对公账户管理费',
			'AA01': '贴现结息利息（手续费）',
			'FEE001': '手续费支出明细',
			'FEE002': '直联手续费',
			'FEE003': '网银手续费',
			'FEE004': '柜面业务手续费'
		},
		//商机状态
		BUSI_CHANCE_STATUS: {
			'1': '暂存',
			'2': '待分配',
			'3': '认领中',
			'4': '执行中',
			'5': '成功关闭',
			'6': '失败关闭',
			'7': '退回',
			'8': '到期退回'
		},
		//商机阶段
		BUSI_CHANCE_STAGE: {
			'1': '了解商机',
			'2': '确认商机',
			'3': '方案论证',
			'4': '商务谈判',
			'5': '商机成交'
		},
		//商机来源
		BUSI_CHANCE_SOURCE: {
			'1': '手动创建',
			'2': '移动创建'
		},
		//商机类型
		BUSI_CHANCE_TYPE: {
			'1': '资产业务',
			'2': '负债业务',
			'3': '中间业务',
			'4': '国际业务',
			'5': '其他业务'
		},
		//商机定向条线
		OPPOR_BUSY_LINE: {
			'1': '对公',
			'2': '小企业',
			'3': '零售',
			'4': '全部'
		},
		//CRM-零售商机状态
		PER_OPPOR_STAT: {
			'P01': '已分配',
			'P02': '已认领',
			'P03': '待认领',
			'P04': '执行中',
			'P05': '成功关闭',
			'P06': '失败关闭',
			'P07': '失效关闭'
		},
		//CRM-零售商机类型
		PER_OPPOR_TYPE: {
			'P01': '贷款业务',
			'P02': '理财业务',
			'P03': 'POS业务',
			'P04': '国际业务',
			'P05': '中间业务',
			'P06': '其他业务'
		},
		//CRM-零售商机定向条线
		PER_OPPOR_BUSY_LINE: {
			'P01': '小企',
			'P02': '个贷',
			'P03': '零售',
			'P04': '其他'
		},
		//CRM-零售商机销售阶段
		SALES_STAGE: {
			'1': '了解客户需求',
			'2': '确认客户需求',
			'3': '确认产品/服务',
			'4': '制定服务方案',
			'5': '产品介绍',
			'6': '销售洽谈',
			'7': '签约/购买'
		},
		//CRM-零售商机活动执行方式
		EXEC_WAY: {
			'1': '网点',
			'2': '电话',
			'3': '短信',
			'4': '上门拜访',
			'5': '其他'
		},
		//CRM-零售商机失败关闭原因
		BAD_CLOSE_REASON: {
			'001': '征信记录差',
			'002': '企业经营不善',
			'003': '担保能力不足',
			'004': '客户暂时没有资金需求',
			'005': '利率高',
			'006': '还款方式不适合',
			'007': '额度不适合',
			'008': '其他'
		},
		//存款类型
		DEP_TYPE: {
			'FX': '定期',
			'SV': '活期'
		},
		//任务类型
		MTASK_TYPE: {
			'01': '全年综合性任务',
			'02': '阶段性经营任务',
			'03': '专项任务',
			'04': '产品经营任务'
		},
		//CRM-任务指标类型
		TARGET_TYPE: {
			'01': '周期性',
			'02': '非周期性'
		},
		//执行对象类型
		MTASK_OPER_TYPE: {
			'0': '团队',
			'1': '机构',
			'2': '客户经理'
		},
		//零售CRM-贷款客户状态-loanCustStatus
		COR1031: {
			'01': '虽未逾期，但有可疑迹象的客户',
			'02': '大额贷款的客户',
			'03': '有多笔贷款的客户',
			'04': '多头贷款客户',
			'05': '曾有信用不良记录的客户',
			'06': '由开发商或经销商垫款的客户',
			'07': '其它',
			'00': '未知'
		},
		//零售CRM-客户综合等级-custGrade
		PER_CUST_LV: {
			'1': '大众客户',
			'2': '低级潜力客户',
			'3': '中级潜力客户',
			'4': '高级潜力客户',
			'5': '白银级VIP客户',
			'6': '黄金级VIP客户',
			'7': '白金级VIP客户',
			'8': '黑金级VIP客户',
			'9': '钻石级VIP客户',
			'10': '私人银行客户'
		},
		//零售CRM-客户AUM月日均等级-aumGrade
		PER_AUM_LV: {
			'1': '1星级客户',
			'2': '2星级客户',
			'3': '3星级客户',
			'4': '4星级客户',
			'5': '5星级客户',
			'6': '6星级客户',
			'7': '7星级客户',
			'8': '8星级客户',
			'9': '9星级客户',
			'10': '10星级客户',
			'11': '11星级客户'
		},
		//零售CRM-贡献度等级-evaGrade
		PER_CONTR_LV: {
			'1': '1星级客户',
			'2': '2星级客户',
			'3': '3星级客户',
			'4': '4星级客户',
			'5': '5星级客户',
			'6': '6星级客户',
			'7': '7星级客户',
			'8': '8星级客户',
			'9': '9星级客户',
			'10': '10星级客户',
			'11': '11星级客户'
		},
		//零售CRM-VIP等级-vipCd
		COR1014: {
			'00': '',
			'01': '钻石级VIP',
			'02': '白金级VIP',
			'03': '黄金级VIP',
			'04': '普通VIP'
		},
		//零售CRM-联系方式类型--contType
		CONTACT_WAY: {
			'01': '传真电话',
			'02': '工作电话',
			'03': '手提电话',
			'04': '家庭电话',
			'05': '电子邮件1',
			'06': '电子邮件2'
		},
		//零售CRM-签约类型
		PER_SIGN_TYPE: {
			'SIGN001': '财付通',
			'SIGN002': '支付宝',
			'SIGN003': '公积金',
			'SIGN004': '电话银行',
			'SIGN005': '银企直联',
			'SIGN006': '银联网上支付',
			'SIGN007': '自助设备转账签约',
			'SIGN008': '第三方存管(广发证券)',
			'SIGN009': '第三方存管(国信证券)',
			'SIGN010': '安心无忧(中国人寿)',
			'SIGN011': '盛世富贵A款(中国人民人寿)',
			'SIGN012': '金鼎富贵B款(中国人民人寿)',
			'SIGN013': 'Au99.99(深圳黄金公司)',
			'SIGN014': 'Au99.95(深圳黄金公司)',
			'SIGN015': 'Au100g(深圳黄金公司)',
			'SIGN016': 'Au(T+D)(深圳黄金公司)',
			'SIGN017': 'Au（T+N1)(深圳黄金公司)',
			'SIGN018': 'Au（T+N2）(深圳黄金公司)',
			'SIGN019': 'mAu（T+D）(深圳黄金公司)',
			'SIGN020': 'Ag（T+D）(深圳黄金公司)',
			'SIGN021': '黄金定投(深圳黄金公司)',
			'SIGN022': '代缴税费（ETS）',
			'SIGN023': '代收非税',
			'SIGN024': '代扣电费',
			'SIGN025': '代扣水费',
			'SIGN026': '代扣电视费',
			'SIGN027': '代扣燃气费',
			'SIGN028': '代缴电信费',
			'SIGN029': '移动银行划扣（随心充）',
			'SIGN030': '个人存款资信证明',
			'SIGN031': '批量转账代付',
			'SIGN032': '批量代发工资',
			'SIGN033': '批量代发奖金',
			'SIGN034': '批量代付绩效奖金',
			'SIGN035': '批量代发补助',
			'SIGN036': '批量代发加班费',
			'SIGN037': '批量代发工龄假加班费',
			'SIGN038': '批量代发生日慰问金',
			'SIGN039': '批量代付药费报销',
			'SIGN040': '批量代发参观学习费',
			'SIGN041': '批量代发节日补贴',
			'SIGN042': '批量代发交通补贴',
			'SIGN043': '批量代发住房补贴',
			'SIGN044': '批量代发年终考核奖',
			'SIGN045': '批量代付考核奖',
			'SIGN046': '批量代发津贴',
			'SIGN047': '批量代付内勤工资',
			'SIGN048': '批量退房款',
			'SIGN049': '批量退契税',
			'SIGN050': '批量代付集资款',
			'SIGN051': '批量退股',
			'SIGN052': '批量代发分红',
			'SIGN053': '批量代发股息',
			'SIGN054': '批量代发股金分红',
			'SIGN055': '批量代付学费',
			'SIGN056': '批量代付托费',
			'SIGN057': '批量代付餐费',
			'SIGN058': '批量代付加工费',
			'SIGN059': '批量代发计生奖',
			'SIGN060': '批量代发独生子女费',
			'SIGN061': '批量代发助学金',
			'SIGN062': '批量代付慰问金',
			'SIGN063': '批量代发五保金',
			'SIGN064': '批量代付养老金',
			'SIGN065': '批量代发老人金',
			'SIGN066': '批量代发养老保险',
			'SIGN067': '批量代付经济补偿金',
			'SIGN068': '批量代付残疾人补助金',
			'SIGN069': '批量代发低保金',
			'SIGN070': '批量代付临界低保金',
			'SIGN071': '批量代付社保费',
			'SIGN072': '批量代发救济金',
			'SIGN073': '批量代发退休金',
			'SIGN074': '批量代发抚恤金',
			'SIGN075': '批量代发优待金',
			'SIGN076': '批量代发遣散费',
			'SIGN077': '批量代付安置费',
			'SIGN078': '批量代付征地款',
			'SIGN079': '批量代付拆迁补偿款',
			'SIGN080': '批量退电信费',
			'SIGN081': '批量代付燃气补贴',
			'SIGN082': '批量代付物价补贴',
			'SIGN083': '批量代付消费补贴',
			'SIGN084': '批量代付生活补贴',
			'SIGN085': '批量代付石油价格补贴',
			'SIGN086': '批量代付燃油补贴',
			'SIGN087': '批量代付下乡补贴（家电、汽车等）',
			'SIGN088': '批量代付超时补贴',
			'SIGN089': '批量代付补课费',
			'SIGN090': '批量代付劳动报酬',
			'SIGN091': '批量退手续费',
			'SIGN092': '批量退年费',
			'SIGN093': '批量退燃气费',
			'SIGN094': '批量代付违约金',
			'SIGN095': '批量转账代收',
			'SIGN096': '批量代收电费',
			'SIGN097': '批量代收电力调峰成本差价',
			'SIGN098': '批量代收水费',
			'SIGN099': '批量代收垃圾费',
			'SIGN100': '批量代收燃气费',
			'SIGN101': '批量代收物业管理费',
			'SIGN102': '批量代收电视网络费',
			'SIGN103': '批量代收电信费',
			'SIGN104': '批量代收互联网费',
			'SIGN105': '批量代收租赁费',
			'SIGN106': '批量代收移动话费',
			'SIGN107': '批量代收管理费',
			'SIGN108': '批量代收承包费',
			'SIGN109': '批量代收托费',
			'SIGN110': '批量代收注册费',
			'SIGN111': '批量代收学费',
			'SIGN112': '批量代收书杂费',
			'SIGN113': '批量代收学杂费',
			'SIGN114': '批量代收杂费',
			'SIGN115': '批量代收餐费',
			'SIGN116': '批量代收择校（捐资助学）费',
			'SIGN117': '批量代收住宿费',
			'SIGN118': '批量代收体检费',
			'SIGN119': '批量代收会考费',
			'SIGN120': '批量代收军训费',
			'SIGN121': '批量代收校服费',
			'SIGN122': '批量代收补课费',
			'SIGN123': '批量代收校外活动费',
			'SIGN124': '批量代收兴趣活动费',
			'SIGN125': '批量代收服务费',
			'SIGN126': '批量代收排污费',
			'SIGN127': '批量代收生活费',
			'SIGN128': '批量代收清洁费',
			'SIGN129': '批量代收保险费',
			'SIGN130': '批量代收除四害服务费',
			'SIGN131': '批量代收养老金',
			'SIGN132': '批量代收养老保险',
			'SIGN133': '批量代收社保费',
			'SIGN134': '批量代收居民基本医疗保险费',
			'SIGN135': '批量代收税费',
			'SIGN136': '批量代收POS机租赁费',
			'SIGN137': '批量代收运费',
			'SIGN138': '批量代收托养费',
			'SIGN139': '批量代收个人所得税',
			'SIGN140': '批量代收对公小额账户管理费',
			'SIGN141': '批量代收个人小额账户管理费',
			'SIGN142': '批量代收水费（不校验）',
			'SIGN143': '批量代收回单柜年费',
			'SIGN144': '批量代收租金',
			'SIGN145': '批量代收垃圾费（不校验）'
		},
		//零售CRM-渠道类型-channelTypeCd
		PER_CHN_CD: {
			'POS': 'POS',
			'IBS': '电子银行',
			'CNT': '柜面',
			'ATM': 'ATM',
			'MBS': '手机银行',
			'TBS': '电话银行'
		},
		//零售CRM-与银行关系
		DM_BANK_REL: {
			'01': '非常密切',
			'02': '密切',
			'03': '一般'
		},
		//零售CRM-事件状态
		HAPPEN_FLAG: {
			'0': '未发生',
			'1': '已发生'
		},
		//零售CRM-事件影响程度
		EVENT_TYPE: {
			'1': '特大',
			'2': '重大',
			'3': '一般'
		},
		//零售CRM-性格及特长(CRM修改后)
		HOBBIES_YHFW : {
			'01' : '热情',
			'02' : '活泼',
			'03' : '开朗',
			'04' : '健谈',
			'05' : '理性',
			'06' : '谨慎',
			'07' : '老实',
			'08' : '配合',
			'09' : '好强',
			'10' : '顽固',
			'11' : '圆滑',
			'12' : '势利',
			'13' : '冷漠',
			'14' : '虚荣',
			'15' : '特长'
		},
		//零售CRM-运动健身(CRM修改后)
		HOBBIES_CFGL : {
			'01' : '健身',
			'02' : '篮球',
			'03' : '足球',
			'04' : '羽毛球',
			'05' : '网球',
			'06' : '乒乓球',
			'07' : '瑜伽',
			'08' : '拉丁舞',
			'09' : '爵士舞',
			'10' : '摩登舞',
			'11' : '街舞',
			'12' : '徒步',
			'13' : '登山探险',
			'14' : '橄榄球',
			'15' : '高尔夫',
			'16' : '滑雪',
			'17' : '马术/马赛',
			'18' : '赛车',
			'19' : '游艇',
			'20' : '其他'
		},
		//零售CRM-休闲爱好(CRM修改后)
		HOBBIES_ZHSXFW : {
			'01' : '休闲旅游',
			'02' : '阅读',
			'03' : '风水易经',
			'04' : '其他'
		},
		//零售CRM-音乐类(CRM修改后)
		HOBBIES_GJZCCCGH : {
			'01' : '流行音乐',
			'02' : '摇滚音乐',
			'03' : '乡村音乐',
			'04' : '古典音乐',
			'05' : '歌剧',
			'06' : '戏剧',
			'07' : '其他'
		},
		//零售CRM-健康养生类(CRM修改后)
		HOBBIES_JRZXFW: {
			'01': '养生保健',
			'02': '心理健康咨询',
			'03': '女性健康',
			'04': '私人医生及健康顾问',
			'05': '其他'
		},
		//零售CRM-教育类(CRM修改后)
		HOBBIES_QTFW: {
			'01': '亲子沟通',
			'02': '海外留学专题',
			'03': '青少年才艺辅导',
			'04': '其他'
		},
		//零售CRM-奢侈品类(CRM修改后)
		HOBBIES_TZL: {
			'01': '品牌服饰箱包',
			'02': '名酒品鉴',
			'03': '艺术品鉴赏',
			'04': '名表鉴赏',
			'05': '珠宝品鉴',
			'06': '名车试驾',
			'07': '其他'
		},
		//零售CRM-投资类(CRM修改后)
		HOBBIES_XXL: {
			'01': '保本类理财产品',
			'02': '非保本类理财产品',
			'03': '保险',
			'04': '黄金',
			'05': '货币市场产品',
			'06': '外汇',
			'07': '股票',
			'08': '基金',
			'09': '债券产品',
			'10': '房地产',
			'11': '收藏品',
			'12': '拍卖',
			'13': '期货',
			'14': '私募股权',
			'15': '其他'
		},
		//零售CRM-商业银行服务(CRM修改后)
		HOBBIES_SCPL: {
			'01': '结算服务',
			'02': '信贷服务',
			'03': '信用卡',
			'04': '金融咨询服务',
			'05': '其他'
		},
		//零售CRM-国际资产传承规划(CRM修改后)
		HOBBIES_JKL : {
			'01' : '税务咨询',
			'02' : '移民咨询',
			'03' : '子女教育',
			'04' : '资产信托',
			'05' : '保险计划',
			'06' : '其他'
		},
		//零售CRM-房产类型
		HOUSE_TYPE: {
			'1': '普通住宅',
			'2': '高档公寓',
			'3': '别墅',
			'4': '写字楼',
			'5': '商铺',
			'6': '工业用房'
		},
		//零售CRM-结构类型
		HOUSE_STRUCTURE: {
			'1': '钢结构',
			'2': '钢、钢筋混凝土结构',
			'3': '钢筋混凝土结构',
			'4': '混合结构',
			'5': '砖木结构',
			'6': '其它结构'
		},
		//零售CRM-汽车类型
		CAR_TYPE: {
			'A1': '大型客车',
			'A2': '牵引车',
			'A3': '城市公交车',
			'B1': '中型客车',
			'B2': '大型货车',
			'C1': '小型汽车',
			'C2': '小型自动挡汽车'
		},
		//零售CRM-收藏品类型
		COLLECT_TYPE: {
			'01': '文物类',
			'02': '珠宝',
			'03': '钱币类',
			'04': '邮票类',
			'05': '文献类',
			'06': '票券类',
			'07': '商标类',
			'08': '徽章类',
			'09': '标本类',
			'10': '陶瓷类',
			'11': '玉器类',
			'12': '绘画类'
		},
		//零售CRM-金融机构名称
		DM_INSTN_NAME: {
			'01': '招商银行',
			'02': '工商银行',
			'03': '建设银行'
		},
		//零售CRM-服务类别
		DM_SERVICE_TYPE: {
			'01': '生日、节假日和客户重大事件',
			'02': '流失挽留',
			'03': '日常关系维护',
			'04': '业务宣传推广',
			'05': '其他'
		},
		//服务计划-资金流入目的
		PER_ZJ_LR_MD: {
			'01': '购买理财',
			'02': '其他'
		},
		//服务计划-资金流出去向
		PER_ZJ_LC_CQ: {
			'01': '他行',
			'02': '股市',
			'03': '房市',
			'04': '其他'
		},
		//服务计划-资金流出目的
		PER_ZJ_LC_MD: {
			'01': '买房',
			'02': '买车',
			'03': '炒股',
			'04': '他行理财利率高',
			'05': '他行存款利率高',
			'06': '其他'
		},
		//服务计划-客户降级原因
		PER_KH_DOWN_YJ: {
			'01': '存款转移',
			'02': '其他'
		},
		//服务计划-客户流失原因
		PER_KH_LOSE_YJ: {
			'01': '他行产品利率高',
			'02': '我行服务工作不到位',
			'03': '其他'
		},
		//服务计划-执行渠道
		DM_SERVICE_PLAN_CHN: {
			'01': '电话',
			'02': '上门',
			'03': '邮件',
			'04': '短信',
			'05': '其他'
		},
		//CRM-公司客户服务类别
		SERVICE_KIND: {
			'1': '日常关系维护',
			'2': '客户拜访',
			'3': '客户电话访谈',
			'4': '客户投诉响应',
			'5': '流失挽留服务计划'
		},
		//是否居民
	 	isResident: {
			'1':'是',
			'0':'否'
		},
		//国家
		country: {
			'CN': '中国'
		},
		//文件上传流水业务类型
		uploadFlowBusiType: {
			'0': '借记卡开卡',
			'1': '综合签约',
			'2': 'POS受理',
			'3': '个人信息修改',
			'4': '理财购买',
			'5': '事后监督',
			'6': '理财风评',
			'7': 'CRM',
			'8': '票据购买'
		},
		//通讯语言
		languageCode: {
			'12': '中文',
			'01': '英文'
		},
		//核实结果
		custNo2Code: {
			'02': '真实',
			'03': '虚假',
			'04': '假名',
			'05': '匿名',
			'06': '无法核实',
			'07': '疑义',
			'08': '暂不核实'
		},
		//客户类别
		custCategory: {
			'01': '中国居民',
			'02': '军人',
			'03': '武警',
			'04': '香港、澳门、台湾居民',
			'05': '外国公民'
		},
		//证件类型
		business_idtype: {
			'01': '居民身份证',
			'02': '临时身份证',
			'03': '护照',
			'04': '户口簿',
			'05': '军人身份证',
			'06': '武装警察身份证',
			'07': '港澳台居民往来内地通行证',
			'08': '外交人员身份证',
			'09': '外国人居留许可证',
			'10': '边民出入境通行证',
			'11': '其他'
		},
		//民族
		nationality: {
			'01':'汉族',
			'02':'阿昌族',
			'03':'白族',
			'04':'保安族',
			'05':'布朗族',
			'06':'布依族',
			'07':'朝鲜族',
			'08':'达斡尔族',
			'09':'傣族',
			'10':'德昂族',
			'11':'东乡族',
			'12':'独龙族',
			'13':'俄罗斯族',
			'14':'鄂伦春族',
			'15':'鄂温克族',
			'16':'高山族',
			'17':'哈尼族',
			'18':'哈萨克族',
			'19':'赫哲族',
			'20':'回族',
			'21':'基诺族',
			'22':'京族',
			'23':'景波族',
			'24':'柯尔克孜族',
			'25':'拉祜族',
			'26':'黎族',
			'28':'珞巴族',
			'27':'傈僳族',
			'29':'满族',
			'30':'毛南族',
			'31':'门巴族',
			'32':'蒙古族',
			'33':'苗族',
			'34':'仫佬族',
			'35':'纳西族',
			'36':'怒族',
			'37':'普米族',
			'38':'羌族',
			'39':'撒拉族',
			'40':'畲族',
			'41':'水族',
			'42':'塔吉克族',
			'43':'塔塔尔族',
			'44':'侗族',
			'45':'土族',
			'46':'土家族',
			'47':'佤族',
			'48':'维吾尔族',
			'49':'乌兹别克族',
			'50':'锡伯族',
			'51':'瑶族',
			'52':'彝族',
			'53':'仡佬族',
			'54':'裕固族',
			'55':'藏族',
			'56':'壮族'
		},
		//身份证核查结果
		checkResult:{
			'00':'公民身份号码与姓名一致，且存在照片',
			'01':'公民身份号码与姓名一致，但不存在照片',
			'02':'公民身份号码存在，但与姓名不匹配',
			'03':'公民身份号码不存在',
			'04':'其他错误'
		},
		//重空类型
		importantBlankDocType:{
			'0201':'普卡',
			'0233':'IC普卡',
			'0260':'IC复合卡',
			'0203':'白金卡',
			'0276':'IC白金卡',
			'0277':'复合白金卡'
		},
		//文件上传流水类型
		uploadFlowBusiType:{
			'0':'开卡',
			'1':'签约',
			'2':'POS受理',
			'3':'个人信息修改',
			'4':'理财购买',
			'5':'事后监督',
			'6':'理财风评',
			'7':'CRM',
			'8':'票据购买',
			'9':'开立客户号',
			'10':'理财签约',
			'11':'查询',
			'12':'验密'
		},
		PER_REMIND_TYPE:{
			'RP101001':'账户余额变动（转出）',
			'RP101002':'账户余额变动（转入）',
			'RP101003':'账户余额比重变动（转出）',
			'RP101004':'账户余额比重变动（转入）',
			'RP102001':'新理财产品发售提醒',
			'RP102002':'定期存款到期',
			'RP102003':'定期存款提前支取',
			'RP102004':'理财产品到期',
			'RP102005':'客户生日',
			'RP103001':'客户流失预警提醒',
			'RP103002':'未准入客户升级为准入客户',
			'RP104001':'贷款发放提醒',
			'RP104002':'客户扣款账户余额不足提醒',
			'RP104003':'贷款逾期（本金和利息）提醒',
			'RP104004':'授信到期提醒',
			'RP104005':'抵押登记到期',
			'RP104006':'抵押物保险到期',
			'RP104007':'存量客户贷款余额少于50%',
			'RP104008':'存款月日均环比下降比例超过30%提醒',
			'RP103003':'客户综合等级升级提醒',
			'RP103004':'客户综合等级降级提醒',
			'RP103005':'客户AUM等级升级提醒',
			'RP103006':'客户AUM等级降级提醒',
			'RP103007':'客户贡献度等级升级提醒',
			'RP103008':'客户贡献度等级降级提醒',
			'RP105001':'POS商户销户提醒',
			'RP106001':'理财到期无续买情况',
			'RP106002':'高资产净值客户准入到期',
			'RP106003':'客户他行资产（含定期、理财等）到期提醒'
		},
		OPEN_CARD_JOB:{
			'01':'高级管理者',
			'02':'专业技术人员',
			'03':'国家机关、党群组织、企业、事业单位负责人',
			'04':'半专业人员',
			'05':'办事人员和有关人员',
			'06':'军人',
			'07':'技术工人',
			'08':'建筑贸易',
			'09':'司机',
			'10':'工厂工人',
			'11':'保安',
			'12':'军队— — 应征入伍的士兵',
			'13':'销售',
			'14':'自由职业者/个体户',
			'15':'商业、服务业人员',
			'16':'非技术工人',
			'17':'退休',
			'18':'家庭主妇',
			'19':'学生',
			'20':'待业',
			'23':'不便分类的其他从业人员',
			'21':'农、林、牧、渔、水利业生产人员',
			'22':'生产、运输设备操作人员及有关人员',
			'23':'不便分类的其他人员'
		},
		CARD_TRANSFER_RESTRICT:{
			'N':'无限制',
			'Y':'转账限制'
		},
		OTHER_GOODS_TYPE:{
			'001':'印章',
			'002':'钥匙',
			'003':'假币'
		},
		GOODS_STATUS:{
			'0':'有效',
			'1':'无效',
			'2':'转出',
			'3':'有效+转出'
		},
		ALLOW_SHUT_DOWN:{
			'0':'不能上缴/交接物品箱',
			'1':'警告信息',
			'2':'不能签退',
			'3':'最后一个柜员不能签退'
		},
		/**
		 * 根据类型名称 和key获取value
		 * @param typeName 类型名称
		 * @param typeKey 类型key
		 * @returns
		 * 示例 ： var isEnd = $.mbank.param.getDisplay("IF_FLAG",d.isEnd);
		 */
		getDisplay: function(typeName, typeKey) {
			var map = null;
			if (typeof(typeName) === 'string') {
				map = $.mbank.param[typeName];
			} else {
				map = typeName;
			}
			if (!map) {
				return null;
			}
			typeKey = $.trim(typeKey);
			if (map[typeKey] == undefined || map[typeKey] == 'undefined') {
				return typeKey;
			}
			return map[typeKey];
		},
		/**
		 * 根据类型名称 和value获取key
		 * @param typeName 类型名称
		 * @param typeValue 类型Value
		 * @returns
		 * 示例 ： var isEnd = $.mbank.param.getKey("IF_FLAG",d.isEnd);
		 */
		getKey: function(typeName, typeValue) {
			var map = null;
			if (typeof(typeName) === 'string') {
				map = $.mbank.param[typeName];
			} else {
				map = typeName;
			}
			if (!map) {
				return null;
			}
			typeValue = $.trim(typeValue);
			for(var i in map){
				if(map[i] == typeValue){
					return i;
				}
			}
		},
		/**
		 * 根据字典设置下拉项目
		 * domId下拉框id，typeName类型名称，hasAll是否包含“全部”这个选项
		 * hiddenCallBack 下拉框隐藏时触发的回调函数，一般用于联动
		 * 调用示例 $.mbank.param.setSelectOption('zjLrMd','PER_ZJ_LR_MD',false,hiddenCallBack);//资金流入目的
		 * */
		setSelectOption: function(domId, typeName,hasAll,hiddenCallBack) {
			if (typeof(typeName) === 'string') {
				var liArr = $.mbank.param[typeName];
				if (liArr != null) {
					var html = '';
					var len = 0;
					if(hasAll!=null && hasAll!= false){
						len++;
						html += '<li class="mui-table-view-cell" value="">全部 </li>';
					}
					for(var k in liArr){
						len++;
						html += '<li class="mui-table-view-cell" value="' + k + '">' + liArr [k] + '</li>';
					}
					if(len < 7){
						$('#'+domId+'_popover').css("height",(len*43+14)+'px');
					}
					var $pover = $('#'+domId+'_popover ul');
					$pover.empty();
					$pover.append(html);
					//$.mbank.showTip(html);
					$pover.find('li').bind('click',function(){
						var val = $(this).attr("value");
						var text = $(this).html() + "<span class='mui-icon mui-icon-arrowdown mui-pull-right'></span>";
						var $dom = $('#'+domId);
						$dom.html(text);
						$dom.attr("value",val);
						$dom = null;
						$('.mui-backdrop').remove();
						$('.mui-popover').removeClass('mui-active');
						$('.mui-popover').hide();
						if(hiddenCallBack){
							//hiddenCallBack(val);
							$("#"+domId+'_popover li').off().on('tap',hiddenCallBack);
							//document.getElementById(domId+'_popover').addEventListener('hidden',hiddenCallBack);
						}
					});
					$pover = null;
				}
			}
			if(hiddenCallBack){
				//$("#"+domId+'_popover li').off().on('click',hiddenCallBack)
				//document.getElementById(domId+'_popover').addEventListener('hidden',hiddenCallBack);
			}
		},
		/* @desc 根据mui下拉列表id，以及选项值，自动选择下拉列表的项目
		 * @example : $.mbank.param.setPopover("exeChn_popover",d.exeChn);//执行渠道
		*/
		setPopover : function (popoverId,val){
			$("#"+popoverId+" li").each(function() {
					if( this.attributes["value"].value == val){
						this.click();
					}
				}
			);
		},
		/* @desc 弹出列表选择
		 * @randomNumber:随机数,用于创建弹窗div的id,
		 * 再次弹出时，用于判断是否已经创建过，否则每次都创建div，消耗内存
		 * @title 提示语
		 * @options 字符串数组，选择项目
		 * @callback 回调函数 
		 * @hasCancel 是否包含'取消'按钮
		 * 例子 $.mbank.param.showSel(5000,'请选择客户类型',['对公', '零售'],function(e){alert(e.index + ' : ' + e.text );},true);
		*/
		showSel: function(randomNumber, title, options, callback,hasCancel) {
			var alp = document.getElementById('_alpha_' + randomNumber);
			var ctx = document.getElementById('_ctx_' + randomNumber);
			if (alp == null) {
				var alpha = document.createElement('div');
			    alpha.id = '_alpha_' + randomNumber;
			    alpha.style.cssText = 'position: fixed; top: 0px; left: 0px; width: 100%; height: 100%; background-color: #000000; opacity: 0.5; z-index: 9998;';
				alpha.ontouchstart = function(){ return false; }
				
				var ctxDiv = document.createElement('div');
			    ctxDiv.id = '_ctx_' + randomNumber;
				ctxDiv.style.cssText = 'position: fixed; z-index: 9999; width: 50%; padding: 1.25rem; background: #ffffff; border-radius: 8px; height: 350px; left: 25%; top: 50%; margin-top: -175px;'
				
				var thDiv = document.createElement('div');
				thDiv.style.cssText = 'background:#ffca8d;color:#333333;text-align:center;height:3.0em;line-height:3.0em;font-size:1.8em;font-weight:normal';
				thDiv.textContent = title;
				
				var tbodyDiv = document.createElement('div');
				tbodyDiv.style.cssText = 'max-height: 255px; overflow-y: auto;';
				
				var tb = document.createElement('table');
				tb.width = '100%';
				tb.border = '0';
				tb.cellPadding = '0';
				tb.cellspacing = '0';
				if (options != null && options.length > 0) {
					for (var i = 0 ; i<options.length ; i ++ ) {
						var newTr = tb.insertRow(i);
						newTr.onclick = function(){
							if (callback) {
								callback({
									'index': this.rowIndex,
									'text':this.children[0].innerText
								});
							}
							alpha.style.display = 'none';
							ctxDiv.style.display = 'none';
						};
						newTr.style.cssText = 'border-bottom: 1px solid #ecd7be; background-color: #fdf6ed;';
						var newTd = newTr.insertCell();
						newTd.style.cssText = 'color:#666666;height:50px;line-height:1.4em;font-size:1.6em;text-align:center;';
						newTd.innerText = options[i];
					}
				}
				tbodyDiv.appendChild(tb);
				
				ctxDiv.appendChild(thDiv);//添加标题 div
				ctxDiv.appendChild(tbodyDiv);//添加 列表div
				
				//取消按钮
				if (hasCancel && hasCancel == true) {
					ctxDiv.style.height = '400px';
					ctxDiv.style.marginTop = '-200px';
					var cancelDiv = document.createElement('div');
					cancelDiv.style.cssText = 'text-align: center;';
					var btn = document.createElement('button');
					btn.innerText = '取消';
					btn.onclick = function(){ alpha.style.display = 'none'; ctxDiv.style.display = 'none'; };
					btn.style.cssText = 'margin-top:10px; width:100px; height:3.0em;line-height:1.5em; font-size:1.5em;font-weight:normal; background-color: #ff9800;color: #FFFFFF;border: 1px solid #EC7B00;';
					cancelDiv.appendChild(btn);
					ctxDiv.appendChild(cancelDiv);
				}
				if(options != null && options.length < 5){
					var h = ctxDiv.style.height;
					h = h.substr(0,3);
					h = parseInt(h);
					h = h - (5-options.length) * 50;
					ctxDiv.style.height = h + 'px';
					ctxDiv.style.marginTop = (h/2 * (-1)) + 'px';;
				}
				document.body.appendChild(alpha);
				document.body.appendChild(ctxDiv);
			}else{
				alp.style.display = '';
				ctx.style.display = '';
			}
		}
		
	});
})(jQuery)