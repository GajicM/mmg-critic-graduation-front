import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubePlayer } from './youtube-embed.component';

describe('YoutubeEmbedComponent', () => {
  let component: YoutubePlayer;
  let fixture: ComponentFixture<YoutubePlayer>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YoutubePlayer],
    });
    fixture = TestBed.createComponent(YoutubePlayer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
