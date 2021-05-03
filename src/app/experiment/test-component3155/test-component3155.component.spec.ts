import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3155Component } from './test-component3155.component';

describe('TestComponent3155Component', () => {
  let component: TestComponent3155Component;
  let fixture: ComponentFixture<TestComponent3155Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3155Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3155Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
