# Projects Homepage

Next.js App Router, TypeScript, Tailwind CSS로 구성한 Pekaz.DEV 홈페이지입니다. 앱 소개와 Privacy Policy를 제공하며, Vercel로 배포합니다.

## 개발 환경

- Node.js 22.x (`.nvmrc`, `package.json`에 지정)
- Yarn 4.18.1 (`package.json`의 `packageManager`로 고정) 및 `yarn.lock` 사용
- TypeScript strict 모드, ESLint, `@/*` → `src/*` 경로 별칭
- 한국어 문서 언어 설정, 페이지 제목, 어두운 배경의 홈페이지

## 로컬 실행

```bash
# nvm을 사용하는 경우
nvm use

# Yarn 명령 활성화 (컴퓨터마다 한 번)
corepack enable

# 처음 내려받았거나 의존성이 바뀌었을 때
yarn install

# 개발 서버 실행
yarn dev
```

[http://localhost:3000](http://localhost:3000)에서 확인합니다. 파일을 수정하면 화면에 자동 반영됩니다.

Corepack이 프로젝트에 지정된 Yarn 버전을 자동으로 선택합니다. `.yarnrc.yml`의 `nodeLinker: node-modules` 설정으로 일반적인 `node_modules` 폴더를 사용합니다.

## 명령어

| 명령어 | 용도 |
| --- | --- |
| `yarn dev` | 개발 서버 |
| `yarn build` | 배포용 빌드 및 Next.js 타입 검사 |
| `yarn start` | 빌드 결과를 로컬에서 실행 (`yarn build` 이후) |
| `yarn typecheck` | 라우트 타입 생성 및 TypeScript 검사 |
| `yarn lint` | ESLint 코드 검사 |
| `yarn install --immutable` | 잠금 파일을 변경하지 않는 설치 (배포·CI용) |

## 코드 구조

```text
src/
  app/                         # URL별 진입점, 메타데이터, 레이아웃
    sg-bus-mrt/
      privacy-policy/
  components/                  # 공통 프로젝트 헤더, 정책 화면 렌더링
  config/
    site.ts                    # 사이트 이름, 메인 문구, 기본 언어
  features/
    sg-bus-mrt/
      config.ts                # 앱 이름, 경로, 스토어 링크, 아이콘, 이메일
      components/              # 앱 소개 화면, 스토어 버튼
      content/
        overview.ts            # 소개 문구와 기능 목록
        privacy-policy.ts      # 정책 본문, 서비스 목록, 수정일
  styles/
    animations.css             # 등장 효과와 모션 감소 설정
  types/
    privacy-policy.ts          # 정책 콘텐츠의 TypeScript 자료형
public/app-ads.txt              # AdMob 광고 판매자 인증 파일
public/sg-bus-mrt/              # 원본 앱 아이콘
next.config.ts                 # Next.js 설정
.yarnrc.yml                     # Yarn 설치 방식 설정
yarn.lock                       # 의존성 버전 고정
vercel.json                     # Vercel의 Yarn 설치·빌드 명령
```

`app/`은 URL과 메타데이터를 담당합니다. 앱별 정보·문구·화면은 `features/`에, 여러 페이지가 함께 쓰는 화면은 `components/`에 둡니다. 정책 내용은 JSX 없이 데이터로 작성하고, 공통 정책 화면이 문단·링크·서비스 목록을 표시합니다. 정책 항목과 앱 기능의 번호는 배열 순서대로 자동 생성됩니다.

### 수정할 위치

| 수정 내용 | 파일 |
| --- | --- |
| 사이트 이름과 메인 문구 | `src/config/site.ts` |
| 스토어 주소, 아이콘, 문의 이메일 | `src/features/sg-bus-mrt/config.ts` |
| 앱 소개와 기능 설명 | `src/features/sg-bus-mrt/content/overview.ts` |
| 정책 본문과 수정일 | `src/features/sg-bus-mrt/content/privacy-policy.ts` |
| 정책 화면의 공통 스타일 | `src/components/privacy-policy.tsx` |
| 페이드인 효과 | `src/styles/animations.css` |

새 페이지는 `src/app/about/page.tsx`처럼 추가합니다. 이 경우 `/about` 경로로 접속할 수 있습니다. 페이지에 필요한 앱별 화면과 내용은 해당 `features/` 폴더에 작성합니다.

폰트는 운영체제 기본 폰트를 사용하므로 빌드할 때 외부 폰트를 내려받지 않습니다. 현재 실행에 필요한 환경 변수나 데이터베이스는 없습니다. 추후 환경 변수가 필요하면 로컬에서는 `.env.local`, Vercel에서는 프로젝트의 Environment Variables에 추가합니다. `.env*` 파일은 Git에서 제외됩니다.

## Vercel 배포

### 페이지 주소

| 경로 | 내용 |
| --- | --- |
| `/` | Pekaz.DEV 홈페이지와 앱 소개 링크 |
| `/sg-bus-mrt` | SG Bus MRT 소개, 첨부 아이콘, App Store·Google Play 링크 |
| `/sg-bus-mrt/privacy-policy` | SG Bus MRT 영문 Privacy Policy |
| `/app-ads.txt` | AdMob 광고 판매자 인증 파일 |

스토어 링크와 문의 이메일은 `src/features/sg-bus-mrt/config.ts`에서 관리합니다. 아이콘은 `public/sg-bus-mrt/icon.png`에 원본 그대로 저장되어 있습니다.

Privacy Policy는 2026-11-08 앱 소스의 위치 기능, 로컬 저장소, Google Maps, AdMob 및 Firebase Analytics 설정과 기존 정책의 문의 주소를 기준으로 작성했습니다. 앱의 데이터 처리 방식이나 SDK 설정이 바뀌면 함께 갱신합니다. 배포 후에는 App Store·Google Play 및 앱 설정에 등록된 기존 Privacy Policy 주소를 새 페이지 주소로 별도 변경해야 합니다.

### 배포 절차

1. 이 폴더의 변경 사항을 GitHub 저장소에 커밋하고 푸시합니다. 현재 `origin`은 [Monthly100K/projects-homepage](https://github.com/Monthly100K/projects-homepage)로 설정되어 있습니다.
2. [Vercel 새 프로젝트](https://vercel.com/new)에서 해당 저장소를 Import합니다.
3. 아래 설정을 확인한 뒤 **Deploy**를 누릅니다.

| 항목 | 설정 |
| --- | --- |
| Framework Preset | `Next.js` (자동 감지) |
| Root Directory | 저장소 루트 (`./`) |
| Node.js Version | `22.x` (`package.json`의 `engines.node` 적용) |
| Install Command | `vercel.json` 적용 (`corepack yarn install --immutable`) |
| Build Command | `vercel.json` 적용 (`corepack yarn build`) |
| Output Directory | Next.js 기본값 유지 (직접 덮어쓰지 않음) |
| Environment Variables | 현재는 필요 없음 |

`vercel.json`에서 Corepack을 통해 프로젝트에 고정된 Yarn 버전으로 설치·빌드하도록 지정했습니다. Vercel 화면에서 설치·빌드 명령을 별도로 덮어쓸 필요가 없습니다. 최초 연결 이후에는 Vercel에 지정된 Production Branch로 푸시할 때 자동 배포됩니다. 현재 로컬 기본 브랜치는 `main`입니다.

배포가 완료되면 Vercel이 발급한 주소로 확인하고, 필요하면 프로젝트의 Domains에서 개인 도메인을 연결할 수 있습니다.

## AdMob app-ads.txt

`public/app-ads.txt`를 통해 사이트 최상위의 `/app-ads.txt`에서 다음 내용을 제공합니다.

```text
google.com, pub-2350736012338915, DIRECT, f08c47fec0942fa0
```

게시자 ID는 SG Bus MRT의 iOS·Android 광고 설정에서 확인한 값을 사용합니다. AdMob 콘솔에서 제공하는 개인화된 app-ads.txt 코드와 일치하는지 확인합니다.

1. 사이트를 배포하고, 최종 공개 도메인의 `/app-ads.txt`가 로그인 없이 열리는지 확인합니다. 앱 소개 경로인 `/sg-bus-mrt` 아래가 아니라 도메인 최상위에 있어야 합니다.
2. Google Play의 개발자 웹사이트와 App Store의 Marketing URL에 이 사이트 주소를 등록합니다. 개인정보처리방침 URL과는 별도입니다.
3. AdMob에서 app-ads.txt 상태를 확인하고 필요한 앱 인증을 요청합니다. 파일 추가만으로 배포·스토어 등록·AdMob 인증이 자동 완료되지는 않습니다.

공식 안내: [app-ads.txt 설정](https://support.google.com/admob/answer/9363762?hl=en), [AdMob 앱 인증](https://support.google.com/admob/answer/14538460?hl=en).

## 의존성 점검

실행용 의존성은 `yarn npm audit --recursive --environment production`, 개발 도구를 포함한 전체 의존성은 `yarn npm audit --recursive`로 점검할 수 있습니다.

참고: 2026-11-08 초기 npm 설치 당시 실행용 의존성의 취약점 보고는 0건이었으며, 개발용 ESLint 의존성의 `minimatch`에서 비롯된 중간 등급 경고 8건이 보고되었습니다. 이는 Yarn 전환 전의 점검 기록입니다.

공식 문서: [Next.js 설치](https://nextjs.org/docs/app/getting-started/installation), [Yarn 설치](https://yarnpkg.com/getting-started/install), [Next.js의 Vercel 배포](https://vercel.com/docs/frameworks/full-stack/nextjs), [Vercel 패키지 관리자 설정](https://vercel.com/docs/package-managers), [Vercel의 Node.js 버전 설정](https://vercel.com/docs/functions/runtimes/node-js/node-js-versions)
