<template>
    <div class="container mx-auto max-w-4xl">
        <!--
            container: Tailwindが提供するコンテナクラスで、デフォルトで中央寄せやパディングを設定
            mx-auto: 左右のマージンを自動調整してブロック要素を中央寄せする
            max-w-2xl: 最大横幅を"2xl"に設定、これによりコンテンツが極端に広がり過ぎない
        -->
        <header class="flex justify-between items-start md:items-center mt-5">
            <!--
                flex: 要素をフレックスコンテナにする
                justify-between: 子要素間に等間隔の余白を置き、左右端に配置する
                items-center: フレックスアイテムを垂直方向に中央揃えする
                mt-5: 上方向に5段階相当(約1.25rem)のマージンを取る
            -->
        <div class="flex items-center md:space-x-12">
            <div class="hidden md:block">
                <NuxtLink to="/" class="text-xl font-semibold p-2 hover:bg-gray-200 dark:hover:bg-gray-800">
                    <!--
                        text-xl: テキストサイズをxl(通常よりやや大きめ)に拡大
                        font-semibold: フォントウェイトをやや太め(600程度)にする
                        p-2: 上下左右に0.5rem(8px相当)のパディングを付ける
                        hover:bg-gray-200: ホバー時に背景色を薄いグレー(#E5E7EB)に変更
                    -->
                    Yuya
                </NuxtLink>
            </div>
            <Menu />
        </div>
        <ClientOnly>
            <ColorModeSelector />
        </ClientOnly>
        </header>
        <main class="p-2 mt-10">
            <!--
                p-2: コンテナの内側全体に0.5remのパディングを設定し、
                コンテンツとの間に余裕を持たせる
            -->
            <slot />
        </main>
    </div>
</template>

<script setup>

// useHead：Nuxtでページ単位のメタ情報（タイトルやmetaタグ、リンクリソース）を設定できるフックで、SEO対応にも有用。
// フックとは：ある処理の流れに割り込んだイ、補足的な機能を注入できる仕組みのこと,たとえるなら「イベント発生時に発動する処理」
useHead({
    titleTemplate: '%s - Yuya',
    link: [
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
            crossorigin: ''
        }
    ]
})
</script>

<style>
body {
    font-family: 'Roboto';
}

body {
  @apply bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300
}
</style>