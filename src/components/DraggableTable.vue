<template>
  <div class="fluid container">
    <div class="form-group form-group-lg panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Sortbale control</h3>
      </div>
      <div class="panel-body">
        <div class = "checkbox">
          <label><input type = "checkbox" v-model="editable">Enable drag and drop</label>
        </div>
        <button type="button" class="btn btn-default" @click="orderList">Sort by original order</button>
      </div>
    </div>

    <div  class="col-md-3">
        <draggable class="list-group" element="ul" v-model="list" :options="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
          <transition-group type="transition" :name="'flip-list'">
            <li class="list-group-item" v-for="element in list" :key="element.order">
              <i :class="element.fixed? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'" @click=" element.fixed=! element.fixed" aria-hidden="true"></i>
              {{element.name}}
            </li>
          </transition-group>
      </draggable>
    </div>
    <table>
      <tr>
        <th>DESTINATION</th>
        <th>DATA SET</th>
        <th>CONFIDENCE</th>
      </tr>
      <tr>
        <td>CLIENT</td>
        <draggable element="span" v-model="client" :options="dragOptions" :move="onMove">
            <transition-group name="no" class="list-group" tag="ul">
              <li class="list-group-item" v-for="element in client" :key="element.order">
                <i :class="element.fixed? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'" @click=" element.fixed=! element.fixed" aria-hidden="true"></i>
                {{element.name}}
                <span class="badge">{{element.order}}</span>
              </li>
            </transition-group>
        </draggable>
        <td>N/A</td>
      </tr>
      <tr>
        <td>BRAND</td>
        <draggable element="span" v-model="brand" :options="dragOptions" :move="onMove">
            <transition-group name="no" class="list-group" tag="ul">
              <li class="list-group-item" v-for="element in brand" :key="element.order">
                <i :class="element.fixed? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'" @click=" element.fixed=! element.fixed" aria-hidden="true"></i>
                {{element.name}}
                <span class="badge">{{element.order}}</span>
              </li>
            </transition-group>
        </draggable>
        <td>N/A</td>
      </tr>
      <tr>
        <td>VENDOR</td>
        <draggable element="span" v-model="vendor" :options="dragOptions" :move="onMove">
            <transition-group name="no" class="list-group" tag="ul">
              <li class="list-group-item" v-for="element in vendor" :key="element.order">
                <i :class="element.fixed? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'" @click=" element.fixed=! element.fixed" aria-hidden="true"></i>
                {{element.name}}
                <span class="badge">{{element.order}}</span>
              </li>
            </transition-group>
        </draggable>
        <td>N/A</td>
      </tr>
      <tr>
        <td>MARKET</td>
        <draggable element="span" v-model="market" :options="dragOptions" :move="onMove">
            <transition-group name="no" class="list-group" tag="ul">
              <li class="list-group-item" v-for="element in market" :key="element.order">
                <i :class="element.fixed? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'" @click=" element.fixed=! element.fixed" aria-hidden="true"></i>
                {{element.name}}
                <span class="badge">{{element.order}}</span>
              </li>
            </transition-group>
        </draggable>
        <td>N/A</td>
      </tr>
      <tr>
        <td>DAYPART</td>
        <draggable element="span" v-model="daypart" :options="dragOptions" :move="onMove">
            <transition-group name="no" class="list-group" tag="ul">
              <li class="list-group-item" v-for="element in daypart" :key="element.order">
                <i :class="element.fixed? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'" @click=" element.fixed=! element.fixed" aria-hidden="true"></i>
                {{element.name}}
                <span class="badge">{{element.order}}</span>
              </li>
            </transition-group>
        </draggable>
        <td>N/A</td>
      </tr>
      <tr>
        <td>GROSS</td>
        <draggable element="span" v-model="gross" :options="dragOptions" :move="onMove">
            <transition-group name="no" class="list-group" tag="ul">
              <li class="list-group-item" v-for="element in gross" :key="element.order">
                <i :class="element.fixed? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'" @click=" element.fixed=! element.fixed" aria-hidden="true"></i>
                {{element.name}}
                <span class="badge">{{element.order}}</span>
              </li>
            </transition-group>
        </draggable>
        <td>N/A</td>
      </tr>
      <tr>
        <td>GRP</td>
        <draggable element="span" v-model="grp" :options="dragOptions" :move="onMove">
            <transition-group name="no" class="list-group" tag="ul">
              <li class="list-group-item" v-for="element in grp" :key="element.order">
                <i :class="element.fixed? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'" @click=" element.fixed=! element.fixed" aria-hidden="true"></i>
                {{element.name}}
                <span class="badge">{{element.order}}</span>
              </li>
            </transition-group>
        </draggable>
        <td>N/A</td>
      </tr>
    </table>
    <div  class="list-group col-md-3">
      <pre>{{listString}}</pre>
    </div>
     <div  class="list-group col-md-3">
       LIST2
      <pre>{{list2String}}</pre>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable';

const message = ['CLIENT NAME', 'DPT', 'GRPs', 'ORDERED', 'PRODUCT', 'REGION', 'SUPPLIER'];
export default {
  name: 'hello',
  components: {
    draggable,
  },
  data() {
    return {
      list: message.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      client: '[]',
      brand: '[]',
      vendor: '[]',
      market: '[]',
      daypart: '[]',
      gross: '[]',
      grp: '[]',
      editable: true,
      isDragging: false,
      delayedDragging: false,
    };
  },
  methods: {
    orderList() {
      this.list = this.list.sort((one, two) => {
        return one.order - two.order;
      });
    },
    onMove({ relatedContext, draggedContext }) {
      const relatedElement = relatedContext.element;
      const draggedElement = draggedContext.element;
      return (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed;
    },
  },
  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: 'description',
        disabled: !this.editable,
        ghostClass: 'ghost',
      };
    },
    listString() {
      return JSON.stringify(this.list, null, 2);
    },
    list2String() {
      return JSON.stringify(this.list2, null, 2);
    },
  },
  watch: {
    isDragging(newValue) {
      if (newValue) {
        this.delayedDragging = true;
        return;
      }
      this.$nextTick(() => {
        this.delayedDragging = false;
      });
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  list-style: none;
}
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.list-group {
  min-height: 20px;
}
.list-group-item {
  cursor: move;
}
.list-group-item i {
  cursor: pointer;
}
</style>
