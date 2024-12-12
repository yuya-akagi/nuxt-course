<template>
    <nav class="font-mono">
    <!--
        font-mono: 等幅フォントを適用、コーディング関連のメニューなどによく用いられるスタイル
    -->
        <ul class="flex flex-col md:flex-row md:space-x-4">
            <!--
                flex: li要素を横並びにする
                space-x-4: フレックス要素間に左右方向で1rem(16px)相当の空白を追加
            -->
            <li>
                <NuxtLink to="/" class="link">Main</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/about" class="link">About</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/projects" class="link">Projects</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/blog" class="link">Blog</NuxtLink>
            </li>
    </ul>
</nav>
</template>
<style scoped>
.link {
    @apply p-1 hover:bg-gray-200 dark:hover:bg-gray-800 text-2xl md:text-base
}
/* 
  p-1 文字の大きさ
  hover:bg-gray-200 ホバーした際の背景の色、色の濃さ
*/
</style>