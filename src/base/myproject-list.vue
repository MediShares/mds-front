<template>
<div class="myproject-list">
  <!-- 我支持的项目 -->
  <router-link :to="{path: '/projectDetail',query: {id: id}}" v-if="isBacked">
    <div class="list-pic col-sm-3" :style="{backgroundImage: 'url(' + photos +')'}"></div>
    <div class="info col-sm-9">
      <h4 style="-webkit-box-orient: vertical;">{{title}}</h4>
      <p class="time">{{$t('release_time')}}: {{time}}</p>
        <p class="btn-box"><span>{{$t('view_project')}}</span></p>
    </div>
  </router-link>
  <!-- 我的项目 -->
  <template v-else>
    <!-- 项目状态，0：审核中，1：审核未通过，2：筹款中，3：筹款结束 -->
    <!-- 审核中 -->
    <template v-if="status == 0">
      <router-link :to="{path: '/projectDetail',query: {id: id}}" class="list-pic col-sm-3" :style="{backgroundImage: 'url(' + photos +')'}">
        <div class="status">
          <div>
            <p>{{$t('in_review')}}</p>
          </div>
        </div>
      </router-link>
      <div class="info col-sm-9">
        <router-link :to="{path: '/projectDetail',query: {id: id}}">
          <h4 style="-webkit-box-orient: vertical;">{{title}}</h4>
          <p class="time">{{$t('release_time')}}: {{time}}</p>
        </router-link>
        <p class="btn-box">
          <router-link class="editor" :to="{path: '/projectModify',query: {eosID: id}}">{{$t('editor')}}</router-link>
          <a href="javascript:;" class="delete" @click="deleteProject">{{$t('delete')}}</a>
        </p>
      </div>
    </template>
    <!-- 审核未通过 -->
    <template v-if="status==1">
      <div class="list-pic col-sm-3" :style="{backgroundImage: 'url(' + photos +')'}">
        <div class="status">
          <div>
            <p>{{$t('Audit_failed')}}</p>
            <p class="why" data-toggle="modal" :data-target="'#reason'+index">{{$t('not_pass_reason')}}</p>
          </div>
        </div>
      </div>
      <div class="info col-sm-9">
        <router-link :to="{path: '/projectDetail',query: {id: id}}">
          <h4 style="-webkit-box-orient: vertical;">{{title}}</h4>
          <p class="time">{{$t('release_time')}}: {{time}}</p>
        </router-link>
        <p class="btn-box">
          <router-link class="editor" :to="{path: '/projectModify',query: {eosID: id}}">{{$t('editor')}}</router-link>
          <a href="javascript:;" class="delete" @click="deleteProject">{{$t('delete')}}</a>
        </p>
      </div>
    </template>
    <!-- 筹款中 -->
    <template v-if="status==2">
      <router-link :to="{path: '/projectDetail',query: {id: id}}" class="list-pic col-sm-3" :style="{backgroundImage: 'url(' + photos +')'}">
        <div class="status">
          <div>
            <p>{{$t('ongoing')}}</p>
          </div>
        </div>
      </router-link>
      <div class="info col-sm-9">
        <router-link :to="{path: '/projectDetail',query: {id: id}}">
          <h4 style="-webkit-box-orient: vertical;">{{title}}</h4>
          <p class="time">{{$t('release_time')}}: {{time}}</p>
        </router-link>
        <p class="btn-box">
          <router-link class="editor" :to="{name: 'supportList',params: {id: crowdfundingID}}">{{$t('support_list')}}</router-link>
        </p>
      </div>
    </template>
    <!-- 筹款结束 -->
    <router-link :to="{path: '/projectDetail',query: {id: id}}" v-if="status==3">
      <div class="list-pic col-sm-3" :style="{backgroundImage: 'url(' + photos +')'}">
        <div class="status">
          <div>
            <p>{{$t('ended')}}</p>
          </div>
        </div>
      </div>
      <div class="info col-sm-9">
        <h4 style="-webkit-box-orient: vertical;">{{title}}</h4>
        <p class="time">{{$t('release_time')}}: {{time}}</p>
          <p class="btn-box"><span class="main-color">{{$t('approved')}}</span></p>
      </div>
    </router-link>
  </template>
  <div class="modal text-center reason" :id="'reason'+index">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span></button>
        <div class="info">{{comment}}</div>
        <div class="start" data-dismiss="modal">{{$t("confirm")}}</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['index', 'title', 'time', 'id', 'status', 'isBacked'],
  data() {
    return {
      url: '/apiCrowdfunding/getInfo?eosID=',
      photos: '',
      comment: '',
      crowdfundingID: ''
    }
  },
  mounted() {
    this.getPic()
  },
  methods: {
    getPic() {
      this.$http.get(this.globalData.domain + this.url + this.id).then((res) => {
        if (res.data.success) {
          this.photos = res.data.data.photos
          this.comment = res.data.data.comment
          this.crowdfundingID = res.data.data.crowdfundingID
        }
      }, (err) => {
        console.log(err);
      })
    },
    deleteProject() {
      this.$emit('deleteItem', this.index, this.title, this.id)
    }
  }
}
</script>

<style scoped>
.myproject-list {
  display: block;
  border: 1px solid var(--very-light-blue);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 24px;
}

.list-pic {
  padding: 0;
  height: 168px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: block;
}

.info {
  padding: 16px;
  color: var(--darkColor);
  overflow: hidden;
}

.info h4 {
  font-family: Gotham-Medium;
  font-weight: 500;
  font-size: 20px;
  height: 48px;
  margin-bottom: 8px;
  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: var(--darkColor);
}

.info .time {
  color: var(--blueGrey);
}

.status {
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  text-align: center;
  font-family: Gotham-Medium;
  font-weight: 500;
  line-height: 1.7;
  height: 100%;
  position: relative;
}

.status>div {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
}

.why {
  text-decoration: underline;
  font-family: Gotham-Book;
  cursor: pointer;
}

.reason .start {
  margin-top: 40px;
  padding: 16px 60px;
}

.modal .modal-content {
  padding: 24px;
}

@media (max-width: 767px) {
  .info .complete {
    padding-bottom: 28px;
  }

  .info h4 {
    height: auto;
    font-size: 14px;
  }

  .info .time {
    font-size: 12px;
  }
}
</style>
