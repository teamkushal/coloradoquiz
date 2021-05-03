import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1374Component } from './test-component1374.component';

describe('TestComponent1374Component', () => {
  let component: TestComponent1374Component;
  let fixture: ComponentFixture<TestComponent1374Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1374Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1374Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
