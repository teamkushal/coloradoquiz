import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3055Component } from './test-component3055.component';

describe('TestComponent3055Component', () => {
  let component: TestComponent3055Component;
  let fixture: ComponentFixture<TestComponent3055Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3055Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3055Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
