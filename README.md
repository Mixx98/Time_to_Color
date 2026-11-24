# 🎨 Time to Color

**"여러분의 시간은 무슨 색인가요?"**
하루의 모든 순간(밀리초)에 서로 다른 색을 하나씩 배정하는 아이디어를 담은 개인 포트폴리오 웹사이트입니다.

## 핵심 아이디어 – 시간을 색으로 바꾸기

- 하루 = 24 × 60 × 60 × 1000 = **86,400,000 ms**
- RGB 색상 수 = 256³ = 16,777,216개 → 투명도(Alpha) 5단계를 더해 **83,886,080개**
- 86,400,000 ÷ 83,886,080 ≈ **1.03ms마다 색 하나**를 배정
- 자정부터 현재까지 흐른 ms를 계산해 지금 이 순간의 고유한 색을 만듭니다. (`js/changeColor.js`)

## 페이지 구성

| 섹션 | 내용 |
| --- | --- |
| **Profile** | 자기소개, 사이트 제목이 현재 시간의 색으로 계속 바뀜 |
| **Photo** | 사진 슬라이드 |
| **Career** | 경력·활동 (`json/career.json`) + 기술 스택 레이더 차트 (`json/data.json`) |
| **Color** | 원하는 시간을 입력하면 그 시간의 색을 보여줌 |
| **Guest** | 방명록 – "좋았던 시간"을 남기면 그 시간의 색으로 표시 (localStorage 저장) |

## 파일 구조

```
├── index.html
├── main.css / media.css / normalize.css   # 스타일, 반응형
├── js/
│   ├── app.js          # 메뉴 스크롤 이동, Top 버튼
│   ├── changeColor.js  # 시간 → 색 변환 로직
│   ├── slide.js        # 사진 슬라이드
│   ├── chart.js        # AnyChart 레이더 차트
│   ├── career.js / profile.js   # JSON 데이터 렌더링
│   ├── guest.js        # 방명록
│   └── animation.js
├── json/               # 프로필·경력·스킬 데이터
└── img/
```

## 사용 기술

`HTML` `CSS` `JavaScript (Vanilla)` `AnyChart` `localStorage` `Fetch API`

## 실행 방법

JSON 파일을 `fetch`로 불러오기 때문에 로컬 서버로 열어야 합니다.

```bash
npx serve .
# 또는 VS Code의 Live Server 확장 사용
```

---
📅 2023년 1월
