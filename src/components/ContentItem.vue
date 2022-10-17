<script setup>
import DescriptionItem from './DescriptionItem.vue'
import ContentBreaker from './ContentBreaker.vue'
import { ref, onMounted } from 'vue'
const count = ref(0)

// functions that mutate state and trigger updates
function increment() {
  let startDate = Date.parse('01 Apr 2014 00:00:00 GMT');
  let endDate = Date.now()
  let diffDate = new Date(endDate - startDate)
  let devDates = ((diffDate.toISOString().slice(0, 4) - 1970) + " Years " +
    diffDate.getMonth() + " Months " + (diffDate.getDate() - 1) + "Days")
  count.value = devDates
}
onMounted(() => {
  increment()
  console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
  <div class="content-wrapper">
    <div class="cw-block shadow-sm">
      <ContentBreaker>
        <template #icon><i class="bi bi-briefcase"></i></template>
        <template #breakerHeader>Work experience</template>
        <template #yearsCount>{{count}}</template>
      </ContentBreaker>
      <DescriptionItem>
        <template #icon>
          <i class="bi bi-briefcase"></i>
        </template>
        <template #duration>Aug 17<br>-<br>Present</template>
        <template #heading>PITS ltd. (IMH ltd.)</template>
        <template #subheading><a href="https://www.metholding.ru/" target="_blank">www.metholding.ru</a></template>
        <h5>Senior software developer</h5>
        <ul>
          <li>Developed and maintain business intelligence system based on Oracle BI (creating DWH, repos,
            dashboards and etc.)</li>
            <li>Improving company productivity by automatization most of the business processes, almost eliminated process involving manually collecting and transporting data from multiple
sources</li>
          <li>Reducing decision-making time due to convenient and visual presentation of data (including by customizing the visual display of data). By improving the ui / ux design, we have minimized the access time to critical data</li>
          <li>Today, the top management of the company can access critical data due to an ecosystem of business tools (mobile, desktop and web application )</li>
        </ul>

      </DescriptionItem>

      <DescriptionItem>
        <template #icon>
          <i class="bi bi-briefcase"></i>
        </template>
        <template #duration>May 16<br>-<br>Aug 17</template>
        <template #heading>So.Use</template>
        <template #subheading><a href="https://so-use.ru/" target="_blank">so-use.ru</a></template>
        <h5>Senior software developer</h5>
        <p>Website development from scratch and re-design of existing websites, UX / UI design development,
          creation of an individual website design. Developing websites with best practice of html/css/js. Working
          with modx, joomla and etc.</p>
      </DescriptionItem>

      <DescriptionItem>
        <template #icon>
          <i class="bi bi-briefcase"></i>
        </template>
        <template #duration>Ap 14<br>-<br>May 16</template>
        <template #heading>Dial</template>
        <template #subheading><a href="https://dialweb.ru/" target="_blank">dialweb.ru</a></template>
        <h5>SEO specialist</h5>
        <p>Website promotion in search engines Google and Yandex. Compilation of the semantic core, audit and
          further optimization of the site</p>
      </DescriptionItem>
    </div>
    <div class="cw-block shadow-sm">
      <ContentBreaker>
        <template #icon><i class="bi bi-pencil"></i></template>
        <template #breakerHeader>Education</template>
      </ContentBreaker>
      <DescriptionItem>
        <template #icon>
          <i class="bi bi-pencil"></i>
        </template>
        <template #duration>Sep 08<br>-<br>Jul 14</template>
        <template #heading>Tula State Lev Tolstoy Pedagogical University</template>
        <template #subheading><a href="https://tsput.ru/" target="_blank">tsput.ru</a></template>
        <h5>Specialist in «Software and Administration of Information
          Systems» (specialization «Information Systems and Databases»)</h5>
      </DescriptionItem>
    </div>
    <div class="cw-block shadow-sm">
      <ContentBreaker>
        <template #icon><i class="bi bi-pencil"></i></template>
        <template #breakerHeader>Professional development, courses</template>
      </ContentBreaker>
      <DescriptionItem>
        <template #icon>
          <i class="bi bi-pencil"></i>
        </template>
        <template #duration>2020</template>
        <template #heading>Computer Training Center «Specialist» at Bauman MSTU</template>
        <template #subheading><a href="https://en.specialist.ru/" target="_blank">specialist.ru</a></template>
        <h5>DA-100: Analyzing Data with Microsoft Power BI</h5>
      </DescriptionItem>
    </div>
    <div class="cw-block shadow-sm">
      <ContentBreaker>
        <template #icon><i class="bi bi-pencil"></i></template>
        <template #breakerHeader>Additional information</template>
      </ContentBreaker>
      <DescriptionItem>
        <template #icon>
          <i class="bi bi-pencil"></i>
        </template>
        <template #duration>About me</template>
        <p>Goal-oriented. Easily adaptible. Can work with any IT
          system or can rapidly get proficient with it.
        </p>
        <p>Interested in new web techniques, at the moment dive in Dart/Flutter</p>
        <p>Enjoy playing guitar, write music and songs</p>
      </DescriptionItem>
    </div>

  </div>

</template>

<style>
.cb-heading {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  border-bottom: 1px solid #d3d3d3;
  padding-bottom: 10px;
}

.cb-heading i {
  background: #fff;
  font-size: 1rem;
  padding: 0.4rem 0.8rem;
  border-radius: 100px;
  display: block;
  margin-right: 10px;
}

.cb-heading h4 {
  display: block;
  margin-right: 10px;
  margin-bottom: 0px;
}

.cw-block {
  background: var(--bs-gray-100);
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 2rem;
}

.details p,
.details h3 {
  margin-bottom: 0.5rem;
}

</style>