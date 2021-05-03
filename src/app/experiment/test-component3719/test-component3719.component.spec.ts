import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3719Component } from './test-component3719.component';

describe('TestComponent3719Component', () => {
  let component: TestComponent3719Component;
  let fixture: ComponentFixture<TestComponent3719Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3719Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3719Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
