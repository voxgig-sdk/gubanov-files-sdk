-- Typed models for the GubanovFiles SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
-- params (op.<name>.points[].g.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Avatar

---@class AvatarLoadMatch

---@class Mention
---@field content string
---@field content_en string
---@field content_ru? string
---@field content_ua string
---@field date string
---@field dateFormatted string
---@field id string
---@field sourceName string
---@field sourceUrl string
---@field title string
---@field title_en string
---@field title_ru? string
---@field title_ua string

---@class MentionListMatch
---@field content? string
---@field content_en? string
---@field content_ru? string
---@field content_ua? string
---@field date? string
---@field dateFormatted? string
---@field id? string
---@field sourceName? string
---@field sourceUrl? string
---@field title? string
---@field title_en? string
---@field title_ru? string
---@field title_ua? string

---@class Status

---@class StatusLoadMatch

local M = {}

return M
