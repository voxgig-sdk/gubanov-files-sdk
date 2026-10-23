<?php
declare(strict_types=1);

// GubanovFiles SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class GubanovFilesMakeContext
{
    public static function call(array $ctxmap, ?GubanovFilesContext $basectx): GubanovFilesContext
    {
        return new GubanovFilesContext($ctxmap, $basectx);
    }
}
