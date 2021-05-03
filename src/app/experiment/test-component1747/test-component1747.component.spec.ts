import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1747Component } from './test-component1747.component';

describe('TestComponent1747Component', () => {
  let component: TestComponent1747Component;
  let fixture: ComponentFixture<TestComponent1747Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1747Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1747Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
