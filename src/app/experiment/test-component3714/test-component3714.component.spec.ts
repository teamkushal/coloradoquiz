import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3714Component } from './test-component3714.component';

describe('TestComponent3714Component', () => {
  let component: TestComponent3714Component;
  let fixture: ComponentFixture<TestComponent3714Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3714Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3714Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
