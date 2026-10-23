<?php
declare(strict_types=1);

// Typed models for the GubanovFiles SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Avatar entity data model. */
class Avatar
{
}

/** Request payload for Avatar#load. */
class AvatarLoadMatch
{
}

/** Mention entity data model. */
class Mention
{
    public string $content;
    public string $content_en;
    public ?string $content_ru = null;
    public string $content_ua;
    public string $date;
    public string $dateFormatted;
    public string $id;
    public string $sourceName;
    public string $sourceUrl;
    public string $title;
    public string $title_en;
    public ?string $title_ru = null;
    public string $title_ua;
}

/** Request payload for Mention#list. */
class MentionListMatch
{
    public ?string $content = null;
    public ?string $content_en = null;
    public ?string $content_ru = null;
    public ?string $content_ua = null;
    public ?string $date = null;
    public ?string $dateFormatted = null;
    public ?string $id = null;
    public ?string $sourceName = null;
    public ?string $sourceUrl = null;
    public ?string $title = null;
    public ?string $title_en = null;
    public ?string $title_ru = null;
    public ?string $title_ua = null;
}

/** Status entity data model. */
class Status
{
}

/** Request payload for Status#load. */
class StatusLoadMatch
{
}

