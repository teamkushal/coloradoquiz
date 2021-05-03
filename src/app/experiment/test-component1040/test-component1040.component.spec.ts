import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1040Component } from './test-component1040.component';

describe('TestComponent1040Component', () => {
  let component: TestComponent1040Component;
  let fixture: ComponentFixture<TestComponent1040Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1040Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1040Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
