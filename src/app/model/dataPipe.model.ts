import { Pipe ,PipeTransform } from '@angular/core';


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

