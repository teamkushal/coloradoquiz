import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3400Component } from './test-component3400.component';

describe('TestComponent3400Component', () => {
  let component: TestComponent3400Component;
  let fixture: ComponentFixture<TestComponent3400Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3400Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3400Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
