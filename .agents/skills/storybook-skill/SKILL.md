---
name: storybook-skill
description: 공통 UI 컴포넌트 개발 시 Storybook 스토리를 프로젝트 규칙에 맞게 생성하기 위한 지침입니다. 새로운 컴포넌트를 만들거나 기존 컴포넌트에 스토리를 추가해야 할 때 이 스킬을 참조하세요.
---

When creating a new shared UI component, always create a Storybook story file alongside it.

[KOR]
새로운 공통 UI 컴포넌트를 만들 때는 story 파일도 함께 생성한다.

Rules:
- Place the story file in the same folder as the component.
- Use the file name format: `<component-name>.stories.tsx`
- Use the standard Storybook template used in this project.
- Ensure the story is runnable in Storybook without manual fixes.
- Include a `Default` story.
- Include meaningful state stories such as `disabled`, `error`, `selected`, or `loading` when applicable.
- Check for an existing similar component before creating a new one.
- Prefer reuse or extension over duplication.

[KOR]
- story 파일은 컴포넌트와 같은 폴더에 생성한다.
- 파일명은 `<component-name>.stories.tsx` 형식을 따른다.
- 프로젝트 공통 Storybook 템플릿을 사용한다.
- 별도 수정 없이 바로 실행 가능한 story여야 한다.
- `Default` story를 반드시 포함한다.
- 필요한 경우 disabled, error, selected, loading 상태를 포함한다.
- 유사 컴포넌트가 있는지 먼저 확인한다.
- 중복 생성보다 재사용/확장을 우선한다.