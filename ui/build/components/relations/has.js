"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};var hasPanel=React.createClass({_0_n:"hasPanel",getInitialState:function getInitialState(){return{inlineList:null,entitiesState:{},_2_k:false,_2_d:null}},componentWillMount:function componentWillMount(){this.generateInline()},generateInline:function generateInline(){var _this=this;var _l_r=this.props.data.entity.x0("_l_r");if(_l_r&&_l_r.size){(function(){var self=_this;var comps={};_l_r.forEach(function(entity,key){if(entity){var inlinePresenters=entity.x0("_g_r","list<inlineListPresenter>");if(inlinePresenters){var inlinePresenter=inlinePresenters.x0("_g_r","inlineListPresenter");var inlinePresenterUrl=inlinePresenter.x0("_g_r","url");var url=inlinePresenterUrl.entity.id;comps[entity.id]={url:url,entity:entity}}}});SA1.getComponents(comps,function(inlinePresenters){self.setState({"inlineList":inlinePresenters})})})()}},_0_v:function _0_v(entity){return entity.x0("getName")||React.createElement("i",null,"< ",entity.id," > ")},_1_a:function _1_a(parent){var url="/entities/get/"+parent.id;this.props.router.push(url)},handleDetails:function handleDetails(entity){var entitiesState=this.state.entitiesState;if(entitiesState[entity.id]){delete entitiesState[entity.id]}else{entitiesState[entity.id]=true}this.setState({entitiesState:entitiesState})},_2_j:function _2_j(){this._2_k("referenceType",this.referenceTypeSelected)},referenceTypeSelected:function referenceTypeSelected(param){var _2_d=window._0_g.root;var templateRef=this.props.data.entity.x0("_g_r","template");if(templateRef){_2_d=templateRef}var _2_c=this._2_8;this.setState({_2_k:true,_2_d:_2_d,_2_c:_2_c,param:param})},_0_j:function _0_j(parent,entity){var _0_s=entity;var id=_0_s.replace(/\s/g,"");entity=parent.x0("new",id);entity.x0("setName",_0_s);return entity},_2_8:function _2_8(entity,newType){if(newType){entity=this._0_j(this.state._2_d,entity)}this.props.data.entity.x0("_a_r",entity,this.state.param);this.generateInline();return true},_2_k:function _2_k(type,_2_c){var root=window._0_g.root;var _2_d=type?root.x0("get",type):root;this.setState({_2_k:true,_2_d:_2_d,_2_c:_2_c})},_0_i:function _0_i(){this.setState({_2_k:false})},_0_k:function _0_k(id){this.props.data.entity.x0("_rr",id);var _2_k=this.state._2_k;this.generateInline()},showUpdateSelector:function showUpdateSelector(value){var _2_d=value._0_8;var param=void 0;if(_2_d==null){_2_d=value}else{param=value}var _2_c=this._2_v;this.setState({_2_k:true,_2_d:_2_d,_2_c:_2_c,param:param})},_2_v:function _2_v(entity,newType){if(newType){entity=this._0_j(this.state._2_d,entity)}var _0_8=this.state._2_d;if(this.state.param){this.props.data.entity.x0("_rr",this.state.param.id)}var typeRef=_0_8._2_q;var _0_7=_0_8._0_7;var entityUpdate=entity.x0("_nr",typeRef,false,_0_7,_0_8);this.props.data.entity.x0("_u_r",entityUpdate);this.generateInline();return true},render:function render(){var _this2=this;var _l_r=this.props.data.entity.x0("_l_r");var hasNodes=[];var titleMsg="This entity has no references to other entities.";if(_l_r&&_l_r.size){(function(){titleMsg="This entity has references to the following entities: ";var self=_this2;var comps={};_l_r.forEach(function(entity,key){var entityLabel="loading ..";var icon="fa fa-circle-o-notch fa-fw fa-spin";var entityAction=null;var extraInfo=null;var listPresenter=null;var _2_q=null;if(entity){var _0_s=self._0_v(entity);if(_0_s){entityLabel=_0_s;_2_q=self._0_v(entity._2_q);icon="fa fa-fw";if(entity.inherited){icon="fa fa-chevron-circle-down";entityAction=React.createElement("div",null,React.createElement("button",{className:"c_ab",onClick:self.showUpdateSelector.bind(self,entity)},React.createElement("i",{className:"fa fa-edit fa-fw blue"})," Select"));var _0_7Name=self._0_v(entity._0_7);extraInfo=React.createElement("div",null,"Inherited from: ",React.createElement("strong",null,_0_7Name))}else{entityAction=React.createElement("div",null,React.createElement("button",{className:"c_ab",onClick:self._0_k.bind(self,entity.id)},React.createElement("i",{className:"fa fa-remove fa-fw red"})," Remove"));if(entity._0_8){icon="fa fa-dot-circle-o";var _0_8Name=self._0_v(entity._0_8);var __0_7Name=self._0_v(entity._0_7);extraInfo=React.createElement("div",null,"Overwrites: ",React.createElement("strong",null,_0_8Name),"  from ",React.createElement("strong",null,__0_7Name));entityAction=React.createElement("div",null,React.createElement("button",{className:"c_ab",onClick:self._0_k.bind(self,entity.id)},React.createElement("i",{className:"fa fa-remove fa-fw red"})," Remove"),React.createElement("button",{className:"c_ab",onClick:self.showUpdateSelector.bind(self,entity)},React.createElement("i",{className:"fa fa-edit fa-fw blue"})," Select"))}else{icon="fa fa-circle-o"}}}else{entityLabel="Error loading entity.";icon="fa fa-exclamation fa-fw fa-red";entityAction=React.createElement("button",{className:"report-rel"},React.createElement("i",{className:"fa fa-send fa-fw red"})," Report")}var listMarker="";var InlineListPresenter=void 0;if(self.state.inlineList&&self.state.inlineList[entity.id]){InlineListPresenter=self.state.inlineList[entity.id].component;listMarker=": List"}var details=self.props.data.details;var rowFooterVisible=details&&details=="show"||self.state.entitiesState[entity.id]?"show":"hide";var data={entity:entity,details:details};hasNodes.push(React.createElement("div",{className:"row",key:key},React.createElement("span",{className:"rel-ref-name"},React.createElement("i",{className:icon,onClick:self.handleDetails.bind(self,entity)},"  "),entityLabel," ",listMarker),React.createElement("span",{className:"details right"},entityAction),React.createElement("div",{className:"c_rf "+rowFooterVisible},"Path: ",React.createElement(E__0,{data:entity,onClick:self._1_a}),React.createElement("div",null,"Tag: ",_2_q),extraInfo),InlineListPresenter?React.createElement(InlineListPresenter,_extends({},self.props,{data:data,readOnly:entity.inherited})):null))}})})()}return React.createElement("div",{className:"relation-panelc_c0"},React.createElement("div",{className:"rel-title"},titleMsg),React.createElement("div",{className:"c_rl rel-rows"},React.createElement("div",{className:"rows"},hasNodes)),React.createElement("div",{className:"add-newc_c2"},React.createElement("button",{className:"c_ab",onClick:this._2_j},React.createElement("i",{className:"fa fa-plus blue"})," Add")),React.createElement(T__1,{visible:this.state._2_k,onClose:this._0_i,onSelect:this.state._2_c,type:this.state._2_d}))}});exports.default=hasPanel;
