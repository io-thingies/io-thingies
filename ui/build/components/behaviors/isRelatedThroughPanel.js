"use strict";Object.defineProperty(exports,"__esModule",{value:true});var RelationsPanel=React.createClass({_0_n:"RelationsPanel",getInitialState:function getInitialState(){return{editMode:this.props.edit}},componentWillMount:function componentWillMount(){var relations=this.props.data.entity.x0("listRelations");var self=this;var relEntityIds=[];var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=relations.list[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var r=_step.value;relEntityIds.push(r.id)}}catch(err){_didIteratorError=true;_iteratorError=err}finally{try{if(!_iteratorNormalCompletion&&_iterator.return){_iterator.return()}}finally{if(_didIteratorError){throw _iteratorError}}}SA1.getEntities(relEntityIds,function(relEntityList){var comps={};var _iteratorNormalCompletion2=true;var _didIteratorError2=false;var _iteratorError2=undefined;try{for(var _iterator2=relEntityList[Symbol.iterator](),_step2;!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=true){var relEntity=_step2.value;comps[relEntity.id]=relEntity;var urls=relEntity.x0("listPresenters");comps[relEntity.id]["url"]=urls.default}}catch(err){_didIteratorError2=true;_iteratorError2=err}finally{try{if(!_iteratorNormalCompletion2&&_iterator2.return){_iterator2.return()}}finally{if(_didIteratorError2){throw _iteratorError2}}}SA1.getComponents(comps,function(rList){self.setState({"rels":rList})})})},_1_d:function _1_d(){var listItems=[];for(var i in this.state.rels){var b=this.state.rels[i];var name=b.x0("getName");listItems.push(React.createElement("li",{className:"c_i0",key:b.id},name))}return React.createElement(L__0,{title:"Relations",name:"relation"},listItems)},_1_4:function _1_4(edit){this.setState({"editMode":edit})},handleBehaviorTabChange:function handleBehaviorTabChange(newTab,index){this.setState({"activeRelTab":index})},render:function render(){var tabPanels=[];if(this.state.rels){var activeRelTab=this.state.activeRelTab;for(var c in this.state.rels){var b=this.state.rels[c];if(!activeRelTab){activeRelTab=0}var _0_s=b.x0("getName");b.component.props={"label":_0_s,"key":b.id,"tabsOnly":false,"data":this.props.entity.data,"edit":this.state.editMode,"entity":this.props.entity};tabPanels.push(b.component)}};return React.createElement("div",{className:"relation-behavior-panelc_c0"},React.createElement(T__0,{name:"std-tabs",label:"Relation",_2_3:this.handleBehaviorTabChange,get_2_f:this.state.editMode?this._1_d:undefined},tabPanels))}});exports.default=RelationsPanel;
