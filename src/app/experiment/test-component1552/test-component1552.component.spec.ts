import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1552Component } from './test-component1552.component';

describe('TestComponent1552Component', () => {
  let component: TestComponent1552Component;
  let fixture: ComponentFixture<TestComponent1552Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1552Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1552Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
