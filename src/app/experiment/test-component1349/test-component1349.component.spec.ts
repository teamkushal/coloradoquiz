import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1349Component } from './test-component1349.component';

describe('TestComponent1349Component', () => {
  let component: TestComponent1349Component;
  let fixture: ComponentFixture<TestComponent1349Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1349Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1349Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
