# 👨‍💻 원티드 프리온보딩 인턴십 최종과제

<div align='center'>
<img width='720' src='https://github.com/5kdk/pre-onboarding-11th-4-6/assets/86090355/9bba452e-17b9-44ff-b3ee-4bc2a39db527' >
</div>

<br/>

## 프로젝트 개요

- 2023.07.16 ~ 2023.07.19
- 원티드 프리온보딩 인턴십 최종 과제, 개인 프로젝트
- [한국임상정보](https://clinicaltrialskorea.com/)의 검색영역 클론
- [배포링크](https://pre-onboarding-11th-4-6.vercel.app/)
- 프로젝트 테스트를 위해선 server 폴더에 있는 json server를 구동해야합니다.

  ```
  cd server

  npm install
  npm start
  ```

<br/>

## 구현 목표

> ### 👀 검색창 구현 + 검색어 추천 기능 구현 + 캐싱 기능 구현

- 질환명 검색시 API 호출 통해서 검색어 추천 기능 구현
- API 호출별로 로컬 캐싱 구현 _(캐싱 기능을 제공하는 라이브러리 사용 금지 !)_
- API 호출 횟수를 줄이는 전략 수립 및 실행
- 콘솔창에서 API 호출 횟수 확인이 가능하도록 설정
- 키보드만으로 추천 검색어들로 이동 가능하도록 구현

<br/>

## 개발 조건 및 사용 기술

- 개발 조건

  - 전역 상태 관리 툴(필수 사용 X, 필요 시 사용)
  - 스타일 관련 라이브러리(styled-components, emotion, UI kit, tailwind, antd 등)
  - HTTP Client(axios 등)
  - 라우팅 관련 라이브러리(react-router-dom)

- 사용 기술

  ![JavaScript](https://img.shields.io/badge/javascript-black.svg?style=for-the-badge&logo=javascript)
  ![React](https://img.shields.io/badge/react-black.svg?style=for-the-badge&logo=react)
  ![Vite](https://img.shields.io/badge/vite-black.svg?style=for-the-badge&logo=vite)
  ![axios](https://img.shields.io/badge/axios-black?style=for-the-badge&logo=axios&logoColor=5A29E4)
  ![React Router](https://img.shields.io/badge/React_Router-black?style=for-the-badge&logo=react-router)
  ![Mantine](https://img.shields.io/badge/Mantine-black.svg?style=for-the-badge&logo=data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjU2cHgiIGhlaWdodD0iMjU4cHgiIHZpZXdCb3g9IjAgMCAyNTYgMjU4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgogICAgPHRpdGxlPk1hbnRpbmU8L3RpdGxlPgogICAgPGc+CiAgICAgICAgPHBhdGggZD0iTTI1NiwxMjguNjYxNDYyIEMyNTYsNTcuNjA0MDI1NiAxOTguNjkyNzY0LDAgMTI4LjAwMTU3OSwwIEM1Ny4zMDcyMzYsMCAwLDU3LjYwNDAyNTYgMCwxMjguNjYxNDYyIEMwLDE5OS43MTczMiA1Ny4zMDcyMzYsMjU3LjMyMjkyNCAxMjgsMjU3LjMyMjkyNCBDMTk4LjY5Mjc2NCwyNTcuMzIyOTI0IDI1NiwxOTkuNzE3MzIgMjU2LDEyOC42NjE0NjIgWiIgZmlsbD0iIzMzOUFGMCI+PC9wYXRoPgogICAgICAgIDxwYXRoIGQ9Ik0xMTAuNTc2MjM5LDY0LjExMTI5NjEgQzExMy4xMzE1MTUsNjMuNzMyMjM2NyAxMTUuNzMyNDg5LDY0LjM4NzMwOTcgMTE3LjgwMzM4Miw2NS45MzE1MDA2IEMxMjIuMDQ1MTI3LDY5LjA5NDEyMjYgMTI1Ljk1Nzk4NSw3Mi42NzM2NTEyIDEyOS40ODM2MzksNzYuNjE1ODM4NyBMMTMwLjM1Njk1Miw3Ny42MDg5MDk2IEwxNTcuOTY2MjgxLDc3LjYwODkwOTYgQzE2My4zNTExMTgsNzcuNjA4OTA5NiAxNjcuNzExNCw4MS45ODMzOTkzIDE2Ny43MTE0LDg3LjM4NTYwMjEgQzE2Ny43MTE0LDkyLjY2OTI5OTQgMTYzLjUzNTIwOSw5Ni45Njg5NDMxIDE1OC4zMjMyMTIsOTcuMTU3NDI5MSBMMTU3Ljk2NjI4MSw5Ny4xNjM4NzMyIEwxNDIuNzE2MzQ1LDk3LjE2Mzg3MzIgQzE0Ni45NzY4NjMsMTA2Ljk3Mjk0OSAxNDkuMTY0MzMyLDExNy41NTY2NDMgMTQ5LjE0MTUyNSwxMjguMjUxMDA4IEMxNDkuMTYyNjE3LDEzOC41NjI1MTQgMTQ3LjEyODg2NywxNDguNzcwOTYxIDE0My4xNjMzMjYsMTU4LjI4MTE5NyBMMTQyLjcxNDc2NywxNTkuMzM0OTg2IEwxNTcuOTU2ODA5LDE1OS4zMzQ5ODYgQzE2My4zNDMyMjUsMTU5LjMzNDk4NiAxNjcuNzAzNTA2LDE2My43MTEwNTQgMTY3LjcwMzUwNiwxNjkuMTEzMjU3IEMxNjcuNzAzNTA2LDE3NC4zOTU0MTEgMTYzLjUyNTgwNiwxNzguNjk2NTMgMTU4LjMxMzc0MywxNzguODg1MDgyIEwxNTcuOTU2ODA5LDE3OC44OTE1MjggTDEzMC4zNDExNjUsMTc4Ljg5MTUyOCBDMTI2LjU5MzkxNCwxODMuMjIyOTkxIDEyMi4zODczNjIsMTg3LjEzNDcwOCAxMTcuNzk1NDg4LDE5MC41NTc4ODcgQzExNS43MjE5MDYsMTkyLjEwNDE1OSAxMTMuMTE3MzAzLDE5Mi43NTk2NzcgMTEwLjU1ODgwMSwxOTIuMzc5MTkgQzEwOC4wMDAyOTksMTkxLjk5ODcwNCAxMDUuNjk5MTYsMTkwLjYxMzYzMyAxMDQuMTY1MjY3LDE4OC41MzA4NzcgQzEwMy40MDQzNDksMTg3LjUwMDAwNiAxMDIuODUzMzk0LDE4Ni4zMjcwNTYgMTAyLjU0MjM5NiwxODUuMDc5OTA4IEMxMDEuOTEyOTE1LDE4Mi41NjI2NjEgMTAyLjMwNjg4NSwxNzkuODk4NTMzIDEwMy42Mzc5OTIsMTc3LjY3MTIxOCBDMTA0LjI5Mzk1LDE3Ni41NzIyMjQgMTA1LjE2MDk5NCwxNzUuNjEzOTY4IDEwNi4xODkxMiwxNzQuODUxNzE2IEMxMjEuMDk4MDYyLDE2My43NDQyMDYgMTI5LjY1NzYwMiwxNDYuNzYwODkzIDEyOS42NTc2MDIsMTI4LjI0OTQzIEMxMjkuNjU3NjAyLDEwOS43Mzc5NjYgMTIxLjA5ODA2Miw5Mi43NTQ2NTI4IDEwNi4xODkxMiw4MS42NDcxNDMgQzEwNS4xNTk4LDgwLjg4NTI2ODEgMTA0LjI5MTY1Miw3OS45MjY5NzkxIDEwMy42MzQ4MzQsNzguODI3NjQxNSBDMTAxLjY4MzI5NSw3NS41NDkyNjgxIDEwMS44MDc4OTgsNzEuNDUxMzA5NiAxMDMuOTIyMTY1LDY4LjMwNTYwMzQgTDEwNC4xNjUyNjcsNjcuOTYwMDg5MyBDMTA1LjcxNDU5Nyw2NS44Nzk5NDU4IDEwOC4wMTY4NzEsNjQuNDk1NzQyOSAxMTAuNTc2MjM5LDY0LjExMTI5NjEgWiBNMTA4LjgyMDc1OSwxMTEuNTIxODYxIEMxMTAuNTk4OTU5LDExMi4yNzk5MzYgMTEyLjIwNjc5MSwxMTMuMzg3NDM0IDExMy41NDg4NzEsMTE0Ljc3ODY1MyBDMTE0Ljg5NjExMSwxMTYuMTc1NjggMTE1Ljk1MTcxMiwxMTcuODI2OTY5IDExNi42NTQxMTEsMTE5LjYzNjIxNiBDMTE3LjM1ODI5MiwxMjEuNDUwNTgyIDExNy42OTYzMSwxMjMuMzg2NDA3IDExNy42NDg2NzIsMTI1LjMzMjA1MSBDMTE3LjU2MTEzOSwxMjkuMTMzNTIgMTE2LjAwMTk2OSwxMzIuNzUyNzE5IDExMy4yOTk0NDEsMTM1LjQyNzYzNCBDMTEwLjYxNDkxNiwxMzguMDg0MjA1IDEwNi45OTE2ODQsMTM5LjU3NTkyNCAxMDMuMjE0OTA5LDEzOS41Nzk1MzIgQzk5LjQzNzAzOTEsMTM5LjU3Njc1NSA5NS44MTI1MjE1LDEzOC4wODQ5NzQgOTMuMTI3MjE4NSwxMzUuNDI3NjM0IEM5MC40MjQ2OTA2LDEzMi43NTI3MTkgODguODY1NTIwNCwxMjkuMTMzNTIgODguNzc3OTg3NCwxMjUuMzMyMDUxIEM4OC43MzE0Mzg1LDEyMy4zODYyMDMgODkuMDcwNTI4MiwxMjEuNDUwMzg3IDg5Ljc3NTcwNTgsMTE5LjYzNjIxNiBDOTAuNDc4MTA1MiwxMTcuODI2OTY5IDkxLjUzMzcwNjEsMTE2LjE3NTY4IDkyLjg4MDk0NjIsMTE0Ljc3ODY1MyBDOTQuMjIyNTM1NCwxMTMuMzg3NTc1IDk1LjgyOTgyMjQsMTEyLjI4MDA4MiA5Ny42MDc0Nzg5LDExMS41MjE4NjEgQzEwMS4xODk0MywxMDkuOTk1NTkgMTA1LjIzODgwOCwxMDkuOTk1NTkgMTA4LjgyMDc1OSwxMTEuNTIxODYxIFoiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgIDwvZz4KPC9zdmc+Cg==)
  ![ESLint](https://img.shields.io/badge/eslint-black?style=for-the-badge&logo=eslint&logoColor=4B32C3)
  ![Prettier](https://img.shields.io/badge/prettier-black?style=for-the-badge&logo=prettier)

<br/>

## 구현 아이디어

### 🤔 API 호출별로 로컬 캐싱 구현

- 요구사항을 보고 떠오른 컨셉은 다음과 같았습니다.

  1. 로컬에서 캐싱할 수 있는 객체 생성
  2. fetch 요청을 할 수 있는 custom hook을 구현
  3. custom hook이 cache들을 공유할 수 있도록 구현
  4. cache time(expire time)을 data와 함께 저장

- 핵심 컨셉 4가지를 바탕으로 설계를 진행하였습니다.
- 우선 cache는 key-value를 안전하게 관리할 수 있는 `Map` 객체를 선택했습니다.
- key는 단 하나만 존재해야 하며, Map 객체를 컨트롤 할 수 있는 직관적인 프로토타입 메서드들을 제공(ex: `has()`, `set()` 등) 하므로 cache를 관리하기 적합했습니다.

  ```jsx
  const cacheStore = new Map();
  ```

- 그리고 서버데이터 캐싱을 통해 조건부로 GET 요청하는 로직을 캡슐화하여 `useCacheQuery`를 구현하였습니다.

  ```jsx
  import { useCallback, useEffect, useState } from 'react';

  const initialCacheTime = 5 * 60 * 1000;
  const cacheStore = new Map();

  const useCacheQuery = ({
    queryKey,
    queryFn,
    initialData,
    cacheTime = initialCacheTime,
    select,
  }) => {
    const [data, setData] = useState(initialData);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // ...

    return { data, isLoading, error };
  };

  export default useCacheQuery;
  ```

- 캐시를 관리할 `cacheStore`은 이 커스텀 훅이 쓰이는 모든 컴포넌트에서 접근할 수 있도록 모듈 스코프에 선언하였습니다.
- 데이터 캐시를 판별할 key 문자열 `queryKey`와 데이터를 요청하는 비동기 함수 `queryFn`는 외부에서 전달 받습니다.(의존성 주입)

  ```jsx
  // useCacheQuery 사용 예
  const useRecommendedSearchTerms = input => {
    const {
      data: recommendations,
      isLoading,
      error,
    } = useCacheQuery({
      queryKey: `@Suggestion ${input}`,
      queryFn: useCallback(() => getSearchTerms(input), [input]),
      initialData: [],
      select: useCallback(data => data.slice(0, 20), []),
    });

    // ...
  };
  ```

- `fetchWithCache`라는 함수에서 조건문을 통해 캐시를 확인하고 조건부로 데이터를 받도록 설정해주었습니다.

  ```jsx
  // ...
  const fetchWithCache = useCallback(async () => {
      if (cacheStore.has(queryKey)) {
        const cache = cacheStore.get(queryKey);
        if (Date.now() - cache.createAt < cacheTime) {
          setData(cache.data);
          cacheStore.delete(queryKey);
          cacheStore.set(queryKey, cache);
          return;
        } else {
          cacheStore.delete(queryKey);
        }
      }
    // ...
  ```

  - 사용자의 요청이 들어오면 `cacheStore`에 `queryKey`가 있는지 확인합니다.
  - 캐시에 해당 key가 존재한다면 value의 생성시간(ms)과 현재시간(ms)의 차이를 `cacheTime`과 비교합니다.
  - 만약 조건이 모두 만족된다면 캐시를 사용하여 상태를 업데이트하고 early `return` 처리합니다.

- 유효한 캐시가 없을 경우 서버에 데이터 요청을 수행합니다.

  ```jsx
  // ...
      try {
        setIsLoading(true);
        const { data } = await queryFn();
        cacheStore.set(queryKey, { data, createAt: Date.now() });
        setData(data);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    },
    [cacheTime, queryFn, queryKey]
  );

  //...
  ```

  - 사용자가 전달한 `queryFn`로 데이터를 받아오고 캐시에는 데이터와 생성시간을 담은 객체로 저장합니다.

- 만약 `select` 콜백함수가 있다면 `data`를 `select`로 가공하여 사용자가 필요한 데이터만 반환하도록 하였습니다.

  ```jsx
  return { data: select ? select(data) : data, isLoading, error };
  ```

- 메모리 누수 방지를 위한 로직을 추가적으로 구현하였습니다.

  ```jsx
  try {
    // ...
    if (cacheStore.size > maxCacheSize) {
      const oldestCacheKey = cacheStore.keys().next().value;
      cacheStore.delete(oldestCacheKey);
    }
    // ...
  }
  ```

  - 캐시의 max size를 설정하고 데이터를 가져올때마다 확인하고 오래 사용되지 않은 캐시부터 제거합니다.
  - `Map` 객체는 순서가 보장되므로 이를 활용할 수 있었습니다.

    ```jsx
    if (cacheStore.has(queryKey)) {
      const cache = cacheStore.get(queryKey);
      if (Date.now() - cache.createAt < cacheTime) {
        setData(cache.data);
        cacheStore.delete(queryKey);
        cacheStore.set(queryKey, cache);
        return;
      } else {
        cacheStore.delete(queryKey);
      }
    }
    ```

  - 오래된 순서대로 캐시를 지워야하기 때문에 캐시를 사용할 때 캐시 시간이 연장되도록 기존의 캐시를 delete하고 새로운 캐시를 set 해주게끔 변경하였습니다.

<details>
<summary> 👀 전체 로직</summary>

```jsx
import { useCallback, useEffect, useState } from 'react';

const initialCacheTime = 5 * 60 * 1000;
const cacheStore = new Map();
const maxCacheSize = 100;

const useCacheQuery = ({
  queryKey,
  queryFn,
  initialData,
  cacheTime = initialCacheTime,
  select,
}) => {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWithCache = useCallback(async () => {
    if (cacheStore.has(queryKey)) {
      const cache = cacheStore.get(queryKey);
      if (Date.now() - cache.createAt < cacheTime) {
        setData(cache.data);
        cacheStore.delete(queryKey);
        cacheStore.set(queryKey, cache);
        return;
      } else {
        cacheStore.delete(queryKey);
      }
    }

    try {
      setIsLoading(true);
      const { data } = await queryFn();
      cacheStore.set(queryKey, { data, createAt: Date.now() });

      if (cacheStore.size > maxCacheSize) {
        const oldestCacheKey = cacheStore.keys().next().value;
        cacheStore.delete(oldestCacheKey);
      }

      setData(data);
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  }, [cacheTime, queryFn, queryKey]);

  useEffect(() => {
    fetchWithCache();
  }, [fetchWithCache]);

  return { data: select ? select(data) : data, isLoading, error };
};

export default useCacheQuery;
```

</details>

- 요약하자면 `useCacheQuery`를 호출하면 `initialState`를 초기 상태로 저장하고
  비동기 함수 `queryFn`을 래핑한 `useCacheQuery`를 `useEffect`에서 호출합니다. `useCacheQuery`에서는 로컬 캐시를 확인하고 관리하며 필요시 서버에 데이터를 요청해 `data`와 캐시를 업데이트합니다. `data`를 `select`여부에 따라 가공해서 반환하거나 그대로 반환합니다.

- 추후 보완하면 좋을 아이디어도 몇가지

  - 다른 컴포넌트에게 상태 변경을 알리는 로직이 부족합니다. 이를 보완하기 위해 recoil의 `atomFamily`로 전역적으로 구현할 수 있었으나, 현재 프로젝트에서는 굳이 필요하지 않아 라이브러리를 추가하지 않았습니다. 후에 옵저버 패턴을 구현해서 상태 변경을 컴포넌트에게 알리는 로직을 추가 구현해보고자 합니다.
  - 선언적으로 에러, 로딩처리를 할 수 있도록 `ErrorBoundary`와 `Suspence`를 지원하는 기능 추가하면 좋을것 같습니다.

<br>

---

### 🤔 입력마다 API를 호출하지 않도록 호출 횟수를 줄이기

- UI를 그리는 상태를 그대로 사용하게 되면 과도한 API 호출이 되기 때문에 지연된 상태를 만들기 위해 `useDebounceValue` 훅을 구현했습니다.
- 내장 함수 setTimeout을 사용하여 delay 만큼 `debouncedValue`상태의 set 함수의 타이머를 설정합니다.
- 설정한 delay 시간보다 먼저 value가 변경된다면 `useEffect`의 cleanup 함수로 타이머가 제거가 됩니다.
- 즉, 사용자의 입력이 delay 만큼 없다면 `debouncedValue`가 반환되어 사용할 수 있도록 구현하였습니다.
- 반환된 `debouncedValue`는 하위 컴포넌트의 조건부 랜더링과, 하위 컴포넌트에 props로 전달되어 데이터 요청을 보내는데에 사용됩니다.

  ```jsx
  const useDebounceValue = (value, delay = 300) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    }, [value, delay]);

    return debouncedValue;
  };
  ```

<br>

---

### 🤔 키보드만으로 추천 검색어들로 이동 가능하도록 구현

- 먼저, `focusRef`를 자식 컴포넌트에 전달하여 input에서 아래 화살표 keydown 이벤트가 발생할 때 에도 추천검색어로 옮겨가도록 구현하였습니다.
- `ref`로 참조하고 있는 요소에 `tabIndex` 옵션을 주어 `focus()` 가 작동하도록 구현했습니다.(도움주신 팀원분들 감사합니다 🥰)

  ```jsx
  // 부모컴포넌트 내부
  const focusRef = useRef();

  const focusSuggestion = e => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      focusRef.current?.focus();
    }
  };
  ```

- 자식컴포넌트 `Suggestion`에서는 `selectedIndex` 상태와 keydown 이벤트로 각각 추천검색어의 `index`와 `selectedIndex`를 비교하여 요소의 배경색을 변경했습니다.

  ```jsx
  const handleKeyDown = e => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prevIndex =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prevIndex =>
        prevIndex < recommendations.length - 1 ? prevIndex + 1 : prevIndex
      );
    }
  };
  ```

- 추천 검색어 목록을 스크롤이 허용되도록 구현했기 때문에 keydown 이벤트 발생시 스크롤이 현재 `selectIndex`와 다르게 움직이는 이슈가 있었습니다.
- `useRef`로 배열 형태의 `ref`를 만들어 index로 `ref`에 인덱스마다 각각 추천검색어 요소를 참조할 수 있게하였고, `scrollIntoView` 메서드로 스크롤 오작동 문제를 해결할 수 있었습니다.
- ex) `<List ref={el => (listItemRefs.current[i] = el)>`

  ```jsx
  const listItemRefs = useRef([]);

  const updateScroll = useCallback(() => {
    if (listItemRefs.current[selectedIndex]) {
      listItemRefs.current[selectedIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, [selectedIndex]);

  useEffect(() => {
    updateScroll();
  }, [selectedIndex, updateScroll]);
  ```

<br>

## 💫 추가 디테일 구현

- 서버 요청시에 불 필요한 데이터가 캐시에 저장되거나 중복된 데이터가 저장되는 것을 줄이기 위해서 `textProcessing` 유틸 함수로 사용자 input을 전처리 해주었습니다.

  ```jsx
  const textProcessing = text => {
    const regex = /[ㄱ-ㅎㅏ-ㅣ]|[^\w\s가-힣A-Za-z0-9]/g;
    return text.replace(regex, '').trim();
  };

  export default textProcessing;
  ```

- 추천검색어 mouseenter 이벤트에 아래 핸들러를 적용하여 `selectIndex`를 초기화하여 css hover와 중복 방지 처리를 해주었습니다.

  ```jsx
  const handleMouseIn = () => {
    setSelectedIndex(-1);
  };
  ```

- 추천 검색어 창이 닫히기 쉽도록 `useClickOutside` 훅을 구현했습니다.

  ```jsx
  const useClickOutside = handler => {
    const ref = useRef();

    useEffect(() => {
      const listener = e => {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      };

      document.addEventListener('mousedown', listener);

      return () => {
        document.removeEventListener('mousedown', listener);
      };
    }, [handler]);

    return ref;
  };
  ```

<br/>

---

## 👾 버그 이슈

- 캐시에 빈배열 `[]`이 들어가는 현상이 발견되었습니다. 원인을 조사한 결과 `select`를 급히 구현하다 `splice`메서드로 구현한 콜백함수를 `useCacheQuery`에 전달하면서 일어난 버그였습니다.

  ```jsx
  const {
    data: recommendations,
    isLoading,
    error,
  } = useCacheQuery({
    queryKey: `@Suggestion ${input}`,
    queryFn: useCallback(() => getSearchTerms(input), [input]),
    initialData: [],
    cacheTime: 2 * 60 * 1000,
    select: useCallback(data => data.splice(0, 20), []),
  });
  ```

- splice의 부수효과(side effect)로 인해 발생한 문제이기 때문에 `slice` 메서드로 대체하여 이를 해결하였습니다.

  ```jsx
  select: useCallback(data => data.slice(0, 20), []),
  ```
