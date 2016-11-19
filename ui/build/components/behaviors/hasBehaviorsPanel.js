"use strict";Object.defineProperty(exports,"__esModule",{value:true});var hasBehaviorsPanel=React.createClass({_0_n:"hasBehaviorsPanel",getInitialState:function getInitialState(){return{showBehaviorsSelector:false}},clickAction:function clickAction(action){if(this.props.edit){if(this[action.id]){this[action.id]()}}else{window.alert("Actions can be x0d only when editing.")}},deleteEntity:function deleteEntity(){SA1.removeEntity(this.props.data.entity.id);window.history.back()},_a_b:function _a_b(){this.setState({showBehaviorsSelector:true})},closeBehaviorSelector:function closeBehaviorSelector(){this.setState({showBehaviorsSelector:false})},selectBehavior:function selectBehavior(behavior){this.props.data.entity.x0("_a_b",behavior);if(this.props.onUpdate){this.props.onUpdate()}},render:function render(){var _this=this;var behaviorList=[];var ownBehaviors=this.props.data.entity.x0("_lb");var behaviors=this.props.data.entity.x0("_lab");behaviors.forEach(function(behavior,behaviorId){var behaviorName=behavior.x0("getName")||React.createElement("i",null,"< ",behaviorId," >");var actionList=[];var behaviorActionList=behavior.x0("_la");if(behaviorActionList){behaviorActionList.forEach(function(action,actionId){var actionName=action.x0("getName")||React.createElement("i",null,"< ",actionId," >");var style="";actionList.push(React.createElement("div",{key:action.id,title:action.id,onClick:_this.clickAction.bind(_this,action),className:style},actionName))})}var own=ownBehaviors&&ownBehaviors.has(behaviorId);var ownClassName=own?" strong":"";behaviorList.push(React.createElement("li",{className:"row",key:behavior.id},React.createElement("div",{className:"main width"+ownClassName,title:behavior.id},behaviorName),React.createElement("div",{className:"details"},actionList)))});return React.createElement("div",{className:"behavior-panelc_c0"},React.createElement("strong",null,"Behaviors")," is a meta ( self-referencing ) behavior through which you can add or delete other behaviors. It also makes the entity actionable.",React.createElement("strong",null,"Allow pivoting, where you can re-order by priority!"),React.createElement("div",{className:"c_rl"},React.createElement("div",{className:"head strong"},React.createElement("div",{className:"row"},React.createElement("div",{className:"main width"},"Behavior"),React.createElement("div",{className:"detail"},"Actions"))),React.createElement("ul",{className:"rows"},behaviorList)))}});exports.default=hasBehaviorsPanel;
