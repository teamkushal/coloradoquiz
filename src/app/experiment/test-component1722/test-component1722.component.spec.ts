import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1722Component } from './test-component1722.component';

describe('TestComponent1722Component', () => {
  let component: TestComponent1722Component;
  let fixture: ComponentFixture<TestComponent1722Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1722Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1722Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
