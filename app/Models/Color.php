<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Color extends Model
{
    use HasFactory;

    protected $fillable = [
        'hue',
        'saturation',
        'luminance',
    ];

    public function palettes(): HasMany
    {
        return $this->hasMany(Palette::class);
    }
}
