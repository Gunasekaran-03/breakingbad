const initialState = {
  characterList  : [],
  episodeList    : [],
  characterInfo : [
    {
      "char_id": 0,
      "name": "",
      "birthday": "",
      "occupation": [
          ""
      ],
      "img": "",
      "status": "",
      "nickname": "",
      "appearance": [
          0,
          
      ],
      "portrayed": "",
      "category": "",
      "better_call_saul_appearance": [
          
          
      ]
  }
  ],
  episodeInfo :[
    {
      "episode_id": 0,
      "title": "xxxx",
      "season": "0",
      "air_date": "000000",
      "characters": [
          "yyyyyyyy"
          
      ],
      "episode": "0",
      "series": "zzzzzzzz"
  }
  ]
}


function SeriesReducer(state = initialState, action) {
    switch (action.type) {
      
      case "AC_LIST_EPISODE":
        return Object.assign({}, state, {
          episodeList  : action.payload,
        })
      case "AC_LIST_CHARACTER":
        return Object.assign({}, state, {
          characterList  : action.payload,
      })
      case "AC_CHARACTER_INFO":
        return Object.assign({}, state, {
          characterInfo  : action.payload,
      })
      case "AC_EPISODE_INFO":
        return Object.assign({}, state, {
          episodeInfo  : action.payload,
      })
      default:
        return state
    }
  }
  
  export default SeriesReducer;