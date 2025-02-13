### 디자인 시스템

- 형태
  - 색상 팔레트
  - 타이포그래피
  - 컴포넌트
- 기능
  - 입력
  - 선택
- 접근성
  - 컬러 대비
  - 키보드 네비게이션
  - aria
  - 포커스

#### 형태

제약과 자유로움 중 적절함을 찾아야 한다.

- 제약
- 자유
  - Compound Pattern 활용
  - Props에 ReactNode 추가

---

### 디자인 시스템의 구조

1. 원칙: 디자인과 개발에 대한 핵심 가침 및 지침

- 여기에는 디자인 지침 뿐만 아니라 ESLint, CSS, 네이밍 규칙, 테스트와 같은 기술적인 원칙도 포함되어 있음

2. 테마(파운데이션): 색상, 타이포그래피, 그리드, 스페이싱과 같은 기본 디자인 요소에 대한 지침
3. 컴포넌트: 버튼, 입력란, 탭, 모달 등과 같은 재사용 가능한 UI 요소의 라이브러리
4. 패턴: 여러 컴포넌트를 결합하여 만들어진 복잡한 사용자 인터페이스 요소

- ex) 검색폼, 네비게이션 메뉴, 테이블, 드롭다운 메뉴 등

5. 도구 및 유틸리티: 디자인 시스템을 실제 제품에 통합하기 위한 도구와 플러그인

- ex) 디자인 시스템을 구현한 CSS Framework, React 컴포넌트 라이브러리, 디자인 툴 플러그인 등
- ex) Chakra UI에서 차세대 디자인 시스템을 구축하는데, 이를 더 잘 구축하기 위해 Panda CSS 프레임워크 구축 + 패턴화로직을 더 잘 구현하기 위해 Zag 상태 머신 사용
  - https://github.com/chakra-ui/zag

6. 문서화: 디자인 시스템의 모든 요소를 사용하는 방법 (파라미터, 시각화, 코드 스니펫)
7. 가이드라인: 좋은 사용성, 접근성 등의 가이드와 권장사항들
8. 프로세스 및 워크플로우: 디자인 시스템 업데이트, 확장하는 것에 대한 프로세스

예시

- https://spectrum.adobe.com/
- https://react-spectrum.adobe.com/react-aria/index.html
- https://www.radix-ui.com/

### 디자인 토큰 동작 원리 (CSS Variable)

CSS Variable: CSS에서 사용하는 변수.  
지역 변수와 전역 변수 형태.  
var()를 통해서 자유롭게 적용할 수 있음.

### 라이브러리 제작 시 고려사항

- cjs, mjs, ts 모두 고려되어야 함 => 3번 이상 빌드를 진행해야 함
- 라이브러리의 모듈 번들러는 속도, 최적화(번들 사이즈, 트리쉐이킹) 등에 더 포커스가 되어있다.
- rollup, snowpack, snowpack 등을 사용함

ESBuild

- 매우 빠른 빌드 속도
- Go 언어 사용
- 코드 파싱, 출력, 소스맵 생성을 모두 병렬로 처리
- 불필요한 데이터 변환과 할당이 없음

Vite

- Production에서는 rollup 사용
  - 다양한 인프라나 플러그인에 대응이 되지 않으므로
- Development의 사전 번들링에서는 esbuild 사용

### FileSystem 기반 설치
npm i file:../../packages/themes

### Yarn berry와 IDE 충돌 해결 방법
yarn dlx @yarnpkg/sdks vscode

### yarn berry 관련 세팅 문제
https://usage.tistory.com/172