import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2393Component } from './test-component2393.component';

describe('TestComponent2393Component', () => {
  let component: TestComponent2393Component;
  let fixture: ComponentFixture<TestComponent2393Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2393Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2393Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
