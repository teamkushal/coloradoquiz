import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3997Component } from './test-component3997.component';

describe('TestComponent3997Component', () => {
  let component: TestComponent3997Component;
  let fixture: ComponentFixture<TestComponent3997Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3997Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3997Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
