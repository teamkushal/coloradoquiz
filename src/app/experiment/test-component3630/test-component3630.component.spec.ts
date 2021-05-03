import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3630Component } from './test-component3630.component';

describe('TestComponent3630Component', () => {
  let component: TestComponent3630Component;
  let fixture: ComponentFixture<TestComponent3630Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3630Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3630Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
