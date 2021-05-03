import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1501Component } from './test-component1501.component';

describe('TestComponent1501Component', () => {
  let component: TestComponent1501Component;
  let fixture: ComponentFixture<TestComponent1501Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1501Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1501Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
