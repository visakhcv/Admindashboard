import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaChatComponent } from './area-chat.component';

describe('AreaChatComponent', () => {
  let component: AreaChatComponent;
  let fixture: ComponentFixture<AreaChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
