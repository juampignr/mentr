import style from '../global.css'
import { Text,View } from 'react-native';
import { Context } from '../App';
import { useContext,useEffect,useState } from 'react';

export default function Card({children}){

  let ctx = useContext(Context)
  let [parentClass,setParentClass] = useState("visible")

  useEffect(() => {

    if(ctx.status != "showing cards"){

      setParentClass(style.invisible)

    }else{

      setParentClass(style.visible)

    }

  },[ctx.status])

  return(<View style={parentClass}>
          <View style={style.card}>
            <Text style={style.headerBig}>{children[0]}</Text><Text style={style.headerMedium}>{children[1]}</Text>
          </View>
        </View>);
}