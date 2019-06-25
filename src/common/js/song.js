// import { getLyric } from 'api/song' // lyric parse
// import { ERR_OK } from 'api/config'
// import { Base64 } from 'js-base64' // base64 解码
import axios from 'axios'
// [Song](https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg?g_tk=5381&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&hostUin=0&needNewCode=0&platform=yqq&order=listen&begin=0&num=80&songstatus=1&singermid=0025NhlN2yWrP4&jsonpCallback=__jp1)
export default class Song {
  constructor({ id, mid, singer, name, album, duration, image, url }) {
    this.id = id
    this.mid = mid
    this.singer = singer
    this.name = name
    this.album = album
    this.duration = duration
    this.image = image
    this.url = url
  }
  // getLyric() { // api/song/getLyric()
  //   if (this.lyric) {
  //     return Promise.resolve(this.lyric)
  //   }
  //   return new Promise((resolve, reject) => {
  //     getLyric(this.mid).then(res => {
  //       if (res.retcode === ERR_OK) {
  //         this.lyric = Base64.decode(res.lyric)
  //         resolve(this.lyric)
  //       } else {
  //         reject(console.log('no lyric'))
  //       }
  //     })
  //   })
  // }
}

export function createSong(musicData, songVkey) { // factory method
  // return new Song({
  //   id: musicData.songid,
  //   mid: musicData.songmid,
  //   singer: filterSinger(musicData.singer), // some item have two singer
  //   name: musicData.songname,
  //   album: musicData.albumname,
  //   duration: musicData.interval,
  //   image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
  //   // 歌曲播放地址
  //   url: `http://isure.stream.qqmusic.qq.com/C100${musicData.songmid}.m4a?fromtag=32`
  // })
  return new Song({
      id: musicData.songid,
      mid: musicData.songmid,
      singer: filterSinger(musicData.singer),
      name: musicData.songname,
      album: musicData.albumname,
      duration: musicData.interval,
      image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
    url: `http://dl.stream.qqmusic.qq.com/C400${musicData.songmid}.m4a?vkey=${songVkey}&guid=6442406400&uin=0&fromtag=66`
    })
}
// 因为一个歌曲可能有很多人唱，所以存储方式是数组形式，但是我们要将它转化为字符串形式显示
function filterSinger(singer) { // some item have two singer
  const ret = []
  if (!singer) {
    return ''
  }
  singer.forEach(item => {
    ret.push(item.name)
  })
  return ret.join('/')
}
export async function getMusic(mid) {
  const url = '/api/music'
  const data = Object.assign({}, {
    songmid: mid,
    filename:'C400' + mid +'.m4a',
    guid:6442406400,
    platform:'yqq',
    loginUin:0,
    hostUin: 0,
    needNewCode: 0,
    g_tk:5381,
    uin:0,
    cid:205361747,
    format: 'json'
  })

  const res = await axios.get(url, {
    params: data
  });
  return Promise.resolve(res.data);
}