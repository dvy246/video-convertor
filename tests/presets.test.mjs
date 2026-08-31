import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { 
  PRESETS, 
  calculateWhatsAppBitrateArgs, 
  FORMAT_DETAILS 
} from '../src/lib/ffmpeg/presets.ts';

describe('FFmpeg Presets & Engine Logic', () => {
  it('should define all 10 expected presets', () => {
    const expectedPresets = [
      'balanced',
      'high_quality',
      'small_size',
      'compress_balanced',
      'compress_extreme',
      'whatsapp',
      'instagram_reels',
      'resize_1080p',
      'audio_mp3',
      'gif_standard'
    ];
    for (const id of expectedPresets) {
      assert.ok(PRESETS[id], `Missing preset: ${id}`);
      assert.ok(typeof PRESETS[id].getArgs === 'function', `Preset ${id} has no getArgs function`);
    }
  });

  it('instagram_reels preset MUST contain 9:16 vertical scaling and padding filter', () => {
    const args = PRESETS.instagram_reels.getArgs('input.mp4', 'output.mp4');
    const vfIndex = args.indexOf('-vf');
    assert.ok(vfIndex !== -1, 'instagram_reels preset must include -vf flag');
    const filterValue = args[vfIndex + 1];
    assert.match(filterValue, /scale=1080:1920/);
    assert.match(filterValue, /pad=1080:1920/);
  });

  it('calculateWhatsAppBitrateArgs calculates safe dynamic bitrate within WhatsApp limits (<14.5MB)', () => {
    // 60 seconds video
    const args60 = calculateWhatsAppBitrateArgs('input.mp4', 'output.mp4', 60);
    const bIndex = args60.indexOf('-b:v');
    assert.ok(bIndex !== -1);
    const bitrateStr = args60[bIndex + 1];
    const bitrateK = parseInt(bitrateStr.replace('k', ''), 10);
    assert.ok(bitrateK >= 350 && bitrateK <= 2200, `Bitrate ${bitrateK}k out of expected range`);
    
    // Very short video (5s) -> should be capped at max 2200k
    const args5 = calculateWhatsAppBitrateArgs('input.mp4', 'output.mp4', 5);
    const bIndex5 = args5.indexOf('-b:v');
    assert.equal(args5[bIndex5 + 1], '2200k');

    // Very long video (600s) -> should be clamped at min 350k
    const args600 = calculateWhatsAppBitrateArgs('input.mp4', 'output.mp4', 600);
    const bIndex600 = args600.indexOf('-b:v');
    assert.equal(args600[bIndex600 + 1], '350k');
  });

  it('audio_mp3 preset extracts high quality LAME MP3 (192 kbps)', () => {
    const args = PRESETS.audio_mp3.getArgs('input.mp4', 'output.mp3');
    assert.ok(args.includes('-vn'), 'Must discard video stream (-vn)');
    assert.ok(args.includes('libmp3lame'), 'Must use libmp3lame codec');
    assert.ok(args.includes('192k'), 'Must use 192k bitrate');
  });

  it('gif_standard preset creates 12fps animated GIF with Bayer palette', () => {
    const args = PRESETS.gif_standard.getArgs('input.mp4', 'output.gif');
    assert.ok(args.includes('-vf'));
    const vfIndex = args.indexOf('-vf');
    const filter = args[vfIndex + 1];
    assert.match(filter, /fps=12/);
    assert.match(filter, /palettegen/);
    assert.match(filter, /paletteuse/);
  });

  it('FORMAT_DETAILS contains all supported target formats and valid descriptions', () => {
    const formats = ['mp4', 'webm', 'mp3', 'gif'];
    for (const fmt of formats) {
      assert.ok(FORMAT_DETAILS[fmt], `Missing format details for ${fmt}`);
      assert.ok(FORMAT_DETAILS[fmt].label);
      assert.ok(FORMAT_DETAILS[fmt].description);
      // Ensure no 100% claims in format descriptions
      assert.ok(!FORMAT_DETAILS[fmt].description.includes('100%'), `Format ${fmt} contains 100% claim`);
    }
  });
});
