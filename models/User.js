import  mongoose  from "mongoose";

//스키마 생성
const UserSchema = mongoose.Schema({
    name:{
        type: String,
        maxlength:50
    },
    email:{
        type: String,
        trim: true,
        unique:1
    },
    password:{
        type: String,
        maxlength:50
    },
    //관리자 설정 해주기 위해
    role:{
        type: Number,
        default : 0
    },
    image : String,
    //유효성 검사 할 때 사용
    token: {
        type: toString,
    },
    // 유효성 기간 설정
    tokenExp:{
        type:Number
    }
})

//모델로 감싸주기 ! 이름 지정해주고 스키마 넣어주고
const User = mongoose.model('User', UserSchema);

export default User;