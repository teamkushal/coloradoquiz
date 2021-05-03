import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1422Component } from './test-component1422.component';

describe('TestComponent1422Component', () => {
  let component: TestComponent1422Component;
  let fixture: ComponentFixture<TestComponent1422Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1422Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1422Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
