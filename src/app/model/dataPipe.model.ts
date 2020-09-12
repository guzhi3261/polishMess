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
