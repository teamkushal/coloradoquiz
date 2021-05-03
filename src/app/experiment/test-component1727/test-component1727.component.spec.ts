import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1727Component } from './test-component1727.component';

describe('TestComponent1727Component', () => {
  let component: TestComponent1727Component;
  let fixture: ComponentFixture<TestComponent1727Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1727Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1727Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
