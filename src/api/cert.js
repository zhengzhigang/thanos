import request from '@/utils/request'

// 获取房产认证列表
export function getHouseList(params = {}) {
  return request({
    url: '/adminApi/admin/house/listNeedVerify',
    method: 'get',
    params
  })
}

// 房产认证
export function certHouse(data = {}) {
  return request({
    url: `/adminApi/admin/house/verifyHouse?houseDetailId=${data.houseDetailId}&status=${data.status}`,
    method: 'post'
  })
}

// 实名认证列表
export function getAuthNameList(params = {}) {
  return request({
    url: '/adminApi/admin/identify/listNeedVerify',
    method: 'get',
    params
  })
}

// 提交身份信息
export function inputAccountInfo(data = {}) {
  return request({
    url: `/adminApi/admin/identify/inputAccountInfo?accId=${data.accId}&idNo=${data.idNo}&realName=${data.realName}`,
    method: 'post'
  })
}

// 学历认证列表
export function getEduList(params = {}) {
  return request({
    url: '/adminApi/admin/edu/listNeedVerify',
    method: 'get',
    params
  })
}

// 认证学历
export function certEdu(data = {}) {
  return request({
    url: `/adminApi/admin/edu/verifyEdu?eduDetailId=${data.eduDetailId}&status=${data.status}`,
    method: 'post'
  })
}

// 精选照片审核列表
export function getPhotoList(params = {}) {
  return request({
    url: '/adminApi/admin/selectPic/listNeedVerifyAccount',
    method: 'get',
    params
  })
}

// 审核精选照片详情页
export function certPhotoDetails(params = {}) {
  return request({
    url: '/adminApi/admin/selectPic/listSelectPicByAccId',
    method: 'get',
    params
  })
}

// 审核一张精选图片
export function certPhoto(data = {}) {
  return request({
    url: `/adminApi/admin/selectPic/verifyOneSelectPic?selectPicId=${data.selectPicId}&status=${data.status}`,
    method: 'post'
  })
}

// 提现列表
export function getWithdrawList(params = {}) {
  return request({
    url: '/adminApi/admin/withDraw/listNeedVerifyWithDraw',
    method: 'get',
    params
  })
}

// 提现详情
export function withdrawDetails(params = {}) {
  return request({
    url: '/adminApi/admin/withDraw/getNeedVerifyWithDrawInfo',
    method: 'get',
    params
  })
}

// 审核一条提现记录
export function certWithDraw(data = {}) {
  return request({
    url: `/adminApi/admin/withDraw/verifyOneWithDraw?withDrawId=${data.withDrawId}&status=${data.status}`,
    method: 'post'
  })
}

// 获取头像审核列表
export function getAvatarList(params = {}) {
  return request({
    url: '/adminApi/admin/avatar/listNeedVerify',
    method: 'get',
    params
  })
}

// 审核一条头像记录
export function certAvatar(data = {}) {
  return request({
    url: `/adminApi/admin/avatar/verifyAvatar?accId=${data.accId}&status=${data.status}`,
    method: 'post'
  })
}

// 获取合伙人邀请信息
export function getPartnerInfo(params = {}) {
  return request({
    url: `/adminApi/admin/partner/statByMobile`,
    method: 'get',
    params
  })
}

// 获取真人认正列表
export function getZrList(params = {}) {
  return request({
    url: `/adminApi/admin/identify/listZrNeedVerify`,
    method: 'get',
    params
  })
}

// 获取实名认正列表
export function getSmList(params = {}) {
  return request({
    url: `/adminApi/admin/identify/listIdNeedVerify`,
    method: 'get',
    params
  })
}

// 真人认证接口
export function certPoseImg(data = {}) {
  return request({
    url: `/adminApi/admin/identify/verifyPose?accId=${data.accId}&poseStatus=${data.poseStatus}`,
    method: 'post'
  })
}

// 实名认证接口
export function certCardImg(data = {}) {
  return request({
    url: `/adminApi/admin/identify/verifyId?accId=${data.accId}&idStatus=${data.idStatus}`,
    method: 'post'
  })
}
