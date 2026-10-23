# Typed models for the GubanovFiles SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Avatar(TypedDict):
    pass


class AvatarLoadMatch(TypedDict):
    pass


class MentionRequired(TypedDict):
    content: str
    content_en: str
    content_ua: str
    date: str
    dateFormatted: str
    id: str
    sourceName: str
    sourceUrl: str
    title: str
    title_en: str
    title_ua: str


class Mention(MentionRequired, total=False):
    content_ru: str
    title_ru: str


class MentionListMatch(TypedDict, total=False):
    content: str
    content_en: str
    content_ru: str
    content_ua: str
    date: str
    dateFormatted: str
    id: str
    sourceName: str
    sourceUrl: str
    title: str
    title_en: str
    title_ru: str
    title_ua: str


class Status(TypedDict):
    pass


class StatusLoadMatch(TypedDict):
    pass
