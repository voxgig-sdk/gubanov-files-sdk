<?php
declare(strict_types=1);

// GubanovFiles SDK base feature

class GubanovFilesBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(GubanovFilesContext $ctx, array $options): void {}
    public function PostConstruct(GubanovFilesContext $ctx): void {}
    public function PostConstructEntity(GubanovFilesContext $ctx): void {}
    public function SetData(GubanovFilesContext $ctx): void {}
    public function GetData(GubanovFilesContext $ctx): void {}
    public function GetMatch(GubanovFilesContext $ctx): void {}
    public function SetMatch(GubanovFilesContext $ctx): void {}
    public function PrePoint(GubanovFilesContext $ctx): void {}
    public function PreSpec(GubanovFilesContext $ctx): void {}
    public function PreRequest(GubanovFilesContext $ctx): void {}
    public function PreResponse(GubanovFilesContext $ctx): void {}
    public function PreResult(GubanovFilesContext $ctx): void {}
    public function PreDone(GubanovFilesContext $ctx): void {}
    public function PreUnexpected(GubanovFilesContext $ctx): void {}
}
