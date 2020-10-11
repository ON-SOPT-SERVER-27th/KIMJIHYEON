const seminarMembers = [
    {
      name: "김지현",
      place: "서초구 잠원동",
      age: "22",
      hobby: "운동"
    },
    {
      name: "한수아",
      place: "서울시 강서구",
      age: "22",
      hobby: "영상편집"
    },
    {
      name: "박상수",
      place: "인천광역시 연수구",
      age: "27",
      hobby: "사진찍기"
    },
    {
      name: "김민지",
      place: "서울시 도봉구",
      age: "24",
      hobby: "밀키랑 놀기"
    },
    {
      name: "신연상",
      place: "서울시 강남구",
      age: "21",
      hobby: "유튜브 & 방탈출"

    },
    {
      name: "강준우",
      place: "서초구 잠원동",
      age: "22",
      hobby: "운동"
    }   
]

const getMember = (members) => {
  members.filter(member => {
    console.log(member);
  });
}

getMember(seminarMembers);