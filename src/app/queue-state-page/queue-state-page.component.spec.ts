import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueStatePageComponent } from './queue-state-page.component';

describe('QueueStatePageComponent', () => {
  let component: QueueStatePageComponent;
  let fixture: ComponentFixture<QueueStatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueueStatePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueueStatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
