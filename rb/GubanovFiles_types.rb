# frozen_string_literal: true

# Typed models for the GubanovFiles SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Avatar entity data model.
class Avatar
end

# Request payload for Avatar#load.
class AvatarLoadMatch
end

# Mention entity data model.
#
# @!attribute [rw] content
#   @return [String]
#
# @!attribute [rw] content_en
#   @return [String]
#
# @!attribute [rw] content_ru
#   @return [String, nil]
#
# @!attribute [rw] content_ua
#   @return [String]
#
# @!attribute [rw] date
#   @return [String]
#
# @!attribute [rw] dateFormatted
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] sourceName
#   @return [String]
#
# @!attribute [rw] sourceUrl
#   @return [String]
#
# @!attribute [rw] title
#   @return [String]
#
# @!attribute [rw] title_en
#   @return [String]
#
# @!attribute [rw] title_ru
#   @return [String, nil]
#
# @!attribute [rw] title_ua
#   @return [String]
Mention = Struct.new(
  :content,
  :content_en,
  :content_ru,
  :content_ua,
  :date,
  :dateFormatted,
  :id,
  :sourceName,
  :sourceUrl,
  :title,
  :title_en,
  :title_ru,
  :title_ua,
  keyword_init: true
)

# Request payload for Mention#list.
#
# @!attribute [rw] content
#   @return [String, nil]
#
# @!attribute [rw] content_en
#   @return [String, nil]
#
# @!attribute [rw] content_ru
#   @return [String, nil]
#
# @!attribute [rw] content_ua
#   @return [String, nil]
#
# @!attribute [rw] date
#   @return [String, nil]
#
# @!attribute [rw] dateFormatted
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] sourceName
#   @return [String, nil]
#
# @!attribute [rw] sourceUrl
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] title_en
#   @return [String, nil]
#
# @!attribute [rw] title_ru
#   @return [String, nil]
#
# @!attribute [rw] title_ua
#   @return [String, nil]
MentionListMatch = Struct.new(
  :content,
  :content_en,
  :content_ru,
  :content_ua,
  :date,
  :dateFormatted,
  :id,
  :sourceName,
  :sourceUrl,
  :title,
  :title_en,
  :title_ru,
  :title_ua,
  keyword_init: true
)

# Status entity data model.
class Status
end

# Request payload for Status#load.
class StatusLoadMatch
end

