import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1274Component } from './test-component1274.component';

describe('TestComponent1274Component', () => {
  let component: TestComponent1274Component;
  let fixture: ComponentFixture<TestComponent1274Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1274Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1274Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
