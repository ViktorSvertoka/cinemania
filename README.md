# WebSite Cinemania

![Web Page](./assets/cinemania.png)

## Presentation

[Presentation](https://youtu.be/-prD4qdgO9g)

### Development team :

- Viktor Svertoka **Team Lead** development and design of the section **Footer,
  Scroll Up, Modal Window Team, add local Fonts, custom Cursors, Favicon**

- Yevhenii Lukashov **Scrum Master** development and design of the section
  **API, Fetch**

- Volodymyr Zhyvun **Front End Developer** development and design of the section
  **Upcomining mounth**

- Dmytro Samus **Front End Developer** development and design of the section
  **Modal Window Watch Trailer, Loader**

- Vitalii Bashchenko **Front End Developer** development and design of the
  section **Hero, Slider, Modal Window OOPS**

- Sergiy Yevchihen **Front End Developer** development and design of the section
  **Catalog, Pagination, Search form**

- Nikita Slabushevskiy **Front End Developer** development and design of the
  section **Weekly Trends**

- Ihor Kulinskyi **Front End Developer** development and design of the section
  **Header, My Library**

- Kirill Litovchenko **Front End Developer** development and design of the
  section **Catalog**

- Mariia Ivanova **Front End Developer** development and design of the section
  **Modal Window Film**

# Примеры написания commita на проекте

## Используем следующие типы коммитов:

- Feat(HTML) Added new functionality

- Fix(JS) Error correction

- Perf(JPEG) Changes to improve performance

- Refactor(PNG) Code edits without fixing bugs or adding new features

- Revert(JS) Rollback to previous commits

- Style(SCSS) Code style edits

- Docs(README) Documentation update

Выбираем из списка описание коммита которое подходит под вашу задачу, в скобках
пишем файл в каком работали, а а в теле комита расписываем что проделали
(изменили) и тд

# API

https://www.themoviedb.org/settings/api

---

- API Key (v3 auth)

992758a4802a699e8df27d4d6efc34fb

---

- Example API Request

https://api.themoviedb.org/3/movie/550?api_key=992758a4802a699e8df27d4d6efc34fb

---

- API Read Access Token (v4 auth)

eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTI3NThhNDgwMmE2OTllOGRmMjdkNGQ2ZWZjMzRmYiIsInN1YiI6IjY0NTI5YzA3ZDQ4Y2VlMDEzNmQ4YzU1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X9LNYtjV7RuaseJx77oBvOaAscCCyKYxHDtJYVYsM0g

---

- `Look at`
  [**Layout (Figma)**](https://www.figma.com/file/z7VY1GvA5xVR2ix7xeOfxx/Cinemania?node-id=0%3A1&t=5JeXJy1vNB96LXPG-1)

# GitTutorial

## Список корисних команд для роботи з git

1. git clone - копіює репозиторій(папку з файлами) на компютер
2. git branch "branchName" - створює гілку з назвою "branchName"
3. git checkout "branchName" - переходить на гілку з назвою "branchName"
4. git checkout -b "branchName" - створюємо гілку з назвою "branchName" і
   переходимо на неї
5. git add . - зберігаємо зміни в файлах
6. git commit -m "commit message" - підписуємо збереженні зміни в файлах
7. git push - відправляємо зміни на сайт github
8. git pull - отримуємо останні зміни з сайту github
9. git status - показуємо статус проекту
10. git branch - показуємо список гілок в проекті
11. git branch -r - показуємо список гілок на сайті github
12. git branch -a - показуємо список гілок на компютері та на сайті github
13. git fetch - отримуємо зміни з сайту github
14. git stash - зберігаємо не збережені зміни в файлах і кладемо їх в буфер
    обміну
15. git stash apply - вставляємо збережені зміни з буфера обміну
16. git merge "banchName" - зливаємо гілку з назвою "branchName" в поточну гілку
17. git merge --abort - відміняємо зливання гілок
18. git branch -d branchName - видаляє гілку локально з проекту
19. git push origin --delete name - видаляє гілку з сайту github
20. git diff - показує відрізки рядків між двома версіями файлу (між двома
    комітами)
21. git log - показує історію комітів
22. cd gitTutorial - переходимо в папку gitTutorial

Для того щоб вийти з режиму перегляду комітів використовуйте клавішу q
(стосується команди №20 і №21)

# Parcel template

Этот проект был создан при помощи Parcel. Для знакомства и настройки
дополнительных возможностей [обратись к документации](https://parceljs.org/).

## Подготовка нового проекта

1. Убедись что на компьютере установлена LTS-версия Node.js.
   [Скачай и установи](https://nodejs.org/en/) её если необходимо.
2. Склонируй этот репозиторий.
3. Измени имя папки с `parcel-project-template` на имя своего проекта.
4. Создай новый пустой репозиторий на GitHub.
5. Открой проект в VSCode, запусти терминал и свяжи проект с GitHub-репозиторием
   [по инструкции](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories#changing-a-remote-repositorys-url).
6. Установи зависимости проекта в терминале командой `npm install` .
7. Запусти режим разработки, выполнив команду `npm start`.
8. Перейди в браузере по адресу [http://localhost:1234](http://localhost:1234).
   Эта страница будет автоматически перезагружаться после сохранения изменений в
   файлах проекта.

## Файлы и папки

- Все паршалы файлов стилей должны лежать в папке `src/sass` и импортироваться в
  файлы стилей страниц. Например, для `index.html` файл стилей называется
  `index.scss`.
- Изображения добавляй в папку `src/images`. Сборщик оптимизирует их, но только
  при деплое продакшн версии проекта. Все это происходит в облаке, чтобы не
  нагружать твой компьютер, так как на слабых машинах это может занять много
  времени.

## Деплой

Для настройки деплоя проекта необходимо выполнить несколько дополнительных шагов
по настройке твоего репозитория. Зайди во вкладку `Settings` и в подсекции
`Actions` выбери выбери пункт `General`.

![GitHub actions settings](./assets/actions-config-step-1.png)

Пролистай страницу до последней секции, в которой убедись что выбраны опции как
на следующем изображении и нажми `Save`. Без этих настроек у сборки будет
недостаточно прав для автоматизации процесса деплоя.

![GitHub actions settings](./assets/actions-config-step-2.png)

Продакшн версия проекта будет автоматически собираться и деплоиться на GitHub
Pages, в ветку `gh-pages`, каждый раз когда обновляется ветка `main`. Например,
после прямого пуша или принятого пул-реквеста. Для этого необходимо в файле
`package.json` отредактировать поле `homepage` и скрипт `build`, заменив
`your_username` и `your_repo_name` на свои, и отправить изменения на GitHub.

```json
"homepage": "https://your_username.github.io/your_repo_name/",
"scripts": {
  "build": "parcel build src/*.html --public-url /your_repo_name/"
},
```

Далее необходимо зайти в настройки GitHub-репозитория (`Settings` > `Pages`) и
выставить раздачу продакшн версии файлов из папки `/root` ветки `gh-pages`, если
это небыло сделано автоматически.

![GitHub Pages settings](./assets/repo-settings.png)

### Статус деплоя

Статус деплоя крайнего коммита отображается иконкой возле его идентификатора.

- **Желтый цвет** - выполняется сборка и деплой проекта.
- **Зеленый цвет** - деплой завершился успешно.
- **Красный цвет** - во время линтинга, сборки или деплоя произошла ошибка.

Более детальную информацию о статусе можно посмотреть кликнув по иконке, и в
выпадающем окне перейти по ссылке `Details`.

![Deployment status](./assets/status.png)

### Живая страница

Через какое-то время, обычно пару минут, живую страницу можно будет посмотреть
по адресу указанному в отредактированном свойстве `homepage`. Например, вот
ссылка на живую версию для этого репозитория
[https://goitacademy.github.io/parcel-project-template](https://goitacademy.github.io/parcel-project-template).

Если открывается пустая страница, убедись что во вкладке `Console` нет ошибок
связанных с неправильными путями к CSS и JS файлам проекта (**404**). Скорее
всего у тебя неправильное значение свойства `homepage` или скрипта `build` в
файле `package.json`.

## Как это работает

![How it works](./assets/how-it-works.png)

1. После каждого пуша в ветку `main` GitHub-репозитория, запускается специальный
   скрипт (GitHub Action) из файла `.github/workflows/deploy.yml`.
2. Все файлы репозитория копируются на сервер, где проект инициализируется и
   проходит сборку перед деплоем.
3. Если все шаги прошли успешно, собранная продакшн версия файлов проекта
   отправляется в ветку `gh-pages`. В противном случае, в логе выполнения
   скрипта будет указано в чем проблема.

---

TEST
