import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3984Component } from './test-component3984.component';

describe('TestComponent3984Component', () => {
  let component: TestComponent3984Component;
  let fixture: ComponentFixture<TestComponent3984Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3984Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3984Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
