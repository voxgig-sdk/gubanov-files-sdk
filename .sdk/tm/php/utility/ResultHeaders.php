<?php
declare(strict_types=1);

// GubanovFiles SDK utility: result_headers

class GubanovFilesResultHeaders
{
    public static function call(GubanovFilesContext $ctx): ?GubanovFilesResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
