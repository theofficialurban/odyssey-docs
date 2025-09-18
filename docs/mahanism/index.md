<VPLCollectionPage>
    
<VPLCollectionPageTags v-model="tags" />
<VPLCollectionItems :items="pages" :tags="tags"/>
</VPLCollectionPage>

<Test />

<script setup>
import {useCollection} from '@lando/vitepress-theme-default-plus';
import {VPLCollectionPage, VPLCollectionPageTags, VPLCollectionPageTitle, VPLCollectionItems} from '@lando/vitepress-theme-default-plus';

const {pages, tags} = useCollection('bible');
console.log(pages)
</script>
