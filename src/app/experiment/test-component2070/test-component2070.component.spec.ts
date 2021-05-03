import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2070Component } from './test-component2070.component';

describe('TestComponent2070Component', () => {
  let component: TestComponent2070Component;
  let fixture: ComponentFixture<TestComponent2070Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2070Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2070Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
