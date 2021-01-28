# Among Earth 🌏

Keyword : `#스트리트 뷰` `#가상여행` `#Gif`
Among Earth는 **스트리트 뷰 이미지를 이용해 가상 여행을 경험할 수 있는 웹 애플리케이션** 입니다.

### 미리 보기 🎬

![Main](/readmeAssets/among-earth-gif.gif)
- [Project StandUp Video](https://youtu.be/jMw5MIxLY3o?t=3998)

### 바로 이동하기 👉

- [Link](#Link-🔗)
- [About Project](#About-Project-🗂)
- [Usage](#Usage-🗂)
- [Stack](#Stack)
- [Deploy](#Deploy)
- [Project Process](#Project-Process)
- [Learning Points](#Learning-Points)
- [Things To Do](#Things-To-Do)

---

## Link 🔗

### 깃헙 저장소

- [Frontend](https://github.com/dohee3520/among-earth-frontend)
- [Backend](https://github.com/dohee3520/among-earth-backend)

### 배포 주소

- [배포 링크](https://www.among-earth.site)

---


## About Project 🗂

```

프로젝트 기간

2020.11.30 - 12.18 / **3주** (1주 - 아이디어 구체화 & 설계 + 2주 - 구현 & 배포)
- 1주차 - 아이디어 구체화, Figma를 이용한 목업 작업, Notion을 활용한 태스크 분할
- 2주차 - 주요 기능 구현
- 3주차 - 클라이언트/서버 배포, 클라이언트/서버 테스트 코드 작성, 코드 리팩토링

```

### 기획 동기

Covid-19의 확산으로 언제 또 다시 해외여행을 떠날 수 있을지 판단이 불가능해지면서 각종 랜선여행 콘텐츠에 대한 수요가 증가 하고 있습니다.

저 또한 여행을 즐겨하던 사람으로써 이러한 여행 콘텐츠의 변화를 주시해왔고 저와 같은 **집구석 여행자들에게 다시 세상을 여행하는 듯한 기분을 느낄 기회를 제공해주는 애플리케이션이 있으면 어떨까?** 하는 생각을 토대로 기획 되었습니다.

누군가에겐 그리운 여행지를 다시 가보는 색다른 경험을, 누군가에겐 작은 휴식과 모험심을 느낄 수 있는 위안이 되었으면 하는 마음으로 제작했습니다.

### 주요 기능

- **검색 및 탐색 기능 개선**
  - 사용자의 검색 편의성을 위해 가고자 하는 국가와 장소 데이터의 문자열을 입력하면 찾고자하는 데이터를 자동적으로 추천해주는 기능을 제공합니다.
  - 옵션 선택을 위해 키보드와 마우스를 모두 지원합니다.
- **랜드마크 추천을 통한 다양한 경유지 선택**
  - 경유지 추가와 삭제가 용이합니다.
  - 사용자가 가고 싶어하는 랜드마크 반경 1km내에 있는 다른 랜드마크들을 가까운 위치 순으로 추천합니다.
- **지도를 통해 여행경로 확인**
  - 위성지도에서 시각화된 최단 여행경로를 확인 할 수 있습니다.
  - 지도의 마커를 이용해 사용자가 설정한 랜드마크의 위치를 확인 할 수 있습니다.
  - 다시하기 버튼을 누르면 랜드마크 추천 페이지로 돌아가 경로를 재설정 할 수 있습니다.
- **전체 이동경로 사이의 좌표값 및 스트리트 뷰 카메라 앵글 각도 계산**
  - 각 랜드마크 사이의 좌표값을 일정 간격대로 산출한 후, 두 좌표값끼리의 카메라 앵글 각도를 계산해 자연스러운 경로 이동이 가능합니다.
  - Canvas를 활용해 스트리트 뷰 이미지들을 동적으로 관람 할 수 있습니다.
  - 자세히 보기 : [Learning Points](#Learning-Points)
- **AWS s3를 사용하여 모든 사용자의 여행 정보 관리**
  - 사용자가 여행을 끝내면 canvas를 블롭 객체로 전환한 후 폼데이터를 이용해 이미지 정보를 저장합니다.
  - Amazon AWS S3에 사용자의 이미지를 업로드합니다.
  - 애플리케이션을 사용한 모든 사용자의 여행 이미지를 관람 할 수 있습니다.

---

## Usage 🗝

### 사전 준비

- 최신 버전의 크롬 브라우저 사용을 권장합니다.
- Local 환경에서 실행하기 위한 사전 준비가 필요합니다.

- [Google Maps API Key](https://cloud.google.com/maps-platform/?utm_source=google&utm_medium=cpc&utm_campaign=FY18-Q2-global-demandgen-paidsearchonnetworkhouseads-cs-maps_contactsal_saf&utm_content=text-ad-none-none-DEV_c-CRE_460848633529-ADGP_Hybrid%20%7C%20AW%20SEM%20%7C%20BKWS%20~%20Google%20Maps%20API%20Key-KWID_43700035216023629-aud-581578347266%3Akwd-298247230705-userloc_1030760&utm_term=KW_google%20maps%20api%20key-ST_google%20maps%20api%20key&gclid=Cj0KCQiA0fr_BRDaARIsAABw4Et9xmLM_rakYTnqBv9JqmyA-Ws2uNNtmuXAquyx3lQ804b8sIW7DYwaAs65EALw_wcB)
- [AWS S3](https://aws.amazon.com/ko/)

### 프론트엔드

  - 프로젝트를 클론 받습니다.

    ```jsx

    git clone https://github.com/dohee3520/among-earth-frontend.git
    cd among-earth
    npm install

    ```

  - Root 디렉토리에 `.env` 파일을 생성하고, 사전에 준비한 Google Maps API Key로 환경변수를 설정합니다.

    ```jsx

    REACT_APP_GOOGLE_API_KEY=<YOUR Google maps API Key>

    ```

  - 애플리케이션을 실행합니다.

    ```jsx

    npm start

    ```

### 백엔드

  - 프로젝트를 클론 받습니다.

    ```

    git clone https://github.com/dohee3520/among-earth-backend.git
    cd among-earth
    npm install

    ```

  - Root 디렉토리에 `.env` 파일을 생성하고, 사전에 준비한 Google Maps API KEY와 AWS S3 정보로 환경변수를 설정합니다.

    ```jsx

    GOOGLE_API_KEY=<Your Google maps API KEY>

    AWS_BUCKET_NAME=<Your AWS bucket name>
    AWS_ACCESS_KEY_ID=<Your AWS acess KEY>
    AWS_SECRET_ACCESS_KEY=<Your AWS secret access KEY>
    AWS_REGION=<Your AWS Region>
    AWS_Uploaded_File_URL_LINK=<Your AWS uploaded file URL link>

    ```

  - 애플리케이션을 실행합니다.

    ```jsx

    npm start

    ```

---

## Stack 🖊

| Front-end              | Back-end                |
| :--------------------- | :---------------------  |
| ES2015+                | ES2015+                 |
| React                  | NodeJS (Express)        |
| React-router-dom       | multer                  |
| Redux                  | AWS S3                  |
| Axios                  | Mocha                   |
| Styled-components      | Supertest               |
| React-testing-library  | Sinon                   |


---

## Deploy ✨

### Frontend

- Netlify를 사용하여 애플리케이션 배포 및 관리

### Backend

- AWS Elastic Beanstalk를 사용하여 애플리케이션 배포 및 관리
- Amazon ACM (AWS Certificate Manager)을 사용하여 SSL 관리
- 파이프라인 연결 후 배포 자동화 구현

---

## Learning Points 👩‍🎓

#### 두 지점 사이의 좌표들 산출, 그리고 두 지점의 스트리트 뷰 카메라 앵글 설정

앱 내에서 사용자가 대표 경유지를 3곳 까지 설정할 수 있게끔 구현했습니다. 자연스러운 스트리트뷰 애니메이션 구동을 위해선 지정해 놓은 3개의 좌표 외에도 일정 간격만큼의 또 다른 좌표값들을 산출 해내야 했습니다. 따라서 재귀적으로 두 좌표 사이의 Midpoint를 구하는 공식을 사용해 전체 경로의 좌표값을 구하는 계산을 진행했습니다. 하지만 각 경로의 거리가 모두 다르기 때문에 전체 거리 제한을 둔다고 해도 모든 상황을 예측할 수 없을 뿐더러 경로에 직선구간만 존재하지 않는다는 점 때문에 만족스럽지 못했습니다. 더 찾아보니 구글 경로 API에서 보내주는 응답 데이터에 제가 원하는 좌표값들이 포함되어 있다는 것을 알고 이를 사용해 알고리즘을 완성 할 수 있었습니다.

위의 과정으로 산출된 좌표값들 사이의 각도를 `Math.atan2()` 를 이용해 구했습니다. `atan2()` 는 두 점 사이의 평면 각도를 반환합니다. 모든 좌표의 방위각을 구해야 했기 때문에 이 또한 재귀를 통해 계산 할 수 있었고, 각 좌표의 위,경도 값과 카메라 앵글을 Google Street View API 의 요청 매개변수로 지정해주어 데이터를 가져 올 수 있었습니다. 후에는 Google Geometry API 에 있는 `ComputeHeading()` 메소드를 사용해 불필요한 로직을 줄일 수 있었습니다.

#### 캔버스 애니메이션 Fps(Frames per Second) 조절

캔버스 애니메이션을 자연스럽게 연결시키기 위해 `requestAnimationFrame(rAF)` 을 사용 할 수 있습니다. `requestAnimationFrame`은 브라우저에 애니메이션을 수행하고 싶다고 요청하면 브라우저가 다음 애니메이션을 그리기 전에 애니메이션을 업데이트 하기 위해 지정된 함수를 호출하도록 요청합니다. 하지만 Google Street View API를 통해 가져온 이미지들을 requestAnimatonFrame을 통해 하나씩 보여주려고 하니 애니메이션의 속도 조절이 중요했습니다. rAF는 가장 이상적인 프레임 속도인 60FPS를 제공해주기 때문에 프레임마다 이미지의 경로를 다르게 설정하면 이미지들이 너무 빨리 지나가 버린다는 문제점이 생겼습니다. 프레임 속도를 조절해 24FPS로 애니메이션이 실행되게끔 설정해 두어도 각 컴퓨터의 성능에 따라서 프레임 속도가 달라질 수 있습니다. 따라서 `window.performance.now()` 라는 고해상도 타이머를 이용해 페이지가 로드 되기 시작한 이후의 밀리세컨즈를 측정하여 프레임 속도를 조절하게 해 기기가 달라도 최대한 비슷한 프레임 속도를 낼 수 있게끔 구현했습니다.

#### 캔버스의 이미지 데이터 전송하기

캔버스 데이터를 Amazone AWS S3에 업로드 시키기 위해서 캔버스의 이미지 파일을 추출하여 업로드를 위해 FormData 객체에 추가시켰습니다. 우선 이 과정을 진행하기 위해서 캔버스에서 dataURL을 가져온 다음 Blob으로 변환시켰고, 파일이 업로드 되도록 formData에 데이터를 append를 사용하여 추가시켰습니다. 클라이언트에서 formData를 서버로 POST 메소드를 사용해 전송하였고, 서버에서는 이 데이터를 받아 multer를 사용해 데이터를 핸들링 하는 미들웨어를 생성시키고 그 후에 AWS S3로 업로드 시킬 수 있었습니다.

```

👇 더 자세한 내용을 알고싶으시다면 어몽어스 회고록으로 바로 가기

```
- [어몽어스 회고록 링크](https://velog.io/@dspf3527/2%EC%B0%A8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%96%B4%EB%AA%BD%EC%96%B4%EC%8A%A4-Among-Earth-%ED%9A%8C%EA%B3%A0)
