import { Pipe ,PipeTransform } from '@angular/core';

// 需求类型

@Pipe({ name: 'xqType' })

export class xqTypePipe implements PipeTransform{
    transform(value): string{
        if(value == 0){            
            return "种植业";
        }else if(value ==1){
            return "林业"
        }else if(value == 2){
            return "畜牧业"
        }else if(value == 3){
            return "渔业"
        }else{
            return "其他"
        }
        
    }
}

// 竞价方式
@Pipe({ name: 'jjfsType' })

export class jingJiaFangShiPipe implements PipeTransform{
    transform(value): string{
        if(value == 0){            
            return "自由竞价";
        }else if(value ==1){
            return "阶梯竞价"
        }else if(value == 2){
            return "拍卖"
        }else if(value == 3){
            return "招投标"
        }else{
            return "其他"
        }
        
    }
}
// 布尔值转换
@Pipe({ name: 'boolean' })

export class booleanPipe implements PipeTransform{
    transform(value): string{
        if(value == true){            
            return "是";
        }else {
            return "否"
        }     
    }
}

// 转出方式
@Pipe({ name: 'zcfsType' })

export class zhuanChuFangShiPipe implements PipeTransform{
    transform(value): string{
        if(value == 0){            
            return "出租";
        }else if(value ==1){
            return "转让"
        }else if(value == 2){
            return "互换"
        }else if(value == 3){
            return "转包"
        }else{
            return "入股"
        }        
    }
}

// 价格单位
@Pipe({ name: 'jgdwType' })

export class jiaGeDanWeiPipe implements PipeTransform{
    transform(value): string{
        if(value == 0){            
            return "元";
        }else if(value ==1){
            return "元/年"
        }else{
            return "元/亩/年"
        }        
    }
}

// 支付方式
@Pipe({ name: 'zffsType' })

export class zhiFuFangShiPipe implements PipeTransform{
    transform(value): string{
        if(value == 0){            
            return "一次性支付全部价款";
        }else if(value ==1){
            return "分期支付"
        }else{
            return "其他"
        }        
    }
}
// 期满处理方式
@Pipe({ name: 'qmclType' })

export class qiManChuLiPipe implements PipeTransform{
    transform(value): string{
        if(value == 0){            
            return "信息发布终结";
        }else if(value ==1){
            return "延长信息发布"
        }else{
            return "变更公告内容重新挂牌"
        }        
    }
}
// 缴纳形式
@Pipe({ name: 'jnxs' })

export class jiaoNaXingShiPipe implements PipeTransform{
    transform(value): string{
        if(value == 0){            
            return "现金汇缴";
        }else if(value ==1){
            return "支票"
        }else if(value ==1){
            return "汇票"
        }else{
            return "电汇"
        }        
    }
}
// 土地性质
@Pipe({ name: 'tdxz' })

export class tuDiXingZhiPipe implements PipeTransform{
    transform(value): string{
        if(value == 0){            
            return "家庭承包地";
        }else if(value ==1){
            return "机动地"
        }else if(value ==1){
            return "四荒地"
        }else{
            return "其他"
        }        
    }
}
// 转让方类型
@Pipe({ name: 'zrfType' })

export class zhuanRangFangTypePipe implements PipeTransform{
    transform(value): string{
        if(value == 0){            
            return "集体";
        }else if(value ==1){
            return "个人"
        }else if(value ==1){
            return "公司"
        }else{
            return "合作社"
        }        
    }
}
// 需求方类型
@Pipe({ name: 'xqfType' })

export class xuQiuFangTypePipe implements PipeTransform{
    transform(value): string{
        if(value == 0){            
            return "集体";
        }else if(value ==1){
            return "个人"
        }else{
            return "企业"
        }        
    }
}


