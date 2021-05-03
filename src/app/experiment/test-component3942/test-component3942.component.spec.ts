import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3942Component } from './test-component3942.component';

describe('TestComponent3942Component', () => {
  let component: TestComponent3942Component;
  let fixture: ComponentFixture<TestComponent3942Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3942Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3942Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
