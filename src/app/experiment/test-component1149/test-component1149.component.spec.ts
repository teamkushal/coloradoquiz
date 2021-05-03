import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1149Component } from './test-component1149.component';

describe('TestComponent1149Component', () => {
  let component: TestComponent1149Component;
  let fixture: ComponentFixture<TestComponent1149Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1149Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1149Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
