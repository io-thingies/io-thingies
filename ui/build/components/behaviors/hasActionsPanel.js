"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj};var hasActionsPanel=React.createClass({displayName:"hasActionsPanel",getInitialState:function getInitialState(){return{m_ss8:false,selectorType:null}},fn0:function fn0(entity){return entity.x0("getName")||React.createElement("i",null,"< ",entity.id," >")},m_sa5Selector:function m_sa5Selector(type){var root=window._0_g.root;var selectorType=type?root.x0("get","t_at"):root;var selectorFn=this.actionSelected;this.setState({m_ss8:true,selectorType:selectorType,selectorFn:selectorFn})},_0_j:function _0_j(parent,entity){var entityName=entity;var id=entityName.replace(/\s/g,"");entity=parent.x0("new",id);entity.x0("setName",entityName);return entity},actionSelected:function actionSelected(entity,newType){if(newType){entity=this._0_j(this.state.selectorType,entity)}this.props.data.entity.x0("_a_a",entity,this.state.param);return true},m_cs2:function m_cs2(){this.setState({m_ss8:false})},deleteAction:function deleteAction(id){this.props.data.entity.x0("a_ra",id);var m_ss8=this.state.m_ss8;this.setState({m_ss8:m_ss8})},render:function render(){var _this=this;var behavior=this.props.data.entity;var behaviorName=this.fn0(behavior);var behaviorActions=behavior.x0("_la");if(behaviorActions){var _ret=function(){var actions=[];var self=_this;behaviorActions.forEach(function(action,actionId){var actionName=self.fn0(action);actions.push(React.createElement("div",{className:"row",key:actionId},React.createElement("span",{className:"rel-ref-name"},actionName),React.createElement("span",{className:"details"},React.createElement("button",{className:"c_ab",onClick:self.deleteAction.bind(self,action.id)},React.createElement("i",{className:"fa fa-remove fa-fw red"})," Remove"))))});return{v:React.createElement("div",{className:"_c_bpc"},React.createElement("div",{className:"relc_t1"},"Actions for behavior ",React.createElement("strong",null,"'",behaviorName,"'"),":"),React.createElement("div",{className:"c_rl rel-rows"},React.createElement("div",{className:"rows"},actions)),React.createElement("div",{className:"add-newc_c2"},React.createElement("button",{className:"c_ar",onClick:_this.m_sa5Selector},React.createElement("i",{className:"fa fa-plus blue"})," Add")),React.createElement(Ts_0,{visible:_this.state.m_ss8,onClose:_this.m_cs2,onSelect:_this.state.selectorFn,type:_this.state.selectorType}))}}();if((typeof _ret==="undefined"?"undefined":_typeof(_ret))==="object")return _ret.v}else{return React.createElement("div",{className:"_c_bpc"},"There are no actions for behavior ",React.createElement("strong",null,"'",behaviorName,"'"),".")}}});exports.default=hasActionsPanel;
