# 내 조직의 리뷰 할당을 디스코드 채널로 자동 전송하기
<p align="center"><a href="https://github.com/"><img width=50% src="https://blog.kakaocdn.net/dn/D0oXk/btsmQpkA7zi/I6TXRzhWDkHmCuRz4IPpYK/img.png"></a></p>



&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
![Github API](https://img.shields.io/badge/github-api-red.svg)
![Discord Webhook](https://img.shields.io/badge/discord-webhook-blue.svg)
![Github Actions](https://img.shields.io/badge/github-actions-green.svg)



해당 프로젝트는 디스코드 채널에 매일 9시경에 내 조직의 리뷰 할당 현황을 전송하는 기능을 구현하였습니다.<br/>
프로젝트에서는 총 3가지 기술이 사용했는데, 1. github API를 사용하여 조직의 리뷰 할당 정보를 접근하고, 2. discord webhook로 디스코드 채널에 할당 현황을 전송하고,
3. github Actions의 스케쥴링을 사용해 매일 일정시간에 채널에 메시지를 전송토록 하였습니다.
<br/>


<img src="https://blog.kakaocdn.net/dn/w4mvr/btskuQkdFdP/h2Mummhy7o1n0bEk9R33a0/img.png" width="100%" />


---

## 관련 포스팅 보기
> 프로젝트에서 사용한 기술에 대해 포스팅을 확인하실 수 있습니다.

1. Github API로 내 조직의 할당 현황 정보 가져오기[ (링크) ](https://mong-blog.tistory.com/entry/%EB%82%B4-%EC%A1%B0%EC%A7%81%EC%9D%98-%EB%A6%AC%EB%B7%B0-%ED%95%A0%EB%8B%B9-%ED%98%84%ED%99%A9-%EA%B5%AC%ED%95%98%EA%B8%B01-github-API-%EC%82%AC%EC%9A%A9%EB%B2%95)
2. Discord webhook으로 채널에 메시지 전송하기 [ (링크) ](https://mong-blog.tistory.com/entry/%EB%82%B4-%EC%A1%B0%EC%A7%81%EC%9D%98-%EB%A6%AC%EB%B7%B0-%ED%95%A0%EB%8B%B9-%ED%98%84%ED%99%A9-%EA%B5%AC%ED%95%98%EA%B8%B02-discord-webhook-%EC%82%AC%EC%9A%A9%EB%B2%95)
3. github actions로 메시지 스케쥴링하기 [ (링크) ](https://mong-blog.tistory.com/entry/%EB%82%B4-%EC%A1%B0%EC%A7%81%EC%9D%98-%EB%A6%AC%EB%B7%B0-%ED%95%A0%EB%8B%B9-%ED%98%84%ED%99%A9-%EA%B5%AC%ED%95%98%EA%B8%B03-github-actions%EB%A1%9C-%EB%A9%94%EC%8B%9C%EC%A7%80-%EC%8A%A4%EC%BC%80%EC%A5%B4%EB%A7%81%ED%95%98%EA%B8%B0)

