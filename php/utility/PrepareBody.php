<?php
declare(strict_types=1);

// GubanovFiles SDK utility: prepare_body

require_once __DIR__ . '/Media.php';

class GubanovFilesPrepareBody
{
    public static function call(GubanovFilesContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            if (GubanovFilesMedia::isRawRequest($ctx->point)) {
                return GubanovFilesMedia::rawBody($ctx->reqdata);
            }
            $body = ($ctx->utility->transform_request)($ctx);
            // PHP cannot tell an empty map from an empty list, and this
            // vendored struct answers [] where the canonical transform
            // answers NO VALUE for a reference that resolves to nothing -
            // collapse both to "no body" (the shared corpus pins the
            // missing-reference case to null).
            return (is_array($body) && 0 === count($body)) ? null : $body;
        }
        return null;
    }
}
