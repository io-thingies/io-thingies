"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj};var hasActionsPanel=React.createClass({_0_n:"hasActionsPanel",getInitialState:function getInitialState(){return{_2_k:false,_2_d:null}},_0_v:function _0_v(entity){return entity.x0("getName")||React.createElement("i",null,"< ",entity.id," >")},showActionSelector:function showActionSelector(type){var root=window._0_g.root;var _2_d=type?root.x0("get","actionType"):root;var _2_c=this.actionSelected;this.setState({_2_k:true,_2_d:_2_d,_2_c:_2_c})},_0_j:function _0_j(parent,entity){var _0_s=entity;var id=_0_s.replace(/\s/g,"");entity=parent.x0("new",id);entity.x0("setName",_0_s);return entity},actionSelected:function actionSelected(entity,newType){if(newType){entity=this._0_j(this.state._2_d,entity)}this.props.data.entity.x0("_a_a",entity,this.state.param);return true},_0_i:function _0_i(){this.setState({_2_k:false})},deleteAction:function deleteAction(id){this.props.data.entity.x0("removeAction",id);var _2_k=this.state._2_k;this.setState({_2_k:_2_k})},render:function render(){var _this=this;var behavior=this.props.data.entity;var behaviorName=this._0_v(behavior);var behaviorActions=behavior.x0("_la");if(behaviorActions){var _ret=function(){var actions=[];var self=_this;behaviorActions.forEach(function(action,actionId){var actionName=self._0_v(action);actions.push(React.createElement("div",{className:"row",key:actionId},React.createElement("span",{className:"rel-ref-name"},actionName),React.createElement("span",{className:"details"},React.createElement("button",{className:"c_ab",onClick:self.deleteAction.bind(self,action.id)},React.createElement("i",{className:"fa fa-remove fa-fw red"})," Remove"))))});return{v:React.createElement("div",{className:"behavior-panelc_c0"},React.createElement("div",{className:"rel-title"},"Actions for behavior ",React.createElement("strong",null,"'",behaviorName,"'"),":"),React.createElement("div",{className:"c_rl rel-rows"},React.createElement("div",{className:"rows"},actions)),React.createElement("div",{className:"add-newc_c2"},React.createElement("button",{className:"add-rel",onClick:_this.showActionSelector},React.createElement("i",{className:"fa fa-plus blue"})," Add")),React.createElement(T__1,{visible:_this.state._2_k,onClose:_this._0_i,onSelect:_this.state._2_c,type:_this.state._2_d}))}}();if((typeof _ret==="undefined"?"undefined":_typeof(_ret))==="object")return _ret.v}else{return React.createElement("div",{className:"behavior-panelc_c0"},"There are no actions for behavior ",React.createElement("strong",null,"'",behaviorName,"'"),".")}}});exports.default=hasActionsPanel;
