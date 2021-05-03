import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1979Component } from './test-component1979.component';

describe('TestComponent1979Component', () => {
  let component: TestComponent1979Component;
  let fixture: ComponentFixture<TestComponent1979Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1979Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1979Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
