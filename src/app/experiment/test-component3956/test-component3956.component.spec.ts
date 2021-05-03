import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3956Component } from './test-component3956.component';

describe('TestComponent3956Component', () => {
  let component: TestComponent3956Component;
  let fixture: ComponentFixture<TestComponent3956Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3956Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3956Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
