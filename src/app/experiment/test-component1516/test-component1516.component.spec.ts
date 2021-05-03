import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1516Component } from './test-component1516.component';

describe('TestComponent1516Component', () => {
  let component: TestComponent1516Component;
  let fixture: ComponentFixture<TestComponent1516Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1516Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1516Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
