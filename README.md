# lpl-ramentech-landing

LPL(Less Plastic Life) × RAMEN TECH 2026 부스 랜딩페이지.

부스 방문객이 QR코드로 접속해 바이오플라스틱 원료(전분, 커피박, 왕겨, 타피오카, 밀기울)를 이해하는 모바일 우선 페이지. 영어·일본어·중국어(간체)·한국어 4개 언어.

## 고치는 방법

| 바꾸고 싶은 것 | 파일 |
|---|---|
| 문구(4개 언어), 함량(%), 설문 링크, 카드 순서 | `js/content.js` |
| 원료 사진 | `assets/img/` 안의 파일을 같은 이름으로 교체 (`xxx.jpg` 큰 사진, `xxx-thumb.jpg` 회전 카드용 작은 사진) |
| 색·크기·모양 | `css/style.css` |

- 함량은 `biomassPercent` 숫자 하나만 바꾸면 모든 카드에 반영돼요.
- 설문 링크는 `surveyUrl`의 언어별 칸에 넣으세요. 링크 뒤에 `?src=booth&card=원료&lang=언어`가 자동으로 붙어요.
- 언어를 고정해서 열고 싶으면 주소 뒤에 `?lang=en` / `ja` / `zh` / `ko`를 붙이면 돼요. (언어별 QR코드에 쓸 수 있어요)

## 로컬에서 보기

```
python3 -m http.server 8000
```

그 다음 브라우저에서 `http://localhost:8000` 을 열어요.
